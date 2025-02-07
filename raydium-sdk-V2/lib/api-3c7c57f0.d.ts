import { AxiosInstance } from 'axios';
import { Cluster } from './solana/type.js';
import { PublicKey, TransactionInstruction, Signer, Transaction, VersionedTransaction, Connection, Commitment } from '@solana/web3.js';
import BN__default from 'bn.js';
import { Mint, TransferFeeConfig } from '@solana/spl-token';
import { API_URL_CONFIG } from './api/url.js';
import { CacheLTA } from './common/txTool/lookupTable.js';
import { TxVersion } from './common/txTool/txType.js';
import { Owner } from './common/owner.js';
import Decimal from 'decimal.js';
import { Token, TokenProps } from './module/token.js';
import { Logger } from './common/logger.js';
import { Currency } from './module/currency.js';
import { Structure, GetStructureFromLayoutSchema } from './marshmallow/index.js';
import { GetStructureSchema } from './marshmallow/buffer-layout.js';

interface ExecuteParams {
    skipPreflight?: boolean;
    recentBlockHash?: string;
    sendAndConfirm?: boolean;
}
interface TxBuilderInit {
    connection: Connection;
    feePayer: PublicKey;
    cluster: Cluster;
    owner?: Owner;
    blockhashCommitment?: Commitment;
    api?: Api;
    signAllTransactions?: SignAllTransactions;
}
interface AddInstructionParam {
    addresses?: Record<string, PublicKey>;
    instructions?: TransactionInstruction[];
    endInstructions?: TransactionInstruction[];
    lookupTableAddress?: string[];
    signers?: Signer[];
    instructionTypes?: string[];
    endInstructionTypes?: string[];
}
interface TxBuildData<T = Record<string, any>> {
    builder: TxBuilder;
    transaction: Transaction;
    instructionTypes: string[];
    signers: Signer[];
    execute: (params?: ExecuteParams) => Promise<{
        txId: string;
        signedTx: Transaction;
    }>;
    extInfo: T;
}
interface TxV0BuildData<T = Record<string, any>> extends Omit<TxBuildData<T>, "transaction" | "execute"> {
    builder: TxBuilder;
    transaction: VersionedTransaction;
    buildProps?: {
        lookupTableCache?: CacheLTA;
        lookupTableAddress?: string[];
    };
    execute: (params?: ExecuteParams) => Promise<{
        txId: string;
        signedTx: VersionedTransaction;
    }>;
}
declare type TxUpdateParams = {
    txId: string;
    status: "success" | "error" | "sent";
    signedTx: Transaction | VersionedTransaction;
};
interface MultiTxExecuteParam extends ExecuteParams {
    sequentially: boolean;
    onTxUpdate?: (completeTxs: TxUpdateParams[]) => void;
}
interface MultiTxBuildData<T = Record<string, any>> {
    builder: TxBuilder;
    transactions: Transaction[];
    instructionTypes: string[];
    signers: Signer[][];
    execute: (executeParams?: MultiTxExecuteParam) => Promise<{
        txIds: string[];
        signedTxs: Transaction[];
    }>;
    extInfo: T;
}
interface MultiTxV0BuildData<T = Record<string, any>> extends Omit<MultiTxBuildData<T>, "transactions" | "execute"> {
    builder: TxBuilder;
    transactions: VersionedTransaction[];
    buildProps?: {
        lookupTableCache?: CacheLTA;
        lookupTableAddress?: string[];
    };
    execute: (executeParams?: MultiTxExecuteParam) => Promise<{
        txIds: string[];
        signedTxs: VersionedTransaction[];
    }>;
}
declare type MakeMultiTxData<T = TxVersion.LEGACY, O = Record<string, any>> = T extends TxVersion.LEGACY ? MultiTxBuildData<O> : MultiTxV0BuildData<O>;
declare type MakeTxData<T = TxVersion.LEGACY, O = Record<string, any>> = T extends TxVersion.LEGACY ? TxBuildData<O> : TxV0BuildData<O>;
declare class TxBuilder {
    private connection;
    private owner?;
    private instructions;
    private endInstructions;
    private lookupTableAddress;
    private signers;
    private instructionTypes;
    private endInstructionTypes;
    private feePayer;
    private cluster;
    private signAllTransactions?;
    private blockhashCommitment?;
    private api?;
    constructor(params: TxBuilderInit);
    get AllTxData(): {
        instructions: TransactionInstruction[];
        endInstructions: TransactionInstruction[];
        signers: Signer[];
        instructionTypes: string[];
        endInstructionTypes: string[];
        lookupTableAddress: string[];
    };
    get allInstructions(): TransactionInstruction[];
    getComputeBudgetConfig(): Promise<ComputeBudgetConfig | undefined>;
    addCustomComputeBudget(config?: ComputeBudgetConfig): boolean;
    calComputeBudget({ config: propConfig, defaultIns, }: {
        config?: ComputeBudgetConfig;
        defaultIns?: TransactionInstruction[];
    }): Promise<void>;
    addInstruction({ instructions, endInstructions, signers, instructionTypes, endInstructionTypes, lookupTableAddress, }: AddInstructionParam): TxBuilder;
    versionBuild<O = Record<string, any>>({ txVersion, extInfo, }: {
        txVersion?: TxVersion;
        extInfo?: O;
    }): Promise<MakeTxData<TxVersion.LEGACY, O> | MakeTxData<TxVersion.V0, O>>;
    build<O = Record<string, any>>(extInfo?: O): MakeTxData<TxVersion.LEGACY, O>;
    buildMultiTx<T = Record<string, any>>(params: {
        extraPreBuildData?: MakeTxData<TxVersion.LEGACY>[];
        extInfo?: T;
    }): MultiTxBuildData;
    versionMultiBuild<T extends TxVersion, O = Record<string, any>>({ extraPreBuildData, txVersion, extInfo, }: {
        extraPreBuildData?: MakeTxData<TxVersion.V0>[] | MakeTxData<TxVersion.LEGACY>[];
        txVersion?: T;
        extInfo?: O;
    }): Promise<MakeMultiTxData<T, O>>;
    buildV0<O = Record<string, any>>(props?: O & {
        lookupTableCache?: CacheLTA;
        lookupTableAddress?: string[];
        forerunCreate?: boolean;
    }): Promise<MakeTxData<TxVersion.V0, O>>;
    buildV0MultiTx<T = Record<string, any>>(params: {
        extraPreBuildData?: MakeTxData<TxVersion.V0>[];
        buildProps?: T & {
            lookupTableCache?: CacheLTA;
            lookupTableAddress?: string[];
        };
    }): Promise<MultiTxV0BuildData>;
    sizeCheckBuild(props?: Record<string, any> & {
        computeBudgetConfig?: ComputeBudgetConfig;
    }): Promise<MultiTxBuildData>;
    sizeCheckBuildV0(props?: Record<string, any> & {
        computeBudgetConfig?: ComputeBudgetConfig;
        lookupTableCache?: CacheLTA;
        lookupTableAddress?: string[];
    }): Promise<MultiTxV0BuildData>;
}

declare class Fraction {
    readonly numerator: BN__default;
    readonly denominator: BN__default;
    constructor(numerator: BigNumberish, denominator?: BigNumberish);
    get quotient(): BN__default;
    invert(): Fraction;
    add(other: Fraction | BigNumberish): Fraction;
    sub(other: Fraction | BigNumberish): Fraction;
    mul(other: Fraction | BigNumberish): Fraction;
    div(other: Fraction | BigNumberish): Fraction;
    toSignificant(significantDigits: number, format?: object, rounding?: Rounding): string;
    toFixed(decimalPlaces: number, format?: object, rounding?: Rounding): string;
    isZero(): boolean;
}

interface PriceProps {
    baseToken: Token;
    denominator: BigNumberish;
    quoteToken: Token;
    numerator: BigNumberish;
}
declare class Price extends Fraction {
    readonly baseToken: Token;
    readonly quoteToken: Token;
    readonly scalar: Fraction;
    constructor(params: PriceProps);
    get raw(): Fraction;
    get adjusted(): Fraction;
    invert(): Price;
    mul(other: Price): Price;
    toSignificant(significantDigits?: number, format?: object, rounding?: Rounding): string;
    toFixed(decimalPlaces?: number, format?: object, rounding?: Rounding): string;
}

declare const _100_PERCENT: Fraction;
declare class Percent extends Fraction {
    toSignificant(significantDigits?: number, format?: object, rounding?: Rounding): string;
    toFixed(decimalPlaces?: number, format?: object, rounding?: Rounding): string;
}

declare type TokenInfo = ApiV3Token & {
    priority: number;
    userAdded?: boolean;
    type?: string;
};
interface TokenJson {
    symbol: string;
    name: string;
    mint: string;
    decimals: number;
    extensions: {
        coingeckoId?: string;
    };
    icon: string;
    hasFreeze?: boolean;
}
declare type SplToken = TokenProps & {
    icon: string;
    id: string;
    extensions: {
        [key in "coingeckoId" | "website" | "whitepaper"]?: string;
    };
    userAdded?: boolean;
};
declare type LpToken = Token & {
    isLp: true;
    base: SplToken;
    quote: SplToken;
    icon: string;
    /** mint. for `<TokenSelector>`*/
    id: string;
    extensions: {
        [key in "coingeckoId" | "website" | "whitepaper"]?: string;
    };
};

declare enum Rounding {
    ROUND_DOWN = 0,
    ROUND_HALF_UP = 1,
    ROUND_UP = 2
}
declare const BN_ZERO: BN__default;
declare const BN_ONE: BN__default;
declare const BN_TWO: BN__default;
declare const BN_THREE: BN__default;
declare const BN_FIVE: BN__default;
declare const BN_TEN: BN__default;
declare const BN_100: BN__default;
declare const BN_1000: BN__default;
declare const BN_10000: BN__default;
declare type BigNumberish = BN__default | string | number | bigint;
declare type Numberish = number | string | bigint | Fraction | BN__default;
declare function parseBigNumberish(value: BigNumberish): BN__default;
declare function tenExponential(shift: BigNumberish): BN__default;
/**
 *
 * @example
 * getIntInfo(0.34) => { numerator: '34', denominator: '100'}
 * getIntInfo('0.34') //=> { numerator: '34', denominator: '100'}
 */
declare function parseNumberInfo(n: Numberish | undefined): {
    denominator: string;
    numerator: string;
    sign?: string;
    int?: string;
    dec?: string;
};
declare function divCeil(a: BN__default, b: BN__default): BN__default;
declare function shakeFractionDecimal(n: Fraction): string;
declare function toBN(n: Numberish, decimal?: BigNumberish): BN__default;
declare function toFraction(value: Numberish): Fraction;
/**
 * @example
 * toPercent(3.14) // => Percent { 314.00% }
 * toPercent(3.14, { alreadyDecimaled: true }) // => Percent {3.14%}
 */
declare function toPercent(n: Numberish, options?: {
    alreadyDecimaled?: boolean;
}): Percent;
declare function toTokenPrice(params: {
    token: TokenJson | Token | SplToken;
    numberPrice: Numberish;
    decimalDone?: boolean;
}): Price;
declare function toUsdCurrency(amount: Numberish): CurrencyAmount;
declare function toTotalPrice(amount: Numberish | undefined, price: Price | undefined): CurrencyAmount;
declare function decimalToFraction(n: Decimal | undefined): Fraction | undefined;
declare function isDecimal(val: unknown): boolean;
declare function recursivelyDecimalToFraction<T>(info: T): ReplaceType<T, Decimal, Fraction>;

declare function splitNumber(num: string, decimals: number): [string, string];
declare class TokenAmount extends Fraction {
    readonly token: Token;
    protected logger: Logger;
    constructor(token: Token, amount: BigNumberish, isRaw?: boolean, name?: string);
    get raw(): BN__default;
    isZero(): boolean;
    gt(other: TokenAmount): boolean;
    /**
     * a less than b
     */
    lt(other: TokenAmount): boolean;
    add(other: TokenAmount): TokenAmount;
    subtract(other: TokenAmount): TokenAmount;
    toSignificant(significantDigits?: number, format?: object, rounding?: Rounding): string;
    /**
     * To fixed
     *
     * @example
     * ```
     * 1 -> 1.000000000
     * 1.234 -> 1.234000000
     * 1.123456789876543 -> 1.123456789
     * ```
     */
    toFixed(decimalPlaces?: number, format?: object, rounding?: Rounding): string;
    /**
     * To exact
     *
     * @example
     * ```
     * 1 -> 1
     * 1.234 -> 1.234
     * 1.123456789876543 -> 1.123456789
     * ```
     */
    toExact(format?: object): string;
}
declare class CurrencyAmount extends Fraction {
    readonly currency: Currency;
    protected logger: Logger;
    constructor(currency: Currency, amount: BigNumberish, isRaw?: boolean, name?: string);
    get raw(): BN__default;
    isZero(): boolean;
    /**
     * a greater than b
     */
    gt(other: CurrencyAmount): boolean;
    /**
     * a less than b
     */
    lt(other: CurrencyAmount): boolean;
    add(other: CurrencyAmount): CurrencyAmount;
    sub(other: CurrencyAmount): CurrencyAmount;
    toSignificant(significantDigits?: number, format?: object, rounding?: Rounding): string;
    /**
     * To fixed
     *
     * @example
     * ```
     * 1 -> 1.000000000
     * 1.234 -> 1.234000000
     * 1.123456789876543 -> 1.123456789
     * ```
     */
    toFixed(decimalPlaces?: number, format?: object, rounding?: Rounding): string;
    /**
     * To exact
     *
     * @example
     * ```
     * 1 -> 1
     * 1.234 -> 1.234
     * 1.123456789876543 -> 1.123456789
     * ```
     */
    toExact(format?: object): string;
}

declare type SignAllTransactions = (<T extends Transaction | VersionedTransaction>(transaction: T[]) => Promise<T[]>) | undefined;
interface MakeTransaction<T = Record<string, any>> {
    builder: TxBuilder;
    signers: Signer[];
    transaction: Transaction;
    instructionTypes: string[];
    execute: () => Promise<{
        txId: string;
        signedTx: Transaction;
    }>;
    extInfo: T;
}
interface MakeV0Transaction<T = Record<string, any>> {
    builder: TxBuilder;
    signers: Signer[];
    transaction: VersionedTransaction;
    instructionTypes: string[];
    execute: () => Promise<string>;
    extInfo: T;
}
interface MakeMultiTransaction {
    builder: TxBuilder;
    signers: Signer[][];
    transactions: Transaction[];
    instructionTypes: string[];
    execute: (params?: MultiTxExecuteParam) => Promise<{
        txIds: string[];
        signedTxs: Transaction[];
    }>;
    extInfo: Record<string, any>;
}
interface InstructionReturn {
    instruction: TransactionInstruction;
    instructionType: string;
}
interface ComputeBudgetConfig {
    units?: number;
    microLamports?: number;
}
interface LoadParams {
    forceUpdate?: boolean;
}
interface TransferAmountFee {
    amount: TokenAmount;
    fee: TokenAmount | undefined;
    expirationTime: number | undefined;
}
interface GetTransferAmountFee {
    amount: BN__default;
    fee: BN__default | undefined;
    expirationTime: number | undefined;
}
declare type ReturnTypeFetchMultipleMintInfo = Mint & {
    feeConfig: TransferFeeConfig | undefined;
};
interface ReturnTypeFetchMultipleMintInfos {
    [mint: string]: ReturnTypeFetchMultipleMintInfo & {
        programId: PublicKey;
    };
}
declare type Primitive = boolean | number | string | null | undefined | PublicKey;
/**
 *
 * @example
 * ```typescript
 * interface A {
 *   keyA: string;
 *   keyB: string;
 *   map: {
 *     hello: string;
 *     i: number;
 *   };
 *   list: (string | number)[];
 *   keyC: number;
 * }
 *
 * type WrappedA = ReplaceType<A, string, boolean> // {
 *   keyA: boolean;
 *   keyB: boolean;
 *   map: {
 *     hello: boolean;
 *     i: number;
 *   };
 *   list: (number | boolean)[];
 *   keyC: number;
 * }
 * ```
 */
declare type ReplaceType<Old, From, To> = {
    [T in keyof Old]: Old[T] extends From ? Exclude<Old[T], From> | To : Old[T] extends Primitive ? From extends Old[T] ? Exclude<Old[T], From> | To : Old[T] : ReplaceType<Old[T], From, To>;
};
declare type MayArray<T> = T | Array<T>;
declare type MayDeepArray<T> = T | Array<MayDeepArray<T>>;
declare type MayFunction<T, PS extends any[] = []> = T | ((...Params: PS) => T);
declare type ArrayItem<T extends ReadonlyArray<any>> = T extends Array<infer P> ? P : never;
declare type ExactPartial<T, U> = {
    [P in Extract<keyof T, U>]?: T[P];
} & {
    [P in Exclude<keyof T, U>]: T[P];
};
declare type ExactRequired<T, U> = {
    [P in Extract<keyof T, U>]-?: T[P];
} & {
    [P in Exclude<keyof T, U>]: T[P];
};
/**
 * extract only string and number
 */
declare type SKeyof<O> = Extract<keyof O, string>;
declare type GetValue<T, K> = K extends keyof T ? T[K] : undefined;
/**
 * @example
 * type A = { a: number; b: string; c?: string }
 * type B = { a: string; c: string; d?: boolean }
 *
 * type D = SOR<A, B> // { a: number | string; b: string | undefined; c: string | undefined; d: boolean | undefined } // ! if use SOR, you lost union type guard feature, try NOT to use this trick
 */
declare type SOR<T, U> = {
    [K in keyof T | keyof U]: GetValue<T, K> | GetValue<U, K>;
};
declare type Fallback<T, FallbackT> = T extends undefined ? FallbackT : T;
/**
 * @example
 * type A = { a: number; b: string; c?: string }
 * type B = { a: string; c: string; d?: boolean }
 *
 * type D = Cover<A, B> // { a: string; b: string; c: string; d?: boolean}
 */
declare type Cover<O, T> = {
    [K in SKeyof<O> | SKeyof<T>]: Fallback<GetValue<T, K>, GetValue<O, K>>;
};
declare type UnionCover<O, T> = T extends T ? Cover<O, T> : never;
declare type MergeArr<Arr> = (Arr extends (infer T)[] ? T : never)[];
/**
 * typescript type helper function
 * @example
 * type A = { hello: string; version: 3 }[]
 * type B = { hello: string; version: 5 }[]
 * type OK = MergeArr<A | B> // ({ hello: string; version: 3 } | { hello: string; version: 5 })[]
 * type Wrong = A | B // { hello: string; version: 3 }[] | { hello: string; version: 5 }[] // <= this type can't have auto type intelligense of array.map
 */
declare const unionArr: <T>(arr: T) => MergeArr<T>;

declare type FarmVersion = 3 | 4 | 5 | 6;
declare const FARM_LOCK_MINT: PublicKey;
declare const FARM_LOCK_VAULT: PublicKey;
declare const FARM_VERSION_TO_STATE_LAYOUT: {
    [version in FarmVersion]?: FarmStateLayout;
};
declare const FARM_VERSION_TO_LEDGER_LAYOUT: {
    [version in FarmVersion]?: FarmLedgerLayout;
};
declare const isValidFarmVersion: (version: number) => boolean;
declare const validateFarmRewards: (params: {
    version: number;
    rewardInfos: {
        mint: ApiV3Token;
    }[];
    rewardTokenAccountsPublicKeys: PublicKey[];
}) => (() => string | undefined);
declare const poolTypeV6: {
    "Standard SPL": number;
    "Option tokens": number;
};
declare const FARM_PROGRAM_TO_VERSION: Record<string, 3 | 5 | 6>;

declare type RewardType = keyof typeof poolTypeV6;
interface APIRewardInfo {
    rewardMint: string;
    rewardVault: string;
    rewardOpenTime: number;
    rewardEndTime: number;
    rewardPerSecond: string | number;
    rewardSender?: string;
    rewardType: string;
}
interface RewardInfoWithKey {
    rewardMint: PublicKey;
    rewardVault: PublicKey;
    rewardOpenTime: number;
    rewardEndTime: number;
    rewardType: RewardType;
    rewardPerSecond: string | number;
    rewardSender?: PublicKey;
}
interface FarmRewardInfo {
    mint: PublicKey;
    perSecond: string;
    openTime: number;
    endTime: number;
    rewardType: RewardType;
}
interface FarmRewardInfoConfig {
    isSet: BN__default;
    rewardPerSecond: BN__default;
    rewardOpenTime: BN__default;
    rewardEndTime: BN__default;
    rewardType: BN__default;
}
interface RewardInfoKey {
    rewardMint: PublicKey;
    rewardVault: PublicKey;
    userRewardToken: PublicKey;
}
interface FarmPoolInfoV6 {
    version: number;
    programId: PublicKey;
    lpMint: PublicKey;
    rewardInfos: FarmRewardInfo[];
    lockInfo: {
        lockMint: PublicKey;
        lockVault: PublicKey;
    };
}
interface CreateFarm<T = TxVersion.LEGACY> {
    poolInfo: ApiV3PoolInfoStandardItem;
    rewardInfos: FarmRewardInfo[];
    payer?: PublicKey;
    programId?: PublicKey;
    txVersion?: T;
}
interface CreateFarmExtInfo {
    farmId: PublicKey;
    farmAuthority: PublicKey;
    lpVault: PublicKey;
    lockUserAccount: PublicKey;
    nonce: number;
}
interface UpdateFarmReward<T = TxVersion.LEGACY> {
    farmInfo: FormatFarmInfoOut;
    newRewardInfo: FarmRewardInfo;
    payer?: PublicKey;
    txVersion?: T;
}
interface UpdateFarmRewards<T = TxVersion.LEGACY> {
    farmInfo: FormatFarmInfoOut;
    newRewardInfos: FarmRewardInfo[];
    payer?: PublicKey;
    txVersion?: T;
}
interface FarmDWParam<T = TxVersion.LEGACY> {
    farmInfo: {
        id: string;
        programId: string;
        lpMint: ApiV3Token;
        rewardInfos: {
            mint: ApiV3Token;
        }[];
    };
    amount: BigNumberish;
    feePayer?: PublicKey;
    useSOLBalance?: boolean;
    associatedOnly?: boolean;
    checkCreateATAOwner?: boolean;
    deposited?: BN__default;
    txVersion?: T;
    userAuxiliaryLedgers?: string[];
    computeBudgetConfig?: ComputeBudgetConfig;
}
declare type FarmPoolKeys = {
    readonly id: PublicKey;
    readonly lpMint: PublicKey;
    readonly version: number;
    readonly programId: PublicKey;
    readonly authority: PublicKey;
    readonly lpVault: PublicKey;
    readonly upcoming: boolean;
    readonly rewardInfos: ({
        readonly rewardMint: PublicKey;
        readonly rewardVault: PublicKey;
    } | {
        readonly rewardMint: PublicKey;
        readonly rewardVault: PublicKey;
        readonly rewardOpenTime: number;
        readonly rewardEndTime: number;
        readonly rewardPerSecond: number;
        readonly rewardType: RewardType;
    })[];
};

declare const associatedLedgerAccountLayout: Structure<number, "", {
    instruction: number;
}>;
declare const withdrawRewardLayout: Structure<number, "", {
    instruction: number;
}>;
declare const realFarmStateV3Layout: Structure<PublicKey | BN__default, "", {
    state: BN__default;
    nonce: BN__default;
    lpVault: PublicKey;
    rewardVault: PublicKey;
    totalReward: BN__default;
    perShareReward: BN__default;
    lastSlot: BN__default;
    perSlotReward: BN__default;
}>;
declare const realFarmStateV5Layout: Structure<number | PublicKey | Buffer | BN__default, "", {
    state: BN__default;
    nonce: BN__default;
    lpVault: PublicKey;
    lastSlot: BN__default;
    rewardVaultA: PublicKey;
    totalRewardA: BN__default;
    perShareRewardA: BN__default;
    perSlotRewardA: BN__default;
    option: number;
    rewardVaultB: PublicKey;
    totalRewardB: BN__default;
    perShareRewardB: BN__default;
    perSlotRewardB: BN__default;
}>;
declare const realFarmV6Layout: Structure<PublicKey | BN__default | BN__default[] | {
    rewardVault: PublicKey;
    totalReward: BN__default;
    rewardState: BN__default;
    rewardOpenTime: BN__default;
    rewardEndTime: BN__default;
    rewardLastUpdateTime: BN__default;
    totalRewardEmissioned: BN__default;
    rewardClaimed: BN__default;
    rewardPerSecond: BN__default;
    accRewardPerShare: BN__default;
    rewardMint: PublicKey;
    rewardSender: PublicKey;
    rewardType: BN__default;
    padding: BN__default[];
}[], "", {
    state: BN__default;
    nonce: BN__default;
    lpVault: PublicKey;
    validRewardTokenNum: BN__default;
    rewardMultiplier: BN__default;
    rewardPeriodMax: BN__default;
    rewardPeriodMin: BN__default;
    rewardPeriodExtend: BN__default;
    lpMint: PublicKey;
    padding: BN__default[];
    rewardInfos: {
        rewardVault: PublicKey;
        totalReward: BN__default;
        rewardState: BN__default;
        rewardOpenTime: BN__default;
        rewardEndTime: BN__default;
        rewardLastUpdateTime: BN__default;
        totalRewardEmissioned: BN__default;
        rewardClaimed: BN__default;
        rewardPerSecond: BN__default;
        accRewardPerShare: BN__default;
        rewardMint: PublicKey;
        rewardSender: PublicKey;
        rewardType: BN__default;
        padding: BN__default[];
    }[];
    creator: PublicKey;
}>;
declare const farmStateV3Layout: GetStructureFromLayoutSchema<{
    version: 3;
    rewardInfos: {
        rewardVault: PublicKey;
        totalReward: BN__default;
        perSlotReward: BN__default;
        perShareReward: BN__default;
    }[];
} & {
    state: BN__default;
    nonce: BN__default;
    lpVault: PublicKey;
    rewardVault: PublicKey;
    totalReward: BN__default;
    perShareReward: BN__default;
    lastSlot: BN__default;
    perSlotReward: BN__default;
}>;
declare const farmStateV5Layout: GetStructureFromLayoutSchema<{
    version: 5;
    rewardInfos: {
        rewardVault: PublicKey;
        totalReward: BN__default;
        perSlotReward: BN__default;
        perShareReward: BN__default;
    }[];
} & {
    state: BN__default;
    nonce: BN__default;
    lpVault: PublicKey;
    lastSlot: BN__default;
    rewardVaultA: PublicKey;
    totalRewardA: BN__default;
    perShareRewardA: BN__default;
    perSlotRewardA: BN__default;
    option: number;
    rewardVaultB: PublicKey;
    totalRewardB: BN__default;
    perShareRewardB: BN__default;
    perSlotRewardB: BN__default;
}>;
declare const farmStateV6Layout: GetStructureFromLayoutSchema<{
    version: 6;
    rewardInfos: {
        rewardState: BN__default;
        rewardOpenTime: BN__default;
        rewardEndTime: BN__default;
        rewardLastUpdateTime: BN__default;
        totalReward: BN__default;
        totalRewardEmissioned: BN__default;
        rewardClaimed: BN__default;
        rewardPerSecond: BN__default;
        accRewardPerShare: BN__default;
        rewardVault: PublicKey;
        rewardMint: PublicKey;
        rewardSender: PublicKey;
        rewardType: RewardType;
    }[];
} & {
    state: BN__default;
    nonce: BN__default;
    lpVault: PublicKey;
    validRewardTokenNum: BN__default;
    rewardMultiplier: BN__default;
    rewardPeriodMax: BN__default;
    rewardPeriodMin: BN__default;
    rewardPeriodExtend: BN__default;
    lpMint: PublicKey;
    padding: BN__default[];
    rewardInfos: {
        rewardVault: PublicKey;
        totalReward: BN__default;
        rewardState: BN__default;
        rewardOpenTime: BN__default;
        rewardEndTime: BN__default;
        rewardLastUpdateTime: BN__default;
        totalRewardEmissioned: BN__default;
        rewardClaimed: BN__default;
        rewardPerSecond: BN__default;
        accRewardPerShare: BN__default;
        rewardMint: PublicKey;
        rewardSender: PublicKey;
        rewardType: BN__default;
        padding: BN__default[];
    }[];
    creator: PublicKey;
}>;
declare const farmRewardTimeInfoLayout: Structure<BN__default, "", {
    rewardOpenTime: BN__default;
    rewardEndTime: BN__default;
    rewardPerSecond: BN__default;
    rewardType: BN__default;
    isSet: BN__default;
}>;
declare const farmRewardLayout: Structure<number | BN__default | {
    rewardOpenTime: BN__default;
    rewardEndTime: BN__default;
    rewardPerSecond: BN__default;
    rewardType: BN__default;
    isSet: BN__default;
}[], "", {
    nonce: BN__default;
    instruction: number;
    rewardTimeInfo: {
        rewardOpenTime: BN__default;
        rewardEndTime: BN__default;
        rewardPerSecond: BN__default;
        rewardType: BN__default;
        isSet: BN__default;
    }[];
}>;
declare const farmRewardRestartLayout: Structure<number | BN__default, "", {
    rewardEndTime: BN__default;
    rewardPerSecond: BN__default;
    instruction: number;
    rewardReopenTime: BN__default;
}>;
declare const farmAddRewardLayout: Structure<number | BN__default, "", {
    rewardOpenTime: BN__default;
    rewardEndTime: BN__default;
    rewardPerSecond: BN__default;
    rewardType: BN__default;
    instruction: number;
    isSet: BN__default;
}>;
declare type FarmStateLayoutV3 = typeof farmStateV3Layout;
declare type FarmStateLayoutV5 = typeof farmStateV5Layout;
declare type FarmStateLayoutV6 = typeof farmStateV6Layout;
declare type FarmStateV3 = GetStructureSchema<FarmStateLayoutV3>;
declare type FarmStateV5 = GetStructureSchema<FarmStateLayoutV5>;
declare type FarmStateV6 = GetStructureSchema<FarmStateLayoutV6>;
declare type FarmState = FarmStateV3 | FarmStateV5 | FarmStateV6;
declare type FarmStateLayout = FarmStateLayoutV3 | FarmStateLayoutV5 | FarmStateLayoutV6;
declare const farmLedgerLayoutV3_1: Structure<PublicKey | BN__default | BN__default[], "", {
    owner: PublicKey;
    state: BN__default;
    id: PublicKey;
    deposited: BN__default;
    rewardDebts: BN__default[];
}>;
declare const farmLedgerLayoutV3_2: Structure<PublicKey | BN__default | BN__default[], "", {
    owner: PublicKey;
    state: BN__default;
    id: PublicKey;
    deposited: BN__default;
    rewardDebts: BN__default[];
    voteLockedBalance: BN__default;
}>;
declare const farmLedgerLayoutV5_1: Structure<PublicKey | BN__default | BN__default[], "", {
    owner: PublicKey;
    state: BN__default;
    id: PublicKey;
    deposited: BN__default;
    rewardDebts: BN__default[];
}>;
declare const farmLedgerLayoutV5_2: Structure<PublicKey | BN__default | BN__default[], "", {
    owner: PublicKey;
    state: BN__default;
    id: PublicKey;
    deposited: BN__default;
    rewardDebts: BN__default[];
}>;
declare const farmLedgerLayoutV6_1: Structure<PublicKey | BN__default | BN__default[], "", {
    owner: PublicKey;
    state: BN__default;
    id: PublicKey;
    deposited: BN__default;
    rewardDebts: BN__default[];
}>;
declare type FarmLedgerLayoutV3_1 = typeof farmLedgerLayoutV3_1;
declare type FarmLedgerLayoutV3_2 = typeof farmLedgerLayoutV3_2;
declare type FarmLedgerLayoutV5_1 = typeof farmLedgerLayoutV5_1;
declare type FarmLedgerLayoutV5_2 = typeof farmLedgerLayoutV5_2;
declare type FarmLedgerLayoutV6_1 = typeof farmLedgerLayoutV6_1;
declare type FarmLedgerLayout = FarmLedgerLayoutV3_1 | FarmLedgerLayoutV3_2 | FarmLedgerLayoutV5_1 | FarmLedgerLayoutV5_2 | FarmLedgerLayoutV6_1;
declare type FarmLedgerV3_1 = GetStructureSchema<FarmLedgerLayoutV3_1>;
declare type FarmLedgerV3_2 = GetStructureSchema<FarmLedgerLayoutV3_2>;
declare type FarmLedgerV5_1 = GetStructureSchema<FarmLedgerLayoutV5_1>;
declare type FarmLedgerV5_2 = GetStructureSchema<FarmLedgerLayoutV5_2>;
declare type FarmLedgerV6_1 = GetStructureSchema<FarmLedgerLayoutV6_1>;
declare type FarmLedger = FarmLedgerV3_1 | FarmLedgerV3_2 | FarmLedgerV5_1 | FarmLedgerV5_2 | FarmLedgerV6_1;
declare const dwLayout: Structure<number | BN__default, "", {
    instruction: number;
    amount: BN__default;
}>;
declare const VoterVotingMintConfig: Structure<PublicKey | number[] | BN__default | BN__default[], "", {
    mint: PublicKey;
    grantAuthority: PublicKey;
    baselineVoteWeightScaledFactor: BN__default;
    maxExtraLockupVoteWeightScaledFactor: BN__default;
    lockupSaturationSecs: BN__default;
    digitShift: BN__default;
    reserved1: number[];
    reserved2: BN__default[];
}>;
declare const VoterRegistrar: Structure<number | PublicKey | Buffer | number[] | BN__default | BN__default[] | {
    mint: PublicKey;
    grantAuthority: PublicKey;
    baselineVoteWeightScaledFactor: BN__default;
    maxExtraLockupVoteWeightScaledFactor: BN__default;
    lockupSaturationSecs: BN__default;
    digitShift: BN__default;
    reserved1: number[];
    reserved2: BN__default[];
}[], "", {
    reserved1: number[];
    reserved2: number[];
    governanceProgramId: PublicKey;
    realm: PublicKey;
    realmGoverningTokenMint: PublicKey;
    realmAuthority: PublicKey;
    votingMints: {
        mint: PublicKey;
        grantAuthority: PublicKey;
        baselineVoteWeightScaledFactor: BN__default;
        maxExtraLockupVoteWeightScaledFactor: BN__default;
        lockupSaturationSecs: BN__default;
        digitShift: BN__default;
        reserved1: number[];
        reserved2: BN__default[];
    }[];
    timeOffset: BN__default;
    bump: number;
    reserved3: BN__default[];
}>;
declare const VoterLockup: Structure<number | number[] | BN__default, "", {
    startTime: BN__default;
    endTime: BN__default;
    kind: number;
    reserved: number[];
}>;
declare const VoterDepositEntry: Structure<number | boolean | number[] | BN__default | {
    startTime: BN__default;
    endTime: BN__default;
    kind: number;
    reserved: number[];
}[], "", {
    reserved: number[];
    lockup: {
        startTime: BN__default;
        endTime: BN__default;
        kind: number;
        reserved: number[];
    }[];
    amountDeposited_native: BN__default;
    amountInitiallyLockedNative: BN__default;
    isUsed: boolean;
    allowClawback: boolean;
    votingMintConfigIdx: number;
}>;
declare const Voter: Structure<number | PublicKey | Buffer | number[] | {
    reserved: number[];
    lockup: {
        startTime: BN__default;
        endTime: BN__default;
        kind: number;
        reserved: number[];
    }[];
    amountDeposited_native: BN__default;
    amountInitiallyLockedNative: BN__default;
    isUsed: boolean;
    allowClawback: boolean;
    votingMintConfigIdx: number;
}[], "", {
    reserved: number[];
    voterAuthority: PublicKey;
    registrar: PublicKey;
    deposits: {
        reserved: number[];
        lockup: {
            startTime: BN__default;
            endTime: BN__default;
            kind: number;
            reserved: number[];
        }[];
        amountDeposited_native: BN__default;
        amountInitiallyLockedNative: BN__default;
        isUsed: boolean;
        allowClawback: boolean;
        votingMintConfigIdx: number;
    }[];
    voterBump: number;
    voterWweightRecordBump: number;
}>;

declare type LiquidityVersion = 4 | 5;
interface ApiPoolInfoV4 {
    id: string;
    baseMint: string;
    quoteMint: string;
    lpMint: string;
    baseDecimals: number;
    quoteDecimals: number;
    lpDecimals: number;
    version: 4;
    programId: string;
    authority: string;
    openOrders: string;
    targetOrders: string;
    baseVault: string;
    quoteVault: string;
    withdrawQueue: string;
    lpVault: string;
    marketVersion: 3;
    marketProgramId: string;
    marketId: string;
    marketAuthority: string;
    marketBaseVault: string;
    marketQuoteVault: string;
    marketBids: string;
    marketAsks: string;
    marketEventQueue: string;
    lookupTableAccount: string;
}
interface FarmRewardInfoV6 {
    rewardMint: string;
    rewardVault: string;
    rewardOpenTime: number;
    rewardEndTime: number;
    rewardPerSecond: number;
    rewardSender: string;
}
interface ApiStakePoolInfo {
    id: string;
    symbol: string;
    lpMint: string;
    version: FarmVersion;
    programId: string;
    authority: string;
    lpVault: string;
    rewardInfos: FarmRewardInfo[] | FarmRewardInfoV6[];
    upcoming: boolean;
}
interface ApiClmmConfigInfo {
    id: string;
    index: number;
    protocolFeeRate: number;
    tradeFeeRate: number;
    tickSpacing: number;
    fundFeeRate: number;
    description: string;
    defaultRange: number;
    defaultRangePoint: number[];
}
interface ApiClmmPoolsItemStatistics {
    volume: number;
    volumeFee: number;
    feeA: number;
    feeB: number;
    feeApr: number;
    rewardApr: {
        A: number;
        B: number;
        C: number;
    };
    apr: number;
    priceMin: number;
    priceMax: number;
}
/** ====== v3 api types ======= */
interface ApiV3PageIns<T> {
    count: number;
    hasNextPage: boolean;
    data: T[];
}
declare enum JupTokenType {
    ALL = "all",
    Strict = "strict"
}
declare type PoolsApiReturn = ApiV3PageIns<ApiV3PoolInfoItem>;
interface TransferFeeDataBaseType {
    transferFeeConfigAuthority: string;
    withdrawWithheldAuthority: string;
    withheldAmount: string;
    olderTransferFee: {
        epoch: string;
        maximumFee: string;
        transferFeeBasisPoints: number;
    };
    newerTransferFee: {
        epoch: string;
        maximumFee: string;
        transferFeeBasisPoints: number;
    };
}
declare type ExtensionsItem = {
    coingeckoId?: string;
    feeConfig?: TransferFeeDataBaseType;
};
declare type ApiV3Token = {
    chainId: number;
    address: string;
    programId: string;
    logoURI: string;
    symbol: string;
    name: string;
    decimals: number;
    tags: string[];
    extensions: ExtensionsItem;
};
declare type ApiV3TokenRes = {
    mintList: ApiV3Token[];
    blacklist: ApiV3Token[];
    whiteList: string[];
};
interface ApiV3PoolInfoCountItem {
    volume: number;
    volumeQuote: number;
    volumeFee: number;
    apr: number;
    feeApr: number;
    priceMin: number;
    priceMax: number;
    rewardApr: number[];
}
declare type PoolTypeItem = "StablePool" | "OpenBookMarket";
declare type FarmRewardInfoOld = {
    mint: ApiV3Token;
    perSecond: number;
};
declare type PoolFarmRewardInfo = FarmRewardInfoOld & {
    startTime?: number;
    endTime?: number;
};
interface PoolRewardInfoItem {
    mint: ApiV3Token;
    perSecond?: number;
    startTime?: number;
    endTime?: number;
}
interface ApiV3PoolInfoBaseItem {
    programId: string;
    id: string;
    mintA: ApiV3Token;
    mintB: ApiV3Token;
    rewardDefaultInfos: PoolFarmRewardInfo[];
    rewardDefaultPoolInfos: "Ecosystem" | "Fusion" | "Raydium" | "Clmm";
    price: number;
    mintAmountA: number;
    mintAmountB: number;
    feeRate: number;
    tvl: number;
    day: ApiV3PoolInfoCountItem;
    week: ApiV3PoolInfoCountItem;
    month: ApiV3PoolInfoCountItem;
    pooltype: PoolTypeItem[];
    farmUpcomingCount: number;
    farmOngoingCount: number;
    farmFinishedCount: number;
}
declare type ApiV3PoolInfoConcentratedItem = ApiV3PoolInfoBaseItem & {
    type: "Concentrated";
    config: ApiClmmConfigV3;
};
declare type ApiV3PoolInfoStandardItem = ApiV3PoolInfoBaseItem & {
    type: "Standard";
    marketId: string;
    configId: string;
    lpPrice: number;
    lpAmount: number;
    lpMint: ApiV3Token;
};
declare type ApiV3PoolInfoStandardItemCpmm = ApiV3PoolInfoBaseItem & {
    type: "Standard";
    lpMint: ApiV3Token;
    lpPrice: number;
    lpAmount: number;
    config: ApiCpmmConfigV3;
};
declare type ApiV3PoolInfoItem = ApiV3PoolInfoConcentratedItem | ApiV3PoolInfoStandardItem | ApiV3PoolInfoStandardItemCpmm;
declare enum PoolFetchType {
    All = "all",
    Standard = "standard",
    Concentrated = "concentrated",
    AllFarm = "allFarm",
    StandardFarm = "standardFarm",
    ConcentratedFarm = "concentratedFarm"
}
interface FetchPoolParams {
    type?: PoolFetchType;
    sort?: "liquidity" | "volume24h" | "volume7d" | "volume30d" | "fee24h" | "fee7d" | "fee30d" | "apr24h" | "apr7d" | "apr30d";
    order?: "desc" | "asc";
    pageSize?: number;
    page?: number;
}
interface Point {
    time: number;
    liquidity: number;
}
interface LiquidityLineApi {
    count: number;
    line: Point[];
}
interface Base {
    programId: string;
    id: string;
    mintA: ApiV3Token;
    mintB: ApiV3Token;
    lookupTableAccount?: string;
    vault: {
        A: string;
        B: string;
    };
}
interface _Amm {
    authority: string;
    openOrders: string;
    targetOrders: string;
    mintLp: ApiV3Token;
}
interface ApiCpmmConfigV3 {
    id: string;
    index: number;
    protocolFeeRate: number;
    tradeFeeRate: number;
    fundFeeRate: number;
    createPoolFee: string;
}
interface _Cpmm {
    authority: string;
    mintLp: ApiV3Token;
    config: ApiCpmmConfigV3;
}
interface _Market {
    marketProgramId: string;
    marketId: string;
    marketAuthority: string;
    marketBaseVault: string;
    marketQuoteVault: string;
    marketBids: string;
    marketAsks: string;
    marketEventQueue: string;
}
declare type AmmV4Keys = Base & _Amm & _Market;
declare type AmmV5Keys = Base & _Amm & _Market & {
    modelDataAccount: string;
};
declare type CpmmKeys = Base & _Cpmm;
interface ClmmRewardType {
    mint: ApiV3Token;
    vault: string;
}
declare type ClmmKeys = Base & {
    config: ApiClmmConfigV3;
    rewardInfos: ClmmRewardType[];
};
declare type PoolKeys = AmmV4Keys | AmmV5Keys | ClmmKeys | CpmmKeys;
interface ApiClmmConfigV3 {
    id: string;
    index: number;
    protocolFeeRate: number;
    tradeFeeRate: number;
    tickSpacing: number;
    fundFeeRate: number;
    description: string;
    defaultRange: number;
    defaultRangePoint: number[];
}
interface RpcItemA {
    url: string;
    weight: number;
    batch: boolean;
    name: string;
}
interface RpcItemB {
    url: string;
    batch: boolean;
    name: string;
}
declare type RpcStrategy = "speed" | "first";
declare type RpcTypeWeight = {
    strategy: "weight";
    rpcs: RpcItemA[];
};
declare type RpcTypeOther = {
    strategy: RpcStrategy;
    rpcs: RpcItemB[];
};
declare type RpcType = RpcTypeWeight | RpcTypeOther;
declare type FarmRewardTypeV6Key = "Standard SPL" | "Option tokens";
interface RewardKeyInfoV345 {
    mint: ApiV3Token;
    vault: string;
    type: FarmRewardTypeV6Key;
    perSecond: number;
    perBlock: number;
}
interface RewardKeyInfoV6 {
    mint: ApiV3Token;
    vault: string;
    type: FarmRewardTypeV6Key;
    perSecond: number;
    openTime: string;
    endTime: string;
    sender: string;
}
interface FormatFarmKeyOutBase {
    programId: string;
    id: string;
    symbolMints: ApiV3Token[];
    lpMint: ApiV3Token;
    authority: string;
    lpVault: string;
}
declare type FormatFarmKeyOutV345 = FormatFarmKeyOutBase & {
    rewardInfos: RewardKeyInfoV345[];
};
declare type FormatFarmKeyOutV6 = FormatFarmKeyOutBase & {
    config: {
        periodMax: number;
        periodMin: number;
        periodExtend: number;
    };
    rewardInfos: RewardKeyInfoV6[];
};
declare type FormatFarmKeyOut = FormatFarmKeyOutV345 | FormatFarmKeyOutV6;
interface RewardInfoV345 {
    mint: ApiV3Token;
    type: FarmRewardTypeV6Key;
    apr: number;
    perSecond: string;
}
interface RewardInfoV6 {
    mint: ApiV3Token;
    type: FarmRewardTypeV6Key;
    apr: number;
    perSecond: string;
    openTime: string;
    endTime: string;
}
declare type FarmTagsItem = "Ecosystem" | "Farm" | "Fusion" | "Stake";
interface FormatFarmInfoOutBase {
    programId: string;
    id: string;
    symbolMints: ApiV3Token[];
    lpMint: ApiV3Token;
    tvl: number;
    lpPrice: number;
    apr: number;
    tags: FarmTagsItem[];
}
declare type FormatFarmInfoOutV345 = FormatFarmInfoOutBase & {
    rewardInfos: RewardInfoV345[];
};
declare type FormatFarmInfoOutV6 = FormatFarmInfoOutBase & {
    rewardInfos: RewardInfoV6[];
};
declare type FormatFarmInfoOut = FormatFarmInfoOutV345 | FormatFarmInfoOutV6;
interface AvailabilityCheckAPI3 {
    all: boolean;
    swap: boolean;
    createConcentratedPosition: boolean;
    addConcentratedPosition: boolean;
    addStandardPosition: boolean;
    removeConcentratedPosition: boolean;
    removeStandardPosition: boolean;
    addFarm: boolean;
    removeFarm: boolean;
}
declare type OwnerCreatedFarmInfo = {
    farm: {
        id: string;
        programId: string;
    }[];
    clmm: {
        id: string;
        programId: string;
    }[];
};
declare type OwnerIdoInfo = Record<string, {
    programId: string;
    poolId: string;
    coin: string;
    pc: string;
}>;
declare type IdoKeysData = {
    programId: string;
    id: string;
    authority: string;
    projectInfo: {
        mint: ApiV3Token;
        vault: string;
    };
    buyInfo: {
        mint: ApiV3Token;
        vault: string;
    };
};
interface ApiStakePool {
    programId: string;
    id: string;
    apr: number;
    lpMint: ApiV3Token;
    lpPrice: number;
    symbolMints: ApiV3Token[];
    tvl: number;
    tags: FarmTagsItem[];
    rewardInfos: RewardInfoV345[];
}
declare type FarmPositionData = Record<string, Record<string, Record<string, {
    programId: string;
    lpAmount: string;
    version: "V1" | "V2";
}>>>;

declare function endlessRetry<T>(name: string, call: () => Promise<T>, interval?: number): Promise<T>;
interface ApiProps {
    cluster: Cluster;
    timeout: number;
    logRequests?: boolean;
    logCount?: number;
    urlConfigs?: API_URL_CONFIG;
}
declare class Api {
    cluster: Cluster;
    api: AxiosInstance;
    logCount: number;
    urlConfigs: API_URL_CONFIG;
    constructor({ cluster, timeout, logRequests, logCount, urlConfigs }: ApiProps);
    getClmmConfigs(): Promise<ApiClmmConfigInfo[]>;
    getClmmPoolLines(poolId: string): Promise<{
        price: string;
        liquidity: string;
    }[]>;
    getBlockSlotCountForSecond(endpointUrl?: string): Promise<number>;
    getChainTimeOffset(): Promise<{
        offset: number;
    }>;
    getRpcs(): Promise<{
        rpcs: {
            batch: boolean;
            name: string;
            url: string;
            weight: number;
        }[];
        strategy: string;
    }>;
    getTokenList(): Promise<{
        mintList: ApiV3Token[];
        blacklist: ApiV3Token[];
        whiteList: string[];
    }>;
    getJupTokenList(): Promise<ApiV3Token[]>;
    getTokenInfo(mint: (string | PublicKey)[]): Promise<ApiV3Token[]>;
    getPoolList(props?: FetchPoolParams): Promise<PoolsApiReturn>;
    fetchPoolById(props: {
        ids: string;
    }): Promise<ApiV3PoolInfoItem[]>;
    fetchPoolKeysById(props: {
        idList: string[];
    }): Promise<PoolKeys[]>;
    fetchPoolByMints(props: {
        mint1: string | PublicKey;
        mint2?: string | PublicKey;
    } & Omit<FetchPoolParams, "pageSize">): Promise<PoolsApiReturn>;
    fetchFarmInfoById(props: {
        ids: string;
    }): Promise<FormatFarmInfoOut[]>;
    fetchFarmKeysById(props: {
        ids: string;
    }): Promise<FormatFarmKeyOut[]>;
    fetchAvailabilityStatus(): Promise<AvailabilityCheckAPI3>;
    sendTxToJito(txBase58: string[], bundleMode?: boolean): Promise<{
        jsonrpc: string;
        result: string;
        id: number;
    }>;
}

export { IdoKeysData as $, ApiProps as A, ApiClmmConfigV3 as B, CpmmKeys as C, RpcItemB as D, RpcType as E, FarmRewardInfoV6 as F, FarmRewardTypeV6Key as G, RewardKeyInfoV345 as H, RewardKeyInfoV6 as I, JupTokenType as J, FormatFarmKeyOutV345 as K, LiquidityVersion as L, FormatFarmKeyOutV6 as M, FormatFarmKeyOut as N, RewardInfoV345 as O, PoolsApiReturn as P, RewardInfoV6 as Q, RpcItemA as R, FarmTagsItem as S, TransferFeeDataBaseType as T, FormatFarmInfoOutBase as U, FormatFarmInfoOutV345 as V, FormatFarmInfoOutV6 as W, FormatFarmInfoOut as X, AvailabilityCheckAPI3 as Y, OwnerCreatedFarmInfo as Z, OwnerIdoInfo as _, Api as a, FarmLedgerLayoutV3_2 as a$, ApiStakePool as a0, FarmPositionData as a1, Rounding as a2, BN_ZERO as a3, BN_ONE as a4, BN_TWO as a5, BN_THREE as a6, BN_FIVE as a7, BN_TEN as a8, BN_100 as a9, TxBuilder as aA, associatedLedgerAccountLayout as aB, withdrawRewardLayout as aC, realFarmStateV3Layout as aD, realFarmStateV5Layout as aE, realFarmV6Layout as aF, farmStateV3Layout as aG, farmStateV5Layout as aH, farmStateV6Layout as aI, farmRewardTimeInfoLayout as aJ, farmRewardLayout as aK, farmRewardRestartLayout as aL, farmAddRewardLayout as aM, FarmStateLayoutV3 as aN, FarmStateLayoutV5 as aO, FarmStateLayoutV6 as aP, FarmStateV3 as aQ, FarmStateV5 as aR, FarmStateV6 as aS, FarmState as aT, FarmStateLayout as aU, farmLedgerLayoutV3_1 as aV, farmLedgerLayoutV3_2 as aW, farmLedgerLayoutV5_1 as aX, farmLedgerLayoutV5_2 as aY, farmLedgerLayoutV6_1 as aZ, FarmLedgerLayoutV3_1 as a_, BN_1000 as aa, BN_10000 as ab, BigNumberish as ac, Numberish as ad, parseBigNumberish as ae, tenExponential as af, parseNumberInfo as ag, divCeil as ah, shakeFractionDecimal as ai, toBN as aj, toFraction as ak, toPercent as al, toTokenPrice as am, toUsdCurrency as an, toTotalPrice as ao, decimalToFraction as ap, isDecimal as aq, recursivelyDecimalToFraction as ar, AddInstructionParam as as, TxBuildData as at, TxV0BuildData as au, MultiTxExecuteParam as av, MultiTxBuildData as aw, MultiTxV0BuildData as ax, MakeMultiTxData as ay, MakeTxData as az, ApiPoolInfoV4 as b, Fallback as b$, FarmLedgerLayoutV5_1 as b0, FarmLedgerLayoutV5_2 as b1, FarmLedgerLayoutV6_1 as b2, FarmLedgerLayout as b3, FarmLedgerV3_1 as b4, FarmLedgerV3_2 as b5, FarmLedgerV5_1 as b6, FarmLedgerV5_2 as b7, FarmLedgerV6_1 as b8, FarmLedger as b9, poolTypeV6 as bA, FARM_PROGRAM_TO_VERSION as bB, TokenInfo as bC, TokenJson as bD, SplToken as bE, LpToken as bF, SignAllTransactions as bG, MakeTransaction as bH, MakeV0Transaction as bI, MakeMultiTransaction as bJ, InstructionReturn as bK, ComputeBudgetConfig as bL, LoadParams as bM, TransferAmountFee as bN, GetTransferAmountFee as bO, ReturnTypeFetchMultipleMintInfo as bP, ReturnTypeFetchMultipleMintInfos as bQ, ReplaceType as bR, MayArray as bS, MayDeepArray as bT, MayFunction as bU, ArrayItem as bV, ExactPartial as bW, ExactRequired as bX, SKeyof as bY, GetValue as bZ, SOR as b_, dwLayout as ba, VoterVotingMintConfig as bb, VoterRegistrar as bc, VoterLockup as bd, VoterDepositEntry as be, Voter as bf, RewardType as bg, APIRewardInfo as bh, RewardInfoWithKey as bi, FarmRewardInfo as bj, FarmRewardInfoConfig as bk, RewardInfoKey as bl, FarmPoolInfoV6 as bm, CreateFarm as bn, CreateFarmExtInfo as bo, UpdateFarmReward as bp, UpdateFarmRewards as bq, FarmDWParam as br, FarmPoolKeys as bs, FarmVersion as bt, FARM_LOCK_MINT as bu, FARM_LOCK_VAULT as bv, FARM_VERSION_TO_STATE_LAYOUT as bw, FARM_VERSION_TO_LEDGER_LAYOUT as bx, isValidFarmVersion as by, validateFarmRewards as bz, ApiStakePoolInfo as c, Cover as c0, UnionCover as c1, unionArr as c2, splitNumber as c3, TokenAmount as c4, CurrencyAmount as c5, Fraction as c6, _100_PERCENT as c7, Percent as c8, Price as c9, ApiClmmConfigInfo as d, endlessRetry as e, ApiClmmPoolsItemStatistics as f, ApiV3PageIns as g, ApiV3Token as h, ApiV3TokenRes as i, ApiV3PoolInfoCountItem as j, PoolFarmRewardInfo as k, PoolRewardInfoItem as l, ApiV3PoolInfoBaseItem as m, ApiV3PoolInfoConcentratedItem as n, ApiV3PoolInfoStandardItem as o, ApiV3PoolInfoStandardItemCpmm as p, ApiV3PoolInfoItem as q, PoolFetchType as r, FetchPoolParams as s, Point as t, LiquidityLineApi as u, AmmV4Keys as v, AmmV5Keys as w, ClmmRewardType as x, ClmmKeys as y, PoolKeys as z };
