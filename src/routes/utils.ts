import express from "express";
const notFound = (_: express.Request, res: express.Response) =>
  res.status(404).json({ message: "route doesn't exist" });

export { notFound };
