import{r as f,g as q,u as Kn,e as Un,j as le,T as Gn}from"./ThemeProvider-26608dcc.js";import{R as c,r as O}from"./index-61bf1805.js";import{s as Zn}from"./utils-29fdbd63.js";import{c as ze}from"./create-styles-5419e27d.js";import{C as Yn}from"./CloseButton-f78e0b3c.js";import{D as Jn,g as Qn,S as te,a as Xn,b as ea}from"./SelectPopover-45c19d21.js";import{u as na,g as aa}from"./get-select-right-section-props-7492b80b.js";import{s as Pe}from"./Input.styles-4e18fb2b.js";import{I as Ce}from"./Input-d73ae213.js";import{g as ta}from"./Transition-1d4b8db2.js";import{u as ra}from"./use-id-ffac3e23.js";import{u as Oe}from"./use-uncontrolled-99e60b6a.js";import{u as re}from"./use-did-update-ace30b87.js";import{u as la}from"./use-merged-ref-f796d887.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-cbc55568.js";import"./_commonjsHelpers-de833af9.js";import"./ActionIcon-f7ad42c4.js";import"./Loader-edab0aec.js";import"./UnstyledButton-506011f1.js";import"./Text-a3983a60.js";import"./index-2801d3c9.js";import"./get-styles-ref-1f22bf7e.js";import"./pack-sx-3cdbfbd6.js";import"./get-floating-position-ec0ec020.js";import"./floating-ui.dom.browser.min-68d1e088.js";import"./create-safe-context-7cc4f5c7.js";import"./OptionalPortal-7fa477af.js";import"./FocusTrap-146d050a.js";import"./use-reduced-motion-72536671.js";const $e={xs:f(16),sm:f(22),md:f(26),lg:f(30),xl:f(36)},ia={xs:f(10),sm:f(12),md:f(14),lg:f(16),xl:f(18)};var oa=ze((e,{disabled:n,radius:a,readOnly:r},{size:g,variant:V})=>({defaultValue:{display:"flex",alignItems:"center",backgroundColor:n?e.colorScheme==="dark"?e.colors.dark[5]:e.colors.gray[3]:e.colorScheme==="dark"?e.colors.dark[7]:V==="filled"?e.white:e.colors.gray[1],color:n?e.colorScheme==="dark"?e.colors.dark[1]:e.colors.gray[7]:e.colorScheme==="dark"?e.colors.dark[0]:e.colors.gray[7],height:q({size:g,sizes:$e}),paddingLeft:`calc(${q({size:g,sizes:e.spacing})} / 1.5)`,paddingRight:n||r?q({size:g,sizes:e.spacing}):0,fontWeight:500,fontSize:q({size:g,sizes:ia}),borderRadius:q({size:a,sizes:e.radius}),cursor:n?"not-allowed":"default",userSelect:"none",maxWidth:`calc(100% - ${f(10)})`},defaultValueRemove:{color:e.colorScheme==="dark"?e.colors.dark[0]:e.colors.gray[7],marginLeft:`calc(${q({size:g,sizes:e.spacing})} / 6)`},defaultValueLabel:{display:"block",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}));const da=oa;var ua=Object.defineProperty,Y=Object.getOwnPropertySymbols,Le=Object.prototype.hasOwnProperty,Be=Object.prototype.propertyIsEnumerable,xe=(e,n,a)=>n in e?ua(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a,sa=(e,n)=>{for(var a in n||(n={}))Le.call(n,a)&&xe(e,a,n[a]);if(Y)for(var a of Y(n))Be.call(n,a)&&xe(e,a,n[a]);return e},pa=(e,n)=>{var a={};for(var r in e)Le.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&Y)for(var r of Y(e))n.indexOf(r)<0&&Be.call(e,r)&&(a[r]=e[r]);return a};const ca={xs:16,sm:22,md:24,lg:26,xl:30};function We(e){var n=e,{label:a,classNames:r,styles:g,className:V,onRemove:N,disabled:x,readOnly:o,size:s,radius:m="sm",variant:S,unstyled:A}=n,Q=pa(n,["label","classNames","styles","className","onRemove","disabled","readOnly","size","radius","variant","unstyled"]);const{classes:F,cx:z}=da({disabled:x,readOnly:o,radius:m},{name:"MultiSelect",classNames:r,styles:g,unstyled:A,size:s,variant:S});return c.createElement("div",sa({className:z(F.defaultValue,V)},Q),c.createElement("span",{className:F.defaultValueLabel},a),!x&&!o&&c.createElement(Yn,{"aria-hidden":!0,onMouseDown:N,size:ca[s],radius:2,color:"blue",variant:"transparent",iconSize:"70%",className:F.defaultValueRemove,tabIndex:-1,unstyled:A}))}We.displayName="@mantine/core/MultiSelect/DefaultValue";function fa({data:e,searchable:n,limit:a,searchValue:r,filter:g,value:V,disableSelectedItemFiltering:N}){if(!n&&V.length===0)return e;if(!n){const o=[];for(let s=0;s<e.length;s+=1)(N||!V.some(m=>m===e[s].value&&!e[s].disabled))&&o.push(e[s]);return o}const x=[];for(let o=0;o<e.length&&(g(r,!N&&V.some(s=>s===e[o].value&&!e[o].disabled),e[o])&&x.push(e[o]),!(x.length>=a));o+=1);return x}var ma=Object.defineProperty,ya=Object.defineProperties,ha=Object.getOwnPropertyDescriptors,_e=Object.getOwnPropertySymbols,ga=Object.prototype.hasOwnProperty,ba=Object.prototype.propertyIsEnumerable,Ie=(e,n,a)=>n in e?ma(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a,Va=(e,n)=>{for(var a in n||(n={}))ga.call(n,a)&&Ie(e,a,n[a]);if(_e)for(var a of _e(n))ba.call(n,a)&&Ie(e,a,n[a]);return e},va=(e,n)=>ya(e,ha(n)),wa=ze((e,{invalid:n},{size:a})=>({wrapper:{position:"relative","&:has(input:disabled)":{cursor:"not-allowed",pointerEvents:"none","& .mantine-MultiSelect-input":{backgroundColor:e.colorScheme==="dark"?e.colors.dark[6]:e.colors.gray[1],color:e.colors.dark[2],opacity:.6,"&::placeholder":{color:e.colors.dark[2]}},"& .mantine-MultiSelect-defaultValue":{backgroundColor:e.colorScheme==="dark"?e.colors.dark[5]:e.colors.gray[3],color:e.colorScheme==="dark"?e.colors.dark[1]:e.colors.gray[7]}}},values:{minHeight:`calc(${q({size:a,sizes:Pe})} - ${f(2)})`,display:"flex",alignItems:"center",flexWrap:"wrap",marginLeft:`calc(-${e.spacing.xs} / 2)`,boxSizing:"border-box","&[data-clearable]":{marginRight:q({size:a,sizes:Pe})}},value:{margin:`calc(${e.spacing.xs} / 2 - ${f(2)}) calc(${e.spacing.xs} / 2)`},searchInput:va(Va({},e.fn.fontStyles()),{flex:1,minWidth:f(60),backgroundColor:"transparent",border:0,outline:0,fontSize:q({size:a,sizes:e.fontSizes}),padding:0,marginLeft:`calc(${e.spacing.xs} / 2)`,appearance:"none",color:"inherit",maxHeight:q({size:a,sizes:$e}),"&::placeholder":{opacity:1,color:n?e.colors.red[e.fn.primaryShade()]:e.colorScheme==="dark"?e.colors.dark[3]:e.colors.gray[5]},"&:disabled":{cursor:"not-allowed",pointerEvents:"none"}}),searchInputEmpty:{width:"100%"},searchInputInputHidden:{flex:0,width:0,minWidth:0,margin:0,overflow:"hidden"},searchInputPointer:{cursor:"pointer","&:disabled":{cursor:"not-allowed",pointerEvents:"none"}},input:{cursor:"pointer","&:disabled":{cursor:"not-allowed",pointerEvents:"none"}}}));const qa=wa;var Sa=Object.defineProperty,Pa=Object.defineProperties,Ca=Object.getOwnPropertyDescriptors,J=Object.getOwnPropertySymbols,Fe=Object.prototype.hasOwnProperty,He=Object.prototype.propertyIsEnumerable,De=(e,n,a)=>n in e?Sa(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a,W=(e,n)=>{for(var a in n||(n={}))Fe.call(n,a)&&De(e,a,n[a]);if(J)for(var a of J(n))He.call(n,a)&&De(e,a,n[a]);return e},ke=(e,n)=>Pa(e,Ca(n)),Oa=(e,n)=>{var a={};for(var r in e)Fe.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&J)for(var r of J(e))n.indexOf(r)<0&&He.call(e,r)&&(a[r]=e[r]);return a};function xa(e,n,a){return n?!1:a.label.toLowerCase().trim().includes(e.toLowerCase().trim())}function _a(e,n){return!!e&&!n.some(a=>a.value.toLowerCase()===e.toLowerCase())}function Re(e,n){if(!Array.isArray(e))return;if(n.length===0)return[];const a=n.map(r=>typeof r=="object"?r.value:r);return e.filter(r=>a.includes(r))}const Ia={size:"sm",valueComponent:We,itemComponent:Jn,transitionProps:{transition:"fade",duration:0},maxDropdownHeight:220,shadow:"sm",searchable:!1,filter:xa,limit:1/0,clearSearchOnChange:!0,clearable:!1,clearSearchOnBlur:!1,disabled:!1,initiallyOpened:!1,creatable:!1,shouldCreate:_a,switchDirectionOnFlip:!1,zIndex:ta("popover"),selectOnBlur:!1,positionDependencies:[],dropdownPosition:"flip"},Te=O.forwardRef((e,n)=>{const a=Kn("MultiSelect",Ia,e),{className:r,style:g,required:V,label:N,description:x,size:o,error:s,classNames:m,styles:S,wrapperProps:A,value:Q,defaultValue:F,data:z,onChange:Ae,valueComponent:je,itemComponent:Ke,id:Ue,transitionProps:Ge,maxDropdownHeight:Ze,shadow:ka,nothingFound:oe,onFocus:de,onBlur:ue,searchable:v,placeholder:Ye,filter:Je,limit:Qe,clearSearchOnChange:Xe,clearable:se,clearSearchOnBlur:en,variant:$,onSearchChange:nn,searchValue:an,disabled:P,initiallyOpened:tn,radius:pe,icon:rn,rightSection:ln,rightSectionWidth:on,creatable:ce,getCreateLabel:fe,shouldCreate:dn,onCreate:me,sx:un,dropdownComponent:sn,onDropdownClose:pn,onDropdownOpen:cn,maxSelectedValues:y,withinPortal:fn,portalProps:mn,switchDirectionOnFlip:yn,zIndex:hn,selectOnBlur:gn,name:bn,dropdownPosition:Vn,errorProps:vn,labelProps:wn,descriptionProps:qn,form:Sn,positionDependencies:Pn,onKeyDown:ye,unstyled:H,inputContainer:Cn,inputWrapperOrder:On,readOnly:k,withAsterisk:xn,clearButtonProps:_n,hoverOnSearchChange:he,disableSelectedItemFiltering:In}=a,Dn=Oa(a,["className","style","required","label","description","size","error","classNames","styles","wrapperProps","value","defaultValue","data","onChange","valueComponent","itemComponent","id","transitionProps","maxDropdownHeight","shadow","nothingFound","onFocus","onBlur","searchable","placeholder","filter","limit","clearSearchOnChange","clearable","clearSearchOnBlur","variant","onSearchChange","searchValue","disabled","initiallyOpened","radius","icon","rightSection","rightSectionWidth","creatable","getCreateLabel","shouldCreate","onCreate","sx","dropdownComponent","onDropdownClose","onDropdownOpen","maxSelectedValues","withinPortal","portalProps","switchDirectionOnFlip","zIndex","selectOnBlur","name","dropdownPosition","errorProps","labelProps","descriptionProps","form","positionDependencies","onKeyDown","unstyled","inputContainer","inputWrapperOrder","readOnly","withAsterisk","clearButtonProps","hoverOnSearchChange","disableSelectedItemFiltering"]),{classes:_,cx:ge,theme:kn}=qa({invalid:!!s},{name:"MultiSelect",classNames:m,styles:S,unstyled:H,size:o,variant:$}),{systemStyles:Rn,rest:En}=Un(Dn),X=O.useRef(),ee=O.useRef({}),L=ra(Ue),[p,u]=O.useState(tn),[Mn,I]=O.useState(-1),[be,Nn]=O.useState("column"),[w,j]=Oe({value:an,defaultValue:"",finalValue:void 0,onChange:nn}),[zn,Ve]=O.useState(!1),{scrollIntoView:K,targetRef:ve,scrollableRef:$n}=na({duration:0,offset:5,cancelable:!1,isList:!0}),we=ce&&typeof fe=="function";let ne=null;const Ln=z.map(t=>typeof t=="string"?{label:t,value:t}:t),ae=Qn({data:Ln}),[i,B]=Oe({value:Re(Q,z),defaultValue:Re(F,z),finalValue:[],onChange:Ae}),b=O.useRef(!!y&&y<i.length),qe=t=>{if(!k){const l=i.filter(h=>h!==t);B(l),y&&l.length<y&&(b.current=!1)}},Bn=t=>{j(t.currentTarget.value),!P&&!b.current&&v&&u(!0)},Wn=t=>{typeof de=="function"&&de(t),!P&&!b.current&&v&&u(!0)},d=fa({data:ae,searchable:v,searchValue:w,limit:Qe,filter:Je,value:i,disableSelectedItemFiltering:In});we&&dn(w,ae)&&(ne=fe(w),d.push({label:w,value:w,creatable:!0}));const R=Math.min(Mn,d.length-1),Se=(t,l,h)=>{let D=t;for(;h(D);)if(D=l(D),!d[D].disabled)return D;return t};re(()=>{I(he&&w?0:-1)},[w,he]),re(()=>{!P&&i.length>z.length&&u(!1),y&&i.length<y&&(b.current=!1),y&&i.length>=y&&(b.current=!0,u(!1))},[i]);const U=t=>{if(!k)if(Xe&&j(""),i.includes(t.value))qe(t.value);else{if(t.creatable&&typeof me=="function"){const l=me(t.value);typeof l<"u"&&l!==null&&B(typeof l=="string"?[...i,l]:[...i,l.value])}else B([...i,t.value]);i.length===y-1&&(b.current=!0,u(!1)),d.length===1&&u(!1)}},Fn=t=>{typeof ue=="function"&&ue(t),gn&&d[R]&&p&&U(d[R]),en&&j(""),u(!1)},Hn=t=>{if(zn||(ye==null||ye(t),k)||t.key!=="Backspace"&&y&&b.current)return;const l=be==="column",h=()=>{I(E=>{var C;const T=Se(E,M=>M+1,M=>M<d.length-1);return p&&(ve.current=ee.current[(C=d[T])==null?void 0:C.value],K({alignment:l?"end":"start"})),T})},D=()=>{I(E=>{var C;const T=Se(E,M=>M-1,M=>M>0);return p&&(ve.current=ee.current[(C=d[T])==null?void 0:C.value],K({alignment:l?"start":"end"})),T})};switch(t.key){case"ArrowUp":{t.preventDefault(),u(!0),l?D():h();break}case"ArrowDown":{t.preventDefault(),u(!0),l?h():D();break}case"Enter":{t.preventDefault(),d[R]&&p?U(d[R]):u(!0);break}case" ":{v||(t.preventDefault(),d[R]&&p?U(d[R]):u(!0));break}case"Backspace":{i.length>0&&w.length===0&&(B(i.slice(0,-1)),u(!0),y&&(b.current=!1));break}case"Home":{if(!v){t.preventDefault(),p||u(!0);const E=d.findIndex(C=>!C.disabled);I(E),K({alignment:l?"end":"start"})}break}case"End":{if(!v){t.preventDefault(),p||u(!0);const E=d.map(C=>!!C.disabled).lastIndexOf(!1);I(E),K({alignment:l?"end":"start"})}break}case"Escape":u(!1)}},Tn=i.map(t=>{let l=ae.find(h=>h.value===t&&!h.disabled);return!l&&we&&(l={value:t,label:t}),l}).filter(t=>!!t).map((t,l)=>c.createElement(je,ke(W({},t),{variant:$,disabled:P,className:_.value,readOnly:k,onRemove:h=>{h.preventDefault(),h.stopPropagation(),qe(t.value)},key:t.value,size:o,styles:S,classNames:m,radius:pe,index:l}))),An=t=>i.includes(t),jn=()=>{var t;j(""),B([]),(t=X.current)==null||t.focus(),y&&(b.current=!1)},G=!k&&(d.length>0?p:p&&!!oe);return re(()=>{const t=G?cn:pn;typeof t=="function"&&t()},[G]),c.createElement(Ce.Wrapper,W(W({required:V,id:L,label:N,error:s,description:x,size:o,className:r,style:g,classNames:m,styles:S,__staticSelector:"MultiSelect",sx:un,errorProps:vn,descriptionProps:qn,labelProps:wn,inputContainer:Cn,inputWrapperOrder:On,unstyled:H,withAsterisk:xn,variant:$},Rn),A),c.createElement(te,{opened:G,transitionProps:Ge,shadow:"sm",withinPortal:fn,portalProps:mn,__staticSelector:"MultiSelect",onDirectionChange:Nn,switchDirectionOnFlip:yn,zIndex:hn,dropdownPosition:Vn,positionDependencies:[...Pn,w],classNames:m,styles:S,unstyled:H,variant:$},c.createElement(te.Target,null,c.createElement("div",{className:_.wrapper,role:"combobox","aria-haspopup":"listbox","aria-owns":p&&G?`${L}-items`:null,"aria-controls":L,"aria-expanded":p,onMouseLeave:()=>I(-1),tabIndex:-1},c.createElement("input",{type:"hidden",name:bn,value:i.join(","),form:Sn,disabled:P}),c.createElement(Ce,W({__staticSelector:"MultiSelect",style:{overflow:"hidden"},component:"div",multiline:!0,size:o,variant:$,disabled:P,error:s,required:V,radius:pe,icon:rn,unstyled:H,onMouseDown:t=>{var l;t.preventDefault(),!P&&!b.current&&u(!p),(l=X.current)==null||l.focus()},classNames:ke(W({},m),{input:ge({[_.input]:!v},m==null?void 0:m.input)})},aa({theme:kn,rightSection:ln,rightSectionWidth:on,styles:S,size:o,shouldClear:se&&i.length>0,onClear:jn,error:s,disabled:P,clearButtonProps:_n,readOnly:k})),c.createElement("div",{className:_.values,"data-clearable":se||void 0},Tn,c.createElement("input",W({ref:la(n,X),type:"search",id:L,className:ge(_.searchInput,{[_.searchInputPointer]:!v,[_.searchInputInputHidden]:!p&&i.length>0||!v&&i.length>0,[_.searchInputEmpty]:i.length===0}),onKeyDown:Hn,value:w,onChange:Bn,onFocus:Wn,onBlur:Fn,readOnly:!v||b.current||k,placeholder:i.length===0?Ye:void 0,disabled:P,"data-mantine-stop-propagation":p,autoComplete:"off",onCompositionStart:()=>Ve(!0),onCompositionEnd:()=>Ve(!1)},En)))))),c.createElement(te.Dropdown,{component:sn||Xn,maxHeight:Ze,direction:be,id:L,innerRef:$n,__staticSelector:"MultiSelect",classNames:m,styles:S},c.createElement(ea,{data:d,hovered:R,classNames:m,styles:S,uuid:L,__staticSelector:"MultiSelect",onItemHover:I,onItemSelect:U,itemsRefs:ee,itemComponent:Ke,size:o,nothingFound:oe,isItemSelected:An,creatable:ce&&!!ne,createLabel:ne,unstyled:H,variant:$}))))});Te.displayName="@mantine/core/MultiSelect";const Da=Zn(Te)(()=>({})),ie=O.forwardRef((e,n)=>le.jsx(Da,{...e,ref:n}));try{ie.displayName="MultiSelect",ie.__docgenInfo={description:"",displayName:"MultiSelect",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | undefined"}},"data-testid":{defaultValue:null,description:"",name:"data-testid",required:!1,type:{name:"string | undefined"}},accept:{defaultValue:null,description:"",name:"accept",required:!1,type:{name:"string | undefined"}},alt:{defaultValue:null,description:"",name:"alt",required:!1,type:{name:"string | undefined"}},autoComplete:{defaultValue:null,description:"",name:"autoComplete",required:!1,type:{name:"string | undefined"}},capture:{defaultValue:null,description:"",name:"capture",required:!1,type:{name:'boolean | "user" | "environment" | undefined'}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean | undefined"}},disabled:{defaultValue:null,description:"Disabled input state",name:"disabled",required:!1,type:{name:"boolean | undefined"}},enterKeyHint:{defaultValue:null,description:"",name:"enterKeyHint",required:!1,type:{name:'"search" | "enter" | "done" | "go" | "next" | "previous" | "send" | undefined'}},form:{defaultValue:null,description:"",name:"form",required:!1,type:{name:"string | undefined"}},formAction:{defaultValue:null,description:"",name:"formAction",required:!1,type:{name:"string | undefined"}},formEncType:{defaultValue:null,description:"",name:"formEncType",required:!1,type:{name:"string | undefined"}},formMethod:{defaultValue:null,description:"",name:"formMethod",required:!1,type:{name:"string | undefined"}},formNoValidate:{defaultValue:null,description:"",name:"formNoValidate",required:!1,type:{name:"boolean | undefined"}},formTarget:{defaultValue:null,description:"",name:"formTarget",required:!1,type:{name:"string | undefined"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string | number | undefined"}},list:{defaultValue:null,description:"",name:"list",required:!1,type:{name:"string | undefined"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"string | number | undefined"}},maxLength:{defaultValue:null,description:"",name:"maxLength",required:!1,type:{name:"number | undefined"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"string | number | undefined"}},minLength:{defaultValue:null,description:"",name:"minLength",required:!1,type:{name:"number | undefined"}},multiple:{defaultValue:null,description:"",name:"multiple",required:!1,type:{name:"boolean | undefined"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string | undefined"}},pattern:{defaultValue:null,description:"",name:"pattern",required:!1,type:{name:"string | undefined"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string | undefined"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean | undefined"}},required:{defaultValue:null,description:`Adds required attribute to the input and red asterisk on the right side of label
Sets required on input element`,name:"required",required:!1,type:{name:"boolean | undefined"}},size:{defaultValue:null,description:"Input size",name:"size",required:!1,type:{name:"MantineSize | undefined"}},src:{defaultValue:null,description:"",name:"src",required:!1,type:{name:"string | undefined"}},step:{defaultValue:null,description:"",name:"step",required:!1,type:{name:"string | number | undefined"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"HTMLInputTypeAttribute | undefined"}},value:{defaultValue:null,description:"Controlled input value",name:"value",required:!1,type:{name:"string[] | undefined"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string | number | undefined"}},defaultChecked:{defaultValue:null,description:"",name:"defaultChecked",required:!1,type:{name:"boolean | undefined"}},defaultValue:{defaultValue:null,description:"Uncontrolled input defaultValue",name:"defaultValue",required:!1,type:{name:"string[] | undefined"}},suppressContentEditableWarning:{defaultValue:null,description:"",name:"suppressContentEditableWarning",required:!1,type:{name:"boolean | undefined"}},suppressHydrationWarning:{defaultValue:null,description:"",name:"suppressHydrationWarning",required:!1,type:{name:"boolean | undefined"}},accessKey:{defaultValue:null,description:"",name:"accessKey",required:!1,type:{name:"string | undefined"}},autoFocus:{defaultValue:null,description:"",name:"autoFocus",required:!1,type:{name:"boolean | undefined"}},contentEditable:{defaultValue:null,description:"",name:"contentEditable",required:!1,type:{name:'"inherit" | Booleanish | undefined'}},contextMenu:{defaultValue:null,description:"",name:"contextMenu",required:!1,type:{name:"string | undefined"}},dir:{defaultValue:null,description:"",name:"dir",required:!1,type:{name:"string | undefined"}},draggable:{defaultValue:null,description:"",name:"draggable",required:!1,type:{name:"Booleanish | undefined"}},hidden:{defaultValue:null,description:"",name:"hidden",required:!1,type:{name:"boolean | undefined"}},lang:{defaultValue:null,description:"",name:"lang",required:!1,type:{name:"string | undefined"}},nonce:{defaultValue:null,description:"",name:"nonce",required:!1,type:{name:"string | undefined"}},slot:{defaultValue:null,description:"",name:"slot",required:!1,type:{name:"string | undefined"}},spellCheck:{defaultValue:null,description:"",name:"spellCheck",required:!1,type:{name:"Booleanish | undefined"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number | undefined"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string | undefined"}},translate:{defaultValue:null,description:"",name:"translate",required:!1,type:{name:'"yes" | "no" | undefined'}},radioGroup:{defaultValue:null,description:"",name:"radioGroup",required:!1,type:{name:"string | undefined"}},role:{defaultValue:null,description:"",name:"role",required:!1,type:{name:"AriaRole | undefined"}},about:{defaultValue:null,description:"",name:"about",required:!1,type:{name:"string | undefined"}},content:{defaultValue:null,description:"",name:"content",required:!1,type:{name:"string | undefined"}},datatype:{defaultValue:null,description:"",name:"datatype",required:!1,type:{name:"string | undefined"}},inlist:{defaultValue:null,description:"",name:"inlist",required:!1,type:{name:"any"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"string | undefined"}},property:{defaultValue:null,description:"",name:"property",required:!1,type:{name:"string | undefined"}},rel:{defaultValue:null,description:"",name:"rel",required:!1,type:{name:"string | undefined"}},resource:{defaultValue:null,description:"",name:"resource",required:!1,type:{name:"string | undefined"}},rev:{defaultValue:null,description:"",name:"rev",required:!1,type:{name:"string | undefined"}},typeof:{defaultValue:null,description:"",name:"typeof",required:!1,type:{name:"string | undefined"}},vocab:{defaultValue:null,description:"",name:"vocab",required:!1,type:{name:"string | undefined"}},autoCapitalize:{defaultValue:null,description:"",name:"autoCapitalize",required:!1,type:{name:"string | undefined"}},autoCorrect:{defaultValue:null,description:"",name:"autoCorrect",required:!1,type:{name:"string | undefined"}},autoSave:{defaultValue:null,description:"",name:"autoSave",required:!1,type:{name:"string | undefined"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string | undefined"}},itemProp:{defaultValue:null,description:"",name:"itemProp",required:!1,type:{name:"string | undefined"}},itemScope:{defaultValue:null,description:"",name:"itemScope",required:!1,type:{name:"boolean | undefined"}},itemType:{defaultValue:null,description:"",name:"itemType",required:!1,type:{name:"string | undefined"}},itemID:{defaultValue:null,description:"",name:"itemID",required:!1,type:{name:"string | undefined"}},itemRef:{defaultValue:null,description:"",name:"itemRef",required:!1,type:{name:"string | undefined"}},results:{defaultValue:null,description:"",name:"results",required:!1,type:{name:"number | undefined"}},security:{defaultValue:null,description:"",name:"security",required:!1,type:{name:"string | undefined"}},unselectable:{defaultValue:null,description:"",name:"unselectable",required:!1,type:{name:'"on" | "off" | undefined'}},inputMode:{defaultValue:null,description:`Hints at the type of data that might be entered by the user while editing the element or its contents
@see https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute`,name:"inputMode",required:!1,type:{name:'"search" | "text" | "email" | "tel" | "url" | "none" | "numeric" | "decimal" | undefined'}},is:{defaultValue:null,description:`Specify that a standard HTML element should behave like a defined custom built-in element
@see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is`,name:"is",required:!1,type:{name:"string | undefined"}},label:{defaultValue:null,description:"Input label, displayed before input",name:"label",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"Input description, displayed after label",name:"description",required:!1,type:{name:"ReactNode"}},error:{defaultValue:null,description:"Displays error message after input",name:"error",required:!1,type:{name:"ReactNode"}},radius:{defaultValue:null,description:"Key of theme.radius or any valid CSS value to set border-radius, theme.defaultRadius by default",name:"radius",required:!1,type:{name:"MantineNumberSize | undefined"}},icon:{defaultValue:null,description:"Adds icon on the left side of input",name:"icon",required:!1,type:{name:"ReactNode"}},rightSection:{defaultValue:null,description:"Right section of input, similar to icon but on the right",name:"rightSection",required:!1,type:{name:"ReactNode"}},data:{defaultValue:null,description:"Select data used to render items in dropdown",name:"data",required:!0,type:{name:"readonly (string | SelectItem)[]"}},filter:{defaultValue:null,description:"Function based on which items in dropdown are filtered",name:"filter",required:!1,type:{name:"((value: string, selected: boolean, item: SelectItem) => boolean) | undefined"}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"Key | null | undefined"}},variant:{defaultValue:null,description:"Defines input appearance, defaults to default in light color scheme and filled in dark",name:"variant",required:!1,type:{name:'Variants<"unstyled" | "default" | "filled"> | undefined'}},styles:{defaultValue:null,description:"",name:"styles",required:!1,type:{name:"Styles<MultiSelectStylesNames, Record<string, any>> | undefined"}},transitionProps:{defaultValue:null,description:"Props added to Transition component that used to animate dropdown presence, use to configure duration and animation type, { duration: 0, transition: 'fade' } by default",name:"transitionProps",required:!1,type:{name:'Partial<Omit<TransitionProps, "mounted">> | undefined'}},positionDependencies:{defaultValue:null,description:"useEffect dependencies to force update dropdown position",name:"positionDependencies",required:!1,type:{name:"any[] | undefined"}},withinPortal:{defaultValue:null,description:"Whether to render the dropdown in a Portal",name:"withinPortal",required:!1,type:{name:"boolean | undefined"}},portalProps:{defaultValue:null,description:"Props to pass down to the portal when withinPortal is true",name:"portalProps",required:!1,type:{name:'Omit<PortalProps, "children" | "withinPortal"> | undefined'}},zIndex:{defaultValue:null,description:"Dropdown z-index",name:"zIndex",required:!1,type:{name:"ZIndex | undefined"}},wrapperProps:{defaultValue:null,description:"Properties spread to root element",name:"wrapperProps",required:!1,type:{name:"Record<string, any> | undefined"}},withAsterisk:{defaultValue:null,description:"Determines whether required asterisk should be rendered, overrides required prop, does not add required attribute to the input",name:"withAsterisk",required:!1,type:{name:"boolean | undefined"}},labelProps:{defaultValue:null,description:"Props spread to label element",name:"labelProps",required:!1,type:{name:"Record<string, any> | undefined"}},descriptionProps:{defaultValue:null,description:"Props spread to description element",name:"descriptionProps",required:!1,type:{name:"Record<string, any> | undefined"}},errorProps:{defaultValue:null,description:"Props spread to error element",name:"errorProps",required:!1,type:{name:"Record<string, any> | undefined"}},inputContainer:{defaultValue:null,description:"Input container component, defaults to React.Fragment",name:"inputContainer",required:!1,type:{name:"((children: ReactNode) => ReactNode) | undefined"}},inputWrapperOrder:{defaultValue:null,description:"Controls order of the Input.Wrapper elements",name:"inputWrapperOrder",required:!1,type:{name:'("label" | "description" | "error" | "input")[] | undefined'}},shadow:{defaultValue:null,description:"Dropdown shadow from theme or any value to set box-shadow",name:"shadow",required:!1,type:{name:"MantineShadow | undefined"}},nothingFound:{defaultValue:null,description:"Nothing found label",name:"nothingFound",required:!1,type:{name:"ReactNode"}},maxDropdownHeight:{defaultValue:null,description:"Maximum dropdown height",name:"maxDropdownHeight",required:!1,type:{name:"string | number | undefined"}},searchable:{defaultValue:null,description:"Enable items searching",name:"searchable",required:!1,type:{name:"boolean | undefined"}},clearable:{defaultValue:null,description:"Allow to clear item",name:"clearable",required:!1,type:{name:"boolean | undefined"}},searchValue:{defaultValue:null,description:"Controlled search input value",name:"searchValue",required:!1,type:{name:"string | undefined"}},hoverOnSearchChange:{defaultValue:null,description:"Hovers the first result when search query changes",name:"hoverOnSearchChange",required:!1,type:{name:"boolean | undefined"}},creatable:{defaultValue:null,description:"Allow creatable option",name:"creatable",required:!1,type:{name:"boolean | undefined"}},getCreateLabel:{defaultValue:null,description:"Function to get create Label",name:"getCreateLabel",required:!1,type:{name:"((query: string) => ReactNode) | undefined"}},shouldCreate:{defaultValue:null,description:"Function to determine if create label should be displayed",name:"shouldCreate",required:!1,type:{name:"((query: string, data: SelectItem[]) => boolean) | undefined"}},dropdownComponent:{defaultValue:null,description:"Change dropdown component, can be used to add custom scrollbars",name:"dropdownComponent",required:!1,type:{name:"any"}},selectOnBlur:{defaultValue:null,description:"Select highlighted item on blur",name:"selectOnBlur",required:!1,type:{name:"boolean | undefined"}},clearButtonProps:{defaultValue:null,description:"Props added to clear button",name:"clearButtonProps",required:!1,type:{name:'Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> | undefined'}},iconWidth:{defaultValue:null,description:"Width of icon section",name:"iconWidth",required:!1,type:{name:"Width<string | number> | undefined"}},rightSectionWidth:{defaultValue:null,description:"Width of right section, is used to calculate input padding-right",name:"rightSectionWidth",required:!1,type:{name:"Width<string | number> | undefined"}},rightSectionProps:{defaultValue:null,description:"Props spread to rightSection div element",name:"rightSectionProps",required:!1,type:{name:"Record<string, any> | undefined"}},initiallyOpened:{defaultValue:null,description:"Initial dropdown opened state",name:"initiallyOpened",required:!1,type:{name:"boolean | undefined"}},itemComponent:{defaultValue:null,description:"Change item renderer",name:"itemComponent",required:!1,type:{name:"FC<any> | undefined"}},limit:{defaultValue:null,description:"Limit amount of items displayed at a time for searchable select",name:"limit",required:!1,type:{name:"number | undefined"}},dropdownPosition:{defaultValue:null,description:"Dropdown positioning behavior",name:"dropdownPosition",required:!1,type:{name:'"top" | "bottom" | "flip" | undefined'}},switchDirectionOnFlip:{defaultValue:null,description:"Whether to switch item order and keyboard navigation on dropdown position flip",name:"switchDirectionOnFlip",required:!1,type:{name:"boolean | undefined"}},valueComponent:{defaultValue:null,description:"Component used to render values",name:"valueComponent",required:!1,type:{name:"FC<any> | undefined"}},clearSearchOnChange:{defaultValue:null,description:"Clear search value when item is selected",name:"clearSearchOnChange",required:!1,type:{name:"boolean | undefined"}},disableSelectedItemFiltering:{defaultValue:null,description:"Disable removing selected items from the list",name:"disableSelectedItemFiltering",required:!1,type:{name:"boolean | undefined"}},clearSearchOnBlur:{defaultValue:null,description:"Clear search field value on blur",name:"clearSearchOnBlur",required:!1,type:{name:"boolean | undefined"}},maxSelectedValues:{defaultValue:null,description:"Limit amount of items selected",name:"maxSelectedValues",required:!1,type:{name:"number | undefined"}}}}}catch{}const ot={component:ie,tags:["autodocs"],decorators:[e=>le.jsx(Gn,{children:le.jsx(e,{})})],argTypes:{id:{control:"text"},"data-testid":{control:"text"}},parameters:{docs:{description:{component:`
### MultiSelect component

This description is written using markdown.  
Go ahead, poke around and see what you can do.
You have the power to change the world.
`}}}},Z={args:{data:[{value:"react",label:"React"},{value:"ng",label:"Angular"},{value:"svelte",label:"Svelte"},{value:"vue",label:"Vue"}]}};var Ee,Me,Ne;Z.parameters={...Z.parameters,docs:{...(Ee=Z.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  args: {
    data: [{
      value: 'react',
      label: 'React'
    }, {
      value: 'ng',
      label: 'Angular'
    }, {
      value: 'svelte',
      label: 'Svelte'
    }, {
      value: 'vue',
      label: 'Vue'
    }]
  }
}`,...(Ne=(Me=Z.parameters)==null?void 0:Me.docs)==null?void 0:Ne.source}}};const dt=["Basic"];export{Z as Basic,dt as __namedExportsOrder,ot as default};
//# sourceMappingURL=MultiSelect.stories-bc6c9126.js.map