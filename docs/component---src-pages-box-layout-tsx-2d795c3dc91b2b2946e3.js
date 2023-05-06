"use strict";(self.webpackChunksimpa_tutorials=self.webpackChunksimpa_tutorials||[]).push([[883],{9637:function(e,t,n){n.r(t);var a=n(4578),l=n(7294),o=n(7780),r=n(2978),u=n(8853);let i=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).render=()=>l.createElement(u.Z,{pageTitle:"How to Use BoxLayout"},l.createElement("p",null,l.createElement("code",null,"BoxLayout")," is a layout manager that arranges components in a single row or column. It's useful when you need to lay out components in a specific direction, such as in a toolbar."),l.createElement("p",null,"To use ",l.createElement("code",null,"BoxLayout"),", you first need to create a container to hold your components. This can be a ",l.createElement("code",null,"div")," element. Once you have your container, you can set its layout manager to"," ",l.createElement("code",null,"BoxLayout")," by adding ",l.createElement("code",null,'"BoxLayout"')," to its"," ",l.createElement("code",null,"class")," attribute."),l.createElement(o.Z,{language:"xml",style:r.Z,wrapLongLines:!0},'...\n<div class="BoxLayout"\n     data-axis="line-axis"\n     style="gap: 5px;">\n  <button>Button</button>\n  <button>Another<br />button</button>\n</div>\n...'),l.createElement("p",null,"In this example, we're setting the ",l.createElement("code",null,"div"),"'s layout to"," ",l.createElement("code",null,"BoxLayout")," and specifying that we want components to be laid out horizontally by setting ",l.createElement("code",null,"data-axis")," to"," ",l.createElement("code",null,'"line-axis"'),"."),l.createElement("div",{className:"BoxLayout","data-axis":"line-axis",style:{gap:"5px",backgroundColor:"lightgray"}},l.createElement("button",null,"Button"),l.createElement("button",null,"Another",l.createElement("br",null),"button")),l.createElement("p",null,"To use BoxLayout to lay out components vertically, you need to set"," ",l.createElement("code",null,"data-axis")," to ",l.createElement("code",null,'"page-axis"'),". Here's an example:"),l.createElement(o.Z,{language:"xml",style:r.Z,wrapLongLines:!0},'...\n<div class="BoxLayout"\n     data-axis="page-axis"\n     style="gap: 5px;">\n  <button>First</button>\n  <button>Second</button>\n  <button>Third</button>\n</div>\n...'),l.createElement("p",null,"When we run this code, we will see a panel with buttons laid out vertically, from top to bottom, like this:"),l.createElement("div",{className:"BoxLayout","data-axis":"page-axis",style:{gap:"5px",backgroundColor:"lightgray"}},l.createElement("button",null,"First"),l.createElement("button",null,"Second"),l.createElement("button",null,"Third")),l.createElement("p",null,"To stretch components within a ",l.createElement("code",null,"BoxLayout")," container, you need to set the ",l.createElement("code",null,"data-alignment")," to ",l.createElement("code",null,'"stretch"'),". If no ",l.createElement("code",null,"data-alignment")," is specified, then the components are aligned to the center of the container by default."),l.createElement("p",null,"For example, to stretch components within a ",l.createElement("code",null,"BoxLayout")," ","container with a vertical layout, you would set the"," ",l.createElement("code",null,"data-alignment")," to ",l.createElement("code",null,'"stretch"'),":"),l.createElement(o.Z,{language:"xml",style:r.Z,wrapLongLines:!0},'...\n<div class="BoxLayout"\n     data-axis="page-axis"\n     data-alignment="stretch"\n     style="gap: 5px;">\n  <button>First</button>\n  <button>Second</button>\n  <button>Third</button>\n</div>\n...'),l.createElement("p",null,"After running this code, we will see a panel with stretched buttons, like this:"),l.createElement("div",{className:"BoxLayout","data-axis":"page-axis","data-alignment":"stretch",style:{gap:"5px",backgroundColor:"lightgray"}},l.createElement("button",null,"First"),l.createElement("button",null,"Second"),l.createElement("button",null,"Third")),l.createElement("p",null,"In order to use ",l.createElement("code",null,"BoxLayout")," in your HTML file, you need to include a link to the Simpa stylesheet in the head section of your HTML document."),l.createElement(o.Z,{language:"xml",style:r.Z,wrapLongLines:!0},'<head>\n  ...\n  <link rel="stylesheet"\n        href="https://qo-op.github.io/simpa/simpa.css" />\n  ...\n</head>'),l.createElement("p",null,"It's important to note that the URL in the ",l.createElement("code",null,"href")," attribute points to an external resource on the internet. This means that your web page will only be able to use Simpa if it has a working internet connection and can access the Simpa CDN (Content Delivery Network) at the specified URL. If you want to use Simpa offline or on a local server, you can download the Simpa stylesheet and include it in your project directory instead of using the CDN."),l.createElement("p",null)),t}return(0,a.Z)(t,e),t}(l.Component);t.default=i}}]);
//# sourceMappingURL=component---src-pages-box-layout-tsx-2d795c3dc91b2b2946e3.js.map