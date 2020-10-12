(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{106:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(9),o=t.n(c),l=(t(84),t(13)),i=t(143),s=t(147),m=t(148),u=t(149);function d(e){return r.a.createElement("div",null,r.a.createElement(i.a,{color:"default"},r.a.createElement(s.a,{variant:"dense"},r.a.createElement(m.a,{variant:"h6",style:{flex:1},color:"primary"},"Employees CRUD"),r.a.createElement(u.a,{onClick:function(){return e.setView("list")}},"List Employees"),r.a.createElement(u.a,{onClick:function(){return e.setView("add")}},"Add Employee"))))}var f=t(150),g=Object(f.a)((function(e){return{root:{backgroundColor:"#212121",display:"flex",flexDirection:"row",alignItems:"center",color:e.palette.text.primary,paddingLeft:e.spacing(),paddingRight:e.spacing()}}}));function p(){var e=g();return r.a.createElement("footer",{className:e.root},r.a.createElement(m.a,null,"Chris Brighton"))}var b=t(4),E=t(152),h=t(153),v=t(107),y=t(154),O=t(155),j=t(156),N=t(157),k=t(108),w=t(162),C=t(49),x=t.n(C),S="http://localhost:8080/api/v"+1..toString()+"/"+"employee",A={list:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return x.a.get("".concat(S,"/paged-list"),{params:{page:Number(e),size:Number(a)}})},count:function(){return x.a.get("".concat(S,"/count"))},add:function(e,a,t){},delete:function(e){},get:function(e){},update:function(e,a,t,n){}},I=t(151),P=t(70),V=t(68),z=t.n(V),D=Object(P.a)({palette:{primary:z.a,type:"dark"},shape:{borderRadius:0}});function R(e){return r.a.createElement(I.a,{theme:D},r.a.createElement(u.a,{color:"primary",size:"small",variant:"contained",style:{textTransform:"capitalize",color:"#000"},onClick:e.onClick,className:e.className?e.className:""},e.children))}var T=Object(k.a)((function(e){return{container:{maxHeight:300,minHeight:300,height:300},pagination:{backgroundColor:"#212121"},button:{margin:e.spacing()}}})),W=Object(b.a)((function(e){return{head:{backgroundColor:"#212121"}}}))(E.a),B=Object(b.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(h.a);function J(e){var a=Object(n.useState)([]),t=Object(l.a)(a,2),c=t[0],o=t[1],i=Object(n.useState)(0),s=Object(l.a)(i,2),m=s[0],d=s[1],f=Object(n.useState)(5),g=Object(l.a)(f,2),p=g[0],b=g[1],k=Object(n.useState)(-1),C=Object(l.a)(k,2),x=C[0],S=C[1],I=T(),P=function(e,a){A.list(e,a).then((function(e){o(e.data)}))};return Object(n.useEffect)((function(){-1===x&&(A.count().then((function(e){S(e.data)})),P(m,p))}),[]),r.a.createElement(v.a,null,r.a.createElement(u.a,{variant:"contained",color:"primary",className:I.button,onClick:function(){return e.setView("add")}},"Add Employee"),r.a.createElement(y.a,{component:"div",className:I.container},r.a.createElement(O.a,{size:"small",stickyHeader:!0},r.a.createElement(j.a,{className:I.header},r.a.createElement(h.a,null,r.a.createElement(W,{component:"th",align:"center"},"Id"),r.a.createElement(W,{component:"th",align:"center"},"First Name"),r.a.createElement(W,{component:"th",align:"center"},"Last Name"),r.a.createElement(W,{component:"th",align:"right"},"Actions"))),r.a.createElement(N.a,null,c.map((function(e,a){return r.a.createElement(B,{key:a},r.a.createElement(E.a,{align:"center",component:"th",scope:"row"},e.id),r.a.createElement(E.a,{align:"center"},e.firstName),r.a.createElement(E.a,{align:"center"},e.lastName),r.a.createElement(E.a,{align:"right"},r.a.createElement(u.a,{variant:"contained",size:"small",style:{marginRight:"20px"},color:"secondary"},"Edit"),r.a.createElement(R,{onClick:function(a){console.log("del:"+e.id)}},"Delete")))}))))),r.a.createElement(w.a,{rowsPerPageOptions:[5,10,25],component:"div",rowsPerPage:p,page:m,count:x,onChangePage:function(e,a){d(a),P(a,p)},onChangeRowsPerPage:function(e){b(parseInt(e.target.value)),d(0),console.log("size",parseInt(e.target.value)),P(0,parseInt(e.target.value))},className:I.pagination}))}var L=t(163);function H(e){var a=Object(P.a)({palette:{primary:e.color,type:"dark"},shape:{borderRadius:0}});return r.a.createElement(I.a,{theme:a},r.a.createElement(u.a,e.buttonProps,e.children))}var F=t(46),q=Object(f.a)((function(e){return{root:{display:"flex",flexDirection:"column",alignItems:"center",width:450,margin:"auto",padding:e.spacing()},form:{display:"flex",flexDirection:"column",alignItems:"center",padding:e.spacing(),width:"-webkit-fill-available"},space:{marginBottom:e.spacing()},buttonWrap:{width:"-webkit-fill-available",display:"flex",justifyContent:"space-evenly"}}}));function M(e){var a=q(),t={className:a.space,fullWidth:!0,required:!0},c=Object(n.useState)(""),o=Object(l.a)(c,2),i=o[0],s=o[1],u=Object(n.useState)(""),d=Object(l.a)(u,2),f=d[0],g=d[1],p=Object(n.useState)(""),b=Object(l.a)(p,2),E=b[0],h=b[1];return r.a.createElement(v.a,{className:a.root},r.a.createElement(m.a,{variant:"h4",className:a.space},"Add Employee"),r.a.createElement("form",{noValidate:!0,autoComplete:"off",className:a.form},r.a.createElement(L.a,Object.assign({},t,{value:i,onChange:function(e){s(e.target.value)},id:"firstName",label:"First Name"})),r.a.createElement(L.a,Object.assign({},t,{value:f,onChange:function(e){g(e.target.value)},id:"lastName",label:"Last Name"})),r.a.createElement(L.a,Object.assign({},t,{value:E,onChange:function(e){h(e.target.value)},id:"emailId",label:"Email Address"})),r.a.createElement("div",{className:a.buttonWrap},r.a.createElement(H,{color:F.a,buttonProps:{variant:"contained",color:"primary",className:a.space,onClick:function(e){e.preventDefault();var a=JSON.stringify({firstName:i,lastName:f,emailId:E});console.log(a)},size:"small"}},"Add"),r.a.createElement(R,{className:a.space,onClick:function(a){a.preventDefault(),s(""),g(""),h(""),e.setView("list")}},"Cancel"))))}var U=t(160),$=Object(f.a)((function(e){return{container:{padding:e.spacing(4)}}}));var G=function(){var e=$(),a=Object(n.useState)("list"),t=Object(l.a)(a,2),c=t[0],o=t[1],i=Object(n.useState)(!0),s=Object(l.a)(i,2),m=s[0],u=s[1],f=function(e){u(!1),setTimeout((function(){o(e),u(!0)}),500)};return r.a.createElement("div",{className:"App"},r.a.createElement(d,{setView:f}),r.a.createElement("div",{className:e.container},r.a.createElement(U.a,{in:m,timeout:500},r.a.createElement("div",null,"list"===c?r.a.createElement(J,{setView:f}):null,"add"===c?r.a.createElement(M,{setView:f}):null))),r.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(105);var K=t(69),Q=Object(P.a)(K);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I.a,{theme:Q},r.a.createElement(G,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},69:function(e){e.exports=JSON.parse('{"palette":{"common":{"black":"#000","white":"#fff"},"type":"dark","primary":{"light":"rgba(255, 95, 26, 1)","main":"rgba(255, 69, 0, 1)","dark":"rgba(230, 44, 0, 1)","contrastText":"#000"},"secondary":{"light":"rgba(26, 212, 255, 1)","main":"rgba(0, 186, 255, 1)","dark":"rgba(0, 161, 230, 1)","contrastText":"#000"},"error":{"light":"#e57373","main":"#f44336","dark":"#d32f2f","contrastText":"#fff"},"grey":{"50":"#fafafa","100":"#f5f5f5","200":"#eeeeee","300":"#e0e0e0","400":"#bdbdbd","500":"#9e9e9e","600":"#757575","700":"#616161","800":"#424242","900":"#212121","A100":"#d5d5d5","A200":"#aaaaaa","A400":"#303030","A700":"#616161"},"text":{"primary":"#fff","secondary":"rgba(255, 255, 255, 0.7)","disabled":"rgba(255, 255, 255, 0.5)","hint":"rgba(255, 255, 255, 0.5)","icon":"rgba(255, 255, 255, 0.5)"},"divider":"rgba(255, 255, 255, 0.12)","background":{"paper":"#424242","default":"#303030"}},"shape":{"borderRadius":0}}')},79:function(e,a,t){e.exports=t(106)},84:function(e,a,t){}},[[79,1,2]]]);
//# sourceMappingURL=main.22a92578.chunk.js.map