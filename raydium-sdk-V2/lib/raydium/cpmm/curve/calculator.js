var x=Object.create;var p=Object.defineProperty;var h=Object.getOwnPropertyDescriptor;var k=Object.getOwnPropertyNames;var v=Object.getPrototypeOf,_=Object.prototype.hasOwnProperty;var Z=(o,e)=>{for(var t in e)p(o,t,{get:e[t],enumerable:!0})},F=(o,e,t,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of k(e))!_.call(o,n)&&n!==t&&p(o,n,{get:()=>e[n],enumerable:!(r=h(e,n))||r.enumerable});return o};var g=(o,e,t)=>(t=o!=null?x(v(o)):{},F(e||!o||!o.__esModule?p(t,"default",{value:o,enumerable:!0}):t,o)),z=o=>F(p({},"__esModule",{value:!0}),o);var T={};Z(T,{CurveCalculator:()=>A,RoundDirection:()=>S});module.exports=z(T);var f=g(require("bn.js")),l=new f.default(1e6);function b(o,e,t){return o.mul(e).add(t).sub(new f.default(1)).div(t)}function R(o,e,t){return o.mul(e).div(t)}var m=class{static tradingFee(e,t){return b(e,t,l)}static protocolFee(e,t){return R(e,t,l)}static fundFee(e,t){return R(e,t,l)}};var B=g(require("bn.js"));function w(o,e){if(e.isZero())throw Error("divisor is zero");return o.mod(e)}function W(o,e){if(e.isZero())throw Error("rhs is zero");let t=o.div(e);if(t.isZero())throw Error("quotient is zero");let r=w(o,e);return r.gt(N)&&(t=t.add(new B.default(1)),e=o.div(t),r=w(o,t),r.gt(N)&&(e=e.add(new B.default(1)))),[t,e]}var N=new B.default(0),c=class{static swapWithoutFees(e,t,r){let n=t.mul(r),u=t.add(e),[i,s]=W(n,u),d=s.sub(t),a=r.sub(i);if(a.isZero())throw Error("destinationAmountSwapped is zero");return{sourceAmountSwapped:d,destinationAmountSwapped:a}}static lpTokensToTradingTokens(e,t,r,n,u){let i=e.mul(r).div(t),s=e.mul(n).div(t);if(u===0)return{tokenAmount0:i,tokenAmount1:s};if(u===1)return w(e.mul(r),t).gt(N)&&i.gt(N)&&(i=i.add(new B.default(1))),w(e.mul(n),t).gt(N)&&s.gt(N)&&(s=s.add(new B.default(1))),{tokenAmount0:i,tokenAmount1:s};throw Error("roundDirection value error")}};var S=(t=>(t[t.Floor=0]="Floor",t[t.Ceiling=1]="Ceiling",t))(S||{}),A=class{static validate_supply(e,t){if(e.isZero())throw Error("tokenAmount0 is zero");if(t.isZero())throw Error("tokenAmount1 is zero")}static swap(e,t,r,n){let u=m.tradingFee(e,n),i=e.sub(u),{sourceAmountSwapped:s,destinationAmountSwapped:d}=c.swapWithoutFees(i,t,r),a=s.add(u);return{newSwapSourceAmount:t.add(a),newSwapDestinationAmount:r.sub(d),sourceAmountSwapped:a,destinationAmountSwapped:d,tradeFee:u}}};0&&(module.exports={CurveCalculator,RoundDirection});
//# sourceMappingURL=calculator.js.map