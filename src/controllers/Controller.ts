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
    const { id } = req.params;
    try {
      const listing = await this.service.getOne(id);
      if (listing) return res.status(200).json(listing);
      else return res.status(204);
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
    const { id } = req.params;
    const newData = { updatedAt: new Date().toISOString(), ...req.body };
    try {
      await this.service.update(id, newData);
      return res.status(200).json({ message: "Data updated" });
    } catch (error: any) {
      return res.status(500).json(error.message);
    }
  }

  async remove(req: express.Request, res: express.Response) {
    const { id } = req.params;
    try {
      await this.service.remove(id);
      return res
        .status(200)
        .json({ message: `Data with id ${id} successfully deleted` });
    } catch (error: any) {
      return res.status(500).json(error.message);
    }
  }

  async findByIds(req: express.Request, res: express.Response) {
    let whereBody: {
      [key: string]: number;
    } = {};
    try {
      Object.keys(req.params).forEach((key) => {
        whereBody[key] = Number(req.params[key]);
      });
      const foundData = this.service.findByIds(whereBody);
      return res.status(200).json(foundData);
    } catch (error: any) {
      return res.status(500).json(error.message);
    }
  }
}

export default Controller;
