import OverviewForm from "@/components/forms/OverviewForm";
import SocialMedia from "@/components/forms/SocialMediaForm";
import TeamForm from "@/components/forms/TeamForm";
import Applicants from "@/components/organisms/Applicants";
import JobDetail from "@/components/organisms/JobDetails";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { FC } from "react";

interface SettingsPageProps {}

const SettingsPage: FC<SettingsPageProps> = ({}) => {
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
          <OverviewForm />
        </TabsContent>
        <TabsContent value="sociallinks">
          <SocialMedia />
        </TabsContent>
        <TabsContent value="teams">
          <TeamForm />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SettingsPage;
