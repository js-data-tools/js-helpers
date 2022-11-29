import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        environment: "node",
        coverage: {
            reporter: ["text", "lcovonly", "json-summary"],
            all: true,
            include: ["src"]            
        },
    },
});
