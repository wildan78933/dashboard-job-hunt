import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import React, { FC } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Applicants from "@/components/organisms/Applicants";
import JobDetail from "@/components/organisms/JobDetails";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "../../../../../lib/prisma";

type paramsType = {
  id: string;
};

interface JobtDetailPageProps {
  params: paramsType;
}

async function getDetailJob(id: string) {
  const job = await prisma.job.findFirst({
    where: {
      id: id,
    },
    include: {
      applicant: {
        include: {
          user: true,
        },
      },
      CategoryJob: true,
    },
  });

  return job;
}

const JobtDetailPage: FC<JobtDetailPageProps> = async ({ params }) => {
  const session = await getServerSession(authOptions);

  const job = await getDetailJob(params.id);
  console.log(job);

  return (
    <div>
      <div className="inline-flex items-center gap-5 mb-5">
        <div>
          <Link href="/job-listings">
            <ArrowLeftIcon className="w-9 h-9"></ArrowLeftIcon>
          </Link>
        </div>
        <div>
          <div className="text-2xl font-semibold mb-1">{job?.roles}</div>
          <div>
            {job?.CategoryJob?.name} . {job?.jobType} . {job?.applicants} /{" "}
            {job?.needs}
            {job?.needs} Hired
          </div>
        </div>
      </div>
      <Tabs defaultValue="applicants">
        <TabsList className="mb-8">
          <TabsTrigger value="applicants">Applicants</TabsTrigger>
          <TabsTrigger value="jobDetails">Job Details</TabsTrigger>
        </TabsList>
        <TabsContent value="applicants">
          <Applicants applicants={job?.applicants} />
        </TabsContent>
        <TabsContent value="jobDetails">
          <JobDetail detail={job} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default JobtDetailPage;
