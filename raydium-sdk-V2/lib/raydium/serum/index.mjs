import{PublicKey as r}from"@solana/web3.js";var F=new r("EhhTKczWMGQt46ynNeRX1WfeagwwJd7ufHvCDjRxjo5Q"),W=new r("9KEPoZmtHUrBbhWN1v1KWLMkkvwY6WLtAVUCPRtRjP4z"),H=new r("FarmqiPv5eAj3j1GMdMCMUGXqPUvmquZtMy86QH6rzhG"),j=new r("CLaimxFqjHzgTJtAGHU47NPhg6qrc5sCnpC4tBLyABQS"),z=new r("srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX"),x=new r("9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin"),Q=new r("675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8"),Y=new r("5quBtoiQqxF9Jv6KYKctB59NT3gtJD2Y65kdnB1Uev3h"),J=new r("CDSr3ssLcRB6XYPJwAfFt18MZvEZp4LjHcvzBVZ45duo"),Z=new r("CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK"),X=new r("routeUGWgWzqBWFcrCfv8tritsqukccJPu3q5GPP3xS"),$=new r("7YttLkHDoNj9wyDur5pM1ejNaAvT9X4eqaYcHQqtj2G5"),ee=new r("6FJon3QE27qgPVggARueB22hLvoh22VzJpXv4rBEoSLF"),te=new r("CC12se5To1CdEuw7fDS27B7Geo5jJyL7t5UK2B44NgiH"),re=new r("9HzJyW1qZsEiSfMUf6L2jo3CcTKAyBmSyKdwQeYisHrC"),ne=new r("DropEU8AvevN3UrXWXTMuz3rqnMczQVNjq3kcSdW2SQi"),oe=new r("8yQvrjQuritLntxz6pAaWcEX6CsRMeDmr7baCLnNwEuw"),se=new r("E1oP2yNZXw3dFnUoPygWZPg9u2Gad87VFVPeYWqa6rD6"),ue=new r("E1oP2yNZXw3dFnUoPygWZPg9u2Gad87VFVPeYWqa6rD6"),U=new r("CPMDWBwJDtYax9qW7AyRuVC19Cc4L4Vcy4n2BHAbHkCW"),D=new r("7rQ1QFNosMkUCuh7Z7fPbTHvh73b68sQYdirycEzJVuw"),O=new r("G11FKBRaAkHAKuLCgLM6K6NUc9rTjPAznRCjZifrTQe2");var ae={SERUM_MARKET:r.default,OPENBOOK_MARKET:new r("EoTcMgcDRTJVZDMZWBoU6rhYHZfkNTVEAfz3uUJRcYGj"),UTIL1216:r.default,FarmV3:new r("85BFyr98MbCUU9MVTEgzx1nbhWACbJqLzho6zd6DZcWL"),FarmV5:new r("EcLzTrNg9V7qhcdyXDe2qjtPkiGzDM2UbdRaeaadU5r2"),FarmV6:new r("Farm2hJLcqPtPg8M4rR6DMrsRNc5TPm5Cs4bVQrMe2T7"),AmmV4:new r("HWy1jotHpo6UqeQxx49dpYYdQB8wj9Qk9MdxwjLvDHB8"),AmmStable:new r("DDg4VmQaJV9ogWce7LpcjBA9bv22wRp5uaTPa5pGjijF"),CLMM:new r("devi51mZmdwUJGU9hjN27vEz64Gps7uUefqxg27EAtH"),Router:new r("BVChZ3XFEwTMUk1o9i3HAf91H6mFxSwa5X2wFAWhYPhU"),CREATE_CPMM_POOL_PROGRAM:U,CREATE_CPMM_POOL_AUTH:D,CREATE_CPMM_POOL_FEE_ACC:O,FEE_DESTINATION_ID:new r("3XMrhbv989VxAMi3DErLV9eJht1pHppW5LbKxe9fkEFR")};var L={[x.toBase58()]:3},_={3:x};import{PublicKey as I}from"@solana/web3.js";import h,{isBN as xt}from"bn.js";import{bits as Pe,BitStructure as de,blob as V,Blob as xe,cstr as fe,f32 as ge,f32be as be,f64 as me,f64be as le,greedy as Le,Layout as C,ns64 as _e,ns64be as Te,nu64 as he,nu64be as Se,offset as we,s16 as Me,s16be as Ee,s24 as Ae,s24be as Re,s32 as Be,s32be as Ue,s40 as De,s40be as Oe,s48 as Ve,s48be as Ce,s8 as ve,seq as Ie,struct as ke,Structure as v,u16 as Ne,u16be as Ge,u24 as Ke,u24be as qe,u32 as Fe,u32be as We,u40 as He,u40be as je,u48 as ze,u48be as Qe,u8 as Ye,UInt as Je,union as Ze,Union as Xe,unionLayoutDiscriminator as $e,utf8 as et}from"@solana/buffer-layout";var f=C,T=v;var p=V;var g=class extends f{constructor(t,n,o){super(t,o);this.blob=p(t),this.signed=n}decode(t,n=0){let o=new h(this.blob.decode(t,n),10,"le");return this.signed?o.fromTwos(this.span*8).clone():o}encode(t,n,o=0){return typeof t=="number"&&(t=new h(t)),this.signed&&(t=t.toTwos(this.span*8)),this.blob.encode(t.toArrayLike(Buffer,"le",this.span),n,o)}};function u(s){return new g(8,!1,s)}var b=class extends f{constructor(t,n,o,y){super(t.span,y);this.layout=t,this.decoder=n,this.encoder=o}decode(t,n){return this.decoder(this.layout.decode(t,n))}encode(t,n,o){return this.layout.encode(this.encoder(t),n,o)}getSpan(t,n){return this.layout.getSpan(t,n)}};function a(s){return new b(p(32),e=>new I(e),e=>e.toBuffer(),s)}var m=class extends T{decode(e,t){return super.decode(e,t)}};function S(s,e,t){return new m(s,e,t)}var k=S([p(5),p(8),a("ownAddress"),u("vaultSignerNonce"),a("baseMint"),a("quoteMint"),a("baseVault"),u("baseDepositsTotal"),u("baseFeesAccrued"),a("quoteVault"),u("quoteDepositsTotal"),u("quoteFeesAccrued"),u("quoteDustThreshold"),a("requestQueue"),a("eventQueue"),a("bids"),a("asks"),u("baseLotSize"),u("quoteLotSize"),u("feeRateBps"),u("referrerRebatesAccrued"),p(7)]),w={3:k};import{PublicKey as R}from"@solana/web3.js";import{get as M,set as N}from"lodash";var l=class{constructor(e){this.logLevel=e.logLevel!==void 0?e.logLevel:0,this.name=e.name}set level(e){this.logLevel=e}get time(){return Date.now().toString()}get moduleName(){return this.name}isLogLevel(e){return e<=this.logLevel}error(...e){return this.isLogLevel(0)?(console.error(this.time,this.name,"sdk logger error",...e),this):this}logWithError(...e){let t=e.map(n=>typeof n=="object"?JSON.stringify(n):n).join(", ");throw new Error(t)}warning(...e){return this.isLogLevel(1)?(console.warn(this.time,this.name,"sdk logger warning",...e),this):this}info(...e){return this.isLogLevel(2)?(console.info(this.time,this.name,"sdk logger info",...e),this):this}debug(...e){return this.isLogLevel(3)?(console.debug(this.time,this.name,"sdk logger debug",...e),this):this}},E={},G={};function A(s){let e=M(E,s);if(!e){let t=M(G,s);e=new l({name:s,logLevel:t}),N(E,s,e)}return e}var d=A("Serum"),B=class{static getProgramId(e){let t=_[e];return t||d.logWithError("invalid version","version",e),t}static getVersion(e){let t=e.toBase58(),n=L[t];return n||d.logWithError("invalid program id","programId",t),n}static getStateLayout(e){let t=w[e];return t||d.logWithError(!!t,"invalid version","version",e),t}static getLayouts(e){return{state:this.getStateLayout(e)}}static getAssociatedAuthority({programId:e,marketId:t}){let n=[t.toBuffer()],o=0,y;for(;o<100;){try{let P=n.concat(Buffer.from([o]),Buffer.alloc(7));y=R.createProgramAddressSync(P,e)}catch(P){if(P instanceof TypeError)throw P;o++;continue}return{publicKey:y,nonce:o}}return d.logWithError("unable to find a viable program address nonce","params",{programId:e,marketId:t}),{publicKey:R.default,nonce:o}}};export{k as MARKET_STATE_LAYOUT_V3,w as MARKET_VERSION_TO_STATE_LAYOUT,B as Market,L as SERUM_PROGRAMID_TO_VERSION,_ as SERUM_VERSION_TO_PROGRAMID};
//# sourceMappingURL=index.mjs.map