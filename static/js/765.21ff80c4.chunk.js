"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[765],{315:function(n,t,e){e.d(t,{Hg:function(){return o},Jh:function(){return l},TP:function(){return f},z1:function(){return s},zv:function(){return p}});var r=e(861),a=e(757),u=e.n(a),c=e(294),i="bfdf79a3b0a0d7433b01ecad8f8e238d";c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o=function(){var n=(0,r.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/day?api_key=".concat(i));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?api_key=".concat(i,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},765:function(n,t,e){e.r(t);var r=e(439),a=e(791),u=e(689),c=e(746),i=e(315),o=e(143),s=e(184);t.default=function(){var n=(0,a.useState)([]),t=(0,r.Z)(n,2),e=t[0],f=t[1],p=(0,u.TH)(),l=(0,a.useState)(!1),d=(0,r.Z)(l,2),v=d[0],h=d[1];return(0,a.useEffect)((function(){h(!0),(0,i.Hg)().then((function(n){f(n.results),h(!1)}))}),[]),(0,s.jsxs)(c.tz,{children:[(0,s.jsx)(c.Dx,{children:"Top Movies for today"}),(0,s.jsxs)(c.eW,{children:[e.map((function(n){return(0,s.jsx)("li",{children:(0,s.jsx)(c.up,{to:"/movies/".concat(n.id),state:{from:p},children:n.original_title||n.name})},n.id)})),v&&(0,s.jsx)(o.a,{})]})]})}},746:function(n,t,e){e.d(t,{Dx:function(){return d},eW:function(){return l},tz:function(){return f},up:function(){return p}});var r,a,u,c,i=e(168),o=e(87),s=e(924),f=s.ZP.main(r||(r=(0,i.Z)(["\n  width: 95%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),p=(0,s.ZP)(o.rU)(a||(a=(0,i.Z)(["\n  text-decoration: none;\n  padding: 8px;\n  color: black;\n  \n\n  &:hover {\n    color: blue;\n  }\n"]))),l=s.ZP.ul(u||(u=(0,i.Z)(["\n  list-style: none;\n  padding-left: none;\n  display: flex;\n  flex-direction: column;\n  width: 600px;\n  align-items: flex-start;\n  font-size: 20px;\n"]))),d=s.ZP.h2(c||(c=(0,i.Z)(["\n  width: 100%;\n  text-align: center;\n  font-size: 50px;\n"])))}}]);
//# sourceMappingURL=765.21ff80c4.chunk.js.map