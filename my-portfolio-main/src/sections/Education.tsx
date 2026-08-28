import { motion } from "framer-motion";
import { Shell, SectionHeader } from "@/components/Layout";
import { site } from "@/config/site";
import { GraduationCap } from "lucide-react";

export function Education() {
  if (!site.education || !site.education.length) return null;

  return (
    <div id="education">
      <SectionHeader title="Education" />
      <Shell>
        <div className="divide-y divide-[var(--line)]">
          {site.education.map((edu, i) => (
            <motion.div
              key={`${edu.institution}-${i}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 px-6 py-5 sm:px-8 hover:bg-[var(--hover)] transition-colors duration-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-6 flex-1 min-w-0">
                <span className="font-mono text-[11px] text-[var(--soft)] w-24 shrink-0 flex items-center gap-1.5">
                  <GraduationCap className="size-3.5 text-[var(--soft)]" />
                  {edu.period}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif text-[17px] text-[var(--fg)] font-medium leading-snug">
                    {edu.degree}
                  </h3>
                  <p className="mt-1 text-[13px] text-[var(--muted)]">
                    {edu.institution}
                  </p>
                </div>
              </div>
              {edu.details && (
                <div className="font-mono text-[11px] text-[var(--soft)] self-start sm:self-auto shrink-0 mt-1 sm:mt-0">
                  {edu.details}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </Shell>
    </div>
  );
}

export default Education;
