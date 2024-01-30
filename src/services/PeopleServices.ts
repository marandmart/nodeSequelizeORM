import Services from "./Services.js";

class PeopleServices extends Services {
  constructor() {
    super("People");
  }

  async getAllWithoutRestriction() {
    // nome definido no models/people, dentro de scopes
    return this.getRegistryByScope("noRestrictionQuery");
  }
}

export default PeopleServices;
