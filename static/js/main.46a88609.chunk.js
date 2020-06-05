(this["webpackJsonpa-todo"]=this["webpackJsonpa-todo"]||[]).push([[0],[,,,,,function(e,t,n){e.exports={toDoListModule:"TaskList_toDoListModule__2N2pZ",taskList:"TaskList_taskList__2tkvE",toDoListHeader:"TaskList_toDoListHeader__aSy2J",addButton:"TaskList_addButton__3Loh7",searchButton:"TaskList_searchButton__1Gmad",searchBox:"TaskList_searchBox__3i3dF",closeButton:"TaskList_closeButton__3zFCU"}},,function(e,t,n){e.exports={btn:"Button_btn__1qODl",btnPrimary:"Button_btnPrimary__JX4ld",btnSecondary:"Button_btnSecondary__2hW3p",btnDark:"Button_btnDark__1v_PM",btnOutline:"Button_btnOutline__1fhyF",btnLink:"Button_btnLink__1tfto",circle:"Button_circle__FDTgb",activeButton:"Button_activeButton__1C0A9"}},,,,,function(e,t,n){e.exports={primary:"#045bbe",taskItem:"Task_taskItem__2yqp7",remove:"Task_remove__1DEoB",taskCompleted:"Task_taskCompleted__3wkCO",pointer:"Task_pointer__2cEif",highlight:"Task_highlight__lgmZq"}},,function(e,t,n){e.exports={primary:"#045bbe",taskCompleted:"EditableOnClick_taskCompleted__2ePk0",pointer:"EditableOnClick_pointer__hT0rj"}},function(e,t,n){e.exports={filters:"Filters_filters__3pO4f",filterBadge:"Filters_filterBadge__3Lt8z"}},function(e,t,n){e.exports={progressBarContainer:"Progress_progressBarContainer__1ZEpK",progressBar:"Progress_progressBar__2hvSJ"}},function(e,t,n){e.exports={toDoLists:"ToDoLists_toDoLists__2XzL3",addToDoList:"ToDoLists_addToDoList__2THlu"}},,,function(e,t,n){e.exports={buttonGroup:"ButtonGroup_buttonGroup__1xJqc"}},function(e,t,n){e.exports={app:"App_app__1jdVP"}},function(e,t,n){e.exports=n(33)},,,,,function(e,t,n){},,,,,,function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(19),c=n.n(r),i=(n(27),n(6)),l=n(2),s=o.a.createContext([{},function(){}]),u=function(e){var t=Object(a.useState)(function(e){var t=null;return e&&(t=JSON.parse(localStorage.getItem(e))),t}("toDoLists")||[]),n=Object(l.a)(t,2),r=n[0],c=n[1],u=function(e){return r.findIndex((function(t){return t.id===e}))};return Object(a.useEffect)((function(){localStorage.setItem("toDoLists",JSON.stringify(r))}),[r]),o.a.createElement(s.Provider,{value:[r,{remove:function(e,t){var n=u(t),a=r[n].tasks.filter((function(t){return t.id!==e}));r[n].tasks=a,c(Object(i.a)(r))},complete:function(e,t){var n=Date.now(),a=u(t),o=r[a].tasks.map((function(t){return t.id===e&&(t.completed=t.completed?null:n),t}));r[a].tasks=o,c(Object(i.a)(r))},addTask:function(e){var t=Date.now(),n={title:"New Task",created:t,id:t};r.find((function(t){return t.id===e})).tasks.push(n),c(Object(i.a)(r))},save:function(e,t,n){var a=u(n),o=r[a].tasks.map((function(n){return n.id===e&&(n.title=t||"-- no-name task :/ --",n.saved=!0),n}));r[a].tasks=o,c(Object(i.a)(r))},addToDoList:function(e){var t=Date.now(),n={title:e&&e.target.value?e.target.value:"New to-do list",created:t,id:t,tasks:[]};c([].concat(Object(i.a)(r),[n]))},removeToDoList:function(e){c(Object(i.a)(r.filter((function(t){return t.id!==e}))))},updateToDoListTitle:function(e,t){var n=u(e);r[n].title=t,r[n].saved=!0,c(Object(i.a)(r))}}]},e.children)},d=n(12),m=n.n(d),f=n(7),v=n.n(f),p=n(8),_=function(e){var t,n=e||{},a=n.onClick,r=n.disabled,c=n.outline,i=void 0!==c&&c,l=n.link,s=n.children,u=n.title,d=void 0===u?"":u,m=n.color,f=void 0===m?"primary":m,_=n.icon,k=void 0!==_&&_,b=n.circle,E=void 0!==b&&b,L=n.active,C=void 0!==L&&L,h=n.className,g=void 0===h?"":h;return o.a.createElement("button",{onClick:a,disabled:r,title:d,className:"\n            ".concat(v.a.btn," \n            ").concat(f?v.a["btn".concat((t=f,t.charAt(0).toUpperCase()+t.slice(1)))]:""," \n            ").concat(i?v.a.btnOutline:"","  \n            ").concat(l?v.a.btnLink:""," \n            ").concat(E?v.a.circle:"","\n            ").concat(g,"\n            ").concat(C?v.a.activeButton:"","\n         ")},k&&o.a.createElement(p.a,{icon:k}),s)},k=n(14),b=n.n(k),E=function(e){var t=e||{},n=t.id,a=t.completed,r=void 0===a?"":a,c=t.created,i=void 0===c?"":c,l=t.title,s=void 0===l?"":l,u=t.saved,d=void 0!==u&&u,m=t.editable,f=void 0!==m&&m,v=t.handlers,p=void 0===v?{}:v,_=p.doSave,k=void 0===_?function(){}:_,E=p.remove,L=void 0===E?function(){}:E,C=p.setEditable,h=void 0===C?function(){}:C,g=o.a.createElement("input",{type:"text",className:"form-control",name:"newTitle",defaultValue:s,onBlur:function(e){return k(e,n)},onKeyUp:function(e){return function(e,t){var n=e.keyCode;13===n&&k(e,t),27===n&&(d?h(!1):L(t))}(e,n)},onFocus:function(e){return e.target.select()},autoFocus:!0}),O=r?new Date(r):"",D=r?", Completed: ".concat(O.toLocaleString()):"",T=new Date(i),B="Created: ".concat(T.toLocaleString()," ").concat(D," - Click to edit ");return f||!d?g:o.a.createElement("span",{title:B,onClick:function(){return h(!f)},className:"".concat(r?b.a.taskCompleted:""," ").concat(b.a.pointer)},s)},L=n(3),C=n(9),h=n(4);L.b.add(h.d,C.b,C.a);var g=function(e){var t=Object(a.useState)(!1),n=Object(l.a)(t,2),r=n[0],c=n[1],i=Object(a.useContext)(s)[1],u=e||{},d=u.id,f=u.completed,v=void 0===f?"":f,k=u.toDoListId,b=void 0===k?null:k,L=i||{},C=L.remove,h=void 0===C?function(){}:C,g=L.complete,O=void 0===g?function(){}:g,D=L.save,T=void 0===D?function(){}:D;return o.a.createElement("li",{className:m.a.taskItem},o.a.createElement("span",null,o.a.createElement(_,{link:!0,onClick:function(){return O(d,b)},title:v?"Mark incompleted":"Mark completed"},o.a.createElement(p.a,{color:v?m.a.primary:"",size:"lg",icon:["far",v?"check-circle":"circle"]}))," ",o.a.createElement(E,Object.assign({editable:r,handlers:{remove:h,doSave:function(e,t){c(!1),T(t,e.target.value,b)},setEditable:c}},e)))," ",o.a.createElement("span",{className:m.a.remove},o.a.createElement(_,{title:"Delete",link:!0,onClick:function(){return h(d,b)},icon:"times"})))},O=n(20),D=n.n(O),T=function(e){return o.a.createElement("div",{className:D.a.buttonGroup},e.children)},B=n(15),y=n.n(B),j=function(e){var t=function(e){var t=e.value,n=e.color;return o.a.createElement("span",{className:y.a.filterBadge,style:{backgroundColor:n||""}},t)},n=Object(a.useContext)(s)[0],r=e.filters||{},c=Object(l.a)(r,2),i=c[0],u=c[1],d=n.find((function(t){return t.id===e.id})).tasks.filter((function(e){return!e.completed}));return o.a.createElement("div",{className:y.a.filters},o.a.createElement(T,null,o.a.createElement(_,{active:"ALL"===i,outline:!0,color:"ALL"===i?"dark":"secondary",onClick:function(){return u("ALL")}},"All tasks"),o.a.createElement(_,{active:"ACTIVE"===i,outline:!0,color:"ACTIVE"===i?"dark":"secondary",onClick:function(){return u("ACTIVE")}},"Active ",o.a.createElement(t,{value:d.length})),o.a.createElement(_,{active:"COMPLETED"===i,outline:!0,color:"COMPLETED"===i?"dark":"secondary",onClick:function(){return u("COMPLETED")}},"Completed")))},N=n(16),x=n.n(N);L.b.add(h.d,C.b,C.a);var S=function(e){var t=Object(a.useContext)(s)[0];if(t.length>0){var n=t.find((function(t){return t.id===e.id})).tasks,r=100*n.filter((function(e){return e.completed})).length/n.length,c={width:"".concat(r,"%"),backgroundColor:"hsl(".concat(1*r,", 60%, 45%)")};return o.a.createElement("div",{className:"text-center"},o.a.createElement("h5",{className:"m-0 text-muted"},r.toLocaleString(void 0,{maximumFractionDigits:1})," % completed"),o.a.createElement("div",{className:x.a.progressBarContainer},o.a.createElement("div",{className:x.a.progressBar,style:c})))}return""},w=n(5),A=n.n(w);L.b.add(h.a,h.b,h.c);var I=function(e){var t=Object(a.useState)(),n=Object(l.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(),u=Object(l.a)(i,2),d=u[0],m=u[1],f=Object(a.useState)("ALL"),v=Object(l.a)(f,2),k=v[0],b=v[1],L=Object(a.useContext)(s),C=Object(l.a)(L,2),h=C[0],O=C[1],D=h.find((function(t){return t.id===e.id})),T=D.tasks,B=O||{},y=B.addTask,N=B.updateToDoListTitle,x=function(e,t){var n=[];switch(e){case"ALL":n=t;break;case"ACTIVE":n=t.filter((function(e){return!e.completed}));break;case"COMPLETED":n=t.filter((function(e){return e.completed}));break;default:n=t||[]}return n}(k,r?T.filter((function(e){return e.title.toLowerCase().includes(r.toLowerCase())})):T),w=x.length,I=x.length>0?x.map((function(t){return o.a.createElement(g,Object.assign({},t,{key:t.id,toDoListId:e.id}))})):[],P=T.every((function(e){return!e.completed})),M=T.every((function(e){return e.completed})),F=T.filter((function(e){return e.saved})).length;return o.a.createElement("section",{className:A.a.toDoListModule},o.a.createElement(_,{color:"link",icon:"times",className:A.a.closeButton,onClick:function(){return O.removeToDoList(e.id)}}),F>0&&o.a.createElement(S,{id:e.id}),o.a.createElement("header",{className:A.a.toDoListHeader},o.a.createElement("h3",null,o.a.createElement(E,Object.assign({editable:d,handlers:{doSave:function(t){m(!1),N(e.id,t.target.value)},setEditable:m}},D)),w>0&&!d&&o.a.createElement("span",null," (",w,")")),o.a.createElement(_,{color:"primary",circle:!0,onClick:function(){return y(e.id)},icon:"plus",title:"Add task",className:A.a.addButton})),F>1&&o.a.createElement("div",{className:A.a.searchBox},o.a.createElement("input",{type:"text",name:"search",value:r||"",placeholder:"Search tasks\u2026",className:"form-control border-box w-100",onChange:function(e){return c(e.target.value)},onKeyUp:function(e){27===e.keyCode&&c("")},title:"Search/filter tasks by title. Click Esc to remove the filter."}),o.a.createElement(p.a,{icon:"search",color:"silver",className:A.a.searchButton})),F>1&&!M&&!P&&o.a.createElement(j,{id:e.id,filters:[k,function(e){b(e)}]}),o.a.createElement("div",null,x.length<1&&o.a.createElement("p",null,o.a.createElement("em",null,"-- No tasks found --")),o.a.createElement("ul",{className:A.a.taskList},I)))},P=n(17),M=n.n(P),F=function(){return Object(a.useContext)(s)[0].map((function(e){return o.a.createElement(I,{key:e.id,id:e.id})}))},J=function(){var e=Object(a.useContext)(s),t=Object(l.a)(e,2),n=t[0],r=t[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:M.a.addToDoList},o.a.createElement(_,{color:"primary",circle:!0,icon:"plus",onClick:r.addToDoList,title:"Add new todo list"})),o.a.createElement("div",{className:M.a.toDoLists},o.a.createElement(F,null),0===n.length&&o.a.createElement("div",{className:"text-center mx-auto"},o.a.createElement("em",null,"-- No to-do lists yet --"),o.a.createElement("p",null,o.a.createElement(_,{color:"primary",onClick:r.addToDoList}," Create a new one")))))},V=n(21),G=n.n(V),q=function(){return o.a.createElement("div",{className:G.a.app},o.a.createElement(u,null,o.a.createElement(J,null)))};c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(q,null)),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.46a88609.chunk.js.map