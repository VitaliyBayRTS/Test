(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{303:function(e,a,t){"use strict";t.d(a,"a",(function(){return d}));var n=t(32),i=t(33),o=t(35),r=t(34),c=t(0),s=t.n(c),l=t(39),u=t(17),m=function(e){return{isAuth:e.auth.isAuth}},d=function(e){var a=function(a){Object(o.a)(c,a);var t=Object(r.a)(c);function c(){return Object(n.a)(this,c),t.apply(this,arguments)}return Object(i.a)(c,[{key:"render",value:function(){return this.props.isAuth?s.a.createElement(e,this.props):s.a.createElement(l.a,{to:"/login"})}}]),c}(s.a.Component);return Object(u.b)(m,{})(a)}},315:function(e,a,t){e.exports={dialogBox:"Dialog_dialogBox__1Z3XZ"}},316:function(e,a,t){e.exports={dialogItemBox:"DialogItem_dialogItemBox__10Eqf",user:"DialogItem_user__1OfAk",selected:"DialogItem_selected__8NyhT"}},318:function(e,a,t){"use strict";t.r(a);var n=t(110),i=t(0),o=t.n(i),r=t(315),c=t.n(r),s=t(316),l=t.n(s),u=t(20),m=t(107),d=t.n(m),g=function(e){var a="/dialog/"+e.id;return o.a.createElement("div",{className:l.a.dialogItemBox},o.a.createElement("img",{src:d.a,alt:""}),o.a.createElement(u.b,{to:a,className:l.a.user,activeClassName:l.a.selected},e.name))},f=function(e){return o.a.createElement("div",null,e.text)},p=t(139),b=t(140),E=t(78),v=t(57),h=Object(E.a)(10),_=Object(b.a)({form:"message"})((function(e){return o.a.createElement("div",null,o.a.createElement("form",{onSubmit:e.handleSubmit},o.a.createElement(p.a,{component:v.b,name:"messageBody",validate:[h]}),o.a.createElement("button",null,"Send Message")))})),x=function(e){var a=e.dialogData.DialogItemData.map((function(e){return o.a.createElement(g,{key:e.id,id:e.id,name:e.name})})),t=e.dialogData.DialogMessageData.map((function(e){return o.a.createElement(f,{key:e.id,text:e.text})}));return o.a.createElement("div",{className:c.a.dialogBox},o.a.createElement("div",{className:c.a.dialogItem},a),o.a.createElement("div",{className:c.a.dialogMessage},t,o.a.createElement(_,{onSubmit:function(a){e.sendMessage(a.messageBody)}})))},D=t(17),O=t(303),j=t(10);a.default=Object(j.compose)(Object(D.b)((function(e){return{dialogData:e.dialogPage}}),(function(e){return{sendMessage:function(a){e(n.a.addMessageActionCreator(a))}}})),O.a)(x)}}]);
//# sourceMappingURL=4.0cc2a9cb.chunk.js.map