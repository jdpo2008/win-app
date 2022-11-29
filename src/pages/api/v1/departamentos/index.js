import departamentos from "../../data/departamentos.json";

export default function handler(req, res) {
  return res.status(200).json(departamentos);
}
