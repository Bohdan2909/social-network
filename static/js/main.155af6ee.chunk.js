(this["webpackJsonpdemo-social-network"]=this["webpackJsonpdemo-social-network"]||[]).push([[0],{12:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return s}));var r=n(132),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"c2f90438-3d8c-4025-9d7f-4e381806a08e"}}),c={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e))},unfollow:function(e){return a.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Please profileAPI object."),i.getProfile(e)}},i={getProfile:function(e){return a.get("profile/"+e)},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status",{status:e})}},s={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}}},126:function(e,t,n){"use strict";n.d(t,"b",(function(){return s}));var r=n(42),a=n(5),c="SEND_MESSAGE",i={dialogs:[{id:1,name:"Dimych"},{id:2,name:"Andrew"},{id:3,name:"Sveta"},{id:4,name:"Sasha"},{id:5,name:"Viktor"},{id:6,name:"Valera"}],messages:[{id:1,message:"Hi"},{id:2,message:"How is your it-kamasutra?"},{id:3,message:"Yo"},{id:4,message:"Yo"},{id:5,message:"Yo"}]},s=function(e){return{type:c,newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:var n=t.newMessageBody;return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:6,message:n}])});default:return e}}},134:function(e,t,n){e.exports={userPhoto:"users_userPhoto__2TjNc",selectedPage:"users_selectedPage__2y09y",loginBlock:"users_loginBlock__2vkrn"}},167:function(e,t,n){},168:function(e,t,n){},19:function(e,t,n){e.exports={nav:"Navbar_nav__1PCJN",item:"Navbar_item__3jRaR",activeLink:"Navbar_activeLink__3tJN8"}},291:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(63),i=n.n(c),s=(n(167),n(33)),o=n(34),u=n(36),l=n(35),d=(n(168),n(19)),j=n.n(d),f=n(20),b=n(1),p=function(){return Object(b.jsxs)("nav",{className:j.a.nav,children:[Object(b.jsx)("div",{className:j.a.item,children:Object(b.jsx)(f.b,{to:"/profile",activeClassName:j.a.activeLink,children:"Profile"})}),Object(b.jsx)("div",{className:"".concat(j.a.item," ").concat(j.a.active),children:Object(b.jsx)(f.b,{to:"/dialogs",activeClassName:j.a.activeLink,children:"Messages"})}),Object(b.jsx)("div",{className:"".concat(j.a.item," ").concat(j.a.active),children:Object(b.jsx)(f.b,{to:"/users",activeClassName:j.a.activeLink,children:"Users"})}),Object(b.jsx)("div",{className:j.a.item,children:Object(b.jsx)("a",{children:"News"})}),Object(b.jsx)("div",{className:j.a.item,children:Object(b.jsx)("a",{children:"Music"})}),Object(b.jsx)("div",{className:j.a.item,children:Object(b.jsx)("a",{children:"Settings"})})]})},g=n(10),h=n(13),O=n(15),m=n.n(O),v=n(29),x=n(42),w=n(5),P=n(12),_=function(e,t,n,r){return e.map((function(e){if(e[n]===t)return Object(w.a)(Object(w.a)({},e),r)}))},C="FOLLOW",S="UNFOLLOW",y="SET_USERS",k="SET_CURRENT_PAGE",N="SET_TOTAL_USERS_COUNT",E="TOGGLE_IS_FETCHING",I="TOGGLE_IS_FOLLOWING_PROGRESS",T={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[],fake:10},U=function(e){return{type:C,userId:e}},L=function(e){return{type:S,userId:e}},F=function(e){return{type:k,currentPage:e}},A=function(e){return{type:E,isFetching:e}},z=function(e,t){return{type:I,isFetching:e,userId:t}},M=function(){var e=Object(v.a)(m.a.mark((function e(t,n,r,a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(z(!0,n)),e.next=3,r(n);case 3:0==e.sent.data.resultCode&&t(a(n)),t(z(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(w.a)(Object(w.a)({},e),{},{users:_(e.users,t.userId,"id",{followed:!0})});case S:return Object(w.a)(Object(w.a)({},e),{},{users:_(e.users,t.userId,"id",{followed:!1})});case y:return Object(w.a)(Object(w.a)({},e),{},{users:t.users});case k:return Object(w.a)(Object(w.a)({},e),{},{currentPage:t.currentPage});case N:return Object(w.a)(Object(w.a)({},e),{},{totalUsersCount:t.count});case E:return Object(w.a)(Object(w.a)({},e),{},{isFetching:t.isFetching});case I:return Object(w.a)(Object(w.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(x.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},D=n(43),B=n(68),G=n(129),H=n(70),V=n.n(H),Y=n(133),J=n.n(Y),W=function(e){for(var t=e.totalItemsCount,n=e.pageSize,a=e.currentPage,c=e.onPageChanged,i=e.portionSize,s=void 0===i?10:i,o=Math.ceil(t/n),u=[],l=1;l<=o;l++)u.push(l);var d=Math.ceil(o/s),j=Object(r.useState)(1),f=Object(G.a)(j,2),p=f[0],g=f[1],h=(p-1)*s+1,O=p*s;return Object(b.jsxs)("div",{className:V.a.paginator,children:[p>1&&Object(b.jsx)("button",{onClick:function(){g(p-1)},children:"PREV"}),u.filter((function(e){return e>=h&&e<=O})).map((function(e){return Object(b.jsx)("span",{className:J()(Object(B.a)({},V.a.selectedPage,a===e),V.a.pageNumber),onClick:function(t){c(e)},children:e},e)})),d>p&&Object(b.jsx)("button",{onClick:function(){g(p+1)},children:"NEXT"})]})},X=n(134),q=n.n(X),K=n.p+"static/media/user.96e310a6.png",Z=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,a=e.follow;return Object(b.jsxs)("div",{children:[Object(b.jsxs)("span",{children:[Object(b.jsx)("div",{children:Object(b.jsx)(f.b,{to:"/profile/"+t.id,children:Object(b.jsx)("img",{src:null!=t.photos.small?t.photos.small:K,className:q.a.userPhoto})})}),Object(b.jsx)("div",{children:t.followed?Object(b.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"Unfollow"}):Object(b.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)},children:"Follow"})})]}),Object(b.jsxs)("span",{children:[Object(b.jsxs)("span",{children:[Object(b.jsx)("div",{children:t.name}),Object(b.jsx)("div",{children:t.status})]}),Object(b.jsxs)("span",{children:[Object(b.jsx)("div",{children:"user.location.country"}),Object(b.jsx)("div",{children:"user.location.city"})]})]})]})},Q=function(e){var t=e.currentPage,n=e.totalUsersCount,r=e.pageSize,a=e.onPageChanged,c=e.users,i=Object(D.a)(e,["currentPage","totalUsersCount","pageSize","onPageChanged","users"]);return Object(b.jsxs)("div",{children:[Object(b.jsx)(W,{currentPage:t,onPageChanged:a,totalItemsCount:n,pageSize:r}),Object(b.jsx)("div",{children:c.map((function(e){return Object(b.jsx)(Z,{user:e,followingInProgress:i.followingInProgress,unfollow:i.unfollow,follow:i.follow},e.id)}))})]})},$=n(66),ee=n(9),te=n(135),ne=Object(te.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),re=function(e){return e.usersPage.pageSize},ae=function(e){return e.usersPage.totalUsersCount},ce=function(e){return e.usersPage.currentPage},ie=function(e){return e.usersPage.isFetching},se=function(e){return e.usersPage.followingInProgress},oe=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){var n=e.props.pageSize;e.props.getUsers(t,n)},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[this.props.isFetching?Object(b.jsx)($.a,{}):null,Object(b.jsx)(Q,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),n}(a.a.Component),ue=Object(ee.d)(Object(h.b)((function(e){return{users:ne(e),pageSize:re(e),totalUsersCount:ae(e),currentPage:ce(e),isFetching:ie(e),followingInProgress:se(e)}}),{follow:function(e){return function(){var t=Object(v.a)(m.a.mark((function t(n){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:M(n,e,P.c.follow.bind(P.c),U);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(v.a)(m.a.mark((function t(n){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:M(n,e,P.c.unfollow.bind(P.c),L);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:F,toggleFollowingProgress:z,getUsers:function(e,t){return function(){var n=Object(v.a)(m.a.mark((function n(r){var a;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(A(!0)),r(F(e)),n.next=4,P.c.getUsers(e,t);case 4:a=n.sent,r(A(!1)),r((i=a.items,{type:y,users:i})),r((c=a.totalCount,{type:N,count:c}));case 8:case"end":return n.stop()}var c,i}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(oe),le=n(93),de=n.n(le),je=function(e){return Object(b.jsxs)("header",{className:de.a.header,children:[Object(b.jsx)("img",{src:"https://logos-world.net/wp-content/uploads/2020/04/Huawei-Logo.png"}),Object(b.jsx)("div",{className:de.a.loginBlock,children:e.isAuth?Object(b.jsxs)("div",{children:[e.login," - ",Object(b.jsx)("button",{onClick:e.logout,children:"Log out"})]}):Object(b.jsx)(f.b,{to:"/login",children:"Login"})})]})},fe=n(44),be="SET_USER_DATA",pe={userId:null,email:null,login:null,isAuth:!1},ge=function(e,t,n,r){return{type:be,peyload:{userId:e,email:t,login:n,isAuth:r}}},he=function(){return function(e){return P.a.me().then((function(t){if(0===t.data.resultCode){var n=t.data.data,r=n.id,a=n.login,c=n.email;e(ge(r,c,a,!0))}}))}},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case be:return Object(w.a)(Object(w.a)({},e),t.peyload);default:return e}},me=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)(je,Object(w.a)({},this.props))}}]),n}(a.a.Component),ve=Object(h.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(v.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.logout();case 2:0===e.sent.data.resultCode&&t(ge(null,null,null,!1));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(me),xe=n(127),we=n(128),Pe=n(64),_e=n(75),Ce=n(52),Se=n.n(Ce),ye=Object(we.a)({form:"login"})((function(e){return Object(b.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(b.jsx)("div",{children:Object(b.jsx)(xe.a,{placeholder:"Email",name:"email",validate:[_e.b],component:Pe.a})}),Object(b.jsx)("div",{children:Object(b.jsx)(xe.a,{placeholder:"Password",name:"password",type:"password",validate:[_e.b],component:Pe.a})}),Object(b.jsxs)("div",{children:[Object(b.jsx)(xe.a,{component:Pe.a,name:"rememberMe",type:"checkbox"})," remember me"]}),Object(b.jsxs)("div",{children:[e.error&&Object(b.jsx)("div",{className:Se.a.formSummaryError,children:e.error}),Object(b.jsx)("button",{children:"Login"})]})]})})),ke=Object(h.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(v.a)(m.a.mark((function r(a){var c,i;return m.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,P.a.login(e,t,n);case 2:0===(c=r.sent).data.resultCode?a(he()):(i=c.data.message.length>0?c.data.message[0]:"Some error",a(Object(fe.a)("login",{_error:i})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(b.jsx)(g.a,{to:"/profile"}):Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Login"}),Object(b.jsx)(ye,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})]})})),Ne="INITIALZED_SUCCESS",Ee={initialized:!1},Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ne:return Object(w.a)(Object(w.a)({},e),{},{initialized:!0});default:return e}},Te=n(96),Ue=n(126),Le={},Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le;return e},Ae=n(137),ze=n(130),Me=Object(ee.c)({profilePage:Te.b,dialogsPage:Ue.a,sidebar:Fe,usersPage:R,auth:Oe,form:ze.a,app:Ie}),Re=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ee.d,De=Object(ee.e)(Me,Re(Object(ee.a)(Ae.a))),Be=function(e){return function(t){return Object(b.jsx)(r.Suspense,{fallback:Object(b.jsx)("div",{children:"Loading..."}),children:Object(b.jsx)(e,Object(w.a)({},t))})}},Ge=a.a.lazy((function(){return n.e(4).then(n.bind(null,299))})),He=a.a.lazy((function(){return n.e(3).then(n.bind(null,298))})),Ve=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(b.jsxs)("div",{className:"app-wrapper",children:[Object(b.jsx)(ve,{}),Object(b.jsx)(p,{}),Object(b.jsxs)("div",{className:"app-wrapper-content",children:[Object(b.jsx)(g.b,{path:"/dialogs",render:Be(Ge)}),Object(b.jsx)(g.b,{path:"/profile/:userId?",render:Be(He)}),Object(b.jsx)(g.b,{path:"/users",render:function(){return Object(b.jsx)(ue,{})}}),Object(b.jsx)(g.b,{path:"/login",render:function(){return Object(b.jsx)(ke,{})}})]})]}):Object(b.jsx)($.a,{})}}]),n}(r.Component),Ye=Object(ee.d)(g.f,Object(h.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(he());Promise.all([t]).then((function(){e({type:Ne})}))}}}))(Ve),Je=function(e){return Object(b.jsx)(f.a,{children:Object(b.jsx)(h.a,{store:De,children:Object(b.jsx)(Ye,{})})})},We=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,297)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};i.a.render(Object(b.jsx)(Je,{}),document.getElementById("root")),We()},52:function(e,t,n){e.exports={formControl:"FormsControls_formControl__UYilj",error:"FormsControls_error__qN2Q5",formSummaryError:"FormsControls_formSummaryError__2jmf9"}},64:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l}));var r=n(5),a=n(43),c=(n(0),n(52)),i=n.n(c),s=n(1),o=function(e){e.input;var t=e.meta,n=(e.child,Object(a.a)(e,["input","meta","child"])),r=t.touched&&t.error;return Object(s.jsxs)("div",{className:i.a.formControl+" "+(r?i.a.error:""),children:[Object(s.jsx)("div",{children:n.children}),r&&Object(s.jsx)("span",{children:t.error})]})},u=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return Object(s.jsx)(o,Object(r.a)(Object(r.a)({},e),{},{children:Object(s.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},l=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return Object(s.jsx)(o,Object(r.a)(Object(r.a)({},e),{},{children:Object(s.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))}},66:function(e,t,n){"use strict";n(0);var r=n.p+"static/media/preloader.5788b05c.svg",a=n(1);t.a=function(e){return Object(a.jsx)("div",{style:{backgroundColor:"white"},children:Object(a.jsx)("img",{src:r})})}},70:function(e,t,n){e.exports={paginator:"Paginator_paginator__ehqPU",pageNumber:"Paginator_pageNumber__1XlCM",selectedPage:"Paginator_selectedPage__R62eS"}},75:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){return t.length>e?"Max length is ".concat(e," symbols"):"undefined"}}},93:function(e,t,n){e.exports={header:"Header_header__2ZKKO",loginBlock:"Header_loginBlock__WhVBf"}},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"d",(function(){return f})),n.d(t,"c",(function(){return b})),n.d(t,"e",(function(){return p}));var r=n(42),a=n(5),c=n(12),i="DELETE_POST",s="ADD-POST",o="SET_USER_PROFILE",u="SET_STATUS",l={posts:[{id:1,message:"Hi, how are you?",likesCount:12},{id:2,message:"It's my first post",likesCount:11},{id:3,message:"Blabla",likesCount:11},{id:4,message:"Dada",likesCount:11}],profile:null,status:" "},d=function(e){return{type:s,newPostText:e}},j=function(e){return{type:u,status:e}},f=function(e){return function(t){c.c.getProfile(e).then((function(e){var n;t((n=e.data,{type:o,profile:n}))}))}},b=function(e){return function(t){c.b.getStatus(e).then((function(e){t(j(e.data))}))}},p=function(e){return function(t){c.b.updateStatus(e).then((function(n){0===n.data.resultCode&&t(j(e))}))}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:var n={id:5,message:t.newPostText,likesCount:0};return Object(a.a)(Object(a.a)({},e),{},{posts:[].concat(Object(r.a)(e.posts),[n]),newPostText:""});case u:return Object(a.a)(Object(a.a)({},e),{},{status:t.status});case o:return Object(a.a)(Object(a.a)({},e),{},{profile:t.profile});case i:return Object(a.a)(Object(a.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!=t.postId}))});default:return e}}}},[[291,1,2]]]);
//# sourceMappingURL=main.155af6ee.chunk.js.map