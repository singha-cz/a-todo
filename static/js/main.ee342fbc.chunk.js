(this["webpackJsonpa-todo"]=this["webpackJsonpa-todo"]||[]).push([[0],{12:function(e,t,n){e.exports={taskList:"TaskList_taskList__1QZ0i",addButton:"TaskList_addButton__2K-0R"}},16:function(e,t,n){e.exports={app:"App_app__3NoNF"}},17:function(e,t,n){e.exports=n(28)},22:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(15),l=n.n(c),r=(n(22),n(3)),i=n(6),u=n.n(i),s=n(4),m=n.n(s),d=n(8),p=function(e){var t,n=e||{},a=n.onClick,c=n.disabled,l=n.outline,r=void 0!==l&&l,i=n.link,u=n.children,s=n.title,p=void 0===s?"":s,k=n.color,f=void 0===k?"primary":k,v=n.icon,_=void 0!==v&&v,b=n.circle,E=void 0!==b&&b;return o.a.createElement("button",{onClick:a,disabled:c,title:p,className:"".concat(m.a.btn," ").concat(f?m.a["btn".concat((t=f,t.charAt(0).toUpperCase()+t.slice(1)))]:""," ").concat(r?m.a.btnOutline:"","  ").concat(i?m.a.btnLink:""," ").concat(E?m.a.circle:"")},_&&o.a.createElement(d.a,{icon:_}),u)},k=n(2),f=n(11),v=n(9),_=n(13),b=o.a.createContext([{},function(){}]),E=function(e){var t=Object(a.useState)(JSON.parse(localStorage.getItem("tasks"))||[]),n=Object(r.a)(t,2),c=n[0],l=n[1];Object(a.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(c))}),[c]);return o.a.createElement(b.Provider,{value:[c,{setState:l,remove:function(e){l(Object(_.a)(c.filter((function(t){return t.id!==e}))))},complete:function(e){var t=Date.now(),n=c.map((function(n){return n.id===e&&(n.completed=n.completed?null:t),n}));l(n)},addTask:function(e){var t=Date.now(),n={title:"Nov\xfd \xfakol",created:t,id:t};l([].concat(Object(_.a)(c),[n]))},save:function(e,t){var n=c.map((function(n){return n.id===e&&(n.title=t||"-- \xfakol bez n\xe1zvu :/ --",n.saved=!0),n}));l(n)}}]},e.children)};k.b.add(v.b,f.b,f.a);var h=function(e){var t=Object(a.useState)(!1),n=Object(r.a)(t,2),c=n[0],l=n[1],i=Object(a.useContext)(b)[1],s=e||{},m=s.id,k=s.completed,f=void 0===k?"":k,v=s.created,_=void 0===v?"":v,E=s.title,h=void 0===E?"":E,g=s.saved,j=void 0!==g&&g,O=i||{},C=O.remove,y=void 0===C?function(){}:C,N=O.complete,S=void 0===N?function(){}:N,x=O.save,L=void 0===x?function(){}:x,B=function(){return l(!c)},T=function(e,t){l(!1),L(t,e.target.value)},z=function(e){return e.target.select()},w=function(e){var t=e.editable,n=o.a.createElement("input",{type:"text",className:"form-control",name:"newTitle",defaultValue:h,onBlur:function(e){return T(e,m)},onKeyUp:function(e){return function(e,t){var n=e.keyCode;13===n&&T(e,t),27===n&&l(!1)}(e,m)},onFocus:z,autoFocus:!0}),a=f?new Date(f):"",c=f?", Ukon\u010den: ".concat(a.toLocaleString()):"",r=new Date(_),i="Vytvo\u0159en: ".concat(r.toLocaleString()," ").concat(c," - Kliknut\xedm upravte text ");return t||!j?n:o.a.createElement("span",{title:i,onClick:B,className:"".concat(f?u.a.taskCompleted:""," ").concat(u.a.pointer)},h)};return o.a.createElement("li",{className:u.a.taskItem},o.a.createElement("span",null,o.a.createElement(p,{link:!0,onClick:function(){return S(m)},title:f?"Zru\u0161it ozna\u010den\xed hotov\xe9ho \xfakolu":"Ozna\u010dit jako hotov\xfd"},o.a.createElement(d.a,{color:f?"#007022":"",size:"lg",icon:["far",f?"check-circle":"circle"]}))," ",o.a.createElement(w,{editable:c}))," ",o.a.createElement("span",{className:u.a.remove},o.a.createElement(p,{title:"Smazat",link:!0,onClick:function(){return y(m)},icon:"times"})))},g=n(12),j=n.n(g);k.b.add(v.a);var O=function(){var e=Object(a.useState)(),t=Object(r.a)(e,2),n=t[0],c=t[1],l=Object(a.useContext)(b),i=Object(r.a)(l,2),u=i[0],s=(i[1]||{}).addTask,m=n?u.filter((function(e){return e.title.toLowerCase().includes(n.toLowerCase())})):u,d=m.length,k=m.length>0?m.map((function(e){return o.a.createElement(h,Object.assign({},e,{key:e.id}))})):[],f=u.filter((function(e){return!e.completed})),v=f.length>0?"Zb\xfdv\xe1 je\u0161t\u011b ud\u011blat (".concat(f.length,"):"):o.a.createElement(o.a.Fragment,null,"V\u0161echno hotovo, ",o.a.createElement("strong",null,"gratulki!"));return o.a.createElement(o.a.Fragment,null,o.a.createElement("h3",null,"Seznam \xfakol\u016f",d>0&&o.a.createElement("span",null," (",d,")"),o.a.createElement("span",{className:j.a.addButton},o.a.createElement(p,{color:"primary",circle:!0,onClick:s,icon:"plus",title:"P\u0159idat \xfakol"}))),u.length>0&&o.a.createElement("input",{type:"text",name:"search",value:n||"",placeholder:"Hledat \xfakol\u2026",className:"form-control",onChange:function(e){return c(e.target.value)},onKeyUp:function(e){27===e.keyCode&&c("")},title:"Vyhled\xe1vejte/filtrujte \xfakoly dle n\xe1zvu. Stisknut\xedm Esc se filtr zru\u0161\xed."}),o.a.createElement("p",null,d>0&&v),o.a.createElement("div",null,m.length<1&&o.a.createElement("p",null,o.a.createElement("em",null,"-- Nena\u0161el jsem \u017e\xe1dn\xfd \xfakol --")),o.a.createElement("ul",{className:j.a.taskList},k)))},C=n(16),y=n.n(C),N=function(){return o.a.createElement("div",{className:y.a.app},o.a.createElement(E,null,o.a.createElement(O,null)))};l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(N,null)),document.getElementById("root"))},4:function(e,t,n){e.exports={btn:"Button_btn__1PDgW",btnPrimary:"Button_btnPrimary__1cusH",btnOutline:"Button_btnOutline__1B0Zy",btnLink:"Button_btnLink__xQmtj",circle:"Button_circle__25JQl"}},6:function(e,t,n){e.exports={taskItem:"Task_taskItem__2tj_t",remove:"Task_remove__5DzNr",taskCompleted:"Task_taskCompleted__3bA8R",pointer:"Task_pointer__19i2T",highlight:"Task_highlight__1jEt-"}}},[[17,1,2]]]);
//# sourceMappingURL=main.ee342fbc.chunk.js.map