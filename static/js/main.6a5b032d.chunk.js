(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{111:function(e,t,a){},176:function(e,t,a){e.exports=a.p+"static/media/cms-logo.9ce63631.png"},187:function(e){e.exports=JSON.parse('{"images":[{"id":1,"name":"CMSSW_10_6_8_patch1","tag":"2020-02-19-df153472","createdAt":"2020-02-19","pull":"gitlab-registry.cern.ch/alintulu/cmssw-docker-ci/cmssw:CMSSW_10_6_8_patch1-2020-02-19-df153472"},{"id":2,"name":"CMSSW_10_6_8_patch1","tag":"2020-05-12-cdf5c9a1","createdAt":"2020-05-12","pull":"gitlab-registry.cern.ch/alintulu/cmssw-docker-ci/cmssw:CMSSW_10_6_8_patch1-2020-05-12-cdf5c9a1"},{"id":3,"name":"CMSSW_7_1_25_patch5","tag":"2020-02-13-899c1373","createdAt":"2020-02-13","pull":"gitlab-registry.cern.ch/alintulu/cmssw-docker-ci/cmssw:CMSSW_10_6_8_patch1-2020-02-19-df153472"},{"id":4,"name":"CMSSW_7_1_25_patch5","tag":"2020-02-18-847c8252","createdAt":"2020-02-18","pull":"gitlab-registry.cern.ch/alintulu/cmssw-docker-ci/cmssw:CMSSW_10_6_8_patch1-2020-02-19-df153472"},{"id":5,"name":"CMSSW_9_2_1","tag":"2020-02-19-df153472","createdAt":"2020-02-19","pull":"gitlab-registry.cern.ch/alintulu/cmssw-docker-ci/cmssw:CMSSW_9_2_1-2020-02-19-df153472"},{"id":6,"name":"CMSSW_9_3_9","tag":"2020-02-19-5e7c8abc","createdAt":"2020-02-19","pull":"gitlab-registry.cern.ch/alintulu/cmssw-docker-ci/cmssw:CMSSW_9_2_1-2020-02-19-df153472"}]}')},197:function(e,t,a){e.exports=a(382)},210:function(e,t,a){},211:function(e,t,a){},213:function(e,t,a){},291:function(e,t,a){},292:function(e,t,a){},293:function(e,t,a){},294:function(e,t,a){},313:function(e,t,a){},314:function(e,t,a){},315:function(e,t,a){},319:function(e,t,a){},380:function(e,t,a){},382:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(36),l=a.n(r),o=a(28),m=a(32),i=a(43),s=(a(210),a(44)),u=a(45),d=a(47),p=a(46),h=a(5),g=(a(111),a(211),function(){return c.a.createElement("nav",{className:"Header"},c.a.createElement(o.c,{key:"home",className:"Header-link",exact:!0,to:"/",activeClassName:"active"},"Home"),c.a.createElement(o.c,{key:"second-page",className:"Header-link",exact:!0,to:"/page-two",activeClassName:"active"},"Second Page"),c.a.createElement(o.c,{key:"third-page",className:"Header-link",exact:!0,to:"/page-three",activeClassName:"active"},"Third Page"))}),E=a(387);a(213);function f(){return c.a.createElement("footer",{className:"footer-bottom"},c.a.createElement("span",null,"Copyright \xa9 2020 Adelina - peace out"),c.a.createElement("span",{className:"links"},c.a.createElement("a",{href:"/",target:"_blank",rel:"noopener noreferrer"},c.a.createElement(E.a,{name:"book"})," Docs"),c.a.createElement("a",{href:"/",target:"_blank",rel:"noopener noreferrer"},c.a.createElement(E.a,{name:"discourse"})," Forum"),c.a.createElement("a",{href:"/",target:"_blank",rel:"noopener noreferrer"},c.a.createElement(E.a,{name:"conversation"})," Chat")))}a(291);var v=function(e){var t=e.title;return c.a.createElement("header",{className:"Screen-header"},c.a.createElement("h1",{className:"Screen-title"},t))},_=(a(292),a(176)),S=a.n(_),C=function(e){e.details,e.demo;return c.a.createElement("div",{className:"Home"},c.a.createElement("div",{className:"Background"}),c.a.createElement("div",{className:"Home-text"},c.a.createElement("img",{src:S.a,className:"App-logo",alt:"logo"}),c.a.createElement(v,{id:"home-header",title:"Service for CMSSW Docker image building"}),c.a.createElement("p",null,"Build your CMS docker images!")))},b=Object(m.b)((function(e){return{details:0,demo:e.demo}}),null)(C),N=(a(293),a(294),n.Component,a(148),a(313),function(){return c.a.createElement("div",{className:"Home"},c.a.createElement("form",{class:"contact-form",action:""},c.a.createElement("p",null,c.a.createElement("input",{class:"gutter",type:"text",placeholder:"OS"})),c.a.createElement("p",null,c.a.createElement("input",{class:"gutter",type:"text",placeholder:"CMSSW"})),c.a.createElement("p",null,c.a.createElement("input",{type:"text",placeholder:"SCRAM_ARCH"})),c.a.createElement("input",{type:"submit",value:"Request image"})))}),k=function(e){var t=e.demo;return console.log("Reducer three is",{demo:t}),c.a.createElement("div",{className:"Home"},c.a.createElement("div",{className:"Background"}),c.a.createElement("div",{className:"Home-text"},c.a.createElement(v,{id:"home-header",title:"Request an image"}),c.a.createElement("div",null,c.a.createElement(N,null))))},y=Object(m.b)((function(e){return{details:e.details,demo:e.demo}}),null)(k),w=(a(314),a(78)),x=(a(315),a(386)),O=a(177),j=(a(319),function(e){var t=e.text,a=Object(n.useState)(!1),r=Object(w.a)(a,2),l=r[0],o=r[1];return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"content"}),t,c.a.createElement(x.a,{trigger:c.a.createElement(O.CopyToClipboard,{text:{text:t}.text.join(""),onCopy:function(){o(!0);var e=setTimeout((function(){o(!1),clearTimeout(e)}),1500)}},c.a.createElement(E.a,{name:"copy outline",className:"copy-icon"})),content:"Copied!",open:l,inverted:!0}))}),M=function(e){var t=e.name,a=e.text,r=Object(n.useState)(!1),l=Object(w.a)(r,2),m=l[0],i=l[1];return c.a.createElement("span",{onClick:function(){return m?(i(!0),void console.log({setZoomed:i})):(i(!1),void console.log({setZoomed:i}))}},c.a.createElement(o.b,{to:"/page-three"},c.a.createElement("div",{className:"Card",activeclassname:"active-card"},c.a.createElement("div",{className:"Card-element"},c.a.createElement("div",{className:"Card-description"},t),c.a.createElement(j,{text:a})))))},W=(a(380),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleSearchChange=function(e){n.setState({search:e.target.value.toLowerCase()}),console.log(n.state)},n.state={search:""},n}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.props.elements,a=this.state.search,n={elements:t}.elements.images.filter((function(e){return e.name.toLowerCase().includes(a)}));return console.log("Hey look here",{filteredElements:n}),c.a.createElement("div",null,c.a.createElement("input",{className:"search",type:"text",value:a,onChange:function(t){return e.handleSearchChange(t)},placeholder:"Search..."}),c.a.createElement("div",{className:"Elements"},n.map((function(e){return console.log({element:e}.element),c.a.createElement("span",{key:e.id,className:"Element"},c.a.createElement(M,{name:e.name,text:["docker pull ",{element:e}.element.pull]}))}))))}}]),a}(n.Component)),H=function(e){var t=e.demo;return console.log("Reducer third page is ",t.images),console.log("Hey Clemens"),c.a.createElement("div",{className:"Home"},c.a.createElement("div",{className:"Background"}),c.a.createElement("div",{className:"Home-text"},c.a.createElement(v,{id:"home-header",title:"Find your image"}),c.a.createElement(W,{elements:t})))},A=Object(m.b)((function(e){return{details:e.details,demo:e.demo}}),null)(H),R=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(g,null),c.a.createElement("div",{className:"Content"},c.a.createElement(h.c,null,c.a.createElement(h.a,{exact:!0,path:"/",component:b}),c.a.createElement(h.a,{exact:!0,path:"/page-two",component:y}),c.a.createElement(h.a,{exact:!0,path:"/page-three",component:A}))),c.a.createElement(f,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(381);var B=a(187),T=Object(i.c)(Object(i.b)({demo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;return t.type,e}}));console.log("Reducer is",T.getState()),l.a.render(c.a.createElement(m.a,{store:T},c.a.createElement(o.a,null,c.a.createElement(R,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[197,1,2]]]);
//# sourceMappingURL=main.6a5b032d.chunk.js.map