import{d as e,u as l,s as n,r as s,o as a,c as t,a as o,w as u,b as c,t as i,e as r,f as d,g as f,F as p,h as m}from"./index.fd74a06e.js";var h=e({setup(){const e=l();return{clickRoute:l=>{e.push(l)},userName:n.state.userInfo.userName}}});const v={class:"nav"},_={class:"item1"},C=c("首页"),k=c("活动管理"),x=c("活动列表"),g=c("活动详情"),b={class:"item2"};h.render=function(e,l,n,r,d,f){const p=s("el-breadcrumb-item"),m=s("el-breadcrumb"),h=s("el-button");return a(),t("div",v,[o("div",_,[o(m,{"separator-class":"el-icon-arrow-right"},{default:u((()=>[o(p,{to:{path:"/Home"}},{default:u((()=>[C])),_:1}),o(p,null,{default:u((()=>[k])),_:1}),o(p,null,{default:u((()=>[x])),_:1}),o(p,null,{default:u((()=>[g])),_:1})])),_:1})]),o("div",b,[o(h,{type:"text"},{default:u((()=>[c(i(e.userName),1)])),_:1})])])};var y=e({setup(){const e=r(!1),n=l(),s=d(),a=s.state.userInfo.menusTree;return f((()=>{console.log("menusTree",s.state.userInfo)})),{isCollapse:e,handleOpen:()=>{},handleClose:(e,l)=>{console.log(e,l)},clickRoute:e=>{console.log("val",e),n.push(e)},menusTree:a}}});const M={class:"Menu"},O={class:"menu"},R=o("i",{class:"el-icon-user"},null,-1),w=o("i",{class:"el-icon-user"},null,-1),H=o("span",null,"用户管理",-1),T=c("菜单管理"),I=c("首页"),N=c("选项3"),j=c("选项1"),q={class:"footer"};y.render=function(e,l,n,r,d,f){const h=s("el-menu-item"),v=s("el-menu-item-group"),_=s("el-submenu"),C=s("el-menu"),k=s("el-button");return a(),t("div",M,[o("div",O,[o(C,{uniqueOpened:!0,"default-active":"2",class:"el-menu-vertical-demo",onOpen:e.handleOpen,onClose:e.handleClose,"background-color":"#2e3035","text-color":"#fff","active-text-color":"#ffd04b",collapse:e.isCollapse,"collapse-transition":!0,style:{height:"calc(100vh - 40px)"}},{default:u((()=>[(a(!0),t(p,null,m(e.menusTree,((l,n)=>(a(),t(_,{index:"1",key:n},{title:u((()=>[R,o("span",null,i(l.name),1)])),default:u((()=>[o(v,null,{default:u((()=>[(a(!0),t(p,null,m(l.children,((l,s)=>(a(),t(h,{index:n+"-"+s,onClick:n=>e.clickRoute(l.path),key:s},{default:u((()=>[c(i(l.name),1)])),_:2},1032,["index","onClick"])))),128))])),_:2},1024)])),_:2},1024)))),128)),o(_,{index:"2"},{title:u((()=>[w,H])),default:u((()=>[o(v,null,{default:u((()=>[o(h,{index:"2-1",onClick:l[1]||(l[1]=l=>e.clickRoute("/Menus"))},{default:u((()=>[T])),_:1}),o(h,{index:"2-2",onClick:l[2]||(l[2]=l=>e.clickRoute("/Home"))},{default:u((()=>[I])),_:1}),o(h,{index:"2-3"},{default:u((()=>[N])),_:1}),o(h,{index:"2-4"},{default:u((()=>[j])),_:1})])),_:1})])),_:1})])),_:1},8,["onOpen","onClose","collapse"])]),o("div",q,[o(k,{icon:e.isCollapse?"el-icon-s-unfold":"el-icon-s-fold",onClick:l[3]||(l[3]=l=>e.isCollapse=!e.isCollapse)},null,8,["icon"])])])};const F={},z={style:{width:"100%",height:"100%"}};F.render=function(e,l){const n=s("router-view");return a(),t("div",z,[o(n)])};var A=e({components:{Header:h,Menu:y,Main:F},setup(){const e=l();return{clickRoute:l=>{e.push(l)},handleOpen:(e,l)=>{console.log(e,l)},handleClose:(e,l)=>{console.log(e,l)}}}});const B={class:"layout"},D={class:"left"},E={class:"right"},G={class:"header"},J={class:"main"};A.render=function(e,l,n,u,c,i){const r=s("Menu"),d=s("Header"),f=s("Main");return a(),t("div",B,[o("div",D,[o(r)]),o("div",E,[o("div",G,[o(d)]),o("div",J,[o(f)])])])};export default A;