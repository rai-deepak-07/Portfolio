import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import Button from "../../components/ui/Button";

import { usePortfolio } from "../../context/PortfolioContext";

import FeaturedProjectCard from "./FeaturedProjectCard";
import ProjectCard from "./ProjectCard";
import ProjectSkeleton from "./ProjectSkeleton";
import EmptyProjects from "./EmptyProjects";
import ProjectDetailsModal from "./ProjectDetailsModal";

export default function FeaturedWorkSection() {
  const navigate = useNavigate();
  const { state } = usePortfolio();

  // const [selectedProject, setSelectedProject] = useState(null);
  const [selectedSlug, setSelectedSlug] = useState(null);

  const { loading, featuredProjects = [], homeProjects = [] } = state;

  const featuredProject = featuredProjects[0] || homeProjects[0] || null;
  const otherProjects = homeProjects.filter((p) => p.id !== featuredProject?.id);
  const totalCount = homeProjects.length;

  if (loading) {
    return (
      <section id="projects" className="section-background relative py-14 sm:py-16 md:py-20 lg:py-28">
        <Container>
          <SectionTitle
            badge="FEATURED WORK"
            title="Building Products"
            highlight="That Solve Real Problems"
            description="A collection of carefully engineered products focused on performance, scalability and exceptional user experience."
          />
          <div className="mt-10 sm:mt-12 lg:mt-16">
            <ProjectSkeleton />
          </div>
        </Container>
      </section>
    );
  }

  if (!homeProjects.length) {
    return (
      <section id="projects" className="section-background relative py-14 sm:py-16 md:py-20 lg:py-28">
        <Container>
          <SectionTitle
            badge="FEATURED WORK"
            title="Building Products"
            highlight="That Solve Real Problems"
            description="A collection of carefully engineered products focused on performance, scalability and exceptional user experience."
          />
          <div className="mt-10 sm:mt-12 lg:mt-16">
            <EmptyProjects />
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section id="projects" className="section-background relative py-14 sm:py-16 md:py-20 lg:py-28">
      <Container>
        <SectionTitle
          badge="FEATURED WORK"
          title="Building Products"
          highlight="That Solve Real Problems"
          description="A collection of carefully engineered products focused on performance, scalability and exceptional user experience."
        />

        {/* Index Rule */}
        <div className="mt-10 flex items-center gap-3 border-b border-white/10 pb-3.5 sm:mt-12 sm:gap-4 sm:pb-4 lg:mt-16">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary sm:text-[11px]">
            Project Index
          </span>
          <span className="h-px flex-1 bg-white/10" />
          <span className="font-mono text-[10px] tracking-[0.2em] text-muted sm:text-[11px]">
            {String(totalCount).padStart(2, "0")} Entries
          </span>
        </div>

        <div className="mt-6 space-y-4 sm:mt-8 sm:space-y-6">
          {/* Featured Project */}
          <FeaturedProjectCard
            project={featuredProject}
            totalCount={totalCount}
            onViewDetails={(slug) => setSelectedSlug(slug)}
          />

          {/* Sub-projects Grid — items-stretch handles tablet/laptop rows */}
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 items-stretch">
            {otherProjects.map((project, index) => (
              <div key={project.id} className="flex flex-col h-full">
                <ProjectCard
                  project={project}
                  index={index + 2}
                  totalCount={totalCount}
                  onClick={setSelectedSlug}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 border-t border-white/10 pt-8 sm:mt-16 sm:flex-row sm:gap-6 sm:pt-10"
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
            End of index
          </span>
          <Button
            size="lg"
            onClick={() => navigate("/projects")}
            rightIcon={<ArrowRight size={18} />}
          >
            View All Projects
          </Button>
        </motion.div>

      </Container>

      <ProjectDetailsModal
        slug={selectedSlug}
        onClose={() => setSelectedSlug(null)}
      />
    </section>
  );
}