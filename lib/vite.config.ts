import { defineConfig } from "vite";
import path from "path";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import sveltePreprocess from "svelte-preprocess";

const name = "storyblok-svelte";

export default defineConfig(() => {
  return {
    plugins: [
      // {
      //   enforce: "post",
      //   apply: "build",
      // },
      // svelteDts({ output: "dist/index.d.ts" }),
      svelte({ preprocess: [sveltePreprocess({ typescript: true })] }),
    ],
    build: {
      lib: {
        entry: path.resolve(__dirname, "index.ts"),
        name: "storyblokSvelte",
        fileName: (format) => (format === "es" ? `${name}.mjs` : `${name}.js`),
      },
      rollupOptions: {
        external: ["axios"], // FIX: temporary till we remove axios dependency in storyblok-js-client,
        plugins: [],
      },
    },
  };
});
