var a=Object.defineProperty;var n=Object.getOwnPropertySymbols;var s=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var t=(_,i,o)=>i in _?a(_,i,{enumerable:!0,configurable:!0,writable:!0,value:o}):_[i]=o,I=(_,i)=>{for(var o in i||(i={}))s.call(i,o)&&t(_,o,i[o]);if(n)for(var o of n(i))O.call(i,o)&&t(_,o,i[o]);return _};var A={BASE_HOST:"https://api-v3.raydium.io",OWNER_BASE_HOST:"https://owner-v1.raydium.io",SERVICE_BASE_HOST:"https://service.raydium.io",SEND_TRANSACTION:"/send-transaction",FARM_ARP:"/main/farm/info",FARM_ARP_LINE:"/main/farm-apr-tv",CLMM_CONFIG:"/main/clmm-config",VERSION:"/main/version",CHECK_AVAILABILITY:"/v3/main/AvailabilityCheckAPI",RPCS:"/main/rpcs",INFO:"/main/info",STAKE_POOLS:"/main/stake-pools",CHAIN_TIME:"/main/chain-time",TOKEN_LIST:"/mint/list",MINT_INFO_ID:"/mint/ids",JUP_TOKEN_LIST:"https://tokens.jup.ag/tokens?tags=lst,community",POOL_LIST:"/pools/info/list",POOL_SEARCH_BY_ID:"/pools/info/ids",POOL_SEARCH_MINT:"/pools/info/mint",POOL_SEARCH_LP:"/pools/info/lps",POOL_KEY_BY_ID:"/pools/key/ids",POOL_LIQUIDITY_LINE:"/pools/line/liquidity",POOL_POSITION_LINE:"/pools/line/position",FARM_INFO:"/farms/info/ids",FARM_LP_INFO:"/farms/info/lp",FARM_KEYS:"/farms/key/ids",OWNER_CREATED_FARM:"/create-pool/{owner}",OWNER_IDO:"/main/ido/{owner}",OWNER_STAKE_FARMS:"/position/stake/{owner}",IDO_KEYS:"/ido/key/ids",SWAP_HOST:"https://transaction-v1.raydium.io",SWAP_COMPUTE:"/compute/",SWAP_TX:"/transaction/",MINT_PRICE:"/mint/price",MIGRATE_CONFIG:"/main/migrate-lp",PRIORITY_FEE:"/main/auto-fee",JITO:"https://mainnet.block-engine.jito.wtf",JITO_TRANSACTION:"/api/v1/transactions",JITO_BUNDLE:"/api/v1/bundles"},p=I({},A);export{A as API_URLS,p as DEV_API_URLS};
//# sourceMappingURL=url.mjs.map