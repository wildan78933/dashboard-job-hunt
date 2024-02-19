import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { JOB_APPLICANT_COLUMNS, JOB_APPLICANT_DATA } from "@/constans";
import React, { FC } from "react";
import ButtonActionTable from "../ButtonActionTable";

interface ApplicantsProps {}

const Applicants: FC<ApplicantsProps> = ({}) => {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          {JOB_APPLICANT_COLUMNS.map((item: string, i: number) => (
            <TableHead key={item + 1}>{item}</TableHead>
          ))}
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {JOB_APPLICANT_DATA.map((item: any, i: number) => (
          <TableRow key={item.name + i}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.appliedDate}</TableCell>

            <TableCell>
              <ButtonActionTable url="/job-detail/1" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default Applicants;
