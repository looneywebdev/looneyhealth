const express = require('express');
// const router = express.Router();
// const morgan = require('morgan');
const bodyParser = require('body-parser');

// const {IngredientsList} = require('./models');

const jsonParser = bodyParser.json();
const app = express();

app.use(express.static('public'));
// app.use(morgan('common'));

var MOCK_INGREDIENTS = {
	"ingredients": [
        {
            "id": "1111111",
            "name": "Egg",
            "serving": 1,
            "unit": "medium",
            "calories": 60,
            "carbs": 0,
            "protein": 6,
            "fat": 4
        },
        {
            "id": "2222222",
            "name": "Oatmeal, dry",
            "serving": 0.5,
            "unit": "cup",
            "calories": 150,
            "carbs": 27,
            "protein": 5,
            "fat": 3
        },
        {
            "id": "3333333",
            "name": "Banana",
            "serving": 1,
            "unit": "medium",
            "calories": 104,
            "carbs": 28,
            "protein": 1,
            "fat": 1
        },
        {
            "id": "4444444",
            "name": "Whey Protein",
            "serving": 1,
            "unit": "scoop",
            "calories": 120,
            "carbs": 3,
            "protein": 24,
            "fat": 1
        },
        {
            "id": "5555555",
            "name": "Chicken",
            "serving": 1,
            "unit": "oz",
            "calories": 49,
            "carbs": 0,
            "protein": 8.8,
            "fat": 1.5
        },
        {
            "id": "6666666",
            "name": "Rice, cooked",
            "serving": 0.5,
            "unit": "cup",
            "calories": 75,
            "carbs": 16.5,
            "protein": 2,
            "fat": 0.5
        },
        {
            "id": "7777777",
            "name": "Carrots",
            "serving": 0.666667,
            "unit": "cup",
            "calories": 35,
            "carbs": 8,
            "protein": 1,
            "fat": 0
        },
        {
            "id": "8888888",
            "name": "Red Pepper",
            "serving": 1,
            "unit": "cup",
            "calories": 46,
            "carbs": 9,
            "protein": 1,
            "fat": 0
        },
        {
            "id": "9999999",
            "name": "Mushrooms",
            "serving": 0.5,
            "unit": "cup",
            "calories": 20,
            "carbs": 3,
            "protein": 2,
            "fat": 0
        }
    ]
};


// IngredientsList.create('bread',1,'slice',90,17,4,1.5);
// IngredientsList.create('green onions',1,'cup',32,7,1.8,0.2);

app.get('/ingredients-list', (req, res) => {
  res.send(MOCK_INGREDIENTS);
});

app.post('/ingredients-list', jsonParser, (req,res) => {
  MOCK_INGREDIENTS.ingredients.push(req.body);
  res.send(MOCK_INGREDIENTS);
})

// app.post('/ingredients-list', jsonParser, (req, res) => {
//   const requiredFields = ['name', 'serving', 'unit', 'calories', 'carbs', 'protein', 'fat'];
//   for (let i=0; i<requiredFields.length; i++) {
//     const field = requiredFields[i];
//     if (!(field in req.body)) {
//       const message = `Missing \`${field}\` in request body`
//       console.error(message);
//       return res.status(400).send(message);
//     }
//   }

//   const item = IngredientsList.create(req.body.name, req.body.serving, req.body.unit, req.body.calories, req.body.carbs, req.body.protein, req.body.fat);
//   res.status(201).json(item);
// });


// app.put('/ingredients-list/:id', jsonParser, (req, res) => {
//   const requiredFields = ['name', 'serving', 'unit', 'calories', 'carbs', 'protein', 'fat', 'id'];
//   for (let i=0; i<requiredFields.length; i++) {
//     const field = requiredFields[i];
//     if (!(field in req.body)) {
//       const message = `Missing \`${field}\` in request body`
//       console.error(message);
//       return res.status(400).send(message);
//     }
//   }

//   if (req.params.id !== req.body.id) {
//     const message = `Request path id (${req.params.id}) and request body id (${req.body.id}) must match`;
//     console.error(message);
//     return res.status(400).send(message);
//   }
//   console.log(`Updating ingredients item \`${req.params.id}\``);
//   ShoppingList.update({
//     id: req.params.id,
//     name: req.body.name,
//     serving: req.body.serving,
//     unit: req.body.unit,
//     calories: req.body.calories,
//     carbs: req.body.carbs,
//     protein: req.body.protein,
//     fat: req.body.fat
//   });
//   res.status(204).end();
// });


app.delete('/ingredients-list/:id', (req, res) => {
  MOCK_INGREDIENTS.ingredients = MOCK_INGREDIENTS.ingredients.filter(ingredient => ingredient.id !== req.params.id);
  res.send(MOCK_INGREDIENTS.ingredients);
});

app.listen(process.env.PORT || 8080, () => {
  console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});