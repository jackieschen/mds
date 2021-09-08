import{r as t,h as s,H as i}from"./p-a7add0c7.js";import{r as e}from"./p-80b3e177.js";import{c as n}from"./p-2704e8d1.js";const r=class{constructor(s){t(this,s),this.btnType="contained",this.type="button",this.disabled=!1,this.xl=!1,this.full=!1,this.dropdown=!1}onClick(t){if(this.disabled)return t.stopPropagation(),void t.preventDefault();e(t,this.href?this.anchorElem:this.btnElem)}get buttonClass(){let t=this.btnType;return this.dropdown&&(t+=" dropdown"),t+=" flex items-center justify-center relative overflow-hidden cursor-pointer hover:no-underline",["contained","outlined"].includes(this.btnType)&&(t+=" w-full rounded-lg font-semibold uppercase","outlined"===this.btnType&&(t+=" border"),t+=this.xl?" h-48 px-32 text-3 tracking-1-5":" h-36 px-16 text-4 tracking tracking-1-25"),"action"===this.btnType&&(t+=" w-full h-36 px-16 border rounded-3xl text-4"),"text"===this.btnType&&(t+=" w-full h-36 px-8 py-10 text-4 rounded-lg",t+=this.dropdown?" font-normal":" font-semibold uppercase tracking-1-25"),t}render(){const t=s("div",{class:"flex justify-center items-center content-center relative"},this.icon&&s("i",{class:"mr-8 text-3 "+this.icon}),s("span",{class:"slot-content"},s("slot",null)),this.dropdown&&"text"===this.btnType&&s("span",{class:"separator inline-block w-1 ml-4 -my-4 h-24"}),this.dropdown&&s("span",{"data-testid":"chevron",class:"text"===this.btnType?"chevron-icon ml-4":"ml-8",innerHTML:n}));return s(i,{class:"mx-button"+(this.full?" flex":" inline-flex")},this.href?s("a",{href:this.href,target:this.target,class:this.buttonClass,ref:t=>this.anchorElem=t,onClick:this.onClick.bind(this)},t):s("button",{type:this.type,value:this.value,class:this.buttonClass,ref:t=>this.btnElem=t,onClick:this.onClick.bind(this),"aria-disabled":this.disabled},t))}};export{r as mx_button}