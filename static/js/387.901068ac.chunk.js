"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[387],{315:function(n,t,e){e.d(t,{Hg:function(){return o},Jh:function(){return d},TP:function(){return p},z1:function(){return s},zv:function(){return f}});var r=e(861),a=e(757),c=e.n(a),u=e(294),i="bfdf79a3b0a0d7433b01ecad8f8e238d";u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("trending/movie/day?api_key=".concat(i));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("search/movie?api_key=".concat(i,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},387:function(n,t,e){e.r(t),e.d(t,{default:function(){return y}});var r,a,c,u,i,o=e(439),s=e(689),p=e(791),f=e(315),d=e(168),h=e(924),l=h.ZP.div(r||(r=(0,d.Z)(["\n  width: 90%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),g=h.ZP.ul(a||(a=(0,d.Z)(["\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n  \n"]))),v=h.ZP.li(c||(c=(0,d.Z)(["\n  margin: 10px 15px;\n  width: 130px;\n"]))),m=h.ZP.h3(u||(u=(0,d.Z)(["\n  margin: 8px 0;\n  color: navy;\n"]))),w=h.ZP.p(i||(i=(0,d.Z)(["\n  margin: 0;\n"]))),x=e(184),y=function(){var n=(0,p.useState)([]),t=(0,o.Z)(n,2),e=t[0],r=t[1],a=(0,s.UO)().movieId;return(0,p.useEffect)((function(){(0,f.zv)(a).then((function(n){return r(n.cast)}))}),[a]),(0,x.jsx)(l,{children:(0,x.jsx)(g,{children:e.length>0?e.map((function(n){var t=n.id,e=n.name,r=n.profile_path,a=n.character;return(0,x.jsxs)(v,{children:[(0,x.jsx)("img",{src:r?"https://image.tmdb.org/t/p/w200".concat(r):"http://www.suryalaya.org/images/no_image.jpg",alt:"actor",loading:"lazy",width:120,height:180}),(0,x.jsx)(m,{children:e}),(0,x.jsxs)(w,{children:[" Character: ",a]})]},t)})):"Sorry, there isn't any info"})})}}}]);
//# sourceMappingURL=387.901068ac.chunk.js.map