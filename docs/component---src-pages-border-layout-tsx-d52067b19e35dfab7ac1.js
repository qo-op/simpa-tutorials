"use strict";(self.webpackChunksimpa_tutorials=self.webpackChunksimpa_tutorials||[]).push([[747],{5060:function(e,t,n){n.d(t,{Z:function(){return N}});var l=n(4578),a=n(7294),r=n(1883);let o=function(e){function t(){return e.apply(this,arguments)||this}return(0,l.Z)(t,e),t.prototype.render=function(){return a.createElement(c,{ref:t.modalLayerRef})},t}(a.Component);o.modalLayerRef=a.createRef(),o.show=e=>{var t;null===(t=o.modalLayerRef.current)||void 0===t||t.show(e)},o.hide=()=>{var e;null===(e=o.modalLayerRef.current)||void 0===e||e.hide()},o.dispose=()=>{var e;null===(e=o.modalLayerRef.current)||void 0===e||e.dispose()};let c=function(e){function t(t){var n;return(n=e.call(this,t)||this).dialog=a.createElement(a.Fragment,null),n.show=e=>{n.dialog=e,n.setState({visible:!0})},n.hide=()=>{n.setState({visible:!1})},n.dispose=()=>{n.setState({visible:!1}),n.dialog=a.createElement(a.Fragment,null)},n.state={visible:!1},n}return(0,l.Z)(t,e),t.prototype.render=function(){return a.createElement("div",{className:"ModalLayer",style:{visibility:this.state.visible?"visible":"hidden"}},this.dialog)},t}(a.Component);var i=o;let s=function(e){function t(){for(var t,n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=e.call.apply(e,[this].concat(l))||this).hide=()=>{i.hide()},t.dispose=()=>{i.dispose()},t.move=e=>{const t=e.target,n=e.currentTarget;if(!n.firstElementChild.contains(t)||t.onclick)return;var l=n.getBoundingClientRect();let a=e.clientX-l.left,r=e.clientY-l.top;const o=document.createElement("div");document.body.appendChild(o),o.classList.add("DragLayer");const c={pointermove(e){n.style.left=e.clientX-a+"px",n.style.top=e.clientY-r+"px"},pointerup(e){o.remove()},pointerleave(e){o.remove()}};o.addEventListener("pointermove",c.pointermove),o.addEventListener("pointerup",c.pointerup),o.addEventListener("pointerleave",c.pointerleave)},t.render=()=>a.createElement("div",{className:"MessageDialog Dialog PageStartBorderLayout",onPointerDown:t.move},a.createElement("div",{className:"LineEndBorderLayout",style:{alignItems:"center"}},a.createElement("span",null,a.createElement("b",null,t.props.title)),a.createElement("span",{className:"material-icons close",onClick:t.dispose})),a.createElement("div",{className:"PageEndBorderLayout",style:{gap:"5px",padding:"5px"}},a.createElement("span",null,t.props.message),a.createElement("div",{className:"CenterLayout"},a.createElement("button",{onClick:t.dispose},"OK")))),t}return(0,l.Z)(t,e),t}(a.Component);var u=s;let d=function(){};d.showMessage=function(e,t){void 0===t&&(t="Message"),i.show(a.createElement(u,{message:e,title:t}))};var m=d;let p=function(e){function t(){for(var t,n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=e.call.apply(e,[this].concat(l))||this).pointerUp=()=>{m.showMessage("Simpa tutorials")},t.render=()=>a.createElement("li",null,a.createElement("div",{className:"MenuItem",onPointerUp:t.pointerUp},a.createElement("span",null),a.createElement("span",null,"About"),a.createElement("span",null))),t}return(0,l.Z)(t,e),t}(a.Component);var E=p;let h=function(e){function t(){return e.apply(this,arguments)||this}return(0,l.Z)(t,e),t.prototype.render=function(){return a.createElement("li",null,a.createElement("div",{className:"Menu"},a.createElement("span",null,"Help")),a.createElement("ul",null,a.createElement(E,null)))},t}(a.Component);var y=h;let v=function(e){function t(){return e.apply(this,arguments)||this}return(0,l.Z)(t,e),t.prototype.render=function(){return a.createElement("ul",{className:"MenuBar StretchBoxLayout"},a.createElement("li",null,a.createElement(r.rU,{to:"/",className:"Menu"},a.createElement("span",null,"Simpa Tutorials"))),a.createElement(y,null))},t}(a.Component);var g=v;let f=function(e){function t(){return e.apply(this,arguments)||this}return(0,l.Z)(t,e),t.prototype.render=function(){return a.createElement("ul",{className:"NavigationTree Tree","data-selection-mode":"single-tree-selection"},a.createElement("li",{"data-open":!0},a.createElement("div",{className:"TreeNode"},a.createElement("span",{className:"material-icons icon"}),a.createElement("span",null,"Layouts")),a.createElement("ul",null,a.createElement("li",null,a.createElement(r.rU,{to:"/border-layout",className:"TreeNode"},a.createElement("span",{className:"material-icons icon"}),a.createElement("span",null,"How to Use BorderLayout"))))))},t}(a.Component);var b=f;let L=function(e){function t(){for(var t,n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=e.call.apply(e,[this].concat(l))||this).render=()=>a.createElement(a.Fragment,null,a.createElement("div",{className:"Layout BorderLayout",style:{visibility:t.state.loading?"hidden":"visible"}},a.createElement("div",{className:"PageStartBorderLayout"},a.createElement("div",{className:"LineBorderLayout"},a.createElement("div",{className:"StretchBoxLayout"},a.createElement(g,null)),a.createElement("div",null),a.createElement("div",null)),a.createElement("div",{className:"SplitPane"},a.createElement("div",{className:"ScrollPane"},a.createElement("nav",null,a.createElement(b,null))),a.createElement("div",null,a.createElement("div",{className:"SplitPaneDivider"})),a.createElement("div",{className:"ScrollPane"},a.createElement("div",{className:"Tutorial CenterLayout"},a.createElement("div",{className:"CenterLayout"},a.createElement("h1",null,t.props.pageTitle)),a.createElement("div",null,t.props.children))))),a.createElement(i,null))),t}return(0,l.Z)(t,e),t}(a.Component);var N=L},8958:function(e,t,n){n.r(t),n.d(t,{Head:function(){return i}});var l=n(4578),a=n(7294),r=n(5060);const o="How to Use BorderLayout";let c=function(e){function t(){for(var t,n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=e.call.apply(e,[this].concat(l))||this).render=()=>a.createElement(r.Z,{pageTitle:o},a.createElement("p",null,a.createElement("code",null,"BorderLayout")," is a type of layout manager that is used to arrange and organize components in a container. It divides the container into five regions: ",a.createElement("code",null,"page-start")," (north),"," ",a.createElement("code",null,"page-end")," (south), ",a.createElement("code",null,"line-start")," (west),"," ",a.createElement("code",null,"line-end")," (east) and ",a.createElement("code",null,"center"),"."),a.createElement("div",{className:"BorderLayout",style:{height:"8rem"}},a.createElement("button",{"data-constraints":"page-start"},"page-start"),a.createElement("button",{"data-constraints":"line-start"},"line-start"),a.createElement("button",null,"center"),a.createElement("button",{"data-constraints":"line-end"},"line-end"),a.createElement("button",{"data-constraints":"page-end"},"page-end")),a.createElement("p",null,"When components are added to a container with"," ",a.createElement("code",null,"BorderLayout"),", they are placed in one of these five regions according to the rules of the layout. The"," ",a.createElement("code",null,"page-start")," region is placed at the top, the"," ",a.createElement("code",null,"page-end")," region at the bottom, the"," ",a.createElement("code",null,"line-start")," region on the left side, the"," ",a.createElement("code",null,"line-end")," region on the right side and the"," ",a.createElement("code",null,"center")," region in the middle."),a.createElement("p",null,"The components placed in the ",a.createElement("code",null,"page-start")," and"," ",a.createElement("code",null,"page-end")," regions are sized to their preferred height and stretched to the full width of the container. The components placed in the ",a.createElement("code",null,"line-start")," and ",a.createElement("code",null,"line-end")," regions are sized to their preferred width and stretched to the full height of the container. The component placed in the ",a.createElement("code",null,"center")," region is stretched to fill the remaining space in the container."),a.createElement("p",null,"Here's an example of using ",a.createElement("code",null,"BorderLayout")," to create a simple user interface with a text and a button:"),a.createElement("div",{style:{backgroundColor:"black"}},a.createElement("code",{className:"Code"},a.createElement("div",null,"..."),a.createElement("div",null,"<",a.createElement("span",{style:{color:"blue"}},"div"),a.createElement("span",{style:{color:"lightblue"}}," class"),"=",a.createElement("span",{style:{color:"orange"}},'"BorderLayout"'),">"),a.createElement("div",null,"  ","<",a.createElement("span",{style:{color:"blue"}},"span"),a.createElement("span",{style:{color:"lightblue"}}," data-constraints"),"=",a.createElement("span",{style:{color:"orange"}},'"page-start"'),">","Hello, World!","<",a.createElement("span",{style:{color:"blue"}},"/span"),">"),a.createElement("div",null,"  ","<",a.createElement("span",{style:{color:"blue"}},"button"),">","Click me!","<",a.createElement("span",{style:{color:"blue"}},"/button"),">"),a.createElement("div",null,"<",a.createElement("span",{style:{color:"blue"}},"/div"),">"),a.createElement("div",null,"..."))),a.createElement("p",null,"In a BorderLayout, if no ",a.createElement("code",null,"data-constraints")," are specified for a component, then the component is placed in the"," ",a.createElement("code",null,"center")," region by default."),a.createElement("p",null,"In this example, we create a ",a.createElement("code",null,"div")," and set its"," ",a.createElement("code",null,"class")," to ",a.createElement("code",null,'"BorderLayout"'),". We then add a"," ",a.createElement("code",null,"span"),' that says "Hello, World!" to the'," ",a.createElement("code",null,"page-start")," region of the ",a.createElement("code",null,"div"),". We add a"," ",a.createElement("code",null,"button"),' with the text "Click me!" to the ',a.createElement("code",null,"div"),", without any ",a.createElement("code",null,"data-constraints"),". Since we didn't specify any"," ",a.createElement("code",null,"data-constraints"),", the ",a.createElement("code",null,"button")," is automatically placed in the center region of the ",a.createElement("code",null,"div"),"."),a.createElement("p",null,"When we run this code, we will see a panel with the text at the top and the button in the center, like this:"),a.createElement("div",{className:"BorderLayout",style:{backgroundColor:"lightgray"}},a.createElement("span",{"data-constraints":"page-start"},"Hello, World!"),a.createElement("button",null,"Click me!")),a.createElement("p",null,"In order to use BorderLayout in your HTML file, you need to include a link to the Simpa stylesheet in the head section of your HTML document."),a.createElement("div",{style:{backgroundColor:"black"}},a.createElement("code",{className:"Code"},a.createElement("div",null,"<",a.createElement("span",{style:{color:"blue"}},"head"),">"),a.createElement("div",null,"  ","<",a.createElement("span",{style:{color:"blue"}},"link"),a.createElement("span",{style:{color:"lightblue"}}," rel"),"=",a.createElement("span",{style:{color:"orange"}},'"stylesheet"'),a.createElement("span",{style:{color:"lightblue"}}," href"),"=",a.createElement("span",{style:{color:"orange"}},'"https://qo-op.github.io/simpa/simpa.css"'),">"),a.createElement("div",null,"<",a.createElement("span",{style:{color:"blue"}},"/head"),">"))),a.createElement("p",null,"It's important to note that the URL in the ",a.createElement("code",null,"href")," attribute points to an external resource on the internet. This means that your web page will only be able to use Simpa if it has a working internet connection and can access the Simpa CDN (Content Delivery Network) at the specified URL. If you want to use Simpa offline or on a local server, you can download the Simpa stylesheet and include it in your project directory instead of using the CDN."),a.createElement("p",null)),t}return(0,l.Z)(t,e),t}(a.Component);const i=()=>a.createElement(a.Fragment,null,a.createElement("title",null,o),a.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/icon?family=Material+Icons"}),a.createElement("link",{rel:"preload",href:"https://qo-op.github.io/simpa/simpa.css",as:"style",onLoad:e=>{e.currentTarget.rel="stylesheet"}}),a.createElement("script",{src:"https://qo-op.github.io/simpa/simpa.js"}));t.default=c}}]);
//# sourceMappingURL=component---src-pages-border-layout-tsx-d52067b19e35dfab7ac1.js.map