import { EpochInfo } from '@solana/web3.js';
import { TransferFeeConfig } from '@solana/spl-token';
import BN__default from 'bn.js';
import { bO as GetTransferAmountFee, T as TransferFeeDataBaseType } from '../api-3c7c57f0.js';
import 'axios';
import '../solana/type.js';
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

declare function getTransferAmountFee(amount: BN__default, feeConfig: TransferFeeConfig | undefined, epochInfo: EpochInfo, addFee: boolean): GetTransferAmountFee;
declare function getTransferAmountFeeV2(amount: BN__default, _feeConfig: TransferFeeDataBaseType | undefined, epochInfo: EpochInfo, addFee: boolean): GetTransferAmountFee;
declare function minExpirationTime(expirationTime1: number | undefined, expirationTime2: number | undefined): number | undefined;
declare function BNDivCeil(bn1: BN__default, bn2: BN__default): BN__default;

export { BNDivCeil, getTransferAmountFee, getTransferAmountFeeV2, minExpirationTime };
