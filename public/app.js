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

function getRecipes(callbackFn) {
	setTimeout(function(){ callbackFn(MOCK_INGREDIENTS)}, 1000);
}

function displayIngredients(data) {
    for (index in data.ingredients) {
	   $('body').append(
        '<p>' + data.ingredients[index].name + '</p>');
    }
}

function getAndDisplayIngredients() {
	getRecipes(displayIngredients);
}

$(function() {
	getAndDisplayIngredients();
})