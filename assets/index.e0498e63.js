var e=Object.assign;import{y as t,r,d as n,i as s,n as o}from"./index.05c7536a.js";import{M as a}from"./index.6c520161.js";let i=null,p=1;function c(c){i||(i=t({setup(){const e=r([]);return{messageList:e,appendOption:t=>{e.value.push(t)},removeOption:t=>{e.value=e.value.filter((e=>e.ref!==t.ref))}}},render(){let e;return n(o,{to:"body"},"function"==typeof(t=e=n("div",{class:"bar-message-wrapper"},[n(a,{options:this.messageList},null)]))||"[object Object]"===Object.prototype.toString.call(t)&&!s(t)?e:{default:()=>[e]});var t}}).mount(document.createElement("div")));const u=p++,f=e(e({},c),{ref:u});i.appendOption(f),setTimeout((()=>{i.removeOption(f)}),c.duration||2500)}function u(e,t){c({content:e,type:t})}var f={info:t=>{"string"==typeof t?u(t,"info"):c(e(e({},t),{type:"info"}))},success:t=>{"string"==typeof t?u(t,"success"):c(e(e({},t),{type:"success"}))},warn:t=>{"string"==typeof t?u(t,"warn"):c(e(e({},t),{type:"warn"}))},error:t=>{"string"==typeof t?u(t,"error"):c(e(e({},t),{type:"error"}))}};export{f as M};
