import{r}from"./index-61bf1805.js";function d(e,t){try{return e.addEventListener("change",t),()=>e.removeEventListener("change",t)}catch{return e.addListener(t),()=>e.removeListener(t)}}function s(e,t){return typeof t=="boolean"?t:typeof window<"u"&&"matchMedia"in window?window.matchMedia(e).matches:!1}function a(e,t,{getInitialValueInEffect:i}={getInitialValueInEffect:!0}){const[u,o]=r.useState(i?t:s(e,t)),n=r.useRef();return r.useEffect(()=>{if("matchMedia"in window)return n.current=window.matchMedia(e),o(n.current.matches),d(n.current,c=>o(c.matches))},[e]),u}function h(e,t){return a("(prefers-reduced-motion: reduce)",e,t)}export{h as u};
//# sourceMappingURL=use-reduced-motion-72536671.js.map