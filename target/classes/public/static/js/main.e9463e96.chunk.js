(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{54:function(e){e.exports=JSON.parse('{"palette":{"common":{"black":"#000","white":"#dfdfdf"},"type":"dark","primary":{"light":"rgba(255, 95, 26, 1)","main":"rgba(255, 69, 0, 1)","dark":"rgba(230, 44, 0, 1)","contrastText":"#000"},"secondary":{"light":"rgba(26, 212, 255, 1)","main":"rgba(0, 186, 255, 1)","dark":"rgba(0, 161, 230, 1)","contrastText":"#000"},"error":{"light":"#e57373","main":"#f44336","dark":"#d32f2f","contrastText":"#fff"},"grey":{"50":"#fafafa","100":"#f5f5f5","200":"#eeeeee","300":"#e0e0e0","400":"#bdbdbd","500":"#9e9e9e","600":"#757575","700":"#616161","800":"#424242","900":"#212121","A100":"#d5d5d5","A200":"#aaaaaa","A400":"#303030","A700":"#616161"},"text":{"primary":"#dfdfdf","secondary":"rgba(255, 255, 255, 0.7)","disabled":"rgba(255, 255, 255, 0.5)","hint":"rgba(255, 255, 255, 0.5)","icon":"rgba(255, 255, 255, 0.5)"},"divider":"rgba(255, 255, 255, 0.12)","background":{"paper":"#424242","default":"#303030"}},"shape":{"borderRadius":0}}')},60:function(e,a,t){e.exports=t(87)},65:function(e,a,t){},87:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(8),o=t.n(c),l=(t(65),t(121)),i=t(125),m=t(126);function s(){return r.a.createElement("div",null,r.a.createElement(l.a,{color:"default"},r.a.createElement(i.a,{variant:"dense"},r.a.createElement(m.a,{variant:"h6"},"Employees CRUD"))))}var d=t(127),g=Object(d.a)((function(e){return{root:{backgroundColor:"#212121",display:"flex",flexDirection:"row",alignItems:"center",color:e.palette.text.primary,paddingLeft:e.spacing(),paddingRight:e.spacing()}}}));function u(){var e=g();return r.a.createElement("footer",{className:e.root},r.a.createElement(m.a,null,"Chris Brighton"))}var p=t(27),f=t(55),h=t(88),E=t(128),b=t(129),v=t(130),y=t(131),O=t(132),w=t(133),j=t(134),k=t(33),x=t.n(k),N="http://localhost:8080/api/v"+1..toString()+"/"+"employee";var P=t(53),S=t.n(P),A=t(135),R=t(136);var C=Object(f.a)({palette:{primary:S.a},shape:{borderRadius:0}});function z(){var e=Object(n.useState)([]),a=Object(p.a)(e,2),t=a[0],c=a[1],o=Object(n.useState)(0),l=Object(p.a)(o,2),i=l[0],m=l[1],s=Object(n.useState)(5),d=Object(p.a)(s,2),g=d[0],u=d[1],f=Object(n.useState)(0),k=Object(p.a)(f,2),P=k[0],S=k[1],z=function(){console.log("page",i,"size",g),function(e,a){return x.a.get("".concat(N,"/paged-list"),{params:{page:e,size:a}})}(i,g).then((function(e){c(e.data)}))};return Object(n.useEffect)((function(){x.a.get("".concat(N,"/count")).then((function(e){S(e.data)})),z()}),[]),r.a.createElement(h.a,null,r.a.createElement(E.a,{component:h.a},r.a.createElement(b.a,{size:"small"},r.a.createElement(v.a,null,r.a.createElement(y.a,null,r.a.createElement(O.a,{component:"th",align:"center"},"Id"),r.a.createElement(O.a,{component:"th",align:"center"},"First Name"),r.a.createElement(O.a,{component:"th",align:"center"},"Last Name"),r.a.createElement(O.a,{component:"th",align:"right"},"Actions"))),r.a.createElement(w.a,null,t.map((function(e,a){return r.a.createElement(y.a,{key:a},r.a.createElement(O.a,{align:"center",component:"th",scope:"row"},e.id),r.a.createElement(O.a,{align:"center"},e.firstName),r.a.createElement(O.a,{align:"center"},e.lastName),r.a.createElement(O.a,{align:"right"},r.a.createElement(j.a,{variant:"contained",style:{marginRight:"20px"},color:"secondary"},"Edit"),r.a.createElement(A.a,{theme:C},r.a.createElement(j.a,{color:"primary",variant:"contained"},"Delete"))))}))))),r.a.createElement(R.a,{rowsPerPageOptions:[5,10,25],component:"div",rowsPerPage:g,page:i,count:P,onChangePage:function(e,a){return t=a,console.log(t),m(t),void z();var t},onChangeRowsPerPage:function(e,a){return t=e,n=a,console.log(t,n),u(n),void z();var t,n}}))}var B=Object(d.a)((function(e){return{container:{padding:e.spacing()}}}));var D=function(){var e=B();return r.a.createElement("div",{className:"App"},r.a.createElement(s,null),r.a.createElement("div",{className:e.container},r.a.createElement(z,null)),r.a.createElement(u,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(86);var I=t(54),J=Object(f.a)(I);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A.a,{theme:J},r.a.createElement(D,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[60,1,2]]]);
//# sourceMappingURL=main.e9463e96.chunk.js.map