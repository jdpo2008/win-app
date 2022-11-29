export default function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      res.status(200).json({ method: "El metodo existe y es " + method });
      break;
    case "POST":
      res.status(201).json({ method: "El metodo existe y es " + method });
      break;
    case "PUT":
      res.status(202).json({ method: "El metodo existe y es " + method });
      break;
    case "DELETE":
      res.status(200).json({ method: "El metodo existe y es " + method });
      break;

    default:
      res.status(405).json({ error: "El metodo no existe" });
      break;
  }
}
