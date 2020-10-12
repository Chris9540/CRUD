(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{54:function(e){e.exports=JSON.parse('{"palette":{"common":{"black":"#000","white":"#dfdfdf"},"type":"dark","primary":{"light":"rgba(255, 95, 26, 1)","main":"rgba(255, 69, 0, 1)","dark":"rgba(230, 44, 0, 1)","contrastText":"#000"},"secondary":{"light":"rgba(26, 212, 255, 1)","main":"rgba(0, 186, 255, 1)","dark":"rgba(0, 161, 230, 1)","contrastText":"#000"},"error":{"light":"#e57373","main":"#f44336","dark":"#d32f2f","contrastText":"#fff"},"grey":{"50":"#fafafa","100":"#f5f5f5","200":"#eeeeee","300":"#e0e0e0","400":"#bdbdbd","500":"#9e9e9e","600":"#757575","700":"#616161","800":"#424242","900":"#212121","A100":"#d5d5d5","A200":"#aaaaaa","A400":"#303030","A700":"#616161"},"text":{"primary":"#dfdfdf","secondary":"rgba(255, 255, 255, 0.7)","disabled":"rgba(255, 255, 255, 0.5)","hint":"rgba(255, 255, 255, 0.5)","icon":"rgba(255, 255, 255, 0.5)"},"divider":"rgba(255, 255, 255, 0.12)","background":{"paper":"#424242","default":"#303030"}},"shape":{"borderRadius":0}}')},60:function(e,a,t){e.exports=t(87)},65:function(e,a,t){},87:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(8),o=t.n(c),i=(t(65),t(121)),l=t(125),m=t(126);function s(){return r.a.createElement("div",null,r.a.createElement(i.a,{color:"default"},r.a.createElement(l.a,{variant:"dense"},r.a.createElement(m.a,{variant:"h6"},"Employees CRUD"))))}var d=t(127),u=Object(d.a)((function(e){return{root:{backgroundColor:"#212121",display:"flex",flexDirection:"row",alignItems:"center",color:e.palette.text.primary,paddingLeft:e.spacing(),paddingRight:e.spacing()}}}));function g(){var e=u();return r.a.createElement("footer",{className:e.root},r.a.createElement(m.a,null,"Chris Brighton"))}var p=t(27),f=t(55),h=t(88),b=t(128),E=t(129),v=t(130),y=t(131),O=t(132),j=t(133),k=t(134),w=t(53),x=t.n(w),N=t(90),P=t(135),S=t(136),A=t(35),C=t.n(A),I="http://localhost:8080/api/v"+1..toString()+"/"+"employee",R={list:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return C.a.get("".concat(I,"/paged-list"),{params:{page:Number(e),size:Number(a)}})},count:function(){return C.a.get("".concat(I,"/count"))}},z=Object(f.a)({palette:{primary:x.a},shape:{borderRadius:0}}),B=Object(N.a)((function(e){return{container:{maxHeight:282,minHeight:282,height:282},header:{"&th":{backgroundColor:"#212121"}}}}));function D(){var e=Object(n.useState)([]),a=Object(p.a)(e,2),t=a[0],c=a[1],o=Object(n.useState)(0),i=Object(p.a)(o,2),l=i[0],m=i[1],s=Object(n.useState)(5),d=Object(p.a)(s,2),u=d[0],g=d[1],f=Object(n.useState)(-1),w=Object(p.a)(f,2),x=w[0],N=w[1],A=B(),C=function(e,a){R.list(e,a).then((function(e){c(e.data)}))};return Object(n.useEffect)((function(){-1===x&&(R.count().then((function(e){N(e.data)})),C(l,u))}),[]),r.a.createElement(h.a,null,r.a.createElement(b.a,{component:"div",className:A.container},r.a.createElement(E.a,{size:"small",stickyHeader:!0},r.a.createElement(v.a,null,r.a.createElement(y.a,null,r.a.createElement(O.a,{component:"th",align:"center"},"Id"),r.a.createElement(O.a,{component:"th",align:"center"},"First Name"),r.a.createElement(O.a,{component:"th",align:"center"},"Last Name"),r.a.createElement(O.a,{component:"th",align:"right"},"Actions"))),r.a.createElement(j.a,null,t.map((function(e,a){return r.a.createElement(y.a,{key:a},r.a.createElement(O.a,{align:"center",component:"th",scope:"row"},e.id),r.a.createElement(O.a,{align:"center"},e.firstName),r.a.createElement(O.a,{align:"center"},e.lastName),r.a.createElement(O.a,{align:"right"},r.a.createElement(k.a,{variant:"contained",style:{marginRight:"20px"},color:"secondary"},"Edit"),r.a.createElement(P.a,{theme:z},r.a.createElement(k.a,{color:"primary",variant:"contained"},"Delete"))))}))))),r.a.createElement(S.a,{rowsPerPageOptions:[5,10,25],component:"div",rowsPerPage:u,page:l,count:x,onChangePage:function(e,a){m(a),C(a,u)},onChangeRowsPerPage:function(e){g(parseInt(e.target.value)),m(0),console.log("size",parseInt(e.target.value)),C(0,parseInt(e.target.value))}}))}var H=Object(d.a)((function(e){return{container:{padding:e.spacing()}}}));var J=function(){var e=H();return r.a.createElement("div",{className:"App"},r.a.createElement(s,null),r.a.createElement("div",{className:e.container},r.a.createElement(D,null)),r.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(86);var T=t(54),L=Object(f.a)(T);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P.a,{theme:L},r.a.createElement(J,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[60,1,2]]]);
//# sourceMappingURL=main.c29fe8e3.chunk.js.map