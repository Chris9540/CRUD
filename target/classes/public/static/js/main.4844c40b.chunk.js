(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{42:function(e){e.exports=JSON.parse('{"palette":{"common":{"black":"#000","white":"#dfdfdf"},"type":"dark","primary":{"light":"rgba(255, 95, 26, 1)","main":"rgba(255, 69, 0, 1)","dark":"rgba(230, 44, 0, 1)","contrastText":"#000"},"secondary":{"light":"rgba(26, 212, 255, 1)","main":"rgba(0, 186, 255, 1)","dark":"rgba(0, 161, 230, 1)","contrastText":"#000"},"error":{"light":"#e57373","main":"#f44336","dark":"#d32f2f","contrastText":"#fff"},"grey":{"50":"#fafafa","100":"#f5f5f5","200":"#eeeeee","300":"#e0e0e0","400":"#bdbdbd","500":"#9e9e9e","600":"#757575","700":"#616161","800":"#424242","900":"#212121","A100":"#d5d5d5","A200":"#aaaaaa","A400":"#303030","A700":"#616161"},"text":{"primary":"#dfdfdf","secondary":"rgba(255, 255, 255, 0.7)","disabled":"rgba(255, 255, 255, 0.5)","hint":"rgba(255, 255, 255, 0.5)","icon":"rgba(255, 255, 255, 0.5)"},"divider":"rgba(255, 255, 255, 0.12)","background":{"paper":"#424242","default":"#303030"}},"shape":{"borderRadius":0}}')},46:function(e,a,t){e.exports=t(74)},51:function(e,a,t){},74:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(12),l=t.n(c),o=(t(51),t(90)),i=t(92),m=t(93);function s(){return r.a.createElement("div",null,r.a.createElement(o.a,{color:"default"},r.a.createElement(i.a,{variant:"dense"},r.a.createElement(m.a,{variant:"h6"},"Employees CRUD"))))}var d=t(94),u=Object(d.a)((function(e){return{root:{backgroundColor:"#212121",display:"flex",flexDirection:"row",alignItems:"center",color:e.palette.text.primary,paddingLeft:e.spacing(),paddingRight:e.spacing()}}}));function f(){var e=u();return r.a.createElement("footer",{className:e.root},r.a.createElement(m.a,null,"Chris Brighton"))}var g=t(24),p=t(25),E=t.n(p),b=t(95),h=t(75),v=t(96),k=t(97),y=t(98),w=t(99),O=t(100),j=t(102);function x(){var e=Object(n.useState)([]),a=Object(g.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(1),o=Object(g.a)(l,2),i=o[0],m=(o[1],Object(n.useState)(5)),s=Object(g.a)(m,2),d=s[0];s[1];return Object(n.useEffect)((function(){(function(e,a){return E.a.get("http://localhost:8080/api/v1/emp",{params:{page:e,size:a}})})(i,d).then((function(e){c(e.data)}))})),r.a.createElement(b.a,{component:h.a},r.a.createElement(v.a,null,r.a.createElement(k.a,null,r.a.createElement(y.a,null,r.a.createElement(w.a,{align:"center"},"Id"),r.a.createElement(w.a,{align:"center"},"First Name"),r.a.createElement(w.a,{align:"center"},"Last Name"),r.a.createElement(w.a,{align:"right"},"Actions"))),r.a.createElement(O.a,null,t.map((function(e,a){return r.a.createElement(y.a,{key:a},r.a.createElement(w.a,{align:"center",component:"th",scope:"row"},e.id),r.a.createElement(w.a,{align:"center"},e.fistName),r.a.createElement(w.a,{align:"center"},e.lastName),r.a.createElement(w.a,{align:"right"},r.a.createElement(j.a,null,"Edit"),r.a.createElement(j.a,null,"Delete")))})))))}var N=Object(d.a)((function(e){return{container:{padding:e.spacing()}}}));var A=function(){var e=N();return r.a.createElement("div",{className:"App"},r.a.createElement(s,null),r.a.createElement("div",{className:e.container},r.a.createElement(x,null)),r.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(73);var S=t(43),B=t(101),C=t(42),D=Object(S.a)(C);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(B.a,{theme:D},r.a.createElement(A,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.4844c40b.chunk.js.map