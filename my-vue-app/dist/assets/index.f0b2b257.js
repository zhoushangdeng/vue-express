import{d as e,j as l,e as n,r as t,o as a,c as i,w as o,a as d,t as u,b as r}from"./index.df455bb8.js";var p=e({setup(){const e=l([]);let t=n(-1);const a=n("");return{addMenus:(l=0)=>{e.unshift({title:"",MenusID:"",ParentID:0,MenusName:"123",Conponent:"",path:"",icon:""}),t.value=0},tableData:e,currentEdit:t,giveUp:(l,n)=>{0!==l.ParentID||l.MenusID||(e.splice(n,1),t.value=-1)},complete:(e,l)=>{t.value=-1},edit:(e,l)=>{t.value=l},deleteMenus:(l,n)=>{e.splice(n,1)},input:a}}});const c={key:1},s={key:1},m={key:1},f={key:1},h={key:1},V={key:0},k={key:1},y=r("完成"),C=r("放弃"),b=r("新增");p.render=function(e,l,n,r,p,_){const x=t("el-input"),M=t("el-table-column"),U=t("el-button"),w=t("el-popconfirm"),z=t("el-table"),v=t("el-main"),D=t("el-form-item"),E=t("el-form"),I=t("el-footer"),g=t("el-container");return a(),i(g,null,{default:o((()=>[d(v,null,{default:o((()=>[d(z,{data:e.tableData,style:{width:"99.5%"},"row-key":"id",border:"",stripe:"","default-expand-all":"","tree-props":{children:"children",hasChildren:"hasChildren"},size:"mini",height:"calc(100vh - 100px)"},{default:o((()=>[d(M,{prop:"title",label:"菜单标题"},{default:o((({row:l,$index:n})=>[e.currentEdit===n?(a(),i(x,{key:0,modelValue:l.title,"onUpdate:modelValue":e=>l.title=e,placeholder:"请输入",size:"mini"},null,8,["modelValue","onUpdate:modelValue"])):(a(),i("span",c,u(l.title),1))])),_:1}),d(M,{prop:"MenusID",label:"菜单ID",width:"100",align:"center"}),d(M,{prop:"ParentID",label:"父级ID",align:"center",width:"100"}),d(M,{prop:"MenusName",label:"MenusName"},{default:o((({row:l,$index:n})=>[e.currentEdit===n?(a(),i(x,{key:0,modelValue:l.MenusName,"onUpdate:modelValue":e=>l.MenusName=e,placeholder:"请输入",size:"mini"},null,8,["modelValue","onUpdate:modelValue"])):(a(),i("span",s,u(l.MenusName),1))])),_:1}),d(M,{prop:"Conponent",label:"菜单路径"},{default:o((({row:l,$index:n})=>[e.currentEdit===n?(a(),i(x,{key:0,modelValue:l.Conponent,"onUpdate:modelValue":e=>l.Conponent=e,placeholder:"请输入",size:"mini"},null,8,["modelValue","onUpdate:modelValue"])):(a(),i("span",m,u(l.Conponent),1))])),_:1}),d(M,{prop:"path",label:"菜单Path"},{default:o((({row:l,$index:n})=>[e.currentEdit===n?(a(),i(x,{key:0,modelValue:l.path,"onUpdate:modelValue":e=>l.path=e,placeholder:"请输入",size:"mini"},null,8,["modelValue","onUpdate:modelValue"])):(a(),i("span",f,u(l.path),1))])),_:1}),d(M,{prop:"icon",label:"icon"},{default:o((({row:l,$index:n})=>[e.currentEdit===n?(a(),i(x,{key:0,modelValue:l.icon,"onUpdate:modelValue":e=>l.icon=e,placeholder:"请输入",size:"mini"},null,8,["modelValue","onUpdate:modelValue"])):(a(),i("span",h,u(l.icon),1))])),_:1}),d(M,{label:"操作",align:"center",width:"180"},{default:o((({row:l,$index:n})=>[-1===e.currentEdit||e.currentEdit!==n?(a(),i("div",V,[d(U,{icon:"el-icon-plus",size:"mini",type:"success"}),d(U,{type:"info",icon:"el-icon-edit",size:"mini",onClick:l=>e.edit(n)},null,8,["onClick"]),d(w,{confirmButtonText:"确定",cancelButtonText:"取消",icon:"el-icon-info",iconColor:"red",title:"确定删除吗？",onConfirm:t=>e.deleteMenus(l,n)},{reference:o((()=>[d(U,{type:"danger",icon:"el-icon-delete",size:"mini"})])),_:2},1032,["onConfirm"])])):(a(),i("div",k,[d(U,{type:"text",onClick:t=>e.complete(l,n)},{default:o((()=>[y])),_:2},1032,["onClick"]),d(U,{type:"text",onClick:t=>e.giveUp(l,n)},{default:o((()=>[C])),_:2},1032,["onClick"])]))])),_:1})])),_:1},8,["data"])])),_:1}),d(I,null,{default:o((()=>[d(E,{inline:!0,class:"demo-form-inline"},{default:o((()=>[d(D,null,{default:o((()=>[d(x,{size:"mini",modelValue:e.input,"onUpdate:modelValue":l[1]||(l[1]=l=>e.input=l),placeholder:"请输入内容"},null,8,["modelValue"])])),_:1}),d(D,null,{default:o((()=>[d(U,{type:"primary",icon:"el-icon-plus",size:"mini",onClick:e.addMenus,plain:""},{default:o((()=>[b])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})])),_:1})};export default p;