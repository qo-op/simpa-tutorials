"use strict";(self.webpackChunksimpa_tutorials=self.webpackChunksimpa_tutorials||[]).push([[883],{9637:function(e,t,n){n.r(t);var l=n(4578),a=n(7294),o=n(7780),u=n(2978),r=n(4239),c=n(2178);let i=function(e){function t(){for(var t,n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(t=e.call.apply(e,[this].concat(l))||this).render=()=>a.createElement(r.Z,{pageTitle:"How to Use BoxLayout\nwith HTML and CSS"},a.createElement("p",null,a.createElement("code",null,"BoxLayout")," is a layout manager that arranges components in a single row or column. It's useful when you need to lay out components in a specific direction, such as in a toolbar."),a.createElement("hr",null),a.createElement("h2",null,"Example with components arranged horizontally"),a.createElement("p",null,"To use ",a.createElement("code",null,"BoxLayout"),", you first need to create a container to hold your components. This can be a ",a.createElement("code",null,"div")," element. Once you have your container, you can set its layout manager to"," ",a.createElement("code",null,"BoxLayout")," by adding ",a.createElement("code",null,'"BoxLayout"')," to its"," ",a.createElement("code",null,"class")," attribute."),a.createElement(o.Z,{language:"xml",style:u.Z,wrapLongLines:!0},'...\n<div class="BoxLayout"\n     data-axis="line-axis"\n     style="gap: 5px;">\n  <button>Button</button>\n  <button>Another<br />button</button>\n</div>\n...'),a.createElement("p",null,"In this example, we're setting the ",a.createElement("code",null,"div"),"'s layout to"," ",a.createElement("code",null,"BoxLayout")," and specifying that we want components to be laid out horizontally by setting ",a.createElement("code",null,"data-axis")," to"," ",a.createElement("code",null,'"line-axis"'),"."),a.createElement("div",{className:"BoxLayout","data-axis":"line-axis",style:{gap:"5px",backgroundColor:"lightgray"}},a.createElement("button",null,"Button"),a.createElement("button",null,"Another",a.createElement("br",null),"button")),a.createElement("p",null),a.createElement("hr",null),a.createElement("h2",null,"Example with components arranged vertically"),a.createElement("p",null,"To use BoxLayout to lay out components vertically, you need to set"," ",a.createElement("code",null,"data-axis")," to ",a.createElement("code",null,'"page-axis"'),". Here's an example:"),a.createElement(o.Z,{language:"xml",style:u.Z,wrapLongLines:!0},'...\n<div class="BoxLayout"\n     data-axis="page-axis"\n     style="gap: 5px;">\n  <button>First</button>\n  <button>Second</button>\n  <button>Third</button>\n  <button>Fourth</button>\n</div>\n...'),a.createElement("p",null,"When we run this code, we will see a panel with buttons laid out vertically, from top to bottom, like this:"),a.createElement("div",{className:"BoxLayout","data-axis":"page-axis",style:{gap:"5px",backgroundColor:"lightgray"}},a.createElement("button",null,"First"),a.createElement("button",null,"Second"),a.createElement("button",null,"Third"),a.createElement("button",null,"Fourth")),a.createElement("p",null),a.createElement("hr",null),a.createElement("h2",null,'Example with alignment set to "stretch"'),a.createElement("p",null,"To stretch components within a ",a.createElement("code",null,"BoxLayout")," container, you need to set the ",a.createElement("code",null,"data-alignment")," to ",a.createElement("code",null,'"stretch"'),". If no ",a.createElement("code",null,"data-alignment")," is specified, then the components are aligned to the center of the container by default."),a.createElement("p",null,"For example, to stretch components within a ",a.createElement("code",null,"BoxLayout")," ","container with a vertical layout, you would set the"," ",a.createElement("code",null,"data-alignment")," to ",a.createElement("code",null,'"stretch"'),":"),a.createElement(o.Z,{language:"xml",style:u.Z,wrapLongLines:!0},'...\n<div class="BoxLayout"\n     data-axis="page-axis"\n     data-alignment="stretch"\n     style="gap: 5px;">\n  <button>First</button>\n  <button>Second</button>\n  <button>Third</button>\n  <button>Fourth</button>\n</div>\n...'),a.createElement("p",null,"After running this code, we will see a panel with stretched buttons."),a.createElement("div",{className:"BoxLayout","data-axis":"page-axis","data-alignment":"stretch",style:{gap:"5px",backgroundColor:"lightgray"}},a.createElement("button",null,"First"),a.createElement("button",null,"Second"),a.createElement("button",null,"Third"),a.createElement("button",null,"Fourth")),a.createElement("p",null),a.createElement(c.Z,null),a.createElement("p",null)),t}return(0,l.Z)(t,e),t}(a.Component);t.default=i}}]);
//# sourceMappingURL=component---src-pages-box-layout-tsx-0a1b790a53600c411f53.js.map