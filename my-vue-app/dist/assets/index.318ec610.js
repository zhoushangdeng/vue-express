import{d as e,u as l,s as n,r as s,o as t,c as a,a as u,w as o,b as i,t as d,e as c}from"./index.e0a83e1d.js";var r=e({setup(){const e=l();return{clickRoute:l=>{e.push(l)},userName:n.state.userInfo.userName}}});const f={class:"nav"},p={class:"item1"},m=i("首页"),v=i("活动管理"),h=i("活动列表"),_=i("活动详情"),x={class:"item2"};r.render=function(e,l,n,c,r,C){const b=s("el-breadcrumb-item"),k=s("el-breadcrumb"),g=s("el-button");return t(),a("div",f,[u("div",p,[u(k,{"separator-class":"el-icon-arrow-right"},{default:o((()=>[u(b,{to:{path:"/Home"}},{default:o((()=>[m])),_:1}),u(b,null,{default:o((()=>[v])),_:1}),u(b,null,{default:o((()=>[h])),_:1}),u(b,null,{default:o((()=>[_])),_:1})])),_:1})]),u("div",x,[u(g,{type:"text"},{default:o((()=>[i(d(e.userName),1)])),_:1})])])};var C=e({setup(){const e=c(!1),n=l();return{isCollapse:e,handleOpen:(e,l)=>{},handleClose:(e,l)=>{},clickRoute:e=>{n.push(e)}}}});const b={class:"Menu"},k={class:"menu"},g=u("i",{class:"el-icon-user"},null,-1),M=u("span",null,"用户管理",-1),O=i("菜单管理"),R=i("首页"),w=i("选项3"),y=i("选项1"),H=u("i",{class:"el-icon-user"},null,-1),N=u("span",null,"界面管理",-1),j=i("选项1"),q=i("选项2"),I=i("选项3"),z=i("选项1"),A={class:"footer"};C.render=function(e,l,n,i,d,c){const r=s("el-menu-item"),f=s("el-menu-item-group"),p=s("el-submenu"),m=s("el-menu"),v=s("el-button");return t(),a("div",b,[u("div",k,[u(m,{uniqueOpened:!0,"default-active":"2",class:"el-menu-vertical-demo",onOpen:e.handleOpen,onClose:e.handleClose,"background-color":"#2e3035","text-color":"#fff","active-text-color":"#ffd04b",collapse:e.isCollapse,style:{height:"calc(100vh - 80px)"}},{default:o((()=>[u(p,{index:"1"},{title:o((()=>[g,M])),default:o((()=>[u(f,null,{default:o((()=>[u(r,{index:"1-1",onClick:l[1]||(l[1]=l=>e.clickRoute("Menus"))},{default:o((()=>[O])),_:1}),u(r,{index:"1-2",onClick:l[2]||(l[2]=l=>e.clickRoute("Home"))},{default:o((()=>[R])),_:1}),u(r,{index:"1-3"},{default:o((()=>[w])),_:1}),u(r,{index:"1-4"},{default:o((()=>[y])),_:1})])),_:1})])),_:1}),u(p,{index:"2"},{title:o((()=>[H,N])),default:o((()=>[u(f,null,{default:o((()=>[u(r,{index:"2-1"},{default:o((()=>[j])),_:1}),u(r,{index:"2-2"},{default:o((()=>[q])),_:1}),u(r,{index:"2-3"},{default:o((()=>[I])),_:1}),u(r,{index:"2-4"},{default:o((()=>[z])),_:1})])),_:1})])),_:1})])),_:1},8,["onOpen","onClose","collapse"])]),u("div",A,[u(v,{icon:e.isCollapse?"el-icon-s-unfold":"el-icon-s-fold",onClick:l[3]||(l[3]=l=>e.isCollapse=!e.isCollapse)},null,8,["icon"])])])};const B={},D={style:{width:"100%",height:"100%"}};B.render=function(e,l){const n=s("router-view");return t(),a("div",D,[u(n)])};var E=e({components:{Header:r,Menu:C,Main:B},setup(){const e=l();return{clickRoute:l=>{e.push(l)},handleOpen:(e,l)=>{console.log(e,l)},handleClose:(e,l)=>{console.log(e,l)}}}});const F={class:"layout"},G={class:"left"},J={class:"right"},K={class:"header"},L={class:"main"};E.render=function(e,l,n,o,i,d){const c=s("Menu"),r=s("Header"),f=s("Main");return t(),a("div",F,[u("div",G,[u(c)]),u("div",J,[u("div",K,[u(r)]),u("div",L,[u(f)])])])};export default E;