import { Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService{
	
	@Output() selectedRecipe = new EventEmitter<Recipe> ();
	private recipes: Recipe[] = [
		new Recipe("Roasted Chiken", "This is a great recipe to eat with sweet cocktails.", "https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/master/pass/Basically-Gojuchang-Chicken-Recipe-Wide.jpg")
	];	

	getRecipes(){
		return this.recipes.slice();
	}
}
