(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{292:function(e,t,a){"use strict";a.d(t,"a",(function(){return g}));var n=a(27),i=a(28),o=a(30),r=a(29),c=a(31),u=a(0),s=a.n(u),l=a(35),m=a(18),d=function(e){return{isAuth:e.auth.isAuth}},g=function(e){var t=function(t){function a(){return Object(n.a)(this,a),Object(o.a)(this,Object(r.a)(a).apply(this,arguments))}return Object(c.a)(a,t),Object(i.a)(a,[{key:"render",value:function(){return this.props.isAuth?s.a.createElement(e,this.props):s.a.createElement(l.a,{to:"/login"})}}]),a}(s.a.Component);return Object(m.b)(d,{})(t)}},304:function(e,t,a){e.exports={dialogBox:"Dialog_dialogBox__1Z3XZ"}},306:function(e,t,a){"use strict";a.r(t);var n=a(97),i=a(0),o=a.n(i),r=a(304),c=a.n(r),u=a(14),s=function(e){var t="/dialog/"+e.id;return o.a.createElement("div",null,o.a.createElement(u.b,{to:t},e.name))},l=function(e){return o.a.createElement("div",null,e.text)},m=a(129),d=a(130),g=a(69),f=a(50),b=Object(g.a)(10),p=Object(d.a)({form:"message"})((function(e){return o.a.createElement("div",null,o.a.createElement("form",{onSubmit:e.handleSubmit},o.a.createElement(m.a,{component:f.b,name:"messageBody",validate:[g.b,b]}),o.a.createElement("button",null,"Send Message")))})),E=function(e){var t=e.dialogData.DialogItemData.map((function(e){return o.a.createElement(s,{key:e.id,id:e.id,name:e.name})})),a=e.dialogData.DialogMessageData.map((function(e){return o.a.createElement(l,{key:e.id,text:e.text})}));return o.a.createElement("div",{className:c.a.dialogBox},o.a.createElement("div",{className:c.a.dialogItem},t),o.a.createElement("div",{className:c.a.dialogMessage},a,o.a.createElement(p,{onSubmit:function(t){e.sendMessage(t.messageBody),console.log(t)}})))},h=a(18),v=a(292),j=a(9);t.default=Object(j.compose)(Object(h.b)((function(e){return{dialogData:e.dialogPage}}),(function(e){return{sendMessage:function(t){e(n.a.addMessageActionCreator(t))}}})),v.a)(E)}}]);
//# sourceMappingURL=4.27555de5.chunk.js.map