var C=Object.create;var x=Object.defineProperty;var v=Object.getOwnPropertyDescriptor;var I=Object.getOwnPropertyNames;var k=Object.getPrototypeOf,N=Object.prototype.hasOwnProperty;var G=(o,e)=>{for(var t in e)x(o,t,{get:e[t],enumerable:!0})},A=(o,e,t,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let u of I(e))!N.call(o,u)&&u!==t&&x(o,u,{get:()=>e[u],enumerable:!(s=v(e,u))||s.enumerable});return o};var K=(o,e,t)=>(t=o!=null?C(k(o)):{},A(e||!o||!o.__esModule?x(t,"default",{value:o,enumerable:!0}):t,o)),q=o=>A(x({},"__esModule",{value:!0}),o);var z={};G(z,{MARKET_STATE_LAYOUT_V3:()=>D,MARKET_VERSION_TO_STATE_LAYOUT:()=>S,Market:()=>E,SERUM_PROGRAMID_TO_VERSION:()=>m,SERUM_VERSION_TO_PROGRAMID:()=>l});module.exports=q(z);var n=require("@solana/web3.js"),Y=new n.PublicKey("EhhTKczWMGQt46ynNeRX1WfeagwwJd7ufHvCDjRxjo5Q"),J=new n.PublicKey("9KEPoZmtHUrBbhWN1v1KWLMkkvwY6WLtAVUCPRtRjP4z"),Z=new n.PublicKey("FarmqiPv5eAj3j1GMdMCMUGXqPUvmquZtMy86QH6rzhG"),X=new n.PublicKey("CLaimxFqjHzgTJtAGHU47NPhg6qrc5sCnpC4tBLyABQS"),$=new n.PublicKey("srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX"),b=new n.PublicKey("9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin"),ee=new n.PublicKey("675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8"),te=new n.PublicKey("5quBtoiQqxF9Jv6KYKctB59NT3gtJD2Y65kdnB1Uev3h"),re=new n.PublicKey("CDSr3ssLcRB6XYPJwAfFt18MZvEZp4LjHcvzBVZ45duo"),ne=new n.PublicKey("CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK"),oe=new n.PublicKey("routeUGWgWzqBWFcrCfv8tritsqukccJPu3q5GPP3xS"),se=new n.PublicKey("7YttLkHDoNj9wyDur5pM1ejNaAvT9X4eqaYcHQqtj2G5"),ue=new n.PublicKey("6FJon3QE27qgPVggARueB22hLvoh22VzJpXv4rBEoSLF"),ae=new n.PublicKey("CC12se5To1CdEuw7fDS27B7Geo5jJyL7t5UK2B44NgiH"),ie=new n.PublicKey("9HzJyW1qZsEiSfMUf6L2jo3CcTKAyBmSyKdwQeYisHrC"),ce=new n.PublicKey("DropEU8AvevN3UrXWXTMuz3rqnMczQVNjq3kcSdW2SQi"),pe=new n.PublicKey("8yQvrjQuritLntxz6pAaWcEX6CsRMeDmr7baCLnNwEuw"),ye=new n.PublicKey("E1oP2yNZXw3dFnUoPygWZPg9u2Gad87VFVPeYWqa6rD6"),Pe=new n.PublicKey("E1oP2yNZXw3dFnUoPygWZPg9u2Gad87VFVPeYWqa6rD6"),F=new n.PublicKey("CPMDWBwJDtYax9qW7AyRuVC19Cc4L4Vcy4n2BHAbHkCW"),W=new n.PublicKey("7rQ1QFNosMkUCuh7Z7fPbTHvh73b68sQYdirycEzJVuw"),H=new n.PublicKey("G11FKBRaAkHAKuLCgLM6K6NUc9rTjPAznRCjZifrTQe2");var de={SERUM_MARKET:n.PublicKey.default,OPENBOOK_MARKET:new n.PublicKey("EoTcMgcDRTJVZDMZWBoU6rhYHZfkNTVEAfz3uUJRcYGj"),UTIL1216:n.PublicKey.default,FarmV3:new n.PublicKey("85BFyr98MbCUU9MVTEgzx1nbhWACbJqLzho6zd6DZcWL"),FarmV5:new n.PublicKey("EcLzTrNg9V7qhcdyXDe2qjtPkiGzDM2UbdRaeaadU5r2"),FarmV6:new n.PublicKey("Farm2hJLcqPtPg8M4rR6DMrsRNc5TPm5Cs4bVQrMe2T7"),AmmV4:new n.PublicKey("HWy1jotHpo6UqeQxx49dpYYdQB8wj9Qk9MdxwjLvDHB8"),AmmStable:new n.PublicKey("DDg4VmQaJV9ogWce7LpcjBA9bv22wRp5uaTPa5pGjijF"),CLMM:new n.PublicKey("devi51mZmdwUJGU9hjN27vEz64Gps7uUefqxg27EAtH"),Router:new n.PublicKey("BVChZ3XFEwTMUk1o9i3HAf91H6mFxSwa5X2wFAWhYPhU"),CREATE_CPMM_POOL_PROGRAM:F,CREATE_CPMM_POOL_AUTH:W,CREATE_CPMM_POOL_FEE_ACC:H,FEE_DESTINATION_ID:new n.PublicKey("3XMrhbv989VxAMi3DErLV9eJht1pHppW5LbKxe9fkEFR")};var m={[b.toBase58()]:3},l={3:b};var B=require("@solana/web3.js"),f=K(require("bn.js"));var r=require("@solana/buffer-layout"),L=r.Layout,R=r.Structure;var p=r.blob;var _=class extends L{constructor(t,s,u){super(t,u);this.blob=p(t),this.signed=s}decode(t,s=0){let u=new f.default(this.blob.decode(t,s),10,"le");return this.signed?u.fromTwos(this.span*8).clone():u}encode(t,s,u=0){return typeof t=="number"&&(t=new f.default(t)),this.signed&&(t=t.toTwos(this.span*8)),this.blob.encode(t.toArrayLike(Buffer,"le",this.span),s,u)}};function a(o){return new _(8,!1,o)}var T=class extends L{constructor(t,s,u,P){super(t.span,P);this.layout=t,this.decoder=s,this.encoder=u}decode(t,s){return this.decoder(this.layout.decode(t,s))}encode(t,s,u){return this.layout.encode(this.encoder(t),s,u)}getSpan(t,s){return this.layout.getSpan(t,s)}};function i(o){return new T(p(32),e=>new B.PublicKey(e),e=>e.toBuffer(),o)}var h=class extends R{decode(e,t){return super.decode(e,t)}};function U(o,e,t){return new h(o,e,t)}var D=U([p(5),p(8),i("ownAddress"),a("vaultSignerNonce"),i("baseMint"),i("quoteMint"),i("baseVault"),a("baseDepositsTotal"),a("baseFeesAccrued"),i("quoteVault"),a("quoteDepositsTotal"),a("quoteFeesAccrued"),a("quoteDustThreshold"),i("requestQueue"),i("eventQueue"),i("bids"),i("asks"),a("baseLotSize"),a("quoteLotSize"),a("feeRateBps"),a("referrerRebatesAccrued"),p(7)]),S={3:D};var M=require("@solana/web3.js");var y=require("lodash");var w=class{constructor(e){this.logLevel=e.logLevel!==void 0?e.logLevel:0,this.name=e.name}set level(e){this.logLevel=e}get time(){return Date.now().toString()}get moduleName(){return this.name}isLogLevel(e){return e<=this.logLevel}error(...e){return this.isLogLevel(0)?(console.error(this.time,this.name,"sdk logger error",...e),this):this}logWithError(...e){let t=e.map(s=>typeof s=="object"?JSON.stringify(s):s).join(", ");throw new Error(t)}warning(...e){return this.isLogLevel(1)?(console.warn(this.time,this.name,"sdk logger warning",...e),this):this}info(...e){return this.isLogLevel(2)?(console.info(this.time,this.name,"sdk logger info",...e),this):this}debug(...e){return this.isLogLevel(3)?(console.debug(this.time,this.name,"sdk logger debug",...e),this):this}},O={},j={};function V(o){let e=(0,y.get)(O,o);if(!e){let t=(0,y.get)(j,o);e=new w({name:o,logLevel:t}),(0,y.set)(O,o,e)}return e}var g=V("Serum"),E=class{static getProgramId(e){let t=l[e];return t||g.logWithError("invalid version","version",e),t}static getVersion(e){let t=e.toBase58(),s=m[t];return s||g.logWithError("invalid program id","programId",t),s}static getStateLayout(e){let t=S[e];return t||g.logWithError(!!t,"invalid version","version",e),t}static getLayouts(e){return{state:this.getStateLayout(e)}}static getAssociatedAuthority({programId:e,marketId:t}){let s=[t.toBuffer()],u=0,P;for(;u<100;){try{let d=s.concat(Buffer.from([u]),Buffer.alloc(7));P=M.PublicKey.createProgramAddressSync(d,e)}catch(d){if(d instanceof TypeError)throw d;u++;continue}return{publicKey:P,nonce:u}}return g.logWithError("unable to find a viable program address nonce","params",{programId:e,marketId:t}),{publicKey:M.PublicKey.default,nonce:u}}};0&&(module.exports={MARKET_STATE_LAYOUT_V3,MARKET_VERSION_TO_STATE_LAYOUT,Market,SERUM_PROGRAMID_TO_VERSION,SERUM_VERSION_TO_PROGRAMID});
//# sourceMappingURL=index.js.map