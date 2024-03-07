"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[168],{315:function(n,e,t){t.d(e,{Hg:function(){return s},Jh:function(){return p},TP:function(){return d},z1:function(){return u},zv:function(){return l}});var r=t(861),a=t(757),i=t.n(a),o=t(294),c="bfdf79a3b0a0d7433b01ecad8f8e238d";o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s=function(){var n=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("trending/movie/day?api_key=".concat(c));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("search/movie?api_key=".concat(c,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"?api_key=").concat(c,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"/reviews?api_key=").concat(c,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},922:function(n,e,t){t.r(e),t.d(e,{default:function(){return U}});var r,a,i,o,c,s,u,d=t(683),l=t(439),p=t(689),f=t(87),h=t(315),x=t(791),g=t(168),v=t(924),b=v.ZP.h2(r||(r=(0,g.Z)(["\n  margin: 0;\n  color: blue;\n  font-size: 45px;\n"]))),m=v.ZP.div(a||(a=(0,g.Z)(["\n  display: flex;\n  padding: 20px;\n  border-bottom: solid 1px blue;\n"]))),Z=v.ZP.div(i||(i=(0,g.Z)(["\n  padding: 20px 40px;\n"]))),w=v.ZP.ul(o||(o=(0,g.Z)(["\n  list-style: none;\n  display: flex;\n  padding: 0;\n  gap: 20px;\n  color: purple;\n"]))),j=v.ZP.button(c||(c=(0,g.Z)(["\n  margin-top: 16px;\n  padding: 8px 16px;\n  margin-bottom: 10px;\n  border-radius: 8px;\n  font-weight: 500;\n  border: 2px solid blue;\n  &:hover {\n    background-color: blue;\n  }\n"]))),y=(0,v.ZP)(f.rU)(s||(s=(0,g.Z)(["\n  display: block;\n  font-size: 16px;\n  align-items: center;\n  color: black;\n  backgroung-color: none;\n  text-decoration: none;\n  \n"]))),k=v.ZP.div(u||(u=(0,g.Z)(["\n  padding: 20px;\n  border-bottom: solid 1px blue;\n  > ul {\n    list-style: none;\n  }\n"]))),_=t(184),U=function(){var n,e,t=(0,x.useState)({}),r=(0,l.Z)(t,2),a=r[0],i=r[1],o=(0,p.TH)(),c=(0,p.UO)().movieId;(0,x.useEffect)((function(){(0,h.TP)(c).then((function(n){return i(n)}))}),[c]);var s=a.original_title,u=a.overview,g=a.genres,v=a.poster_path,U=(10*a.vote_average).toFixed(2);return(0,_.jsxs)("main",{children:[(0,_.jsx)(j,{type:"button",children:(0,_.jsx)(y,{to:null!==(n=null===(e=o.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/",children:"Go back"})}),(0,_.jsxs)(m,{children:[(0,_.jsx)("img",{src:v?"https://image.tmdb.org/t/p/w300".concat(v):"http://www.suryalaya.org/images/no_image.jpg",width:320,height:380,loading:"lazy",alt:"poster"}),(0,_.jsxs)(Z,{children:[(0,_.jsx)(b,{children:s}),(0,_.jsxs)("h3",{children:["User score: ",U,"%"]}),(0,_.jsx)("h3",{children:"Overview"}),(0,_.jsxs)("p",{children:[u," "]}),(0,_.jsx)("h3",{children:"Genres"}),(0,_.jsx)(w,{children:g&&g.length&&g.map((function(n){var e=n.id,t=n.name;return(0,_.jsx)("li",{children:t},e)}))})]})]}),(0,_.jsxs)(k,{children:[(0,_.jsx)("h4",{children:"Additional information"}),(0,_.jsxs)("ul",{children:[(0,_.jsx)("li",{children:(0,_.jsx)(f.rU,{to:"cast",state:(0,d.Z)({},o.state),children:"Cast"})}),(0,_.jsxs)("li",{children:[" ",(0,_.jsx)(f.rU,{to:"reviews",state:(0,d.Z)({},o.state),children:"Reviews"})]})]})]}),(0,_.jsx)(p.j3,{})]})}}}]);
//# sourceMappingURL=168.a09cfd5f.chunk.js.map