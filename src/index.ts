import express, { Application, Request, Response } from "express";
import userRoutes from './routes/users';

const PORT = process.env.PORT || 3000;
const app: Application = express();

app.use(express.json());

app.get("/ping", async (_req: Request, res: Response) => {
  res.send({
    message: "hello from Evan",
  });
});

app.use('/api/v1/users', userRoutes);

app.listen(PORT, () => {
  console.log("Server is running on port --", PORT);
});







