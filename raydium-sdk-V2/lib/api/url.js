var t=Object.defineProperty;var E=Object.getOwnPropertyDescriptor;var m=Object.getOwnPropertyNames,a=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var s=(o,i,_)=>i in o?t(o,i,{enumerable:!0,configurable:!0,writable:!0,value:_}):o[i]=_,A=(o,i)=>{for(var _ in i||(i={}))O.call(i,_)&&s(o,_,i[_]);if(a)for(var _ of a(i))p.call(i,_)&&s(o,_,i[_]);return o};var S=(o,i)=>{for(var _ in i)t(o,_,{get:i[_],enumerable:!0})},R=(o,i,_,I)=>{if(i&&typeof i=="object"||typeof i=="function")for(let n of m(i))!O.call(o,n)&&n!==_&&t(o,n,{get:()=>i[n],enumerable:!(I=E(i,n))||I.enumerable});return o};var T=o=>R(t({},"__esModule",{value:!0}),o);var N={};S(N,{API_URLS:()=>e,DEV_API_URLS:()=>r});module.exports=T(N);var e={BASE_HOST:"https://api-v3.raydium.io",OWNER_BASE_HOST:"https://owner-v1.raydium.io",SERVICE_BASE_HOST:"https://service.raydium.io",SEND_TRANSACTION:"/send-transaction",FARM_ARP:"/main/farm/info",FARM_ARP_LINE:"/main/farm-apr-tv",CLMM_CONFIG:"/main/clmm-config",VERSION:"/main/version",CHECK_AVAILABILITY:"/v3/main/AvailabilityCheckAPI",RPCS:"/main/rpcs",INFO:"/main/info",STAKE_POOLS:"/main/stake-pools",CHAIN_TIME:"/main/chain-time",TOKEN_LIST:"/mint/list",MINT_INFO_ID:"/mint/ids",JUP_TOKEN_LIST:"https://tokens.jup.ag/tokens?tags=lst,community",POOL_LIST:"/pools/info/list",POOL_SEARCH_BY_ID:"/pools/info/ids",POOL_SEARCH_MINT:"/pools/info/mint",POOL_SEARCH_LP:"/pools/info/lps",POOL_KEY_BY_ID:"/pools/key/ids",POOL_LIQUIDITY_LINE:"/pools/line/liquidity",POOL_POSITION_LINE:"/pools/line/position",FARM_INFO:"/farms/info/ids",FARM_LP_INFO:"/farms/info/lp",FARM_KEYS:"/farms/key/ids",OWNER_CREATED_FARM:"/create-pool/{owner}",OWNER_IDO:"/main/ido/{owner}",OWNER_STAKE_FARMS:"/position/stake/{owner}",IDO_KEYS:"/ido/key/ids",SWAP_HOST:"https://transaction-v1.raydium.io",SWAP_COMPUTE:"/compute/",SWAP_TX:"/transaction/",MINT_PRICE:"/mint/price",MIGRATE_CONFIG:"/main/migrate-lp",PRIORITY_FEE:"/main/auto-fee",JITO:"https://mainnet.block-engine.jito.wtf",JITO_TRANSACTION:"/api/v1/transactions",JITO_BUNDLE:"/api/v1/bundles"},r=A({},e);0&&(module.exports={API_URLS,DEV_API_URLS});
//# sourceMappingURL=url.js.map