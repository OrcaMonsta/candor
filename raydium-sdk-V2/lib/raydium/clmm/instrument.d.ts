import { PublicKey, TransactionInstruction, Connection } from '@solana/web3.js';
import BN__default from 'bn.js';
import { g as ReturnTypeMakeInstructions, p as OpenPositionFromBaseExtInfo, r as OpenPositionFromLiquidityExtInfo, B as ClosePositionExtInfo, M as ManipulateLiquidityExtInfo, e as ClmmPoolPersonalPosition, E as InitRewardExtInfo } from '../../type-3376c02e.js';
import { ClmmPositionLayout } from './layout.js';
import { n as ApiV3PoolInfoConcentratedItem, y as ClmmKeys, h as ApiV3Token } from '../../api-3c7c57f0.js';
import 'decimal.js';
import '../../common/txTool/txType.js';
import '../../marshmallow/index.js';
import '../../marshmallow/buffer-layout.js';
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

interface CreatePoolInstruction {
    connection: Connection;
    programId: PublicKey;
    owner: PublicKey;
    mintA: ApiV3Token;
    mintB: ApiV3Token;
    ammConfigId: PublicKey;
    initialPriceX64: BN__default;
    startTime: BN__default;
    forerunCreate?: boolean;
}
declare class ClmmInstrument {
    static createPoolInstruction(programId: PublicKey, poolId: PublicKey, poolCreator: PublicKey, ammConfigId: PublicKey, observationId: PublicKey, mintA: PublicKey, mintVaultA: PublicKey, mintProgramIdA: PublicKey, mintB: PublicKey, mintVaultB: PublicKey, mintProgramIdB: PublicKey, exTickArrayBitmap: PublicKey, sqrtPriceX64: BN__default, startTime: BN__default): TransactionInstruction;
    static createPoolInstructions(props: CreatePoolInstruction): Promise<ReturnTypeMakeInstructions<{
        poolId: PublicKey;
        observationId: PublicKey;
        mintAVault: PublicKey;
        mintBVault: PublicKey;
    }>>;
    static openPositionFromLiquidityInstruction(programId: PublicKey, payer: PublicKey, poolId: PublicKey, positionNftOwner: PublicKey, positionNftMint: PublicKey, positionNftAccount: PublicKey, metadataAccount: PublicKey, protocolPosition: PublicKey, tickArrayLower: PublicKey, tickArrayUpper: PublicKey, personalPosition: PublicKey, ownerTokenAccountA: PublicKey, ownerTokenAccountB: PublicKey, tokenVaultA: PublicKey, tokenVaultB: PublicKey, tokenMintA: PublicKey, tokenMintB: PublicKey, tickLowerIndex: number, tickUpperIndex: number, tickArrayLowerStartIndex: number, tickArrayUpperStartIndex: number, liquidity: BN__default, amountMaxA: BN__default, amountMaxB: BN__default, withMetadata: "create" | "no-create", exTickArrayBitmap?: PublicKey): TransactionInstruction;
    static openPositionInstructions({ poolInfo, poolKeys, ownerInfo, tickLower, tickUpper, liquidity, amountMaxA, amountMaxB, withMetadata, getEphemeralSigners, }: {
        poolInfo: ApiV3PoolInfoConcentratedItem;
        poolKeys: ClmmKeys;
        ownerInfo: {
            feePayer: PublicKey;
            wallet: PublicKey;
            tokenAccountA: PublicKey;
            tokenAccountB: PublicKey;
        };
        tickLower: number;
        tickUpper: number;
        liquidity: BN__default;
        amountMaxA: BN__default;
        amountMaxB: BN__default;
        withMetadata: "create" | "no-create";
        getEphemeralSigners?: (k: number) => any;
    }): Promise<ReturnTypeMakeInstructions>;
    static openPositionFromBaseInstructions({ poolInfo, poolKeys, ownerInfo, tickLower, tickUpper, base, baseAmount, otherAmountMax, withMetadata, getEphemeralSigners, }: {
        poolInfo: ApiV3PoolInfoConcentratedItem;
        poolKeys: ClmmKeys;
        ownerInfo: {
            feePayer: PublicKey;
            wallet: PublicKey;
            tokenAccountA: PublicKey;
            tokenAccountB: PublicKey;
        };
        tickLower: number;
        tickUpper: number;
        base: "MintA" | "MintB";
        baseAmount: BN__default;
        otherAmountMax: BN__default;
        withMetadata: "create" | "no-create";
        getEphemeralSigners?: (k: number) => any;
    }): Promise<ReturnTypeMakeInstructions<OpenPositionFromBaseExtInfo>>;
    static openPositionFromBaseInstruction(programId: PublicKey, payer: PublicKey, poolId: PublicKey, positionNftOwner: PublicKey, positionNftMint: PublicKey, positionNftAccount: PublicKey, metadataAccount: PublicKey, protocolPosition: PublicKey, tickArrayLower: PublicKey, tickArrayUpper: PublicKey, personalPosition: PublicKey, ownerTokenAccountA: PublicKey, ownerTokenAccountB: PublicKey, tokenVaultA: PublicKey, tokenVaultB: PublicKey, tokenMintA: PublicKey, tokenMintB: PublicKey, tickLowerIndex: number, tickUpperIndex: number, tickArrayLowerStartIndex: number, tickArrayUpperStartIndex: number, withMetadata: "create" | "no-create", base: "MintA" | "MintB", baseAmount: BN__default, otherAmountMax: BN__default, exTickArrayBitmap?: PublicKey): TransactionInstruction;
    static openPositionFromLiquidityInstructions({ poolInfo, poolKeys, ownerInfo, tickLower, tickUpper, liquidity, amountMaxA, amountMaxB, withMetadata, getEphemeralSigners, }: {
        poolInfo: ApiV3PoolInfoConcentratedItem;
        poolKeys: ClmmKeys;
        ownerInfo: {
            wallet: PublicKey;
            tokenAccountA: PublicKey;
            tokenAccountB: PublicKey;
        };
        tickLower: number;
        tickUpper: number;
        liquidity: BN__default;
        amountMaxA: BN__default;
        amountMaxB: BN__default;
        withMetadata: "create" | "no-create";
        getEphemeralSigners?: (k: number) => any;
    }): Promise<ReturnTypeMakeInstructions<OpenPositionFromLiquidityExtInfo["address"]>>;
    static closePositionInstruction(programId: PublicKey, positionNftOwner: PublicKey, positionNftMint: PublicKey, positionNftAccount: PublicKey, personalPosition: PublicKey): TransactionInstruction;
    static closePositionInstructions({ poolInfo, poolKeys, ownerInfo, ownerPosition, }: {
        poolInfo: ApiV3PoolInfoConcentratedItem;
        poolKeys: ClmmKeys;
        ownerPosition: ClmmPositionLayout;
        ownerInfo: {
            wallet: PublicKey;
        };
    }): ReturnTypeMakeInstructions<ClosePositionExtInfo["address"]>;
    static increasePositionFromLiquidityInstruction(programId: PublicKey, positionNftOwner: PublicKey, positionNftAccount: PublicKey, personalPosition: PublicKey, poolId: PublicKey, protocolPosition: PublicKey, tickArrayLower: PublicKey, tickArrayUpper: PublicKey, ownerTokenAccountA: PublicKey, ownerTokenAccountB: PublicKey, mintVaultA: PublicKey, mintVaultB: PublicKey, mintMintA: PublicKey, mintMintB: PublicKey, liquidity: BN__default, amountMaxA: BN__default, amountMaxB: BN__default, exTickArrayBitmap?: PublicKey): TransactionInstruction;
    static increasePositionFromLiquidityInstructions({ poolInfo, poolKeys, ownerPosition, ownerInfo, liquidity, amountMaxA, amountMaxB, }: {
        poolInfo: ApiV3PoolInfoConcentratedItem;
        poolKeys: ClmmKeys;
        ownerPosition: ClmmPositionLayout;
        ownerInfo: {
            wallet: PublicKey;
            tokenAccountA: PublicKey;
            tokenAccountB: PublicKey;
        };
        liquidity: BN__default;
        amountMaxA: BN__default;
        amountMaxB: BN__default;
    }): ReturnTypeMakeInstructions<ManipulateLiquidityExtInfo["address"]>;
    static increasePositionFromBaseInstructions({ poolInfo, poolKeys, ownerPosition, ownerInfo, base, baseAmount, otherAmountMax, }: {
        poolInfo: ApiV3PoolInfoConcentratedItem;
        poolKeys: ClmmKeys;
        ownerPosition: ClmmPoolPersonalPosition;
        ownerInfo: {
            wallet: PublicKey;
            tokenAccountA: PublicKey;
            tokenAccountB: PublicKey;
        };
        base: "MintA" | "MintB";
        baseAmount: BN__default;
        otherAmountMax: BN__default;
    }): ReturnTypeMakeInstructions<ManipulateLiquidityExtInfo["address"]>;
    static increasePositionFromBaseInstruction(programId: PublicKey, positionNftOwner: PublicKey, positionNftAccount: PublicKey, personalPosition: PublicKey, poolId: PublicKey, protocolPosition: PublicKey, tickArrayLower: PublicKey, tickArrayUpper: PublicKey, ownerTokenAccountA: PublicKey, ownerTokenAccountB: PublicKey, mintVaultA: PublicKey, mintVaultB: PublicKey, mintMintA: PublicKey, mintMintB: PublicKey, base: "MintA" | "MintB", baseAmount: BN__default, otherAmountMax: BN__default, exTickArrayBitmap?: PublicKey): TransactionInstruction;
    static decreaseLiquidityInstruction(programId: PublicKey, positionNftOwner: PublicKey, positionNftAccount: PublicKey, personalPosition: PublicKey, poolId: PublicKey, protocolPosition: PublicKey, tickArrayLower: PublicKey, tickArrayUpper: PublicKey, ownerTokenAccountA: PublicKey, ownerTokenAccountB: PublicKey, mintVaultA: PublicKey, mintVaultB: PublicKey, mintMintA: PublicKey, mintMintB: PublicKey, rewardAccounts: {
        poolRewardVault: PublicKey;
        ownerRewardVault: PublicKey;
        rewardMint: PublicKey;
    }[], liquidity: BN__default, amountMinA: BN__default, amountMinB: BN__default, exTickArrayBitmap?: PublicKey): TransactionInstruction;
    static decreaseLiquidityInstructions({ poolInfo, poolKeys, ownerPosition, ownerInfo, liquidity, amountMinA, amountMinB, programId, }: {
        poolInfo: ApiV3PoolInfoConcentratedItem;
        poolKeys: ClmmKeys;
        ownerPosition: ClmmPositionLayout;
        ownerInfo: {
            wallet: PublicKey;
            tokenAccountA: PublicKey;
            tokenAccountB: PublicKey;
            rewardAccounts: PublicKey[];
        };
        liquidity: BN__default;
        amountMinA: BN__default;
        amountMinB: BN__default;
        programId?: PublicKey;
    }): ReturnTypeMakeInstructions<ManipulateLiquidityExtInfo["address"]>;
    static swapInstruction(programId: PublicKey, payer: PublicKey, poolId: PublicKey, ammConfigId: PublicKey, inputTokenAccount: PublicKey, outputTokenAccount: PublicKey, inputVault: PublicKey, outputVault: PublicKey, inputMint: PublicKey, outputMint: PublicKey, tickArray: PublicKey[], observationId: PublicKey, amount: BN__default, otherAmountThreshold: BN__default, sqrtPriceLimitX64: BN__default, isBaseInput: boolean, exTickArrayBitmap?: PublicKey): TransactionInstruction;
    static makeSwapBaseInInstructions({ poolInfo, poolKeys, observationId, ownerInfo, inputMint, amountIn, amountOutMin, sqrtPriceLimitX64, remainingAccounts, }: {
        poolInfo: Pick<ApiV3PoolInfoConcentratedItem, "id" | "programId" | "mintA" | "mintB" | "config">;
        poolKeys: ClmmKeys;
        observationId: PublicKey;
        ownerInfo: {
            wallet: PublicKey;
            tokenAccountA: PublicKey;
            tokenAccountB: PublicKey;
        };
        inputMint: PublicKey;
        amountIn: BN__default;
        amountOutMin: BN__default;
        sqrtPriceLimitX64: BN__default;
        remainingAccounts: PublicKey[];
    }): ReturnTypeMakeInstructions;
    static initRewardInstruction(programId: PublicKey, payer: PublicKey, poolId: PublicKey, operationId: PublicKey, ammConfigId: PublicKey, ownerTokenAccount: PublicKey, rewardProgramId: PublicKey, rewardMint: PublicKey, rewardVault: PublicKey, openTime: number, endTime: number, emissionsPerSecondX64: BN__default): TransactionInstruction;
    static initRewardInstructions({ poolInfo, poolKeys, ownerInfo, rewardInfo, }: {
        poolInfo: ApiV3PoolInfoConcentratedItem;
        poolKeys: ClmmKeys;
        ownerInfo: {
            wallet: PublicKey;
            tokenAccount: PublicKey;
        };
        rewardInfo: {
            programId: PublicKey;
            mint: PublicKey;
            openTime: number;
            endTime: number;
            emissionsPerSecondX64: BN__default;
        };
    }): ReturnTypeMakeInstructions<InitRewardExtInfo["address"]>;
    static setRewardInstruction(programId: PublicKey, payer: PublicKey, poolId: PublicKey, operationId: PublicKey, ammConfigId: PublicKey, ownerTokenAccount: PublicKey, rewardVault: PublicKey, rewardMint: PublicKey, rewardIndex: number, openTime: number, endTime: number, emissionsPerSecondX64: BN__default): TransactionInstruction;
    static setRewardInstructions({ poolInfo, poolKeys, ownerInfo, rewardInfo, }: {
        poolInfo: ApiV3PoolInfoConcentratedItem;
        poolKeys: ClmmKeys;
        ownerInfo: {
            wallet: PublicKey;
            tokenAccount: PublicKey;
        };
        rewardInfo: {
            mint: PublicKey;
            openTime: number;
            endTime: number;
            emissionsPerSecondX64: BN__default;
        };
    }): ReturnTypeMakeInstructions;
    static collectRewardInstruction(programId: PublicKey, payer: PublicKey, poolId: PublicKey, ownerTokenAccount: PublicKey, rewardVault: PublicKey, rewardMint: PublicKey, rewardIndex: number): TransactionInstruction;
    static collectRewardInstructions({ poolInfo, poolKeys, ownerInfo, rewardMint, }: {
        poolInfo: ApiV3PoolInfoConcentratedItem;
        poolKeys: ClmmKeys;
        ownerInfo: {
            wallet: PublicKey;
            tokenAccount: PublicKey;
        };
        rewardMint: PublicKey;
    }): ReturnTypeMakeInstructions;
    static swapBaseOutInstructions({ poolInfo, poolKeys, ownerInfo, outputMint, amountOut, amountInMax, sqrtPriceLimitX64, remainingAccounts, }: {
        poolInfo: ApiV3PoolInfoConcentratedItem;
        poolKeys: ClmmKeys;
        ownerInfo: {
            wallet: PublicKey;
            tokenAccountA: PublicKey;
            tokenAccountB: PublicKey;
        };
        outputMint: PublicKey;
        amountOut: BN__default;
        amountInMax: BN__default;
        sqrtPriceLimitX64: BN__default;
        remainingAccounts: PublicKey[];
    }): ReturnTypeMakeInstructions;
}

export { ClmmInstrument };
