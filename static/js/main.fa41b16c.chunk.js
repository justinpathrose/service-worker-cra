(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,n,t){},15:function(e,n,t){},16:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),a=t(2),i=t.n(a),c=(t(14),t(3)),s=t(4),l=t(6),d=t(5),u=t(7),p=(t(15),function(e){function n(){return Object(c.a)(this,n),Object(l.a)(this,Object(d.a)(n).apply(this,arguments))}return Object(u.a)(n,e),Object(s.a)(n,[{key:"componentDidMount",value:function(){setTimeout(function(){var e=new Image;e.src="./other.jpg",document.body.appendChild(e)},3e3)}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("p",null,"Edit ",r.a.createElement("code",null,"src/App.js")," and save to reload."),r.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")))}}]),n}(o.Component));var g={register:function(){"serviceWorker"in navigator&&window.addEventListener("load",function(){navigator.serviceWorker.register("SW.js").then(function(e){console.log("Service worker registration successful, scope is: ",e.scope),navigator.serviceWorker.addEventListener("message",function(e){"RELOAD_PAGE"===e.data.type&&(console.log("Reload page event received from service worker at client"),window.location.reload())}),e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){switch(n.state){case"installed":navigator.serviceWorker.controller?(console.log("New or updated content is available."),window.confirm("New Version of App is available. Do you want to update?")&&(console.log("post message to service worker to skip waiting"),n.postMessage({type:"SKIP_WAITING"}))):console.log("Content is now available offline!");break;case"redundant":console.error("The installing service worker became redundant.")}}}}).catch(function(e){return console.log("Error during service worker registration:",e)})})}};i.a.render(r.a.createElement(p,null),document.getElementById("root")),g.register()},8:function(e,n,t){e.exports=t(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.fa41b16c.chunk.js.map