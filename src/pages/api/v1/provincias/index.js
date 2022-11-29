import provincias from "../../data/provincias.json";

export default function handler(req, res) {
  return res.status(200).json(provincias);
}
