// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import words from './wordle-nyt-answers-alphabetical'

type Data = {
  valid: boolean 
}

function checkWord(word: string): boolean {
  return words.includes(word);
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(req.body);
  res.status(200).json({ valid: checkWord(req.body.word) })
}
