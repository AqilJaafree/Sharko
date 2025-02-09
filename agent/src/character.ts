import {
    type Character,
    ModelProviderName,
    defaultCharacter as DefaultElizaCharacter,
} from "@elizaos/core";
import { basicFlowPlugin } from "@fixes-ai/common";
import { incrementfiPlugin } from "@fixes-ai/plugin-incrementfi";

const localDefaultCharacter: Character = {
    modelProvider: ModelProviderName.DEEPSEEK,
    plugins: [basicFlowPlugin, incrementfiPlugin,],
} as Character;

export const defaultCharacter: Character = Object.assign(
    {},
    DefaultElizaCharacter,
    localDefaultCharacter
);

export default defaultCharacter;
