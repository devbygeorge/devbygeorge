import ProjectsArea from "@/components/ProjectsArea";
import getCategories from "@/utils/getCategories";
import getProjects from "@/utils/getProjects";

export const metadata = {
  title: "_projects",
};

export default async function Projects() {
  const projects = await getProjects();
  const categories = await getCategories();

  return <ProjectsArea projects={projects} categories={categories} />;
}
