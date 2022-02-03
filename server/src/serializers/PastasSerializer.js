class PastasSerializer {
  static getDetails(pasta) {
    const allowedAttributes = ["id", "name", "description"];

    let serializedPasta = {};
    for (const attribute of allowedAttributes) {
      serializedPasta[attribute] = pasta[attribute];
    }
    
   // serializedPasta.category = await pasta.$relatedQuery('category')
    
    return serializedPasta;
  }
}

export default PastasSerializer;
