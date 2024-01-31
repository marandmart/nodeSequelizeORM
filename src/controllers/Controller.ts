import express from "express";
import Services from "../services/Services.js";
import idStringConverter from "../utils/idStringConverter.js";

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

  async getOneById(req: express.Request, res: express.Response) {
    const { id } = req.params;
    try {
      const listing = await this.service.getOneByPk(Number(id));
      return res.status(200).json(listing);
    } catch (error: any) {
      return res.status(500).json(error.message);
    }
  }

  async getOne(req: express.Request, res: express.Response) {
    const { ...params } = req.params;
    const verifiedParams = idStringConverter(params);

    try {
      const listing = await this.service.getOne(verifiedParams);
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
    const { ...params } = req.params;
    const verifiedParams = idStringConverter(params);
    const newData = { updatedAt: new Date().toISOString(), ...req.body };

    try {
      const updated = await this.service.update(verifiedParams, newData);
      if (!updated) {
        return res.status(400).json({ message: "Registry wasn't updated." });
      }
      return res.status(200).json({ message: "Data updated." });
    } catch (error: any) {
      return res.status(500).json(error.message);
    }
  }

  async remove(req: express.Request, res: express.Response) {
    const { ...params } = req.params;
    const verifiedParams = idStringConverter(params);
    try {
      await this.service.remove(verifiedParams);
      return res.status(200).json({ message: "Data successfully deleted" });
    } catch (error: any) {
      return res.status(500).json(error.message);
    }
  }
}

export default Controller;
