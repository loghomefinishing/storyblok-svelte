import App from "./App.svelte";
import { storyblokInit, apiPlugin } from "@storyblok/svelte";
import Teaser from "./Teaser.svelte";

storyblokInit({
  accessToken: "asa",
  components: {
    Teaser,
    // hola: "que pasa"
  },
});

// storyblokInit({
//   accessToken: 2,
//   use: [apiPlugin],
//   components: {
//     teaser: Teaser,
//   },
// });

const app = new App({
  target: document.getElementById("app"),
});

export default app;
