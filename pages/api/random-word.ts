// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import words from './wordle-nyt-answers-alphabetical'

type Data = {
  word: string
}

function randomWord(): string {
  const index = Math.floor(Math.random() * words.length)
  return words[index];
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ word: randomWord() })
}
