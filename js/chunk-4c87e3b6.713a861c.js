(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4c87e3b6"],{"373e":function(t,e,o){"use strict";o("98ef")},"98ef":function(t,e,o){},a6e9:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.content?o("v-row",{staticClass:"align-center",attrs:{"no-gutters":""}},[o("v-col",{staticClass:"d-flex flex-nowrap align-center",attrs:{cols:"4"}},[o("v-btn",{attrs:{icon:"",disabled:!t.$store.state.is_login},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.like(e)},mousedown:function(t){t.stopPropagation()},touchstart:function(t){t.stopPropagation()}}},[o("v-icon",[t._v(t._s(t.liked?"mdi-heart":"mdi-heart-outline"))])],1),o("span",{staticClass:"subtitle-2 text--secondary text-nowrap"},[t._v("喜歡 "+t._s(t.liked_count))])],1),o("v-col",{staticClass:"d-flex flex-nowrap align-center",attrs:{cols:"4"}},[o("v-btn",{attrs:{icon:"",disabled:!t.$store.state.is_login}},[o("v-icon",[t._v("far fa-comment")])],1),o("span",{staticClass:"subtitle-2 text--secondary text-nowrap"},[t._v("留言 "+t._s(t.content.comments.length))])],1),o("v-col",{staticClass:"d-flex flex-nowrap align-center",attrs:{cols:"4"}},[o("v-btn",{attrs:{icon:"",disabled:!t.$store.state.is_login},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.follow(e)},mousedown:function(t){t.stopPropagation()},touchstart:function(t){t.stopPropagation()}}},[o("v-icon",[t._v(t._s(t.followed?"mdi-star":"mdi-star-outline"))])],1),o("span",{staticClass:"subtitle-2 text--secondary text-nowrap"},[t._v("追蹤 "+t._s(t.followed_count))])],1)],1):t._e()},i=[],s=(o("caad"),o("2532"),o("c151")),l={name:"ArticleBtns",components:{},props:{content:{type:Object,required:!0}},data:function(){return{followed:!1,followed_count:void 0,liked:!1,liked_count:void 0}},watch:{content:function(){this.init()}},created:function(){this.init()},methods:{init:function(){this.getFollowState(),this.getLikeState()},getFollowState:function(){var t=this.$store.state.user.self.id;this.followed=this.content.fans.includes(t),this.followed_count=this.content.fans.length},follow:function(){this.$store.state.is_login&&(this.followed=!this.followed,this.followed?this.followed_count++:this.followed_count--,this.$store.dispatch("setFollowed",{article_id:this.content.id,value:this.followed}))},getLikeState:function(){this.liked=!!this.$store.state.article.liked[this.content.id],this.liked_count=this.content.likes},like:function(){this.$store.state.is_login&&(this.liked=!this.liked,this.liked?this.liked_count++:this.liked_count--,Object(s["C"])(this.content.id,this.liked),this.$store.commit("setLiked",{id:this.content.id,value:this.liked}))}}},a=l,c=(o("373e"),o("2877")),r=o("6544"),d=o.n(r),u=o("8336"),f=o("62ad"),h=o("132d"),p=o("0fd9"),w=Object(c["a"])(a,n,i,!1,null,null,null);e["default"]=w.exports;d()(w,{VBtn:u["a"],VCol:f["a"],VIcon:h["a"],VRow:p["a"]})}}]);