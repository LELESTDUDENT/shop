(function(){"use strict";var t={1674:function(t,e,n){n(6992),n(8674),n(9601),n(7727);var r=n(8935),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("router-view"),t.$route.meta.showTab?n("van-tabbar",{attrs:{"active-color":"#ee0a24",route:"",placeholder:""},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},t._l(t.lists,(function(e){return n("van-tabbar-item",{key:e.id,attrs:{icon:e.icon,name:e.name,to:e.to,badge:e.badge}},[t._v(" "+t._s(e.text)+" ")])})),1):t._e()],1)},i=[],s={data:function(){return{active:"home",lists:[{id:1,text:"首页",icon:"wap-home",name:"home",to:"/home"},{id:2,text:"分类",icon:"wap-nav",name:"sort",to:"/sort"},{id:3,text:"购物车",icon:"shopping-cart",name:"shopping-cart",to:"/shoppingcart",badge:3},{id:4,text:"我的",icon:"manager",name:"mine",to:"/mine"}]}}},o=s,c=n(1001),u=(0,c.Z)(o,a,i,!1,null,null,null),l=u.exports,d=(n(4870),n(739)),f=(n(7057),n(1911)),p=(n(4663),n(338)),h=(n(9497),n(7384)),m=(n(6139),n(8235)),v=(n(1332),n(7790)),g=(n(985),n(3779)),Z=(n(86),n(8829)),b=(n(3182),n(8924)),y=(n(5979),n(9851)),x=(n(6283),n(1197)),_=(n(3231),n(573)),w=(n(9785),n(1649)),k=(n(5180),n(3316)),C=(n(8831),n(1660)),$=(n(980),n(5600)),O=(n(5738),n(5749)),R=(n(3975),n(2948)),S=(n(9719),n(495)),E=(n(4112),n(5263)),P=(n(5758),n(976));n(415);r.Z.use(P.Z),r.Z.use(E.Z),r.Z.use(S.Z),r.Z.use(R.Z),r.Z.use(O.Z),r.Z.use($.Z),r.Z.use(C.Z),r.Z.use(k.Z),r.Z.use(w.Z),r.Z.use(_.Z),r.Z.use(x.Z),r.Z.use(y.Z),r.Z.use(b.Z),r.Z.use(Z.Z),r.Z.use(g.Z),r.Z.use(v.Z),r.Z.use(m.Z),r.Z.use(h.Z),r.Z.use(p.Z),r.Z.use(f.Z),r.Z.use(d.Z);var T=n(2809),j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-pull-refresh",{attrs:{"success-text":"刷新成功"},on:{refresh:t.onRefresh},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}},[n("van-search",{staticClass:"serch1",staticStyle:{padding:"10px 5px"},attrs:{placeholder:"点击前往搜索",shape:"round",background:"#FF4500"},on:{click:t.tosearch}}),n("van-swipe",{attrs:{autoplay:3e3,"indicator-color":"red"}},t._l(t.images,(function(t,e){return n("van-swipe-item",{key:e,staticClass:"img1"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t,expression:"image"}]})])})),1),n("van-grid",{attrs:{square:"","column-num":5,border:!1}},t._l(t.channel,(function(t){return n("van-grid-item",{key:t.id,attrs:{icon:t.icon,text:t.text}})})),1),n("div",[n("van-cell",{attrs:{title:"新品","is-link":"",value:"更多"}}),n("div",t._l(t.newProduct,(function(e){return n("van-card",{key:e.id,attrs:{"lazy-load":"",title:e.title,desc:e.desc,thumb:e.images,price:t._f("numFilter")(e.newPrice),"origin-price":e.oldPrice},scopedSlots:t._u([{key:"tags",fn:function(){return[n("van-tag",{staticStyle:{"margin-right":"5px"},attrs:{plain:"",type:"primary"}},[t._v(t._s(e.discount))]),n("van-tag",{attrs:{plain:"",type:"danger"}},[t._v(t._s(e.activity))])]},proxy:!0}],null,!0)})})),1)],1),n("div",[n("van-cell",{attrs:{title:"品牌专区"}}),n("van-grid",{attrs:{border:!1,"column-num":2}},t._l(t.brandlist,(function(e){return n("van-grid-item",{key:e.id},[n("van-image",{staticStyle:{width:"100%"},attrs:{"lazy-load":"",src:e.images}}),n("div",[t._v(t._s(e.name))])],1)})),1)],1)],1)],1)},F=[],L=n(6198),z=(n(6977),n(8975),{data:function(){return{images:[],channel:[],newProduct:[],brandlist:[],isLoading:!1}},methods:{getinfo:function(){var t=this;return(0,L.Z)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("/home");case 2:n=e.sent,r=n.data,t.images=r.list.images,t.channel=r.list.channel,t.newProduct=r.list.newProduct,t.brandlist=r.list.brandlist;case 8:case"end":return e.stop()}}),e)})))()},tosearch:function(){this.$router.push("/search")},onRefresh:function(){var t=this;setTimeout((function(){location.reload(),t.isLoading=!1}),1e3)}},created:function(){this.getinfo()},filters:{numFilter:function(t){var e=parseFloat(t).toFixed(3),n=e.substring(0,e.length-1);return n}}}),M=z,K=(0,c.Z)(M,j,F,!1,null,"229ebb14",null),D=K.exports,H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("mineheader"),n("mineorder")],1)},I=[],W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"headerbox"},[n("van-icon",{staticClass:"headericon",attrs:{name:"setting-o"}}),n("div",{staticClass:"headercontent"},[n("van-image",{attrs:{"lazy-load":"",width:"60px",height:"60px",round:"",src:t.image}}),n("div",[t._v(t._s(t.username))])],1)],1)},q=[],A={data:function(){return{username:"admin",image:"https://tse1-mm.cn.bing.net/th/id/R-C.32ebc001f8c411a03133371bafa57ea6?rik=DmMaW3fWei%2f9OA&riu=http%3a%2f%2fimg.woyaogexing.com%2f2017%2f02%2f24%2fef193195d7fec365!600x600.jpg&ehk=pFWZc3LNdE0MSyk%2fXT%2by0fMolDCJBDVSJwoxrA%2fQ7yw%3d&risl=&pid=ImgRaw&r=0"}},methods:{}},J=A,N=(0,c.Z)(J,W,q,!1,null,"4a3d4112",null),B=N.exports,G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-cell",{attrs:{title:"我的订单"}}),n("van-grid",{attrs:{"column-num":4,border:!1}},[n("van-grid-item",{attrs:{icon:"debit-pay",text:"待付款"}}),n("van-grid-item",{attrs:{icon:"logistics",text:"待收货"}}),n("van-grid-item",{attrs:{icon:"cash-back-record",text:"退货/售后"}}),n("van-grid-item",{attrs:{icon:"description",text:"全部订单"}})],1)],1)},Q=[],U={},V=U,X=(0,c.Z)(V,G,Q,!1,null,null,null),Y=X.exports,tt={components:{mineheader:B,mineorder:Y}},et=tt,nt=(0,c.Z)(et,H,I,!1,null,null,null),rt=nt.exports,at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-nav-bar",{attrs:{title:"购物车"}})],1)},it=[],st={},ot=(0,c.Z)(st,at,it,!1,null,null,null),ct=ot.exports,ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-search",{attrs:{placeholder:"点击前往搜索",shape:"round"},on:{click:t.tosearch}}),n("van-sidebar",{staticClass:"left",on:{change:t.sidebarChange},model:{value:t.activeKey,callback:function(e){t.activeKey=e},expression:"activeKey"}},t._l(t.items,(function(t){return n("van-sidebar-item",{key:t.id,staticStyle:{"text-align":"center"},attrs:{title:t.text}})})),1),n("div",{staticClass:"right"},[n("div",{staticClass:"topContent"},[n("van-image",{attrs:{src:t.top.pic,width:"250px"}})],1),n("van-grid",{attrs:{"column-num":3,border:!1}},t._l(t.classifyContent,(function(e){return n("van-grid-item",{key:e.id},[n("van-image",{staticClass:"contentImg",attrs:{src:e.pic,"lazy-load":""}}),n("div",{staticStyle:{"font-family":"Microsoft YaHei"}},[t._v(t._s(e.name))])],1)})),1)],1)],1)},lt=[],dt={data:function(){return{activeKey:0,items:[],classifyContent:[],top:{}}},methods:{getinfo:function(){var t=this;return(0,L.Z)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("/sort");case 2:n=e.sent,r=n.data,t.items=r.items,t.classifyContent=r.classifyContent,t.top=r.top;case 7:case"end":return e.stop()}}),e)})))()},sidebarChange:function(t){var e=this;return(0,L.Z)(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return console.log(t),console.log(e.items[t].id),n.next=4,e.$http.post("/ases",{id:e.items[t].id});case 4:r=n.sent,a=r.data,e.classifyContent=a.Inquire.list;case 7:case"end":return n.stop()}}),n)})))()},tosearch:function(){this.$router.push("/search")}},created:function(){this.getinfo()}},ft=dt,pt=(0,c.Z)(ft,ut,lt,!1,null,"aaf10a66",null),ht=pt.exports,mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-search",{staticClass:"serch1",staticStyle:{padding:"10px 5px"},attrs:{placeholder:"点击前往搜索",shape:"round"}}),n("van-cell",{attrs:{title:"搜索历史"}},[n("span",[t._v("清除")])]),n("div",{staticClass:"history"},t._l(t.searchHistory,(function(e){return n("van-tag",{key:e,staticStyle:{margin:"2px"},attrs:{plain:"",size:"large"}},[t._v(t._s(e))])})),1)],1)},vt=[],gt={data:function(){return{searchHistory:["手机","iPhone","三星","苹果笔记本","华为笔记本","三星硬盘","LG显示器","奥特曼玩具","面包","零食","破解版PS","路由器","摩托罗拉"]}}},Zt=gt,bt=(0,c.Z)(Zt,mt,vt,!1,null,"08214dfc",null),yt=bt.exports;r.Z.use(T.Z);var xt=new T.Z({routes:[{path:"/",redirect:"/home"},{path:"/home",component:D,meta:{showTab:!0}},{path:"/mine",component:rt,meta:{showTab:!0}},{path:"/shoppingcart",component:ct,meta:{showTab:!0}},{path:"/sort",component:ht,meta:{showTab:!0}},{path:"/search",component:yt}]}),_t=xt,wt=n(6166),kt=n.n(wt);r.Z.config.productionTip=!1,kt().defaults.baseURL="https://console-mock.apipost.cn/app/mock/project/42a32e59-b9c8-4e3d-f684-902c6f6bd729",r.Z.prototype.$http=kt(),new r.Z({router:_t,render:function(t){return t(l)}}).$mount("#app")}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var i=e[r]={id:r,loaded:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.m=t,function(){var t=[];n.O=function(e,r,a,i){if(!r){var s=1/0;for(l=0;l<t.length;l++){r=t[l][0],a=t[l][1],i=t[l][2];for(var o=!0,c=0;c<r.length;c++)(!1&i||s>=i)&&Object.keys(n.O).every((function(t){return n.O[t](r[c])}))?r.splice(c--,1):(o=!1,i<s&&(s=i));if(o){t.splice(l--,1);var u=a();void 0!==u&&(e=u)}}return e}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[r,a,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var a,i,s=r[0],o=r[1],c=r[2],u=0;if(s.some((function(e){return 0!==t[e]}))){for(a in o)n.o(o,a)&&(n.m[a]=o[a]);if(c)var l=c(n)}for(e&&e(r);u<s.length;u++)i=s[u],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(l)},r=self["webpackChunkshopping"]=self["webpackChunkshopping"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(1674)}));r=n.O(r)})();
//# sourceMappingURL=app.d84e4f16.js.map