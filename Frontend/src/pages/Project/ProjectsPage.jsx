import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";

import ProjectCard from "../../features/works/ProjectCard";
import ProjectSkeleton from "../../features/works/ProjectSkeleton";
import EmptyProjects from "../../features/works/EmptyProjects";
import ProjectDetailsModal from "../../features/works/ProjectDetailsModal";

import { getProjects } from "../../api/project";

const ProjectsPage = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      setLoading(true);
      const response = await getProjects();
      setProjects(response.data || []);
    } catch (error) {
      console.error(error);
      setProjects([]);
    } finally {
      setLoading(false);
    }
  };

  const categories = useMemo(() => {
    const values = projects
      .map((project) => project.category?.name)
      .filter(Boolean);

    return ["all", ...new Set(values)];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchCategory =
        category === "all" || project.category?.name === category;

      const matchSearch =
        project.title?.toLowerCase().includes(search.toLowerCase()) ||
        project.short_description?.toLowerCase().includes(search.toLowerCase());

      return matchCategory && matchSearch;
    });
  }, [projects, category, search]);

  return (
    <section className="section-background relative min-h-screen py-14 text-text antialiased selection:bg-primary/30 sm:py-16 md:py-20 lg:py-28">
      <Container>
        
        {/* Back Button */}
        <div className="mb-8 sm:mb-10 lg:mb-12">
          <button
            onClick={() => navigate(-1)}
            className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm px-4 py-2 text-sm font-medium text-muted transition-all duration-200 hover:border-primary/40 hover:bg-white/[0.05] hover:text-white focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
            <ArrowLeft
              size={16}
              className="transition-transform duration-200 group-hover:-translate-x-0.5"
            />
            Back
          </button>
        </div>

        {/* Section Heading */}
        <SectionTitle
          badge="ALL PROJECTS"
          title="Crafted Digital"
          highlight="Experiences"
          description="Explore every project including web applications, AI solutions, backend systems and personal products."
        />

        {/* Filters / Search Control Bar */}
        <div className="mt-10 flex flex-col gap-4 border-b border-white/10 pb-6 sm:mt-12 sm:gap-6 sm:pb-8 lg:mt-16 lg:flex-row lg:items-center lg:justify-between">
          
          {/* Search Bar */}
          <div className="relative w-full lg:max-w-md">
            <Search
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted pointer-events-none"
            />
            <input
              type="text"
              placeholder="Search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-10 w-full rounded-xl border border-white/10 bg-white/[0.03] pl-11 pr-4 text-sm text-white placeholder-muted outline-none transition-all duration-200 focus:border-primary/40 focus:bg-white/[0.05] focus:ring-2 focus:ring-primary/10 sm:h-11"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-white/[0.02] border border-white/10 w-fit sm:gap-2">
            {categories.map((item) => {
              const isActive = category === item;
              return (
                <button
                  key={item}
                  onClick={() => setCategory(item)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 capitalize sm:px-4 sm:py-2 ${
                    isActive
                      ? "bg-primary/15 text-primary ring-1 ring-primary/30"
                      : "text-muted hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid Display */}
        <div className="mt-8 sm:mt-10 lg:mt-12">
          {loading ? (
            /* Items-stretch forces all grid row skeleton loaders to be completely uniform */
            <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-full min-h-[340px] sm:min-h-[380px]">
                  <ProjectSkeleton />
                </div>
              ))}
            </div>
          ) : filteredProjects.length === 0 ? (
            <div className="py-14 rounded-2xl border border-dashed border-white/10 bg-white/[0.02] sm:py-20">
              <EmptyProjects
                title="No Projects Found"
                description="Try refining your search queries or selecting a different project branch."
              />
            </div>
          ) : (
            /* items-stretch grid configuration dynamically binds all rows together */
            <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
              {filteredProjects.map((project, index) => (
                <div 
                  key={project.id} 
                  className="flex flex-col h-full transition-all duration-300 hover:-translate-y-1 [&>*]:h-full [&>*]:w-full"
                >
                  <ProjectCard
                    project={project}
                    index={index + 1}
                    totalCount={filteredProjects.length}
                    onClick={setSelectedProject}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

      </Container>

      <ProjectDetailsModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default ProjectsPage;