(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-38f453fd"],{"140f":function(t,e,a){t.exports=a.p+"img/card5.808c045c.png"},"269a":function(t,e){t.exports=function(t,e){var a="function"===typeof t.exports?t.exports.extendOptions:t.options;for(var r in"function"===typeof t.exports&&(a.directives=t.exports.options.directives),a.directives=a.directives||{},e)a.directives[r]=a.directives[r]||e[r]}},"2fa4":function(t,e,a){"use strict";a("20f6");var r=a("80d2");e["a"]=Object(r["g"])("spacer","div","v-spacer")},"2fcf":function(t,e,a){t.exports=a.p+"img/card2.95d4c38a.png"},"3c93":function(t,e,a){},"50fa":function(t,e,a){var r={"./card1.png":"cdbf","./card2.png":"2fcf","./card3.png":"b062","./card4.png":"7bc2","./card5.png":"140f","./card6.png":"a1c8","./card7.png":"7283"};function n(t){var e=o(t);return a(e)}function o(t){if(!a.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}n.keys=function(){return Object.keys(r)},n.resolve=o,t.exports=n,n.id="50fa"},"62ad":function(t,e,a){"use strict";a("4160"),a("caad"),a("13d5"),a("45fc"),a("4ec9"),a("a9e3"),a("b64b"),a("d3b7"),a("ac1f"),a("3ca3"),a("5319"),a("2ca0"),a("159b"),a("ddb0");var r=a("ade3"),n=a("5530"),o=(a("4b85"),a("2b0e")),i=a("d9f7"),s=a("80d2"),c=["sm","md","lg","xl"],l=function(){return c.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),u=function(){return c.reduce((function(t,e){return t["offset"+Object(s["q"])(e)]={type:[String,Number],default:null},t}),{})}(),d=function(){return c.reduce((function(t,e){return t["order"+Object(s["q"])(e)]={type:[String,Number],default:null},t}),{})}(),f={col:Object.keys(l),offset:Object.keys(u),order:Object.keys(d)};function v(t,e,a){var r=t;if(null!=a&&!1!==a){if(e){var n=e.replace(t,"");r+="-".concat(n)}return"col"!==t||""!==a&&!0!==a?(r+="-".concat(a),r.toLowerCase()):r.toLowerCase()}}var p=new Map;e["a"]=o["a"].extend({name:"v-col",functional:!0,props:Object(n["a"])({cols:{type:[Boolean,String,Number],default:!1}},l,{offset:{type:[String,Number],default:null}},u,{order:{type:[String,Number],default:null}},d,{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var a=e.props,n=e.data,o=e.children,s=(e.parent,"");for(var c in a)s+=String(a[c]);var l=p.get(s);return l||function(){var t,e;for(e in l=[],f)f[e].forEach((function(t){var r=a[t],n=v(e,t,r);n&&l.push(n)}));var n=l.some((function(t){return t.startsWith("col-")}));l.push((t={col:!n||!a.cols},Object(r["a"])(t,"col-".concat(a.cols),a.cols),Object(r["a"])(t,"offset-".concat(a.offset),a.offset),Object(r["a"])(t,"order-".concat(a.order),a.order),Object(r["a"])(t,"align-self-".concat(a.alignSelf),a.alignSelf),t)),p.set(s,l)}(),t(a.tag,Object(i["a"])(n,{class:l}),o)}})},7283:function(t,e,a){t.exports=a.p+"img/card7.f34378d3.png"},"7bc2":function(t,e,a){t.exports=a.p+"img/card4.92503f54.png"},"8ce9":function(t,e,a){},"9a09":function(t,e,a){},a1c8:function(t,e,a){t.exports=a.p+"img/card6.cb43480f.png"},a797:function(t,e,a){"use strict";a("a9e3");var r=a("5530"),n=(a("3c93"),a("a9ad")),o=a("7560"),i=a("f2e7"),s=a("58df");e["a"]=Object(s["a"])(n["a"],o["a"],i["a"]).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim:function(){var t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes:function(){return Object(r["a"])({"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive},this.themeClasses)},computedOpacity:function(){return Number(this.isActive?this.opacity:0)},styles:function(){return{zIndex:this.zIndex}}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render:function(t){var e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",class:this.classes,style:this.styles},e)}})},b062:function(t,e,a){t.exports=a.p+"img/card3.37194b93.png"},b22b:function(t,e,a){t.exports=a.p+"img/moroccandays.118acbab.jpg"},c71c:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticStyle:{"max-width":"100vw"}},[a("v-toolbar",{staticClass:"pt4",staticStyle:{"max-height":"10vh"},attrs:{flat:""}},[a("v-row",{staticStyle:{"max-width":"100vw"},attrs:{align:"center"}},[a("v-col",{attrs:{cols:"3"}},[a("v-row",{staticStyle:{},attrs:{align:"center"}},[a("v-col",{attrs:{cols:"auto"}},[a("v-img",{attrs:{src:t.get_icon("side_bar"),"max-width":"0.5vw"}})],1),a("v-col",{attrs:{cols:"10",maxheigh:"10vh"}},[a("span",{staticClass:"bar-left"},[t._v("遺願清單")]),a("br"),a("span",{staticClass:"bar-left"},[t._v("The bucket list")])])],1)],1),a("v-spacer"),a("v-col",{attrs:{cols:"auto",maxheigh:"10vh"}},[a("h1",[t._v("About Us")])]),a("v-spacer"),a("v-col",{attrs:{cols:"3"}},[a("v-row",{attrs:{justify:"end",align:"center"}},[a("v-col",{attrs:{cols:"4",align:"center","max-height":"10vh","min-width":"10em"}},[a("p",{staticClass:"pt-7"},[a("span",[t._v("國立成功大學")]),a("br"),a("span",[t._v("National")]),a("br"),a("span",[t._v("Cheng Kung")]),a("br"),a("span",[t._v("University")]),a("br"),a("span",{staticStyle:{color:"rgba(0, 0, 0, 0)"}}),a("v-divider")],1)])],1)],1)],1)],1),a("v-row",{attrs:{justify:"center","max-width":"100vw","max-height":"90vh"}},[a("v-img",{attrs:{src:t.board_bg,"max-height":"100vh","max-width":"100vw"}},[t._l(7,(function(e){return a("v-hover",{key:e,scopedSlots:t._u([{key:"default",fn:function(r){var n=r.hover;return[a("v-img",{staticClass:"abs",class:"card-"+e,style:n?"zoom: 102%":"zoom:100%",attrs:{src:t.board_card(e),"min-width":"10vw","max-width":"12vw",contain:""},on:{click:function(a){return t.Expand(e)}}})]}}],null,!0)})})),a("v-overlay",{directives:[{name:"scroll",rawName:"v-scroll.self",modifiers:{self:!0}}],ref:"ovr",staticClass:"overflow-y-auto overflow",attrs:{value:t.overlay,opacity:"0",absolute:"",dark:!1}},[a("personal-page",{attrs:{my_id:t.expand_for},on:{back:function(e){t.overlay=!t.overlay}}})],1)],2)],1)],1)},n=[],o=(a("d3b7"),a("5530")),i=a("2f62"),s={name:"board",components:{PersonalPage:function(){return a.e("chunk-28603402").then(a.bind(null,"0694"))}},data:function(){return{overlay:!1,expand_for:1,selected_img:a("b22b"),board_bg:a("e0b0"),overlay_height:0}},computed:Object(o["a"])({},Object(i["d"])(["memos"])),methods:{Expand:function(t){this.overlay=!this.overlay,this.expand_for=t},board_card:function(t){return a("50fa")("./card".concat(t,".png"))},get_icon:function(t){return a("f583")("./"+t+".png")}},mounted:function(){}},c=s,l=(a("c83c"),a("2877")),u=a("6544"),d=a.n(u),f=a("62ad"),v=a("a523"),p=(a("8ce9"),a("7560")),h=p["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:Object(o["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(o["a"])({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}}),b=(a("a9e3"),a("2b0e")),m=b["a"].extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(t,e){var a=this;this.clearDelay();var r=parseInt(this["".concat(t,"Delay")],10);this["".concat(t,"Timeout")]=setTimeout(e||function(){a.isActive={open:!0,close:!1}[t]},r)}}}),g=a("f2e7"),y=a("58df"),x=a("d9bd"),_=Object(y["a"])(m,g["a"]).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(t=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(this.disabled||(t.data=t.data||{},this._g(t.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),t):(Object(x["c"])("v-hover should only contain a single element",this),t)):(Object(x["c"])("v-hover is missing a default scopedSlot or bound value",this),null);var t}}),w=a("adda"),O=a("a797"),S=a("0fd9"),j=a("2fa4"),C=a("71d9"),k=a("269a"),N=a.n(k),D=a("f977"),T=Object(l["a"])(c,r,n,!1,null,"72e43d9f",null);e["default"]=T.exports;d()(T,{VCol:f["a"],VContainer:v["a"],VDivider:h,VHover:_,VImg:w["a"],VOverlay:O["a"],VRow:S["a"],VSpacer:j["a"],VToolbar:C["a"]}),N()(T,{Scroll:D["b"]})},c83c:function(t,e,a){"use strict";var r=a("9a09"),n=a.n(r);n.a},cdbf:function(t,e,a){t.exports=a.p+"img/card1.7cc58355.png"},e0b0:function(t,e,a){t.exports=a.p+"img/about_us_outer_bg.d817a1f9.jpg"}}]);