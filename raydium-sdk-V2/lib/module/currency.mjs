var w=Object.defineProperty,T=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var f=(n,e,t)=>e in n?w(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,S=(n,e)=>{for(var t in e||(e={}))h.call(e,t)&&f(n,t,e[t]);if(d)for(var t of d(e))W.call(e,t)&&f(n,t,e[t]);return n},M=(n,e)=>T(n,N(e));import{PublicKey as I}from"@solana/web3.js";import{TOKEN_PROGRAM_ID as g}from"@solana/spl-token";var x={chainId:101,address:I.default.toBase58(),programId:g.toBase58(),decimals:9,symbol:"SOL",name:"solana",logoURI:"https://img.raydium.io/icon/So11111111111111111111111111111111111111112.png",tags:[],priority:2,type:"raydium",extensions:{coingeckoId:"solana"}},r={chainId:101,address:"So11111111111111111111111111111111111111112",programId:g.toBase58(),decimals:9,symbol:"WSOL",name:"Wrapped SOL",logoURI:"https://img.raydium.io/icon/So11111111111111111111111111111111111111112.png",tags:[],priority:2,type:"raydium",extensions:{coingeckoId:"solana"}};import{PublicKey as p}from"@solana/web3.js";import{TOKEN_PROGRAM_ID as q}from"@solana/spl-token";import{PublicKey as o,SystemProgram as K,SYSVAR_RENT_PUBKEY as D}from"@solana/web3.js";function u({pubkey:n,isSigner:e=!1,isWritable:t=!0}){return{pubkey:n,isWritable:t,isSigner:e}}var v=[u({pubkey:q,isWritable:!1}),u({pubkey:K.programId,isWritable:!1}),u({pubkey:D,isWritable:!1})];function k({publicKey:n,transformSol:e}){let t=L(n.toString());if(t instanceof o)return e&&t.equals(s)?P:t;if(e&&t.toString()===s.toBase58())return P;if(typeof t=="string"){if(t===o.default.toBase58())return o.default;try{return new o(t)}catch{throw new Error("invalid public key")}}throw new Error("invalid public key")}function L(n){try{return new o(n)}catch{return n}}var B=new o("MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr"),j=new o("MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr"),H=new o("SysvarRent111111111111111111111111111111111"),z=new o("SysvarC1ock11111111111111111111111111111111"),F=new o("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),J=new o("Sysvar1nstructions1111111111111111111111111"),V=K.programId,Q=new o("4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R"),Z=new o("Ea5SjE2Y6yvCeW5dYTn7PYMuW5ikXkvbGdcmSnXeaLjS"),$=new o("SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt"),e1=new o("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"),t1=new o("Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB"),o1=new o("mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So"),n1=new o("7dHbWXmci3dT8UFYWYZweBLXgycu7Y3iL6trKn1Y7ARj"),i1=new o("USDH1SM1ojwWUga67PGrgFWUHibbjqMvuMaDkRJTgkX"),r1=new o("NRVwhjBQiUPYtfDT5zRBVJajzFQHaBUNtC7SNVvqRFa"),s1=new o("ANAxByE6G2WjFp7A4NqtWYXb3mgruyzZYg3spfxe6Lbo"),a1=new o("7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs"),P=new o("So11111111111111111111111111111111111111112"),s=o.default;var b=class{constructor({mint:e,decimals:t,symbol:a,name:R,skipMint:A=!1,isToken2022:O=!1}){if(e===s.toBase58()||e instanceof p&&s.equals(e)){this.decimals=r.decimals,this.symbol=r.symbol,this.name=r.name,this.mint=new p(r.address),this.isToken2022=!1;return}this.decimals=t,this.symbol=a||e.toString().substring(0,6),this.name=R||e.toString().substring(0,6),this.mint=A?p.default:k({publicKey:e}),this.isToken2022=O}equals(e){return this===e?!0:this.mint.equals(e.mint)}},i=b;i.WSOL=new b(M(S({},r),{mint:r.address}));var y=class{constructor({decimals:e,symbol:t="UNKNOWN",name:a="UNKNOWN"}){this.decimals=e,this.symbol=t,this.name=a}equals(e){return this===e}},m=y;m.SOL=new y(x);function f1(n,e){return n instanceof i&&e instanceof i?n.equals(e):n instanceof i||e instanceof i?!1:n===e}export{m as Currency,f1 as currencyEquals};
//# sourceMappingURL=currency.mjs.map