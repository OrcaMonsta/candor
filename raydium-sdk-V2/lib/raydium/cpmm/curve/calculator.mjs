import A from"bn.js";var c=new A(1e6);function R(o,e,t){return o.mul(e).add(t).sub(new A(1)).div(t)}function l(o,e,t){return o.mul(e).div(t)}var p=class{static tradingFee(e,t){return R(e,t,c)}static protocolFee(e,t){return l(e,t,c)}static fundFee(e,t){return l(e,t,c)}};import d from"bn.js";function m(o,e){if(e.isZero())throw Error("divisor is zero");return o.mod(e)}function E(o,e){if(e.isZero())throw Error("rhs is zero");let t=o.div(e);if(t.isZero())throw Error("quotient is zero");let r=m(o,e);return r.gt(N)&&(t=t.add(new d(1)),e=o.div(t),r=m(o,t),r.gt(N)&&(e=e.add(new d(1)))),[t,e]}var N=new d(0),w=class{static swapWithoutFees(e,t,r){let u=t.mul(r),s=t.add(e),[n,i]=E(u,s),B=i.sub(t),a=r.sub(n);if(a.isZero())throw Error("destinationAmountSwapped is zero");return{sourceAmountSwapped:B,destinationAmountSwapped:a}}static lpTokensToTradingTokens(e,t,r,u,s){let n=e.mul(r).div(t),i=e.mul(u).div(t);if(s===0)return{tokenAmount0:n,tokenAmount1:i};if(s===1)return m(e.mul(r),t).gt(N)&&n.gt(N)&&(n=n.add(new d(1))),m(e.mul(u),t).gt(N)&&i.gt(N)&&(i=i.add(new d(1))),{tokenAmount0:n,tokenAmount1:i};throw Error("roundDirection value error")}};var F=(t=>(t[t.Floor=0]="Floor",t[t.Ceiling=1]="Ceiling",t))(F||{}),g=class{static validate_supply(e,t){if(e.isZero())throw Error("tokenAmount0 is zero");if(t.isZero())throw Error("tokenAmount1 is zero")}static swap(e,t,r,u){let s=p.tradingFee(e,u),n=e.sub(s),{sourceAmountSwapped:i,destinationAmountSwapped:B}=w.swapWithoutFees(n,t,r),a=i.add(s);return{newSwapSourceAmount:t.add(a),newSwapDestinationAmount:r.sub(B),sourceAmountSwapped:a,destinationAmountSwapped:B,tradeFee:s}}};export{g as CurveCalculator,F as RoundDirection};
//# sourceMappingURL=calculator.mjs.map