import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface WorkExpCardProps {
  companyName: string;
  companyTechStack?: readonly string[];
  companyURL: string;
  companyLogo: string;
  companyLocation: string;
  companyDuration: string;
  positions?: readonly {
    title: string;
    start: string;
    end: string;
    description: string;
  }[];
}

export const WorkExpCard = ({
  companyName,
  companyTechStack,
  companyURL,
  companyLogo,
  companyLocation,
  companyDuration,
  positions,
}: WorkExpCardProps) => {
  return (
    <li className="relative ml-10 py-4">
      <div className="absolute -left-16 top-1 flex items-center justify-center bg-white rounded-full hover:ring-2 hover:ring-emerald-300">
        <Avatar className="border size-12 m-auto">
          <AvatarImage
            src={companyLogo}
            alt={companyName}
            className="object-contain"
          />
          <AvatarFallback>{companyName[0]}</AvatarFallback>
        </Avatar>
      </div>
      <Link
        href={companyURL || "#"}
        className="block cursor-pointer"
        target="_blank"
      >
        <div className="flex items-center justify-between gap-x-2 text-base">
          <h2 className="font-light uppercase leading-none">{companyName}</h2>
          <div className="text-xs tabular-nums text-right font-extralight">
            {companyDuration}
          </div>
        </div>
        {companyLocation && (
          <div className="font-extralight text-xs text-muted-foreground">
            {companyLocation}
          </div>
        )}
      </Link>
      {positions && positions.length > 0 && (
        <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
          {positions?.map((position, idx) => (
            <div key={idx} className="w-full text-xs mb-4 ml-0">
              <div>
                <div className="flex items-center justify-between gap-x-2">
                  <div className="ml-0 uppercase tabular-nums text-left">
                    <p>{position.title}</p>
                  </div>
                  <div className="tabular-nums text-right  text-muted-foreground">
                    <p>{`${position.start} - ${position.end}`}</p>
                  </div>
                </div>
                <p className="mt-1 ml-0 font-extralight text-muted-foreground">
                  {position.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
      {companyTechStack && companyTechStack.length > 0 && (
        <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
          {companyTechStack?.map((techItem, idx) => (
            <Badge key={idx} variant={"secondary"}>
              {techItem}
            </Badge>
          ))}
        </div>
      )}
      {/* {links && links.length > 0 && (
        <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
          {links?.map((link, idx) => (
            <Link href={link.href} key={idx}>
              <Badge key={idx} title={link.title} className="flex gap-2">
                {link.icon}
                {link.title}
              </Badge>
            </Link>
          ))}
          {location && (
        )}
        </div>
      )} */}
    </li>
  );
};
