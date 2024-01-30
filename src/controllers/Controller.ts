import express from "express";
import Services from "../services/Services.js";

class Controller {
  service: Services;
  constructor(serviceEntity: Services) {
    this.service = serviceEntity;
  }

  async getAll(_: express.Request, res: express.Response) {
    try {
      const listings = await this.service.getAll();
      return res.status(200).json(listings);
    } catch (error: any) {
      return res.status(500).json(error.message);
    }
  }

  async getOne(req: express.Request, res: express.Response) {
    let whereBody: {
      [key: string]: number;
    } = {};
    Object.keys(req.params).forEach((key) => {
      whereBody[key] = Number(req.params[key]);
    });
    try {
      const listing = await this.service.getOne(whereBody);
      if (listing) {
        return res.status(200).json(listing);
      } else {
        return res.sendStatus(204);
      }
    } catch (error: any) {
      return res.status(500).json(error.message);
    }
  }

  async add(req: express.Request, res: express.Response) {
    const data = req.body;
    try {
      const newEntry = await this.service.add(data);
      return res.status(200).json(newEntry);
    } catch (error: any) {
      return res.status(500).json(error.message);
    }
  }

  async update(req: express.Request, res: express.Response) {
    const whereParams: { [key: string]: number } = {};

    Object.keys(req.params).forEach((key) => {
      whereParams[key] = Number(req.params[key]);
    });

    const newData = { updatedAt: new Date().toISOString(), ...req.body };

    try {
      const updated = await this.service.update(whereParams, newData);
      if (!updated) {
        return res.status(400).json({ message: "Registry wasn't updated." });
      }
      return res.status(200).json({ message: "Data updated." });
    } catch (error: any) {
      return res.status(500).json(error.message);
    }
  }

  async remove(req: express.Request, res: express.Response) {
    let whereBody: {
      [key: string]: number;
    } = {};

    try {
      Object.keys(req.params).forEach((key) => {
        whereBody[key] = Number(req.params[key]);
      });
      await this.service.remove(whereBody);
      return res.status(200).json({ message: "Data successfully deleted" });
    } catch (error: any) {
      return res.status(500).json(error.message);
    }
  }
}

export default Controller;
