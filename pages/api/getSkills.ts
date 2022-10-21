// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from "next-sanity"
import { sanityClient } from '../../sanity'
import { Skill } from '../../typing'
//import { PageInfo, Social } from '../../typings';

type Data = {
  skills: Skill[]
}

const query = groq`*[_type == "skill"]`

export default async function getSkills() {

  const skills: Skill[] = await sanityClient.fetch(query);

  return skills

}
