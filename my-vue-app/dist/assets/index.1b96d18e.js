import{d as e,e as a,j as l,b as n,r as t,o as d,c as r,w as o,a as s,i}from"./index.ab5f58c1.js";var u=e({props:{},setup:()=>{const e=a({user:"",region:""}),t=l(!1),d=l(1);n();return{tableData:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"},{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}],isSwitch:t,handleSizeChange:e=>{},handleCurrentChange:e=>{},pageIndex:d,formInline:e,select:()=>{}}}});const m=i(" 查询");u.render=function(e,a,l,n,i,u){const c=t("el-input"),p=t("el-form-item"),h=t("el-button"),f=t("el-form"),g=t("el-header"),C=t("el-table-column"),_=t("el-table"),w=t("el-main"),b=t("el-switch"),x=t("el-col"),z=t("el-pagination"),v=t("el-row"),S=t("el-footer"),I=t("el-container");return d(),r(I,{class:"home"},{default:o((()=>[s(g,null,{default:o((()=>[s(f,{inline:!0,model:e.formInline,class:"demo-form-inline",size:"mini"},{default:o((()=>[s(p,null,{default:o((()=>[s(c,{modelValue:e.formInline.user,"onUpdate:modelValue":a[1]||(a[1]=a=>e.formInline.user=a),modelModifiers:{trim:!0},maxlength:"30",placeholder:"请输入内容","show-word-limit":""},null,8,["modelValue"])])),_:1}),s(p,null,{default:o((()=>[s(h,{type:"primary",icon:"el-icon-search",onClick:e.select},{default:o((()=>[m])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model"])])),_:1}),s(w,null,{default:o((()=>[s(_,{data:e.tableData,stripe:"",style:{width:"100%"},height:"calc(100vh - 180px)"},{default:o((()=>[s(C,{prop:"date",label:"日期",width:"180"}),s(C,{prop:"name",label:"姓名",width:"180"}),s(C,{prop:"address",label:"地址"})])),_:1},8,["data"])])),_:1}),s(S,null,{default:o((()=>[s(v,null,{default:o((()=>[s(x,{span:3},{default:o((()=>[s(b,{style:{"margin-top":"10px"},modelValue:e.isSwitch,"onUpdate:modelValue":a[2]||(a[2]=a=>e.isSwitch=a),"active-color":"#13ce66","inactive-color":"#ff4949","active-text":"收起","inactive-text":"展开"},null,8,["modelValue"])])),_:1}),s(x,{span:20},{default:o((()=>[s(z,{onSizeChange:e.handleSizeChange,onCurrentChange:e.handleCurrentChange,"current-page":e.pageIndex,"page-sizes":[10,20,30,40,50],"page-size":10,layout:"total, sizes, prev, pager, next, jumper",total:100},null,8,["onSizeChange","onCurrentChange","current-page"])])),_:1})])),_:1})])),_:1})])),_:1})};export default u;
