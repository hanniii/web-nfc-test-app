(this["webpackJsonpweb-nfc-test-app"]=this["webpackJsonpweb-nfc-test-app"]||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(4),o=n.n(r),i=(n(11),n(1)),s=n.n(i),l=n(5),d=n(2);n(13);function u(){return m.apply(this,arguments)}function m(){return(m=Object(d.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!("NDEFReader"in window)){e.next=13;break}return t=new NDEFReader,e.prev=2,e.next=5,t.scan();case 5:t.onreading=function(e){var t,n=new TextDecoder,a=Object(l.a)(e.message.records);try{for(a.s();!(t=a.n()).done;){var c=t.value;"url"==c.recordType&&"http"==n.decode(c.data).substring(0,4)&&p(n.decode(c.data)),"http"!=n.decode(c.data).substring(0,4)&&g(n.decode(c.data)),f("\n"+n.decode(c.data)+"\n")}}catch(r){a.e(r)}finally{a.f()}},e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),f(e.t0);case 11:e.next=14;break;case 13:f("Web NFC is not supported.");case 14:case"end":return e.stop()}}),e,null,[[2,8]])})))).apply(this,arguments)}function f(e){document.getElementById("log").innerHTML+=e+"\n</br>"}function p(e){document.getElementById("fillImg").src=e}function g(e){document.getElementById("fillText").innerHTML+=e+"</br>"}var h=function(){return c.a.createElement("div",{className:"app text-center"},c.a.createElement("div",{className:"img"},c.a.createElement("img",{id:"fillImg",src:"",class:"img-fluid rounded",alt:""})),c.a.createElement("h3",{className:"fillText"}),c.a.createElement("button",{type:"button",className:"btn",onClick:u},"Scannen"),c.a.createElement("div",{className:"divlog"},c.a.createElement("div",{id:"log"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,n){e.exports=n(14)}},[[6,1,2]]]);
//# sourceMappingURL=main.e0b455ca.chunk.js.map