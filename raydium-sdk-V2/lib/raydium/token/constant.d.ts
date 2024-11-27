import { bC as TokenInfo } from '../../api-3c7c57f0.js';
import 'axios';
import '../../solana/type.js';
import '@solana/web3.js';
import 'bn.js';
import '@solana/spl-token';
import '../../api/url.js';
import '../../common/txTool/lookupTable.js';
import '../../common/txTool/txType.js';
import '../../common/owner.js';
import 'decimal.js';
import '../../module/token.js';
import '../../common/pubKey.js';
import '../../common/logger.js';
import '../../module/currency.js';
import '../../marshmallow/index.js';
import '../../marshmallow/buffer-layout.js';

declare const SOL_INFO: TokenInfo;
declare const TOKEN_WSOL: TokenInfo;

export { SOL_INFO, TOKEN_WSOL };