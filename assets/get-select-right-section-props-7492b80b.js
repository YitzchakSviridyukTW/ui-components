import{r as h,R as v}from"./index-61bf1805.js";import{u as H}from"./use-reduced-motion-72536671.js";import{u as R,C as Z}from"./CloseButton-f78e0b3c.js";import{r as _,a as q,g as Q}from"./ThemeProvider-26608dcc.js";const F=t=>t<.5?2*t*t:-1+(4-2*t)*t,G=({axis:t,target:e,parent:r,alignment:n,offset:o,isList:c})=>{if(!e||!r&&typeof document>"u")return 0;const i=!!r,f=(r||document.body).getBoundingClientRect(),u=e.getBoundingClientRect(),d=s=>u[s]-f[s];if(t==="y"){const s=d("top");if(s===0)return 0;if(n==="start"){const l=s-o;return l<=u.height*(c?0:1)||!c?l:0}const p=i?f.height:window.innerHeight;if(n==="end"){const l=s+o-p+u.height;return l>=-u.height*(c?0:1)||!c?l:0}return n==="center"?s-p/2+u.height/2:0}if(t==="x"){const s=d("left");if(s===0)return 0;if(n==="start"){const l=s-o;return l<=u.width||!c?l:0}const p=i?f.width:window.innerWidth;if(n==="end"){const l=s+o-p+u.width;return l>=-u.width||!c?l:0}return n==="center"?s-p/2+u.width/2:0}return 0},J=({axis:t,parent:e})=>{if(!e&&typeof document>"u")return 0;const r=t==="y"?"scrollTop":"scrollLeft";if(e)return e[r];const{body:n,documentElement:o}=document;return n[r]+o[r]},K=({axis:t,parent:e,distance:r})=>{if(!e&&typeof document>"u")return;const n=t==="y"?"scrollTop":"scrollLeft";if(e)e[n]=r;else{const{body:o,documentElement:c}=document;o[n]=r,c[n]=r}};function _e({duration:t=1250,axis:e="y",onScrollFinish:r,easing:n=F,offset:o=0,cancelable:c=!0,isList:i=!1}={}){const a=h.useRef(0),f=h.useRef(0),u=h.useRef(!1),d=h.useRef(null),s=h.useRef(null),p=H(),l=()=>{a.current&&cancelAnimationFrame(a.current)},m=h.useCallback(({alignment:L="start"}={})=>{var P;u.current=!1,a.current&&l();const S=(P=J({parent:d.current,axis:e}))!=null?P:0,N=G({parent:d.current,target:s.current,axis:e,alignment:L,offset:o,isList:i})-(d.current?0:S);function C(){f.current===0&&(f.current=performance.now());const T=performance.now()-f.current,b=p||t===0?1:T/t,A=S+N*n(b);K({parent:d.current,axis:e,distance:A}),!u.current&&b<1?a.current=requestAnimationFrame(C):(typeof r=="function"&&r(),f.current=0,a.current=0,l())}C()},[e,t,n,i,o,r,p]),O=()=>{c&&(u.current=!0)};return R("wheel",O,{passive:!0}),R("touchmove",O,{passive:!0}),h.useEffect(()=>l,[]),{scrollableRef:d,targetRef:s,scrollIntoView:m,cancel:l}}var U=Object.defineProperty,g=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable,E=(t,e,r)=>e in t?U(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,$=(t,e)=>{for(var r in e||(e={}))x.call(e,r)&&E(t,r,e[r]);if(g)for(var r of g(e))z.call(e,r)&&E(t,r,e[r]);return t},X=(t,e)=>{var r={};for(var n in t)x.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&g)for(var n of g(t))e.indexOf(n)<0&&z.call(t,n)&&(r[n]=t[n]);return r};const Y={xs:_(14),sm:_(18),md:_(20),lg:_(24),xl:_(28)};function k(t){var e=t,{size:r,error:n,style:o}=e,c=X(e,["size","error","style"]);const i=q(),a=Q({size:r,sizes:Y});return v.createElement("svg",$({viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:$({color:n?i.colors.red[6]:i.colors.gray[6],width:a,height:a},o),"data-chevron":!0},c),v.createElement("path",{d:"M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}var ee=Object.defineProperty,te=Object.defineProperties,re=Object.getOwnPropertyDescriptors,j=Object.getOwnPropertySymbols,ne=Object.prototype.hasOwnProperty,oe=Object.prototype.propertyIsEnumerable,I=(t,e,r)=>e in t?ee(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,ce=(t,e)=>{for(var r in e||(e={}))ne.call(e,r)&&I(t,r,e[r]);if(j)for(var r of j(e))oe.call(e,r)&&I(t,r,e[r]);return t},le=(t,e)=>te(t,re(e));function V({shouldClear:t,clearButtonProps:e,onClear:r,size:n,error:o}){return t?v.createElement(Z,le(ce({},e),{variant:"transparent",onClick:r,size:n,onMouseDown:c=>c.preventDefault()})):v.createElement(k,{error:o,size:n})}V.displayName="@mantine/core/SelectRightSection";var se=Object.defineProperty,ie=Object.defineProperties,ae=Object.getOwnPropertyDescriptors,w=Object.getOwnPropertySymbols,W=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable,D=(t,e,r)=>e in t?se(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,y=(t,e)=>{for(var r in e||(e={}))W.call(e,r)&&D(t,r,e[r]);if(w)for(var r of w(e))B.call(e,r)&&D(t,r,e[r]);return t},M=(t,e)=>ie(t,ae(e)),ue=(t,e)=>{var r={};for(var n in t)W.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&w)for(var n of w(t))e.indexOf(n)<0&&B.call(t,n)&&(r[n]=t[n]);return r};function ve(t){var e=t,{styles:r,rightSection:n,rightSectionWidth:o,theme:c}=e,i=ue(e,["styles","rightSection","rightSectionWidth","theme"]);if(n)return{rightSection:n,rightSectionWidth:o,styles:r};const a=typeof r=="function"?r(c):r;return{rightSection:!i.readOnly&&!(i.disabled&&i.shouldClear)&&v.createElement(V,y({},i)),styles:M(y({},a),{rightSection:M(y({},a==null?void 0:a.rightSection),{pointerEvents:i.shouldClear?void 0:"none"})})}}export{ve as g,_e as u};
//# sourceMappingURL=get-select-right-section-props-7492b80b.js.map
