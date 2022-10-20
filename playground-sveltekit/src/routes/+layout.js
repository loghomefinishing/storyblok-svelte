import Feature from "../components/Feature.svelte";
import Grid from "../components/Grid.svelte";
import Page from "../components/Page.svelte";
import Teaser from "../components/Teaser.svelte";
import { apiPlugin, storyblokInit } from "@storyblok/svelte";

storyblokInit({
  accessToken: "QcaP2QpYTbrQzzOpxR7pmAtt",
  apiOptions: {
    region: "us", // Pass this key/value if your space was created under US region
  },
  use: [apiPlugin],
  components: {
    feature: Feature,
    grid: Grid,
    page: Page,
    teaser: Teaser,
  },
});
