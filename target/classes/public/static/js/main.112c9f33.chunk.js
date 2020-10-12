(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{114:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(9),c=t.n(l),o=(t(91),t(11)),i=t(149),s=t(153),m=t(154),u=t(155),d=t(75),p=t.n(d),f=t(76),g=t.n(f);function b(e){return r.a.createElement("div",null,r.a.createElement(i.a,{color:"default"},r.a.createElement(s.a,{variant:"dense"},r.a.createElement(m.a,{variant:"h6",style:{flex:1},color:"primary"},"Employees CRUD"),r.a.createElement(u.a,{onClick:function(){return e.setView("list")},startIcon:r.a.createElement(p.a,null)},"List Employees"),r.a.createElement(u.a,{onClick:function(){return e.setView("add")},startIcon:r.a.createElement(g.a,null)},"Add Employee"))))}var E=t(156),v=Object(E.a)((function(e){return{root:{backgroundColor:"#212121",display:"flex",flexDirection:"row",alignItems:"center",color:e.palette.text.primary,paddingLeft:e.spacing(),paddingRight:e.spacing()}}}));function h(){var e=v();return r.a.createElement("footer",{className:e.root},r.a.createElement(m.a,null,"Chris Brighton"))}var j=t(4),O=t(158),y=t(159),N=t(115),w=t(160),C=t(161),k=t(162),x=t(163),I=t(116),S=t(168),P=t(35),V=t.n(P),D="http://localhost:8080/api/v"+1..toString()+"/"+"employee",z={list:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return V.a.get("".concat(D,"/paged-list"),{params:{page:Number(e),size:Number(a)}})},count:function(){return V.a.get("".concat(D,"/count"))},add:function(e){return V.a.post("".concat(D,"/add"),e)},delete:function(e){},get:function(e){return V.a.get("".concat(D,"/get"),{params:{id:e}})},update:function(e,a){return V.a.put("".concat(D,"/update?id=").concat(e),a)}},A=t(157),W=t(78);function R(e){var a=Object(W.a)({palette:{primary:e.color,type:"dark"},shape:{borderRadius:0}});return r.a.createElement(A.a,{theme:a},r.a.createElement(u.a,Object.assign({},e.buttonProps,{style:{textTransform:"capitalize",color:"#000"}}),e.children))}var B=t(48),L=Object(I.a)((function(e){return{container:{maxHeight:300,minHeight:300,height:300},pagination:{backgroundColor:"#212121"},button:{margin:e.spacing()}}})),T=Object(j.a)((function(e){return{head:{backgroundColor:"#212121"}}}))(O.a),F=Object(j.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(y.a);function H(e){var a=Object(n.useState)([]),t=Object(o.a)(a,2),l=t[0],c=t[1],i=Object(n.useState)(0),s=Object(o.a)(i,2),m=s[0],d=s[1],p=Object(n.useState)(5),f=Object(o.a)(p,2),g=f[0],b=f[1],E=Object(n.useState)(-1),v=Object(o.a)(E,2),h=v[0],j=v[1],I=L(),P=function(e,a){z.list(e,a).then((function(e){c(e.data)}))};return Object(n.useEffect)((function(){-1===h&&(z.count().then((function(e){j(e.data)})),P(m,g))}),[]),r.a.createElement(N.a,null,r.a.createElement(u.a,{variant:"contained",color:"primary",className:I.button,onClick:function(){return e.setView("add")}},"Add Employee"),r.a.createElement(w.a,{component:"div",className:I.container},r.a.createElement(C.a,{size:"small",stickyHeader:!0},r.a.createElement(k.a,{className:I.header},r.a.createElement(y.a,null,r.a.createElement(T,{component:"th"},"Id"),r.a.createElement(T,{component:"th"},"First Name"),r.a.createElement(T,{component:"th"},"Last Name"),r.a.createElement(T,{component:"th"},"Email"),r.a.createElement(T,{component:"th",align:"right"},"Actions"))),r.a.createElement(x.a,null,l.map((function(a,t){return r.a.createElement(F,{key:t},r.a.createElement(O.a,{component:"th",scope:"row"},a.id),r.a.createElement(O.a,null,a.firstName),r.a.createElement(O.a,null,a.lastName),r.a.createElement(O.a,null,a.emailId),r.a.createElement(O.a,{align:"right"},r.a.createElement(u.a,{variant:"contained",size:"small",style:{marginRight:"20px"},color:"secondary",onClick:function(){return e.setView("update",a.id)}},"Edit"),r.a.createElement(R,{color:B.a,buttonProps:{variant:"contained",color:"primary",size:"small"}},"Delete")))}))))),r.a.createElement(S.a,{rowsPerPageOptions:[5,10,25],component:"div",rowsPerPage:g,page:m,count:h,onChangePage:function(e,a){d(a),P(a,g)},onChangeRowsPerPage:function(e){b(parseInt(e.target.value)),d(0),console.log("size",parseInt(e.target.value)),P(0,parseInt(e.target.value))},className:I.pagination}))}var J=t(169),U=t(49),q=Object(E.a)((function(e){return{root:{display:"flex",flexDirection:"column",alignItems:"center",width:450,margin:"auto",padding:e.spacing()},form:{display:"flex",flexDirection:"column",alignItems:"center",padding:e.spacing(),width:"-webkit-fill-available"},space:{marginBottom:e.spacing()},buttonWrap:{width:"-webkit-fill-available",display:"flex",justifyContent:"space-evenly"}}}));function M(e){var a=q(),t={className:a.space,fullWidth:!0,required:!0},l=Object(n.useState)(""),c=Object(o.a)(l,2),i=c[0],s=c[1],u=Object(n.useState)(""),d=Object(o.a)(u,2),p=d[0],f=d[1],g=Object(n.useState)(""),b=Object(o.a)(g,2),E=b[0],v=b[1];return r.a.createElement(N.a,{className:a.root},r.a.createElement(m.a,{variant:"h4",className:a.space},"Create Employee"),r.a.createElement("form",{noValidate:!0,autoComplete:"off",className:a.form},r.a.createElement(J.a,Object.assign({},t,{value:i,onChange:function(e){s(e.target.value)},id:"firstName",label:"First Name"})),r.a.createElement(J.a,Object.assign({},t,{value:p,onChange:function(e){f(e.target.value)},id:"lastName",label:"Last Name"})),r.a.createElement(J.a,Object.assign({},t,{value:E,onChange:function(e){v(e.target.value)},id:"emailId",label:"Email Address"})),r.a.createElement("div",{className:a.buttonWrap},r.a.createElement(R,{color:U.a,buttonProps:{variant:"contained",color:"primary",className:a.space,onClick:function(a){a.preventDefault(),""!==i&&""!==p&&""!==E&&z.add({firstName:i,lastName:p,emailId:E}).then((function(a){e.setView("list")}))},size:"small"}},"Create"),r.a.createElement(R,{color:B.a,buttonProps:{variant:"contained",color:"primary",className:a.space,onClick:function(a){a.preventDefault(),s(""),f(""),v(""),e.setView("list")},size:"small"}},"Cancel"))))}var $=t(166),G=Object(E.a)((function(e){return{root:{display:"flex",flexDirection:"column",alignItems:"center",width:450,margin:"auto",padding:e.spacing()},form:{display:"flex",flexDirection:"column",alignItems:"center",padding:e.spacing(),width:"-webkit-fill-available"},space:{marginBottom:e.spacing()},buttonWrap:{width:"-webkit-fill-available",display:"flex",justifyContent:"space-evenly"}}}));function K(e){var a=G(),t={className:a.space,fullWidth:!0,required:!0},l=Object(n.useState)(null),c=Object(o.a)(l,2),i=(c[0],c[1]),s=Object(n.useState)(""),u=Object(o.a)(s,2),d=u[0],p=u[1],f=Object(n.useState)(""),g=Object(o.a)(f,2),b=g[0],E=g[1],v=Object(n.useState)(""),h=Object(o.a)(v,2),j=h[0],O=h[1];Object(n.useEffect)((function(){console.log(e.employeeId),i(e.employeeId),z.get(e.employeeId).then((function(e){var a=e.data;p(a.firstName),E(a.lastName),O(a.emailId)}))}),[]);return r.a.createElement(N.a,{className:a.root},r.a.createElement(m.a,{variant:"h4",className:a.space},"Update Employee"),r.a.createElement("form",{noValidate:!0,autoComplete:"off",className:a.form},r.a.createElement(J.a,Object.assign({},t,{value:d,onChange:function(e){p(e.target.value)},id:"firstName",label:"First Name"})),r.a.createElement(J.a,Object.assign({},t,{value:b,onChange:function(e){E(e.target.value)},id:"lastName",label:"Last Name"})),r.a.createElement(J.a,Object.assign({},t,{value:j,onChange:function(e){O(e.target.value)},id:"emailId",label:"Email Address"})),r.a.createElement("div",{className:a.buttonWrap},r.a.createElement(R,{color:U.a,buttonProps:{variant:"contained",color:"primary",className:a.space,onClick:function(e){e.preventDefault(),""!==d&&""!==b&&""!==j&&z.update(j,{firstName:d,lastName:b,emailId:j}).then((function(e){console.log(e,e.data)}))},size:"small"}},"Update"),r.a.createElement(R,{color:B.a,buttonProps:{variant:"contained",color:"primary",className:a.space,onClick:function(a){a.preventDefault(),e.setView("list")},size:"small"}},"Cancel"))))}var Q=Object(E.a)((function(e){return{container:{padding:e.spacing(4)}}}));var X=function(){var e=Q(),a=Object(n.useState)("list"),t=Object(o.a)(a,2),l=t[0],c=t[1],i=Object(n.useState)(!0),s=Object(o.a)(i,2),m=s[0],u=s[1],d=Object(n.useState)(1),p=Object(o.a)(d,2),f=p[0],g=p[1],E=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;e!==l&&(g(a),u(!1),setTimeout((function(){c(e),u(!0)}),500))};return r.a.createElement("div",{className:"App"},r.a.createElement(b,{setView:E}),r.a.createElement("div",{className:e.container},r.a.createElement($.a,{in:m,timeout:500},r.a.createElement("div",null,"list"===l?r.a.createElement(H,{setView:E}):null,"add"===l?r.a.createElement(M,{setView:E}):null,"update"===l?r.a.createElement(K,{setView:E,employeeId:f}):null))),r.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(113);var Y=t(77),Z=Object(W.a)(Y);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A.a,{theme:Z},r.a.createElement(X,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},77:function(e){e.exports=JSON.parse('{"palette":{"common":{"black":"#000","white":"#fff"},"type":"dark","primary":{"light":"rgba(255, 95, 26, 1)","main":"rgba(255, 69, 0, 1)","dark":"rgba(230, 44, 0, 1)","contrastText":"#000"},"secondary":{"light":"rgba(26, 212, 255, 1)","main":"rgba(0, 186, 255, 1)","dark":"rgba(0, 161, 230, 1)","contrastText":"#000"},"error":{"light":"#e57373","main":"#f44336","dark":"#d32f2f","contrastText":"#fff"},"grey":{"50":"#fafafa","100":"#f5f5f5","200":"#eeeeee","300":"#e0e0e0","400":"#bdbdbd","500":"#9e9e9e","600":"#757575","700":"#616161","800":"#424242","900":"#212121","A100":"#d5d5d5","A200":"#aaaaaa","A400":"#303030","A700":"#616161"},"text":{"primary":"#fff","secondary":"rgba(255, 255, 255, 0.7)","disabled":"rgba(255, 255, 255, 0.5)","hint":"rgba(255, 255, 255, 0.5)","icon":"rgba(255, 255, 255, 0.5)"},"divider":"rgba(255, 255, 255, 0.12)","background":{"paper":"#424242","default":"#303030"}},"shape":{"borderRadius":0}}')},86:function(e,a,t){e.exports=t(114)},91:function(e,a,t){}},[[86,1,2]]]);
//# sourceMappingURL=main.112c9f33.chunk.js.map