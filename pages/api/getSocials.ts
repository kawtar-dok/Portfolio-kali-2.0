// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from "next-sanity"
import { sanityClient } from '../../sanity'
import { Social } from '../../typing'
//import { PageInfo, Social } from '../../typings';

type Data = {
  socials: Social[]
}

const query = groq`*[_type == "social"]`

export default async function getSocials() {

  const socials: Social[] = await sanityClient.fetch(query);

  return socials

}