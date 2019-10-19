import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService{

	private ingredients : Ingredient[] = [
		new Ingredient('Apples', 5),
		new Ingredient('Bananas', 7)
	];	

	getIngredients(){
		return this.ingredients;
	}

	addIngredient(ingredient: Ingredient){
		this.ingredients.push(ingredient);
	}

	addIngredients(ingredients: Ingredient[]){
		for (let ingredient of ingredients) {
			this.addIngredient(ingredient);
		}
	}
}
