import{r as E,R as P}from"./index-61bf1805.js";import{r as I}from"./index-2801d3c9.js";import{u as N}from"./use-did-update-ace30b87.js";import{m as A}from"./use-merged-ref-f796d887.js";import{u as B,a as K,e as V,B as C}from"./ThemeProvider-26608dcc.js";import{u as q}from"./use-reduced-motion-72536671.js";var z=Object.defineProperty,U=Object.defineProperties,G=Object.getOwnPropertyDescriptors,_=Object.getOwnPropertySymbols,j=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable,D=(t,e,r)=>e in t?z(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,l=(t,e)=>{for(var r in e||(e={}))j.call(e,r)&&D(t,r,e[r]);if(_)for(var r of _(e))T.call(e,r)&&D(t,r,e[r]);return t},S=(t,e)=>U(t,G(e)),J=(t,e)=>{var r={};for(var n in t)j.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&_)for(var n of _(t))e.indexOf(n)<0&&T.call(t,n)&&(r[n]=t[n]);return r};function L(t){if(!t||typeof t=="string")return 0;const e=t/36;return Math.round((4+15*e**.25+e/5)*10)}function b(t){return t!=null&&t.current?t.current.scrollHeight:"auto"}const h=typeof window<"u"&&window.requestAnimationFrame;function Q({transitionDuration:t,transitionTimingFunction:e="ease",onTransitionEnd:r=()=>{},opened:n}){const a=E.useRef(null),p=0,c={display:"none",height:0,overflow:"hidden"},[u,O]=E.useState(n?{}:c),f=o=>{I.flushSync(()=>O(o))},s=o=>{f(i=>l(l({},i),o))};function d(o){return{transition:`height ${t||L(o)}ms ${e}`}}N(()=>{h(n?()=>{s({willChange:"height",display:"block",overflow:"hidden"}),h(()=>{const o=b(a);s(S(l({},d(o)),{height:o}))})}:()=>{const o=b(a);s(S(l({},d(o)),{willChange:"height",height:o})),h(()=>s({height:p,overflow:"hidden"}))})},[n]);const w=o=>{if(!(o.target!==a.current||o.propertyName!=="height"))if(n){const i=b(a);i===u.height?f({}):s({height:i}),r()}else u.height===p&&(f(c),r())};function R(o={}){var i=o,{style:m={},refKey:y="ref"}=i,$=J(i,["style","refKey"]);const H=$[y];return S(l({"aria-hidden":!n},$),{[y]:A(a,H),onTransitionEnd:w,style:l(l({boxSizing:"border-box"},m),u)})}return R}var W=Object.defineProperty,v=Object.getOwnPropertySymbols,M=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable,x=(t,e,r)=>e in t?W(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,g=(t,e)=>{for(var r in e||(e={}))M.call(e,r)&&x(t,r,e[r]);if(v)for(var r of v(e))F.call(e,r)&&x(t,r,e[r]);return t},X=(t,e)=>{var r={};for(var n in t)M.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&v)for(var n of v(t))e.indexOf(n)<0&&F.call(t,n)&&(r[n]=t[n]);return r};const Y={transitionDuration:200,transitionTimingFunction:"ease",animateOpacity:!0},Z=E.forwardRef((t,e)=>{const r=B("Collapse",Y,t),{children:n,in:a,transitionDuration:p,transitionTimingFunction:c,style:u,onTransitionEnd:O,animateOpacity:f}=r,s=X(r,["children","in","transitionDuration","transitionTimingFunction","style","onTransitionEnd","animateOpacity"]),d=K(),w=q(),o=(d.respectReducedMotion?w:!1)?0:p,{systemStyles:i,rest:m}=V(s),y=Q({opened:a,transitionDuration:o,transitionTimingFunction:c,onTransitionEnd:O});return o===0?a?P.createElement(C,g({},m),n):null:P.createElement(C,g({},y(g(g({style:u,ref:e},m),i))),P.createElement("div",{style:{opacity:a||!f?1:0,transition:f?`opacity ${o}ms ${c}`:"none"}},n))});Z.displayName="@mantine/core/Collapse";export{Z as C};
//# sourceMappingURL=Collapse-b0e60d3c.js.map