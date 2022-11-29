import NextCors from "nextjs-cors";

import services from "../../data/services.json";

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ["GET"],
    origin: "*",
    optionsSuccessStatus: 200,
  });

  return res.status(200).json(services);
}
