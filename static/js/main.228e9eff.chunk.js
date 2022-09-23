(this["webpackJsonpcards-2.0"]=this["webpackJsonpcards-2.0"]||[]).push([[0],{126:function(e,t,r){e.exports={button:"EditableSpan_button__1AkF8",textWrapper:"EditableSpan_textWrapper__1sTaW",icon:"EditableSpan_icon__ibLtX"}},146:function(e,t,r){e.exports={overlay:"Lodader_overlay__ZwHt0",progress:"Lodader_progress__SsC0S",scaling:"Lodader_scaling__5Jeoy"}},199:function(e,t,r){},203:function(e,t,r){},204:function(e,t,r){},357:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),s=r(25),i=r.n(s),c=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,454)).then((function(t){var r=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;r(e),a(e),n(e),s(e),i(e)}))},o=r(50),l=r(12),d=r(23),j=r(8),u=r(124),b=r(190),O={status:"idle",error:null,success:null,isInitialized:!1},p=function(e){return{type:"SET_APP_ERROR",error:e}},x=function(e){return{type:"SET_APP_STATUS",status:e}},h=r(56),m=r(18),f=r(30),v=r(189),g=r.n(v).a.create({baseURL:"https://neko-back.herokuapp.com/2.0/",withCredentials:!0}),_=function(e){return g.post("/auth/login",e)},w=function(e){return g.post("/auth/register",e)},S=function(){return g.delete("/auth/me")},P=function(e){return g.put("/auth/me",e)},R={data:{_id:"",email:"",name:"",avatar:"",publicCardPacksCount:0,created:new Date,updated:new Date,isAdmin:!1,verified:!1,rememberMe:!1,error:""},isAuth:!1,isRegister:!1},E=function(e){return{type:"SET_IS_REGISTER",isRegister:e}},N=function(e){return{type:"LOGIN/UPDATE-USER-DATA-INFO",data:e}},y=Object(u.b)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_APP_ERROR":return Object(d.a)(Object(d.a)({},e),{},{error:t.error});case"SET_APP_STATUS":return Object(d.a)(Object(d.a)({},e),{},{status:t.status});case"SET_APP_INITIALIZED":return Object(d.a)(Object(d.a)({},e),{},{isInitialized:t.isInitialized});case"SET_APP_SUCCESS":return Object(d.a)(Object(d.a)({},e),{},{success:t.success});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN/GET-USER-DATA":return Object(d.a)(Object(d.a)({},e),{},{data:t.data,isAuth:t.isAuth});case"LOGIN/UPDATE-USER-DATA-INFO":return Object(d.a)(Object(d.a)({},e),{},{data:t.data});case"SET_IS_REGISTER":return Object(d.a)(Object(d.a)({},e),{},{isRegister:t.isRegister});case"LOG_OUT":return Object(d.a)(Object(d.a)({},e),{},{isAuth:!1,data:{_id:"",email:"",name:"",error:"",rememberMe:!1,verified:!1,isAdmin:!1,updated:null,created:null,avatar:"",publicCardPacksCount:null}});default:return e}}}),A=Object(u.c)(y,Object(u.a)(b.a)),I=h.b,T=h.c;window.store=A;var L=r(127),C=r(121),k=r(430),D=r(449),G=r(431),W=r(432),F=r(439),U=r(434),V=r(442),M=r(435),H=r(89),z=r.n(H),q={borderRadius:"18px",margin:"50px auto 30px",width:"347px",height:"36px",textTransform:"none",background:"#366EFF",fontSize:"16px",fontWeight:"500",color:"#fff"},Y={marginTop:"84px",padding:"20px",textAlign:"center",width:"410px",minHeight:"500px",borderRadius:"2px",backgroundColor:"#fff",boxShadow:"0 0 5px rgba(0,0,0,0.3)"},J={margin:"20px auto 0",width:"347px"},Z={width:"347px",margin:"20px",color:"#000000",fontSize:"27px"},B={fontSize:"13px",color:"red"},K=r(146),X=r.n(K),$=r(419),Q=r(2),ee=function(){return Object(Q.jsx)("div",{className:X.a.overlay,children:Object(Q.jsx)("div",{className:X.a.progress,children:Object(Q.jsx)($.a,{size:50})})})},te=r(423),re=r(424),ae=r(197),ne=r.n(ae),se=r(198),ie=r.n(se),ce=function(e){return Object(Q.jsx)(te.a,{position:"end",children:Object(Q.jsx)(re.a,{"aria-label":"toggle password visibility",onClick:function(){e.setIsVisible(!e.isVisible)},onMouseDown:function(e){e.preventDefault()},children:e.isVisible?Object(Q.jsx)(ne.a,{}):Object(Q.jsx)(ie.a,{})})})},oe=function(){var e=I(),t=T((function(e){return e.auth.isAuth})),r=T((function(e){return e.app.status})),n=Object(a.useState)(!0),s=Object(j.a)(n,2),i=s[0],c=s[1],u=Object(C.a)({initialValues:{email:"",password:"",rememberMe:!1},validationSchema:L.a({email:L.b().required().email("invalid email"),password:L.b().required().min(7,"min 7 characters")}),onSubmit:function(t,r){var a,n,s,i=r.setSubmitting;e((a=t.email,n=t.password,s=t.rememberMe,function(){var e=Object(f.a)(Object(m.a)().mark((function e(t){var r,i;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(x("loading")),e.next=4,_({email:a,password:n,rememberMe:s});case 4:r=e.sent,t({type:"LOGIN/GET-USER-DATA",data:r.data,isAuth:!0}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),i=e.t0.response?e.t0.response.data.error:e.t0.message+", more details in the console",t(p(i));case 12:return e.prev=12,t(x("idle")),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,8,12,15]])})));return function(t){return e.apply(this,arguments)}}())),i(!1),u.resetForm()}});return t?Object(Q.jsx)(l.a,{to:Fe.PROFILE}):Object(Q.jsxs)("div",{className:z.a.login,children:["loading"===r&&Object(Q.jsx)(ee,{}),Object(Q.jsx)(k.a,{container:!0,justifyContent:"center",style:{padding:"30px"},children:Object(Q.jsx)(k.a,{item:!0,children:Object(Q.jsx)("form",{onSubmit:u.handleSubmit,children:Object(Q.jsxs)(D.a,{style:Y,variant:"filled",children:[Object(Q.jsx)(G.a,{children:Object(Q.jsx)("h1",{className:z.a.styleH1,children:"Sign In"})}),Object(Q.jsxs)(W.a,{children:[Object(Q.jsx)(F.a,Object(d.a)({id:"email",style:J,label:"email",error:u.touched.email&&!!u.errors.email,variant:"standard"},u.getFieldProps("email"))),u.touched.email&&u.errors.email&&Object(Q.jsx)("div",{style:B,children:u.errors.email}),Object(Q.jsx)(F.a,Object(d.a)(Object(d.a)({id:"password",style:J,variant:"standard",error:u.touched.password&&!!u.errors.password,label:"password",type:i?"password":"text"},u.getFieldProps("password")),{},{InputProps:{endAdornment:Object(Q.jsx)(ce,{isVisible:i,setIsVisible:function(){c(!i)}})}})),u.touched.password&&u.errors.password&&Object(Q.jsx)("div",{style:B,children:u.errors.password}),Object(Q.jsx)(U.a,Object(d.a)({style:Z,label:"Remember me",control:Object(Q.jsx)(V.a,{color:"primary",checked:u.values.rememberMe})},u.getFieldProps("rememberMe"))),Object(Q.jsx)("div",{style:{textAlign:"right",marginRight:"33px"},children:Object(Q.jsx)(o.b,{className:z.a.forgotPassword,to:Fe.PASSWORD_RECOVERY,children:"Forgot Password"})}),Object(Q.jsx)(M.a,{style:q,variant:"contained",type:"submit",children:"Sign In"}),Object(Q.jsxs)(G.a,{children:[Object(Q.jsx)("p",{className:z.a.styleP,children:"Don't have an account?"}),Object(Q.jsx)(o.b,{className:z.a.signUp,to:Fe.REGISTRATION,children:"Sign Up"})]})]})]})})})})]})},le=r(199),de=r.n(le),je=function(){return Object(Q.jsx)("div",{className:de.a.passwordRecovery,children:"PasswordRecovery"})},ue=r(452),be=r(447),Oe=r(451),pe=r(81),xe=r.n(pe),he=r(202),me=r.n(he),fe=r(438),ve=r(201),ge=r.n(ve),_e=r(126),we=r.n(_e),Se=Object(a.memo)((function(e){var t=e.value,r=e.onChange,n=e.disabled,s=Object(a.useState)(!1),i=Object(j.a)(s,2),c=i[0],o=i[1],l=Object(a.useState)(t),d=Object(j.a)(l,2),u=d[0],b=d[1],O=function(){n||o(!0)},p=function(e){return e.length>0},x=function(){r(u),o(!1)};return c?Object(Q.jsxs)("h3",{className:we.a.textWrapper,children:[Object(Q.jsx)(fe.a,{value:u,size:"small",variant:"standard",onChange:function(e){b(e.currentTarget.value)},onKeyDown:function(e){"Enter"===e.key&&p(u)&&x()},fullWidth:!0,label:"Nickname"}),Object(Q.jsx)(be.a,{size:"small",variant:"contained",className:we.a.button,style:{position:"absolute"},disabled:!p(u),disableElevation:!0,onClick:x,children:Object(Q.jsx)("p",{children:"SAVE"})})]}):Object(Q.jsxs)("h3",{onDoubleClick:O,children:[t,Object(Q.jsx)(ue.a,{className:we.a.icon,onClick:O,children:Object(Q.jsx)(ge.a,{})})]})})),Pe=function(){var e=T((function(e){return e.auth.data})),t=e._id,r=e.name,a=e.email,n=e.avatar,s=I(),i=function(){s(function(){var e=Object(f.a)(Object(m.a)().mark((function e(t){return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(x("loading")),e.prev=1,e.next=4,S();case 4:t({type:"LOG_OUT"}),t(E(!1)),t({type:"SET_APP_SUCCESS",success:"You are log out successfully"}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),e.t0.response.data.error&&(t(p(e.t0.response.data.error)),t(x("failed")));case 12:return e.prev=12,t(x("idle")),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})));return function(t){return e.apply(this,arguments)}}())};return t?Object(Q.jsx)(k.a,{container:!0,justifyContent:"center",children:Object(Q.jsxs)(Oe.a,{elevation:2,children:[Object(Q.jsx)("h2",{children:"Personal Information"}),Object(Q.jsx)("div",{className:xe.a.ava,style:{backgroundImage:"url(".concat(n||"https://cdn-icons-png.flaticon.com/512/149/149071.png",")")},children:Object(Q.jsx)("div",{className:xe.a.buttonWrapper,children:Object(Q.jsx)(ue.a,{className:xe.a.button,children:"+"})})}),Object(Q.jsx)(Se,{value:r,disabled:!1,onChange:function(e){s(function(e,t){return function(){var t=Object(f.a)(Object(m.a)().mark((function t(r){var a,n,s;return Object(m.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r(x("loading")),a={name:e,avatar:" "},t.next=7,P(a);case 7:n=t.sent,r(N(n.data.updatedUser)),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),s=t.t0.response?t.t0.response.data.error:t.t0.message+", more details in the console",r(p(s));case 15:return t.prev=15,r(x("idle")),t.finish(15);case 18:case"end":return t.stop()}}),t,null,[[0,11,15,18]])})));return function(e){return t.apply(this,arguments)}}()}(e))}}),Object(Q.jsx)("p",{className:xe.a.email,children:a}),Object(Q.jsx)(be.a,{variant:"outlined",className:xe.a.logOut,sx:{borderRadius:"18px"},startIcon:Object(Q.jsx)(me.a,{}),onClick:function(){return i()},children:Object(Q.jsx)("span",{className:xe.a.text,children:"Log Out"})})]})}):Object(Q.jsx)(l.a,{to:Fe.LOGIN})},Re=r(72),Ee=r.n(Re),Ne=r(433),ye=r(443),Ae=r(446),Ie=function(){return Object(Q.jsx)(k.a,{container:!0,className:Ee.a.registration,justifyContent:"center",children:Object(Q.jsx)(Ne.a,{elevation:5,style:{padding:"20px 50px"},children:Object(Q.jsx)(Te,{})})})},Te=function(){var e=Object(h.b)(),t=Object(h.c)((function(e){return e.auth.isRegister})),r=Object(a.useState)(!1),n=Object(j.a)(r,2),s=n[0],i=n[1],c=Object(C.a)({initialValues:{email:"",password:"",confirmPassword:""},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",e.password?e.password.length<7&&(t.password="Invalid password"):t.password="Required",e.confirmPassword?e.confirmPassword.length<8?t.confirmPassword="Invalid password":e.password!==e.confirmPassword&&(t.confirmPassword="passwords must be equal"):t.confirmPassword="Required",t},onSubmit:function(r){var a,n={email:r.email,password:r.password};e((a=n,function(e){e(x("loading")),w(a).then((function(t){e(x("succeeded")),e(E(!0))})).catch((function(t){t.response.data.error&&(e(p(t.response.data.error)),e(x("failed")))})).finally((function(){e(E(!1))}))})),t&&c.resetForm()}}),u=c.touched.email&&c.errors.email?Object(Q.jsx)("div",{children:c.errors.email}):null,b=c.touched.password&&c.errors.password?Object(Q.jsx)("div",{children:c.errors.password}):null,O=c.touched.confirmPassword&&c.errors.confirmPassword?Object(Q.jsx)("div",{children:c.errors.confirmPassword}):null;return t?Object(Q.jsx)(l.a,{to:Fe.LOGIN}):Object(Q.jsx)("form",{onSubmit:c.handleSubmit,children:Object(Q.jsxs)(D.a,{className:Ee.a.form,children:[Object(Q.jsx)("h1",{className:Ee.a.formLabel,children:"SIGN UP"}),Object(Q.jsxs)(W.a,{children:[Object(Q.jsxs)(D.a,{children:[Object(Q.jsx)(ye.a,{children:"Email"}),Object(Q.jsx)(Ae.a,Object(d.a)({error:!!u},c.getFieldProps("email"))),Object(Q.jsx)("div",{className:Ee.a.error,children:u})]}),Object(Q.jsxs)(D.a,{children:[Object(Q.jsx)(ye.a,{children:"Password"}),Object(Q.jsx)(Ae.a,Object(d.a)(Object(d.a)({type:s?"text":"password",error:!!b},c.getFieldProps("password")),{},{endAdornment:Object(Q.jsx)(ce,{isVisible:s,setIsVisible:i})})),Object(Q.jsx)("div",{className:Ee.a.error,children:b})]}),Object(Q.jsxs)(D.a,{children:[Object(Q.jsx)(ye.a,{children:"Confirm password"}),Object(Q.jsx)(Ae.a,Object(d.a)(Object(d.a)({type:s?"text":"password",error:!!O},c.getFieldProps("confirmPassword")),{},{endAdornment:Object(Q.jsx)(ce,{isVisible:s,setIsVisible:i})})),Object(Q.jsx)("div",{className:Ee.a.error,children:O})]}),Object(Q.jsx)(M.a,{type:"submit",variant:"contained",color:"primary",children:"Sign up"}),Object(Q.jsx)(G.a,{className:Ee.a.formLabel,children:Object(Q.jsxs)("div",{children:["Already have an account? ",Object(Q.jsx)(o.c,{to:Fe.LOGIN,children:"SIGN IN"})]})})]})]})})},Le=r(203),Ce=r.n(Le),ke=function(){return Object(Q.jsx)("div",{className:Ce.a.enteringANewPassword,children:"EnteringANewPassword"})},De=r(204),Ge=r.n(De),We=function(){return Object(Q.jsx)("div",{className:Ge.a.welcome,children:"Welcome"})},Fe={WELCOME:"/welcome",LOGIN:"/login",PASSWORD_RECOVERY:"/passwordRecovery",REGISTRATION:"/registration",NEW_PASSWORD:"/enteringANewPassword",PROFILE:"/profile"};function Ue(){return Object(Q.jsx)("div",{children:Object(Q.jsxs)(l.d,{children:[Object(Q.jsx)(l.b,{path:"/",element:Object(Q.jsx)(l.a,{to:Fe.WELCOME})}),Object(Q.jsx)(l.b,{path:Fe.LOGIN,element:Object(Q.jsx)(oe,{})}),Object(Q.jsx)(l.b,{path:Fe.PASSWORD_RECOVERY,element:Object(Q.jsx)(je,{})}),Object(Q.jsx)(l.b,{path:Fe.PROFILE,element:Object(Q.jsx)(Pe,{})}),Object(Q.jsx)(l.b,{path:Fe.REGISTRATION,element:Object(Q.jsx)(Ie,{})}),Object(Q.jsx)(l.b,{path:Fe.NEW_PASSWORD,element:Object(Q.jsx)(ke,{})}),Object(Q.jsx)(l.b,{path:"/*",element:Object(Q.jsx)(We,{})})]})})}var Ve=r(90),Me=r.n(Ve),He=function(){return Object(Q.jsx)("div",{className:Me.a.container,children:Object(Q.jsxs)("div",{className:Me.a.links,children:[Object(Q.jsx)(ze,{path:Fe.PROFILE,title:"Profile"}),Object(Q.jsx)(ze,{path:Fe.LOGIN,title:"Login"}),Object(Q.jsx)(ze,{path:Fe.REGISTRATION,title:"Registration"}),Object(Q.jsx)(ze,{path:Fe.PASSWORD_RECOVERY,title:"Password recovery+"}),Object(Q.jsx)(ze,{path:Fe.NEW_PASSWORD,title:"New password"}),Object(Q.jsx)("div",{className:Me.a.link,children:"Hover me!"})]})})},ze=function(e){return Object(Q.jsx)("div",{className:Me.a.link,children:Object(Q.jsx)(o.c,{className:function(e){return e.isActive?Me.a.active:""},to:e.path,children:e.title})})},qe=r(440),Ye=r(445),Je=n.a.forwardRef((function(e,t){return Object(Q.jsx)(qe.a,Object(d.a)({elevation:6,ref:t,variant:"filled"},e))}));function Ze(){var e=T((function(e){return e.app.error})),t=Object(h.b)(),r=function(e,r){"clickaway"!==r&&t(p(null))};return Object(Q.jsx)(Ye.a,{open:null!==e,autoHideDuration:6e3,onClose:r,children:Object(Q.jsx)(Je,{onClose:r,severity:"error",sx:{width:"100%"},children:e})})}var Be=r(437),Ke=function(){var e=T((function(e){return e.app.status}));return Object(Q.jsxs)("div",{children:[Object(Q.jsx)("div",{style:{height:"5px"},children:"loading"===e&&Object(Q.jsx)(Be.a,{})}),Object(Q.jsxs)(o.a,{children:[Object(Q.jsx)(Ze,{}),Object(Q.jsx)(He,{}),Object(Q.jsx)(Ue,{})]})]})};i.a.render(Object(Q.jsx)(n.a.StrictMode,{children:Object(Q.jsx)(h.a,{store:A,children:Object(Q.jsx)(Ke,{})})}),document.getElementById("root")),c()},72:function(e,t,r){e.exports={registration:"Registration_registration__11CEM",form:"Registration_form__zRR5I",error:"Registration_error__2UBon",formLabel:"Registration_formLabel__2bq9J"}},81:function(e,t,r){e.exports={ava:"Profile_ava__2Dxpe",buttonWrapper:"Profile_buttonWrapper__209tv",button:"Profile_button__3K0YO",email:"Profile_email__GMmF3",logOut:"Profile_logOut__1CD5W",text:"Profile_text__1VrfS"}},89:function(e,t,r){e.exports={login:"Login_login__30RK-",styleH1:"Login_styleH1__2mq5T",styleP:"Login_styleP__1OBiW",signUp:"Login_signUp__3U1GV",forgotPassword:"Login_forgotPassword__lSz3J"}},90:function(e,t,r){e.exports={container:"Header_container__2AHD8",links:"Header_links__UVdRO",link:"Header_link__3AUhd",active:"Header_active__NPa40"}}},[[357,1,2]]]);
//# sourceMappingURL=main.228e9eff.chunk.js.map