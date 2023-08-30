import{r as a,g as h,u as I,B as W,c as D,j as y,T as A}from"./ThemeProvider-26608dcc.js";import{r as $,R as c}from"./index-61bf1805.js";import{s as G}from"./utils-29fdbd63.js";import{c as M}from"./create-styles-5419e27d.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-cbc55568.js";import"./_commonjsHelpers-de833af9.js";var H=Object.defineProperty,K=Object.defineProperties,L=Object.getOwnPropertyDescriptors,v=Object.getOwnPropertySymbols,Y=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable,x=(e,r,t)=>r in e?H(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,g=(e,r)=>{for(var t in r||(r={}))Y.call(r,t)&&x(e,t,r[t]);if(v)for(var t of v(r))F.call(r,t)&&x(e,t,r[t]);return e},J=(e,r)=>K(e,L(r));const Q=["light","filled","outline","dot","gradient"],m={xs:{fontSize:a(9),height:a(16)},sm:{fontSize:a(10),height:a(18)},md:{fontSize:a(11),height:a(20)},lg:{fontSize:a(13),height:a(26)},xl:{fontSize:a(16),height:a(32)}},U={xs:a(4),sm:a(4),md:a(6),lg:a(8),xl:a(10)};function X({theme:e,variant:r,color:t,size:n,gradient:i}){if(!Q.includes(r))return null;if(r==="dot"){const o=h({size:n,sizes:U});return{backgroundColor:"transparent",color:e.colorScheme==="dark"?e.colors.dark[0]:e.colors.gray[7],border:`${a(1)} solid ${e.colorScheme==="dark"?e.colors.dark[3]:e.colors.gray[3]}`,paddingLeft:`calc(${h({size:n,sizes:e.spacing})} / 1.5 - ${o} / 2)`,"&::before":{content:'""',display:"block",width:o,height:o,borderRadius:o,backgroundColor:e.fn.themeColor(t,e.colorScheme==="dark"?4:e.fn.primaryShade("light"),!0),marginRight:o}}}const s=e.fn.variant({color:t,variant:r,gradient:i});return{background:s.background,color:s.color,border:`${a(r==="gradient"?0:1)} solid ${s.border}`}}var Z=M((e,{color:r,radius:t,gradient:n,fullWidth:i},{variant:s,size:o})=>{const{fontSize:f,height:l}=o in m?m[o]:m.md;return{leftSection:{marginRight:`calc(${e.spacing.xs} / 2)`},rightSection:{marginLeft:`calc(${e.spacing.xs} / 2)`},inner:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},root:g(J(g(g({},e.fn.focusStyles()),e.fn.fontStyles()),{fontSize:f,height:l,WebkitTapHighlightColor:"transparent",lineHeight:`calc(${l} - ${a(2)})`,textDecoration:"none",padding:`0 calc(${h({size:o,sizes:e.spacing})} / 1.5)`,boxSizing:"border-box",display:i?"flex":"inline-flex",alignItems:"center",justifyContent:"center",width:i?"100%":"auto",textTransform:"uppercase",borderRadius:e.fn.radius(t),fontWeight:700,letterSpacing:a(.25),cursor:"inherit",textOverflow:"ellipsis",overflow:"hidden"}),X({theme:e,variant:s,color:r,size:o,gradient:n}))}});const ee=Z;var re=Object.defineProperty,u=Object.getOwnPropertySymbols,z=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable,b=(e,r,t)=>r in e?re(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,te=(e,r)=>{for(var t in r||(r={}))z.call(r,t)&&b(e,t,r[t]);if(u)for(var t of u(r))N.call(r,t)&&b(e,t,r[t]);return e},ae=(e,r)=>{var t={};for(var n in e)z.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&u)for(var n of u(e))r.indexOf(n)<0&&N.call(e,n)&&(t[n]=e[n]);return t};const ne={variant:"light",size:"md",radius:"xl"},V=$.forwardRef((e,r)=>{const t=I("Badge",ne,e),{className:n,color:i,variant:s,fullWidth:o,children:f,size:l,leftSection:_,rightSection:w,radius:R,gradient:j,classNames:q,styles:E,unstyled:C}=t,k=ae(t,["className","color","variant","fullWidth","children","size","leftSection","rightSection","radius","gradient","classNames","styles","unstyled"]),{classes:d,cx:T}=ee({fullWidth:o,color:i,radius:R,gradient:j},{classNames:q,styles:E,name:"Badge",unstyled:C,variant:s,size:l});return c.createElement(W,te({className:T(d.root,n),ref:r},k),_&&c.createElement("span",{className:d.leftSection},_),c.createElement("span",{className:d.inner},f),w&&c.createElement("span",{className:d.rightSection},w))});V.displayName="@mantine/core/Badge";const oe=D(V),ie=G(oe)(()=>({})),S=$.forwardRef((e,r)=>{const{uppercase:t=!0,...n}=e,i=t?{}:{textTransform:"none"};return y.jsx(ie,{...n,ref:r,style:{...i,fontWeight:500}})});try{S.displayName="Badge",S.__docgenInfo={description:"",displayName:"Badge",props:{color:{defaultValue:null,description:"Key of theme.colors",name:"color",required:!1,type:{name:'"one.0" | "one.1" | "one.2" | "one.3" | "one.4" | "one.5" | "one.6" | "one.7" | "one.8" | "one.9" | "two.0" | "two.1" | "two.2" | "two.3" | "two.4" | "two.5" | "two.6" | "two.7" | ... 92 more ... | undefined'}},uppercase:{defaultValue:null,description:"",name:"uppercase",required:!1,type:{name:"boolean | undefined"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | undefined"}},"data-testid":{defaultValue:null,description:"",name:"data-testid",required:!1,type:{name:"string | undefined"}},children:{defaultValue:null,description:"Badge label",name:"children",required:!1,type:{name:"ReactNode"}},size:{defaultValue:null,description:"Badge height and font size",name:"size",required:!1,type:{name:"MantineSize | undefined"}},radius:{defaultValue:null,description:'Key of theme.radius or any valid CSS value to set border-radius, "xl" by default',name:"radius",required:!1,type:{name:"MantineNumberSize | undefined"}},rightSection:{defaultValue:null,description:"Section rendered on the right side of label",name:"rightSection",required:!1,type:{name:"ReactNode"}},variant:{defaultValue:null,description:"Controls appearance",name:"variant",required:!1,type:{name:"BadgeVariant | undefined"}},gradient:{defaultValue:null,description:"Controls gradient, applied to gradient variant only",name:"gradient",required:!1,type:{name:"MantineGradient | undefined"}},leftSection:{defaultValue:null,description:"Section rendered on the left side of label",name:"leftSection",required:!1,type:{name:"ReactNode"}},fullWidth:{defaultValue:null,description:"Sets badge width to 100% of parent element, hides overflow text with text-overflow: ellipsis",name:"fullWidth",required:!1,type:{name:"boolean | undefined"}}}}}catch{}const fe={component:S,tags:["autodocs"],decorators:[e=>y.jsx(A,{children:y.jsx(e,{})})],argTypes:{id:{control:"text"},"data-testid":{control:"text"},variant:{control:{type:"select"},options:["light","filled","outline","dot","gradient"]},uppercase:{control:{type:"boolean"}}},parameters:{docs:{description:{component:`
### Badge component

This description is written using markdown.  
Go ahead, poke around and see what you can do.
You have the power to change the world.
`}}}},p={args:{children:"Badge",uppercase:!0}};var O,P,B;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    children: 'Badge',
    uppercase: true
  }
}`,...(B=(P=p.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};const ge=["Basic"];export{p as Basic,ge as __namedExportsOrder,fe as default};
//# sourceMappingURL=Badge.stories-78c0f9b5.js.map