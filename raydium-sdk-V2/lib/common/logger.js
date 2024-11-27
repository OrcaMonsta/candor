var s=Object.defineProperty;var h=Object.getOwnPropertyDescriptor;var v=Object.getOwnPropertyNames;var c=Object.prototype.hasOwnProperty;var m=(r,e)=>{for(var o in e)s(r,o,{get:e[o],enumerable:!0})},a=(r,e,o,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let t of v(e))!c.call(r,t)&&t!==o&&s(r,t,{get:()=>e[t],enumerable:!(n=h(e,t))||n.enumerable});return r};var f=r=>a(s({},"__esModule",{value:!0}),r);var d={};m(d,{LogLevel:()=>L,Logger:()=>g,createLogger:()=>p,setLoggerLevel:()=>b});module.exports=f(d);var i=require("lodash"),L=(t=>(t[t.Error=0]="Error",t[t.Warning=1]="Warning",t[t.Info=2]="Info",t[t.Debug=3]="Debug",t))(L||{}),g=class{constructor(e){this.logLevel=e.logLevel!==void 0?e.logLevel:0,this.name=e.name}set level(e){this.logLevel=e}get time(){return Date.now().toString()}get moduleName(){return this.name}isLogLevel(e){return e<=this.logLevel}error(...e){return this.isLogLevel(0)?(console.error(this.time,this.name,"sdk logger error",...e),this):this}logWithError(...e){let o=e.map(n=>typeof n=="object"?JSON.stringify(n):n).join(", ");throw new Error(o)}warning(...e){return this.isLogLevel(1)?(console.warn(this.time,this.name,"sdk logger warning",...e),this):this}info(...e){return this.isLogLevel(2)?(console.info(this.time,this.name,"sdk logger info",...e),this):this}debug(...e){return this.isLogLevel(3)?(console.debug(this.time,this.name,"sdk logger debug",...e),this):this}},l={},u={};function p(r){let e=(0,i.get)(l,r);if(!e){let o=(0,i.get)(u,r);e=new g({name:r,logLevel:o}),(0,i.set)(l,r,e)}return e}function b(r,e){(0,i.set)(u,r,e);let o=(0,i.get)(l,r);o&&(o.level=e)}0&&(module.exports={LogLevel,Logger,createLogger,setLoggerLevel});
//# sourceMappingURL=logger.js.map