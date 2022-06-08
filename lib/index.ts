import {
  storyblokEditable as sbEdit,
  storyblokInit as sbInit,
  SbBlokData,
} from "@storyblok/js";
import { SbSvelteSDKOptions } from "./types";
import { SvelteComponentTyped } from "svelte";

export { useStoryblokBridge, apiPlugin } from "@storyblok/js";

export const storyblokEditable = (node: HTMLElement, value: SbBlokData) => {
  const updateDom = (value) => {
    const options = sbEdit(value);
    if (options["data-blok-c"]) {
      node.setAttribute("data-blok-c", options["data-blok-c"]);
      node.setAttribute("data-blok-uid", options["data-blok-uid"]);
      node.classList.add("storyblok__outline");
    }
  };

  updateDom(value); // when is mounted

  return {
    update(newValue) {
      // when value changes
      updateDom(newValue);
    },
  };
};

let storyblokApiInstance = null;
export const useStoryblokApi = () => {
  if (!storyblokApiInstance) {
    console.log(
      `You can't use getStoryblokApi if you're not loading apiPlugin.`
    );
  }
  return storyblokApiInstance;
};

export { useStoryblokApi as getStoryblokApi };

let componentsMap = null;
export const storyblokInit = (options: SbSvelteSDKOptions) => {
  const { storyblokApi } = sbInit(options);
  storyblokApiInstance = storyblokApi;
  componentsMap = options.components || {};
};

export const getComponent = (
  componentName: string
): SvelteComponentTyped<any> | undefined => {
  const component = componentsMap[componentName];
  if (!component) {
    console.error(`You didn't load the ${componentName} component. Please load it in storyblokInit. For example:
storyblokInit({
    accessToken: "<your-token>",
    components: {
      "teaser": Teaser
    }
})
`);
  }

  return component;
};

// export { default as StoryblokComponent } from "./StoryblokComponent.svelte";

export * from "./types";
