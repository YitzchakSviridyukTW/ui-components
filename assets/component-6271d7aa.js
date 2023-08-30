import{r as f}from"./index-61bf1805.js";var l=function(){return l=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},l.apply(this,arguments)};function y(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(n);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(n,r[a])&&(t[r[a]]=n[r[a]]);return t}function B(n,e,t){if(t||arguments.length===2)for(var r=0,a=e.length,o;r<a;r++)(o||!(r in e))&&(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return n.concat(o||Array.prototype.slice.call(e))}var d="right-scroll-bar-position",s="width-before-scroll-bar",b="with-scroll-bars-hidden",S="--removed-body-scroll-bar-size";function w(n,e){return typeof n=="function"?n(e):n&&(n.current=e),n}function x(n,e){var t=f.useState(function(){return{value:n,callback:e,facade:{get current(){return t.value},set current(r){var a=t.value;a!==r&&(t.value=r,t.callback(r,a))}}}})[0];return t.callback=e,t.facade}function G(n,e){return x(e||null,function(t){return n.forEach(function(r){return w(r,t)})})}function E(n){return n}function C(n,e){e===void 0&&(e=E);var t=[],r=!1,a={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return t.length?t[t.length-1]:n},useMedium:function(o){var i=e(o,r);return t.push(i),function(){t=t.filter(function(c){return c!==i})}},assignSyncMedium:function(o){for(r=!0;t.length;){var i=t;t=[],i.forEach(o)}t={push:function(c){return o(c)},filter:function(){return t}}},assignMedium:function(o){r=!0;var i=[];if(t.length){var c=t;t=[],c.forEach(o),i=t}var m=function(){var u=i;i=[],u.forEach(o)},v=function(){return Promise.resolve().then(m)};v(),t={push:function(u){i.push(u),v()},filter:function(u){return i=i.filter(u),t}}}};return a}function L(n){n===void 0&&(n={});var e=C(null);return e.options=l({async:!0,ssr:!1},n),e}var p=function(n){var e=n.sideCar,t=y(n,["sideCar"]);if(!e)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=e.read();if(!r)throw new Error("Sidecar medium not found");return f.createElement(r,l({},t))};p.isSideCarExport=!0;function Q(n,e){return n.useMedium(e),p}var h,_=function(){if(h)return h;if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function O(){if(!document)return null;var n=document.createElement("style");n.type="text/css";var e=_();return e&&n.setAttribute("nonce",e),n}function R(n,e){n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}function N(n){var e=document.head||document.getElementsByTagName("head")[0];e.appendChild(n)}var j=function(){var n=0,e=null;return{add:function(t){n==0&&(e=O())&&(R(e,t),N(e)),n++},remove:function(){n--,!n&&e&&(e.parentNode&&e.parentNode.removeChild(e),e=null)}}},T=function(){var n=j();return function(e,t){f.useEffect(function(){return n.add(e),function(){n.remove()}},[e&&t])}},k=function(){var n=T(),e=function(t){var r=t.styles,a=t.dynamic;return n(r,a),null};return e},I={left:0,top:0,right:0,gap:0},g=function(n){return parseInt(n||"",10)||0},W=function(n){var e=window.getComputedStyle(document.body),t=e[n==="padding"?"paddingLeft":"marginLeft"],r=e[n==="padding"?"paddingTop":"marginTop"],a=e[n==="padding"?"paddingRight":"marginRight"];return[g(t),g(r),g(a)]},z=function(n){if(n===void 0&&(n="margin"),typeof window>"u")return I;var e=W(n),t=document.documentElement.clientWidth,r=window.innerWidth;return{left:e[0],top:e[1],right:e[2],gap:Math.max(0,r-t+e[2]-e[0])}},M=k(),P=function(n,e,t,r){var a=n.left,o=n.top,i=n.right,c=n.gap;return t===void 0&&(t="margin"),`
  .`.concat(b,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(c,"px ").concat(r,`;
  }
  body {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([e&&"position: relative ".concat(r,";"),t==="margin"&&`
    padding-left: `.concat(a,`px;
    padding-top: `).concat(o,`px;
    padding-right: `).concat(i,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(c,"px ").concat(r,`;
    `),t==="padding"&&"padding-right: ".concat(c,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(d,` {
    right: `).concat(c,"px ").concat(r,`;
  }
  
  .`).concat(s,` {
    margin-right: `).concat(c,"px ").concat(r,`;
  }
  
  .`).concat(d," .").concat(d,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(s," .").concat(s,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body {
    `).concat(S,": ").concat(c,`px;
  }
`)},H=function(n){var e=n.noRelative,t=n.noImportant,r=n.gapMode,a=r===void 0?"margin":r,o=f.useMemo(function(){return z(a)},[a]);return f.createElement(M,{styles:P(o,!e,a,t?"":"!important")})};export{H as R,y as _,l as a,B as b,L as c,Q as e,s as f,k as s,G as u,d as z};
//# sourceMappingURL=component-6271d7aa.js.map
