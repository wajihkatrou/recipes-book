import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  	selector: 'app-recipe-list',
  	templateUrl: './recipe-list.component.html',
  	styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

	@Output() recipeSelected = new EventEmitter<Recipe>();

	recipes: Recipe[] = [
		new Recipe("Roasted Chiken", "This is a great recipe for to eat with sweet cocktails.", "https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/master/pass/Basically-Gojuchang-Chicken-Recipe-Wide.jpg")
	];

  	constructor() { }

  	ngOnInit() {
  	}

  	onSelectedRecipe(recipe: Recipe){
  		this.recipeSelected.emit(recipe);
  	}

}
