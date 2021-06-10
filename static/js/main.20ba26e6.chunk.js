(this["webpackJsonpexpense-tracker"]=this["webpackJsonpexpense-tracker"]||[]).push([[0],{34:function(n,e,t){"use strict";t.r(e);var r=t(2),c=t(15),o=t.n(c),i=t(3),a=t(1);var s=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("h2",{children:"Expense Tracker"})})},l=t(21),d=t(6),u=function(n,e){switch(e.type){case"ADD_TRANS":return Object(d.a)(Object(d.a)({},n),{},{transactions:[].concat(Object(l.a)(n.transactions),[e.payload])});case"DEL_TRANS":return Object(d.a)(Object(d.a)({},n),{},{transactions:n.transactions.filter((function(n){return n.id!==e.payload}))});default:return n}},x={transactions:[]},b=Object(r.createContext)(x),p=function(n){var e=n.children,t=Object(r.useReducer)(u,x,(function(){var n=localStorage.getItem("transactions");return n?JSON.parse(n):x})),c=Object(i.a)(t,2),o=c[0],s=c[1];return Object(r.useEffect)((function(){localStorage.setItem("transactions",JSON.stringify(o))}),[o]),Object(a.jsx)(b.Provider,{value:{transactions:o.transactions,deleteTransaction:function(n){s({type:"DEL_TRANS",payload:n})},addTransaction:function(n){s({type:"ADD_TRANS",payload:n})}},children:e})};var j=function(){var n=Object(r.useContext)(b).transactions.map((function(n){return n.amount})).reduce((function(n,e){return n+e}),0).toFixed(2);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h4",{children:"Your Balance"}),Object(a.jsxs)("h1",{id:"balance",children:["\u20b9",n]})]})};var f=function(){var n=Object(r.useContext)(b).transactions.map((function(n){return n.amount})),e=n.filter((function(n){return n>0})).reduce((function(n,e){return n+e}),0).toFixed(2),t=n.filter((function(n){return n<0})).reduce((function(n,e){return n-e}),0)*-1..toFixed(2);return Object(a.jsxs)("div",{className:"inc-exp-container",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("h4",{children:"Income"}),Object(a.jsxs)("p",{id:"money-plus",className:"money plus",children:["\u20b9",e]})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h4",{children:"Expense"}),Object(a.jsxs)("p",{id:"money-minus",className:"money minus",children:["\u20b9",t]})]})]})};var h=function(n){var e=n.transaction,t=Object(r.useContext)(b).deleteTransaction,c=e.amount<0?"-":"+";return Object(a.jsxs)("li",{className:"+"===c?"plus":"minus",children:[e.text," ",Object(a.jsxs)("span",{children:[c,"\u20b9",Math.abs(e.amount)]}),Object(a.jsx)("button",{className:"delete-btn",onClick:function(){return t(e.id)},children:"x"})]})};t(27);var m=function(){var n=Object(r.useContext)(b).transactions;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h3",{children:"History"}),Object(a.jsx)("ul",{id:"list",className:"list",children:n.map((function(n){return Object(a.jsx)(h,{transaction:n},n.id)}))})]})};var O,g=function(){var n=Object(r.useState)(""),e=Object(i.a)(n,2),t=e[0],c=e[1],o=Object(r.useState)(""),s=Object(i.a)(o,2),l=s[0],d=s[1],u=Object(r.useContext)(b).addTransaction;return Object(r.useEffect)((function(){JSON.parse(localStorage.getItem("newTransaction"))}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h3",{children:"Add New Transaction"}),Object(a.jsxs)("form",{onSubmit:function(n){n.preventDefault();var e={id:Math.floor(1e6*Math.random()),text:t,amount:parseFloat(l)};u(e)},children:[Object(a.jsxs)("div",{className:"form-control",children:[Object(a.jsx)("label",{children:Object(a.jsx)("strong",{children:"Text"})}),Object(a.jsx)("input",{type:"text",placeholder:"Enter Text...",value:t,onChange:function(n){return c(n.target.value)},required:!0})]}),Object(a.jsxs)("div",{className:"form-control",children:[Object(a.jsxs)("label",{children:[Object(a.jsx)("strong",{children:"Amount"}),Object(a.jsx)("br",{}),"(",Object(a.jsx)("span",{style:{color:"#ec1a04"},children:"Negative - Expense"}),", ",Object(a.jsx)("span",{style:{color:"#2ecc71"},children:"Positive - Income"}),")"]}),Object(a.jsx)("input",{type:"number",step:"any",id:"amount",placeholder:"Enter Amount...",value:l,onChange:function(n){return d(n.target.value)},required:!0})]}),Object(a.jsx)("button",{className:"btn",children:"Add Transaction"})]})]})},y=t(16),v=t(4),w=Object(v.b)(O||(O=Object(y.a)(["\n@import url('https://fonts.googleapis.com/css?family=Lato&display=swap');\n\n:root {\n  --box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n}\n\n* {\n  box-sizing: border-box;\n  transition: all 0.1s ease;\n}\n\nbody {\n  background-color: ",";\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  margin: 0;\n  font-family: 'Lato', sans-serif;\n  transition: all 0.5s ease;\n  color: ",";\n}\n\n.container {\n  margin: 30px auto;\n  width: 350px;\n}\n\nh1 {\n  letter-spacing: 1px;\n  margin: 0;\n}\n\nh3 {\n  border-bottom: 1px solid #bbb;\n  padding-bottom: 10px;\n  margin: 40px 0 10px;\n}\n\nh4 {\n  margin: 0;\n  text-transform: uppercase;\n}\n\n.inc-exp-container {\n  background-color: ",";\n  box-shadow: "," ;\n  padding: 20px;\n  display: flex;\n  justify-content: space-between;\n  margin: 20px 0;\n  border-radius: 5px;\n}\n\n.inc-exp-container > div {\n  flex: 1;\n  text-align: center;\n}\n\n.inc-exp-container > div:first-of-type {\n  border-right: 1px solid #dedede;\n}\n\n.money {\n  font-size: 20px;\n  letter-spacing: 1px;\n  margin: 5px 0;\n}\n\n.money.plus {\n  color: #2ecc71;\n}\n\n.money.minus {\n  color: #ec1a04;\n}\n\nlabel {\n  display: inline-block;\n  margin: 10px 0;\n}\n\ninput[type='text'],\ninput[type='number'] {\n  border: 1px solid #9f9e9a;\n  border-radius: 2px;\n  display: block;\n  font-size: 16px;\n  padding: 10px;\n  width: 100%;\n  background-color: "," !important;\n  border-radius: 5px;\n}\ninput[type='text'],\ninput[type='number'] : focus {\n  color: ",";\n}\n\n.btn {\n  cursor: pointer;\n  background-color: ",";\n  box-shadow: var(--box-shadow);\n  color: #fff;\n  border: 0;\n  display: block;\n  font-size: 16px;\n  margin: 10px 0 30px;\n  padding: 10px;\n  width: 100%;\n  border-radius: 5px\n}\n\n.btn:focus,\n.delete-btn:focus {\n  outline: 0;\n}\n\n.list {\n  list-style-type: none;\n  padding: 0;\n  margin-bottom: 40px;\n}\n\n.list li {\n  background-color: ",";\n  box-shadow: var(--box-shadow);\n  color: ",";\n  display: flex;\n  justify-content: space-between;\n  position: relative;\n  padding: 10px;\n  margin: 10px 0;\n  border-radius: 5px;\n}\n\n.list li.plus {\n  border-right: 5px solid #2ecc71;\n}\n\n.list li.minus {\n  border-right: 5px solid #ec1a04;\n}\n\n.delete-btn {\n  cursor: pointer;\n  background-color: #e74c3c;\n  border: 0;\n  color: #fff;\n  font-size: 20px;\n  line-height: 20px;\n  padding: 2px 5px;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  transform: translate(-100%, -50%);\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n\n.list li:hover .delete-btn {\n  opacity: 1;\n}\n.icon-btn {\n    float: right;\n    position: relative;\n    top: 20px;\n    cursor: pointer;\n    transition: all 0.2s ease;\n}\n"])),(function(n){return n.theme.body}),(function(n){return n.theme.text}),(function(n){return n.theme.incExpBox}),(function(n){return n.theme.boxShadow}),(function(n){return n.theme.inputBody}),(function(n){return n.theme.text}),(function(n){return n.theme.btnColor}),(function(n){return n.theme.incExpBox}),(function(n){return n.theme.incExpText})),N={body:"#fff",text:"#121212",incExpBox:"rgb(245, 245, 245)",incExpText:"#121212",btnColor:"#003cff",inputBody:"#fff",boxShadow:"0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);"},k={body:"#121212",text:"#fff",incExpBox:"#212121",incExpText:"#fff",btnColor:"#3050ff",inputBody:"#212121",boxShadow:"0 1px 3px rgba(255, 255, 255, 0.12), 0 1px 2px rgba(255, 255, 255, 0.24);"};var T=function(){var n=Object(r.useState)("dark"),e=Object(i.a)(n,2),t=e[0],c=e[1];return[t,function(){c("dark"===t?"light":"dark")}]},E=t(9),S=t(20),C=t(0);var A=function(n){var e=n.theme,t=n.toggleTheme;return Object(a.jsx)(C.b.Provider,{value:{className:"icon-btn"},children:Object(a.jsx)("div",{onClick:t,children:"light"===e?Object(a.jsx)(E.b,{size:30}):Object(a.jsx)(S.a,{size:30})})})};var B=function(){return Object(a.jsx)("div",{children:Object(a.jsxs)("h5",{style:{textAlign:"center"},children:["Made with\xa0 ",Object(a.jsx)(E.a,{})," \xa0by Ketul"]})})};var F=function(){var n=T(),e=Object(i.a)(n,2),t=e[0],r=e[1],c="light"===t?N:k;return Object(a.jsx)(v.a,{theme:c,children:Object(a.jsxs)(p,{children:[Object(a.jsx)(w,{}),Object(a.jsx)(A,{theme:t,toggleTheme:r}),Object(a.jsx)(s,{}),Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(j,{}),Object(a.jsx)(f,{}),Object(a.jsx)(m,{}),Object(a.jsx)(g,{})]}),Object(a.jsx)(B,{})]})})};o.a.render(Object(a.jsx)(F,{}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.20ba26e6.chunk.js.map