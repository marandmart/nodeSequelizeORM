import express from "express";
import routes from "./routes/index.js";
import "dotenv/config";

const app = express();

const PORT = process.env.PORT;

routes(app);

app.listen(PORT, () => {
  console.log(`Server listening to port: ${PORT}`);
});

export default app;
