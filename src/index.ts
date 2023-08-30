import express from "express";
import bodyParser from "body-parser";
import "dotenv/config";

const app = express();

app.use(bodyParser.json());

const PORT = process.env.PORT;

app.get("/", (req: express.Request, res: express.Response) => {
  res.status(200).send({ message: "API test" });
});

app.listen(PORT, () => {
  console.log(`Server listening to port: ${PORT}`);
});

export default app;
