(this.webpackJsonpmindgame=this.webpackJsonpmindgame||[]).push([[0],{12:function(e,c,t){},13:function(e,c,t){},14:function(e,c,t){},16:function(e,c,t){"use strict";t.r(c);var n=t(1),a=t.n(n),s=t(7),i=t.n(s),r=(t(12),t(2)),j=t(3),d=(t(13),t(14),t(0));var o=function(e){var c=e.text,t=e.onClickHandler,n=e.index,a=e.isVisible,s=e.isMatched;return Object(d.jsxs)("div",{className:"Card ".concat(a?"card-front":"card-back"," ").concat(s?"card-matched":" "," "),onClick:function(){return t(c,n)},children:[Object(d.jsx)("div",{className:"backFace"}),Object(d.jsx)("div",{className:"frontFace",children:c})]})};var l=function(){function e(){var e=["A","B","C","D","E","F","G","H"];return e=[].concat(Object(j.a)(e),Object(j.a)(e)),e.sort((function(){return Math.random()-.5}))}function c(e,c){console.log(e,c,u,m),c==m||A.includes(c)||(F([].concat(Object(j.a)(B),[c])),setTimeout((function(){if(u){if(e==s[m]){var t=Object(j.a)(s);t[c]="",t[m]="",console.log(t),i(t),x(-1),O(!1),M(C+1),D([].concat(Object(j.a)(A),[c,m]))}else O(!1),x(-1);F([])}else O(!0),x(c)}),300),S(N+1))}var t=Object(n.useState)(e()),a=Object(r.a)(t,2),s=a[0],i=a[1],l=Object(n.useState)(!1),b=Object(r.a)(l,2),u=b[0],O=b[1],h=Object(n.useState)(-1),f=Object(r.a)(h,2),m=f[0],x=f[1],v=Object(n.useState)(0),p=Object(r.a)(v,2),N=p[0],S=p[1],k=Object(n.useState)(0),g=Object(r.a)(k,2),C=g[0],M=g[1],w=Object(n.useState)([]),E=Object(r.a)(w,2),B=E[0],F=E[1],H=Object(n.useState)([]),V=Object(r.a)(H,2),A=V[0],D=V[1];return console.log(e()),Object(n.useEffect)((function(){window.addEventListener("beforeunload",(function(e){e.preventDefault(),e.returnValue=""}))}),[]),Object(d.jsxs)("div",{className:"App",children:[Object(d.jsxs)("div",{className:"left-section",children:[Object(d.jsxs)("div",{className:"matches",children:[Object(d.jsx)("h3",{children:"Matches"}),Object(d.jsx)("p",{children:C})]}),Object(d.jsxs)("div",{className:"menu",children:[Object(d.jsx)("h3",{children:"Turns"}),Object(d.jsx)("p",{children:N})]})]}),Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"Board",children:s.map((function(e,t){return Object(d.jsx)(o,{text:e,onClickHandler:c,index:t,isVisible:B.includes(t),isMatched:A.includes(t)},t)}))})})]})};i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(l,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.14cacd9b.chunk.js.map