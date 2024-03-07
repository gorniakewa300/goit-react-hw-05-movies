"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[210],{315:function(n,e,t){t.d(e,{Hg:function(){return c},Jh:function(){return d},TP:function(){return l},z1:function(){return s},zv:function(){return p}});var r=t(861),i=t(757),a=t.n(i),o=t(294),u="bfdf79a3b0a0d7433b01ecad8f8e238d";o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c=function(){var n=(0,r.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("trending/movie/day?api_key=".concat(u));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("search/movie?api_key=".concat(u,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"?api_key=").concat(u,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},746:function(n,e,t){t.d(e,{Dx:function(){return f},eW:function(){return d},tz:function(){return l},up:function(){return p}});var r,i,a,o,u=t(168),c=t(87),s=t(924),l=s.ZP.main(r||(r=(0,u.Z)(["\n  width: 95%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),p=(0,s.ZP)(c.rU)(i||(i=(0,u.Z)(["\n  text-decoration: none;\n  padding: 8px;\n  color: black;\n  \n\n  &:hover {\n    color: blue;\n  }\n"]))),d=s.ZP.ul(a||(a=(0,u.Z)(["\n  list-style: none;\n  padding-left: none;\n  display: flex;\n  flex-direction: column;\n  width: 600px;\n  align-items: flex-start;\n  font-size: 20px;\n"]))),f=s.ZP.h2(o||(o=(0,u.Z)(["\n  width: 100%;\n  text-align: center;\n  font-size: 50px;\n"])))},210:function(n,e,t){t.r(e),t.d(e,{default:function(){return P}});var r,i,a,o,u,c,s,l=t(439),p=t(143),d=t(746),f=t(791),h=t(315),x=t(689),m=t(87),g=t(168),b=t(924),v=b.ZP.div(r||(r=(0,g.Z)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n"]))),Z=b.ZP.form(i||(i=(0,g.Z)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 90px;\n  max-width: 500px;\n  background-color: cornsilk;\n  border-radius: 3px;\n  overflow: hidden;\n  margin-top: 8px;\n"]))),w=b.ZP.input(a||(a=(0,g.Z)(["\n  display: inline-block;\n  width: 70%;\n  height: 40px;\n  font: inherit;\n  font-size: 16px;\n  border: 2px solid blue;\n  border-radius: 8px 0px 0px 8px;\n\n  &::placeholder {\n    font: inherit;\n    font-size: 20px;\n  }\n"]))),y=b.ZP.button(o||(o=(0,g.Z)(["\n  display: inline-block;\n  align-items: center;\n  background-color: light-blue;\n  color: black;\n  width: 80px;\n  height: 45px;\n  border: 2px dotted blue;\n  border-radius: 0px 8px 8px 0px;\n  margin-right: 4px;\n  margin-left: 4px;\n  transition: all 250ms cubic-bezier(0.5, 0, 0.2, 0.5);\n  cursor: pointer;\n  &:hover {\n    background-color: blue;\n    color: white;\n  }\n"]))),k=(b.ZP.button(u||(u=(0,g.Z)(["\n  padding: 8px 16px;\n  margin-top: ","px;\n  border: none;\n  border-radius: 8px;\n  background-color: #3f51b5;\n  color: white;\n  text-decoration: none;\n  font-family: inherit;\n  font-size: 16px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  min-width: 180px;\n  cursor: pointer;\n  transition: background-color 250ms cubic-bezier(0.5, 0, 0.2, 0.5);\n  &:hover {\n    color: grey;\n  }\n"])),(function(n){return n.theme.space[4]})),b.ZP.ul(c||(c=(0,g.Z)(["\n  padding-top: 50px;\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: 30px;\n  gap: 20px;\n  list-style: none;\n"]))),b.ZP.li(s||(s=(0,g.Z)(["\n  display: block;\n  flex-basis: calc((100% - 60px) / 4);\n  height: auto;\n  overflow: hidden;\n  border-radius: 2px;\n"]))),t(184)),j=function(n){var e=n.onSubmit,t=n.children;return(0,k.jsx)(Z,{onSubmit:e,children:t})},_=function(){return(0,k.jsx)(w,{type:"text",name:"movieName",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"May contain only letters, apostrophe, dash and spaces. For example moon",required:!0,autoComplete:"off",autoFocus:!0,placeholder:"Search movie..."})},z=function(n){var e=n.onSubmit;return(0,k.jsx)(v,{children:(0,k.jsxs)(j,{onSubmit:e,children:[(0,k.jsx)(_,{}),(0,k.jsx)(y,{type:"submit","aria-label":"search button",children:"Search"})]})})},P=function(){var n,e=(0,x.TH)(),t=(0,m.lr)(),r=(0,l.Z)(t,2),i=r[0],a=r[1],o=null!==(n=i.get("movieName"))&&void 0!==n?n:"",u=(0,f.useState)([]),c=(0,l.Z)(u,2),s=c[0],g=c[1],b=(0,f.useState)(!1),v=(0,l.Z)(b,2),Z=v[0],w=v[1],y=(0,f.useState)(!1),j=(0,l.Z)(y,2),_=j[0],P=j[1];(0,f.useEffect)((function(){""!==o&&(g([]),w(!0),(0,h.z1)(o).then((function(n){if(!n.results.length)return w(!1),P(!0),console.log("There is no movies with this request. Please, try again");P(!1),g(n.results),w(!1)})))}),[o]);return(0,k.jsxs)("main",{children:[(0,k.jsx)(z,{onSubmit:function(n){n.preventDefault();var e=n.currentTarget;a({movieName:e.elements.movieName.value}),e.reset()}}),_&&(0,k.jsx)("p",{children:"There is no movies with this request. Please, try again"}),(0,k.jsxs)(d.eW,{children:[s.map((function(n){return(0,k.jsx)("li",{children:(0,k.jsx)(d.up,{to:"/movies/".concat(n.id),state:{from:e},children:n.original_title||n.name})},n.id)})),Z&&(0,k.jsx)(p.a,{})]})]})}}}]);
//# sourceMappingURL=210.cf81ccbb.chunk.js.map