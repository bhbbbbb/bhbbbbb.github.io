(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-40fc4853","chunk-5f1c94c9"],{"0481":function(t,e,n){"use strict";var i=n("23e7"),a=n("a2bf"),s=n("7b0b"),r=n("50c4"),o=n("a691"),c=n("65f0");i({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=s(this),n=r(e.length),i=c(e,0);return i.length=a(i,e,e,n,0,void 0===t?1:o(t)),i}})},"0fd9":function(t,e,n){"use strict";var i=n("ade3"),a=n("5530"),s=(n("13d5"),n("caad"),n("2532"),n("99af"),n("b64b"),n("ac1f"),n("5319"),n("4ec9"),n("d3b7"),n("3ca3"),n("ddb0"),n("159b"),n("4b85"),n("2b0e")),r=n("d9f7"),o=n("80d2"),c=["sm","md","lg","xl"],l=["start","end","center"];function u(t,e){return c.reduce((function(n,i){return n[t+Object(o["x"])(i)]=e(),n}),{})}var d=function(t){return[].concat(l,["baseline","stretch"]).includes(t)},h=u("align",(function(){return{type:String,default:null,validator:d}})),f=function(t){return[].concat(l,["space-between","space-around"]).includes(t)},v=u("justify",(function(){return{type:String,default:null,validator:f}})),p=function(t){return[].concat(l,["space-between","space-around","stretch"]).includes(t)},b=u("alignContent",(function(){return{type:String,default:null,validator:p}})),g={align:Object.keys(h),justify:Object.keys(v),alignContent:Object.keys(b)},m={align:"align",justify:"justify",alignContent:"align-content"};function y(t,e,n){var i=m[t];if(null!=n){if(e){var a=e.replace(t,"");i+="-".concat(a)}return i+="-".concat(n),i.toLowerCase()}}var C=new Map;e["a"]=s["a"].extend({name:"v-row",functional:!0,props:Object(a["a"])(Object(a["a"])(Object(a["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d}},h),{},{justify:{type:String,default:null,validator:f}},v),{},{alignContent:{type:String,default:null,validator:p}},b),render:function(t,e){var n=e.props,a=e.data,s=e.children,o="";for(var c in n)o+=String(n[c]);var l=C.get(o);return l||function(){var t,e;for(e in l=[],g)g[e].forEach((function(t){var i=n[t],a=y(e,t,i);a&&l.push(a)}));l.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(i["a"])(t,"align-".concat(n.align),n.align),Object(i["a"])(t,"justify-".concat(n.justify),n.justify),Object(i["a"])(t,"align-content-".concat(n.alignContent),n.alignContent),t)),C.set(o,l)}(),t(n.tag,Object(r["a"])(a,{staticClass:"row",class:l}),s)}})},"132d":function(t,e,n){"use strict";var i,a=n("5530"),s=(n("c96a"),n("caad"),n("2532"),n("a9e3"),n("498a"),n("7db0"),n("fb6a"),n("4804"),n("7e2b")),r=n("a9ad"),o=n("af2b"),c=n("7560"),l=n("80d2"),u=n("2b0e"),d=n("58df");function h(t){return["fas","far","fal","fab","fad"].some((function(e){return t.includes(e)}))}function f(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(function(t){t["xSmall"]="12px",t["small"]="16px",t["default"]="24px",t["medium"]="28px",t["large"]="36px",t["xLarge"]="40px"})(i||(i={}));var v=Object(d["a"])(s["a"],r["a"],o["a"],c["a"]).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium:function(){return!1},hasClickListener:function(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon:function(){var t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),Object(l["v"])(this,t)},getSize:function(){var t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=Object(l["s"])(t).find((function(e){return t[e]}));return e&&i[e]||Object(l["f"])(this.size)},getDefaultData:function(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:Object(a["a"])({"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0},this.attrs$),on:this.listeners$}},getSvgWrapperData:function(){var t=this.getSize(),e=Object(a["a"])(Object(a["a"])({},this.getDefaultData()),{},{style:t?{fontSize:t,height:t,width:t}:void 0});return this.applyColors(e),e},applyColors:function(t){t.class=Object(a["a"])(Object(a["a"])({},t.class),this.themeClasses),this.setTextColor(this.color,t)},renderFontIcon:function(t,e){var n=[],i=this.getDefaultData(),a="material-icons",s=t.indexOf("-"),r=s<=-1;r?n.push(t):(a=t.slice(0,s),h(a)&&(a="")),i.class[a]=!0,i.class[t]=!r;var o=this.getSize();return o&&(i.style={fontSize:o}),this.applyColors(i),e(this.hasClickListener?"button":this.tag,i,n)},renderSvgIcon:function(t,e){var n={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},i=this.getSize();return i&&(n.style={fontSize:i,height:i,width:i}),e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e("svg",n,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent:function(t,e){var n={class:{"v-icon__component":!0}},i=this.getSize();i&&(n.style={fontSize:i,height:i,width:i}),this.applyColors(n);var a=t.component;return n.props=t.props,n.nativeOn=n.on,e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e(a,n)])}},render:function(t){var e=this.getIcon();return"string"===typeof e?f(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});e["a"]=u["a"].extend({name:"v-icon",$_wrapperFor:v,functional:!0,render:function(t,e){var n=e.data,i=e.children,a="";return n.domProps&&(a=n.domProps.textContent||n.domProps.innerHTML||a,delete n.domProps.textContent,delete n.domProps.innerHTML),t(v,n,a?[a]:i)}})},"1b5b":function(t,e,n){},"20f6":function(t,e,n){},"24b2":function(t,e,n){"use strict";n("a9e3");var i=n("80d2"),a=n("2b0e");e["a"]=a["a"].extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var t={},e=Object(i["f"])(this.height),n=Object(i["f"])(this.minHeight),a=Object(i["f"])(this.minWidth),s=Object(i["f"])(this.maxHeight),r=Object(i["f"])(this.maxWidth),o=Object(i["f"])(this.width);return e&&(t.height=e),n&&(t.minHeight=n),a&&(t.minWidth=a),s&&(t.maxHeight=s),r&&(t.maxWidth=r),o&&(t.width=o),t}}})},"25a8":function(t,e,n){},2901:function(t,e,n){"use strict";n("1b5b")},"3a2f":function(t,e,n){"use strict";var i=n("ade3"),a=(n("a9e3"),n("9734"),n("4ad4")),s=n("a9ad"),r=n("16b7"),o=n("b848"),c=n("75eb"),l=n("f573"),u=n("f2e7"),d=n("80d2"),h=n("d9bd"),f=n("58df");e["a"]=Object(f["a"])(s["a"],r["a"],o["a"],c["a"],l["a"],u["a"]).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,n=t.content,i=!this.bottom&&!this.left&&!this.top&&!this.right,a=!1!==this.attach?e.offsetLeft:e.left,s=0;return this.top||this.bottom||i?s=a+e.width/2-n.width/2:(this.left||this.right)&&(s=a+(this.right?e.width:-n.width)+(this.right?10:-10)),this.nudgeLeft&&(s-=parseInt(this.nudgeLeft)),this.nudgeRight&&(s+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(s,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,n=t.content,i=!1!==this.attach?e.offsetTop:e.top,a=0;return this.top||this.bottom?a=i+(this.bottom?e.height:-n.height)+(this.bottom?10:-10):(this.left||this.right)&&(a=i+e.height/2-n.height/2),this.nudgeTop&&(a-=parseInt(this.nudgeTop)),this.nudgeBottom&&(a+=parseInt(this.nudgeBottom)),"".concat(this.calcYOverflow(a+this.pageYOffset),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(d["f"])(this.maxWidth),minWidth:Object(d["f"])(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(d["o"])(this,"activator",!0)&&Object(h["b"])("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=a["a"].options.methods.genActivatorListeners.call(this);return e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")},e.keydown=function(e){e.keyCode===d["r"].esc&&(t.getActivator(e),t.runDelay("close"))},e},genActivatorAttributes:function(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition:function(){var t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},Object(i["a"])(t,this.contentClass,!0),Object(i["a"])(t,"menuable__content__active",this.isActive),Object(i["a"])(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}})},"3ad6":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.article?n("v-card",{staticClass:"m-view pa-1 mt-6 mx-lg-auto",attrs:{"min-height":"80vh",rounded:"lg",color:t.color_list(t.id),"max-width":"1000"}},[n("v-container",{staticStyle:{"max-width":"1000px"}},[n("v-row",{attrs:{"no-gutters":"no-gutters"}},[n("v-col",{staticClass:"d-flex justify-start align-center",attrs:{cols:"6"}},[n("UserAvatar",{attrs:{user:t.article.author}}),n("NavLink",{attrs:{to:"/"+t.article.author.name}},[n("span",{staticClass:"py-3 mx-3 text-center font-weight-bold"},[t._v(t._s(t.article.author.name))])]),n("v-card-subtitle",{staticClass:"mx-4 px-4 py-0"},[t._v(t._s(t.date))])],1),n("v-col",{staticClass:"d-flex justify-end",attrs:{cols:"6"}},[t.editing?n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,a=e.attrs;return[n("v-btn",t._g(t._b({staticClass:"align-self-end",attrs:{icon:""},on:{click:t.toggleEdit}},"v-btn",a,!1),i),[n("v-icon",[t._v("mdi-check")])],1)]}}],null,!1,3971699830)},[n("span",[t._v("結束編輯")])]):n("v-menu",{attrs:{"offset-y":"","close-on-content-click":"close-on-content-click","nudge-left":"100","min-width":"140"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,a=e.attrs;return[n("v-btn",t._g(t._b({staticClass:"align-self-end",attrs:{icon:""}},"v-btn",a,!1),i),[n("v-icon",[t._v("mdi-dots-horizontal")])],1)]}}],null,!1,3497957156)},[n("v-list",[n("v-list-item",{on:{click:t.Copy}},[n("v-icon",{staticClass:"mr-2"},[t._v("mdi-content-copy")]),n("span",{staticClass:"text-nowrap"},[t._v("複製連結")])],1),t.$store.state.user.self.id!==t.article.author.id||t.article.finished?t._e():n("v-list-item",{on:{click:t.toggleEdit}},[n("v-icon",{staticClass:"mr-2"},[t._v("mdi-pencil")]),n("span",{staticClass:"text-nowrap"},[t._v(t._s(t.editing?"取消編輯":"編輯內文"))])],1),t.$store.state.is_login?n("v-list-item",{on:{click:t.goLink}},[n("v-icon",{staticClass:"mr-2"},[t._v("mdi-link-variant")]),n("span",{staticClass:"text-nowrap"},[t._v("引用計畫")])],1):t._e(),t.$store.state.user.self.id===t.article.author.id?n("v-divider",{staticClass:"mx-2"}):t._e(),t.$store.state.user.self.id===t.article.author.id?n("MsgBox",{attrs:{width:"320"},on:{confirm:t.deletePost},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,a=e.attrs;return[n("v-list-item",t._g(t._b({staticStyle:{color:"red"}},"v-list-item",a,!1),i),[n("v-icon",{staticClass:"mr-2"},[t._v("mdi-delete-outline")]),n("span",{staticClass:"text-nowrap",staticStyle:{color:"red"}},[t._v("刪除計畫")])],1)]}},{key:"confirm",fn:function(){return[n("span",{staticStyle:{color:"red"}},[t._v("刪除")])]},proxy:!0}],null,!1,1144244953)},[n("span",[t._v("讓口卡獸把這篇文章吃掉嗎？")])]):t._e()],1)],1)],1)],1),t.article?n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{staticClass:"pa-0 mt-n2 d-flex flex-nowrap align-center",staticStyle:{height:"16px"},attrs:{offset:"1",cols:"auto"}},[n("span",{directives:[{name:"show",rawName:"v-show",value:t.citation,expression:"citation"}],staticClass:"pl-3 ml-3 caption mr-1"},[t._v("引用自")]),t.citation?n("NavLink",{staticClass:"caption font-weight-bold",attrs:{to:{name:"User",params:{username:t.citation.author.name}}}},[t._v(t._s(t.citation.author.name))]):t._e(),n("span",{directives:[{name:"show",rawName:"v-show",value:t.citation,expression:"citation"}],staticClass:"ml-1 caption"},[t._v("的")]),t.citation?n("NavLink",{staticClass:"caption font-weight-bold",attrs:{to:{name:"Article",params:{id:t.citation.id}}}},[t._v("文章")]):t._e()],1)],1):t._e(),n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"10",offset:"1"}},[t.editing?n("EditCard",{staticClass:"mt-3",attrs:{article:t.article.content},on:{"update:article":function(e){return t.$set(t.article,"content",e)},deleted:t.del_ms}}):n("v-card",{staticClass:"pa-0 ma-0 transparent",attrs:{flat:""}},[n("v-row",{staticClass:"my-3",attrs:{"no-gutters":""}},[n("h3",[t._v(t._s(t.article.content.title))])]),n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"12"}},[n("Body",{staticClass:"text-pre-wrap",attrs:{content:t.article.content.body}})],1)],1),n("v-row",{attrs:{"no-gutters":""}},t._l(t.article.content.tags,(function(e,i){return n("NavLink",{key:i,attrs:{underline:!1,to:{name:"Articles",query:{q:e.substring(1,e.length),mode:2}}}},[n("v-chip",{staticClass:"mr-2 my-1",attrs:{color:"#9BA2AA",small:"",dark:""}},[t._v(t._s(e))])],1)})),1),n("v-row",{attrs:{"no-gutters":""}},[n("Milestones",{attrs:{content:t.article.content.milestones,"author-id":t.article.author.id,"article-id":t.article.id,finished:t.article.finished}})],1),n("v-row",{staticClass:"mr-3 mt-5",attrs:{"no-gutters":""}},[n("span",{staticClass:"caption"},[t._v("此計畫被引用 "+t._s(t.article.cited_count)+" 次")])])],1)],1)],1),n("v-row",{staticClass:"mr-3 mt-5",attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"11",offset:"1"}},[n("v-divider"),t.article?n("ArticleBtns",{attrs:{content:t.article}}):t._e(),t._l(t.article.comments,(function(t,e){return n("CommentCard",{key:e,attrs:{content:t}})})),t.$store.state.is_login?n("NewComment",{attrs:{"article-id":t.id}}):t._e()],2)],1)],1),n("MsgBox",{attrs:{value:t.show_info,buttons:1,timeout:1e3},on:{"update:value":function(e){t.show_info=e}}},[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{staticClass:"d-flex justify-center",attrs:{cols:"12"}},[n("span",[t._v("已複製到剪貼簿")])])],1)],1),n("input",{staticStyle:{position:"absolute",opacity:"0"},attrs:{id:"url"}})],1):t._e()},a=[],s=n("1da1"),r=(n("96cf"),n("d3b7"),n("3ca3"),n("ddb0"),n("159b"),n("ac1f"),n("5319"),n("c1df")),o=n.n(r),c=n("c689"),l=1,u=2,d={name:"Article",components:{CommentCard:function(){return n.e("chunk-5ba90da0").then(n.bind(null,"1bd7"))},NewComment:function(){return Promise.all([n.e("chunk-39048c0e"),n.e("chunk-a8ced08e")]).then(n.bind(null,"86f1"))},UserAvatar:function(){return n.e("chunk-619876d1").then(n.bind(null,"808f"))},ArticleBtns:function(){return n.e("chunk-4c87e3b6").then(n.bind(null,"a6e9"))},NavLink:function(){return n.e("chunk-341f166a").then(n.bind(null,"39da"))},Body:function(){return n.e("chunk-2d0d6cc9").then(n.bind(null,"73a8"))},Milestones:function(){return n.e("chunk-7500ae1a").then(n.bind(null,"8bbb"))},MsgBox:function(){return n.e("chunk-31a225c9").then(n.bind(null,"3a33"))},EditCard:function(){return Promise.all([n.e("chunk-39048c0e"),n.e("chunk-69db0855")]).then(n.bind(null,"0535"))}},props:{id:{type:String,required:!0}},data:function(){return{newMilestone_show:!1,show_info:!1,editing:!1,deleted_milestones:[],citation:void 0}},computed:{date:function(){return o()(this.article.date).format("M/D")},article:{get:function(){return this.$store.state.article.data[this.id]},set:function(t){this.$store.dispatch("editArticle",{article_id:this.id,content:t.content})}}},created:function(){this.init()},methods:{init:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.article||!t.article.citation){e.next=4;break}return e.next=3,t.$store.dispatch("getArticle",{id:t.article.citation});case 3:t.citation=e.sent;case 4:case"end":return e.stop()}}),e)})))()},Copy:function(){var t=document.getElementById("url");t.value=window.location.href,t.select(),document.execCommand("copy"),this.show_info=!0},toggleEdit:function(){this.editing=!this.editing,this.editing&&(this.deleted_milestones=[]),this.editing||this.submitEdit()},submitEdit:function(){var t=this.milestonesHandle(),e=t.new_milestones,n=t.modified_milestones;this.$store.dispatch("editArticle",{article_id:this.id,content:{title:this.article.content.title,body:this.article.content.body,tags:this.article.content.tags,modified_milestones:n,new_milestones:e,deleted_milestones:this.deleted_milestones},content_native:this.article.content})},milestonesHandle:function(){var t=[],e=[];return this.article.content.milestones.forEach((function(n){n.type&&(n.type===u?t.push(n):n.type===l&&e.push(n))})),{new_milestones:t,modified_milestones:e}},del_ms:function(t){this.deleted_milestones.push(t)},moment:o.a,color_list:c["b"],deletePost:function(){this.$store.dispatch("deleteArticle",this.id),this.$router.replace("/")},goLink:function(){this.$router.push({name:"Link",params:{reference:this.article}})}}},h=d,f=(n("2901"),n("2877")),v=n("6544"),p=n.n(v),b=n("8336"),g=n("b0af"),m=n("99d9"),y=n("cc20"),C=n("62ad"),j=n("a523"),w=n("ce7e"),O=n("132d"),x=n("8860"),_=n("da13"),S=n("e449"),k=n("0fd9"),B=n("3a2f"),$=Object(f["a"])(h,i,a,!1,null,null,null);e["default"]=$.exports;p()($,{VBtn:b["a"],VCard:g["a"],VCardSubtitle:m["b"],VChip:y["a"],VCol:C["a"],VContainer:j["a"],VDivider:w["a"],VIcon:O["a"],VList:x["a"],VListItem:_["a"],VMenu:S["a"],VRow:k["a"],VTooltip:B["a"]})},4804:function(t,e,n){},"490a":function(t,e,n){"use strict";n("a9e3"),n("99af"),n("8d4f");var i=n("a9ad"),a=n("80d2");e["a"]=i["a"].extend({name:"v-progress-circular",props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:function(){return{radius:20}},computed:{calculatedSize:function(){return Number(this.size)+(this.button?8:0)},circumference:function(){return 2*Math.PI*this.radius},classes:function(){return{"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue:function(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray:function(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset:function(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth:function(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles:function(){return{height:Object(a["f"])(this.calculatedSize),width:Object(a["f"])(this.calculatedSize)}},svgStyles:function(){return{transform:"rotate(".concat(Number(this.rotate),"deg)")}},viewBoxSize:function(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle:function(t,e){return this.$createElement("circle",{class:"v-progress-circular__".concat(t),attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":e}})},genSvg:function(){var t=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"".concat(this.viewBoxSize," ").concat(this.viewBoxSize," ").concat(2*this.viewBoxSize," ").concat(2*this.viewBoxSize)}},t)},genInfo:function(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},this.$slots.default)}},render:function(t){return t("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}})},"4b85":function(t,e,n){},"62ad":function(t,e,n){"use strict";var i=n("ade3"),a=n("5530"),s=(n("13d5"),n("a9e3"),n("b64b"),n("ac1f"),n("5319"),n("4ec9"),n("d3b7"),n("3ca3"),n("ddb0"),n("caad"),n("159b"),n("2ca0"),n("4b85"),n("2b0e")),r=n("d9f7"),o=n("80d2"),c=["sm","md","lg","xl"],l=function(){return c.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),u=function(){return c.reduce((function(t,e){return t["offset"+Object(o["x"])(e)]={type:[String,Number],default:null},t}),{})}(),d=function(){return c.reduce((function(t,e){return t["order"+Object(o["x"])(e)]={type:[String,Number],default:null},t}),{})}(),h={col:Object.keys(l),offset:Object.keys(u),order:Object.keys(d)};function f(t,e,n){var i=t;if(null!=n&&!1!==n){if(e){var a=e.replace(t,"");i+="-".concat(a)}return"col"!==t||""!==n&&!0!==n?(i+="-".concat(n),i.toLowerCase()):i.toLowerCase()}}var v=new Map;e["a"]=s["a"].extend({name:"v-col",functional:!0,props:Object(a["a"])(Object(a["a"])(Object(a["a"])(Object(a["a"])({cols:{type:[Boolean,String,Number],default:!1}},l),{},{offset:{type:[String,Number],default:null}},u),{},{order:{type:[String,Number],default:null}},d),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,a=e.data,s=e.children,o=(e.parent,"");for(var c in n)o+=String(n[c]);var l=v.get(o);return l||function(){var t,e;for(e in l=[],h)h[e].forEach((function(t){var i=n[t],a=f(e,t,i);a&&l.push(a)}));var a=l.some((function(t){return t.startsWith("col-")}));l.push((t={col:!a||!n.cols},Object(i["a"])(t,"col-".concat(n.cols),n.cols),Object(i["a"])(t,"offset-".concat(n.offset),n.offset),Object(i["a"])(t,"order-".concat(n.order),n.order),Object(i["a"])(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),v.set(o,l)}(),t(n.tag,Object(r["a"])(a,{class:l}),s)}})},"7e2b":function(t,e,n){"use strict";var i=n("2b0e");function a(t){return function(e,n){for(var i in n)Object.prototype.hasOwnProperty.call(e,i)||this.$delete(this.$data[t],i);for(var a in e)this.$set(this.$data[t],a,e[a])}}e["a"]=i["a"].extend({data:function(){return{attrs$:{},listeners$:{}}},created:function(){this.$watch("$attrs",a("attrs$"),{immediate:!0}),this.$watch("$listeners",a("listeners$"),{immediate:!0})}})},"8adc":function(t,e,n){},"8d4f":function(t,e,n){},"8dd9":function(t,e,n){"use strict";var i=n("5530"),a=(n("25a8"),n("7e2b")),s=n("a9ad"),r=n("c995"),o=n("24b2"),c=n("a236"),l=n("7560"),u=n("58df");e["a"]=Object(u["a"])(a["a"],s["a"],r["a"],o["a"],c["a"],l["a"]).extend({name:"v-sheet",props:{outlined:Boolean,shaped:Boolean,tag:{type:String,default:"div"}},computed:{classes:function(){return Object(i["a"])(Object(i["a"])(Object(i["a"])({"v-sheet":!0,"v-sheet--outlined":this.outlined,"v-sheet--shaped":this.shaped},this.themeClasses),this.elevationClasses),this.roundedClasses)},styles:function(){return this.measurableStyles}},render:function(t){var e={class:this.classes,style:this.styles,on:this.listeners$};return t(this.tag,this.setBackgroundColor(this.color,e),this.$slots.default)}})},9734:function(t,e,n){},"99d9":function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return c}));var i=n("b0af"),a=n("80d2"),s=Object(a["h"])("v-card__actions"),r=Object(a["h"])("v-card__subtitle"),o=Object(a["h"])("v-card__text"),c=Object(a["h"])("v-card__title");i["a"]},"9d26":function(t,e,n){"use strict";var i=n("132d");e["a"]=i["a"]},a236:function(t,e,n){"use strict";var i=n("ade3"),a=n("b85c"),s=(n("ac1f"),n("1276"),n("a15b"),n("2b0e"));e["a"]=s["a"].extend({name:"roundable",props:{rounded:[Boolean,String],tile:Boolean},computed:{roundedClasses:function(){var t=[],e="string"===typeof this.rounded?String(this.rounded):!0===this.rounded;if(this.tile)t.push("rounded-0");else if("string"===typeof e){var n,s=e.split(" "),r=Object(a["a"])(s);try{for(r.s();!(n=r.n()).done;){var o=n.value;t.push("rounded-".concat(o))}}catch(c){r.e(c)}finally{r.f()}}else e&&t.push("rounded");return t.length>0?Object(i["a"])({},t.join(" "),!0):{}}}})},a2bf:function(t,e,n){"use strict";var i=n("e8b5"),a=n("50c4"),s=n("0366"),r=function(t,e,n,o,c,l,u,d){var h,f=c,v=0,p=!!u&&s(u,d,3);while(v<o){if(v in n){if(h=p?p(n[v],v,e):n[v],l>0&&i(h))f=r(t,e,h,a(h.length),f,l-1)-1;else{if(f>=9007199254740991)throw TypeError("Exceed the acceptable array length");t[f]=h}f++}v++}return f};t.exports=r},a523:function(t,e,n){"use strict";n("4de4"),n("b64b"),n("2ca0"),n("99af"),n("20f6"),n("4b85"),n("498a"),n("a15b");var i=n("2b0e");function a(t){return i["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,n){var i=n.props,a=n.data,s=n.children;a.staticClass="".concat(t," ").concat(a.staticClass||"").trim();var r=a.attrs;if(r){a.attrs={};var o=Object.keys(r).filter((function(t){if("slot"===t)return!1;var e=r[t];return t.startsWith("data-")?(a.attrs[t]=e,!1):e||"string"===typeof e}));o.length&&(a.staticClass+=" ".concat(o.join(" ")))}return i.id&&(a.domProps=a.domProps||{},a.domProps.id=i.id),e(i.tag,a,s)}})}var s=n("d9f7");e["a"]=a("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var n,i=e.props,a=e.data,r=e.children,o=a.attrs;return o&&(a.attrs={},n=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(a.attrs[t]=e,!1):e||"string"===typeof e}))),i.id&&(a.domProps=a.domProps||{},a.domProps.id=i.id),t(i.tag,Object(s["a"])(a,{staticClass:"container",class:Array({"container--fluid":i.fluid}).concat(n||[])}),r)}})},a9ad:function(t,e,n){"use strict";var i=n("3835"),a=n("ade3"),s=n("5530"),r=(n("ac1f"),n("1276"),n("498a"),n("d3b7"),n("25f0"),n("2b0e")),o=n("d9bd"),c=n("7bc6");e["a"]=r["a"].extend({name:"colorable",props:{color:String},methods:{setBackgroundColor:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"string"===typeof e.style?(Object(o["b"])("style must be an object",this),e):"string"===typeof e.class?(Object(o["b"])("class must be an object",this),e):(Object(c["d"])(t)?e.style=Object(s["a"])(Object(s["a"])({},e.style),{},{"background-color":"".concat(t),"border-color":"".concat(t)}):t&&(e.class=Object(s["a"])(Object(s["a"])({},e.class),{},Object(a["a"])({},t,!0))),e)},setTextColor:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("string"===typeof e.style)return Object(o["b"])("style must be an object",this),e;if("string"===typeof e.class)return Object(o["b"])("class must be an object",this),e;if(Object(c["d"])(t))e.style=Object(s["a"])(Object(s["a"])({},e.style),{},{color:"".concat(t),"caret-color":"".concat(t)});else if(t){var n=t.toString().trim().split(" ",2),r=Object(i["a"])(n,2),l=r[0],u=r[1];e.class=Object(s["a"])(Object(s["a"])({},e.class),{},Object(a["a"])({},l+"--text",!0)),u&&(e.class["text--"+u]=!0)}return e}}})},b85c:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0");var i=n("06c5");function a(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=Object(i["a"])(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var a=0,s=function(){};return{s:s,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return o=t.done,t},e:function(t){c=!0,r=t},f:function(){try{o||null==n["return"]||n["return"]()}finally{if(c)throw r}}}}},c689:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),e["b"]=function(t){return a[i(t)%a.length]};function i(t){var e=0;if(0===t.length)return e;for(var n=0;n<t.length;n++)e+=t.charCodeAt(n);return Math.abs(e)}var a=["#d9c4bd","#f5f4f0","#f3f3f3","#f0e6dc","#f4e6d9","#e0e0e0","#d0d7d7","#9aa2ab","#cccdc3","#e5e8dd","#f0e6dc","#e5ddd1","#f4f1e9","#f5e6e7","#dfd5ca","#f5f4f0","#ccccca","#cdd4cd","#eee5d6","#d8dad9"],s=["#D6C5BE","#CED3CD","#F2E6DA","#E5DCD3","#CCCCCA","#D1D7D7","#9BA2AA","#E8E5E0"]},c995:function(t,e,n){"use strict";var i=n("ade3"),a=(n("a9e3"),n("2b0e"));e["a"]=a["a"].extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation:function(){return this.elevation},elevationClasses:function(){var t=this.computedElevation;return null==t||isNaN(parseInt(t))?{}:Object(i["a"])({},"elevation-".concat(this.elevation),!0)}}})},cc20:function(t,e,n){"use strict";var i=n("3835"),a=n("5530"),s=(n("4de4"),n("8adc"),n("58df")),r=n("0789"),o=n("9d26"),c=n("a9ad"),l=n("4e82"),u=n("7560"),d=n("f2e7"),h=n("1c87"),f=n("af2b"),v=n("d9bd");e["a"]=Object(s["a"])(c["a"],f["a"],h["a"],u["a"],Object(l["a"])("chipGroup"),Object(d["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return Object(a["a"])(Object(a["a"])(Object(a["a"])(Object(a["a"])({"v-chip":!0},h["a"].options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(h["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this,e=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];e.forEach((function(e){var n=Object(i["a"])(e,2),a=n[0],s=n[1];t.$attrs.hasOwnProperty(a)&&Object(v["a"])(a,s,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(o["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(r["b"],t)},genClose:function(){var t=this;return this.$createElement(o["a"],{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],n=this.generateRouteLink(),i=n.tag,s=n.data;s.attrs=Object(a["a"])(Object(a["a"])({},s.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:s.attrs.tabindex}),s.directives.push({name:"show",value:this.active}),s=this.setBackgroundColor(this.color,s);var r=this.textColor||this.outlined&&this.color;return t(i,this.setTextColor(r,s),e)}})},d9f7:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return h}));var i=n("5530"),a=n("3835"),s=n("b85c"),r=(n("ac1f"),n("1276"),n("498a"),n("b64b"),n("99af"),n("80d2")),o={styleList:/;(?![^(]*\))/g,styleProp:/:(.*)/};function c(t){var e,n={},i=Object(s["a"])(t.split(o.styleList));try{for(i.s();!(e=i.n()).done;){var c=e.value,l=c.split(o.styleProp),u=Object(a["a"])(l,2),d=u[0],h=u[1];d=d.trim(),d&&("string"===typeof h&&(h=h.trim()),n[Object(r["c"])(d)]=h)}}catch(f){i.e(f)}finally{i.f()}return n}function l(){var t,e={},n=arguments.length;while(n--)for(var a=0,s=Object.keys(arguments[n]);a<s.length;a++)switch(t=s[a],t){case"class":case"directives":arguments[n][t]&&(e[t]=d(e[t],arguments[n][t]));break;case"style":arguments[n][t]&&(e[t]=u(e[t],arguments[n][t]));break;case"staticClass":if(!arguments[n][t])break;void 0===e[t]&&(e[t]=""),e[t]&&(e[t]+=" "),e[t]+=arguments[n][t].trim();break;case"on":case"nativeOn":arguments[n][t]&&(e[t]=h(e[t],arguments[n][t]));break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":if(!arguments[n][t])break;e[t]||(e[t]={}),e[t]=Object(i["a"])(Object(i["a"])({},arguments[n][t]),e[t]);break;default:e[t]||(e[t]=arguments[n][t])}return e}function u(t,e){return t?e?(t=Object(r["y"])("string"===typeof t?c(t):t),t.concat("string"===typeof e?c(e):e)):t:e}function d(t,e){return e?t&&t?Object(r["y"])(t).concat(e):e:t}function h(){if(!(arguments.length<=0?void 0:arguments[0]))return arguments.length<=1?void 0:arguments[1];if(!(arguments.length<=1?void 0:arguments[1]))return arguments.length<=0?void 0:arguments[0];for(var t={},e=2;e--;){var n=e<0||arguments.length<=e?void 0:arguments[e];for(var i in n)n[i]&&(t[i]?t[i]=[].concat(n[i],t[i]):t[i]=n[i])}return t}},f2e7:function(t,e,n){"use strict";n.d(e,"b",(function(){return s}));var i=n("ade3"),a=n("2b0e");function s(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"input";return a["a"].extend({name:"toggleable",model:{prop:e,event:n},props:Object(i["a"])({},e,{required:!1}),data:function(){return{isActive:!!this[e]}},watch:(t={},Object(i["a"])(t,e,(function(t){this.isActive=!!t})),Object(i["a"])(t,"isActive",(function(t){!!t!==this[e]&&this.$emit(n,t)})),t)})}var r=s();e["a"]=r}}]);