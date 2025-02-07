import { PublicKey } from '@solana/web3.js';
import { bR as ReplaceType } from '../api-3c7c57f0.js';
import 'axios';
import '../solana/type.js';
import 'bn.js';
import '@solana/spl-token';
import '../api/url.js';
import './txTool/lookupTable.js';
import './txTool/txType.js';
import './owner.js';
import 'decimal.js';
import '../module/token.js';
import './pubKey.js';
import './logger.js';
import '../module/currency.js';
import '../marshmallow/index.js';
import '../marshmallow/buffer-layout.js';

declare function sleep(ms: number): Promise<void>;
declare function getTimestamp(): number;
declare function notInnerObject(v: unknown): v is Record<string, any>;
declare function jsonInfo2PoolKeys<T>(jsonInfo: T): ReplaceType<T, string, PublicKey>;

export { getTimestamp, jsonInfo2PoolKeys, notInnerObject, sleep };
