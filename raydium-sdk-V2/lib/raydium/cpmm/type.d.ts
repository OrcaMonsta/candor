import { PublicKey, EpochInfo } from '@solana/web3.js';
import { h as ApiV3Token, bL as ComputeBudgetConfig, p as ApiV3PoolInfoStandardItemCpmm, C as CpmmKeys, c8 as Percent, bO as GetTransferAmountFee } from '../../api-3c7c57f0.js';
import { TxVersion } from '../../common/txTool/txType.js';
import BN__default from 'bn.js';
import { SwapResult } from './curve/calculator.js';
import Decimal from 'decimal.js';
import { CpmmPoolInfoLayout } from './layout.js';
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

interface CpmmConfigInfoInterface {
    bump: number;
    disableCreatePool: boolean;
    index: number;
    tradeFeeRate: BN__default;
    protocolFeeRate: BN__default;
    fundFeeRate: BN__default;
    createPoolFee: BN__default;
    protocolOwner: PublicKey;
    fundOwner: PublicKey;
}
interface CpmmPoolInfoInterface {
    configId: PublicKey;
    poolCreator: PublicKey;
    vaultA: PublicKey;
    vaultB: PublicKey;
    mintLp: PublicKey;
    mintA: PublicKey;
    mintB: PublicKey;
    mintProgramA: PublicKey;
    mintProgramB: PublicKey;
    observationId: PublicKey;
    bump: number;
    status: number;
    lpDecimals: number;
    mintDecimalA: number;
    mintDecimalB: number;
    lpAmount: BN__default;
    protocolFeesMintA: BN__default;
    protocolFeesMintB: BN__default;
    fundFeesMintA: BN__default;
    fundFeesMintB: BN__default;
    openTime: BN__default;
}
interface CreateCpmmPoolParam<T> {
    programId: PublicKey;
    poolFeeAccount: PublicKey;
    mintA: Pick<ApiV3Token, "address" | "decimals" | "programId">;
    mintB: Pick<ApiV3Token, "address" | "decimals" | "programId">;
    mintAAmount: BN__default;
    mintBAmount: BN__default;
    startTime: BN__default;
    associatedOnly: boolean;
    checkCreateATAOwner?: boolean;
    ownerInfo: {
        feePayer?: PublicKey;
        useSOLBalance?: boolean;
    };
    computeBudgetConfig?: ComputeBudgetConfig;
    txVersion?: T;
}
interface CreateCpmmPoolAddress {
    poolId: PublicKey;
    configId: PublicKey;
    authority: PublicKey;
    lpMint: PublicKey;
    vaultA: PublicKey;
    vaultB: PublicKey;
    observationId: PublicKey;
    mintA: ApiV3Token;
    mintB: ApiV3Token;
    programId: PublicKey;
    poolFeeAccount: PublicKey;
}
interface AddCpmmLiquidityParams<T = TxVersion.LEGACY> {
    poolInfo: ApiV3PoolInfoStandardItemCpmm;
    poolKeys?: CpmmKeys;
    payer?: PublicKey;
    inputAmount: BN__default;
    baseIn: boolean;
    slippage: Percent;
    config?: {
        bypassAssociatedCheck?: boolean;
        checkCreateATAOwner?: boolean;
    };
    computeBudgetConfig?: ComputeBudgetConfig;
    txVersion?: T;
    computeResult?: {
        inputAmountFee: GetTransferAmountFee;
        anotherAmount: GetTransferAmountFee;
        maxAnotherAmount: GetTransferAmountFee;
        liquidity: BN__default;
    };
}
interface WithdrawCpmmLiquidityParams<T = TxVersion.LEGACY> {
    poolInfo: ApiV3PoolInfoStandardItemCpmm;
    poolKeys?: CpmmKeys;
    payer?: PublicKey;
    lpAmount: BN__default;
    slippage: Percent;
    computeBudgetConfig?: ComputeBudgetConfig;
    txVersion?: T;
}
interface CpmmSwapParams<T = TxVersion.LEGACY> {
    poolInfo: ApiV3PoolInfoStandardItemCpmm;
    poolKeys?: CpmmKeys;
    payer?: PublicKey;
    baseIn: boolean;
    slippage?: number;
    swapResult: SwapResult;
    inputAmount: BN__default;
    config?: {
        bypassAssociatedCheck?: boolean;
        checkCreateATAOwner?: boolean;
        associatedOnly?: boolean;
    };
    computeBudgetConfig?: ComputeBudgetConfig;
    txVersion?: T;
}
interface ComputePairAmountParams {
    poolInfo: ApiV3PoolInfoStandardItemCpmm;
    baseReserve: BN__default;
    quoteReserve: BN__default;
    amount: string | Decimal;
    slippage: Percent;
    epochInfo: EpochInfo;
    baseIn?: boolean;
}
declare type CpmmRpcData = ReturnType<typeof CpmmPoolInfoLayout.decode> & {
    baseReserve: BN__default;
    quoteReserve: BN__default;
    vaultAAmount: BN__default;
    vaultBAmount: BN__default;
    configInfo?: CpmmConfigInfoInterface;
    poolPrice: Decimal;
    programId: PublicKey;
};
declare type CpmmComputeData = {
    id: PublicKey;
    version: 7;
    configInfo: CpmmConfigInfoInterface;
    mintA: ApiV3Token;
    mintB: ApiV3Token;
    authority: PublicKey;
} & Omit<CpmmRpcData, "configInfo" | "mintA" | "mintB">;

export { AddCpmmLiquidityParams, ComputePairAmountParams, CpmmComputeData, CpmmConfigInfoInterface, CpmmPoolInfoInterface, CpmmRpcData, CpmmSwapParams, CreateCpmmPoolAddress, CreateCpmmPoolParam, WithdrawCpmmLiquidityParams };
