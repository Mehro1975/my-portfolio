import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shell, SectionHeader } from "@/components/Layout";
import { site } from "@/config/site";
import { Icon } from "@iconify/react";

const CATEGORY_ICONS: Record<string, string> = {
  All: "lucide:layers",
  Languages: "lucide:code-2",
  Backend: "lucide:server",
  Frontend: "lucide:layout",
  Databases: "lucide:database",
  "Cloud & Developer Tools": "lucide:terminal",
};

const SKILL_ICONS: Record<string, string> = {
  Java: "logos:java",
  Python: "logos:python",
  JavaScript: "logos:javascript",
  HTML5: "logos:html-5",
  CSS3: "logos:css-3",
  Kotlin: "logos:kotlin-icon",
  TypeScript: "logos:typescript-icon",
  MySQL: "logos:mysql-icon",
  MongoDB: "logos:mongodb-icon",
  SQL: "lucide:database",
  "React.js": "logos:react",
  "React Native": "logos:react",
  "Node.js": "logos:nodejs-icon",
  "Express.js": "logos:express",
  FastAPI: "logos:fastapi-icon",
  "Tailwind CSS": "logos:tailwindcss-icon",
  "Jetpack Compose": "logos:jetpack-compose",
  "REST APIs": "lucide:cpu",
  "API Integration": "lucide:network",
  Authentication: "lucide:key-round",
  Postman: "logos:postman-icon",
  Swagger: "logos:swagger",
  AWS: "logos:aws",
  Firebase: "logos:firebase",
  Vercel: "logos:vercel-icon",
  Netlify: "logos:netlify-icon",
  Git: "logos:git-icon",
  GitHub: "logos:github-icon",
  "Visual Studio Code": "logos:visual-studio-code",
  "Android Studio": "logos:android-icon",
};

const skillCategories: Record<string, string[]> = {
  Languages: ["Java", "Python", "JavaScript", "HTML5", "CSS3", "Kotlin", "TypeScript"],
  Databases: ["MySQL", "MongoDB", "SQL"],
  Frontend: ["React.js", "React Native", "Tailwind CSS", "Jetpack Compose", "HTML5", "CSS3"],
  Backend: ["Node.js", "Express.js", "FastAPI", "REST APIs", "API Integration", "Authentication", "Postman", "Swagger"],
  "Cloud & Developer Tools": ["AWS", "Firebase", "Vercel", "Netlify", "Git", "GitHub", "Visual Studio Code", "Android Studio"],
};

export function TechStack() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  if (!site.skills.length) return null;

  const categories = ["All", "Languages", "Frontend", "Backend", "Databases", "Cloud & Developer Tools"];

  const filteredSkills = activeCategory === "All"
    ? site.skills
    : site.skills.filter((skill) => skillCategories[activeCategory]?.includes(skill));

  return (
    <div id="skills">
      <SectionHeader
        title="Tech Stack"
        aside={
          <span className="hidden font-mono text-[10px] tracking-wider text-[var(--soft)] sm:inline">
            ( select tab to filter )
          </span>
        }
      />
      <Shell className="px-6 py-6 sm:px-8">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-1.5 rounded-lg border border-[var(--line)] bg-[var(--chip)] p-1">
          {categories.map((cat) => {
            const iconName = CATEGORY_ICONS[cat] || "lucide:layers";
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-[12px] font-medium transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[var(--fg)] text-[var(--bg)] shadow-sm font-semibold"
                    : "text-[var(--muted)] hover:bg-[var(--hover)] hover:text-[var(--fg)]"
                }`}
              >
                <Icon icon={iconName} width={14} height={14} className="size-3.5" />
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skill Items Grid */}
        <motion.div layout className="mt-6 flex flex-wrap gap-2.5">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => {
              const iconName = SKILL_ICONS[skill] || "lucide:code-2";
              const isShadcn = iconName === "simple-icons:shadcnui";
              return (
                <motion.span
                  key={skill}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2, type: "spring", stiffness: 300, damping: 25 }}
                  className="flex cursor-default items-center gap-2 rounded-md border border-[var(--line)] bg-[var(--card)] px-3 py-1.5 font-mono text-[12px] text-[var(--muted)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--fg)] hover:bg-[var(--fg)] hover:text-[var(--bg)] shadow-xs group"
                >
                  <Icon 
                    icon={iconName} 
                    width={16}
                    height={16}
                    className={`size-4 shrink-0 transition-colors ${
                      isShadcn ? "text-current" : ""
                    } group-hover:filter group-hover:brightness-110`} 
                  />
                  {skill}
                </motion.span>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </Shell>
    </div>
  );
}

export default TechStack;
