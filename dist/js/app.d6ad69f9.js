(function(t){function e(e){for(var r,o,s=e[0],c=e[1],l=e[2],u=0,d=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);v&&v(e);while(d.length)d.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],r=!0,o=1;o<a.length;o++){var c=a[o];0!==i[c]&&(r=!1)}r&&(n.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},i={app:0},n=[];function o(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"bc887976"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(t){var e=[],a=i[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise((function(e,r){a=i[t]=[e,r]}));e.push(a[2]=r);var n,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=o(t);var l=new Error;n=function(e){c.onerror=c.onload=null,clearTimeout(u);var a=i[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+n+")",l.name="ChunkLoadError",l.type=r,l.request=n,a[1](l)}i[t]=void 0}};var u=setTimeout((function(){n({type:"timeout",target:c})}),12e4);c.onerror=c.onload=n,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var v=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"inspire"}},[a("v-app-bar",{attrs:{app:""}},[a("v-toolbar-title",[t._v("SmarTech Guinea")]),a("v-spacer"),a("v-btn",{staticClass:"align-self-end mx-2",attrs:{outlined:""},on:{click:function(e){return t.$vuetify.goTo("#app")}}},[t._v("Accueil")]),a("v-btn",{staticClass:"align-self-end mx-2",attrs:{outlined:""},on:{click:function(e){return t.$vuetify.goTo("#about-me")}}},[t._v("Apopos")]),a("v-btn",{staticClass:"align-self-end mx-2",attrs:{outlined:""},on:{click:function(e){return t.$vuetify.goTo("#features")}}},[t._v("Service")]),a("v-btn",{staticClass:"align-self-end mx-2",attrs:{outlined:""},on:{click:function(e){return t.$vuetify.goTo("#contact")}}},[t._v("Contact")])],1),a("v-main",[a("router-view")],1)],1)},n=[],o={data:function(){return{drawer:!0,items:[{title:"Accueil",icon:"mdi-home",to:"/"},{title:"Apropos",icon:"mdi-help-box",to:"/about"},{title:"Services",icon:"mdi-toolbox-outline",to:"/service"}]}}},s=o,c=a("2877"),l=a("6544"),u=a.n(l),v=a("7496"),d=a("40dc"),p=a("8336"),f=a("f6c4"),m=a("2fa4"),g=a("2a7f"),h=Object(c["a"])(s,i,n,!1,null,null,null),b=h.exports;u()(h,{VApp:v["a"],VAppBar:d["a"],VBtn:p["a"],VMain:f["a"],VSpacer:m["a"],VToolbarTitle:g["a"]});var y=a("9483");Object(y["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});a("d3b7");var C=a("8c4f"),w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("section",[a("v-row",{attrs:{"no-gutters":""}},[a("v-img",{attrs:{"min-height":"calc(100vh - "+t.$vuetify.application.top+"px)",src:"https://hbr.org/resources/images/article_assets/2019/02/Mar19_11_825412904.jpg"}},[a("v-theme-provider",{attrs:{dark:""}},[a("v-container",{attrs:{"fill-height":""}},[a("v-row",{staticClass:"white--text mx-auto",attrs:{align:"center",justify:"center"}},[a("v-col",{staticClass:"white--text text-center",attrs:{cols:"12",tag:"h1"}},[a("span",{staticClass:"font-weight-light",class:[t.$vuetify.breakpoint.smAndDown?"display-1":"display-2"]},[t._v(" SMARTECH ")]),a("br"),a("span",{staticClass:"font-weight-black",class:[t.$vuetify.breakpoint.smAndDown?"display-3":"display-4"]},[t._v(" AGENCE DIGITAL ET WEB ")])]),a("v-btn",{staticClass:"align-self-end",attrs:{fab:"",outlined:""},on:{click:function(e){return t.$vuetify.goTo("#about-me")}}},[a("v-icon",[t._v("mdi-chevron-double-down")])],1)],1)],1)],1)],1)],1)],1),a("section",{attrs:{id:"about-me"}},[a("div",{staticClass:"py-12"}),a("v-container",{staticClass:"text-center"},[a("h2",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("ABOUT US")]),a("v-responsive",{staticClass:"mx-auto mb-8",attrs:{width:"56"}},[a("v-divider",{staticClass:"mb-1"}),a("v-divider")],1),a("v-responsive",{staticClass:"mx-auto title font-weight-light mb-8",attrs:{"max-width":"720"}},[t._v(" SmarTech is the #1 component library Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat maxime, voluptates reprehenderit m agnam iusto voluptate. Ea provident, i taque officia accusantium explicabo ut amet veniam, cum tenetur eum, repudiandae voluptatem repellat. quality components. ")]),a("div",[a("v-btn",{staticClass:"align-self-end",attrs:{fab:"",outlined:""},on:{click:function(e){return t.$vuetify.goTo("#features")}}},[a("v-icon",[t._v("mdi-chevron-double-down")])],1)],1),a("div")],1),a("div",{staticClass:"py-12"})],1),a("section",{staticClass:"grey lighten-3",attrs:{id:"features"}},[a("div",{staticClass:"py-12"}),a("v-container",{staticClass:"text-center"},[a("h2",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("NOS SERVICES")]),a("v-responsive",{staticClass:"mx-auto mb-12",attrs:{width:"56"}},[a("v-divider",{staticClass:"mb-1"}),a("v-divider")],1),a("v-row",[a("v-col",{attrs:{cols:"6",sm:"3"}},[a("v-img",{attrs:{height:"200",src:"",gradient:"to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"}}),a("h1",[t._v("Developpement D'Application")])],1),a("v-col",{attrs:{cols:"6",sm:"3"}},[a("v-img",{attrs:{height:"200",src:"",gradient:"to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"}}),a("h1",[t._v("Marketing Digital")])],1),a("v-col",{attrs:{cols:"6",sm:"3"}},[a("v-img",{attrs:{height:"200",src:"",gradient:"to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"}}),a("h1",[t._v("Consulting ")])],1),a("v-col",{attrs:{cols:"6",sm:"3"}},[a("v-img",{attrs:{height:"200",src:"",gradient:"to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"}}),a("h1",[t._v("Conception Site Web")])],1)],1)],1)],1),a("section",{staticClass:"grey lighten-3",attrs:{id:"partenaire"}},[a("div",{staticClass:"py-12"}),a("v-container",{staticClass:"text-center"},[a("h2",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("NOS PARTENAIRES")]),a("v-responsive",{staticClass:"mx-auto mb-12",attrs:{width:"56"}},[a("v-divider",{staticClass:"mb-1"}),a("v-divider")],1),a("v-row",[a("v-col",{attrs:{cols:"6",sm:"3"}},[a("v-avatar",{staticClass:"elevation-12 mb-12",attrs:{size:"150",rounded:""}},[a("v-img",{attrs:{src:"img/djig.jpeg"}})],1),a("h1",[t._v("Djiguiprod")])],1),a("v-col",{attrs:{cols:"6",sm:"3"}},[a("v-avatar",{staticClass:"elevation-12 mb-12",attrs:{size:"150",rounded:""}},[a("v-img",{attrs:{src:"img/laye.jpeg"}})],1),a("h1",[t._v("LayeDist")])],1),a("v-col",{attrs:{cols:"6",sm:"3"}},[a("v-avatar",{staticClass:"elevation-12 mb-12",attrs:{size:"150",rounded:""}},[a("v-img",{attrs:{src:"img/loud.jpeg"}})],1),a("h1",[t._v("Loudsscyf")])],1),a("v-col",{attrs:{cols:"6",sm:"3"}},[a("v-avatar",{staticClass:"elevation-12 mb-12",attrs:{size:"150",rounded:""}},[a("v-img",{attrs:{src:"img/afro.jpeg"}})],1),a("h1",[t._v("AfroCash")])],1)],1)],1)],1),a("section",{attrs:{id:"contact"}},[a("v-footer",{attrs:{dark:"",padless:""}},[a("v-card",{staticClass:"flex",attrs:{flat:"",tile:""}},[a("v-card-title",[a("strong",{staticClass:"subheading"},[t._v("Contactez-nous +224 624 07 57 02")]),a("v-spacer"),t._l(t.icons,(function(e){return a("v-btn",{key:e,staticClass:"mx-4",attrs:{dark:"",icon:""}},[a("v-icon",{attrs:{size:"24px"}},[t._v(" "+t._s(e)+" ")])],1)}))],2),a("v-card-text",{staticClass:"py-2 white--text text-center"},[t._v(" "+t._s((new Date).getFullYear())+" — "),a("strong",[t._v("SmarTech")])])],1)],1)],1)])},_=[],x={mounted:function(){},data:function(){return{items:[{src:"img/pexels01.jpg"},{src:"img/pexels02.jpg"},{src:"img/pexels03.jpg"}],icons:["mdi-facebook","mdi-twitter","mdi-linkedin","mdi-instagram"]}}},j=x,k=a("8212"),T=a("b0af"),A=a("99d9"),S=a("62ad"),V=a("a523"),O=a("ce7e"),E=a("553a"),$=a("132d"),P=a("adda"),D=a("6b53"),M=a("0fd9"),N=a("480e"),R=Object(c["a"])(j,w,_,!1,null,null,null),z=R.exports;u()(R,{VAvatar:k["a"],VBtn:p["a"],VCard:T["a"],VCardText:A["a"],VCardTitle:A["b"],VCol:S["a"],VContainer:V["a"],VDivider:O["a"],VFooter:E["a"],VIcon:$["a"],VImg:P["a"],VResponsive:D["a"],VRow:M["a"],VSpacer:m["a"],VThemeProvider:N["a"]}),r["a"].use(C["a"]);var B=[{path:"/",name:"Home",component:z},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],I=new C["a"]({routes:B}),L=I,q=a("2f62");r["a"].use(q["a"]);var F=new q["a"].Store({state:{},mutations:{},actions:{},modules:{}}),G=a("f309");r["a"].use(G["a"]);var H=new G["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:L,store:F,vuetify:H,render:function(t){return t(b)}}).$mount("#app")}});
//# sourceMappingURL=app.d6ad69f9.js.map