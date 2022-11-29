import NextCors from "nextjs-cors";

import distritos from "../../data/distritos.json";

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ["GET"],
    origin: "*",
    optionsSuccessStatus: 200,
  });
  return res.status(200).json(distritos);
}
