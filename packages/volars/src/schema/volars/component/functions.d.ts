import type { Loot as LootTemplate } from '../../vanilla/loot'
import type { Recipe as RecipeTemplate } from '../../vanilla/recipe'

type LootTable = {
	/**
	 * # Loot Table
	 *
	 * Defines a loot table that is generated with the provided template at build time.
	 */
	lootTable: (template: LootTemplate, path: string) => void
}

type Recipe = {
	/**
	 * # Recipe
	 *
	 * Defines a recipe that is generated with the provided template at build time.
	 */
	recipe: (template: RecipeTemplate, path: string) => void
}

export { LootTable, Recipe }