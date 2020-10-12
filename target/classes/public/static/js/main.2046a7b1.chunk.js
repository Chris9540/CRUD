(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{54:function(e){e.exports=JSON.parse('{"palette":{"common":{"black":"#000","white":"#dfdfdf"},"type":"dark","primary":{"light":"rgba(255, 95, 26, 1)","main":"rgba(255, 69, 0, 1)","dark":"rgba(230, 44, 0, 1)","contrastText":"#000"},"secondary":{"light":"rgba(26, 212, 255, 1)","main":"rgba(0, 186, 255, 1)","dark":"rgba(0, 161, 230, 1)","contrastText":"#000"},"error":{"light":"#e57373","main":"#f44336","dark":"#d32f2f","contrastText":"#fff"},"grey":{"50":"#fafafa","100":"#f5f5f5","200":"#eeeeee","300":"#e0e0e0","400":"#bdbdbd","500":"#9e9e9e","600":"#757575","700":"#616161","800":"#424242","900":"#212121","A100":"#d5d5d5","A200":"#aaaaaa","A400":"#303030","A700":"#616161"},"text":{"primary":"#dfdfdf","secondary":"rgba(255, 255, 255, 0.7)","disabled":"rgba(255, 255, 255, 0.5)","hint":"rgba(255, 255, 255, 0.5)","icon":"rgba(255, 255, 255, 0.5)"},"divider":"rgba(255, 255, 255, 0.12)","background":{"paper":"#424242","default":"#303030"}},"shape":{"borderRadius":0}}')},60:function(e,a,t){e.exports=t(87)},65:function(e,a,t){},87:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(8),c=t.n(o),i=(t(65),t(121)),l=t(125),s=t(126);function m(){return r.a.createElement("div",null,r.a.createElement(i.a,{color:"default"},r.a.createElement(l.a,{variant:"dense"},r.a.createElement(s.a,{variant:"h6"},"Employees CRUD"))))}var d=t(127),u=Object(d.a)((function(e){return{root:{backgroundColor:"#212121",display:"flex",flexDirection:"row",alignItems:"center",color:e.palette.text.primary,paddingLeft:e.spacing(),paddingRight:e.spacing()}}}));function g(){var e=u();return r.a.createElement("footer",{className:e.root},r.a.createElement(s.a,null,"Chris Brighton"))}var p=t(27),f=t(55),h=t(4),b=t(128),E=t(129),v=t(88),y=t(130),O=t(131),k=t(132),j=t(133),w=t(134),N=t(53),x=t.n(N),C=t(90),A=t(135),P=t(136),S=t(35),z=t.n(S),I="http://localhost:8080/api/v"+1..toString()+"/"+"employee",R={list:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return z.a.get("".concat(I,"/paged-list"),{params:{page:Number(e),size:Number(a)}})},count:function(){return z.a.get("".concat(I,"/count"))},add:function(e,a,t){},delete:function(e){},get:function(e){},update:function(e,a,t,n){}},T=Object(f.a)({palette:{primary:x.a,type:"dark"},shape:{borderRadius:0}}),B=Object(C.a)((function(e){return{container:{maxHeight:300,minHeight:300,height:300},pagination:{backgroundColor:"#212121"}}})),D=Object(h.a)((function(e){return{head:{backgroundColor:"#212121"}}}))(b.a),H=Object(h.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(E.a);function J(){var e=Object(n.useState)([]),a=Object(p.a)(e,2),t=a[0],o=a[1],c=Object(n.useState)(0),i=Object(p.a)(c,2),l=i[0],s=i[1],m=Object(n.useState)(5),d=Object(p.a)(m,2),u=d[0],g=d[1],f=Object(n.useState)(-1),h=Object(p.a)(f,2),N=h[0],x=h[1],C=B(),S=function(e,a){R.list(e,a).then((function(e){o(e.data)}))};return Object(n.useEffect)((function(){-1===N&&(R.count().then((function(e){x(e.data)})),S(l,u))}),[]),r.a.createElement(v.a,null,r.a.createElement(y.a,{variant:"contained",color:"primary"},"Add Employee"),r.a.createElement(O.a,{component:"div",className:C.container},r.a.createElement(k.a,{size:"small",stickyHeader:!0},r.a.createElement(j.a,{className:C.header},r.a.createElement(E.a,null,r.a.createElement(D,{component:"th",align:"center"},"Id"),r.a.createElement(D,{component:"th",align:"center"},"First Name"),r.a.createElement(D,{component:"th",align:"center"},"Last Name"),r.a.createElement(D,{component:"th",align:"right"},"Actions"))),r.a.createElement(w.a,null,t.map((function(e,a){return r.a.createElement(H,{key:a},r.a.createElement(b.a,{align:"center",component:"th",scope:"row"},e.id),r.a.createElement(b.a,{align:"center"},e.firstName),r.a.createElement(b.a,{align:"center"},e.lastName),r.a.createElement(b.a,{align:"right"},r.a.createElement(y.a,{variant:"contained",size:"small",style:{marginRight:"20px"},color:"secondary"},"Edit"),r.a.createElement(A.a,{theme:T},r.a.createElement(y.a,{color:"primary",size:"small",variant:"contained",style:{textTransform:"capitalize"}},"Delete"))))}))))),r.a.createElement(P.a,{rowsPerPageOptions:[5,10,25],component:"div",rowsPerPage:u,page:l,count:N,onChangePage:function(e,a){s(a),S(a,u)},onChangeRowsPerPage:function(e){g(parseInt(e.target.value)),s(0),console.log("size",parseInt(e.target.value)),S(0,parseInt(e.target.value))},className:C.pagination}))}var L=Object(d.a)((function(e){return{container:{padding:e.spacing(4)}}}));var W=function(){var e=L();return r.a.createElement("div",{className:"App"},r.a.createElement(m,null),r.a.createElement("div",{className:e.container},r.a.createElement(J,null)),r.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(86);var F=t(54),M=Object(f.a)(F);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A.a,{theme:M},r.a.createElement(W,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[60,1,2]]]);
//# sourceMappingURL=main.2046a7b1.chunk.js.map