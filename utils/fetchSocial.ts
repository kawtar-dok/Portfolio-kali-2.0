import getSocials from "../pages/api/getSocials";
import { Social } from "../typing"

export const fetchSocials = async () => {
  const res = await getSocials()
  const socials: Social[] = res
  // console.log("fetching", socials)

  return socials;
}

