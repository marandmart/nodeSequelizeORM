const dataSource = require("../models");

class Services {
  model: string;
  constructor(modelName: string) {
    this.model = modelName;
  }

  async getAll() {
    return dataSource[this.model].findAll();
  }

  async getOne(id: string) {
    return dataSource[this.model].findOne({
      where: { id: Number(id) },
    });
  }

  async add(data: object) {
    return dataSource[this.model].create(data);
  }

  async update(id: string, data: object) {
    dataSource[this.model].update(data, {
      where: { id: Number(id) },
    });
  }

  async remove(id: string) {
    dataSource[this.model].destroy({ where: { id: Number(id) } });
  }

  async findByIds(params: object) {
    return dataSource[this.model].findOne({ where: params });
  }
}

export default Services;
