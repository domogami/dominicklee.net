import"/build/_shared/chunk-LYCP5ARG.js";import{g as r,i as n,j as i}from"/build/_shared/chunk-6KK63FYC.js";import{h as t,i as l}from"/build/_shared/chunk-2ADOHOB6.js";l();l();function m(){let e=n(),u=i(),o="",a=s=>{o=s.target.value.replace(/\s/g,"-"),document.getElementById("slugInput").value=o.toLowerCase()};return t.createElement(r,{method:"post"},t.createElement("p",null,t.createElement("label",{htmlFor:""},"Post Title: ",(e==null?void 0:e.title)&&t.createElement("em",null,"Title is required")," ",t.createElement("input",{onChange:a,type:"text",name:"title"}))),t.createElement("p",null,t.createElement("label",{htmlFor:""}," ","Post Slug: ",(e==null?void 0:e.slug)&&t.createElement("em",null,"Slug is required"),t.createElement("input",{placeholder:o,id:"slugInput",type:"text",name:"slug"}))),t.createElement("p",null,t.createElement("label",{htmlFor:"markdown"},"Markdown:")," ",(e==null?void 0:e.markdown)&&t.createElement("em",null,"Markdown is required"),t.createElement("br",null),t.createElement("textarea",{name:"markdown",id:"",rows:20,cols:30})),t.createElement("p",null,t.createElement("button",{type:"submit"},u.submission?"Creating...":"Create Post")))}export{m as default};