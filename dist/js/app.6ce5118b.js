(function(t){function e(e){for(var r,a,l=e[0],o=e[1],u=e[2],p=0,f=[];p<l.length;p++)a=l[p],i[a]&&f.push(i[a][0]),i[a]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);c&&c(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,l=1;l<n.length;l++){var o=n[l];0!==i[o]&&(r=!1)}r&&(s.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},i={app:0},s=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var c=o;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("6bd9")},"7d0a":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"player"},t._l(t.playlist,function(e,r){return n("div",{key:r},[n("p",{on:{click:function(e){return t.playMe(r)}}},[t._v(" track # "+t._s(r+1)+" "+t._s(t.files[r])+" ")]),n("div",{staticClass:"flex",staticStyle:{'{"display"':'"flex"}'}},[n("a",{staticClass:"mdi mdi-pause",on:{click:function(e){return t.pause(r)}}},[t._v(" || ")]),n("a",{staticClass:"mdi mdi-stop",on:{click:function(e){return t.stop(r)}}},[t._v(" [] ")]),n("div",{staticClass:"progress-bar",on:{click:function(e){return t.playInCurrPos(e,r)}}},[n("span",{staticClass:"progress-bar__basic"}),n("span",{staticClass:"progress-bar__status",style:{width:e.percent+"%"}}),n("span",{staticClass:"shadow"})])])])}),0)},i=[],s=(n("70c3"),n("94a8"),n("6f89"),n("bb9e"),n("8224"),n("3f69"),{name:"audioPlayer",props:{files:{type:Array,default:function(){return[]}}},data:function(){return{playlist:[],percent:[]}},created:function(){var t=this;this.files.forEach(function(e,n){var r=new Audio;r.setAttribute("src","/static/audio/".concat(e)),t.playlist.push({file:r}),t.$set(t.playlist[n],"percent",0)})},methods:{playMe:function(t){var e=this;this.playlist.forEach(function(t){t.file.pause()}),this.playlist[t].file.play(),setInterval(function(){var n=100*e.playlist[t].file.currentTime/e.playlist[t].file.duration;e.$set(e.playlist[t],"percent",n)},10)},pause:function(t){this.playlist[t].file.pause()},stop:function(t){this.playlist[t].file.pause(),this.playlist[t].file.currentTime=0,this.playlist[t].percent=0},getMousePos:function(t,e){var n=t.getBoundingClientRect();return{x:e.clientX-n.left,y:e.clientY-n.top}},playInCurrPos:function(t,e){var n;n=t.target.classList.contains("progress-bar__status")?t.target.parentElement:t.target;var r=this.getMousePos(n,t),i=r.x/n.scrollWidth*100;this.playlist[e].percent=i;var s=this.playlist[e].file.duration*i/100;this.playlist[e].file.currentTime=s,this.playMe(e)}}}),a=s,l=n("53b7"),o=Object(l["a"])(a,r,i,!1,null,null,null);e["a"]=o.exports}});
//# sourceMappingURL=app.6ce5118b.js.map