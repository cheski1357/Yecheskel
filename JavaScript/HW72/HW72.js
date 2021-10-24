// (function () {
//   'use strict';

//   const recipeSelect = $('#recipes');
//   const recipeNameElem = $('#recipe h2');
//   const recipePictureElem = $('#recipe img');
//   const recipeIngredientsList = $('#recipe ul');
//   const errorElem = $('#error');

//   async function loadJson(url) {
//     try {
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error(`${response.status} ${response.statusText}`);
//       }
//       const result = await response.json();
//       return result;
//     }
//     catch (e) {
//       errorElem.text(e.message);
//     }
//   }

//   async function recipeSelected(recipeToLoad) {
//     const recipe = await loadJson(`${recipeToLoad}.json`);
//     if (recipe) {
//       console.log(recipe);

//       recipeNameElem.text(recipe.name);
//       recipePictureElem.attr('src', recipe.picture);

//       recipeIngredientsList.empty();
//       recipe.ingredients.forEach(i => {
//         recipeIngredientsList.append(`<li>${i}</li>`);
//       });
//     }
//   }

//   async function loadRecipes() {
//     const recipes = await loadJson('recipes.json');
//     if (recipes) {
//       recipes.forEach(recipe => {
//         recipeSelect.append(`<option value="${recipe.id}">${recipe.name}</option>`);
//       });
//     }

//     recipeSelect.change(function () {
//       console.log(this.value);//*e.target.value);
//       recipeSelected(this.value);
//     });
//   }

//   loadRecipes();
// }());

