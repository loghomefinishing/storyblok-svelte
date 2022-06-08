<script lang="ts">
  import { SbBlokData } from "@storyblok/js";
  import { getComponent } from "./index";

  export let blok: SbBlokData;
  let component;

  if (blok) {
    component = getComponent(blok.component);
  } else {
    console.error("Please provide a 'blok' property to the StoryblokComponent");
  }
</script>

<!-- svelte-ignore missing-declaration -->
<svelte:component this={component} {blok} {...$$restProps} />
