"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[953],{7953:function(n,t,r){r.r(t),r.d(t,{default:function(){return l}});var e,a=r(9439),u=r(6230),i=r(2791),c=r(7689),o=r(1087),s=r(4390),p=r(168),f=r(5867).ZP.div(e||(e=(0,p.Z)(["\n  padding: 5px 10px;\n  transition: all 0.3s ease;\n  max-width: 700px;\n  background-color: rgba(255, 255, 255, 0.4);\n  border-radius: 10px;\n  width: 100%;\n  margin: 0 auto;\n  @media screen and (min-width: 768.98px) {\n    max-width: 1000px;\n  }\n\n  h1 {\n    font-size: 20px;\n  }\n  ol {\n    margin-top: 10px;\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n\n    li {\n      a {\n        font-size: 16px;\n        color: black;\n        text-decoration: none;\n        &:hover,\n        &:focus {\n          color: white;\n          text-shadow: 0px 0px 5px white;\n        }\n      }\n    }\n  }\n"]))),d=r(184),l=function(){var n=(0,i.useState)(null),t=(0,a.Z)(n,2),r=t[0],e=t[1],p=(0,i.useState)(""),l=(0,a.Z)(p,1)[0],v=(0,c.TH)();return(0,i.useEffect)((function(){(0,s.vw)().then((function(n){e(n.results)})).catch((function(n){l(n.message)}))}),[l]),(0,d.jsxs)(f,{children:[(0,d.jsx)("h1",{children:"Trending today:"}),r?(0,d.jsx)("ol",{children:null===r||void 0===r?void 0:r.map((function(n){var t,r;return(0,d.jsx)("li",{children:(0,d.jsx)(o.rU,{state:{from:v},to:"/movies/".concat(null===n||void 0===n?void 0:n.id),children:null!==(t=null!==(r=n.original_title)&&void 0!==r?r:n.title)&&void 0!==t?t:n.name})},n.id)}))}):(0,d.jsx)(u.Z,{})]})}},4390:function(n,t,r){r.d(t,{Hx:function(){return d},Mc:function(){return p},mv:function(){return l},uV:function(){return f},vw:function(){return s}});var e=r(8683),a=r(5861),u=r(7757),i=r.n(u),c=r(1243);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var o="13f507f7afd2e84a62cca8b12f55dea4",s=function(){var n=(0,a.Z)(i().mark((function n(t){var r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/all/day",{params:(0,e.Z)((0,e.Z)({},t),{},{api_key:o})});case 2:return r=n.sent,a=r.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,a.Z)(i().mark((function n(t){var r,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t),{params:{api_key:o}});case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,a.Z)(i().mark((function n(t){var r,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/credits"),{params:{api_key:o}});case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,a.Z)(i().mark((function n(t){var r,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/reviews"),{params:{api_key:o}});case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,a.Z)(i().mark((function n(t,r){var a,u;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie",{params:(0,e.Z)((0,e.Z)({query:t},r),{},{api_key:o})});case 2:return a=n.sent,u=a.data,n.abrupt("return",u);case 5:case"end":return n.stop()}}),n)})));return function(t,r){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=953.29b69862.chunk.js.map