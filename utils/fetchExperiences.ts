import getExperiences from "../pages/api/getExperiences";
import { Experience } from "../typing"

export const fetchExperiences = async () => {
  const res = await getExperiences()

  const experiences: Experience[] = res
  // console.log("fetching", socials)

  return experiences;
}

