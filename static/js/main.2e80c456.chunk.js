(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{10:function(e,c,a){},12:function(e,c,a){"use strict";a.r(c);var t=a(5),n=a.n(t),i=a(4),r=a(1),l=(a(10),a(2)),s=a.n(l),o=a(0),j=function(e){for(var c=e.total,a=e.perPage,t=e.currentPage,n=void 0===t?1:t,i=e.onPageChanger,r=Math.ceil(c/a),l=[],j=1;j<=r;j++)l.push(j);var d=1===n,h=n===l.length;return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("ul",{className:"pagination",children:[Object(o.jsx)("li",{className:s()("page-item",{disabled:d}),children:Object(o.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":d,onClick:function(){n>1&&i(n-1)},children:"\xab"})}),l.map((function(e){return Object(o.jsx)("li",{className:s()("page-item",{active:n===e}),children:Object(o.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),onClick:function(){return i(e)},children:e})},e)})),Object(o.jsx)("li",{className:s()("page-item",{disabled:h}),children:Object(o.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":h,onClick:function(){n<l.length&&i(n+1)},children:"\xbb"})})]})})};var d=function(e,c){for(var a=[],t=e;t<=c;t+=1)a.push(t);return a}(1,42).map((function(e){return"Item ".concat(e)})),h=function(){var e=Object(r.useState)(5),c=Object(i.a)(e,2),a=c[0],t=c[1],n=Object(r.useState)(1),l=Object(i.a)(n,2),s=l[0],h=l[1],u=a*s,b=u-a,p=d.slice(b,u),g=p[0].slice(-2).trim(),m=p[p.length-1].slice(-2).trim();return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h1",{children:"Items with Pagination"}),Object(o.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(s," (items ").concat(g," - ").concat(m," of ").concat(d.length,")")}),Object(o.jsxs)("div",{className:"form-group row",children:[Object(o.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(o.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",value:a,onChange:function(e){t(+e.target.value),h(1)},children:[Object(o.jsx)("option",{value:"3",children:"3"}),Object(o.jsx)("option",{value:"5",children:"5"}),Object(o.jsx)("option",{value:"10",children:"10"}),Object(o.jsx)("option",{value:"20",children:"20"})]})}),Object(o.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(o.jsx)(j,{total:d.length,perPage:a,currentPage:s,onPageChanger:function(e){return h(e)}}),Object(o.jsx)("ul",{children:p.map((function(e){return Object(o.jsx)("li",{"data-cy":"item",children:e},e)}))})]})};n.a.render(Object(o.jsx)(h,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.2e80c456.chunk.js.map