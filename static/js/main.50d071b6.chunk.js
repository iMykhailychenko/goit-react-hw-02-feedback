(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{1:function(e,t,a){e.exports={list:"Statistics_list__1jVrZ",item:"Statistics_item__1_saC",total:"Statistics_total__2KKbQ",progress:"Statistics_progress__30woj"}},16:function(e,t,a){e.exports={btn:"FeedbackBtn_btn__2XF4Z"}},17:function(e,t,a){e.exports={text:"Notification_text__14MxL"}},21:function(e,t,a){e.exports=a(29)},28:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(6),s=a.n(l),c=a(7),o=a(2),i=a(8),u=a(9),m=a(18),p=a(10),b=a(19),d=a(11);function g(){var e=Object(d.a)(["\n  position: relative;\n  height: 610px;\n  width: 300px;\n  padding: 14px;\n  padding-top: 40px;\n  border: 14px solid #333536;\n  border-radius: 38px;\n  background: #232526;\n  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);\n\n  ::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 50%;\n    transform: translateX(-50%);\n    height: 24px;\n    width: 160px;\n    background: #333536;\n    border-radius: 0 0 16px 16px;\n  }\n  ::after {\n    content: '';\n    position: absolute;\n    bottom: 10px;\n    left: 50%;\n    transform: translateX(-50%);\n    height: 4px;\n    width: 138px;\n    background: #aaa;\n    border-radius: 20px;\n  }\n"]);return g=function(){return e},e}var f=a(12).a.div(g()),h=a(16),E=a.n(h),x=function(e){var t=e.state,a=e.onFeedback,n=Object.keys(t);return r.a.createElement(r.a.Fragment,null,n.map((function(e){return r.a.createElement("button",{key:e,className:E.a.btn,name:e,onClick:a,type:"button"},e)})))},v=a(1),_=a.n(v),k=function(e){var t=e.state,a=t.good,n=t.neutral,l=t.bad,s=t.total,c=t.positivePercentage;return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:_.a.list},r.a.createElement("li",{className:_.a.item},r.a.createElement("span",null,"good: "),r.a.createElement("span",null,a)),r.a.createElement("li",{className:_.a.item},r.a.createElement("span",null,"neutral: "),r.a.createElement("span",null,n)),r.a.createElement("li",{className:_.a.item},r.a.createElement("span",null,"bad: "),r.a.createElement("span",null,l)),r.a.createElement("li",{className:_.a.total},r.a.createElement("span",null,"total: "),r.a.createElement("span",null,s)),r.a.createElement("li",{className:_.a.item},r.a.createElement("span",null,"positive percentage: "),r.a.createElement("span",null,"".concat(c,"%")))),r.a.createElement("progress",{className:_.a.progress,max:"100",value:c}))},j=function(e){var t=e.title,a=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"title"},t),a)},N=a(17),y=a.n(N),O=function(e){var t=e.message;return r.a.createElement("p",{className:y.a.text},t)},F=(a(28),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={good:0,neutral:0,bad:0},a.handleFeedback=function(e){var t=e.target.name;a.setState((function(e){return Object(o.a)({},t,e[t]+1)}))},a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"total",value:function(){var e=Object.values(this.state).reduce((function(e,t){return e+t}),0);return e}},{key:"getPositivePercentage",value:function(){var e=this.state.good,t=this.total();return 0===t?t:Math.floor(e/t*100)}},{key:"render",value:function(){return r.a.createElement(f,null,r.a.createElement(j,{title:"Please leave feedback"},r.a.createElement(x,{state:this.state,onFeedback:this.handleFeedback})),r.a.createElement(j,{title:"Statistics"},0===this.total()?r.a.createElement(O,{message:"No feedback given"}):r.a.createElement(k,{state:Object(c.a)({},this.state,{total:this.total(),positivePercentage:this.getPositivePercentage()})})))}}]),t}(n.Component));s.a.render(r.a.createElement(F,null),document.querySelector("#root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.50d071b6.chunk.js.map