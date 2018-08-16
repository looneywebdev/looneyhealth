const uuid = require('uuid');


function StorageException(message) {
   this.message = message;
   this.name = "StorageException";
}

const IngredientsList = {
  create: function(name, serving, unit, calories, carbs, protein, fat) {
    console.log('Creating new ingredient');
    const ingredient = {
      id: uuid.v4(),
      name: name,
      serving: serving,
      unit: unit,
      calories: calories,
      carbs: carbs,
      protein: protein,
      fat: fat
    };
    this.items[ingredients.id] = ingredient;
    return item;
  },
  get: function() {
    console.log('Retrieving ingredients list');
    return Object.keys(this.items).map(key => this.items[key]);
  },
  delete: function(id) {
    console.log(`Deleting ingredient item \`${id}\``);
    delete this.items[id];
  },
  update: function(updatedItem) {
    console.log(`Updating ingredient item \`${updatedItem.id}\``);
    const {id} = updatedItem;
    if (!(id in this.items)) {
      throw StorageException(
        `Can't update item \`${id}\` because doesn't exist.`)
    }
    this.items[updatedItem.id] = updatedItem;
    return updatedItem;
  }
};

function createIngredientsList() {
  const storage = Object.create(IngredientsList);
  storage.items = {};
  return storage;
}

module.exports = {
  IngredientsList: createIngredientsList()
}
