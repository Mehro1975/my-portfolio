import { motion } from "framer-motion";
import { Shell, SectionHeader } from "@/components/Layout";
import { site } from "@/config/site";
import { Award } from "lucide-react";

export function Certifications() {
  if (!site.certifications || !site.certifications.length) return null;

  return (
    <div id="certifications">
      <SectionHeader title="Certifications & Accomplishments" />
      <Shell>
        <div className="divide-y divide-[var(--line)]">
          {site.certifications.map((cert, i) => (
            <motion.div
              key={`${cert.title}-${i}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 px-6 py-5 sm:px-8 hover:bg-[var(--hover)] transition-colors duration-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-6 flex-1 min-w-0">
                <span className="font-mono text-[11px] text-[var(--soft)] w-24 shrink-0 flex items-center gap-1.5">
                  <Award className="size-3.5 text-[var(--soft)]" />
                  {cert.year}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif text-[16px] text-[var(--fg)] font-medium leading-snug">
                    {cert.title}
                  </h3>
                  <p className="mt-1 text-[13px] text-[var(--muted)]">
                    {cert.issuer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Shell>
    </div>
  );
}

export default Certifications;
