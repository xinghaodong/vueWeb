(function(e){function t(t){for(var i,a,s=t[0],l=t[1],u=t[2],r=0,d=[];r<s.length;r++)a=s[r],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);m&&m(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],i=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(i=!1)}i&&(c.splice(t--,1),e=l(l.s=n[0]))}return e}var i={},a={app:0},o={app:0},c=[];function s(e){return l.p+"static/js/"+({}[e]||e)+"."+{"chunk-2d0abdee":"b544b266","chunk-2d0af052":"fb052091","chunk-2d0bd91e":"1f21da6a","chunk-2d222cfc":"37f7fc53","chunk-2d225c72":"f1f63415","chunk-2d22c828":"98ad7d2a","chunk-2d237af5":"9ce7bcb4","chunk-2d2384ff":"0720b355","chunk-4ccb75e7":"2ff6bc4e","chunk-752c6b7a":"98e6af20","chunk-7eba1ec9":"cca14f60"}[e]+".js"}function l(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"chunk-4ccb75e7":1,"chunk-752c6b7a":1,"chunk-7eba1ec9":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var i="static/css/"+({}[e]||e)+"."+{"chunk-2d0abdee":"31d6cfe0","chunk-2d0af052":"31d6cfe0","chunk-2d0bd91e":"31d6cfe0","chunk-2d222cfc":"31d6cfe0","chunk-2d225c72":"31d6cfe0","chunk-2d22c828":"31d6cfe0","chunk-2d237af5":"31d6cfe0","chunk-2d2384ff":"31d6cfe0","chunk-4ccb75e7":"e5852db2","chunk-752c6b7a":"73010839","chunk-7eba1ec9":"9929f375"}[e]+".css",o=l.p+i,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var u=c[s],r=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(r===i||r===o))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],r=u.getAttribute("data-href");if(r===i||r===o)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var i=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=i,delete a[e],m.parentNode.removeChild(m),n(c)},m.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){a[e]=0})));var i=o[e];if(0!==i)if(i)t.push(i[2]);else{var c=new Promise((function(t,n){i=o[e]=[t,n]}));t.push(i[2]=c);var u,r=document.createElement("script");r.charset="utf-8",r.timeout=120,l.nc&&r.setAttribute("nonce",l.nc),r.src=s(e);var d=new Error;u=function(t){r.onerror=r.onload=null,clearTimeout(m);var n=o[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+i+": "+a+")",d.name="ChunkLoadError",d.type=i,d.request=a,n[1](d)}o[e]=void 0}};var m=setTimeout((function(){u({type:"timeout",target:r})}),12e4);r.onerror=r.onload=u,document.head.appendChild(r)}return Promise.all(t)},l.m=e,l.c=i,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)l.d(n,i,function(t){return e[t]}.bind(null,i));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],r=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var m=r;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0087":function(e,t,n){"use strict";n.r(t),t["default"]={namespaced:!0,state:{size:"small"},mutations:{sizeSet:function(e,t){e.size=t}},actions:{setSize:function(e,t){var n=e.commit;n("sizeSet",t)}}}},"034f":function(e,t,n){"use strict";n("85ec")},"03be":function(e,t,n){"use strict";n("3cab")},"048f":function(e,t,n){"use strict";n("145d")},1:function(e,t){},"145d":function(e,t,n){},1641:function(e,t,n){},"18ee":function(e,t,n){"use strict";n("4583")},2170:function(e,t,n){},"3cab":function(e,t,n){},4583:function(e,t,n){},"4ec3":function(e,t,n){"use strict";n("d3b7");var i=n("bc3a"),a=n.n(i),o=a.a.create({baseURL:"https://sales.ihxlife.com",timeout:5e4}),c="https://sales.ihxlife.com",s="https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples";console.log(c,"当前环境");var l=null==localStorage.getItem("userToken")?null:localStorage.getItem("userToken");o.interceptors.request.use((function(e){return e.headers["Content-Type"]="application/json;charset=utf-8",e.headers["token"]=l,e}),(function(e){return Promise.reject(e)})),o.interceptors.response.use((function(e){e.code;var t=e.data;return"blob"===e.config.responseType||"string"===typeof t&&(t=t?JSON.parse(t):t),t}),(function(e){return console.log("err"+e),Promise.reject(e)}));var u=function(e,t){return new Promise((function(n,i){a.a.get(e,{params:t}).then((function(e){n(e.data)})).catch((function(e){i(e.data)}))}))},r=function(e,t){return new Promise((function(n,i){a.a.post(e,t).then((function(e){n(e.data)})).catch((function(e){i(e.data)}))}))};t["a"]={login:function(e){return r(c+"/login",e)},userList:function(e){return u(c+"/userList",e)},getline:function(e){return u(s+"/data/asset/data/life-expectancy-table.json",e)}}},"55b8":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e.isRouterAlive?n("router-view"):e._e()],1)},o=[],c=n("5530"),s=n("2f62"),l={provide:function(){return{reload:this.reload}},name:"App",components:{},watch:{$route:function(e,t){console.log(e,t),"/Login"==t.path&&this.setDynamicMenu("0")}},data:function(){return{isRouterAlive:!0}},created:function(){var e=document.getElementById("Loading");null!=e&&document.body.removeChild(e)},mounted:function(){},methods:Object(c["a"])(Object(c["a"])({},Object(s["b"])("admin/menu",["setDynamicMenu"])),{},{reload:function(){var e=this;this.isRouterAlive=!1,this.$nextTick((function(){e.isRouterAlive=!0}))}})},u=l,r=(n("034f"),n("2877")),d=Object(r["a"])(u,a,o,!1,null,null,null),m=d.exports,f=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-container",[n("el-header",{staticClass:"header"},[n("Header")],1),n("el-main",{staticClass:"main",staticStyle:{display:"flex",padding:"0px"}},[n("Aside"),n("div",{staticStyle:{flex:"1",display:"flex","flex-flow":"column",overflow:"auto"}},[n("Breadcrumb"),n("transition",{attrs:{name:"el-fade-in-linear"}},[n("keep-alive",[n("router-view",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"cont transition-box"})],1)],1)],1)],1)],1)],1)},p=[],v=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"header"},[i("div",{staticClass:"headerLeft",class:{collapse:e.isCollapse}},[e.isCollapse?i("span",[i("img",{staticStyle:{height:"50px","padding-right":"10px"},attrs:{src:n("e79c"),alt:""}})]):i("span",[e._v("后台管理系统")]),i("div",{staticClass:"headerIcon"},[i("i",{staticClass:"el-icon-s-fold",staticStyle:{cursor:"pointer"},on:{click:e.handleClickBack}})])]),i("div",{staticStyle:{flex:"1"}},[i("el-menu",{staticClass:"el-menu-demo",staticStyle:{display:"flex"},attrs:{"default-active":e.activeMenu,router:"","menu-trigger":"hover",mode:"horizontal"}},e._l(e.menuItem,(function(e){return i("Menu",{key:e.menu_name,attrs:{datas:e}})})),1)],1),i("div",{staticClass:"headerRight"},[i("Full",{staticClass:"right-block"}),i("HeaderSize",{staticClass:"right-block"}),i("el-dropdown",[i("span",{staticClass:"el-dropdown-link",staticStyle:{cursor:"pointer"}},[e._v(" "+e._s(e.userName)),i("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),i("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[i("el-dropdown-item",{nativeOn:{click:function(t){return e.handleClick.apply(null,arguments)}}},[e._v("退出")])],1)],1)],1)])},b=[],g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[e.datas.childNode?n("el-submenu",{staticClass:"sub-menu-item",attrs:{index:e.datas.url+""}},[n("template",{slot:"title"},[n("i",{class:e.datas.icon?"el-icon-"+e.datas.icon:"el-icon-folder"}),n("span",[e._v(e._s(e.datas.menu_name))])]),e._l(e.datas.childNode,(function(e,t){return n("Menu",{key:t,attrs:{datas:e}})}))],2):n("el-menu-item",{class:"首页"==e.datas.menu_name?"is50":"",attrs:{index:e.datas.url+""},on:{click:function(t){return e.handlePath(e.datas)}}},[n("template",{slot:"title"},[n("i",{class:e.datas.icon?"el-icon-"+e.datas.icon:"el-icon-folder"}),n("span",[e._v(e._s(e.datas.menu_name))])])],2)],1)},A=[],x={name:"Menu",props:["datas"],data:function(){return{}},mounted:function(){},methods:Object(c["a"])(Object(c["a"])({},Object(s["b"])("admin/menu",["removeTagsActions","setTagsActions"])),{},{handlePath:function(e){this.setTagsActions(e)}})},k=x,y=(n("7594"),Object(r["a"])(k,g,A,!1,null,"c7eb8496",null)),O=y.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"screen-full"},[n("div",{directives:[{name:"show",rawName:"v-show",value:!e.isFullscreen,expression:"!isFullscreen"}],on:{click:e.handleFullScreen}},[n("i",{staticClass:"el-icon-rank",staticStyle:{transform:"rotate(45deg)","font-size":"16px"}})]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.isFullscreen,expression:"isFullscreen"}],on:{click:e.handleFullScreen}},[n("i",{staticClass:"el-icon-full-screen",staticStyle:{"font-size":"16px"}})])])},j=[],C=n("93bf"),N=n.n(C),M={name:"ScreenFull",data:function(){return{isFullscreen:!1}},mounted:function(){this.init()},beforeDestroy:function(){this.destroy()},methods:{handleFullScreen:function(){if(!N.a.isEnabled)return this.$message.info("您的浏览器版本过低，不支持全屏浏览"),!1;N.a.toggle()},change:function(){this.isFullscreen=N.a.isFullscreen},init:function(){N.a.isEnabled&&N.a.on("change",this.change)},destroy:function(){N.a.isEnabled&&N.a.off("change",this.change)}}},S=M,T=(n("e266"),Object(r["a"])(S,w,j,!1,null,"9da0a9aa",null)),I=T.exports,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-dropdown",{attrs:{placement:"bottom"},on:{command:e.handleCommand}},[n("span",{staticClass:"el-dropdown-link"},[n("i",{staticClass:"el-icon-setting",staticStyle:{"font-size":"16px",color:"#606266"}})]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},e._l(e.options,(function(t,i){return n("el-dropdown-item",{key:i,attrs:{command:t.value}},[e._v(" "+e._s(t.label)+" ")])})),1)],1)],1)},_=[],E={data:function(){return{options:[{label:"中",value:"medium"},{label:"小",value:"small"},{label:"最小",value:"mini"}]}},mounted:function(){},computed:Object(c["a"])({},Object(s["d"])("admin/size",["size"])),methods:Object(c["a"])(Object(c["a"])({},Object(s["b"])("admin/size",["setSize"])),{},{handleCommand:function(e){this.setSize(e),location.reload()}})},B=E,L=(n("76a9"),Object(r["a"])(B,P,_,!1,null,"0871c026",null)),F=L.exports,R={components:{Menu:O,Full:I,HeaderSize:F},data:function(){return{}},computed:Object(c["a"])({},Object(s["d"])("admin/menu",["isCollapse","userName","activeMenu","menuItem"])),created:function(){this.$router.push({path:this.activeMenu})},mounted:function(){},methods:Object(c["a"])(Object(c["a"])(Object(c["a"])({},Object(s["c"])("admin/menu",["modification","logOut"])),Object(s["b"])("admin/menu",["removeTagsActions","setTagsActions"])),{},{handleClick:function(){this.logOut(),localStorage.clear(),this.$router.push("/Login")},handlePath:function(e,t){console.log(e,t,"item, indexitem, indexitem, index"),this.setTagsActions(e)},handleClickBack:function(){this.modification()}})},z=R,J=(n("b403"),Object(r["a"])(z,v,b,!1,null,"5f474a31",null)),X=J.exports,U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"menuC",class:{collapse:e.isCollapse}},[n("el-scrollbar",{staticStyle:{heidth:"100%"}},[n("el-menu",{staticStyle:{width:"100%",border:"0px"},attrs:{router:"","default-active":e.activeMenu,collapse:e.isCollapse,"collapse-transition":!0,"background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},on:{open:e.handleOpen,close:e.handleClose}},[e.itemsItem.childNode?e._e():n("div",[n("el-menu-item",{attrs:{index:e.itemsItem.url}},[n("i",{class:e.itemsItem.icon?"el-icon-"+e.itemsItem.icon:"el-icon-folder"}),e.isCollapse?e._e():n("span",[e._v(e._s(e.itemsItem.menu_name))])])],1),e._l(e.itemsItem.childNode,(function(t,i){return n("div",{key:t.menu_name},[t.childNode&&t.childNode.length?n("el-submenu",{attrs:{index:t.id+""}},[n("template",{slot:"title"},[n("i",{class:t.icon?"el-icon-"+t.icon:"el-icon-folder"}),n("span",[e._v(e._s(t.menu_name))])]),e._l(t.childNode,(function(t){return n("div",{key:t.menu_name},[n("el-menu-item",{attrs:{index:t.url},on:{click:function(n){return e.handlePath(t,i)}}},[n("i",{class:t.icon?"el-icon-"+t.icon:"el-icon-tickets"}),n("span",[e._v(e._s(t.menu_name))])])],1)}))],2):n("el-menu-item",{key:t.menu_name,attrs:{index:t.url+""},on:{click:function(n){return e.handlePath(t,i)}}},[n("i",{class:t.icon?"el-icon-"+t.icon:"el-icon-tickets"}),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.menu_name))])])],1)}))],2)],1)],1)},q=[],H={data:function(){return{}},computed:Object(c["a"])({},Object(s["d"])("admin/menu",["isCollapse","activeMenu","itemsItem"])),created:function(){},mounted:function(){},methods:Object(c["a"])(Object(c["a"])({},Object(s["b"])("admin/menu",["setTagsActions"])),{},{handlePath:function(e){this.setTagsActions(e)},getMenu:function(){},handleOpen:function(e,t){console.log(e,t)},handleClose:function(e,t){console.log(e,t)}})},G=H,W=(n("b672"),Object(r["a"])(G,U,q,!1,null,"4e4abed5",null)),D=W.exports,Q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tag1",staticStyle:{padding:"1px 0px 0px 1px"}},[n("div",{staticStyle:{flex:"1"}},[n("div",[n("Contextmenu",{attrs:{visible:e.contextmenuFlag,contentmenuX:e.contentmenuX,contentmenuY:e.contentmenuY,tagName:e.tagName},on:{"update:visible":function(t){e.contextmenuFlag=t}}}),n("el-tabs",{staticClass:"multiple-page-sort",attrs:{type:"card","before-leave":e.beforeLeave},on:{"tab-remove":e.removeTab},nativeOn:{contextmenu:function(t){return e.handleContextmenu.apply(null,arguments)}},model:{value:e.activeMenu,callback:function(t){e.activeMenu=t},expression:"activeMenu"}},e._l(e.tags,(function(e){return n("el-tab-pane",{key:e.url,attrs:{closable:"首页"!=e.menu_name,label:e.menu_name,name:e.url}})})),1)],1)])])},Y=[],V=(n("fb6a"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.flag,expression:"flag"}],staticClass:"contextmenu",style:e.style},[n("div",{staticClass:"contentmenu-list"},e._l(e.tagName1,(function(t){return n("div",{key:t.value,staticClass:"contentmenu-item",attrs:{"data-value":t.value,flex:"cross:center main:center"},on:{click:function(n){return e.ckickTab(t.value)}}},[n("i",{class:t.icon}),n("div",{staticClass:"contentmenu-item-title"},[e._v(" "+e._s(t.title)+" ")])])})),0)])}),Z=[],K=(n("a9e3"),{inject:["reload"],props:{visible:{type:Boolean,default:!1},contentmenuX:{type:Number,default:0},contentmenuY:{type:Number,default:0},tagName:{type:String,default:"/index"}},data:function(){return{menulist:[{icon:"el-icon-refresh",title:"刷新",value:"refresh"},{icon:"el-icon-back",title:"关闭左侧",value:"left"},{icon:"el-icon-right",title:"关闭右侧",value:"right"},{icon:"el-icon-close",title:"关闭其它",value:"other"},{icon:"el-icon-circle-close",title:"关闭全部",value:"all"}],menulist0:[{icon:"el-icon-refresh",title:"刷新",value:"refresh"},{icon:"el-icon-right",title:"关闭右侧",value:"right"},{icon:"el-icon-close",title:"关闭其它",value:"other"},{icon:"el-icon-circle-close",title:"关闭全部",value:"all"}]}},computed:Object(c["a"])(Object(c["a"])({},Object(s["d"])("admin/menu",["activeMenu"])),{},{flag:{get:function(){return this.visible&&window.addEventListener("mousedown",this.watchContextmenu),this.visible},set:function(e){this.$emit("update:visible",e)}},style:function(){return{left:this.contentmenuX+"px",top:this.contentmenuY+"px",display:this.visible?"block":"none "}},tagName1:function(){return"/index"==this.tagName?this.menulist0:this.menulist}}),methods:Object(c["a"])(Object(c["a"])({},Object(s["c"])("admin/menu",["closeLeft","closeRight","closeOther","closeAll"])),{},{watchContextmenu:function(e){this.$el.contains(e.target)&&0===e.button||(this.flag=!1),window.removeEventListener("mousedown",this.watchContextmenu)},ckickTab:function(e){switch(this.flag=!1,e){case"refresh":this.reload();break;case"left":this.closeLeft(this.tagName);break;case"right":this.closeRight(this.tagName);break;case"other":this.closeOther(this.tagName);break;case"all":this.closeAll();break}}})}),$=K,ee=(n("03be"),Object(r["a"])($,V,Z,!1,null,"6ecd6fbc",null)),te=ee.exports,ne=n("aa47"),ie={components:{Contextmenu:te},data:function(){return{contextmenuFlag:!1,contentmenuX:0,contentmenuY:0,tagName:"/index"}},mounted:function(){var e=this,t=document.querySelectorAll(".multiple-page-sort .el-tabs__nav")[0];this.$nextTick((function(){ne["a"].create(t,{draggable:".is-closable",onEnd:function(t){var n=t.oldIndex,i=t.newIndex;e.openedSort({oldIndex:n,newIndex:i})}})}))},computed:Object(c["a"])(Object(c["a"])({},Object(s["d"])("admin/menu",["tags","topActive","activeMenu"])),{},{activeMenu:{get:function(){return this.$store.state.admin.menu.activeMenu},set:function(e){this.setActive1(e)}}}),methods:Object(c["a"])(Object(c["a"])(Object(c["a"])({},Object(s["c"])("admin/menu",["modification","logOut","setActive1","openedSort"])),Object(s["b"])("admin/menu",["removeTagsActions"])),{},{beforeLeave:function(e){this.setActive1(e),this.$router.push({path:this.activeMenu})},removeTab:function(e){this.removeTagsActions(e),this.$router.push({path:this.activeMenu})},handleContextmenu:function(e){var t=e.target,n=!1;t.className.indexOf("el-tabs__item")>-1?n=!0:t.parentNode.className.indexOf("el-tabs__item")>-1&&(t=t.parentNode,n=!0),n&&(e.preventDefault(),e.stopPropagation(),this.contentmenuX=e.clientX,this.contentmenuY=e.clientY,this.tagName=t.getAttribute("aria-controls").slice(5),this.contextmenuFlag=!0)}})},ae=ie,oe=(n("048f"),Object(r["a"])(ae,Q,Y,!1,null,"1b71f66b",null)),ce=oe.exports,se={components:{Header:X,Aside:D,Breadcrumb:ce},data:function(){return{show:!0}},watch:{}},le=se,ue=(n("18ee"),Object(r["a"])(le,h,p,!1,null,"16aa5fb7",null)),re=ue.exports;i["default"].use(f["a"]);var de=f["a"].prototype.push;f["a"].prototype.push=function(e){return de.call(this,e).catch((function(e){return e}))};var me=new f["a"]({mode:"hash",routes:[{path:"/",name:"Layout",component:re,redirect:"/index",meta:{title:"首页"},children:[{path:"index",name:"index",component:function(){return n.e("chunk-4ccb75e7").then(n.bind(null,"1e4b"))},meta:{title:"首页"}},{path:"home",name:"home",component:function(){return n.e("chunk-7eba1ec9").then(n.bind(null,"6511"))},meta:{title:"用户管理"}},{path:"monitor",name:"monitor",component:function(){return n.e("chunk-2d0af052").then(n.bind(null,"0d19"))},meta:{title:"数据监控"}},{path:"text",name:"text",component:function(){return n.e("chunk-2d2384ff").then(n.bind(null,"ff9b"))},meta:{title:"测试页面"}},{path:"patrolManagement",name:"patrolManagement",component:function(){return n.e("chunk-2d0abdee").then(n.bind(null,"16b5"))},meta:{title:"巡查监控"}},{path:"siteMonitoring",name:"siteMonitoring",component:function(){return n.e("chunk-2d222cfc").then(n.bind(null,"cfcf"))},meta:{title:"在岗监控"}},{path:"siteRecord",name:"siteRecord",component:function(){return n.e("chunk-2d225c72").then(n.bind(null,"e69d"))},meta:{title:"查岗记录"}},{path:"checkRecord",name:"checkRecord",component:function(){return n.e("chunk-2d0bd91e").then(n.bind(null,"2d0f"))},meta:{title:"消控值班考勤记录"}},{path:"facilitiesTrouble",name:"facilitiesTrouble",component:function(){return n.e("chunk-2d22c828").then(n.bind(null,"f415"))},meta:{title:"消防设备故障"}},{path:"alarmReport",name:"alarmReport",component:function(){return n.e("chunk-2d237af5").then(n.bind(null,"fbbe"))},meta:{title:"查询设备隐患"}}]},{path:"/Login",name:"Login",component:function(){return n.e("chunk-752c6b7a").then(n.bind(null,"dd7b"))}}]}),fe=(n("159b"),n("ac1f"),n("5319"),n("ff7f")),he={};fe.keys().forEach((function(e){he[e.replace(/(\.\/|\.js)/g,"")]=fe(e).default}));var pe={namespaced:!0,modules:he},ve=n("0e44");i["default"].use(s["a"]);var be=new s["a"].Store({modules:{admin:pe},plugins:[Object(ve["a"])({})]}),ge=n("5c96"),Ae=n.n(ge),xe=(n("0fae"),n("4328")),ke=n.n(xe),ye=n("323e"),Oe=n.n(ye);n("a5d8");i["default"].prototype.$qs=ke.a,i["default"].use(me).use(Ae.a,{size:be.state.admin.size.size,zIndex:3e3}),i["default"].config.productionTip=!1,me.beforeEach((function(e,t,n){if(Oe.a.start(),"/Login"==e.fullPath)n();else{var i=localStorage.getItem("userToken");i||n("/Login")}n()})),me.afterEach((function(){Oe.a.done()})),new i["default"]({router:me,store:be,render:function(e){return e(m)}}).$mount("#app")},7594:function(e,t,n){"use strict";n("c84e")},"76a9":function(e,t,n){"use strict";n("c560")},"85ec":function(e,t,n){},"9e7e":function(e,t,n){"use strict";n.r(t),t["default"]={namespaced:!0,state:{activeName:""},mutations:{mutationHandler:function(e,t){console.log(e,t,"state, data")}},actions:{actionHandler:function(e,t){var n=e.commit;n("mutationHandler",t)}}}},b403:function(e,t,n){"use strict";n("55b8")},b672:function(e,t,n){"use strict";n("2170")},c560:function(e,t,n){},c84e:function(e,t,n){},daa7:function(e,t,n){"use strict";n.r(t);n("d3b7"),n("159b"),n("4de4"),n("a434");var i=n("4ec3");function a(e,t){var n;if(console.log(e,t,"sdsdadad"),e){for(var i=0;i<e.length;i++){var a=e[i];if(a.url===t){n=i;break}if(a.childNode&&a.childNode.length>0)for(var o=0;o<a.childNode.length;o++){if(a.childNode[o].url==t){n=i;break}if(a.childNode[o].childNode&&a.childNode[o].childNode.length>0)for(var c=0;c<a.childNode[o].childNode.length;c++)if(a.childNode[o].childNode[c].url==t){n=i;break}}}return n}}t["default"]={namespaced:!0,state:{isCollapse:!1,topActive:"首页",activeMenu:"/index",userName:"",tags:[{icon:"user-solid",id:1,menu_name:"首页",pid:1,url:"/index"}],currentMenuIndex:0,menuItem:[{menu_name:"首页",pid:0,id:1,url:"/index",icon:"user-solid"},{menu_name:"菜单一",pid:0,id:29,url:"/monitoring",icon:"notebook-1",childNode:[{menu_name:"系统管理",pid:29,id:43,url:"/controlSupervisor",icon:"setting",childNode:[{menu_name:"用户管理",pid:43,id:531,icon:"user-solid",url:"/home"}]},{menu_name:"系统监控",pid:29,id:441,url:"#",childNode:[{menu_name:"数据监控",pid:441,id:561,url:"/monitor"},{menu_name:"页面测试",pid:441,id:581,url:"/text"}]}]},{menu_name:"日常管理",pid:0,id:31,url:"/dailyManagement",childNode:[{menu_name:"巡查管理",pid:31,id:41,url:"/patrolManagement"},{menu_name:"消控管理",pid:31,id:43,url:"/controlSupervisor",childNode:[{menu_name:"在岗监控",pid:43,id:53,url:"/siteMonitoring"},{menu_name:"查岗记录",pid:43,id:54,url:"/siteRecord"},{menu_name:"消控值班考勤记录",pid:43,id:55,url:"/checkRecord"}]},{menu_name:"隐患处理",pid:31,id:44,url:"/dangerDeal",childNode:[{menu_name:"消防设备故障",pid:44,id:56,url:"/facilitiesTrouble"},{menu_name:"巡查上报隐患",pid:44,id:58,url:"/alarmReport"}]}]}],itemsItem:[]},mutations:{modification:function(e){e.isCollapse=!e.isCollapse},setActive1:function(e,t){if(!t.url){e.activeMenu=t;var n=a(e.menuItem,t);return console.log(n,"result"),e.currentMenuIndex=n,void(e.itemsItem=e.menuItem[e.currentMenuIndex])}e.activeMenu=t.url,e.topActive=t.menu_name},setUserName:function(e,t){e.userName=t.username},setTags:function(e,t){if(0==e.tags.length)e.tags.push(t);else{var n=e.tags.some((function(e){if(e.id==t.id)return!0}));n||e.tags.push(t)}},removeSwitchingTags:function(e,t){var n=e.tags,i=e.activeMenu;i===t&&n.forEach((function(e,a){if(console.log(e,a),e.url===t){var o=n[a+1]||n[a-1];o&&(i=o.url)}})),e.activeMenu=i,e.tags=n.filter((function(e){return e.url!==t}))},dynamicMenu:function(e,t){e.currentMenuIndex=t,e.itemsItem=e.menuItem[t]},logOut:function(e){e.topActive="首页",e.activeMenu="/index",e.tags=[{icon:"user-solid",id:1,menu_name:"首页",pid:1,url:"/index"}],e.currentMenuIndex=0,e.itemsItem=e.menuItem[e.currentMenuIndex]},closeAll:function(){this.commit("admin/menu/logOut")},closeLeft:function(e,t){for(var n=0;n<e.tags.length;n++)t==e.tags[n].url&&(e.tags.splice(1,n-1),e.activeMenu=t)},closeRight:function(e,t){for(var n=0;n<e.tags.length;n++)t==e.tags[n].url&&(e.tags.splice(n+1),e.activeMenu=t)},closeOther:function(e,t){for(var n=0;n<e.tags.length;n++)t==e.tags[n].url&&(e.tags.splice(n+1),e.tags.splice(1,n-1),e.activeMenu=t)},openedSort:function(e,t){function n(e,t,n){return e[t]=e.splice(n,1,e[t])[0],e}n(e.tags,t.oldIndex,t.newIndex)}},actions:{removeTagsActions:function(e,t){var n=e.commit;n("removeSwitchingTags",t)},setTagsActions:function(e,t){var n=e.commit;n("setTags",t),n("setActive1",t)},setDynamicMenu:function(e,t){var n=e.commit;n("dynamicMenu",t)},Login:function(e,t){var n=e.commit;return new Promise((function(e,a){i["a"].login(t).then((function(t){"0"==t.code&&(window.localStorage.setItem("userToken",t.token),n("setUserName",t.data)),e(t)})).catch((function(e){a(e)}))}))}}}},e266:function(e,t,n){"use strict";n("1641")},e79c:function(e,t){e.exports="data:image/png;base64,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"},ff7f:function(e,t,n){var i={"./menu.js":"daa7","./size.js":"0087","./theme.js":"9e7e"};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}a.keys=function(){return Object.keys(i)},a.resolve=o,e.exports=a,a.id="ff7f"}});