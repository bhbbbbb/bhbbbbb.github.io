(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-107e89f0","chunk-5f1c94c9"],{"0481":function(t,e,r){"use strict";var n=r("23e7"),i=r("a2bf"),a=r("7b0b"),s=r("50c4"),o=r("a691"),c=r("65f0");n({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=a(this),r=s(e.length),n=c(e,0);return n.length=i(n,e,e,r,0,void 0===t?1:o(t)),n}})},"0789":function(t,e,r){"use strict";r.d(e,"c",(function(){return u})),r.d(e,"d",(function(){return d})),r.d(e,"a",(function(){return h})),r.d(e,"b",(function(){return f}));r("99af");var n=r("d9f7");function i(){for(var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return(t=Array()).concat.apply(t,[e].concat(n))}function a(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top center 0",r=arguments.length>2?arguments[2]:void 0;return{name:t,functional:!0,props:{group:{type:Boolean,default:!1},hideOnLeave:{type:Boolean,default:!1},leaveAbsolute:{type:Boolean,default:!1},mode:{type:String,default:r},origin:{type:String,default:e}},render:function(e,r){var a="transition".concat(r.props.group?"-group":""),s={props:{name:t,mode:r.props.mode},on:{beforeEnter:function(t){t.style.transformOrigin=r.props.origin,t.style.webkitTransformOrigin=r.props.origin}}};return r.props.leaveAbsolute&&(s.on.leave=i(s.on.leave,(function(t){return t.style.position="absolute"}))),r.props.hideOnLeave&&(s.on.leave=i(s.on.leave,(function(t){return t.style.display="none"}))),e(a,Object(n["a"])(r.data,s),r.children)}}}function s(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"in-out";return{name:t,functional:!0,props:{mode:{type:String,default:r}},render:function(r,i){return r("transition",Object(n["a"])(i.data,{props:{name:t},on:e}),i.children)}}}var o=r("ade3"),c=r("80d2"),l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=e?"width":"height",n="offset".concat(Object(c["x"])(r));return{beforeEnter:function(t){t._parent=t.parentNode,t._initialStyle=Object(o["a"])({transition:t.style.transition,overflow:t.style.overflow},r,t.style[r])},enter:function(e){var i=e._initialStyle;e.style.setProperty("transition","none","important"),e.style.overflow="hidden";var a="".concat(e[n],"px");e.style[r]="0",e.offsetHeight,e.style.transition=i.transition,t&&e._parent&&e._parent.classList.add(t),requestAnimationFrame((function(){e.style[r]=a}))},afterEnter:a,enterCancelled:a,leave:function(t){t._initialStyle=Object(o["a"])({transition:"",overflow:t.style.overflow},r,t.style[r]),t.style.overflow="hidden",t.style[r]="".concat(t[n],"px"),t.offsetHeight,requestAnimationFrame((function(){return t.style[r]="0"}))},afterLeave:i,leaveCancelled:i};function i(e){t&&e._parent&&e._parent.classList.remove(t),a(e)}function a(t){var e=t._initialStyle[r];t.style.overflow=t._initialStyle.overflow,null!=e&&(t.style[r]=e),delete t._initialStyle}},u=(a("carousel-transition"),a("carousel-reverse-transition"),a("tab-transition"),a("tab-reverse-transition"),a("menu-transition"),a("fab-transition","center center","out-in"),a("dialog-transition"),a("dialog-bottom-transition"),a("dialog-top-transition"),a("fade-transition")),d=(a("scale-transition"),a("scroll-x-transition"),a("scroll-x-reverse-transition"),a("scroll-y-transition"),a("scroll-y-reverse-transition"),a("slide-x-transition")),h=(a("slide-x-reverse-transition"),a("slide-y-transition"),a("slide-y-reverse-transition"),s("expand-transition",l())),f=s("expand-x-transition",l("",!0))},"24b2":function(t,e,r){"use strict";r("a9e3");var n=r("80d2"),i=r("2b0e");e["a"]=i["a"].extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var t={},e=Object(n["f"])(this.height),r=Object(n["f"])(this.minHeight),i=Object(n["f"])(this.minWidth),a=Object(n["f"])(this.maxHeight),s=Object(n["f"])(this.maxWidth),o=Object(n["f"])(this.width);return e&&(t.height=e),r&&(t.minHeight=r),i&&(t.minWidth=i),a&&(t.maxHeight=a),s&&(t.maxWidth=s),o&&(t.width=o),t}}})},"25a8":function(t,e,r){},"297c":function(t,e,r){"use strict";r("a9e3");var n=r("2b0e"),i=r("37c6");e["a"]=n["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(i["a"],{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},"37c6":function(t,e,r){"use strict";var n=r("5530"),i=r("ade3"),a=(r("a9e3"),r("c7cd"),r("6ece"),r("0789")),s=r("a9ad"),o=r("fe6c"),c=r("a452"),l=r("7560"),u=r("80d2"),d=r("58df"),h=Object(d["a"])(s["a"],Object(o["b"])(["absolute","fixed","top","bottom"]),c["a"],l["a"]),f=h.extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(u["f"])(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(u["f"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var t,e=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return t={opacity:e},Object(i["a"])(t,this.isReversed?"right":"left",Object(u["f"])(this.normalizedValue,"%")),Object(i["a"])(t,"width",Object(u["f"])(this.normalizedBuffer-this.normalizedValue,"%")),t},classes:function(){return Object(n["a"])({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped},this.themeClasses)},computedTransition:function(){return this.indeterminate?a["c"]:a["d"]},isReversed:function(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(u["f"])(this.normalizedBuffer,"%")),t}},methods:{genContent:function(){var t=Object(u["n"])(this,"default",{value:this.internalLazyValue});return t?this.$createElement("div",{staticClass:"v-progress-linear__content"},t):null},genListeners:function(){var t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar:function(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(i["a"])({},t,!0)}))},onClick:function(t){if(this.reactive){var e=this.$el.getBoundingClientRect(),r=e.width;this.internalValue=t.offsetX/r*100}},normalize:function(t){return t<0?0:t>100?100:parseFloat(t)}},render:function(t){var e={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(u["f"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return t("div",e,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}});e["a"]=f},"490a":function(t,e,r){"use strict";r("a9e3"),r("99af"),r("8d4f");var n=r("a9ad"),i=r("80d2");e["a"]=n["a"].extend({name:"v-progress-circular",props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:function(){return{radius:20}},computed:{calculatedSize:function(){return Number(this.size)+(this.button?8:0)},circumference:function(){return 2*Math.PI*this.radius},classes:function(){return{"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue:function(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray:function(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset:function(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth:function(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles:function(){return{height:Object(i["f"])(this.calculatedSize),width:Object(i["f"])(this.calculatedSize)}},svgStyles:function(){return{transform:"rotate(".concat(Number(this.rotate),"deg)")}},viewBoxSize:function(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle:function(t,e){return this.$createElement("circle",{class:"v-progress-circular__".concat(t),attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":e}})},genSvg:function(){var t=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"".concat(this.viewBoxSize," ").concat(this.viewBoxSize," ").concat(2*this.viewBoxSize," ").concat(2*this.viewBoxSize)}},t)},genInfo:function(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},this.$slots.default)}},render:function(t){return t("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}})},"615b":function(t,e,r){},"6ece":function(t,e,r){},"7e2b":function(t,e,r){"use strict";var n=r("2b0e");function i(t){return function(e,r){for(var n in r)Object.prototype.hasOwnProperty.call(e,n)||this.$delete(this.$data[t],n);for(var i in e)this.$set(this.$data[t],i,e[i])}}e["a"]=n["a"].extend({data:function(){return{attrs$:{},listeners$:{}}},created:function(){this.$watch("$attrs",i("attrs$"),{immediate:!0}),this.$watch("$listeners",i("listeners$"),{immediate:!0})}})},"8d4f":function(t,e,r){},"8dd9":function(t,e,r){"use strict";var n=r("5530"),i=(r("25a8"),r("7e2b")),a=r("a9ad"),s=r("c995"),o=r("24b2"),c=r("a236"),l=r("7560"),u=r("58df");e["a"]=Object(u["a"])(i["a"],a["a"],s["a"],o["a"],c["a"],l["a"]).extend({name:"v-sheet",props:{outlined:Boolean,shaped:Boolean,tag:{type:String,default:"div"}},computed:{classes:function(){return Object(n["a"])(Object(n["a"])(Object(n["a"])({"v-sheet":!0,"v-sheet--outlined":this.outlined,"v-sheet--shaped":this.shaped},this.themeClasses),this.elevationClasses),this.roundedClasses)},styles:function(){return this.measurableStyles}},render:function(t){var e={class:this.classes,style:this.styles,on:this.listeners$};return t(this.tag,this.setBackgroundColor(this.color,e),this.$slots.default)}})},"99d9":function(t,e,r){"use strict";r.d(e,"a",(function(){return a})),r.d(e,"b",(function(){return s})),r.d(e,"c",(function(){return o})),r.d(e,"d",(function(){return c}));var n=r("b0af"),i=r("80d2"),a=Object(i["h"])("v-card__actions"),s=Object(i["h"])("v-card__subtitle"),o=Object(i["h"])("v-card__text"),c=Object(i["h"])("v-card__title");n["a"]},a236:function(t,e,r){"use strict";var n=r("ade3"),i=r("b85c"),a=(r("ac1f"),r("1276"),r("a15b"),r("2b0e"));e["a"]=a["a"].extend({name:"roundable",props:{rounded:[Boolean,String],tile:Boolean},computed:{roundedClasses:function(){var t=[],e="string"===typeof this.rounded?String(this.rounded):!0===this.rounded;if(this.tile)t.push("rounded-0");else if("string"===typeof e){var r,a=e.split(" "),s=Object(i["a"])(a);try{for(s.s();!(r=s.n()).done;){var o=r.value;t.push("rounded-".concat(o))}}catch(c){s.e(c)}finally{s.f()}}else e&&t.push("rounded");return t.length>0?Object(n["a"])({},t.join(" "),!0):{}}}})},a2bf:function(t,e,r){"use strict";var n=r("e8b5"),i=r("50c4"),a=r("0366"),s=function(t,e,r,o,c,l,u,d){var h,f=c,v=0,b=!!u&&a(u,d,3);while(v<o){if(v in r){if(h=b?b(r[v],v,e):r[v],l>0&&n(h))f=s(t,e,h,i(h.length),f,l-1)-1;else{if(f>=9007199254740991)throw TypeError("Exceed the acceptable array length");t[f]=h}f++}v++}return f};t.exports=s},a452:function(t,e,r){"use strict";var n=r("ade3"),i=r("2b0e");function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"change";return i["a"].extend({name:"proxyable",model:{prop:t,event:e},props:Object(n["a"])({},t,{required:!1}),data:function(){return{internalLazyValue:this[t]}},computed:{internalValue:{get:function(){return this.internalLazyValue},set:function(t){t!==this.internalLazyValue&&(this.internalLazyValue=t,this.$emit(e,t))}}},watch:Object(n["a"])({},t,(function(t){this.internalLazyValue=t}))})}var s=a();e["a"]=s},a9ad:function(t,e,r){"use strict";var n=r("3835"),i=r("ade3"),a=r("5530"),s=(r("ac1f"),r("1276"),r("498a"),r("d3b7"),r("25f0"),r("2b0e")),o=r("d9bd"),c=r("7bc6");e["a"]=s["a"].extend({name:"colorable",props:{color:String},methods:{setBackgroundColor:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"string"===typeof e.style?(Object(o["b"])("style must be an object",this),e):"string"===typeof e.class?(Object(o["b"])("class must be an object",this),e):(Object(c["d"])(t)?e.style=Object(a["a"])(Object(a["a"])({},e.style),{},{"background-color":"".concat(t),"border-color":"".concat(t)}):t&&(e.class=Object(a["a"])(Object(a["a"])({},e.class),{},Object(i["a"])({},t,!0))),e)},setTextColor:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("string"===typeof e.style)return Object(o["b"])("style must be an object",this),e;if("string"===typeof e.class)return Object(o["b"])("class must be an object",this),e;if(Object(c["d"])(t))e.style=Object(a["a"])(Object(a["a"])({},e.style),{},{color:"".concat(t),"caret-color":"".concat(t)});else if(t){var r=t.toString().trim().split(" ",2),s=Object(n["a"])(r,2),l=s[0],u=s[1];e.class=Object(a["a"])(Object(a["a"])({},e.class),{},Object(i["a"])({},l+"--text",!0)),u&&(e.class["text--"+u]=!0)}return e}}})},b0af:function(t,e,r){"use strict";var n=r("5530"),i=(r("a9e3"),r("0481"),r("615b"),r("10d2")),a=r("297c"),s=r("1c87"),o=r("58df");e["a"]=Object(o["a"])(a["a"],s["a"],i["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(n["a"])(Object(n["a"])({"v-card":!0},s["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},i["a"].options.computed.classes.call(this))},styles:function(){var t=Object(n["a"])({},i["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=a["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,n=e.data;return n.style=this.styles,this.isClickable&&(n.attrs=n.attrs||{},n.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,n),[this.genProgress(),this.$slots.default])}})},b85c:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0");var n=r("06c5");function i(t,e){var r;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=Object(n["a"])(t))||e&&t&&"number"===typeof t.length){r&&(t=r);var i=0,a=function(){};return{s:a,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,o=!0,c=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return o=t.done,t},e:function(t){c=!0,s=t},f:function(){try{o||null==r["return"]||r["return"]()}finally{if(c)throw s}}}}},c995:function(t,e,r){"use strict";var n=r("ade3"),i=(r("a9e3"),r("2b0e"));e["a"]=i["a"].extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation:function(){return this.elevation},elevationClasses:function(){var t=this.computedElevation;return null==t||isNaN(parseInt(t))?{}:Object(n["a"])({},"elevation-".concat(this.elevation),!0)}}})},d9f7:function(t,e,r){"use strict";r.d(e,"a",(function(){return l})),r.d(e,"b",(function(){return h}));var n=r("5530"),i=r("3835"),a=r("b85c"),s=(r("ac1f"),r("1276"),r("498a"),r("b64b"),r("99af"),r("80d2")),o={styleList:/;(?![^(]*\))/g,styleProp:/:(.*)/};function c(t){var e,r={},n=Object(a["a"])(t.split(o.styleList));try{for(n.s();!(e=n.n()).done;){var c=e.value,l=c.split(o.styleProp),u=Object(i["a"])(l,2),d=u[0],h=u[1];d=d.trim(),d&&("string"===typeof h&&(h=h.trim()),r[Object(s["c"])(d)]=h)}}catch(f){n.e(f)}finally{n.f()}return r}function l(){var t,e={},r=arguments.length;while(r--)for(var i=0,a=Object.keys(arguments[r]);i<a.length;i++)switch(t=a[i],t){case"class":case"directives":arguments[r][t]&&(e[t]=d(e[t],arguments[r][t]));break;case"style":arguments[r][t]&&(e[t]=u(e[t],arguments[r][t]));break;case"staticClass":if(!arguments[r][t])break;void 0===e[t]&&(e[t]=""),e[t]&&(e[t]+=" "),e[t]+=arguments[r][t].trim();break;case"on":case"nativeOn":arguments[r][t]&&(e[t]=h(e[t],arguments[r][t]));break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":if(!arguments[r][t])break;e[t]||(e[t]={}),e[t]=Object(n["a"])(Object(n["a"])({},arguments[r][t]),e[t]);break;default:e[t]||(e[t]=arguments[r][t])}return e}function u(t,e){return t?e?(t=Object(s["y"])("string"===typeof t?c(t):t),t.concat("string"===typeof e?c(e):e)):t:e}function d(t,e){return e?t&&t?Object(s["y"])(t).concat(e):e:t}function h(){if(!(arguments.length<=0?void 0:arguments[0]))return arguments.length<=1?void 0:arguments[1];if(!(arguments.length<=1?void 0:arguments[1]))return arguments.length<=0?void 0:arguments[0];for(var t={},e=2;e--;){var r=e<0||arguments.length<=e?void 0:arguments[e];for(var n in r)r[n]&&(t[n]?t[n]=[].concat(r[n],t[n]):t[n]=r[n])}return t}},dc93:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return!t.fetched||t.articles&&t.articles.length?r("ArticleContainer",{staticClass:"mt-3",attrs:{type:"followed"}}):r("v-card",{staticClass:"m-view mt-3",attrs:{flat:""}},[r("v-card-title",{staticClass:"justify-center"},[r("h4",[t._v("還沒有關注的文章，去世界文章看看吧")])]),r("v-card-actions",{staticClass:"justify-center"},[r("v-btn",{attrs:{to:{path:"/articles"},color:"#cccdc3"}},[t._v(" Go ")])],1)],1)},i=[],a=(r("d3b7"),r("3ca3"),r("ddb0"),{name:"FollowArticles",components:{ArticleContainer:function(){return r.e("chunk-19784825").then(r.bind(null,"afac"))}},data:function(){return{articles:[],fetched:!1}},computed:{},created:function(){var t=this;this.$store.dispatch("getFollowedArticles",{forceUpdate:!1}).then((function(e){t.articles=e,t.fetched=!0}))}}),s=a,o=r("2877"),c=r("6544"),l=r.n(c),u=r("8336"),d=r("b0af"),h=r("99d9"),f=Object(o["a"])(s,n,i,!1,null,null,null);e["default"]=f.exports;l()(f,{VBtn:u["a"],VCard:d["a"],VCardActions:h["a"],VCardTitle:h["d"]})},f2e7:function(t,e,r){"use strict";r.d(e,"b",(function(){return a}));var n=r("ade3"),i=r("2b0e");function a(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"input";return i["a"].extend({name:"toggleable",model:{prop:e,event:r},props:Object(n["a"])({},e,{required:!1}),data:function(){return{isActive:!!this[e]}},watch:(t={},Object(n["a"])(t,e,(function(t){this.isActive=!!t})),Object(n["a"])(t,"isActive",(function(t){!!t!==this[e]&&this.$emit(r,t)})),t)})}var s=a();e["a"]=s}}]);