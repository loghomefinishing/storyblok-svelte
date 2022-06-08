import { SvelteComponentTyped } from "svelte";
import { SbBlokData, SbSDKOptions } from "@storyblok/js";

export interface SbSvelteSDKOptions extends SbSDKOptions {
  components: {
    [name: string]: SvelteComponentTyped<any>;
  };
}

export type {
  StoryblokConfig,
  StoryblokCache,
  StoryblokCacheProvider,
  StoryblokResult,
  StoryblokManagmentApiResult,
  StoryblokComponentType,
  StoryData,
  AlternateObject,
  Stories,
  Story,
  StoriesParams,
  StoryParams,
  Richtext,
  RichtextInstance,
  SbBlokKeyDataTypes,
  SbBlokData,
  SbSDKOptions,
  StoryblokBridgeConfigV2,
  StoryblokBridgeV2,
} from "@storyblok/js";
