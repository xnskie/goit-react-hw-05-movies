"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[448],{3355:function(e,t,n){n.d(t,{O:function(){return i}});var r=n(7689),a="movie-list_list__U-qGD",c="movie-list_item__514PC",u="movie-list_link__klGvP",s=n(184),i=function(e){var t=e.movies,n=(0,r.TH)();return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("ul",{className:a,children:t.map((function(e){return(0,s.jsx)("li",{className:c,children:(0,s.jsx)("a",{className:u,href:"/movies/".concat(e.id),state:{from:n},children:e.title})},e.id)}))})})}},8448:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(5861),a=n(9439),c=n(7757),u=n.n(c),s=n(2791),i=n(3355),o=n(4390),p=n(5243),f=n(184),l=function(){return(0,f.jsx)(p.g4,{height:"80",width:"80",radius:"9",color:"red",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0})},d=function(){var e=(0,s.useState)([]),t=(0,a.Z)(e,2),n=t[0],c=t[1],p=(0,s.useState)(!1),d=(0,a.Z)(p,2),v=d[0],h=d[1];return(0,s.useEffect)((function(){function e(){return(e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,h(!0),e.next=4,(0,o.wr)();case 4:t=e.sent,c(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(Error);case 11:return e.prev=11,h(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),(0,f.jsxs)("main",{children:[(0,f.jsx)("h1",{children:"Trending today"}),v?(0,f.jsx)(l,{}):(0,f.jsx)(i.O,{movies:n})]})}},4390:function(e,t,n){n.d(t,{Ai:function(){return o},Hx:function(){return l},Y5:function(){return p},wr:function(){return i},xc:function(){return f}});var r=n(5861),a=n(7757),c=n.n(a),u=n(1912);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="d5fa40ad6c43c0e4781fcc955d1dd9a4",i=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("trending/movie/day?api_key=".concat(s));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("search/movie?api_key=".concat(s,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t,"?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=448.e2573414.chunk.js.map