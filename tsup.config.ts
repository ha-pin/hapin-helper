import { defineConfig } from "tsup"

export const tsup = defineConfig({
    entry: ["src/scripts/main.ts", "src/scripts/renderer.ts"],
	clean: true,
	outDir: "dist/assets",
	format: ["cjs"]
})
