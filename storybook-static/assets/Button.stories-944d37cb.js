import{r as z}from"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";var x={exports:{}},u={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S=z,E=Symbol.for("react.element"),O=Symbol.for("react.fragment"),h=Object.prototype.hasOwnProperty,j=S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,k={key:!0,ref:!0,__self:!0,__source:!0};function R(t,e,n){var r,a={},i=null,c=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(c=e.ref);for(r in e)h.call(e,r)&&!k.hasOwnProperty(r)&&(a[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)a[r]===void 0&&(a[r]=e[r]);return{$$typeof:E,type:t,key:i,ref:c,props:a,_owner:j.current}}u.Fragment=O;u.jsx=R;u.jsxs=R;x.exports=u;var w=x.exports;const d=({variant:t="blue",size:e="md",label:n="Button"})=>{const r=a=>{switch(a){case"sm":return"small";case"md":return"medium";case"lg":return"large";default:return"medium"}};return w.jsx("button",{style:{color:"white",border:"none",borderRadius:10,padding:10,background:t,fontSize:r(e)},children:n})};try{d.displayName="Button",d.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"blue"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"red"'},{value:'"green"'},{value:'"blue"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},label:{defaultValue:{value:"Button"},description:"",name:"label",required:!1,type:{name:"string"}}}}}catch{}const G={component:d,title:"Components/Button",tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["blue","red","green"]},size:{control:{type:"select"},options:["sm","md","lg"]}}},o={args:{variant:"blue",size:"sm",label:"Blue Button"}},s={args:{variant:"red",size:"md",label:"Red Button"}},l={args:{variant:"green",size:"lg",label:"Green Button"}};var m,p,v;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: 'blue',
    size: 'sm',
    label: 'Blue Button'
  }
}`,...(v=(p=o.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};var g,_,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: 'red',
    size: 'md',
    label: 'Red Button'
  }
}`,...(f=(_=s.parameters)==null?void 0:_.docs)==null?void 0:f.source}}};var b,y,B;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: 'green',
    size: 'lg',
    label: 'Green Button'
  }
}`,...(B=(y=l.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};const I=["Base","Red","Green"];export{o as Base,l as Green,s as Red,I as __namedExportsOrder,G as default};
//# sourceMappingURL=Button.stories-944d37cb.js.map
