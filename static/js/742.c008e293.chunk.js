"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[742],{742:function(e,t,n){n.r(t),n.d(t,{HomePage:function(){return C},default:function(){return N}});var r=n(2791),a=n(7781),i=n(9698),c=n(9620),o=n(5442),s="boilerplate/Home/CHANGE_USERNAME",d={username:""},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;return(0,o.ZP)(e,(function(e){if(t.type===s)e.username=t.username.replace(/@/gi,"")}))},p=n(7757),l=n.n(p),f=n(7780),g=(n(873),l().mark(h)),m=l().mark(v);function h(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),g)}function v(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,f.Fm)("boilerplate/App/LOAD_REPOS",h);case 2:case"end":return e.stop()}}),m)}var j=n(6081),x=n(9875);var S=n(5883),b=n(9271),k=n(6711),R=n(8235),y=n(184),Z=(0,k.Z)((function(){return n.e(278).then(n.bind(n,7278))}),{fallback:(0,y.jsx)(R.Z,{})}),E="home",w=[{id:1,header:"\u0d2a\u0d4b\u0d23\u0d4d\u0d1f\u0d3f\u0d1a\u0d4d\u0d1a\u0d47\u0d30\u0d3f",cover:S,desc:"\u0d2a\u0d4b\u0d23\u0d4d\u0d1f\u0d3f\u0d1a\u0d4d\u0d1a\u0d47\u0d30\u0d3f\u0d2f\u0d3f\u0d32\u0d42\u0d1f\u0d46 \u0d12\u0d30\u0d41 \u0d2a\u0d31\u0d4d\u0d31\u0d02  \u0d38\u0d41\u0d39\u0d43\u0d24\u0d4d\u0d24\u0d41\u0d15\u0d4d\u0d15\u0d33\u0d41\u0d2e\u0d3e\u0d2f\u0d3f \u0d05\u0d32\u0d1e\u0d4d\u0d1e\u0d41 \u0d24\u0d3f\u0d30\u0d3f\u0d2f\u0d41\u0d2e\u0d4d\u0d2a\u0d4b\u0d7e  \u0d1a\u0d46\u0d28\u0d4d\u0d28\u0d4d \u0d2a\u0d46\u0d1f\u0d4d\u0d1f \u0d15\u0d41\u0d30\u0d41\u0d15\u0d4d\u0d15\u0d41\u0d15\u0d33\u0d3f\u0d32\u0d47\u0d15\u0d4d\u0d15\u0d4d \u0d12\u0d30\u0d41 \u0d24\u0d3f\u0d30\u0d3f\u0d1e\u0d4d\u0d1e\u0d41 \u0d28\u0d4b\u0d1f\u0d4d\u0d1f\u0d02."}];function C(e){var t=e.classes;(0,i.v)({key:E,reducer:u}),(0,c.h)({key:E,saga:v});var n=(0,b.k6)(),r=(0,b.$B)();return(0,y.jsxs)(b.rs,{children:[(0,y.jsx)(b.AW,{path:"".concat(r.path,"/:id"),children:(0,y.jsx)(Z,{})}),(0,y.jsx)(b.AW,{path:r.path,children:(0,y.jsxs)("div",{className:t.container,children:[(0,y.jsxs)("div",{className:"".concat(t.intro," caligraphy"),children:["Ready to read my stories?",(0,y.jsx)("div",{className:"".concat(t.introDescription),children:"Happy to see you read Malayalam"})]}),(0,y.jsx)("div",{className:t.postsContainer,children:w.map((function(e){return(0,y.jsxs)("div",{className:t.postContainer,onClick:function(){n.push("/blog/".concat(e.id))},children:[(0,y.jsx)("div",{style:{backgroundImage:"url(".concat(e.cover,")")},className:t.postBg}),(0,y.jsxs)("div",{className:"malayalam ".concat(t.postDetails),children:[(0,y.jsx)("div",{className:t.postHeader,children:e.header}),(0,y.jsx)("div",{className:t.postDesc,children:e.desc})]})]})}))})]})})]})}var N=(0,a.qC)(r.memo)((0,j.Z)(C,(function(){return{container:{width:"100%"},intro:{fontSize:"3rem",fontWeight:"bold",textAlign:"center",color:x.Z.primaryDark},introDescription:{fontSize:"1.5rem",margin:"auto",lineHeight:"normal"},postsContainer:{width:"100%",display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gridRowGap:"1.5rem",height:"fit-content",maxHeight:"100%",paddingTop:"1rem"},postContainer:{position:"relative",cursor:"pointer",width:"350px",background:x.Z.backgroundLight,height:"100%",borderRadius:"8px",transition:".3s ease-in-out",transform:"scale(1) translate3d(0,0,0) perspective(1px)",transformOrigin:"left top","&:hover":{transform:"translateY(-10px) scale(1) translate3d(0,0,0) perspective(1px)",transformOrigin:"left top"}},postBg:{margin:"7px",backgroundSize:"cover",height:"200px",width:"auto",borderRadius:"5px 5px 0 0"},postDetails:{height:"calc(100% - 200px)",width:"100%",padding:"1.5rem 0.83rem",textAlign:"center"},postHeader:{fontWeight:"bold",fontSize:"2rem"},postDesc:{fontSize:"1rem",textAlign:"start"}}})))},8249:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(763),a=n(2176),i=n.n(a);function c(e){var t={dispatch:r.isFunction,subscribe:r.isFunction,getState:r.isFunction,replaceReducer:r.isFunction,runSaga:r.isFunction,injectedReducers:r.isObject,injectedSagas:r.isObject};i()((0,r.conformsTo)(e,t),"(app/utils...) injectors: Expected a valid redux store")}},9698:function(e,t,n){n.d(t,{v:function(){return p}});var r=n(2791),a=(n(2110),n(364)),i=n(2176),c=n.n(i),o=n(763),s=n(8249),d=n(7486);function u(e,t){return function(n,r){t||(0,s.Z)(e),c()((0,o.isString)(n)&&!(0,o.isEmpty)(n)&&(0,o.isFunction)(r),"(app/utils...) injectReducer: Expected `reducer` to be a reducer function"),Reflect.has(e.injectedReducers,n)&&e.injectedReducers[n]===r||(e.injectedReducers[n]=r,e.replaceReducer((0,d.Z)(e.injectedReducers)))}}n(184);var p=function(e){var t=e.key,n=e.reducer,i=r.useContext(a.ET);r.useEffect((function(){var e;(e=i.store,(0,s.Z)(e),{injectReducer:u(e,!0)}).injectReducer(t,n)}),[])}},9620:function(e,t,n){n.d(t,{h:function(){return v}});var r=n(2791),a=(n(2110),n(364)),i=n(1413),c=n(2176),o=n.n(c),s=n(763),d=n(8249),u="@@saga-injector/daemon",p="@@saga-injector/once-till-unmount",l=["@@saga-injector/restart-on-remount",u,p],f=function(e){return o()((0,s.isString)(e)&&!(0,s.isEmpty)(e),"(app/utils...) injectSaga: Expected `key` to be a non empty string")},g=function(e){var t={saga:s.isFunction,mode:function(e){return(0,s.isString)(e)&&l.includes(e)}};o()((0,s.conformsTo)(e,t),"(app/utils...) injectSaga: Expected a valid saga descriptor")};function m(e,t){return function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2?arguments[2]:void 0;t||(0,d.Z)(e);var c=(0,i.Z)((0,i.Z)({},r),{},{mode:r.mode||u}),o=c.saga,s=c.mode;f(n),g(c);var l=Reflect.has(e.injectedSagas,n);(!l||l&&s!==u&&s!==p)&&(e.injectedSagas[n]=(0,i.Z)((0,i.Z)({},c),{},{task:e.runSaga(o,a)}))}}function h(e,t){return function(n){if(t||(0,d.Z)(e),f(n),Reflect.has(e.injectedSagas,n)){var r=e.injectedSagas[n];r.mode&&r.mode!==u&&(r.task.cancel(),e.injectedSagas[n]="done")}}}n(184);var v=function(e){var t=e.key,n=e.saga,i=e.mode,c=r.useContext(a.ET);r.useEffect((function(){var e,r=(e=c.store,(0,d.Z)(e),{injectSaga:m(e,!0),ejectSaga:h(e,!0)});return r.injectSaga(t,{saga:n,mode:i}),function(){r.ejectSaga(t)}}),[])}},5883:function(e,t,n){e.exports=n.p+"static/media/HAR_0807.6bd71d6db24a7d4f722a.jpg"}}]);
//# sourceMappingURL=742.c008e293.chunk.js.map