import{PublicKey as b,ComputeBudgetProgram as V,Transaction as p,TransactionMessage as k,Keypair as P,VersionedTransaction as C}from"@solana/web3.js";import{TOKEN_PROGRAM_ID as x}from"@solana/spl-token";import{get as y,set as v}from"lodash";var h=class{constructor(e){this.logLevel=e.logLevel!==void 0?e.logLevel:0,this.name=e.name}set level(e){this.logLevel=e}get time(){return Date.now().toString()}get moduleName(){return this.name}isLogLevel(e){return e<=this.logLevel}error(...e){return this.isLogLevel(0)?(console.error(this.time,this.name,"sdk logger error",...e),this):this}logWithError(...e){let r=e.map(i=>typeof i=="object"?JSON.stringify(i):i).join(", ");throw new Error(r)}warning(...e){return this.isLogLevel(1)?(console.warn(this.time,this.name,"sdk logger warning",...e),this):this}info(...e){return this.isLogLevel(2)?(console.info(this.time,this.name,"sdk logger info",...e),this):this}debug(...e){return this.isLogLevel(3)?(console.debug(this.time,this.name,"sdk logger debug",...e),this):this}},w={},E={};function A(t){let e=y(w,t);if(!e){let r=y(E,t);e=new h({name:t,logLevel:r}),v(w,t,e)}return e}var d={CreateAccount:"CreateAccount",InitAccount:"InitAccount",CreateATA:"CreateATA",CloseAccount:"CloseAccount",TransferAmount:"TransferAmount",InitMint:"InitMint",MintTo:"MintTo",InitMarket:"InitMarket",Util1216OwnerClaim:"Util1216OwnerClaim",SetComputeUnitPrice:"SetComputeUnitPrice",SetComputeUnitLimit:"SetComputeUnitLimit",ClmmCreatePool:"ClmmCreatePool",ClmmOpenPosition:"ClmmOpenPosition",ClmmIncreasePosition:"ClmmIncreasePosition",ClmmDecreasePosition:"ClmmDecreasePosition",ClmmClosePosition:"ClmmClosePosition",ClmmSwapBaseIn:"ClmmSwapBaseIn",ClmmSwapBaseOut:"ClmmSwapBaseOut",ClmmInitReward:"ClmmInitReward",ClmmSetReward:"ClmmSetReward",ClmmCollectReward:"ClmmCollectReward",AmmV4Swap:"AmmV4Swap",AmmV4AddLiquidity:"AmmV4AddLiquidity",AmmV4RemoveLiquidity:"AmmV4RemoveLiquidity",AmmV4SimulatePoolInfo:"AmmV4SimulatePoolInfo",AmmV4SwapBaseIn:"AmmV4SwapBaseIn",AmmV4SwapBaseOut:"AmmV4SwapBaseOut",AmmV4CreatePool:"AmmV4CreatePool",AmmV4InitPool:"AmmV4InitPool",AmmV5AddLiquidity:"AmmV5AddLiquidity",AmmV5RemoveLiquidity:"AmmV5RemoveLiquidity",AmmV5SimulatePoolInfo:"AmmV5SimulatePoolInfo",AmmV5SwapBaseIn:"AmmV5SwapBaseIn",AmmV5SwapBaseOut:"AmmV5SwapBaseOut",RouteSwap:"RouteSwap",RouteSwap1:"RouteSwap1",RouteSwap2:"RouteSwap2",FarmV3Deposit:"FarmV3Deposit",FarmV3Withdraw:"FarmV3Withdraw",FarmV3CreateLedger:"FarmV3CreateLedger",FarmV5Deposit:"FarmV5Deposit",FarmV5Withdraw:"FarmV5Withdraw",FarmV5CreateLedger:"FarmV5CreateLedger",FarmV6Deposit:"FarmV6Deposit",FarmV6Withdraw:"FarmV6Withdraw",FarmV6Create:"FarmV6Create",FarmV6Restart:"FarmV6Restart",FarmV6CreatorAddReward:"FarmV6CreatorAddReward",FarmV6CreatorWithdraw:"FarmV6CreatorWithdraw",CpmmCreatePool:"CpmmCreatePool",CpmmAddLiquidity:"CpmmAddLiquidity",CpmmWithdrawLiquidity:"CpmmWithdrawLiquidity",CpmmSwapBaseIn:"CpmmSwapBaseIn",CpmmSwapBaseOut:"CpmmSwapBaseOut"};var s=A("Raydium_txUtil"),B=1644;function G(t){let e=[],r=[];return t.microLamports&&(e.push(V.setComputeUnitPrice({microLamports:t.microLamports})),r.push(d.SetComputeUnitPrice)),t.units&&(e.push(V.setComputeUnitLimit({units:t.units})),r.push(d.SetComputeUnitLimit)),{instructions:e,instructionTypes:r}}async function J(t,e){var i,o;let r=e!=null?e:"confirmed";try{return((o=await((i=t.getLatestBlockhash)==null?void 0:i.call(t,{commitment:r})))==null?void 0:o.blockhash)||(await t.getRecentBlockhash(r)).blockhash}catch{return(await t.getRecentBlockhash(r)).blockhash}}function I(t,e){t.length<1&&s.logWithError(`no instructions provided: ${t.toString()}`),e.length<1&&s.logWithError(`no signers provided:, ${e.toString()}`);let r=new p;r.recentBlockhash="11111111111111111111111111111111",r.feePayer=e[0],r.add(...t);try{return Buffer.from(r.serialize({verifySignatures:!1})).toString("base64").length<B}catch{return!1}}async function X(t,e,r,i=!0){let o=new b("RaydiumSimuLateTransaction11111111111111111"),m=[],a=new p;a.feePayer=o;for(let n of e)I([...a.instructions,n],[o])||(m.push(a),a=new p,a.feePayer=o),a.add(n);a.instructions.length>0&&m.push(a);let c=[];try{if(c=await F(t,m,i),c.find(n=>n.err!==null))throw Error("rpc simulateTransaction error")}catch(n){n instanceof Error&&s.logWithError("failed to simulate for instructions","RPC_ERROR",{message:n.message})}let l=[];for(let n of c)if(s.debug("simulate result:",n),n.logs){let u=n.logs.filter(g=>g&&g.includes(r));s.debug("filteredLog:",l),u.length||s.logWithError("simulate log not match keyword","keyword",r),l.push(...u)}return l}function Y(t,e){let r=t.match(/{["\w:,]+}/g);return!r||r.length!==1?s.logWithError(`simulate log fail to match json, keyword: ${e}`):r[0]}function Z(t,e){let i=new RegExp(`"${e}":(\\d+)`,"g").exec(t);return!i||i.length!==2?s.logWithError(`simulate log fail to match key", key: ${e}`):i[1]}function Q(t,e){let[r,i]=b.findProgramAddressSync(t,e);return{publicKey:r,nonce:i}}async function F(t,e,r){let i=[];if(r){let o=await t.getLatestBlockhash(),m=[];for(let n of e){n.recentBlockhash=o.blockhash,n.lastValidBlockHeight=o.lastValidBlockHeight;let g=n._compile().serialize(),R=n._serialize(g).toString("base64");m.push(R)}let a=m.map(n=>{let u=t._buildArgs([n],void 0,"base64");return{methodName:"simulateTransaction",args:u}}),c=[],l=20;for(let n=0;n<Math.ceil(a.length/l);n++)c.push(a.slice(n*l,(n+1)*l));i=await(await Promise.all(c.map(async n=>(await t._rpcBatchRequest(n)).map(u=>u.result.value)))).flat()}else try{i=await Promise.all(e.map(async o=>await(await t.simulateTransaction(o)).value))}catch(o){o instanceof Error&&s.logWithError("failed to get info for multiple accounts","RPC_ERROR",{message:o.message})}return i}function ee({instructions:t,payer:e,signers:r}){return I(t,[e,...r])}function te({instructions:t,payer:e,lookupTableAddressAccount:r,recentBlockhash:i=P.generate().publicKey.toString()}){let m=new k({payerKey:e,recentBlockhash:i,instructions:t}).compileToV0Message(Object.values(r!=null?r:{}));try{return Buffer.from(new C(m).serialize()).toString("base64").length<B}catch{return!1}}var f={time:0,data:void 0};async function re(t){if(!f.data||(Date.now()-f.time)/1e3>30){let e=await t.getEpochInfo();return f={time:Date.now(),data:e},e}else return f.data}var T=t=>Buffer.isBuffer(t)?t:t instanceof Uint8Array?Buffer.from(t.buffer,t.byteOffset,t.byteLength):Buffer.from(t);function ie(t){let e=[];return t.forEach(r=>{r instanceof p&&(r.recentBlockhash||(r.recentBlockhash=x.toBase58()),r.feePayer||(r.feePayer=P.generate().publicKey));let i=r.serialize({requireAllSignatures:!1,verifySignatures:!1});r instanceof C&&(i=T(i));let o=i.toString("base64");e.push(o)}),console.log("simulate tx string:",e),e}function ne(t){let e=t.serialize({requireAllSignatures:!1,verifySignatures:!1});return t instanceof C&&(e=T(e)),e.toString("base64")}export{B as MAX_BASE64_SIZE,G as addComputeBudget,ee as checkLegacyTxSize,te as checkV0TxSize,Q as findProgramAddress,I as forecastTransactionSize,re as getEpochInfo,J as getRecentBlockHash,Y as parseSimulateLogToJson,Z as parseSimulateValue,ie as printSimulate,X as simulateMultipleInstruction,F as simulateTransaction,T as toBuffer,ne as transformTxToBase64};
//# sourceMappingURL=txUtils.mjs.map