import distritos from "./data/distritos.json";

export default function handler(req, res) {
  res.status(200).json(distritos);
}
