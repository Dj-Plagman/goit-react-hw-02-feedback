(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,function(t,e,a){t.exports={list:"Statistics_list__19Nmn",listItem:"Statistics_listItem__2iGqR",quantity:"Statistics_quantity__1X_xp"}},,function(t,e,a){t.exports={btn:"Feedback_btn__lVmXB",good:"Feedback_good__Oi4lX Feedback_btn__lVmXB",neutral:"Feedback_neutral__1ErBS Feedback_btn__lVmXB",bad:"Feedback_bad__1V4_8 Feedback_btn__lVmXB"}},,function(t,e,a){t.exports={section:"Section_section__2udIT",title:"Section_title__2WXLO"}},,,,,function(t,e,a){t.exports={text:"Notification_text__3y-ED"}},,,,,,,function(t,e,a){},,function(t,e,a){"use strict";a.r(e);var n=a(2),c=a.n(n),s=a(6),i=a.n(s),o=(a(17),a(7)),l=a(8),r=a(9),d=a(12),b=a(11),u=a(3),j=a.n(u),m=a(0),_=function(t){var e=t.onLeaveFeedback;return Object(m.jsxs)("div",{children:[Object(m.jsx)("button",{type:"button",name:"good",onClick:e,className:j.a.good,children:"Good"}),Object(m.jsx)("button",{type:"button",name:"neutral",onClick:e,className:j.a.neutral,children:"Neutral"}),Object(m.jsx)("button",{type:"button",name:"bad",onClick:e,className:j.a.bad,children:"Bad"})]})},h=a(1),x=a.n(h),O=function(t){var e=t.good,a=t.neutral,n=t.bad,c=t.total,s=t.positivePercentage;return Object(m.jsxs)("ul",{className:x.a.list,children:[Object(m.jsxs)("li",{className:x.a.listItem,children:["Good: ",Object(m.jsx)("span",{className:x.a.quantity,children:e})]}),Object(m.jsxs)("li",{className:x.a.listItem,children:["Neutral: ",Object(m.jsx)("span",{className:x.a.quantity,children:a})]}),Object(m.jsxs)("li",{className:x.a.listItem,children:["Bad: ",Object(m.jsx)("span",{className:x.a.quantity,children:n})]}),Object(m.jsxs)("li",{className:x.a.listItem,children:["Total: ",Object(m.jsx)("span",{className:x.a.quantity,children:c})]}),Object(m.jsxs)("li",{className:x.a.listItem,children:["Positive feedback:"," ",Object(m.jsxs)("span",{className:x.a.quantity,children:[s,"%"]})]})]})},k=a(5),f=a.n(k),p=function(t){var e=t.title,a=t.children;return Object(m.jsxs)("section",{className:f.a.section,children:[Object(m.jsx)("h2",{className:f.a.title,children:e}),a]})},g=a(10),N=a.n(g),v=function(t){var e=t.message;return Object(m.jsx)("p",{className:N.a.text,children:e})};v.defaultProps={message:"No feedbacks yet"};var F=v,y=function(t){Object(d.a)(a,t);var e=Object(b.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={good:0,neutral:0,bad:0},t.addFeedback=function(e){t.setState((function(t){return Object(o.a)({},e.target.name,t[e.target.name]+1)}))},t.countTotalFeedback=function(){return t.state.good+t.state.neutral+t.state.bad},t.countPositiveFeedbackPercentage=function(){return Math.floor(t.state.good/t.countTotalFeedback()*100)},t}return Object(r.a)(a,[{key:"render",value:function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(p,{title:"Please leave feedback",children:Object(m.jsx)(_,{onLeaveFeedback:this.addFeedback})}),Object(m.jsx)(p,{title:"Statistics",children:this.countTotalFeedback()>0?Object(m.jsx)(O,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):Object(m.jsx)(F,{message:"No feedback given"})})]})}}]),a}(n.Component);y.defaultProps={};var P=y;i.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(P,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.ee9d3b30.chunk.js.map