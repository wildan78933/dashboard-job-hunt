import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import OverviewForm from "@/components/forms/OverviewForm";
import SocialMedia from "@/components/forms/SocialMediaForm";
import TeamForm from "@/components/forms/TeamForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getServerSession } from "next-auth";
import React, { FC } from "react";
import prisma from "../../../../lib/prisma";

interface SettingsPageProps {}

async function getDetailCompany() {
  const session = await getServerSession(authOptions);

  const company = await prisma.company.findFirst({
    where: { id: session?.user.id },
    include: {
      Companyoverview: true,
      companySocialMedia: true,
      companyTeam: true,
    },
  });

  return company;
}

const SettingsPage: FC<SettingsPageProps> = async ({}) => {
  const company = await getDetailCompany();
  console.log(company);

  return (
    <div>
      <div className="font-semibold text-3xl mb-5">Settings</div>

      <Tabs defaultValue="applicants">
        <TabsList className="mb-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="sociallinks">Social Links</TabsTrigger>
          <TabsTrigger value="teams">Teams</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <OverviewForm detail={company?.Companyoverview[0]} />
        </TabsContent>
        <TabsContent value="sociallinks">
          <SocialMedia detail={company?.companySocialMedia[0]} />
        </TabsContent>
        <TabsContent value="teams">
          <TeamForm teams={company?.companyTeam} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SettingsPage;
