(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-19784825","chunk-fd23a2e2"],{"04b9":function(e,t,n){},"0fd9":function(e,t,n){"use strict";var r=n("ade3"),a=n("5530"),i=(n("13d5"),n("caad"),n("2532"),n("99af"),n("b64b"),n("ac1f"),n("5319"),n("4ec9"),n("d3b7"),n("3ca3"),n("ddb0"),n("159b"),n("4b85"),n("2b0e")),s=n("d9f7"),o=n("80d2"),c=["sm","md","lg","xl"],l=["start","end","center"];function u(e,t){return c.reduce((function(n,r){return n[e+Object(o["x"])(r)]=t(),n}),{})}var d=function(e){return[].concat(l,["baseline","stretch"]).includes(e)},f=u("align",(function(){return{type:String,default:null,validator:d}})),h=function(e){return[].concat(l,["space-between","space-around"]).includes(e)},v=u("justify",(function(){return{type:String,default:null,validator:h}})),b=function(e){return[].concat(l,["space-between","space-around","stretch"]).includes(e)},m=u("alignContent",(function(){return{type:String,default:null,validator:b}})),p={align:Object.keys(f),justify:Object.keys(v),alignContent:Object.keys(m)},g={align:"align",justify:"justify",alignContent:"align-content"};function y(e,t,n){var r=g[e];if(null!=n){if(t){var a=t.replace(e,"");r+="-".concat(a)}return r+="-".concat(n),r.toLowerCase()}}var _=new Map;t["a"]=i["a"].extend({name:"v-row",functional:!0,props:Object(a["a"])(Object(a["a"])(Object(a["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d}},f),{},{justify:{type:String,default:null,validator:h}},v),{},{alignContent:{type:String,default:null,validator:b}},m),render:function(e,t){var n=t.props,a=t.data,i=t.children,o="";for(var c in n)o+=String(n[c]);var l=_.get(o);return l||function(){var e,t;for(t in l=[],p)p[t].forEach((function(e){var r=n[e],a=y(t,e,r);a&&l.push(a)}));l.push((e={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r["a"])(e,"align-".concat(n.align),n.align),Object(r["a"])(e,"justify-".concat(n.justify),n.justify),Object(r["a"])(e,"align-content-".concat(n.alignContent),n.alignContent),e)),_.set(o,l)}(),e(n.tag,Object(s["a"])(a,{staticClass:"row",class:l}),i)}})},"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},"4b85":function(e,t,n){},"62ad":function(e,t,n){"use strict";var r=n("ade3"),a=n("5530"),i=(n("13d5"),n("a9e3"),n("b64b"),n("ac1f"),n("5319"),n("4ec9"),n("d3b7"),n("3ca3"),n("ddb0"),n("caad"),n("159b"),n("2ca0"),n("4b85"),n("2b0e")),s=n("d9f7"),o=n("80d2"),c=["sm","md","lg","xl"],l=function(){return c.reduce((function(e,t){return e[t]={type:[Boolean,String,Number],default:!1},e}),{})}(),u=function(){return c.reduce((function(e,t){return e["offset"+Object(o["x"])(t)]={type:[String,Number],default:null},e}),{})}(),d=function(){return c.reduce((function(e,t){return e["order"+Object(o["x"])(t)]={type:[String,Number],default:null},e}),{})}(),f={col:Object.keys(l),offset:Object.keys(u),order:Object.keys(d)};function h(e,t,n){var r=e;if(null!=n&&!1!==n){if(t){var a=t.replace(e,"");r+="-".concat(a)}return"col"!==e||""!==n&&!0!==n?(r+="-".concat(n),r.toLowerCase()):r.toLowerCase()}}var v=new Map;t["a"]=i["a"].extend({name:"v-col",functional:!0,props:Object(a["a"])(Object(a["a"])(Object(a["a"])(Object(a["a"])({cols:{type:[Boolean,String,Number],default:!1}},l),{},{offset:{type:[String,Number],default:null}},u),{},{order:{type:[String,Number],default:null}},d),{},{alignSelf:{type:String,default:null,validator:function(e){return["auto","start","end","center","baseline","stretch"].includes(e)}},tag:{type:String,default:"div"}}),render:function(e,t){var n=t.props,a=t.data,i=t.children,o=(t.parent,"");for(var c in n)o+=String(n[c]);var l=v.get(o);return l||function(){var e,t;for(t in l=[],f)f[t].forEach((function(e){var r=n[e],a=h(t,e,r);a&&l.push(a)}));var a=l.some((function(e){return e.startsWith("col-")}));l.push((e={col:!a||!n.cols},Object(r["a"])(e,"col-".concat(n.cols),n.cols),Object(r["a"])(e,"offset-".concat(n.offset),n.offset),Object(r["a"])(e,"order-".concat(n.order),n.order),Object(r["a"])(e,"align-self-".concat(n.alignSelf),n.alignSelf),e)),v.set(o,l)}(),e(n.tag,Object(s["a"])(a,{class:l}),i)}})},"841c":function(e,t,n){"use strict";var r=n("d784"),a=n("825a"),i=n("1d80"),s=n("129f"),o=n("14c3");r("search",1,(function(e,t,n){return[function(t){var n=i(this),r=void 0==t?void 0:t[e];return void 0!==r?r.call(t,n):new RegExp(t)[e](String(n))},function(e){var r=n(t,e,this);if(r.done)return r.value;var i=a(e),c=String(this),l=i.lastIndex;s(l,0)||(i.lastIndex=0);var u=o(i,c);return s(i.lastIndex,l)||(i.lastIndex=l),null===u?-1:u.index}]}))},"90a2":function(e,t,n){"use strict";var r=n("53ca");n("7db0");function a(e,t){var n=t.modifiers||{},a=t.value,s="object"===Object(r["a"])(a)?a:{handler:a,options:{}},o=s.handler,c=s.options,l=new IntersectionObserver((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length>1?arguments[1]:void 0;if(e._observe){if(o&&(!n.quiet||e._observe.init)){var a=Boolean(t.find((function(e){return e.isIntersecting})));o(t,r,a)}e._observe.init&&n.once?i(e):e._observe.init=!0}}),c);e._observe={init:!1,observer:l},l.observe(e)}function i(e){e._observe&&(e._observe.observer.unobserve(e),delete e._observe)}var s={inserted:a,unbind:i};t["a"]=s},a4d5:function(e,t,n){"use strict";n("04b9")},afac:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-sheet",{staticClass:"m-view",attrs:{rounded:"lg"}},["global"===e.type?n("Search",{attrs:{value:e.value_model,mode:e.mode_model,s:e.s_model,f:e.f_model},on:{update:e.updateSorF,"update:value":e.search,"update:mode":function(t){e.mode_model=t},"update:s":function(t){e.s_model=t},"update:f":function(t){e.f_model=t},focus:e.focus,blur:e.blur,cancel:e.cancel}}):e._e(),e.articles&&e.articles.length?n("v-row",{attrs:{"no-gutters":""}},e._l(e.articles,(function(t,r){return!1!==e.$store.state.article.data[t]?n("v-col",{key:r,staticClass:"ma-0 pa-0 pa-sm-2 pm-md-2",attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[n("v-lazy",{attrs:{options:{threshold:.1},"min-height":"200"}},[n("ArticleCard",{attrs:{id:t}})],1)],1):e._e()})),1):e.articles?n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{staticClass:"d-flex align-center justify-center",staticStyle:{height:"60vh"},attrs:{cols:"12"}},[n("span",[e._v("哎呀，看來這裡一篇文章都沒有")])])],1):n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{staticClass:"d-flex align-center justify-center",staticStyle:{height:"60vh"},attrs:{cols:"12"}},[n("v-progress-circular",{attrs:{indeterminate:"",size:"64",color:"grey"}})],1)],1)],1)},a=[],i=n("1da1"),s=(n("96cf"),n("d3b7"),n("3ca3"),n("ddb0"),n("caad"),n("a9e3"),n("ac1f"),n("841c"),n("5319"),n("c151")),o=0,c=1,l=2,u=3,d={name:"ArticleContainer",components:{ArticleCard:function(){return Promise.all([n.e("chunk-4ba0bf44"),n.e("chunk-2570f1d2"),n.e("chunk-24b37312")]).then(n.bind(null,"3f7c"))},Search:function(){return Promise.all([n.e("chunk-4ba0bf44"),n.e("chunk-39048c0e"),n.e("chunk-3beb79a4"),n.e("chunk-2505d8c4"),n.e("chunk-3c1879a4")]).then(n.bind(null,"c106"))}},props:{type:{required:!0,type:String,validator:function(e){return["global","followed","self","others"].includes(e)}},username:{required:!1,type:String,default:void 0},user:{type:String,default:void 0},value:{type:String,default:void 0},mode:{type:Number,default:1},s:{type:String,default:"new2old"},f:{type:String,default:"all"}},data:function(){return{articles:void 0,articles_seg:void 0,stamp:0,value_model:void 0,mode_model:void 0,s_model:void 0,f_model:void 0,focusing:!1}},computed:{},watch:{type:function(){this.fetchArticles()}},created:function(){this.value_model=this.value?this.value:"",this.mode_model=this.mode,this.s_model=this.s,this.f_model=this.f},mounted:function(){this.value?this.search(this.value):this.fetchArticles()},methods:{search:function(e){var t=this;if(this.value_model=e,e){var n;this.articles=void 0;var r=this.mode_model;switch(r){case o:n=Object(s["u"])(e,this.s_model,this.f_model);break;case c:n=Object(s["u"])(e,this.s_model,this.f_model);break;case l:n=Object(s["v"])(e,this.s_model,this.f_model);break;case u:n=Object(s["w"])(e,this.s_model,this.f_model);break;default:throw"value of mode = ".concat(r," is not defined")}var a=++this.stamp;n.then((function(n){var i=n.data;a===t.stamp&&(r===u&&i.length?t.getSearchedUserArticles(i[0],a):(t.articles=i,t.$router.replace({query:{q:e,mode:r,s:t.s_model,f:t.f_model,stamp:Date.now()}})))}))}else this.articles=[]},getSearchedUserArticles:function(e,t){var n=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,n.$store.dispatch("getUserArticles",{user_id:e,sort_by:n.s_model,filter:n.f_model});case 2:a=r.sent,t&&t!==n.stamp||(n.$router.replace({query:{q:n.value_model,mode:u,s:n.s_model,f:n.f_model,stamp:Date.now()}}),n.articles=a);case 4:case"end":return r.stop()}}),r)})))()},updateSorF:function(){this.value_model?this.search(this.value_model):this.fetchArticles()},fetchArticles:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!t.focusing){n.next=2;break}return n.abrupt("return");case 2:e||(e=t.type),"defalut"===t.s_model&&(t.s_model="new2old"),t.articles="others"!==e?t.$store.getters.articles(e,t.s_model,t.f_model):void 0,t.articles&&"others"!==e||(t.articles=void 0,t.$store.dispatch("getArticles",{type:e,sort_by:t.s_model,filter:t.f_model,username:t.username}).then((function(e){t.articles=e})));case 6:case"end":return n.stop()}}),n)})))()},focus:function(){this.focusing=!0},blur:function(){this.focusing=!1,this.value_model||(this.articles=void 0,this.fetchArticles())},cancel:function(){this.focusing=!1,this.articles=void 0,this.fetchArticles()}}},f=d,h=(n("a4d5"),n("2877")),v=n("6544"),b=n.n(v),m=n("62ad"),p=n("5530"),g=n("24b2"),y=n("f2e7"),_=n("90a2"),j=n("58df"),O=n("80d2"),S=Object(j["a"])(g["a"],y["a"]).extend({name:"VLazy",directives:{intersect:_["a"]},props:{options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},tag:{type:String,default:"div"},transition:{type:String,default:"fade-transition"}},computed:{styles:function(){return Object(p["a"])({},this.measurableStyles)}},methods:{genContent:function(){var e=this.isActive&&Object(O["n"])(this);return this.transition?this.$createElement("transition",{props:{name:this.transition}},e):e},onObserve:function(e,t,n){this.isActive||(this.isActive=n)}},render:function(e){return e(this.tag,{staticClass:"v-lazy",attrs:this.$attrs,directives:[{name:"intersect",value:{handler:this.onObserve,options:this.options}}],on:this.$listeners,style:this.styles},[this.genContent()])}}),w=n("490a"),k=n("0fd9"),x=n("8dd9"),C=Object(h["a"])(f,r,a,!1,null,"407b2c7a",null);t["default"]=C.exports;b()(C,{VCol:m["a"],VLazy:S,VProgressCircular:w["a"],VRow:k["a"],VSheet:x["a"]})}}]);