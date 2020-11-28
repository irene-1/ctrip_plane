<template>
  <div class="plane_pay">
    <!-- 支付表头 -->
    <div class="pay_header">
      <!-- 网站logo -->
      <div>
        <img src="/img/plane_pay/c_logo2020.png" alt="" />
      </div>
      <div>
        <!-- 乘机信息 -->
        <div>
          <!-- 圆圈1 -->
          <div>1</div>
          <div>乘机信息</div>
          <!-- 直线 -->
          <div></div>
        </div>
        <!-- 支付 -->
        <div>
          <!-- 圆圈2 -->
          <div>2</div>
          <div>支付</div>
          <!-- 直线 -->
          <div></div>
        </div>
        <!-- 完成 -->
        <div>
          <!-- 圆圈3 -->
          <div>3</div>
          <div>完成</div>
        </div>
      </div>
      <div>
        <span>尊敬的会员</span>
        <span>客服中心</span>
      </div>
    </div>
    <!-- 支付信息 -->
    <div class="pay_middle">
      <!-- 左边 -->
      <div class="pay_middle_left">
        <!-- 重要公示 -->
        <div>
          <div>
            <i class="iconfont icon-d-zhongyaogonggao"></i>
            重要公示:
          </div>
          <div>
            根据厦门市卫生健康委员会最新消息：9月28日以来有到过青岛市旅居史的来厦人员，自行到医疗机构进行核酸检测。
            以上信息供您参考，请在出行前务必确认目的地最新防控规定，合理安排出行。
            更新日期：2020年10月15日09:30
            接厦门机场通知，应新型冠状肺炎疫情精准防控要求，所有进入厦门进港旅客须下载并实名认证登陆“闽政通APP”
          </div>
        </div>
        <!-- 提示信息 -->
        <div>
          <div>
            <i class="iconfont icon-d-zhongyaogonggao"></i>
          </div>
          <div>
            根据厦门市卫生健康委员会最新消息：9月28日以来有到过青岛市旅居史的来厦人员，自行到医疗机构进行核酸检测。
            以上信息供您参考，请在出行前务必确认目的地最新防控规定，合理安排出行。
            更新日期：2020年10月15日09:30
            接厦门机场通知，应新型冠状肺炎疫情精准防控要求，所有进入厦门进港旅客须下载并实名认证登陆“闽政通APP”
          </div>
        </div>
        <!-- 乘客信息 v-for="item of "-->
        <div class="passengerInfo" >
          <!-- 乘客 -->

          <div>乘客</div>
          <div class="infoDetail" v-for="(value, i) of addPerson" :key="i + 1">
            <!-- 左边 -->
            <div>
              <!-- 姓名 -->
              <div>
                <input type="text" name="" placeholder="请填写乘客姓名" />
              </div>
              <!-- 身份证 -->
              <div>
                <div>
                  <select name="身份证">
                    <option value="">身份证</option>
                    <option value="">护照</option>
                    <option value="">户口簿</option>
                  </select>
                </div>
                <div>
                  <input type="text" name="" value="" />
                </div>
              </div>
              <!-- 电话 -->
              <div>
                <div>中国区号 86</div>
                <div><input type="text" /></div>
              </div>
            </div>
            <!-- 右边 -->
            <div>
              <i class="iconfont icon-chengrennan"></i>
              <span>成人</span>￥345
            </div>
            <div class="index" style="display:none">{{i+1}}</div>
            <div class="del" @click="Del">×删除</div>
          </div>
        </div>
        <!-- 添加乘客按钮 -->
        <div class="addPerson" @click="add">+添加乘客</div>
        <!-- 联系人 -->
        <div class="tel_person">
          <!-- 联系人 -->
          <div>联系人</div>
          <!-- 号码填写 -->
          <div>
            <div>中国区号 86 <i class="iconfont icon-jiantou"></i></div>
            <div>
              <p>手机号(张三)</p>
              <input type="text" />
            </div>
            <div>
              <input type="text" placeholder="Email(选填,接收航班信息)" />
            </div>
          </div>
          <!-- 下一步 -->
          <router-link to="/planePay02"
            ><div class="next">下一步</div></router-link
          >
        </div>
      </div>
      <!-- 右边 -->
      <div class="pay_middle_right">
        <!-- 日期、地点 -->
        <div>
          <span>11-11</span>
          <span>周三</span>
          <span>西安</span>
          <span><i class="iconfont icon-tuxing"></i></span>
          <span>宁夏</span>
        </div>
        <!-- 航空公司、舱等 -->
        <div>
          <div>
            <img src="/img/plane_pay/mu.png" />
          </div>
          <span>春秋航空</span>
          <span>9C8845</span>
          <span>空客320</span>
          <span>商务经济座</span>
        </div>
        <!-- 时间、机场 -->
        <div>
          <div>
            <div>10:35</div>
            <div>咸阳国际机场T2</div>
          </div>
          <div>
            <div><i class="iconfont icon-hangbanguanli"></i> 3h55min</div>
            <!--图案 -->
            <div>
              <!-- 圆圈 -->
              <div></div>
              <!-- 飞机直线 -->
              <div><i class="iconfont icon-hangbandongtai1"></i></div>
              <!-- 圆圈 -->
              <div></div>
            </div>
          </div>
          <div>
            <div>10:35</div>
            <div>咸阳国际机场T2</div>
          </div>
        </div>
        <!-- 成人、基建、燃油税 -->
        <div>
          <!-- 成人 -->
          <div>
            <span>成人</span>
            <span>退改￥340起</span>
            <span>行李额</span>
            <span>￥720<span>×1</span></span>
          </div>
          <!-- 基建 -->
          <div>
            <span>基建</span>
            <span>￥720<span>×1</span></span>
          </div>
          <!-- 燃油税 -->
          <div>
            <span>燃油税</span>
            <span>￥720<span>×1</span></span>
          </div>
        </div>
        <!-- 价钱 -->
        <div><span>￥</span>730</div>
      </div>
    </div>
    <!-- 脚 -->
    <plane-payfooter></plane-payfooter>
  </div>
</template>

<script>
import planePayfooter from "./plane_pay_footer.vue";
export default {
  // name:"plane_pay",
  components: {
    planePayfooter,
  },
  data() {
    return {
      addPerson: 1,
    };
  },
  methods: {
    // 显示页面删除一条乘客信息
    Del(e){
      // 获取要移除的元素
      let infoDetailEle = e.target.parentElement;
      // console.log(e.target);
      // 获取要移除元素的父元素
      let parentELe = infoDetailEle.parentElement;
      // console.log(parentELe);
      // 判断是否是第一个，不是则移除
      let index = e.target.previousElementSibling.innerText;
      // console.log(index);
      if(index > 1){
        // 移除元素节点
        parentELe.removeChild(infoDetailEle);
        let simblings = parentELe.querySelectorAll(`div.infoDetail`);
        // console.log(simblings);
        // simblings.forEach(elem => {
        //   console.log(elem);
        // });
      }
      if(index == 1 && parentELe.querySelectorAll(`div.infoDetail`).length >1){
        parentELe.removeChild(infoDetailEle.nextElementSibling);
        console.log(parentELe);
      }
    },
    // 显示页面添加一条乘客信息
    add(e) {
      // 方法一
      // let addEle = e.target.previousElementSibling;
      // // console.log(addEle);
      // // 复制上面的节点及后代元素到newEle
      // let newEle = addEle.cloneNode(true);
      // console.log(newEle);
      // e.target.parentElement.appendChild(newEle);
      // 方法二
      this.addPerson++;
    },
  },
};
</script>

<style>
.plane_pay > div:not(:first-child) {
  margin: 0 auto;
  width: 1180px;
}

/* 上面 */
/* .pay_header { */
.pay_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  height: 90px;
  padding: 0 20px;
  font-size: 14px;
}

.pay_header > div:first-child {
  width: 20%;
}

.pay_header > div:nth-child(2) {
  display: flex;
}

.pay_header > div:nth-child(2) > div {
  display: flex;
  align-items: center;
}

/* 圆圈 */
.pay_header > div:nth-child(2) > div > div:first-child {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: #dddddd;
  margin-right: 5px;
  text-align: center;
  font-size: 12px;
  color: #999999;
  font-weight: lighter;
}

.pay_header > div:nth-child(2) > div:first-child > div:first-child {
  background-color: #ff7528;
  color: #ffffff;
}

.pay_header > div:nth-child(2) > div:first-child > div:nth-child(2) {
  color: #ff7528;
}

.pay_header > div:nth-child(2) > div:not(:last-child) > div:nth-child(3) {
  background-color: #dddddd;
  width: 100px;
  height: 1.5px;
  margin: 0 5px;
}

.pay_header > div:nth-child(3) > span + span::before {
  content: "|";
  display: inline-block;
  font-size: 14px;
  color: #dddddd;
  margin: 0 5px 0 2px;
}

/* 中间 */
/* 支付信息 */
.pay_middle {
  display: flex;
  justify-content: space-between;
  padding: 15px;
}

/* 左边 */
/* 重要公示 */
.pay_middle_left {
  width: 66%;
}

.pay_middle_left > div:first-child,
.pay_middle_left > div:nth-child(2) {
  padding: 10px 15px;
  border-radius: 8px;
  background-color: #fff9eb;
  margin-top: 10px;
  -webkit-box-shadow: -1px 2px 1px 0 #dee4e7;
  box-shadow: -1px 2px 1px 0 #dee4e7;
  display: flex;
  font-size: 12px;
  color: #666666;
}

.pay_middle_left
  > div:first-child
  > div:first-child,
.pay_middle_left
  > div:nth-child(2)
  > div:first-child {
  margin-right: 5px;
}

.pay_middle_left
  > div:first-child
  > div:first-child {
  width: 28%;
}

.pay_middle_left > div > div:first-child {
  color: #ff7d13;
  font-weight: bold;
}

.pay_middle_left > div > div:first-child > i {
  font-size: 12px;
}

.pay_middle_left > div > div:nth-child(2) {
  line-height: 1.5;
}

/* 乘客 */
.passengerInfo
  > div:first-child {
  margin-top: 20px;
}

.addPerson {
  width: 80px;
  padding: 8px 20px;
  color: #007aff;
  border: 1px solid #007aff;
  border-radius: 5px;
  margin-top: 15px;
}

/* 姓名 */
.infoDetail {
  margin-top: 20px;
  background-color: #ffffff;
  display: flex;
  box-shadow: -1px 2px 1px 0 #dee4e7;
  padding: 10px 20px;
  position: relative;
}
/* 序号 */
.infoDetail .index{
  position: absolute;
  left: 10px;top: 40px;
  font-size: 30px;
  color: #dddddd;
  font-weight: lighter;
}
/* 左边-左边 */
.infoDetail
  > div:first-child {
  width: 50%;
  margin-left: 20px;
}

.pay_middle_left > div input:hover,
.pay_middle_left > div input:active,
.pay_middle_left > div input:focus {
  outline: 0;
  cursor: pointer;
}

.pay_middle_left > div input,
.pay_middle_left > div select {
  height: 30px;
  border: 0;
}

.infoDetail
  > div:first-child
  > div {
  margin: 10px 0;
}

.infoDetail
  > div:first-child
  > div:first-child {
  border-bottom: 1.5px solid #dddddd;
}

.infoDetail
  > div:first-child
  > div:first-child
  > input {
  width: 98%;
}

.infoDetail
  > div:first-child
  > div:nth-child(2),
.infoDetail
  > div:first-child
  > div:nth-child(3) {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.infoDetail
  > div:first-child
  > div:nth-child(2)
  > div,
.infoDetail
  > div:first-child
  > div:nth-child(3)
  > div {
  border-bottom: 1.5px solid #dddddd;
}

.infoDetail
  > div:first-child
  > div:nth-child(2)
  > div:first-child
  select {
  width: 130px;
  height: 32px;
}

.infoDetail
  > div:first-child
  > div:nth-child(2)
  > div:nth-child(2)
  > input {
  width: 98%;
}

.infoDetail
  > div:first-child
  > div:nth-child(2)
  > div:nth-child(2) {
  width: 60%;
}

/* 中国区号 */
.infoDetail
  > div:first-child
  > div:nth-child(3)
  > div:first-child {
  font-size: 14px;
  width: 130px;
  height: 30px;
}

.infoDetail
  > div:first-child
  > div:nth-child(3) {
  margin-bottom: 0;
}

.infoDetail
  > div:first-child
  > div:nth-child(3)
  input {
  width: 221px;
}

/* 中间的| */
.infoDetail
  > div:nth-child(2)::before {
  content: "";
  display: block;
  width: 1px;
  height: 135px;
  background-color: #cccccc;
  margin: 0px 20px;
}

/* 左边-右边 */
.infoDetail
  > div:nth-child(2) {
  display: flex;
  align-items: center;
  width: 45%;
  color: #666666;
}

.infoDetail
  > div:nth-child(2)
  > i {
  font-size: larger;
}

.infoDetail
  > div:nth-child(2)
  > span {
  margin: 0 10px 0 10px;
}
/* 删除按钮 */
.passengerInfo .del{
  position: absolute;
  top: 5px;right: 10px;
  font-size: 14px;
  color: #007aff;
  border-bottom: 1px dashed #007aff; 
}

/* 联系人 */
.pay_middle_left > .tel_person {
  margin-top: 20px;
}

.pay_middle_left
  > .tel_person
  > div:nth-child(2) {
  background-color: #ffffff;
  padding: 10px;
  margin: 20px 0 10px 0;
  display: flex;
  font-size: 14px;
  align-items: flex-end;
}

.pay_middle_left
  > .tel_person
  > div:nth-child(2)
  > div {
  border-bottom: 1px solid #dddddd;
  padding-bottom: 5px;
}

.pay_middle_left
  > .tel_person
  > div:nth-child(2)
  > div
  i {
  margin-left: 40px;
}

.pay_middle_left
  > .tel_person
  > div:nth-child(2)
  > div:nth-child(2) {
  width: 280px;
  padding-left: 20px;
}

.pay_middle_left
  > .tel_person
  > div:nth-child(2)
  > div
  input {
  width: 100%;
}

.pay_middle_left
  > .tel_person
  > div:nth-child(2)
  > div:nth-child(2)
  > p {
  color: #bbbbbb;
  font-size: 12px;
}

.pay_middle_left
  > .tel_person
  > div:nth-child(2)
  > div:nth-child(3) {
  width: 280px;
  margin-left: 20px;
}
/* 联系人结束 */

/* 下一步 */
.pay_middle_left > .tel_person .next {
  display: block;
  width: 100%;
  height: 21px;
  text-align: center;
  background-color: #007aff;
  color: #ffffff;
  padding: 10px 0;
}
/* 下一步结束 */

/* 右边 */
.pay_middle_right {
  background-color: #f5f8f9;
  width: 32%;
  border: 1px solid #d6dde2;
  margin-top: 10px;
}

.pay_middle_right > div {
  padding: 30px 20px 0;
}
/* 日期、地点 */
.pay_middle_right > div:first-child {
  text-align: center;
  font-weight: bold;
}
/* 航空公司、舱等 */
.pay_middle_right > div:nth-child(2) {
  display: flex;
  justify-content: center;
  font-size: 13px;
  color: #999999;
}
.pay_middle_right
  > div:nth-child(2)
  > div:first-child {
  width: 15px;
}
.pay_middle_right > div:nth-child(2) span {
  margin-left: 5px;
}
/* 时间、机场 */
.pay_middle_right > div:nth-child(3) {
  display: flex;
  justify-content: space-between;
  padding-bottom: 30px;
  border-bottom: 1px dotted #999999;
}
.pay_middle_right
  > div:nth-child(3)
  > div:first-child {
  text-align: right;
}
.pay_middle_right
  > div:nth-child(3)
  > div:first-child
  > div:first-child,
.pay_middle_right
  > div:nth-child(3)
  > div:last-child
  > div:first-child {
  font-size: 24px;
  color: #333333;
}
.pay_middle_right
  > div:nth-child(3)
  > div:first-child
  > div:nth-child(2),
.pay_middle_right
  > div:nth-child(3)
  > div:last-child
  > div:nth-child(2) {
  font-size: 12px;
}
.pay_middle_right
  > div:nth-child(3)
  > div:nth-child(2) {
  color: #849bab;
}
.pay_middle_right
  > div:nth-child(3)
  > div:last-child {
  text-align: left;
}
/* 成人、基建、燃油税 */
.pay_middle_right > div:nth-child(4) {
  font-size: 14px;
  border-bottom: 1px dotted #999999;
  padding: 30px 35px;
}
.pay_middle_right
  > div:nth-child(4)
  > div:first-child
  span
  + span {
  margin-left: 20px;
}
.pay_middle_right
  > div:nth-child(4)
  > div:first-child
  span:last-child {
  float: right;
}
.pay_middle_right
  > div:nth-child(4)
  > div:not(:first-child) {
  display: flex;
  justify-content: space-between;
}

.pay_middle_right
  > div:nth-child(4)
  > div:not(:last-child) {
  margin-bottom: 10px;
}

.pay_middle_right
  > div:nth-child(4)
  > div:first-child
  > span:nth-child(n + 2):not(:last-child) {
  color: #999999;
  border-bottom: 1px dotted #999999;
}

.pay_middle_right
  > div:nth-child(4)
  > div
  > span:last-child
  > span {
  color: #999999;
}

/* 价钱 */
.pay_middle_right > div:nth-child(5) {
  color: #ff7700;
  float: right;
  font-size: 24px;
  font-weight: bold;
}
</style>