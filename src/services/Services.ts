const dataSource = require("../models");

class Services {
  model: string;
  constructor(modelName: string) {
    this.model = modelName;
  }

  async getAll() {
    return dataSource[this.model].findAll();
  }

  async getOne(params: object) {
    return dataSource[this.model].findOne({
      where: params,
    });
  }

  async add(data: object) {
    return dataSource[this.model].create(data);
  }

  async update(params: object, data: object) {
    dataSource[this.model].update(data, {
      where: params,
    });
  }

  async remove(params: object) {
    dataSource[this.model].destroy({ where: params });
  }

  async findByIds(params: object) {
    return dataSource[this.model].findOne({ where: params });
  }
}

export default Services;
