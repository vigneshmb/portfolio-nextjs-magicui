import Markdown from "react-markdown";

import { EducationCard } from "@/components/education-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { WorkExpCard } from "@/components/work-experience-card";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-8">
      <section id="hero">
        <div className="mx-auto w-full max-w-3xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm ${DATA.name} ${DATA.emoji}`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-md"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="work">
        <div className="space-y-4 w-full">
          <div className="space-y-2">
            <BlurFade delay={BLUR_FADE_DELAY * 13}>
              <h2 className="text-xl font-bold">Work Experience</h2>
            </BlurFade>
          </div>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className={`mb-4 ml-4 divide-y divide-dashed border-l-2`}>
              {DATA.work.map((company, id) => (
                <BlurFade
                  key={company.companyName + company.start + company.end}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <WorkExpCard
                    companyName={company.companyName}
                    companyTechStack={company.companyTechStack}
                    companyURL={company.companyURL}
                    companyLogo={company.companyLogo}
                    companyLocation={company.companyLocation}
                    companyDuration={`${company.start} - ${company.end}`}
                    positions={company.positions}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.schoolName}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <EducationCard
                key={education.schoolName}
                schoolURL={education.schoolURL}
                schoolLogo={education.schoolLogo}
                schoolLogoAltText={education.schoolName}
                schoolName={education.schoolName}
                period={`${education.start} - ${education.end}`}
                schoolDegree={education.schoolDegree}
                schoolLocation={education.schoolLocation}
              />
            </BlurFade>
          ))}
        </div>
      </section>
    </main>
  );
}
