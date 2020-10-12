(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{106:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(9),o=t.n(c),i=(t(84),t(13)),l=t(143),s=t(147),m=t(148),u=t(149);function d(e){return r.a.createElement("div",null,r.a.createElement(l.a,{color:"default"},r.a.createElement(s.a,{variant:"dense"},r.a.createElement(m.a,{variant:"h6",style:{flex:1},color:"primary"},"Employees CRUD"),r.a.createElement(u.a,{onClick:function(){return e.setView("list")}},"List Employees"),r.a.createElement(u.a,{onClick:function(){return e.setView("add")}},"Add Employee"))))}var g=t(150),f=Object(g.a)((function(e){return{root:{backgroundColor:"#212121",display:"flex",flexDirection:"row",alignItems:"center",color:e.palette.text.primary,paddingLeft:e.spacing(),paddingRight:e.spacing()}}}));function p(){var e=f();return r.a.createElement("footer",{className:e.root},r.a.createElement(m.a,null,"Chris Brighton"))}var b=t(4),E=t(152),h=t(153),v=t(107),y=t(154),O=t(155),j=t(156),N=t(157),w=t(108),k=t(162),C=t(50),x=t.n(C),S="http://localhost:8080/api/v"+1..toString()+"/"+"employee",A={list:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return x.a.get("".concat(S,"/paged-list"),{params:{page:Number(e),size:Number(a)}})},count:function(){return x.a.get("".concat(S,"/count"))},add:function(e,a,t){},delete:function(e){},get:function(e){},update:function(e,a,t,n){}},P=t(151),I=t(70);function z(e){var a=Object(I.a)({palette:{primary:e.color,type:"dark"},shape:{borderRadius:0}});return r.a.createElement(P.a,{theme:a},r.a.createElement(u.a,Object.assign({},e.buttonProps,{style:{textTransform:"capitalize",color:"#000"}}),e.children))}var V=t(45),D=Object(w.a)((function(e){return{container:{maxHeight:300,minHeight:300,height:300},pagination:{backgroundColor:"#212121"},button:{margin:e.spacing()}}})),R=Object(b.a)((function(e){return{head:{backgroundColor:"#212121"}}}))(E.a),T=Object(b.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(h.a);function W(e){var a=Object(n.useState)([]),t=Object(i.a)(a,2),c=t[0],o=t[1],l=Object(n.useState)(0),s=Object(i.a)(l,2),m=s[0],d=s[1],g=Object(n.useState)(5),f=Object(i.a)(g,2),p=f[0],b=f[1],w=Object(n.useState)(-1),C=Object(i.a)(w,2),x=C[0],S=C[1],P=D(),I=function(e,a){A.list(e,a).then((function(e){o(e.data)}))};return Object(n.useEffect)((function(){-1===x&&(A.count().then((function(e){S(e.data)})),I(m,p))}),[]),r.a.createElement(v.a,null,r.a.createElement(u.a,{variant:"contained",color:"primary",className:P.button,onClick:function(){return e.setView("add")}},"Add Employee"),r.a.createElement(y.a,{component:"div",className:P.container},r.a.createElement(O.a,{size:"small",stickyHeader:!0},r.a.createElement(j.a,{className:P.header},r.a.createElement(h.a,null,r.a.createElement(R,{component:"th",align:"center"},"Id"),r.a.createElement(R,{component:"th",align:"center"},"First Name"),r.a.createElement(R,{component:"th",align:"center"},"Last Name"),r.a.createElement(R,{component:"th",align:"right"},"Actions"))),r.a.createElement(N.a,null,c.map((function(e,a){return r.a.createElement(T,{key:a},r.a.createElement(E.a,{align:"center",component:"th",scope:"row"},e.id),r.a.createElement(E.a,{align:"center"},e.firstName),r.a.createElement(E.a,{align:"center"},e.lastName),r.a.createElement(E.a,{align:"right"},r.a.createElement(u.a,{variant:"contained",size:"small",style:{marginRight:"20px"},color:"secondary"},"Edit"),r.a.createElement(z,{color:V.a,buttonProps:{variant:"contained",color:"primary",size:"small"}},"Delete")))}))))),r.a.createElement(k.a,{rowsPerPageOptions:[5,10,25],component:"div",rowsPerPage:p,page:m,count:x,onChangePage:function(e,a){d(a),I(a,p)},onChangeRowsPerPage:function(e){b(parseInt(e.target.value)),d(0),console.log("size",parseInt(e.target.value)),I(0,parseInt(e.target.value))},className:P.pagination}))}var B=t(163),J=t(46),L=Object(g.a)((function(e){return{root:{display:"flex",flexDirection:"column",alignItems:"center",width:450,margin:"auto",padding:e.spacing()},form:{display:"flex",flexDirection:"column",alignItems:"center",padding:e.spacing(),width:"-webkit-fill-available"},space:{marginBottom:e.spacing()},buttonWrap:{width:"-webkit-fill-available",display:"flex",justifyContent:"space-evenly"}}}));function H(e){var a=L(),t={className:a.space,fullWidth:!0,required:!0},c=Object(n.useState)(""),o=Object(i.a)(c,2),l=o[0],s=o[1],u=Object(n.useState)(""),d=Object(i.a)(u,2),g=d[0],f=d[1],p=Object(n.useState)(""),b=Object(i.a)(p,2),E=b[0],h=b[1];return r.a.createElement(v.a,{className:a.root},r.a.createElement(m.a,{variant:"h4",className:a.space},"Add Employee"),r.a.createElement("form",{noValidate:!0,autoComplete:"off",className:a.form},r.a.createElement(B.a,Object.assign({},t,{value:l,onChange:function(e){s(e.target.value)},id:"firstName",label:"First Name"})),r.a.createElement(B.a,Object.assign({},t,{value:g,onChange:function(e){f(e.target.value)},id:"lastName",label:"Last Name"})),r.a.createElement(B.a,Object.assign({},t,{value:E,onChange:function(e){h(e.target.value)},id:"emailId",label:"Email Address"})),r.a.createElement("div",{className:a.buttonWrap},r.a.createElement(z,{color:J.a,buttonProps:{variant:"contained",color:"primary",className:a.space,onClick:function(e){e.preventDefault();var a=JSON.stringify({firstName:l,lastName:g,emailId:E});console.log(a)},size:"small"}},"Add"),r.a.createElement(z,{color:V.a,buttonProps:{variant:"contained",color:"primary",className:a.space,onClick:function(a){a.preventDefault(),s(""),f(""),h(""),e.setView("list")},size:"small"}},"Cancel"))))}var F=t(160),q=Object(g.a)((function(e){return{container:{padding:e.spacing(4)}}}));var M=function(){var e=q(),a=Object(n.useState)("list"),t=Object(i.a)(a,2),c=t[0],o=t[1],l=Object(n.useState)(!0),s=Object(i.a)(l,2),m=s[0],u=s[1],g=function(e){u(!1),setTimeout((function(){o(e),u(!0)}),500)};return r.a.createElement("div",{className:"App"},r.a.createElement(d,{setView:g}),r.a.createElement("div",{className:e.container},r.a.createElement(F.a,{in:m,timeout:500},r.a.createElement("div",null,"list"===c?r.a.createElement(W,{setView:g}):null,"add"===c?r.a.createElement(H,{setView:g}):null))),r.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(105);var U=t(69),$=Object(I.a)(U);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P.a,{theme:$},r.a.createElement(M,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},69:function(e){e.exports=JSON.parse('{"palette":{"common":{"black":"#000","white":"#fff"},"type":"dark","primary":{"light":"rgba(255, 95, 26, 1)","main":"rgba(255, 69, 0, 1)","dark":"rgba(230, 44, 0, 1)","contrastText":"#000"},"secondary":{"light":"rgba(26, 212, 255, 1)","main":"rgba(0, 186, 255, 1)","dark":"rgba(0, 161, 230, 1)","contrastText":"#000"},"error":{"light":"#e57373","main":"#f44336","dark":"#d32f2f","contrastText":"#fff"},"grey":{"50":"#fafafa","100":"#f5f5f5","200":"#eeeeee","300":"#e0e0e0","400":"#bdbdbd","500":"#9e9e9e","600":"#757575","700":"#616161","800":"#424242","900":"#212121","A100":"#d5d5d5","A200":"#aaaaaa","A400":"#303030","A700":"#616161"},"text":{"primary":"#fff","secondary":"rgba(255, 255, 255, 0.7)","disabled":"rgba(255, 255, 255, 0.5)","hint":"rgba(255, 255, 255, 0.5)","icon":"rgba(255, 255, 255, 0.5)"},"divider":"rgba(255, 255, 255, 0.12)","background":{"paper":"#424242","default":"#303030"}},"shape":{"borderRadius":0}}')},79:function(e,a,t){e.exports=t(106)},84:function(e,a,t){}},[[79,1,2]]]);
//# sourceMappingURL=main.2ca31aa2.chunk.js.map