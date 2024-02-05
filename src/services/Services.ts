const dataSource = require("../database/models");

class Services {
  model: string;
  constructor(modelName: string) {
    this.model = modelName;
  }

  async getAll(where: object | null = {}) {
    return dataSource[this.model].findAll({ where: { ...where } });
  }

  async getRegistryByScope(scope: string) {
    return dataSource[this.model].scope(scope).findAll();
  }

  async getOneByPk(id: number) {
    return dataSource[this.model].findByPk(id);
  }

  async getOne(params: object) {
    return dataSource[this.model].findOne({
      where: params,
    });
  }

  async getAndCount(params: object) {
    return dataSource[this.model].findAndCountAll({
      ...params,
    });
  }

  async add(data: object) {
    return dataSource[this.model].create(data);
  }

  async update(data: object, options: object) {
    const updatedRegistry = await dataSource[this.model].update(data, options);
    if (updatedRegistry[0] === 0) {
      return false;
    }
    return true;
  }

  async remove(params: object) {
    return dataSource[this.model].destroy({ where: params });
  }
}

export default Services;
