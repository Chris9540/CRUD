(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{54:function(e){e.exports=JSON.parse('{"palette":{"common":{"black":"#000","white":"#dfdfdf"},"type":"dark","primary":{"light":"rgba(255, 95, 26, 1)","main":"rgba(255, 69, 0, 1)","dark":"rgba(230, 44, 0, 1)","contrastText":"#000"},"secondary":{"light":"rgba(26, 212, 255, 1)","main":"rgba(0, 186, 255, 1)","dark":"rgba(0, 161, 230, 1)","contrastText":"#000"},"error":{"light":"#e57373","main":"#f44336","dark":"#d32f2f","contrastText":"#fff"},"grey":{"50":"#fafafa","100":"#f5f5f5","200":"#eeeeee","300":"#e0e0e0","400":"#bdbdbd","500":"#9e9e9e","600":"#757575","700":"#616161","800":"#424242","900":"#212121","A100":"#d5d5d5","A200":"#aaaaaa","A400":"#303030","A700":"#616161"},"text":{"primary":"#dfdfdf","secondary":"rgba(255, 255, 255, 0.7)","disabled":"rgba(255, 255, 255, 0.5)","hint":"rgba(255, 255, 255, 0.5)","icon":"rgba(255, 255, 255, 0.5)"},"divider":"rgba(255, 255, 255, 0.12)","background":{"paper":"#424242","default":"#303030"}},"shape":{"borderRadius":0}}')},60:function(e,a,t){e.exports=t(87)},65:function(e,a,t){},87:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(8),o=t.n(c),i=(t(65),t(121)),l=t(125),m=t(126);function s(){return r.a.createElement("div",null,r.a.createElement(i.a,{color:"default"},r.a.createElement(l.a,{variant:"dense"},r.a.createElement(m.a,{variant:"h6"},"Employees CRUD"))))}var d=t(127),u=Object(d.a)((function(e){return{root:{backgroundColor:"#212121",display:"flex",flexDirection:"row",alignItems:"center",color:e.palette.text.primary,paddingLeft:e.spacing(),paddingRight:e.spacing()}}}));function g(){var e=u();return r.a.createElement("footer",{className:e.root},r.a.createElement(m.a,null,"Chris Brighton"))}var f=t(27),p=t(55),h=t(128),b=t(88),E=t(129),v=t(130),y=t(131),O=t(132),j=t(133),k=t(134),w=t(53),N=t.n(w),x=t(90),C=t(135),P=t(136),S=t(35),A=t.n(S),I="http://localhost:8080/api/v"+1..toString()+"/"+"employee",R={list:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return A.a.get("".concat(I,"/paged-list"),{params:{page:Number(e),size:Number(a)}})},count:function(){return A.a.get("".concat(I,"/count"))}},z=Object(p.a)({palette:{primary:N.a},shape:{borderRadius:0}}),B=Object(x.a)((function(e){return{container:{maxHeight:282,minHeight:282,height:282},header:{"&th":{backgroundColor:"#212121"}}}})),D=Object(x.a)((function(e){return{head:{backgroundColor:"#212121"}}}))(h.a);function H(){var e=Object(n.useState)([]),a=Object(f.a)(e,2),t=a[0],c=a[1],o=Object(n.useState)(0),i=Object(f.a)(o,2),l=i[0],m=i[1],s=Object(n.useState)(5),d=Object(f.a)(s,2),u=d[0],g=d[1],p=Object(n.useState)(-1),w=Object(f.a)(p,2),N=w[0],x=w[1],S=B(),A=function(e,a){R.list(e,a).then((function(e){c(e.data)}))};return Object(n.useEffect)((function(){-1===N&&(R.count().then((function(e){x(e.data)})),A(l,u))}),[]),r.a.createElement(b.a,null,r.a.createElement(E.a,{component:"div",className:S.container},r.a.createElement(v.a,{size:"small",stickyHeader:!0},r.a.createElement(y.a,{className:S.header},r.a.createElement(O.a,null,r.a.createElement(D,{component:"th",align:"center"},"Id"),r.a.createElement(D,{component:"th",align:"center"},"First Name"),r.a.createElement(D,{component:"th",align:"center"},"Last Name"),r.a.createElement(D,{component:"th",align:"right"},"Actions"))),r.a.createElement(j.a,null,t.map((function(e,a){return r.a.createElement(O.a,{key:a},r.a.createElement(h.a,{align:"center",component:"th",scope:"row"},e.id),r.a.createElement(h.a,{align:"center"},e.firstName),r.a.createElement(h.a,{align:"center"},e.lastName),r.a.createElement(h.a,{align:"right"},r.a.createElement(k.a,{variant:"contained",style:{marginRight:"20px"},color:"secondary"},"Edit"),r.a.createElement(C.a,{theme:z},r.a.createElement(k.a,{color:"primary",variant:"contained"},"Delete"))))}))))),r.a.createElement(P.a,{rowsPerPageOptions:[5,10,25],component:"div",rowsPerPage:u,page:l,count:N,onChangePage:function(e,a){m(a),A(a,u)},onChangeRowsPerPage:function(e){g(parseInt(e.target.value)),m(0),console.log("size",parseInt(e.target.value)),A(0,parseInt(e.target.value))}}))}var J=Object(d.a)((function(e){return{container:{padding:e.spacing()}}}));var T=function(){var e=J();return r.a.createElement("div",{className:"App"},r.a.createElement(s,null),r.a.createElement("div",{className:e.container},r.a.createElement(H,null)),r.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(86);var L=t(54),W=Object(p.a)(L);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C.a,{theme:W},r.a.createElement(T,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[60,1,2]]]);
//# sourceMappingURL=main.e431dc1a.chunk.js.map