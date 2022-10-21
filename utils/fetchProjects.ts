import getProjects from "../pages/api/getProjects";
import { Project } from "../typing"

export const fetchProjects = async () => {
  const res = await getProjects();
  const projects: Project[] = res;
  // console.log("fetching", socials)

  return projects;
}

