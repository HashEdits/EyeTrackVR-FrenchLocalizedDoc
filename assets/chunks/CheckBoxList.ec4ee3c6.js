import{o as l,c as t,g as s,F as a,r as _,t as o}from"../app.3869ad1c.js";const i={class:"checkboxes"},r={style:{"list-style":"none"}},h={key:0},k=s("input",{type:"checkbox",checked:""},null,-1),d={key:0},b=["href"],p={key:1},u={key:1},y=s("input",{type:"checkbox",unchecked:""},null,-1),f={key:0},x={key:1},g=["href"],L={__name:"CheckBoxList",props:["options"],setup(c){const n=c;return(B,v)=>(l(),t("div",i,[s("ul",r,[(l(!0),t(a,null,_(n.options.object,e=>(l(),t("li",null,[n.options.state?(l(),t("div",h,[k,e.link!==null||n.link!==""?(l(),t("label",d,[s("a",{href:e.link,target:"_blank"},o(e.label),9,b)])):(l(),t("label",p,o(e.label),1))])):(l(),t("div",u,[y,s("label",null,o(e.label),1),e.link===null||n.link===""?(l(),t("label",f,o(e.label),1)):(l(),t("label",x,[s("a",{href:e.link,target:"_blank"},o(e.label),9,g)]))]))]))),256))])]))}};export{L as _};
