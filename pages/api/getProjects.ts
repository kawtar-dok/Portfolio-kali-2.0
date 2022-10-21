// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from "next-sanity"
import { sanityClient } from '../../sanity'
import { Project } from '../../typing'

type Data = {
  projects: Project[]
}

const query = groq`*[_type == "project"]{
  ..., technologies[]->
}`

export default async function getProjects(
) {

  const projects: Project[] = await sanityClient.fetch(query);

  return projects
}
