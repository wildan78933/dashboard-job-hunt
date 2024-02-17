// "use client"

import { JOBTYPES } from "@/constans";
import { z } from "zod";

export const jobFormSchema = z.object({
  roles: z.string({ required_error: "Job Title is required" }).min(3, {
    message: "Job title must be at least 3 characther",
  }),
  jobType: z.enum(JOBTYPES, {
    required_error: "You need to select a job type",
  }),
  salaryFrom: z.string({ required_error: "Salary From is required" }),
  salaryTo: z.string({ required_error: "Salary From is required" }),
  categoryId: z.string({ required_error: "You need to select a Category" }),
  requiredSkills: z
    .string()
    .array()
    .nonempty({ message: "Required skill must be at least 1 skill" }),
  jobDescription: z
    .string({ required_error: "Job Description is required" })
    .min(10, { message: "Job Description must be at least 10 characthers" }),
  responsibility: z
    .string({ required_error: " Responsibility is required" })
    .min(10, { message: " Responsibility must be at least 10 characthers" }),
  whoYouAre: z
    .string({ required_error: "Who You Are is required" })
    .min(10, { message: " Who You Are must be at least 10 characthers" }),
  niceToHaves: z
    .string({ required_error: " Nice to Have is required" })
    .min(10, { message: " Nice to Have must be at least 10 characthers" }),
  benefits: z
    .object({
      benefit: z.string(),
      description: z.string(),
    })
    .array()
    .nonempty({ message: "benefits must be at least 1 benefits" }),
});
