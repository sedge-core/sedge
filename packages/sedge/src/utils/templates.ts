export function getComponentTemplate(): string {
	return [
		`import { defineComponent } from 'atropa/api'`,
		``,
		`export default defineComponent(`,
		`    'block@1.19.10',`,
		`	({}, { namespace }) => {}`,
		`)`
	].join('\n')
}

export function getCollectionTemplate(): string {
	return [
		`import { defineCollection } from 'atropa/api'`,
		``,
		`export default defineCollection(({ add, packs }) => {`,
		`	add(\`\${packs.behaviorPack}/functions/say_hello.mcfunction\`, 'say hello')`,
		`})`
	].join('\n')
}

export function getServerBlockTemplate(identifier: string): string {
	return [
		`import { defineBlock } from 'atropa/server'`,
		``,
		`export default defineBlock('1.19.10', ({ namespace, description }) => {`,
		`	description({`,
		`		identifier: \`\${namespace}:${identifier}\``,
		`	})`,
		`})`
	].join('\n')
}

export function getServerItemTemplate(identifier: string): string {
	return [
		`import { defineItem } from 'atropa/server'`,
		``,
		`export default defineItem('1.19.0', ({ namespace, description }) => {`,
		`	description({`,
		`		identifier: \`\${namespace}:${identifier}\``,
		`	})`,
		`})`
	].join('\n')
}

export function getLootTableTemplate(identifier: string): string {
	return [
		`import { defineLootTable } from 'atropa/server'`,
		``,
		`export default defineLootTable(({ namespace, pools }) => {`,
		`	pools([`,
		`		{`,
		`			rolls: 1,`,
		`			entries: {`,
		`				type: 'item',`,
		`				name: \`\${namespace}:${identifier}\`,`,
		`				weight: 1`,
		`			}`,
		`		}`,
		`	])`,
		`})`
	].join('\n')
}

export function getRecipeTemplate(identifier: string): string {
	return [
		`import { defineRecipe } from 'atropa/server'`,
		``,
		`export default defineRecipe(({ namespace, shaped }) => {`,
		`	shaped({`,
		`		description: {`,
		`			identifier: \`\${namespace}:${identifier}\``,
		`		}`,
		`	})`,
		`})`
	].join('\n')
}
