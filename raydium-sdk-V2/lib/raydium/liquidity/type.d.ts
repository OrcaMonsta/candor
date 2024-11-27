import { PublicKey } from '@solana/web3.js';
import { o as ApiV3PoolInfoStandardItem, v as AmmV4Keys, w as AmmV5Keys, c4 as TokenAmount, bL as ComputeBudgetConfig, ac as BigNumberish } from '../../api-3c7c57f0.js';
import { TxVersion } from '../../common/txTool/txType.js';
import BN__default from 'bn.js';
import { liquidityStateV4Layout } from './layout.js';
import Decimal from 'decimal.js';
import 'axios';
import '../../solana/type.js';
import '@solana/spl-token';
import '../../api/url.js';
import '../../common/txTool/lookupTable.js';
import '../../common/owner.js';
import '../../module/token.js';
import '../../common/pubKey.js';
import '../../common/logger.js';
import '../../module/currency.js';
import '../../marshmallow/index.js';
import '../../marshmallow/buffer-layout.js';

declare type LiquiditySide = "a" | "b";
declare type AmountSide = "base" | "quote";
interface AddLiquidityParams<T = TxVersion.LEGACY> {
    poolInfo: ApiV3PoolInfoStandardItem;
    poolKeys?: AmmV4Keys | AmmV5Keys;
    payer?: PublicKey;
    amountInA: TokenAmount;
    amountInB: TokenAmount;
    fixedSide: LiquiditySide;
    config?: {
        bypassAssociatedCheck?: boolean;
        checkCreateATAOwner?: boolean;
    };
    txVersion?: T;
    computeBudgetConfig?: ComputeBudgetConfig;
}
interface RemoveParams<T = TxVersion.LEGACY> {
    poolInfo: ApiV3PoolInfoStandardItem;
    poolKeys?: AmmV4Keys | AmmV5Keys;
    payer?: PublicKey;
    amountIn: BN__default;
    config?: {
        bypassAssociatedCheck?: boolean;
        checkCreateATAOwner?: boolean;
    };
    txVersion?: T;
    computeBudgetConfig?: ComputeBudgetConfig;
}
interface LiquidityUserKeys {
    baseTokenAccount: PublicKey;
    quoteTokenAccount: PublicKey;
    lpTokenAccount: PublicKey;
    owner: PublicKey;
}
interface LiquidityAddInstructionParams {
    poolInfo: ApiV3PoolInfoStandardItem;
    poolKeys: AmmV4Keys | AmmV5Keys;
    userKeys: LiquidityUserKeys;
    baseAmountIn: BigNumberish;
    quoteAmountIn: BigNumberish;
    fixedSide: AmountSide;
}
interface RemoveLiquidityInstruction {
    poolInfo: ApiV3PoolInfoStandardItem;
    poolKeys: AmmV4Keys | AmmV5Keys;
    userKeys: LiquidityUserKeys;
    amountIn: BigNumberish;
}
interface LiquidityPoolKeys {
    id: PublicKey;
    baseMint: PublicKey;
    quoteMint: PublicKey;
    lpMint: PublicKey;
    baseDecimals: number;
    quoteDecimals: number;
    lpDecimals: number;
    version: 4 | 5;
    programId: PublicKey;
    authority: PublicKey;
    nonce: number;
    baseVault: PublicKey;
    quoteVault: PublicKey;
    lpVault: PublicKey;
    openOrders: PublicKey;
    targetOrders: PublicKey;
    withdrawQueue: PublicKey;
    marketVersion: 3;
    marketProgramId: PublicKey;
    marketId: PublicKey;
    marketAuthority: PublicKey;
    lookupTableAccount: PublicKey;
    configId: PublicKey;
}
interface CreatePoolParam<T> {
    programId: PublicKey;
    marketInfo: {
        marketId: PublicKey;
        programId: PublicKey;
    };
    baseMintInfo: {
        mint: PublicKey;
        decimals: number;
    };
    quoteMintInfo: {
        mint: PublicKey;
        decimals: number;
    };
    baseAmount: BN__default;
    quoteAmount: BN__default;
    startTime: BN__default;
    ownerInfo: {
        feePayer?: PublicKey;
        useSOLBalance?: boolean;
    };
    associatedOnly: boolean;
    checkCreateATAOwner?: boolean;
    tokenProgram?: PublicKey;
    feeDestinationId: PublicKey;
    computeBudgetConfig?: ComputeBudgetConfig;
    txVersion?: T;
}
interface CreatePoolAddress {
    programId: PublicKey;
    ammId: PublicKey;
    ammAuthority: PublicKey;
    ammOpenOrders: PublicKey;
    lpMint: PublicKey;
    coinMint: PublicKey;
    pcMint: PublicKey;
    coinVault: PublicKey;
    pcVault: PublicKey;
    withdrawQueue: PublicKey;
    ammTargetOrders: PublicKey;
    poolTempLp: PublicKey;
    marketProgramId: PublicKey;
    marketId: PublicKey;
    ammConfigId: PublicKey;
    feeDestinationId: PublicKey;
}
interface SwapFixedInInstructionParamsV4 {
    poolKeys: AmmV4Keys | AmmV5Keys;
    userKeys: {
        tokenAccountIn: PublicKey;
        tokenAccountOut: PublicKey;
        owner: PublicKey;
    };
    amountIn: BigNumberish;
    minAmountOut: BigNumberish;
}
interface SwapFixedOutInstructionParamsV4 {
    poolKeys: AmmV4Keys | AmmV5Keys;
    userKeys: {
        tokenAccountIn: PublicKey;
        tokenAccountOut: PublicKey;
        owner: PublicKey;
    };
    maxAmountIn: BigNumberish;
    amountOut: BigNumberish;
}
declare type SwapSide = "in" | "out";
interface SwapInstructionParams {
    version: number;
    poolKeys: AmmV4Keys | AmmV5Keys;
    userKeys: {
        tokenAccountIn: PublicKey;
        tokenAccountOut: PublicKey;
        owner: PublicKey;
    };
    amountIn: BigNumberish;
    amountOut: BigNumberish;
    fixedSide: SwapSide;
}
interface InitPoolInstructionParamsV4 {
    poolKeys: AmmV4Keys | AmmV5Keys;
    userKeys: {
        lpTokenAccount: PublicKey;
        payer: PublicKey;
    };
    startTime: BigNumberish;
}
interface ComputeAmountOutParam {
    poolInfo: ApiV3PoolInfoStandardItem & {
        baseReserve: BN__default;
        quoteReserve: BN__default;
        version: 4 | 5;
        status: number;
    };
    mintIn: string | PublicKey;
    mintOut: string | PublicKey;
    amountIn: BN__default;
    slippage: number;
}
interface SwapParam<T = TxVersion.LEGACY> {
    poolInfo: ApiV3PoolInfoStandardItem;
    poolKeys?: AmmV4Keys | AmmV5Keys;
    amountIn: BN__default;
    amountOut: BN__default;
    inputMint: string;
    fixedSide: SwapSide;
    config?: {
        associatedOnly?: boolean;
        inputUseSolBalance?: boolean;
        outputUseSolBalance?: boolean;
    };
    computeBudgetConfig?: ComputeBudgetConfig;
    txVersion?: T;
}
declare type AmmRpcData = ReturnType<typeof liquidityStateV4Layout.decode> & {
    baseReserve: BN__default;
    quoteReserve: BN__default;
    mintAAmount: BN__default;
    mintBAmount: BN__default;
    poolPrice: Decimal;
    programId: PublicKey;
};

export { AddLiquidityParams, AmmRpcData, AmountSide, ComputeAmountOutParam, CreatePoolAddress, CreatePoolParam, InitPoolInstructionParamsV4, LiquidityAddInstructionParams, LiquidityPoolKeys, LiquiditySide, LiquidityUserKeys, RemoveLiquidityInstruction, RemoveParams, SwapFixedInInstructionParamsV4, SwapFixedOutInstructionParamsV4, SwapInstructionParams, SwapParam, SwapSide };