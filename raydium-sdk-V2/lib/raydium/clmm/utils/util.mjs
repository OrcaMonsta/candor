function s(r){let e=new ArrayBuffer(2);return new DataView(e).setUint16(0,r,!1),new Uint8Array(e)}function l(r){let e=new ArrayBuffer(2);return new DataView(e).setInt16(0,r,!1),new Uint8Array(e)}function w(r){let e=new ArrayBuffer(4);return new DataView(e).setUint32(0,r,!1),new Uint8Array(e)}function c(r){let e=new ArrayBuffer(4);return new DataView(e).setInt32(0,r,!1),new Uint8Array(e)}function u(r,e){let n=0;for(let t=r-1;t>=0&&!e.testn(t);t--)n++;return n}function o(r,e){let n=0;for(let t=0;t<r&&!e.testn(t);t++)n++;return n}function i(r,e){for(let n=0;n<r;n++)if(e.testn(n))return!1;return!0}function y(r,e){return i(r,e)?null:u(r,e)}function B(r,e){return i(r,e)?null:o(r,e)}export{l as i16ToBytes,c as i32ToBytes,i as isZero,u as leadingZeros,B as leastSignificantBit,y as mostSignificantBit,o as trailingZeros,s as u16ToBytes,w as u32ToBytes};
//# sourceMappingURL=util.mjs.map