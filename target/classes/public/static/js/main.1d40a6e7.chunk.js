(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{44:function(e){e.exports=JSON.parse('{"palette":{"common":{"black":"#000","white":"#dfdfdf"},"type":"dark","primary":{"light":"rgba(255, 95, 26, 1)","main":"rgba(255, 69, 0, 1)","dark":"rgba(230, 44, 0, 1)","contrastText":"#000"},"secondary":{"light":"rgba(26, 212, 255, 1)","main":"rgba(0, 186, 255, 1)","dark":"rgba(0, 161, 230, 1)","contrastText":"#000"},"error":{"light":"#e57373","main":"#f44336","dark":"#d32f2f","contrastText":"#fff"},"grey":{"50":"#fafafa","100":"#f5f5f5","200":"#eeeeee","300":"#e0e0e0","400":"#bdbdbd","500":"#9e9e9e","600":"#757575","700":"#616161","800":"#424242","900":"#212121","A100":"#d5d5d5","A200":"#aaaaaa","A400":"#303030","A700":"#616161"},"text":{"primary":"#dfdfdf","secondary":"rgba(255, 255, 255, 0.7)","disabled":"rgba(255, 255, 255, 0.5)","hint":"rgba(255, 255, 255, 0.5)","icon":"rgba(255, 255, 255, 0.5)"},"divider":"rgba(255, 255, 255, 0.12)","background":{"paper":"#424242","default":"#303030"}},"shape":{"borderRadius":0}}')},47:function(e,a,t){e.exports=t(75)},52:function(e,a,t){},75:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(12),l=t.n(c),i=(t(52),t(91)),o=t(93),m=t(94);function s(){return r.a.createElement("div",null,r.a.createElement(i.a,{color:"default"},r.a.createElement(o.a,{variant:"dense"},r.a.createElement(m.a,{variant:"h6"},"Employees CRUD"))))}var d=t(95),u=Object(d.a)((function(e){return{root:{backgroundColor:"#212121",display:"flex",flexDirection:"row",alignItems:"center",color:e.palette.text.primary,paddingLeft:e.spacing(),paddingRight:e.spacing()}}}));function g(){var e=u();return r.a.createElement("footer",{className:e.root},r.a.createElement(m.a,null,"Chris Brighton"))}var f=t(24),p=t(26),E=t.n(p),b=t(45),h=t(96),v=t(76),y=t(97),O=t(98),j=t(99),k=t(100),w=t(101),N=t(103);var x=t(43),A=t.n(x),S=t(102),R=Object(b.a)({palette:{primary:A.a},shape:{borderRadius:0}}),B=Object(d.a)((function(e){return{margin:e.spacing()}}));function C(){var e=Object(n.useState)([]),a=Object(f.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(1),i=Object(f.a)(l,2),o=i[0],m=(i[1],Object(n.useState)(5)),s=Object(f.a)(m,2),d=s[0],u=(s[1],B());return Object(n.useEffect)((function(){(function(e,a){return E.a.get("http://localhost:8080/api/v1/emp",{params:{page:e,size:a}})})(o,d).then((function(e){c(e.data)}))})),r.a.createElement(h.a,{component:v.a},r.a.createElement(y.a,null,r.a.createElement(O.a,null,r.a.createElement(j.a,null,r.a.createElement(k.a,{align:"center"},"Id"),r.a.createElement(k.a,{align:"center"},"First Name"),r.a.createElement(k.a,{align:"center"},"Last Name"),r.a.createElement(k.a,{align:"right"},"Actions"))),r.a.createElement(w.a,null,t.map((function(e,a){return r.a.createElement(j.a,{key:a},r.a.createElement(k.a,{align:"center",component:"th",scope:"row"},e.id),r.a.createElement(k.a,{align:"center"},e.firstName),r.a.createElement(k.a,{align:"center"},e.lastName),r.a.createElement(k.a,{align:"right"},r.a.createElement(N.a,{variant:"contained",className:u.margin,color:"secondary"},"Edit"),r.a.createElement(S.a,{theme:R},r.a.createElement(N.a,{className:u.margin,color:"primary",variant:"contained"},"Delete"))))})))))}var D=Object(d.a)((function(e){return{container:{padding:e.spacing()}}}));var I=function(){var e=D();return r.a.createElement("div",{className:"App"},r.a.createElement(s,null),r.a.createElement("div",{className:e.container},r.a.createElement(C,null)),r.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(74);var J=t(44),T=Object(b.a)(J);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S.a,{theme:T},r.a.createElement(I,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.1d40a6e7.chunk.js.map