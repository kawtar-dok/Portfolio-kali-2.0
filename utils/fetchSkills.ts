import getSkills from "../pages/api/getSkills";
import { Skill } from "../typing"

export const fetchSkills = async () => {
  const res = await getSkills();
  const skills: Skill[] = res;


  //console.log("fetching", skills)
  return skills;
}

