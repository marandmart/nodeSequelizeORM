import EnrollmentServices from "./EnrollmentServices.js";
import Services from "./Services.js";
// @ts-ignore
import dataSource from "../database/models";

class PeopleServices extends Services {
  enrollmentServices: EnrollmentServices;
  constructor() {
    super("People");
    this.enrollmentServices = new EnrollmentServices();
  }

  async getAllWithoutRestriction() {
    // nome definido no models/people, dentro de scopes
    return this.getRegistryByScope("noRestrictionQuery");
  }

  async cancelStudentAndEnrollments(id: number) {
    return dataSource.sequelize.transaction(async (t: object) => {
      await super.update(
        { is_active: false },
        { where: { id }, transaction: t }
      );
      await this.enrollmentServices.update(
        { curr_status: "cancelled" },
        { where: { s_id: id }, transaction: t }
      );
    });
  }
}

export default PeopleServices;
