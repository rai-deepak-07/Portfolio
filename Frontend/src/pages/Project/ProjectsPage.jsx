import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";

import ProjectCard from "../../features/works/ProjectCard";
import ProjectSkeleton from "../../features/works/ProjectSkeleton";
import EmptyProjects from "../../features/works/EmptyProjects";

import { getProjects } from "../../api/project";

const ProjectsPage = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

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
    <section className="min-h-screen bg-zinc-950 text-zinc-50 py-24 sm:py-32 antialiased selection:bg-primary/30">
      <Container>
        
        {/* Back Button */}
        <div className="mb-12">
          <button
            onClick={() => navigate(-1)}
            className="group inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm px-4 py-2 text-sm font-medium text-zinc-400 transition-all duration-200 hover:border-zinc-700 hover:bg-zinc-900 hover:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-primary/20"
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
        <div className="mt-16 flex flex-col gap-4 sm:gap-6 lg:flex-row lg:items-center lg:justify-between border-b border-zinc-900 pb-8">
          
          {/* Search Bar */}
          <div className="relative w-full lg:max-w-md">
            <Search
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none"
            />
            <input
              type="text"
              placeholder="Search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-11 w-full rounded-xl border border-zinc-800 bg-zinc-900/30 pl-11 pr-4 text-sm text-zinc-200 placeholder-zinc-500 outline-none transition-all duration-200 focus:border-zinc-700 focus:bg-zinc-900/60 focus:ring-2 focus:ring-primary/10"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1 rounded-xl bg-zinc-900/20 border border-zinc-900/60 w-fit">
            {categories.map((item) => {
              const isActive = category === item;
              return (
                <button
                  key={item}
                  onClick={() => setCategory(item)}
                  className={`px-4 py-2 text-xs font-medium rounded-lg transition-all duration-200 capitalize ${
                    isActive
                      ? "bg-zinc-800 text-white shadow-sm ring-1 ring-zinc-700/50"
                      : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/50"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid Display */}
        <div className="mt-12">
          {loading ? (
            /* Items-stretch forces all grid row skeleton loaders to be completely uniform */
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 items-stretch">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-full min-h-[380px]">
                  <ProjectSkeleton />
                </div>
              ))}
            </div>
          ) : filteredProjects.length === 0 ? (
            <div className="py-20 rounded-2xl border border-dashed border-zinc-800 bg-zinc-900/10">
              <EmptyProjects
                title="No Projects Found"
                description="Try refining your search queries or selecting a different project branch."
              />
            </div>
          ) : (
            /* items-stretch grid configuration dynamically binds all rows together */
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 items-stretch">
              {filteredProjects.map((project, index) => (
                <div 
                  key={project.id} 
                  className="flex flex-col h-full transition-all duration-300 hover:-translate-y-1 [&>*]:h-full [&>*]:w-full"
                >
                  <ProjectCard
                    project={project}
                    index={index + 1}
                    totalCount={filteredProjects.length}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

      </Container>
    </section>
  );
};

export default ProjectsPage;