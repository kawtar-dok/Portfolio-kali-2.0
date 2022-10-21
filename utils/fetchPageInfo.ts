import getPageInfo from "../pages/api/getPageInfo";
import { PageInfo } from "../typing"

export const fetchPageInfo = async () => {
  const res = await getPageInfo();
  const pageInfos: PageInfo = res;
  // console.log("fetching", socials)

  return pageInfos;
}

