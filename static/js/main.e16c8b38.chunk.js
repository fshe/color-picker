(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{135:function(e,t,n){e.exports=n(342)},342:function(e,t,n){"use strict";n.r(t);n(136);var a=n(2),r=n.n(a),o=n(134),c=n.n(o),l=n(30),u=(n(95),function(e){return{x:e.offsetX,y:e.offsetY}}),i=function(e,t,n){if(e>255||t>255||n>255)throw new Error("Invalid color");return(e<<16|t<<8|n).toString(16)};var s=Object(a.forwardRef)(function(e,t){var n=e.hoverColor,a=e.setHoverColor,o=e.setSelectedColor,c=e.setXPos,s=e.setYPos,d=r.a.useRef(null),v=r.a.useState(!1),f=Object(l.a)(v,2),m=f[0],E=f[1],p=r.a.useState(!1),g=Object(l.a)(p,2),h=g[0],C=g[1];r.a.useImperativeHandle(t,function(){return{loadImage:function(e){var t=new Image;t.onload=function(){d.current.width=t.naturalWidth,d.current.height=t.naturalHeight,d.current.getContext("2d").drawImage(t,0,0)},t.src=e}}}),r.a.useEffect(function(){var e=d.current;e.addEventListener("touchstart",function(){C(!0),e.removeEventListener("touchstart")})});var b=function(e){if(m){var t=u(e),n=t.x,r=t.y;c(n),s(r);var o=d.current.getContext("2d"),v=Object(l.a)(o.getImageData(n,r,1,1).data,3),f=v[0],E=v[1],p=v[2],g="#"+("000000"+i(f,E,p)).slice(-6);a(g)}},w=function(){a("#FFF"),o(n),E(!1)};return r.a.useEffect(function(){var e=d.current;return m&&(h?(e.addEventListener("mousemove",b),e.addEventListener("click",w)):(e.addEventListener("touchmove",b),e.addEventListener("touchend",w))),function(){e.removeEventListener("mousemove",b),e.removeEventListener("click",w),e.addEventListener("touchmove",b),e.addEventListener("touchend",w)}},[m,h]),r.a.createElement(r.a.Fragment,null,r.a.createElement("canvas",{ref:d,width:"490",height:"490",className:"ColorPicker__canvas"}),r.a.createElement("button",{onClick:function(){return E(function(e){return!e})}},m?"Stop":"Start"," color picker"))});function d(e){var t=e.backgroundColor;return r.a.createElement("div",{className:"ColorPreview",style:{backgroundColor:t}})}function v(e){var t=e.onFileLoaded,n=r.a.useRef(null),a=r.a.useCallback(function(e){var n=e.target.files;if(n&&n[0]){var a=new FileReader;a.onload=function(e){t(e.target.result)},a.readAsDataURL(n[0])}},[t]);return r.a.createElement("input",{ref:n,type:"file",onChange:a})}console.log("version 5");var f=document.getElementById("root");c.a.render(r.a.createElement(function(){var e=r.a.useRef(null),t=r.a.useState("#FFF"),n=Object(l.a)(t,2),a=n[0],o=n[1],c=r.a.useState("#FFF"),u=Object(l.a)(c,2),i=u[0],f=u[1],m=r.a.useState(void 0),E=Object(l.a)(m,2),p=E[0],g=E[1],h=r.a.useState(void 0),C=Object(l.a)(h,2),b=C[0],w=C[1];return r.a.createElement("div",null,r.a.createElement(s,{ref:e,hoverColor:a,setHoverColor:o,setSelectedColor:f,setXPos:g,setYPos:w}),r.a.createElement(v,{onFileLoaded:function(t){e&&e.current&&e.current.loadImage(t)}}),r.a.createElement("div",{className:"App__container"},r.a.createElement("div",{className:"App__column"},r.a.createElement("p",null,"Hover Color:"),r.a.createElement(d,{backgroundColor:a}),r.a.createElement("p",null,"Selected Color:"),r.a.createElement(d,{backgroundColor:i})),r.a.createElement("div",{className:"App__column"},r.a.createElement("p",null,"X pixel position:")," ",p,r.a.createElement("p",null,"Y pixel position:")," ",b)))},null),f)},95:function(e,t,n){}},[[135,1,2]]]);
//# sourceMappingURL=main.e16c8b38.chunk.js.map