import{j as e,T as x}from"./ThemeProvider-26608dcc.js";import{r as o}from"./index-61bf1805.js";import{C as s}from"./Checkbox-9872c7f7.js";import{S as p}from"./Stack-65fd6ec9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-cbc55568.js";import"./_commonjsHelpers-de833af9.js";import"./utils-29fdbd63.js";import"./inputElementEvents-019f5063.js";import"./Input-d73ae213.js";import"./create-styles-5419e27d.js";import"./Text-a3983a60.js";import"./pack-sx-3cdbfbd6.js";import"./Input.styles-4e18fb2b.js";import"./use-uncontrolled-99e60b6a.js";import"./get-styles-ref-1f22bf7e.js";import"./InlineInput-8d48a502.js";import"./use-id-ffac3e23.js";const k=()=>{const[t,a]=o.useState([]),[l,i]=o.useState(!1),[u,n]=o.useState(!1);return o.useEffect(()=>{t.length===3?i(!0):i(!1)},[t]),o.useEffect(()=>{t.length>0?n(!0):n(!1)},[t]),e.jsxs(p,{children:[e.jsx(s,{label:"Select All",value:"all",checked:l,indeterminate:u&&!l,onChange:c=>{a(c?["steak","chicken","fish"]:[])}}),e.jsx(s.Group,{value:t,onChange:c=>{a(c)},children:e.jsxs(p,{spacing:"md",pl:"md",children:[e.jsx(s,{label:"Steak",value:"steak"}),e.jsx(s,{label:"Chicken",value:"chicken"}),e.jsx(s,{label:"Fish",value:"fish"})]})})]})},O={component:k,tags:["autodocs"],decorators:[t=>e.jsx(x,{children:e.jsx(t,{})})],argTypes:{id:{control:"text"},"data-testid":{control:"text"}},parameters:{docs:{description:{component:`
### Checkbox.Group component

Provides a wrapper around multiple Checkbox components.

Use to write controlled checkbox groups (think \`Select All\` or nested checkbox sections).
`}}}},r={args:{}};var m,d,h;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {}
}`,...(h=(d=r.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};const R=["Basic"];export{r as Basic,R as __namedExportsOrder,O as default};
//# sourceMappingURL=CheckboxGroup.stories-d2dc3532.js.map
