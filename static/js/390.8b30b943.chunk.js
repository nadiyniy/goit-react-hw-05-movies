"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[390],{726:function(n,t,e){e.r(t);var r,a=e(168),u=e(439),i=e(791),c=e(881),s=e(689),o=e(390),p=e(867),f=e(184),d=p.ZP.ul(r||(r=(0,a.Z)(["\n  display: flex;\n  overflow: auto;\n  gap: 10px;\n  & li {\n    & img {\n      max-width: 100px;\n      height: 150px;\n      object-fit: cover;\n      border-radius: 10px;\n      border: 1px solid black;\n      box-shadow: 2px 2px 5px 1px black;\n    }\n    & h3 {\n      margin-top: 10px;\n      font-size: 14px;\n    }\n    & p {\n      font-size: 14px;\n    }\n  }\n"])));t.default=function(){var n=(0,s.UO)().id,t=(0,i.useState)(null),e=(0,u.Z)(t,2),r=e[0],a=e[1];return(0,i.useEffect)((function(){(0,o.uV)(n).then((function(n){a(n.cast)}))}),[n]),r?(0,f.jsx)(d,{children:r.map((function(n){return(0,f.jsxs)("li",{children:[(0,f.jsx)("img",{width:100,height:100,loading:"lazy",src:n.profile_path?"https://image.tmdb.org/t/p/w500".concat(n.profile_path):"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQju-zj4n6hRiWsnJfgNALcjvXBuMuUtPQP7FIskz9LhOnrogjzZSdSbkirqmngfDeMHd4&usqp=CAU",alt:n.name}),(0,f.jsx)("h3",{children:n.name}),(0,f.jsx)("p",{children:n.character})]},n.id)}))}):(0,f.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,f.jsx)(c.Rf,{color:"#929292",width:"100",visible:!0,ariaLabel:"falling-lines-loading"})})}},390:function(n,t,e){e.d(t,{Hx:function(){return d},Mc:function(){return p},mv:function(){return l},uV:function(){return f},vw:function(){return o}});var r=e(683),a=e(861),u=e(757),i=e.n(u),c=e(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var s="13f507f7afd2e84a62cca8b12f55dea4",o=function(){var n=(0,a.Z)(i().mark((function n(t){var e,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/all/day",{params:(0,r.Z)((0,r.Z)({},t),{},{api_key:s})});case 2:return e=n.sent,a=e.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,a.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t),{params:{api_key:s}});case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,a.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/credits"),{params:{api_key:s}});case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,a.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/reviews"),{params:{api_key:s}});case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,a.Z)(i().mark((function n(t,e){var a,u;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie",{params:(0,r.Z)((0,r.Z)({query:t},e),{},{api_key:s})});case 2:return a=n.sent,u=a.data,n.abrupt("return",u);case 5:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=390.8b30b943.chunk.js.map