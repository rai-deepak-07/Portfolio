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

export default function FeaturedWorkSection() {
  const navigate = useNavigate();

  const { state } = usePortfolio();

  const {
    loading,
    featuredProjects = [],
    homeProjects = [],
  } = state;

  const featuredProject =
    featuredProjects[0] || homeProjects[0] || null;

  const otherProjects = homeProjects.filter(
    (project) => project.id !== featuredProject?.id
  );

  const totalCount = homeProjects.length;

  /* ---------------------------------------
      Loading State
  --------------------------------------- */

  if (loading) {
    return (
      <section
        id="projects"
        className="section-background relative py-32"
      >
        <Container>
          <SectionTitle
            badge="FEATURED WORK"
            title="Building Products"
            highlight="That Solve Real Problems"
            description="A collection of carefully engineered products focused on performance, scalability and exceptional user experience."
          />

          <div className="mt-16">
            <ProjectSkeleton />
          </div>
        </Container>
      </section>
    );
  }

  /* ---------------------------------------
      Empty State
  --------------------------------------- */

  if (!homeProjects.length) {
    return (
      <section
        id="projects"
        className="section-background relative py-32"
      >
        <Container>
          <SectionTitle
            badge="FEATURED WORK"
            title="Building Products"
            highlight="That Solve Real Problems"
            description="A collection of carefully engineered products focused on performance, scalability and exceptional user experience."
          />

          <div className="mt-16">
            <EmptyProjects />
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section
      id="projects"
      className="section-background relative py-32"
    >
      <Container>
        <SectionTitle
          badge="FEATURED WORK"
          title="Building Products"
          highlight="That Solve Real Problems"
          description="A collection of carefully engineered products focused on performance, scalability and exceptional user experience."
        />

        {/* Index Rule */}

        <div className="mt-16 flex items-center gap-4 border-b border-white/10 pb-4">
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
            Project Index
          </span>

          <span className="h-px flex-1 bg-white/10" />

          <span className="font-mono text-[11px] tracking-[0.2em] text-muted">
            {String(totalCount).padStart(2, "0")} Entries
          </span>
        </div>

        <div className="mt-8 space-y-6">

          {/* ======================================
                  Featured Project
          ====================================== */}

          <FeaturedProjectCard
            project={featuredProject}
            totalCount={totalCount}
            onViewDetails={(project) =>
              navigate(`/projects/${project.slug}`)
            }
          />

          {/* ======================================
                  Other Projects
          ====================================== */}

          <div className="grid gap-6 md:grid-cols-3">

              {otherProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index + 2}
                totalCount={totalCount}
              />
            ))}
          </div>
        </div>

        {/* ======================================
                Bottom CTA
        ====================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex items-center justify-center gap-6 border-t border-white/10 pt-10"
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
    </section>
  );
}