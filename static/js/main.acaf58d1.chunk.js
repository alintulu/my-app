(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{101:function(e,t,a){e.exports=a.p+"static/media/cms-logo.9ce63631.png"},113:function(e,t,a){e.exports=a(242)},126:function(e,t,a){},127:function(e,t,a){},129:function(e,t,a){},234:function(e,t,a){},235:function(e,t,a){},236:function(e,t,a){},237:function(e,t,a){},238:function(e,t,a){},239:function(e,t,a){},240:function(e,t,a){},242:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(86),l=a.n(c),o=a(11),m=a(12),i=a(17),s=(a(126),a(18)),u=a(19),d=a(22),p=a(21),h=a(2),g=(a(62),a(127),function(){return r.a.createElement("nav",{className:"Header"},r.a.createElement(o.c,{key:"home",className:"Header-link",exact:!0,to:"/",activeClassName:"active"},"Home"),r.a.createElement(o.c,{key:"second-page",className:"Header-link",exact:!0,to:"/page-two",activeClassName:"active"},"Second Page"),r.a.createElement(o.c,{key:"third-page",className:"Header-link",exact:!0,to:"/page-three",activeClassName:"active"},"Third Page"))}),E=a(245);a(129);function f(){return r.a.createElement("footer",{className:"footer-bottom"},r.a.createElement("span",null,"Copyright \xa9 2020 Adelina - peace out"),r.a.createElement("span",{className:"links"},r.a.createElement("a",{href:"/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(E.a,{name:"book"})," Docs"),r.a.createElement("a",{href:"/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(E.a,{name:"discourse"})," Forum"),r.a.createElement("a",{href:"/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(E.a,{name:"conversation"})," Chat")))}a(234);var v=function(e){var t=e.title;return r.a.createElement("header",{className:"Screen-header"},r.a.createElement("h1",{className:"Screen-title"},t))},b=(a(235),a(101)),k=a.n(b),y=function(e){e.details,e.demo;return r.a.createElement("div",{className:"Home"},r.a.createElement("div",{className:"Home-text"},r.a.createElement("img",{src:k.a,className:"App-logo",alt:"logo"}),r.a.createElement(v,{id:"home-header",title:"Service for CMSSW Docker image building"}),r.a.createElement("p",null,"Build your CMS docker images!")))},C=Object(m.b)((function(e){return{details:0,demo:e.demo}}),null)(y),N=(a(236),a(237),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"renderTableData",value:function(e){return e.map((function(e,t){var a=e.id,n=e.name,c=e.tag,l=e.createdAt;return r.a.createElement("tr",{key:a},r.a.createElement("td",null,a),r.a.createElement("td",null,n),r.a.createElement("td",null,c),r.a.createElement("td",null,l))}))}},{key:"renderTableHeader",value:function(e){return Object.keys(e[0]).map((function(e,t){return r.a.createElement("th",{key:t},e.toUpperCase())}))}},{key:"render",value:function(){var e=this.props;return console.log(e.images.images),r.a.createElement("div",null,r.a.createElement("table",{id:"students"},r.a.createElement("tbody",null,r.a.createElement("tr",null,this.renderTableHeader(e.images.images)),this.renderTableData(e.images.images))))}}]),a}(n.Component)),_=function(e){var t=e.demo;return console.log("Reducer three is",{demo:t}),r.a.createElement("div",{className:"Home"},r.a.createElement("div",{className:"Background",style:{backgroundImage:'url("./plants.jpg")'}}),r.a.createElement("div",{className:"Home-text"},r.a.createElement(v,{id:"home-header",title:"Currently built images"}),r.a.createElement(N,{images:t})))},S=Object(m.b)((function(e){return{details:e.details,demo:e.demo}}),null)(_),j=(a(238),a(239),function(e){var t=e.name;return r.a.createElement("span",null,r.a.createElement(o.b,{to:"/"},r.a.createElement("div",{className:"Card complete"},r.a.createElement("div",{className:"Card-element"},r.a.createElement("div",{className:"Card-description"},t)))))}),O=(a(240),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleSearchChange=function(e){n.setState({search:e.target.value.toLowerCase()}),console.log(n.state)},n.state={search:""},n}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.props.elements,a=this.state.search,n={elements:t}.elements.images.filter((function(e){return e.name.toLowerCase().includes(a)}));return console.log("Hey look here",{filteredElements:n}),r.a.createElement("div",null,r.a.createElement("input",{className:"search",type:"text",value:a,onChange:function(t){return e.handleSearchChange(t)},placeholder:"Search..."}),r.a.createElement("div",{className:"Elements"},n.map((function(e){return r.a.createElement("span",{key:e.id,className:"Element"},r.a.createElement(j,{name:e.name}))}))))}}]),a}(n.Component)),H=function(e){var t=e.demo;return console.log("Reducer third page is ",{demo:t}),r.a.createElement("div",{className:"Home"},r.a.createElement("div",{className:"Background",style:{backgroundImage:'url("./plants.jpg")'}}),r.a.createElement("div",{className:"Home-text"},r.a.createElement(v,{id:"home-header",title:"Find your image"}),r.a.createElement(O,{elements:t})))},w=Object(m.b)((function(e){return{details:e.details,demo:e.demo}}),null)(H),x=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(g,null),r.a.createElement("div",{className:"Content"},r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",component:C}),r.a.createElement(h.a,{exact:!0,path:"/page-two",component:S}),r.a.createElement(h.a,{exact:!0,path:"/page-three",component:w}))),r.a.createElement(f,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(241);var A={images:[{id:1,name:"CMSSW_10_6_8_patch1",tag:"2020-02-19-df153472",createdAt:"2020-02-19"},{id:2,name:"CMSSW_10_6_8_patch1",tag:"2020-05-12-cdf5c9a1",createdAt:"2020-05-12"},{id:3,name:"CMSSW_7_1_25_patch5",tag:"2020-02-13-899c1373",createdAt:"2020-02-13"},{id:4,name:"CMSSW_7_1_25_patch5",tag:"2020-02-18-847c8252",createdAt:"2020-02-18"},{id:5,name:"CMSSW_9_2_1",tag:"2020-02-19-df153472",createdAt:"2020-02-19"},{id:6,name:"CMSSW_9_3_9",tag:"2020-02-19-5e7c8abc",createdAt:"2020-02-19"}]},W=Object(i.c)(Object(i.b)({demo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;return t.type,e}}));console.log("Reducer is",W.getState()),l.a.render(r.a.createElement(m.a,{store:W},r.a.createElement(o.a,null,r.a.createElement(x,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},62:function(e,t,a){}},[[113,1,2]]]);
//# sourceMappingURL=main.acaf58d1.chunk.js.map