(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{54:function(e){e.exports=JSON.parse('{"palette":{"common":{"black":"#000","white":"#dfdfdf"},"type":"dark","primary":{"light":"rgba(255, 95, 26, 1)","main":"rgba(255, 69, 0, 1)","dark":"rgba(230, 44, 0, 1)","contrastText":"#000"},"secondary":{"light":"rgba(26, 212, 255, 1)","main":"rgba(0, 186, 255, 1)","dark":"rgba(0, 161, 230, 1)","contrastText":"#000"},"error":{"light":"#e57373","main":"#f44336","dark":"#d32f2f","contrastText":"#fff"},"grey":{"50":"#fafafa","100":"#f5f5f5","200":"#eeeeee","300":"#e0e0e0","400":"#bdbdbd","500":"#9e9e9e","600":"#757575","700":"#616161","800":"#424242","900":"#212121","A100":"#d5d5d5","A200":"#aaaaaa","A400":"#303030","A700":"#616161"},"text":{"primary":"#dfdfdf","secondary":"rgba(255, 255, 255, 0.7)","disabled":"rgba(255, 255, 255, 0.5)","hint":"rgba(255, 255, 255, 0.5)","icon":"rgba(255, 255, 255, 0.5)"},"divider":"rgba(255, 255, 255, 0.12)","background":{"paper":"#424242","default":"#303030"}},"shape":{"borderRadius":0}}')},60:function(e,a,t){e.exports=t(87)},65:function(e,a,t){},87:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(8),o=t.n(c),i=(t(65),t(121)),l=t(125),m=t(126);function s(){return r.a.createElement("div",null,r.a.createElement(i.a,{color:"default"},r.a.createElement(l.a,{variant:"dense"},r.a.createElement(m.a,{variant:"h6"},"Employees CRUD"))))}var d=t(127),u=Object(d.a)((function(e){return{root:{backgroundColor:"#212121",display:"flex",flexDirection:"row",alignItems:"center",color:e.palette.text.primary,paddingLeft:e.spacing(),paddingRight:e.spacing()}}}));function g(){var e=u();return r.a.createElement("footer",{className:e.root},r.a.createElement(m.a,null,"Chris Brighton"))}var f=t(27),p=t(55),h=t(4),b=t(128),E=t(88),v=t(129),y=t(130),O=t(131),j=t(132),k=t(133),w=t(134),N=t(53),x=t.n(N),C=t(90),P=t(135),S=t(136),A=t(35),I=t.n(A),R="http://localhost:8080/api/v"+1..toString()+"/"+"employee",z={list:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return I.a.get("".concat(R,"/paged-list"),{params:{page:Number(e),size:Number(a)}})},count:function(){return I.a.get("".concat(R,"/count"))}},B=Object(p.a)({palette:{primary:x.a},shape:{borderRadius:0}}),D=Object(C.a)((function(e){return{container:{maxHeight:282,minHeight:282,height:282},header:{"&th":{backgroundColor:"#212121"}}}})),H=Object(h.a)((function(e){return{head:{backgroundColor:"#212121"}}}))(b.a);function J(){var e=Object(n.useState)([]),a=Object(f.a)(e,2),t=a[0],c=a[1],o=Object(n.useState)(0),i=Object(f.a)(o,2),l=i[0],m=i[1],s=Object(n.useState)(5),d=Object(f.a)(s,2),u=d[0],g=d[1],p=Object(n.useState)(-1),h=Object(f.a)(p,2),N=h[0],x=h[1],C=D(),A=function(e,a){z.list(e,a).then((function(e){c(e.data)}))};return Object(n.useEffect)((function(){-1===N&&(z.count().then((function(e){x(e.data)})),A(l,u))}),[]),r.a.createElement(E.a,null,r.a.createElement(v.a,{component:"div",className:C.container},r.a.createElement(y.a,{size:"small",stickyHeader:!0},r.a.createElement(O.a,{className:C.header},r.a.createElement(j.a,null,r.a.createElement(H,{component:"th",align:"center"},"Id"),r.a.createElement(H,{component:"th",align:"center"},"First Name"),r.a.createElement(H,{component:"th",align:"center"},"Last Name"),r.a.createElement(H,{component:"th",align:"right"},"Actions"))),r.a.createElement(k.a,null,t.map((function(e,a){return r.a.createElement(j.a,{key:a},r.a.createElement(b.a,{align:"center",component:"th",scope:"row"},e.id),r.a.createElement(b.a,{align:"center"},e.firstName),r.a.createElement(b.a,{align:"center"},e.lastName),r.a.createElement(b.a,{align:"right"},r.a.createElement(w.a,{variant:"contained",style:{marginRight:"20px"},color:"secondary"},"Edit"),r.a.createElement(P.a,{theme:B},r.a.createElement(w.a,{color:"primary",variant:"contained"},"Delete"))))}))))),r.a.createElement(S.a,{rowsPerPageOptions:[5,10,25],component:"div",rowsPerPage:u,page:l,count:N,onChangePage:function(e,a){m(a),A(a,u)},onChangeRowsPerPage:function(e){g(parseInt(e.target.value)),m(0),console.log("size",parseInt(e.target.value)),A(0,parseInt(e.target.value))}}))}var T=Object(d.a)((function(e){return{container:{padding:e.spacing()}}}));var L=function(){var e=T();return r.a.createElement("div",{className:"App"},r.a.createElement(s,null),r.a.createElement("div",{className:e.container},r.a.createElement(J,null)),r.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(86);var W=t(54),F=Object(p.a)(W);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P.a,{theme:F},r.a.createElement(L,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[60,1,2]]]);
//# sourceMappingURL=main.442e9475.chunk.js.map