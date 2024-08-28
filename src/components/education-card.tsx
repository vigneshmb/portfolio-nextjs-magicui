import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";

interface EducationCardProps {
  schoolLogo: string;
  schoolLogoAltText: string;
  schoolName: string;
  schoolLocation?: string;
  schoolURL?: string;
  period: string;
  schoolDegree?: string;
}

export const EducationCard = ({
  schoolLogo,
  schoolLogoAltText,
  schoolName,
  schoolLocation,
  schoolURL,
  period,
  schoolDegree,
}: EducationCardProps) => {
  return (
    <Link href={schoolURL || "#"} className="block cursor-pointer">
      <Card className="flex">
        <div className="flex-none">
          <Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
            <AvatarImage
              src={schoolLogo}
              alt={schoolLogoAltText}
              className="object-contain"
            />
            <AvatarFallback>{schoolLogoAltText[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-grow ml-4 items-center flex-col group">
          <CardHeader className=" uppercase">{schoolDegree}</CardHeader>
          <CardContent className="mt-1 text-xs sm:text-sm hover:text-slate-700 dark:hover:text-zinc-200">
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="inline-flex items-center justify-center leading-none text-xs sm:text-sm">
                {schoolName}
                <ChevronRightIcon className="size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100" />
              </h3>
              <div className="text-xs sm:text-sm tabular-nums text-right">
                {period}
              </div>
            </div>
            {schoolLocation && (
              <div className="font-sans text-xs">{schoolLocation}</div>
            )}
          </CardContent>
        </div>
      </Card>
    </Link>
  );
};

