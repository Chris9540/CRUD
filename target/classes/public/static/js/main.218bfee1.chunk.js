(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{54:function(e){e.exports=JSON.parse('{"palette":{"common":{"black":"#000","white":"#dfdfdf"},"type":"dark","primary":{"light":"rgba(255, 95, 26, 1)","main":"rgba(255, 69, 0, 1)","dark":"rgba(230, 44, 0, 1)","contrastText":"#000"},"secondary":{"light":"rgba(26, 212, 255, 1)","main":"rgba(0, 186, 255, 1)","dark":"rgba(0, 161, 230, 1)","contrastText":"#000"},"error":{"light":"#e57373","main":"#f44336","dark":"#d32f2f","contrastText":"#fff"},"grey":{"50":"#fafafa","100":"#f5f5f5","200":"#eeeeee","300":"#e0e0e0","400":"#bdbdbd","500":"#9e9e9e","600":"#757575","700":"#616161","800":"#424242","900":"#212121","A100":"#d5d5d5","A200":"#aaaaaa","A400":"#303030","A700":"#616161"},"text":{"primary":"#dfdfdf","secondary":"rgba(255, 255, 255, 0.7)","disabled":"rgba(255, 255, 255, 0.5)","hint":"rgba(255, 255, 255, 0.5)","icon":"rgba(255, 255, 255, 0.5)"},"divider":"rgba(255, 255, 255, 0.12)","background":{"paper":"#424242","default":"#303030"}},"shape":{"borderRadius":0}}')},60:function(e,a,t){e.exports=t(87)},65:function(e,a,t){},87:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(8),o=t.n(c),i=(t(65),t(121)),l=t(125),m=t(126);function s(){return r.a.createElement("div",null,r.a.createElement(i.a,{color:"default"},r.a.createElement(l.a,{variant:"dense"},r.a.createElement(m.a,{variant:"h6"},"Employees CRUD"))))}var d=t(127),u=Object(d.a)((function(e){return{root:{backgroundColor:"#212121",display:"flex",flexDirection:"row",alignItems:"center",color:e.palette.text.primary,paddingLeft:e.spacing(),paddingRight:e.spacing()}}}));function g(){var e=u();return r.a.createElement("footer",{className:e.root},r.a.createElement(m.a,null,"Chris Brighton"))}var f=t(27),p=t(55),b=t(88),h=t(128),E=t(129),v=t(130),y=t(131),O=t(132),w=t(133),j=t(134),k=t(33),x=t.n(k),N="http://localhost:8080/api/v"+1..toString()+"/"+"employee";var P=t(53),S=t.n(P),A=t(135),R=t(136);var C=Object(p.a)({palette:{primary:S.a},shape:{borderRadius:0}});function B(){var e=Object(n.useState)([]),a=Object(f.a)(e,2),t=a[0],c=a[1],o=Object(n.useState)(0),i=Object(f.a)(o,2),l=i[0],m=i[1],s=Object(n.useState)(5),d=Object(f.a)(s,2),u=d[0],g=d[1],p=Object(n.useState)(0),k=Object(f.a)(p,2),P=k[0],S=k[1],B=function(e,a){(function(e,a){return x.a.get("".concat(N,"/paged-list"),{params:{page:Number(e),size:Number(a)}})})(e,a).then((function(e){c(e.data)}))};return Object(n.useEffect)((function(){x.a.get("".concat(N,"/count")).then((function(e){S(e.data)})),B(l,u)}),[]),r.a.createElement(b.a,null,r.a.createElement(h.a,{component:b.a},r.a.createElement(E.a,{size:"small"},r.a.createElement(v.a,null,r.a.createElement(y.a,null,r.a.createElement(O.a,{component:"th",align:"center"},"Id"),r.a.createElement(O.a,{component:"th",align:"center"},"First Name"),r.a.createElement(O.a,{component:"th",align:"center"},"Last Name"),r.a.createElement(O.a,{component:"th",align:"right"},"Actions"))),r.a.createElement(w.a,null,t.map((function(e,a){return r.a.createElement(y.a,{key:a},r.a.createElement(O.a,{align:"center",component:"th",scope:"row"},e.id),r.a.createElement(O.a,{align:"center"},e.firstName),r.a.createElement(O.a,{align:"center"},e.lastName),r.a.createElement(O.a,{align:"right"},r.a.createElement(j.a,{variant:"contained",style:{marginRight:"20px"},color:"secondary"},"Edit"),r.a.createElement(A.a,{theme:C},r.a.createElement(j.a,{color:"primary",variant:"contained"},"Delete"))))}))))),r.a.createElement(R.a,{rowsPerPageOptions:[5,10,25],component:"div",rowsPerPage:u,page:l,count:P,onChangePage:function(e,a){m(a),B(a,u)},onChangeRowsPerPage:function(e,a){g(a),m(0),B(0,a)}}))}var D=Object(d.a)((function(e){return{container:{padding:e.spacing()}}}));var I=function(){var e=D();return r.a.createElement("div",{className:"App"},r.a.createElement(s,null),r.a.createElement("div",{className:e.container},r.a.createElement(B,null)),r.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(86);var J=t(54),T=Object(p.a)(J);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A.a,{theme:T},r.a.createElement(I,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[60,1,2]]]);
//# sourceMappingURL=main.218bfee1.chunk.js.map