(self.webpackChunksimpa_tutorials=self.webpackChunksimpa_tutorials||[]).push([[424],{4852:function(e){"use strict";e.exports=Object.assign},8853:function(e,t,n){"use strict";n.d(t,{Z:function(){return xe}});var r,o=n(4578),a=n(7294),i=n(5697),l=n.n(i),c=n(3524),u=n.n(c),s=n(9590),p=n.n(s),f=n(4852),d=n.n(f),m="bodyAttributes",y="htmlAttributes",h="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},b=(Object.keys(v).map((function(e){return v[e]})),"charset"),g="cssText",E="href",T="http-equiv",w="innerHTML",C="itemprop",A="name",S="property",O="rel",L="src",N="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},j="defaultTitle",k="defer",x="encodeSpecialCharacters",I="onChangeClientState",M="titleTemplate",R=Object.keys(P).reduce((function(e,t){return e[P[t]]=t,e}),{}),B=[v.NOSCRIPT,v.SCRIPT,v.STYLE],D="data-react-helmet",_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},U=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},F=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},Y=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},Z=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},K=function(e){var t=$(e,v.TITLE),n=$(e,M);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=$(e,j);return t||r||void 0},z=function(e){return $(e,I)||function(){}},V=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return q({},e,t)}),{})},W=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o].toLowerCase();if(-1!==e.indexOf(a)&&n[a])return t.concat(n)}return t}),[])},X=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&te("Helmet: "+e+' should be of type "Array". Instead found type "'+_(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,a=Object.keys(e),i=0;i<a.length;i++){var l=a[i],c=l.toLowerCase();-1===t.indexOf(c)||n===O&&"canonical"===e[n].toLowerCase()||c===O&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(l)||l!==w&&l!==g&&l!==C||(n=l)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][u]&&(o[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(o),i=0;i<a.length;i++){var l=a[i],c=d()({},r[l],o[l]);r[l]=c}return e}),[]).reverse()},$=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},G=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){G(e)}),0)}),J=function(e){return clearTimeout(e)},Q="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||G:n.g.requestAnimationFrame||G,ee="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||J:n.g.cancelAnimationFrame||J,te=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ne=null,re=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,l=e.noscriptTags,c=e.onChangeClientState,u=e.scriptTags,s=e.styleTags,p=e.title,f=e.titleAttributes;ie(v.BODY,r),ie(v.HTML,o),ae(p,f);var d={baseTag:le(v.BASE,n),linkTags:le(v.LINK,a),metaTags:le(v.META,i),noscriptTags:le(v.NOSCRIPT,l),scriptTags:le(v.SCRIPT,u),styleTags:le(v.STYLE,s)},m={},y={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(y[e]=d[e].oldTags)})),t&&t(),c(e,m,y)},oe=function(e){return Array.isArray(e)?e.join(""):e},ae=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),ie(v.TITLE,t)},ie=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(D),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(t),l=0;l<i.length;l++){var c=i[l],u=t[c]||"";n.getAttribute(c)!==u&&n.setAttribute(c,u),-1===o.indexOf(c)&&o.push(c);var s=a.indexOf(c);-1!==s&&a.splice(s,1)}for(var p=a.length-1;p>=0;p--)n.removeAttribute(a[p]);o.length===a.length?n.removeAttribute(D):n.getAttribute(D)!==i.join(",")&&n.setAttribute(D,i.join(","))}},le=function(e,t){var n=document.head||document.querySelector(v.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===w)n.innerHTML=t.innerHTML;else if(r===g)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var l=void 0===t[r]?"":t[r];n.setAttribute(r,l)}n.setAttribute(D,"true"),o.some((function(e,t){return i=t,n.isEqualNode(e)}))?o.splice(i,1):a.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:a}},ce=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},ue=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[P[n]||n]=e[n],t}),t)},se=function(e,t,n){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[D]=!0,o=ue(n,r),[a.createElement(v.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=ce(n),a=oe(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+Z(a,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+Z(a,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case m:case y:return{toComponent:function(){return ue(t)},toString:function(){return ce(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[D]=!0,r);return Object.keys(t).forEach((function(e){var n=P[e]||e;if(n===w||n===g){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),a.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===w||e===g)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+Z(r[t],n)+'"';return e?e+" "+o:o}),""),a=r.innerHTML||r.cssText||"",i=-1===B.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(i?"/>":">"+a+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,l=e.noscriptTags,c=e.scriptTags,u=e.styleTags,s=e.title,p=void 0===s?"":s,f=e.titleAttributes;return{base:se(v.BASE,t,r),bodyAttributes:se(m,n,r),htmlAttributes:se(y,o,r),link:se(v.LINK,a,r),meta:se(v.META,i,r),noscript:se(v.NOSCRIPT,l,r),script:se(v.SCRIPT,c,r),style:se(v.STYLE,u,r),title:se(v.TITLE,{title:p,titleAttributes:f},r)}},fe=function(e){var t,n;return n=t=function(t){function n(){return H(this,n),Y(this,t.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,t),n.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return q({},r,((t={})[n.type]=[].concat(r[n.type]||[],[q({},o,this.mapNestedChildrenToProps(n,a))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(r.type){case v.TITLE:return q({},o,((t={})[r.type]=i,t.titleAttributes=q({},a),t));case v.BODY:return q({},o,{bodyAttributes:q({},a)});case v.HTML:return q({},o,{htmlAttributes:q({},a)})}return q({},o,((n={})[r.type]=q({},a),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=q({},t);return Object.keys(e).forEach((function(t){var r;n=q({},n,((r={})[t]=e[t],r))})),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return a.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,a=o.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[R[n]||n]=e[n],t}),t)}(F(o,["children"]));switch(n.warnOnInvalidChildren(e,a),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},n.prototype.render=function(){var t=this.props,n=t.children,r=F(t,["children"]),o=q({},r);return n&&(o=this.mapChildrenToProps(n,o)),a.createElement(e,o)},U(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(a.Component),t.propTypes={base:l().object,bodyAttributes:l().object,children:l().oneOfType([l().arrayOf(l().node),l().node]),defaultTitle:l().string,defer:l().bool,encodeSpecialCharacters:l().bool,htmlAttributes:l().object,link:l().arrayOf(l().object),meta:l().arrayOf(l().object),noscript:l().arrayOf(l().object),onChangeClientState:l().func,script:l().arrayOf(l().object),style:l().arrayOf(l().object),title:l().string,titleAttributes:l().object,titleTemplate:l().string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n}(u()((function(e){return{baseTag:W([E,N],e),bodyAttributes:V(m,e),defer:$(e,k),encode:$(e,x),htmlAttributes:V(y,e),linkTags:X(v.LINK,[O,E],e),metaTags:X(v.META,[A,b,T,S,C],e),noscriptTags:X(v.NOSCRIPT,[w],e),onChangeClientState:z(e),scriptTags:X(v.SCRIPT,[L,w],e),styleTags:X(v.STYLE,[g],e),title:K(e),titleAttributes:V(h,e)}}),(function(e){ne&&ee(ne),e.defer?ne=Q((function(){re(e,(function(){ne=null}))})):(re(e),ne=null)}),pe)((function(){return null})));fe.renderStatic=fe.rewind;var de=n(1883);let me=function(e){function t(){return e.apply(this,arguments)||this}return(0,o.Z)(t,e),t.prototype.render=function(){return a.createElement(ye,{ref:t.modalLayerRef})},t}(a.Component);me.modalLayerRef=a.createRef(),me.show=e=>{var t;null===(t=me.modalLayerRef.current)||void 0===t||t.show(e)},me.hide=()=>{var e;null===(e=me.modalLayerRef.current)||void 0===e||e.hide()},me.dispose=()=>{var e;null===(e=me.modalLayerRef.current)||void 0===e||e.dispose()};let ye=function(e){function t(t){var n;return(n=e.call(this,t)||this).dialog=a.createElement(a.Fragment,null),n.show=e=>{n.dialog=e,n.setState({visible:!0})},n.hide=()=>{n.setState({visible:!1})},n.dispose=()=>{n.setState({visible:!1}),n.dialog=a.createElement(a.Fragment,null)},n.state={visible:!1},n}return(0,o.Z)(t,e),t.prototype.render=function(){return a.createElement("div",{className:"ModalLayer",style:{visibility:this.state.visible?"visible":"hidden"}},this.dialog)},t}(a.Component);var he=me;let ve=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).hide=()=>{he.hide()},t.dispose=()=>{he.dispose()},t.move=e=>{const t=e.target,n=e.currentTarget;if(!n.firstElementChild.contains(t)||t.onclick)return;var r=n.getBoundingClientRect();let o=e.clientX-r.left,a=e.clientY-r.top;const i=document.createElement("div");document.body.appendChild(i),i.classList.add("DragLayer");const l={pointermove(e){n.style.left=e.clientX-o+"px",n.style.top=e.clientY-a+"px"},pointerup(e){i.remove()},pointerleave(e){i.remove()}};i.addEventListener("pointermove",l.pointermove),i.addEventListener("pointerup",l.pointerup),i.addEventListener("pointerleave",l.pointerleave)},t.render=()=>a.createElement("div",{className:"MessageDialog Dialog PageStartBorderLayout",onPointerDown:t.move},a.createElement("div",{className:"LineEndBorderLayout",style:{alignItems:"center"}},a.createElement("span",null,a.createElement("b",null,t.props.title)),a.createElement("span",{className:"material-icons close",onClick:t.dispose})),a.createElement("div",{className:"PageEndBorderLayout",style:{gap:"5px",padding:"5px"}},a.createElement("span",null,t.props.message),a.createElement("div",{className:"CenterLayout"},a.createElement("button",{onClick:t.dispose},"OK")))),t}return(0,o.Z)(t,e),t}(a.Component);var be=ve;let ge=function(){};ge.showMessage=function(e,t){void 0===t&&(t="Message"),he.show(a.createElement(be,{message:e,title:t}))};var Ee=ge;let Te=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).pointerUp=()=>{Ee.showMessage("Simpa tutorials")},t.render=()=>a.createElement("li",null,a.createElement("div",{className:"MenuItem",onPointerUp:t.pointerUp},a.createElement("span",null),a.createElement("span",null,"About"),a.createElement("span",null))),t}return(0,o.Z)(t,e),t}(a.Component);var we=Te;let Ce=function(e){function t(){return e.apply(this,arguments)||this}return(0,o.Z)(t,e),t.prototype.render=function(){return a.createElement("li",null,a.createElement("div",{className:"Menu"},a.createElement("span",null,"Help")),a.createElement("ul",null,a.createElement(we,null)))},t}(a.Component);var Ae=Ce;let Se=function(e){function t(){return e.apply(this,arguments)||this}return(0,o.Z)(t,e),t.prototype.render=function(){return a.createElement("ul",{className:"MenuBar StretchBoxLayout"},a.createElement("li",null,a.createElement(de.rU,{to:"/",className:"Menu"},a.createElement("span",null,"Simpa Tutorials"))),a.createElement(Ae,null))},t}(a.Component);var Oe=Se;let Le=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).pointerdown=e=>{document.dispatchEvent(new CustomEvent("splitpanedividerpointerdown",{detail:{event:e}}))},t.render=()=>a.createElement("div",{className:"SplitPane"},a.createElement("div",{className:"ScrollPane"},t.props.children[0]),a.createElement("div",{style:{position:"relative",borderInlineStart:"1px solid gray"},onPointerDown:t.pointerdown},a.createElement("div",{style:{position:"absolute",insetInlineStart:"-6px",width:"11px",height:"100%"}})),a.createElement("div",{className:"ScrollPane"},t.props.children[1])),t}return(0,o.Z)(t,e),t}(a.Component);var Ne=Le;let Pe=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).expandOrCollapse=e=>{const t=e.currentTarget.parentElement;"open"===t.dataset.folder?t.dataset.folder="closed":t.dataset.folder="open"},t.render=()=>a.createElement("ul",{className:"NavigationTree Tree","data-selection-mode":"single-tree-selection"},a.createElement("li",{"data-folder":"open"},a.createElement("div",{className:"TreeNode",onClick:t.expandOrCollapse},a.createElement("span",{className:"material-icons folder"}),a.createElement("span",null,"Layouts")),a.createElement("ul",null,a.createElement("li",null,a.createElement(de.rU,{to:"/border-layout",className:"TreeNode"},a.createElement("span",{className:"material-icons"}),a.createElement("span",null,"How to Use BorderLayout")))))),t}return(0,o.Z)(t,e),t}(a.Component);var je=Pe;let ke=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).render=()=>a.createElement(a.Fragment,null,a.createElement(fe,null,a.createElement("title",null,t.props.pageTitle),a.createElement("script",{src:"https://qo-op.github.io/simpa/simpa.js"})),a.createElement("div",{className:"Layout BorderLayout"},a.createElement("div",{className:"PageStartBorderLayout"},a.createElement("div",{className:"LineBorderLayout"},a.createElement("div",{className:"StretchBoxLayout"},a.createElement(Oe,null)),a.createElement("div",null),a.createElement("div",null)),a.createElement(Ne,null,a.createElement("nav",null,a.createElement(je,null)),a.createElement("div",{className:"Tutorial CenterLayout"},a.createElement("div",{className:"CenterLayout"},a.createElement("h1",null,t.props.pageTitle)),a.createElement("div",null,t.props.children)))),a.createElement(he,null))),t}return(0,o.Z)(t,e),t}(a.Component);var xe=ke},9590:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function a(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var l,c,u,s;if(Array.isArray(e)){if((l=e.length)!=i.length)return!1;for(c=l;0!=c--;)if(!a(e[c],i[c]))return!1;return!0}if(n&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(s=e.entries();!(c=s.next()).done;)if(!i.has(c.value[0]))return!1;for(s=e.entries();!(c=s.next()).done;)if(!a(c.value[1],i.get(c.value[0])))return!1;return!0}if(r&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(s=e.entries();!(c=s.next()).done;)if(!i.has(c.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((l=e.length)!=i.length)return!1;for(c=l;0!=c--;)if(e[c]!==i[c])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf&&"function"==typeof e.valueOf&&"function"==typeof i.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString&&"function"==typeof e.toString&&"function"==typeof i.toString)return e.toString()===i.toString();if((l=(u=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(c=l;0!=c--;)if(!Object.prototype.hasOwnProperty.call(i,u[c]))return!1;if(t&&e instanceof Element)return!1;for(c=l;0!=c--;)if(("_owner"!==u[c]&&"__v"!==u[c]&&"__o"!==u[c]||!e.$$typeof)&&!a(e[u[c]],i[u[c]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return a(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},3524:function(e,t,n){"use strict";var r,o=n(7294),a=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,u=[];function s(){c=e(u.map((function(e){return e.props}))),p.canUseDOM?t(c):n&&(c=n(c))}var p=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return c},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,u=[],e};var i=o.prototype;return i.UNSAFE_componentWillMount=function(){u.push(this),s()},i.componentDidUpdate=function(){s()},i.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),s()},i.render=function(){return a.createElement(r,this.props)},o}(o.PureComponent);return i(p,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(p,"canUseDOM",l),p}}}}]);
//# sourceMappingURL=1e489e219343726f8a87655d606115888b51eaa8-e835b0c8d8c08ecce2d5.js.map