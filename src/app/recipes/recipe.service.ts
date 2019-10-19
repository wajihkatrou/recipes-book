import { Output, EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
	
	@Output() selectedRecipe = new EventEmitter<Recipe> ();

	constructor(private shoppingListService: ShoppingListService){}

	private recipes: Recipe[] = [
		new Recipe(
			"Roasted Chiken", 
			"This is a great recipe to eat with sweet cocktails.", 
			"https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/master/pass/Basically-Gojuchang-Chicken-Recipe-Wide.jpg",
			[new Ingredient("Chicken", 1), new Ingredient("Lemon", 3)])
	];	

	getRecipes(){
		return this.recipes.slice();
	}

	addIngredientssToShoppingList(ingredients: Ingredient[]){
		this.shoppingListService.addIngredients(ingredients);
	}
}
