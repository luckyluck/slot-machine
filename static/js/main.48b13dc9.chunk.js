(this["webpackJsonpvending-machine"]=this["webpackJsonpvending-machine"]||[]).push([[0],[,,,,,,function(t,e,n){t.exports=n(15)},,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),o=n(5),c=n.n(o),r=(n(11),n(1)),l=n(2),s=(n(12),n(13),n(3)),u=(n(14),function(t){var e=t.start,n=t.delay,o=t.list,c=t.item,r=t.init,l=t.width,u=t.height,m=Object(a.useCallback)((function(t){if(!e)return r?-u*o.indexOf(t.toLowerCase()):0;var n=o.lastIndexOf(t.toLowerCase());return-u*(n>-1?n:o.length)}),[e,r,o]),h=Object(s.b)({from:{top:0},to:{top:m(c)},config:{duration:1500+Math.floor(1500*Math.random())+100},delay:n});return i.a.createElement(s.a.ul,{className:"List",style:h},o.map((function(t,e){return i.a.createElement("li",{style:{width:"".concat(l,"px"),height:"".concat(u,"px")},key:e},t)})))}),m=function(t){var e=t.onStart,n=t.value,o=t.list,c=(t.laps,t.init),r=void 0!==c&&c,s=t.auto,m=void 0!==s&&s,h=t.infinite,d=void 0!==h&&h,f=t.slotWidth,v=void 0===f?50:f,p=t.slotHeight,E=void 0===p?60:p,g=Object(a.useState)(m),b=Object(l.a)(g,2),w=b[0],O=b[1],j=-50;return Object(a.useEffect)((function(){null===e||void 0===e||d||O(e)}),[e,d]),Object(a.useEffect)((function t(){if(d){var e=Math.floor(3e4*Math.random())+1e3;setTimeout((function(){O((function(t){return!t})),t()}),e)}}),[d]),i.a.createElement("div",{className:"Counter"},n.split("").map((function(t,e){return n=t,new RegExp(/([a-z\d])/,"gi").test(n)?(j+=50,i.a.createElement("div",{className:"ListContainer",key:e,style:{width:"".concat(v,"px"),height:"".concat(E,"px")}},i.a.createElement(u,{delay:j,item:t,list:o,start:w,init:r,width:v,height:E}))):i.a.createElement("span",{className:"StaticElement",style:{width:" "===t?"".concat(v,"px"):"auto",height:"".concat(E,"px")},key:e},t);var n})))};var h=function(){var t=Object(a.useState)(!1),e=Object(l.a)(t,2),n=e[0],o=e[1],c=function(){var t=10;return Object(r.a)(new Array(26)).reduce((function(e){return e.push(t.toString(36)),t++,e}),[])}(),s=[].concat(Object(r.a)(c),Object(r.a)(c),Object(r.a)(c)),u=[0,1,2,3,4,5,6,7,8,9].map((function(t){return t.toString()}));return i.a.createElement(i.a.Fragment,null,i.a.createElement(m,{onStart:n,value:"Slot Machine",list:s}),i.a.createElement(m,{onStart:n,value:"Slot Machine",list:s,init:!0}),i.a.createElement("div",{className:"row"},i.a.createElement(m,{value:"Jackpot",list:s,infinite:!0,init:!0,slotHeight:30,slotWidth:25}),i.a.createElement(m,{value:"Jackpot",list:s,infinite:!0,init:!0,slotHeight:30,slotWidth:25}),i.a.createElement(m,{value:"Jackpot",list:s,infinite:!0,init:!0,slotHeight:30,slotWidth:25})),i.a.createElement(m,{value:"0123456789",list:u,auto:!0}),i.a.createElement(m,{onStart:n,value:"0123456789",list:[].concat(Object(r.a)(u),Object(r.a)(u),Object(r.a)(u))}),i.a.createElement(m,{onStart:n,value:"$1.234,34",list:u}),i.a.createElement("div",{className:"Controls"},i.a.createElement("button",{onClick:function(){return o(!1)}},"Reset"),i.a.createElement("button",{onClick:function(){return o(!0)}},"Start")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}],[[6,1,2]]]);
//# sourceMappingURL=main.48b13dc9.chunk.js.map