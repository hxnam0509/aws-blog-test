(this["webpackJsonplinkedin-path-1-full-stack-site-aws"]=this["webpackJsonplinkedin-path-1-full-stack-site-aws"]||[]).push([[0],{27:function(e,t,n){},28:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var i=n(1),s=n.n(i),a=n(21),u=n.n(a),c=(n(27),n(28),n(8)),r=n(2),l=n(0),o=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:"About me"}),Object(l.jsx)("p",{children:"Welcome to my blog! Proin congue ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo. Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis, non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at sodales purus euismod."}),Object(l.jsx)("p",{children:"Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id consequat quam. Vivamus accumsan dui in facilisis aliquet.,"}),Object(l.jsx)("p",{children:"Etiam nec lectus urna. Sed sodales ultrices dapibus. Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id consequat quam. Vivamus accumsan dui in facilisis aliquet.,"})]})},m=n(7),d=n.n(m),p=n(10),b=n(12),j=function(e){var t=e.articleName,n=e.setArticleInfo,s=Object(i.useState)(""),a=Object(b.a)(s,2),u=a[0],c=a[1],r=Object(i.useState)(""),o=Object(b.a)(r,2),m=o[0],j=o[1],h=function(){var e=Object(p.a)(d.a.mark((function e(){var i,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(t,"/add-comment"),{method:"POST",body:JSON.stringify({username:u,text:m}),headers:{"Content-Type":"application/json"}});case 2:return i=e.sent,e.next=5,i.json();case 5:s=e.sent,n(s),c(""),j("");case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{id:"add-comment-form",children:[Object(l.jsx)("h3",{children:"Add a Comment"}),Object(l.jsxs)("label",{children:["Name:",Object(l.jsx)("input",{type:"text",value:u,onChange:function(e){return c(e.target.value)}})]}),Object(l.jsxs)("label",{children:["Comment:",Object(l.jsx)("textarea",{rows:"4",cols:"50",value:m,onChange:function(e){return j(e.target.value)}})]}),Object(l.jsx)("button",{onClick:function(){return h()},children:"Add Comment"})]})},h=function(e){var t=e.articles;return Object(l.jsx)(l.Fragment,{children:t.map((function(e,t){return Object(l.jsxs)(c.b,{className:"article-list-item",to:"/article/".concat(e.name),children:[Object(l.jsx)("h3",{children:e.title}),Object(l.jsxs)("p",{children:[e.content[0].substring(0,150),"..."]})]},t)}))})},v=function(e){var t=e.comments;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h3",{children:"Comments:"}),t.map((function(e,t){return Object(l.jsxs)("div",{className:"comment",children:[Object(l.jsx)("h4",{children:e.username}),Object(l.jsx)("p",{children:e.text})]},t)}))]})},f=function(e){var t=e.articleName,n=e.upvotes,i=e.setArticleInfo;function s(){return(s=Object(p.a)(d.a.mark((function e(){var n,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(t,"/upvote"),{method:"POST"});case 2:return n=e.sent,e.next=5,n.json();case 5:s=e.sent,i(s);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(l.jsxs)("div",{id:"upvotes-section",children:[Object(l.jsx)("button",{onClick:function(){return s.apply(this,arguments)},children:"Upvote"}),Object(l.jsxs)("p",{children:["This post has been upvoted ",n," times"]})]})},g=[{name:"learn-react",title:"The Fastest Way to Learn React",content:["Welcome! Today we're going to be talking about the fastest way to\n            learn React. We'll be discussing some topics such as proin congue\n            ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo. \n            Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis, \n            non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut \n            eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at \n            sodales purus euismod.","Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. \n            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan \n            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus \n            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor \n            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id \n            consequat quam. Vivamus accumsan dui in facilisis aliquet."]},{name:"learn-node",title:"How to Build a Node Server in 10 Minutes",content:["In this article, we're going to be talking looking at a very quick way\n            to set up a Node.js server. We'll be discussing some topics such as proin congue\n            ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo. \n            Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis, \n            non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut \n            eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at \n            sodales purus euismod.","Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. \n            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan \n            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus \n            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor \n            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id \n            consequat quam. Vivamus accumsan dui in facilisis aliquet."]},{name:"my-thoughts-on-resumes",title:"My Thoughts on Resumes",content:["Today is the day I talk about something which scares most people: resumes.\n            In reality, I'm not sure why people have such a hard time with proin congue\n            ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo. \n            Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis, \n            non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut \n            eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at \n            sodales purus euismod.","Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. \n            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan \n            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus \n            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor \n            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id \n            consequat quam. Vivamus accumsan dui in facilisis aliquet."]}],O=n(13),x=n(14),q=n(16),N=n(15),y=function(e){Object(q.a)(n,e);var t=Object(N.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return Object(x.a)(n,[{key:"render",value:function(){return Object(l.jsx)("h1",{children:"404 - Not Found"})}}]),n}(i.Component),A=function(e){var t=e.match.params.name,n=g.find((function(e){return e.name===t})),s=Object(i.useState)({upvotes:0,comments:[]}),a=Object(b.a)(s,2),u=a[0],c=a[1];if(Object(i.useEffect)((function(){(function(){var e=Object(p.a)(d.a.mark((function e(){var n,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:i=e.sent,c(i);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),!n)return Object(l.jsx)(y,{});var r=g.filter((function(e){return e.name!==t}));return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:n.title}),Object(l.jsx)(f,{articleName:t,upvotes:u.upvotes,setArticleInfo:c}),n.content.map((function(e,t){return Object(l.jsx)("p",{children:e},t)})),Object(l.jsx)(v,{comments:u.comments}),Object(l.jsx)(j,{articleName:t,setArticleInfo:c}),Object(l.jsx)("h3",{children:"Other Articles:"}),Object(l.jsx)(h,{articles:r})]})},S=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:"Articles"}),Object(l.jsx)(h,{articles:g})]})},w=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:"Hello, welcome to my blog!"}),Object(l.jsx)("p",{children:"Welcome to my blog! Proin congue ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo. Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis, non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at sodales purus euismod."}),Object(l.jsx)("p",{children:"Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id consequat quam. Vivamus accumsan dui in facilisis aliquet.,"}),Object(l.jsx)("p",{children:"Etiam nec lectus urna. Sed sodales ultrices dapibus. Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id consequat quam. Vivamus accumsan dui in facilisis aliquet.,"})]})},k=function(e){Object(q.a)(n,e);var t=Object(N.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return Object(x.a)(n,[{key:"render",value:function(){return Object(l.jsx)("nav",{children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(c.b,{to:"/",children:"Home"})}),Object(l.jsx)("li",{children:Object(l.jsx)(c.b,{to:"/about",children:"About"})}),Object(l.jsx)("li",{children:Object(l.jsx)(c.b,{to:"/article-list",children:"Articles"})})]})})}}]),n}(i.Component);var M=function(){return Object(l.jsx)(c.a,{children:Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(k,{}),Object(l.jsx)("div",{id:"page-body",children:Object(l.jsxs)(r.c,{children:[Object(l.jsx)(r.a,{component:w,path:"/",exact:!0}),Object(l.jsx)(r.a,{component:o,path:"/about"}),Object(l.jsx)(r.a,{component:S,path:"/article-list"}),Object(l.jsx)(r.a,{component:A,path:"/article/:name"}),Object(l.jsx)(r.a,{component:y})]})})]})})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,a=t.getLCP,u=t.getTTFB;n(e),i(e),s(e),a(e),u(e)}))};u.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(M,{})}),document.getElementById("root")),I()}},[[39,1,2]]]);
//# sourceMappingURL=main.3265435e.chunk.js.map