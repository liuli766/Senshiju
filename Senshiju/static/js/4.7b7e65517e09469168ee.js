webpackJsonp([4],{EMjd:function(t,e){},cO9t:function(t,e,s){t.exports=s.p+"static/img/banner1.300c94d.png"},cbKR:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("Dd8w"),a=s.n(i),l=s("j7an"),n=s("7I1f"),r=s("NYxO"),o={data:function(){return{pic:[s("FF/J"),s("FF/J")],listdata:[],detaillist:[],dialogFormVisible:!1,ruleForm:{name:"",tel:"",yzm:""},rules:{name:[{required:!0,message:"姓名不能为空",trigger:"blur"}],tel:[{required:!0,message:"电话号码不能为空",trigger:"blur"},{pattern:/^1[3456789]\d{9}$/,message:"手机号不符合规则",trigger:"blur"}],yzm:[{required:!0,message:"验证码不能为空",trigger:"blur"}]},bianhao:"",tmeValue:60,flag:0}},computed:a()({},Object(r.b)({token:function(t){return t.token},userInfor:function(t){return t.userInfor}})),created:function(){this.listdata=this.pic.slice(0,2),this.handdetail()},mounted:function(){new l.default(".swiper-container",{observer:!0,slidesPerView:3,autoplay:{delay:3e3,disableOnInteraction:!1},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})},methods:{handdetail:function(){var t=this;n.a.getBlueDetail({id:this.$route.query.id}).then(function(e){t.detaillist=e.data,t.bianhao=t.detaillist.number.toUpperCase(),console.log(e,"图纸详情")}).catch(function(t){}).finally(function(){})},time:function(){var t=this;if(/^1[3|5|7|8|][0-9]{9}$/.test(this.ruleForm.tel)){var e=this.ruleForm.tel;if(n.a.getCode({phone_num:e}).then(function(t){console.log(t)}).catch(function(t){}).finally(function(){}),this.tmeValue=this.tmeValue-1,this.flag=1,this.tmeValue<=0)return this.tmeValue=60,this.flag=0,"";setTimeout(function(){t.time()},1e3)}else this.$message({showClose:!0,message:"手机号格式不正确",type:"error"})},submitForm:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return console.log("error submit!!"),!1;n.a.blueApply({uid:e.userInfor.member_id,bid:e.detaillist.id,name:e.ruleForm.name,phone:e.ruleForm.tel,code:e.ruleForm.yzm}).then(function(t){console.log(t,"图纸申请"),e.$message({showClose:!0,message:"申请成功",type:"success"})}).catch(function(t){e.$message({showClose:!0,message:"申请失败",type:"error"})}).finally(function(){})})},orderPay:function(){this.handdetail(),this.$router.push({path:"/orderpay",query:{id:this.detaillist.id,price:this.detaillist.price}})},Collect:function(t){var e=this;n.a.getCollect({uid:this.userInfor.member_id,type:1,object:t}).then(function(t){e.handdetail(),e.$message({showClose:!0,message:"收藏成功",type:"success"})}).catch(function(t){console.log(t),e.$message({showClose:!0,message:"收藏失败",type:"error"})}).finally(function(){})},qxcollect:function(t){var e=this;n.a.getCancelcollect({uid:this.userInfor.member_id,c_id:t}).then(function(t){e.$message({showClose:!0,message:"取消成功",type:"success"})}).catch(function(t){e.$message({showClose:!0,message:"取消失败",type:"error"})}).finally(function(){})},handprve:function(){var t=this.pic.shift();this.pic.push(t),this.listdata=this.pic.slice(0,2)},handnext:function(){var t=this.pic.pop();this.pic.unshift(t),this.listdata=this.pic.slice(0,2)}}},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"builddetail"},[s("div",{staticClass:"current"},[t._v("\n    当前位置：\n    "),s("router-link",{attrs:{to:"/"}},[t._v("首页")]),t._v("\n    >图纸列表>"+t._s(t.detaillist.title)+"\n  ")],1),t._v(" "),s("div",{staticClass:"build_img fl_be"},[s("img",{attrs:{src:t.detaillist.imgs,alt:""}}),t._v(" "),s("div",{staticClass:"build_img_r"},[s("div",{staticClass:"fl_be build_img_t"},[s("h5",[t._v(t._s(t.detaillist.title))]),t._v(" "),t.detaillist.is_collect?s("span",{staticClass:"font20 poniter",on:{click:function(e){return t.Collect(t.detaillist.id)}}},[t._v("收藏")]):s("span",{staticClass:"font20 poniter yi"},[t._v("已收藏")])]),t._v(" "),s("p",[t._v("\n        图纸编号：\n        "),s("span",[t._v(t._s(t.bianhao))])]),t._v(" "),s("div",{staticClass:"layer fl_be"},[s("span",[t._v("别墅层数:"+t._s(t.detaillist.plies))]),t._v(" "),s("span",[t._v("结构形式:"+t._s(t.detaillist.structure))]),t._v(" "),s("span",[t._v("占地面积:"+t._s(t.detaillist.face_width))]),t._v(" "),s("span",[t._v("建筑开间:"+t._s(t.detaillist.plies))]),t._v(" "),s("span",[t._v("建筑进深:"+t._s(t.detaillist.depth))]),t._v(" "),s("span",[t._v("销售面积:"+t._s(t.detaillist.face_width))]),t._v(" "),s("span",[t._v("主体参考造价:"+t._s(t.detaillist.plies))])]),t._v(" "),s("div",{staticClass:"tel"},[t._v(": 176-8324-2994")]),t._v(" "),s("div",{staticClass:"button fl_be"},[s("button",{staticClass:"poniter",on:{click:t.orderPay}},[t._v("立即购买此套图纸")]),t._v(" "),s("button",{staticClass:"poniter",on:{click:function(e){t.dialogFormVisible=!0}}},[t._v("申请按此套图纸施工")])])])]),t._v(" "),s("div",{staticClass:"dia"},[s("el-dialog",{attrs:{title:"申请此套图纸",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[s("el-form",{ref:"ruleForm",staticClass:"personform",attrs:{model:t.ruleForm,"status-icon":"",rules:t.rules,"label-width":"780px"}},[s("div",{staticClass:"border"},[t._v("您选的图纸编号为 "+t._s(t.bianhao))]),t._v(" "),s("el-form-item",{attrs:{prop:"name"}},[s("el-input",{attrs:{type:"text",autocomplete:"off",placeholder:"*您的姓名"},model:{value:t.ruleForm.name,callback:function(e){t.$set(t.ruleForm,"name",e)},expression:"ruleForm.name"}})],1),t._v(" "),s("div",{staticClass:"tel fl_be"},[s("el-form-item",{attrs:{prop:"tel"}},[s("el-input",{attrs:{type:"text",autocomplete:"off",placeholder:"*您的电话号码"},model:{value:t.ruleForm.tel,callback:function(e){t.$set(t.ruleForm,"tel",e)},expression:"ruleForm.tel"}})],1),t._v(" "),s("el-form-item",{attrs:{prop:"yzm"}},[s("el-input",{attrs:{type:"text",autocomplete:"off",placeholder:"*请输入验证码"},model:{value:t.ruleForm.yzm,callback:function(e){t.$set(t.ruleForm,"yzm",e)},expression:"ruleForm.yzm"}}),t._v(" "),60==t.tmeValue?s("span",{staticClass:"span poniter",on:{click:t.time}},[t._v("发送验证码")]):s("span",{staticClass:"span poniter"},[t._v(t._s(t.tmeValue)+" s后获取")])],1)],1),t._v(" "),s("el-button",{staticClass:"ybtn",on:{click:function(e){return t.submitForm("ruleForm")}}},[t._v("点击申请")])],1)],1)],1),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"explain"},[t._v("购图前重要说明：")]),t._v(" "),s("p",{staticClass:"p"},[t._v("购买本套图纸仅提供打印好的图纸一份，我们不出售电子文件、光盘。我们设计的图纸非常详细，用A3规格打印图纸，比传统蓝图更清晰、容易复印、方便收藏，可以直接应用到施工现场。售后服务仅为图纸答疑，不包任何修改，因为只要其中一张图纸改变，其它图纸相应均需修改，工作量较大，所以我们不包修改。如果您个性要求较多需按要求订做设计，请查看别墅设计业务流程，并联系设计客服咨询设计收费标准。")])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"swiper-container"},[e("div",{staticClass:"swiper-wrapper"},[e("div",{staticClass:"swiper-slide"},[e("img",{attrs:{src:s("cO9t"),alt:""}})]),this._v(" "),e("div",{staticClass:"swiper-slide"},[e("img",{attrs:{src:s("fdsf"),alt:""}})]),this._v(" "),e("div",{staticClass:"swiper-slide"},[e("img",{attrs:{src:s("q2hR"),alt:""}})]),this._v(" "),e("div",{staticClass:"swiper-slide"},[e("img",{attrs:{src:s("fdsf"),alt:""}})]),this._v(" "),e("div",{staticClass:"swiper-slide"},[e("img",{attrs:{src:s("q2hR"),alt:""}})])]),this._v(" "),e("span",{staticClass:"swiper-button-prev"}),this._v(" "),e("span",{staticClass:"swiper-button-next"})])}]};var u=s("VU/8")(o,c,!1,function(t){s("EMjd"),s("ebLY")},"data-v-5a5b95ec",null);e.default=u.exports},ebLY:function(t,e){},fdsf:function(t,e,s){t.exports=s.p+"static/img/banner2.0526d32.png"},q2hR:function(t,e,s){t.exports=s.p+"static/img/banner3.341f9c1.png"}});
//# sourceMappingURL=4.7b7e65517e09469168ee.js.map