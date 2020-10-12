(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{105:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(9),i=t.n(c),o=(t(83),t(13)),l=t(141),s=t(145),m=t(146),u=t(147);function d(e){return r.a.createElement("div",null,r.a.createElement(l.a,{color:"default"},r.a.createElement(s.a,{variant:"dense"},r.a.createElement(m.a,{variant:"h6",style:{flex:1},color:"primary"},"Employees CRUD"),r.a.createElement(u.a,{onClick:function(){return e.setView("list")}},"List Employees"),r.a.createElement(u.a,{onClick:function(){return e.setView("add")}},"Add Employee"))))}var g=t(148),f=Object(g.a)((function(e){return{root:{backgroundColor:"#212121",display:"flex",flexDirection:"row",alignItems:"center",color:e.palette.text.primary,paddingLeft:e.spacing(),paddingRight:e.spacing()}}}));function p(){var e=f();return r.a.createElement("footer",{className:e.root},r.a.createElement(m.a,null,"Chris Brighton"))}var b=t(69),E=t(4),h=t(149),v=t(150),y=t(106),O=t(151),j=t(152),N=t(153),w=t(154),k=t(67),C=t.n(k),x=t(107),S=t(155),A=t(160),I=t(47),V=t.n(I),D="http://localhost:8080/api/v"+1..toString()+"/"+"employee",P={list:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return V.a.get("".concat(D,"/paged-list"),{params:{page:Number(e),size:Number(a)}})},count:function(){return V.a.get("".concat(D,"/count"))},add:function(e,a,t){},delete:function(e){},get:function(e){},update:function(e,a,t,n){}},z=Object(b.a)({palette:{primary:C.a,type:"dark"},shape:{borderRadius:0}}),R=Object(x.a)((function(e){return{container:{maxHeight:300,minHeight:300,height:300},pagination:{backgroundColor:"#212121"},button:{margin:e.spacing()}}})),T=Object(E.a)((function(e){return{head:{backgroundColor:"#212121"}}}))(h.a),B=Object(E.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(v.a);function J(e){var a=Object(n.useState)([]),t=Object(o.a)(a,2),c=t[0],i=t[1],l=Object(n.useState)(0),s=Object(o.a)(l,2),m=s[0],d=s[1],g=Object(n.useState)(5),f=Object(o.a)(g,2),p=f[0],b=f[1],E=Object(n.useState)(-1),k=Object(o.a)(E,2),C=k[0],x=k[1],I=R(),V=function(e,a){P.list(e,a).then((function(e){i(e.data)}))};return Object(n.useEffect)((function(){-1===C&&(P.count().then((function(e){x(e.data)})),V(m,p))}),[]),r.a.createElement(y.a,null,r.a.createElement(u.a,{variant:"contained",color:"primary",className:I.button,onClick:function(){return e.setView("add")}},"Add Employee"),r.a.createElement(O.a,{component:"div",className:I.container},r.a.createElement(j.a,{size:"small",stickyHeader:!0},r.a.createElement(N.a,{className:I.header},r.a.createElement(v.a,null,r.a.createElement(T,{component:"th",align:"center"},"Id"),r.a.createElement(T,{component:"th",align:"center"},"First Name"),r.a.createElement(T,{component:"th",align:"center"},"Last Name"),r.a.createElement(T,{component:"th",align:"right"},"Actions"))),r.a.createElement(w.a,null,c.map((function(e,a){return r.a.createElement(B,{key:a},r.a.createElement(h.a,{align:"center",component:"th",scope:"row"},e.id),r.a.createElement(h.a,{align:"center"},e.firstName),r.a.createElement(h.a,{align:"center"},e.lastName),r.a.createElement(h.a,{align:"right"},r.a.createElement(u.a,{variant:"contained",size:"small",style:{marginRight:"20px"},color:"secondary"},"Edit"),r.a.createElement(S.a,{theme:z},r.a.createElement(u.a,{color:"primary",size:"small",variant:"contained",style:{textTransform:"capitalize"}},"Delete"))))}))))),r.a.createElement(A.a,{rowsPerPageOptions:[5,10,25],component:"div",rowsPerPage:p,page:m,count:C,onChangePage:function(e,a){d(a),V(a,p)},onChangeRowsPerPage:function(e){b(parseInt(e.target.value)),d(0),console.log("size",parseInt(e.target.value)),V(0,parseInt(e.target.value))},className:I.pagination}))}var L=t(161),H=Object(g.a)((function(e){return{root:{display:"flex",flexDirection:"column",alignItems:"center",width:450,margin:"auto",padding:e.spacing()},form:{display:"flex",flexDirection:"column",alignItems:"center",padding:e.spacing(),width:"-webkit-fill-available"},space:{marginBottom:e.spacing()}}}));function W(e){var a=H(),t={className:a.space,fullWidth:!0,required:!0},c=Object(n.useState)(""),i=Object(o.a)(c,2),l=i[0],s=i[1],d=Object(n.useState)(""),g=Object(o.a)(d,2),f=g[0],p=g[1],b=Object(n.useState)(""),E=Object(o.a)(b,2),h=E[0],v=E[1];return r.a.createElement(y.a,{className:a.root},r.a.createElement(m.a,{variant:"h4",className:a.space},"Add Employee"),r.a.createElement("form",{noValidate:!0,autoComplete:"off",className:a.form},r.a.createElement(L.a,Object.assign({},t,{value:l,onChange:function(e){s(e.target.value)},id:"firstName",label:"First Name"})),r.a.createElement(L.a,Object.assign({},t,{value:f,onChange:function(e){p(e.target.value)},id:"lastName",label:"Last Name"})),r.a.createElement(L.a,Object.assign({},t,{value:h,onChange:function(e){v(e.target.value)},id:"emailId",label:"Email Address"})),r.a.createElement("div",null,r.a.createElement(u.a,{variant:"contained",color:"primary",className:a.space,onClick:function(e){e.preventDefault();var a=JSON.stringify({firstName:l,lastName:f,emailId:h});console.log(a)}},"Add"),r.a.createElement(u.a,{variant:"contained",color:"primary",className:a.space,onClick:function(a){a.preventDefault(),s(""),p(""),v(""),e.setView("list")}},"Cancel"))))}var F=t(158),q=Object(g.a)((function(e){return{container:{padding:e.spacing(4)}}}));var M=function(){var e=q(),a=Object(n.useState)("list"),t=Object(o.a)(a,2),c=t[0],i=t[1],l=Object(n.useState)(!0),s=Object(o.a)(l,2),m=s[0],u=s[1],g=function(e){u(!1),setTimeout((function(){i(e),u(!0)}),500)};return r.a.createElement("div",{className:"App"},r.a.createElement(d,{setView:g}),r.a.createElement("div",{className:e.container},r.a.createElement(F.a,{in:m,timeout:500},r.a.createElement("div",null,"list"===c?r.a.createElement(J,{setView:g}):null,"add"===c?r.a.createElement(W,{setView:g}):null))),r.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(104);var U=t(68),$=Object(b.a)(U);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S.a,{theme:$},r.a.createElement(M,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},68:function(e){e.exports=JSON.parse('{"palette":{"common":{"black":"#000","white":"#fff"},"type":"dark","primary":{"light":"rgba(255, 95, 26, 1)","main":"rgba(255, 69, 0, 1)","dark":"rgba(230, 44, 0, 1)","contrastText":"#000"},"secondary":{"light":"rgba(26, 212, 255, 1)","main":"rgba(0, 186, 255, 1)","dark":"rgba(0, 161, 230, 1)","contrastText":"#000"},"error":{"light":"#e57373","main":"#f44336","dark":"#d32f2f","contrastText":"#fff"},"grey":{"50":"#fafafa","100":"#f5f5f5","200":"#eeeeee","300":"#e0e0e0","400":"#bdbdbd","500":"#9e9e9e","600":"#757575","700":"#616161","800":"#424242","900":"#212121","A100":"#d5d5d5","A200":"#aaaaaa","A400":"#303030","A700":"#616161"},"text":{"primary":"#fff","secondary":"rgba(255, 255, 255, 0.7)","disabled":"rgba(255, 255, 255, 0.5)","hint":"rgba(255, 255, 255, 0.5)","icon":"rgba(255, 255, 255, 0.5)"},"divider":"rgba(255, 255, 255, 0.12)","background":{"paper":"#424242","default":"#303030"}},"shape":{"borderRadius":0}}')},78:function(e,a,t){e.exports=t(105)},83:function(e,a,t){}},[[78,1,2]]]);
//# sourceMappingURL=main.b3fb9e07.chunk.js.map