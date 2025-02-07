import { Connection, PublicKey } from '@solana/web3.js';
import { RawMint, TransferFeeConfig } from '@solana/spl-token';
import { bC as TokenInfo, ac as BigNumberish, c4 as TokenAmount, h as ApiV3Token } from '../../api-3c7c57f0.js';
import { Token } from '../../module/token.js';
import 'axios';
import '../../solana/type.js';
import 'bn.js';
import '../../api/url.js';
import '../../common/txTool/lookupTable.js';
import '../../common/txTool/txType.js';
import '../../common/owner.js';
import 'decimal.js';
import '../../common/logger.js';
import '../../module/currency.js';
import '../../marshmallow/index.js';
import '../../marshmallow/buffer-layout.js';
import '../../common/pubKey.js';

declare const parseTokenInfo: ({ connection, mint, }: {
    connection: Connection;
    mint: PublicKey | string;
}) => Promise<RawMint | undefined>;
declare const toTokenInfo: ({ mint, decimals, programId, logoURI, priority, }: {
    mint: PublicKey;
    decimals: number;
    programId?: string | PublicKey | undefined;
    priority?: number | undefined;
    logoURI?: string | undefined;
}) => TokenInfo;
declare const toToken: (props: Omit<TokenInfo, "priority">) => Token;
declare const toTokenAmount: ({ amount, isRaw, name, ...props }: Omit<TokenInfo, "priority"> & {
    amount: BigNumberish;
    isRaw?: boolean | undefined;
    name?: string | undefined;
}) => TokenAmount;
declare function solToWSolToken<T extends ApiV3Token | TokenInfo>(token: T): T;
declare function wSolToSolToken<T extends ApiV3Token | TokenInfo>(token: T): T;
declare const toApiV3Token: ({ address, programId, decimals, ...props }: {
    address: string;
    programId: string;
    decimals: number;
} & Partial<ApiV3Token>) => ApiV3Token;
declare const toFeeConfig: (config?: TransferFeeConfig) => ApiV3Token["extensions"]["feeConfig"] | undefined;

export { parseTokenInfo, solToWSolToken, toApiV3Token, toFeeConfig, toToken, toTokenAmount, toTokenInfo, wSolToSolToken };
