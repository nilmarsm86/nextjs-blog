export default function handler(req, res) {
  let msg = "Hello unknow";
  if (req.query.name !== undefined) {
    msg = "Hello " + req.query.name;
  }

  let data = { text: msg };
  res.status(200).json(data);
}
