import type { Plugin } from "@elizaos/core";

export * as actions from "./actions/index.ts";
export * as evaluators from "./evaluators/index.ts";
export * as providers from "./providers/index.ts";

import { walletProvider } from "./providers/wallet";
import { ginsengSwapProvider } from "./providers/ginswap";
import { swapAction } from "./actions/swap";

export const bootstrapPlugin2: Plugin = {
    name: "Ginseng Swap Plugin",
    description: "Plugin for swapping USDC/USDT tokens on Ginseng Swap (Uniswap V3 fork) on Conflux eSpace testnet",
    actions: [swapAction],
    evaluators: [],
    providers: [walletProvider, ginsengSwapProvider],
};
export default bootstrapPlugin2;
