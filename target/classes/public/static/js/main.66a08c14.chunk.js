(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{102:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(8),o=t.n(c),i=(t(80),t(25)),l=t(136),s=t(140),m=t(141);function d(){return r.a.createElement("div",null,r.a.createElement(l.a,{color:"default"},r.a.createElement(s.a,{variant:"dense"},r.a.createElement(m.a,{variant:"h6"},"Employees CRUD"))))}var u=t(142),g=Object(u.a)((function(e){return{root:{backgroundColor:"#212121",display:"flex",flexDirection:"row",alignItems:"center",color:e.palette.text.primary,paddingLeft:e.spacing(),paddingRight:e.spacing()}}}));function f(){var e=g();return r.a.createElement("footer",{className:e.root},r.a.createElement(m.a,null,"Chris Brighton"))}var p=t(66),b=t(4),h=t(143),E=t(144),v=t(103),y=t(145),O=t(146),N=t(147),j=t(148),k=t(149),w=t(64),x=t.n(w),C=t(104),I=t(150),A=t(154),S=t(45),P=t.n(S),z="http://localhost:8080/api/v"+1..toString()+"/"+"employee",R={list:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return P.a.get("".concat(z,"/paged-list"),{params:{page:Number(e),size:Number(a)}})},count:function(){return P.a.get("".concat(z,"/count"))},add:function(e,a,t){},delete:function(e){},get:function(e){},update:function(e,a,t,n){}},D=Object(p.a)({palette:{primary:x.a,type:"dark"},shape:{borderRadius:0}}),T=Object(C.a)((function(e){return{container:{maxHeight:300,minHeight:300,height:300},pagination:{backgroundColor:"#212121"},button:{margin:e.spacing()}}})),V=Object(b.a)((function(e){return{head:{backgroundColor:"#212121"}}}))(h.a),q=Object(b.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(E.a);function B(e){var a=Object(n.useState)([]),t=Object(i.a)(a,2),c=t[0],o=t[1],l=Object(n.useState)(0),s=Object(i.a)(l,2),m=s[0],d=s[1],u=Object(n.useState)(5),g=Object(i.a)(u,2),f=g[0],p=g[1],b=Object(n.useState)(-1),w=Object(i.a)(b,2),x=w[0],C=w[1],S=T(),P=function(e,a){R.list(e,a).then((function(e){o(e.data)}))};return Object(n.useEffect)((function(){-1===x&&(R.count().then((function(e){C(e.data)})),P(m,f))}),[]),r.a.createElement(v.a,null,r.a.createElement(y.a,{variant:"contained",color:"primary",className:S.button,onClick:function(){return e.setView("add")}},"Add Employee"),r.a.createElement(O.a,{component:"div",className:S.container},r.a.createElement(N.a,{size:"small",stickyHeader:!0},r.a.createElement(j.a,{className:S.header},r.a.createElement(E.a,null,r.a.createElement(V,{component:"th",align:"center"},"Id"),r.a.createElement(V,{component:"th",align:"center"},"First Name"),r.a.createElement(V,{component:"th",align:"center"},"Last Name"),r.a.createElement(V,{component:"th",align:"right"},"Actions"))),r.a.createElement(k.a,null,c.map((function(e,a){return r.a.createElement(q,{key:a},r.a.createElement(h.a,{align:"center",component:"th",scope:"row"},e.id),r.a.createElement(h.a,{align:"center"},e.firstName),r.a.createElement(h.a,{align:"center"},e.lastName),r.a.createElement(h.a,{align:"right"},r.a.createElement(y.a,{variant:"contained",size:"small",style:{marginRight:"20px"},color:"secondary"},"Edit"),r.a.createElement(I.a,{theme:D},r.a.createElement(y.a,{color:"primary",size:"small",variant:"contained",style:{textTransform:"capitalize"}},"Delete"))))}))))),r.a.createElement(A.a,{rowsPerPageOptions:[5,10,25],component:"div",rowsPerPage:f,page:m,count:x,onChangePage:function(e,a){d(a),P(a,f)},onChangeRowsPerPage:function(e){p(parseInt(e.target.value)),d(0),console.log("size",parseInt(e.target.value)),P(0,parseInt(e.target.value))},className:S.pagination}))}var H=t(155),J=Object(u.a)((function(e){return{root:{display:"flex",flexDirection:"column",alignItems:"center"},form:{display:"flex",flexDirection:"column",alignItems:"center",padding:e.spacing()}}}));function L(){var e=J();return r.a.createElement(v.a,{className:e.root},r.a.createElement("form",{noValidate:!0,autoComplete:"off",className:e.form},r.a.createElement(H.a,{required:!0,id:"firstName",label:"First Name"}),r.a.createElement(H.a,{required:!0,id:"lastName",label:"Last Name"}),r.a.createElement(H.a,{required:!0,id:"emailId",label:"Email Address"})))}var F=Object(u.a)((function(e){return{container:{padding:e.spacing(4)}}}));var W=function(){var e=F(),a=Object(n.useState)("list"),t=Object(i.a)(a,2),c=t[0],o=t[1];return r.a.createElement("div",{className:"App"},r.a.createElement(d,null),r.a.createElement("div",{className:e.container},"list"===c?r.a.createElement(B,{setView:o}):null,"add"===c?r.a.createElement(L,{setView:o}):null),r.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(101);var M=t(65),U=Object(p.a)(M);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I.a,{theme:U},r.a.createElement(W,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},65:function(e){e.exports=JSON.parse('{"palette":{"common":{"black":"#000","white":"#dfdfdf"},"type":"dark","primary":{"light":"rgba(255, 95, 26, 1)","main":"rgba(255, 69, 0, 1)","dark":"rgba(230, 44, 0, 1)","contrastText":"#000"},"secondary":{"light":"rgba(26, 212, 255, 1)","main":"rgba(0, 186, 255, 1)","dark":"rgba(0, 161, 230, 1)","contrastText":"#000"},"error":{"light":"#e57373","main":"#f44336","dark":"#d32f2f","contrastText":"#fff"},"grey":{"50":"#fafafa","100":"#f5f5f5","200":"#eeeeee","300":"#e0e0e0","400":"#bdbdbd","500":"#9e9e9e","600":"#757575","700":"#616161","800":"#424242","900":"#212121","A100":"#d5d5d5","A200":"#aaaaaa","A400":"#303030","A700":"#616161"},"text":{"primary":"#dfdfdf","secondary":"rgba(255, 255, 255, 0.7)","disabled":"rgba(255, 255, 255, 0.5)","hint":"rgba(255, 255, 255, 0.5)","icon":"rgba(255, 255, 255, 0.5)"},"divider":"rgba(255, 255, 255, 0.12)","background":{"paper":"#424242","default":"#303030"}},"shape":{"borderRadius":0}}')},75:function(e,a,t){e.exports=t(102)},80:function(e,a,t){}},[[75,1,2]]]);
//# sourceMappingURL=main.66a08c14.chunk.js.map