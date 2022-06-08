import { SbSDKOptions, SbBlokData } from "@storyblok/js";
export {
  AlternateObject,
  Richtext,
  RichtextInstance,
  SbBlokData,
  SbBlokKeyDataTypes,
  SbSDKOptions,
  Stories,
  StoriesParams,
  Story,
  StoryData,
  StoryParams,
  StoryblokBridgeConfigV2,
  StoryblokBridgeV2,
  StoryblokCache,
  StoryblokCacheProvider,
  StoryblokConfig,
  StoryblokManagmentApiResult,
  StoryblokResult,
  apiPlugin,
  useStoryblokBridge,
} from "@storyblok/js";
import { SvelteComponent } from "svelte";

export interface StoryblokComponentType
  extends SvelteComponentTyped<any, any, any> {}

interface SbSvelteSDKOptions extends SbSDKOptions {
  components: {
    [name: string]: typeof SvelteComponent;
  };
}
interface StoryblokComponentProps {
  blok: SbBlokData;
}

declare const storyblokEditable: (
  node: HTMLElement,
  value: SbBlokData
) => {
  update(newValue: any): void;
};
declare const useStoryblokApi: () => any;
declare const storyblokInit: (options: SbSvelteSDKOptions) => void;
declare const getComponent: (
  componentName: string
) => SvelteComponentTyped<any> | undefined;
declare class StoryblokComponent extends SvelteComponentTyped<StoryblokComponentProps> {}

export {
  SbSvelteSDKOptions,
  getComponent,
  storyblokEditable,
  storyblokInit,
  useStoryblokApi,
  StoryblokComponent,
};
