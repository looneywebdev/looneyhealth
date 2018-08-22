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
    $.ajax({
        method: "GET",
        url: "/ingredients-list"
    }).then(function (results,text,xhr) {
        console.log(results);
        displayIngredients(results);
    });
}

function modifyRecipes(recipe){
    $.ajax({
        method: "PUT",
        url: `/ingredients-list/${recipe.name}`,
        data: recipe,
    });
}

function newRecipe(recipe){
    $.ajax({
        method: "POST",
        url: "/ingredients-list",
        data: recipe,
    })
}

function deleteRecipe(recipe){
    $.ajax({
        method: "DELETE",
        url: `/ingredients-list/${recipe.name}`,
        data: recipe,
    }).then(function() {
        console.log(MOCK_INGREDIENTS);
    });
}


//display current ingredients
function displayIngredients(results) {
    for (index in results.ingredients) {
	   $('.js-results').html(
           `<section class="ingredientsname-list"><div class="title-name"><h2>Name of Ingredient</h2></div></section>` +
        `<div class="name0"><p>` + results.ingredients[0].name + `</p></div>` +
        `<div class="name1"><p>` + results.ingredients[1].name + `</p></div>`);
    }
}

//event listeners

function displayIng() {
    $('.display').click(function(ev){
        console.log('Handling get');
        ev.preventDefault();
        getRecipes();
    })
}

function addIng() {
    $('.add').click(function(ev){
        console.log('Handling add');
        ev.preventDefault();
        newRecipe(4334564, "Turkey", 0.3, "cup", 460, 50, 4, 30);
    })
}

function modifyIng() {
    $('.modify').click(function(ev){
        console.log('Handling modify');
        ev.preventDefault();
        modifyRecipes();
    })
}

function deleteIng() {
    $('.delete').click(function(ev){
        console.log('Handling delete');
        ev.preventDefault();
        deleteRecipe();
    })
}

//calling event listener functions

$(displayIng);
$(addIng);
$(modifyIng);
$(deleteIng);