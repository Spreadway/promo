(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{140:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=(t(143),t(149)),l=t(153),c=t.n(l),o="undefined"!=typeof window&&window;try{o&&(window.$=window.jQuery=c.a)}catch(e){console.log(e)}a.default=function(){return r.a.createElement(s.a,{headerClassName:"darkgray"},r.a.createElement("div",null,r.a.createElement("section",{id:"site-main",className:"site-main-darkgray"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h2",{className:"fadeInLeft animate"},"Automate routines through templates and third-party services"),r.a.createElement("div",{className:"early-access-container"},r.a.createElement("a",{className:"btn btn-api fadeInUp animate",onClick:function(){return document.getElementById("cases").scrollIntoView()}},"Get updates"))),r.a.createElement("div",{className:"col-md-6 spread-images"},r.a.createElement("img",{src:"/images/relayers_main.svg",className:"spread-main spread-main-promo-img2",alt:"exchanges"}))))),r.a.createElement("section",{id:"cases"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"content-box"},r.a.createElement("h3",{className:"section-heading"},"How it works")),r.a.createElement("div",{className:"col-mdd-12"},r.a.createElement("div",{className:"cases-box fadeInLeft animate"},r.a.createElement("img",{src:"/images/step1relayers.svg",className:"spread-main",alt:"exchanges"}),r.a.createElement("div",{className:"case-desc"},r.a.createElement("h4",null,"Set task and specifications"),r.a.createElement("h6",{className:"cases-text2"},"Use our history intraday market data for backtesting your models, and our real-time market data stream for live trading and proactive portfolio risk management."))),r.a.createElement("div",{className:"cases-box fadeInLeft animate"},r.a.createElement("img",{src:"/images/step2relayers.svg",className:"spread-main",alt:"exchanges"}),r.a.createElement("div",{className:"case-desc"},r.a.createElement("h4",null,"We will offer multiple templates and services to do your task"),r.a.createElement("h6",{className:"cases-text2"},"Use our history intraday market data for backtesting your models, and our real-time market data stream for live trading and proactive portfolio risk management."))),r.a.createElement("div",{className:"cases-box fadeInLeft animate"},r.a.createElement("img",{src:"/images/step3relayers.svg",className:"spread-main",alt:"exchanges"}),r.a.createElement("div",{className:"case-desc"},r.a.createElement("h4",null,"Pay an extra small fee for the result"),r.a.createElement("h6",{className:"cases-text2"},"Use our history intraday market data for backtesting your models, and our real-time market data stream for live trading and proactive portfolio risk management."))))))),r.a.createElement("section",{id:"cases"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"content-box wanna-try"},r.a.createElement("h3",{className:"section-heading fadeInDown animate"},"Wanna try?"),r.a.createElement("p",null,"This is perhaps the perfect moment to stop reading",r.a.createElement("br",null),"and do some clicking instead."),r.a.createElement("p",{className:"hidden-success"},"Thanks!"),r.a.createElement("form",{action:"https://send.pageclip.co/0pHRl3IHAP0G7NyWOex5HGulUEV34j1a/contact-form",className:"pageclip-form",method:"post"},r.a.createElement("div",{className:"form-fields"},r.a.createElement("input",{type:"text",className:"form-control",name:"name",placeholder:"Jonhn Doe"}),r.a.createElement("input",{type:"email",className:"form-control",name:"email",placeholder:"john@acme.com"})),r.a.createElement("button",{type:"submit",className:"btn btn-api fadeInUp animate"},"Get early access"))))))))}},143:function(e,a,t){"use strict";t.r(a),t.d(a,"graphql",function(){return f}),t.d(a,"StaticQueryContext",function(){return p}),t.d(a,"StaticQuery",function(){return u});var n=t(0),r=t.n(n),s=t(4),l=t.n(s),c=t(142),o=t.n(c);t.d(a,"Link",function(){return o.a}),t.d(a,"withPrefix",function(){return c.withPrefix}),t.d(a,"navigate",function(){return c.navigate}),t.d(a,"push",function(){return c.push}),t.d(a,"replace",function(){return c.replace}),t.d(a,"navigateTo",function(){return c.navigateTo});var i=t(144),m=t.n(i);t.d(a,"PageRenderer",function(){return m.a});var d=t(33);t.d(a,"parsePath",function(){return d.a});var p=r.a.createContext({}),u=function(e){return r.a.createElement(p.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}u.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},144:function(e,a,t){var n;e.exports=(n=t(146))&&n.default||n},145:function(e){e.exports={data:{site:{siteMetadata:{title:"Spread | AI-powered freelance platform"}}}}},146:function(e,a,t){"use strict";t.r(a);t(34);var n=t(0),r=t.n(n),s=t(4),l=t.n(s),c=t(48),o=t(2),i=function(e){var a=e.location,t=o.default.getResourcesForPathnameSync(a.pathname);return r.a.createElement(c.a,Object.assign({location:a,pageResources:t},t.json))};i.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},a.default=i},147:function(e,a,t){},149:function(e,a,t){"use strict";var n=t(145),r=t(0),s=t.n(r),l=t(4),c=t.n(l),o=t(150),i=t.n(o),m=t(143),d=function(e){var a="undefined"!=typeof document&&document;try{if(a)return document.location.pathname==e?"active":""}catch(e){return console.log(e),""}},p=function(e){e.siteTitle;var a=e.headerClassName;return s.a.createElement("nav",{className:["navbar navbar-default navbar-fixed-top affix-top"].concat([a]).join(" "),"data-spy":"affix","data-offset-top":800,role:"navigation"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"navbar-header"},s.a.createElement("button",{type:"button",className:"navbar-toggle collapsed","data-toggle":"collapse","data-target":"#navbar-collapse","aria-expanded":"false"},s.a.createElement("span",{className:"sr-only"},"Toggle navigation"),s.a.createElement("span",{className:"icon-bar"}),s.a.createElement("span",{className:"icon-bar"}),s.a.createElement("span",{className:"icon-bar"})),s.a.createElement("a",{className:"navbar-brand",href:"/"},"Spread")),s.a.createElement("div",{className:"collapse navbar-collapse",id:"navbar-collapse","aria-expanded":"false"},s.a.createElement("form",{className:"navbar-form navbar-right subscribe-form hidden-sm"}),s.a.createElement("ul",{className:"nav navbar-nav navbar-right"},s.a.createElement("li",{className:d("/")},s.a.createElement("a",{href:"/"},"For Clients")),s.a.createElement("li",{className:d("/freelancers/")},s.a.createElement("a",{href:"/freelancers/"},"For Freelancers")),s.a.createElement("li",{className:d("/relayers/")},s.a.createElement("a",{href:"/relayers/"},"Relayers"))))))},u=function(e){e.siteTitle;return s.a.createElement("footer",{className:"footer"},s.a.createElement("div",{className:"top-footer"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-sm-2"},s.a.createElement("h6",{className:"footer-title space-bottom-2x hidden-xs"},"Product"),s.a.createElement("h6",{className:"footer-title visible-xs collapsed","data-toggle":"collapse","data-target":"#product","aria-expanded":"false"},"Product"),s.a.createElement("ul",{className:"list-group collapse",id:"product","aria-expanded":"false"},s.a.createElement("li",{className:"list-group-item"},s.a.createElement("a",{href:"/#pricing"},"Pricing")),s.a.createElement("li",{className:"list-group-item"},s.a.createElement("a",{href:"https://medium.com/spread-dao"},"Blog"))))))),s.a.createElement("div",{className:"bottom-footer"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-sm-12"},s.a.createElement("p",{className:"separator-top-1x"},s.a.createElement("span",{className:"text-left"},"Copyright 2018-2019 Empire InCloud LTD. All rights reserved.")))))))},f=(t(151),t(147),function(e){var a=e.children,t=e.headerClassName;return s.a.createElement(m.StaticQuery,{query:"755544856",render:function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement(i.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"freelance platform"},{name:"keywords",content:"freelance, platform"}]},s.a.createElement("meta",{charset:"utf-8"}),s.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"}),s.a.createElement("meta",{property:"og:image",content:"/images/apple-touch-icon.png"}),s.a.createElement("link",{rel:"image_src",href:"/images/apple-touch-icon.png"}),s.a.createElement("meta",{name:"description",content:"Spread provides fast, reliable, unified access to best freelancers."}),s.a.createElement("meta",{name:"keywords",content:"spread, freelance, upwork, market data"}),s.a.createElement("link",{rel:"shortcut icon",href:"/images/favicon-32x32.png",type:"image/x-icon"}),s.a.createElement("link",{rel:"icon",href:"/images/favicon-32x32.png",type:"image/x-icon"}),s.a.createElement("title",null,"Spread - AI-powered freelance platform"),s.a.createElement("link",{rel:"stylesheet",href:"/stylesheets/boostrap.css"}),s.a.createElement("link",{href:"/stylesheets/styles.css",rel:"stylesheet",media:"screen"}),s.a.createElement("link",{rel:"stylesheet",href:"https://s.pageclip.co/v1/pageclip.css",media:"screen"}),s.a.createElement("script",{src:"https://s.pageclip.co/v1/pageclip.js",charset:"utf-8"}),s.a.createElement("script",{src:"/javascripts/lib/jquery/jquery.js",type:"text/javascript"}),s.a.createElement("script",{src:"/javascripts/js/site.js",type:"text/javascript"}),s.a.createElement("script",{src:"https://cdn.jsdelivr.net/npm/typed.js@2.0.9"}),s.a.createElement("script",{src:"https://cdn.jsdelivr.net/npm/jquery.scrollto@2.1.2/jquery.scrollTo.min.js"}),s.a.createElement("script",null,"\n        $( document ).ready(function() {\n                  var typed = new Typed(\"#indexheadertypings\", {\n                  strings: ['job', 'task', 'startup', 'project'],\n                  typeSpeed: 100,\n                  backSpeed: 50,\n                  backDelay: 2000,\n                  startDelay: 2000,\n                  loop: true,\n                  onComplete: function(self) { console.log('onCmplete ' + self) },\n                  preStringTyped: function(pos, self) { console.log('preStringTyped ' + pos + ' ' + self); },\n                  onStringTyped: function(pos, self) { console.log('onStringTyped ' + pos + ' ' + self) },\n                  onLastStringBackspaced: function(self) { console.log('onLastStringBackspaced ' + self) },\n                  onTypingPaused: function(pos, self) { console.log('onTypingPaused ' + pos + ' ' + self) },\n                  onTypingResumed: function(pos, self) { console.log('onTypingResumed ' + pos + ' ' + self) },\n                  onReset: function(self) { console.log('onReset ' + self) },\n                  onStop: function(pos, self) { console.log('onStop ' + pos + ' ' + self) },\n                  onStart: function(pos, self) { console.log('onStart ' + pos + ' ' + self) },\n                  onDestroy: function(self) { console.log('onDestroy ' + self) }\n                });\n        });\n      ")),s.a.createElement(p,{siteTitle:e.site.siteMetadata.title,headerClassName:t}),s.a.createElement("div",{className:"page-wrapper"},a),s.a.createElement(u,null))},data:n})});f.propTypes={children:c.a.node.isRequired};a.a=f}}]);
//# sourceMappingURL=component---src-pages-relayers-jsx-880569f6c3c552767fbb.js.map