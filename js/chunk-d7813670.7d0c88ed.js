(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d7813670"],{"0481":function(t,e,n){"use strict";var a=n("23e7"),r=n("a2bf"),s=n("7b0b"),o=n("50c4"),i=n("a691"),c=n("65f0");a({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=s(this),n=o(e.length),a=c(e,0);return a.length=r(a,e,e,n,0,void 0===t?1:i(t)),a}})},"0fd9":function(t,e,n){"use strict";var a=n("ade3"),r=n("5530"),s=(n("13d5"),n("caad"),n("2532"),n("99af"),n("b64b"),n("ac1f"),n("5319"),n("4ec9"),n("d3b7"),n("3ca3"),n("ddb0"),n("159b"),n("4b85"),n("2b0e")),o=n("d9f7"),i=n("80d2"),c=["sm","md","lg","xl"],u=["start","end","center"];function l(t,e){return c.reduce((function(n,a){return n[t+Object(i["x"])(a)]=e(),n}),{})}var d=function(t){return[].concat(u,["baseline","stretch"]).includes(t)},f=l("align",(function(){return{type:String,default:null,validator:d}})),h=function(t){return[].concat(u,["space-between","space-around"]).includes(t)},p=l("justify",(function(){return{type:String,default:null,validator:h}})),g=function(t){return[].concat(u,["space-between","space-around","stretch"]).includes(t)},b=l("alignContent",(function(){return{type:String,default:null,validator:g}})),v={align:Object.keys(f),justify:Object.keys(p),alignContent:Object.keys(b)},m={align:"align",justify:"justify",alignContent:"align-content"};function y(t,e,n){var a=m[t];if(null!=n){if(e){var r=e.replace(t,"");a+="-".concat(r)}return a+="-".concat(n),a.toLowerCase()}}var w=new Map;e["a"]=s["a"].extend({name:"v-row",functional:!0,props:Object(r["a"])(Object(r["a"])(Object(r["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d}},f),{},{justify:{type:String,default:null,validator:h}},p),{},{alignContent:{type:String,default:null,validator:g}},b),render:function(t,e){var n=e.props,r=e.data,s=e.children,i="";for(var c in n)i+=String(n[c]);var u=w.get(i);return u||function(){var t,e;for(e in u=[],v)v[e].forEach((function(t){var a=n[t],r=y(e,t,a);r&&u.push(r)}));u.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(a["a"])(t,"align-".concat(n.align),n.align),Object(a["a"])(t,"justify-".concat(n.justify),n.justify),Object(a["a"])(t,"align-content-".concat(n.alignContent),n.alignContent),t)),w.set(i,u)}(),t(n.tag,Object(o["a"])(r,{staticClass:"row",class:u}),s)}})},"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},2909:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var a=n("6b75");function r(t){if(Array.isArray(t))return Object(a["a"])(t)}n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("a630");function s(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var o=n("06c5");function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return r(t)||s(t)||Object(o["a"])(t)||i()}},"297c":function(t,e,n){"use strict";n("a9e3");var a=n("2b0e"),r=n("37c6");e["a"]=a["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(r["a"],{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},"4b85":function(t,e,n){},"615b":function(t,e,n){},"62ad":function(t,e,n){"use strict";var a=n("ade3"),r=n("5530"),s=(n("13d5"),n("a9e3"),n("b64b"),n("ac1f"),n("5319"),n("4ec9"),n("d3b7"),n("3ca3"),n("ddb0"),n("caad"),n("159b"),n("2ca0"),n("4b85"),n("2b0e")),o=n("d9f7"),i=n("80d2"),c=["sm","md","lg","xl"],u=function(){return c.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),l=function(){return c.reduce((function(t,e){return t["offset"+Object(i["x"])(e)]={type:[String,Number],default:null},t}),{})}(),d=function(){return c.reduce((function(t,e){return t["order"+Object(i["x"])(e)]={type:[String,Number],default:null},t}),{})}(),f={col:Object.keys(u),offset:Object.keys(l),order:Object.keys(d)};function h(t,e,n){var a=t;if(null!=n&&!1!==n){if(e){var r=e.replace(t,"");a+="-".concat(r)}return"col"!==t||""!==n&&!0!==n?(a+="-".concat(n),a.toLowerCase()):a.toLowerCase()}}var p=new Map;e["a"]=s["a"].extend({name:"v-col",functional:!0,props:Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])({cols:{type:[Boolean,String,Number],default:!1}},u),{},{offset:{type:[String,Number],default:null}},l),{},{order:{type:[String,Number],default:null}},d),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,r=e.data,s=e.children,i=(e.parent,"");for(var c in n)i+=String(n[c]);var u=p.get(i);return u||function(){var t,e;for(e in u=[],f)f[e].forEach((function(t){var a=n[t],r=h(e,t,a);r&&u.push(r)}));var r=u.some((function(t){return t.startsWith("col-")}));u.push((t={col:!r||!n.cols},Object(a["a"])(t,"col-".concat(n.cols),n.cols),Object(a["a"])(t,"offset-".concat(n.offset),n.offset),Object(a["a"])(t,"order-".concat(n.order),n.order),Object(a["a"])(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),p.set(i,u)}(),t(n.tag,Object(o["a"])(r,{class:u}),s)}})},"74a3":function(t,e,n){},"74a5":function(t,e,n){"use strict";n("74a3")},"9b15":function(t,e,n){t.exports=n.p+"img/logo_dark.317e0c27.png"},a2bf:function(t,e,n){"use strict";var a=n("e8b5"),r=n("50c4"),s=n("0366"),o=function(t,e,n,i,c,u,l,d){var f,h=c,p=0,g=!!l&&s(l,d,3);while(p<i){if(p in n){if(f=g?g(n[p],p,e):n[p],u>0&&a(f))h=o(t,e,f,r(f.length),h,u-1)-1;else{if(h>=9007199254740991)throw TypeError("Exceed the acceptable array length");t[h]=f}h++}p++}return h};t.exports=o},b0af:function(t,e,n){"use strict";var a=n("5530"),r=(n("a9e3"),n("0481"),n("615b"),n("10d2")),s=n("297c"),o=n("1c87"),i=n("58df");e["a"]=Object(i["a"])(s["a"],o["a"],r["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({"v-card":!0},o["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},r["a"].options.computed.classes.call(this))},styles:function(){var t=Object(a["a"])({},r["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=s["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),n=e.tag,a=e.data;return a.style=this.styles,this.isClickable&&(a.attrs=a.attrs||{},a.attrs.tabindex=0),t(n,this.setBackgroundColor(this.color,a),[this.genProgress(),this.$slots.default])}})},dc22:function(t,e,n){"use strict";function a(t,e){var n=e.value,a=e.options||{passive:!0};window.addEventListener("resize",n,a),t._onResize={callback:n,options:a},e.modifiers&&e.modifiers.quiet||n()}function r(t){if(t._onResize){var e=t._onResize,n=e.callback,a=e.options;window.removeEventListener("resize",n,a),delete t._onResize}}var s={inserted:a,unbind:r};e["a"]=s},e19c:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"ma-0 pa-2",attrs:{flat:"","min-height":"400","min-width":"300"}},[a("v-row",{staticClass:"mb-4",attrs:{"no-gutters":""}},[a("v-img",{attrs:{src:n("9b15"),width:"160",height:"44",contain:""}})],1),a("v-row",{staticClass:"justify-center",attrs:{"no-gutters":""}},[a("span",{staticClass:"main-color",staticStyle:{width:"180px","white-space":"wrap"}},[t._v(t._s(t.subtitle))])]),a("v-row",{staticClass:"justify-center mt-10",attrs:{"no-gutters":""}},[a("v-btn",{staticClass:"lowercase",attrs:{width:"132",height:"24",color:"#F4F1EA",rounded:"",elevation:0},on:{click:t.tryLogin,keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.tryLogin(e)}}},[t._v("log in")])],1),a("v-row",{staticClass:"mt-3 justify-center",attrs:{"no-gutters":""}},[a("v-text-field",{attrs:{label:"帳號",placeholder:"帳號",rules:[t.rules.empty,t.rules.regex]},model:{value:t.user.username,callback:function(e){t.$set(t.user,"username",e)},expression:"user.username"}})],1),a("v-row",{staticClass:"mt-3 justify-center",attrs:{"no-gutters":""}},[a("v-text-field",{attrs:{"append-icon":t.psw_show?"mdi-eye":"mdi-eye-off",type:t.psw_show?"text":"password",label:"密碼",placeholder:"密碼",rules:[t.rules.empty,t.rules.regex]},on:{"click:append":function(e){t.psw_show=!t.psw_show},keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.tryLogin()}},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}})],1),a("v-row",{staticClass:"mt-3 justify-center align-center",attrs:{"no-gutters":""}},[a("span",{staticClass:"caption main-color"},[t._v("還沒有帳號？")]),a("NavLink",{staticClass:"mx-3 caption",staticStyle:{color:"#D1AF9B"},attrs:{to:"/register"}},[t._v("點我註冊")])],1),a("MsgBox",{attrs:{value:t.show_info,buttons:1},on:{"update:value":function(e){t.show_info=e}},scopedSlots:t._u([{key:"confirm",fn:function(){return[a("span",[t._v(t._s(t.cancel_msgs[t.type]))])]},proxy:!0}])},[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{staticClass:"d-flex justify-center",attrs:{cols:"12"}},[a("span",[t._v(t._s(t.info_msg))])]),t.unVerified?a("v-col",{staticClass:"d-flex justify-center mt-3",attrs:{cols:"12"}},[a("v-btn",{attrs:{text:"",plain:"",outlined:""},on:{click:t.Send_mail}},[t._v("點我重新傳送驗證信")])],1):t._e()],1)],1)],1)},r=[],s=(n("d3b7"),n("3ca3"),n("ddb0"),n("ac1f"),n("5319"),n("498a"),n("c151")),o={name:"MyLogin",components:{NavLink:function(){return n.e("chunk-df6391c0").then(n.bind(null,"39da"))},MsgBox:function(){return n.e("chunk-136b444a").then(n.bind(null,"3a33"))}},data:function(){return{subtitle:"加入 lernen，幫自己製作屬於自己的學習計劃。",user:{username:"",password:"",id:"0"},rules:{regex:function(t){var e=/^[^\W_]+$/;return e.test(t)||"contain character except word and digit"},empty:function(t){return Boolean(t)||"required"}},psw_show:!1,show_info:!1,info_msg:"",cancel_msgs:{try_again:"再試一次",cancel:"取消",ok:"確定"},unVerified:!1,type:"again"}},methods:{tryLogin:function(){var t=this;if(this.user.username&&this.user.password){var e=!0===this.rules.regex(this.user.username);e?this.$store.dispatch("tryLogin",{username:this.user.username,password:this.user.password}).then((function(){t.$router.replace("/")})).catch((function(e){t.showInfo(e.response.data.err_msg,"cancel"),3==e.response.data.err_code?t.unVerified=!0:t.unVerified=!1})):this.showInfo("請檢查使用者名稱")}else this.showInfo("帳號或密碼為空")},Dev:function(){this.tryLogin({username:"Dev",password:"123"})},Line:function(){var t=this;Object(s["q"])({username:"haha"}).then((function(t){console.log(t.status),window.open(t.data)})).catch((function(e){t.showInfo("Something went wrong"),console.log(e)}))},Send_mail:function(){var t=this;""==this.user.username.trim()?this.showInfo("Required username"):Object(s["x"])(this.user.username.trim()).then((function(e){200==e.status&&t.showInfo("Email has been sent","ok")})).catch((function(e){t.showInfo(e.response.data.err_msg)}))},showInfo:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"try_again";this.info_msg=t,this.show_info=!0,this.type=e}}},i=o,c=(n("74a5"),n("2877")),u=n("6544"),l=n.n(u),d=n("8336"),f=n("b0af"),h=n("62ad"),p=n("adda"),g=n("0fd9"),b=n("8654"),v=Object(c["a"])(i,a,r,!1,null,"078facd1",null);e["default"]=v.exports;l()(v,{VBtn:d["a"],VCard:f["a"],VCol:h["a"],VImg:p["a"],VRow:g["a"],VTextField:b["a"]})}}]);