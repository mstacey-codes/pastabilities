import PastasSerializer from "./PastasSerializer.js";

class CategoriesSerializer {
  static getSummary(category) {
    const allowedAttributes = ["id", "name"];
    let serializedCategory = {};
    for (const attribute of allowedAttributes) {
      serializedCategory[attribute] = category[attribute];
    }
    return serializedCategory;
  }

  static async getDetails(category) {
    const serializedCategory = this.getSummary(category);
    const relatedPastas = await category.$relatedQuery("pastas");

    const serializedPastas = await Promise.all(
      relatedPastas.map(async (pasta) => PastasSerializer.getDetails(pasta))
    );
    serializedCategory.pastas = serializedPastas;

    return serializedCategory;
  }
}

export default CategoriesSerializer;
