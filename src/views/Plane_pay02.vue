<template>
  <div>
    <!-- 头 -->
    <div>
      <!-- 支付表头 -->
      <div class="plane_pay02_top">
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
    </div>
    <!-- 中间 -->
    <div class="plane_pay02">
      <!-- 订单详情 -->
      <div>
        <!-- 第一行 -->
        <div>
          <!-- 左边 -->
          <div>
            <div>
              订单金额
              <span>￥</span><span>500.00</span>
            </div>
            <div>
              支付剩余时间
              <span class="timer"> 12{{endTime}} </span>
              ,超时订单可能会被取消
            </div>
          </div>
          <!-- 右边 -->
          <div>
            <div>机票 西安-上海</div>
            <div>
              飞机
              <span>咸阳国际机场T2-浦东国际机场T2</span>
              <span>出发时间：2020-12-12</span>
              <span>11:55:00</span>
            </div>
            <div>
              乘机人：张三
              <span>乘机证件：身份证 610523199912120913</span>
            </div>
          </div>
        </div>
        <!-- 第二行 -->
        <div>
          <i class="iconfont icon-d-zhongyaogonggao"></i>
          航班价格变动频繁，请在14分钟内完成支付以免耽误出行
        </div>
      </div>
      <!-- 支付方式 -->
      <div>
        <div class="whichPay">
          <ul @click="tog">
            <li class="card">储蓄卡</li>
            <li class="card">信用卡</li>
            <li class="wechat">微信支付</li>
            <li class="alipay">支付宝</li>
            <li class="cardMore">更多</li>
          </ul>
        </div>
        <!-- 储蓄卡 -->
        <!-- 信用卡 -->
        <div class="card">
          <div>您暂无常用卡，请在下方添加卡片：</div>
          <div>
            <p>银行卡号</p>
            <input type="text" placeholder="请输入银行卡号进行识别" />
            <router-link to="/planePay03"
              ><div class="next">去支付</div></router-link
            >
          </div>
        </div>
        <!-- 微信 -->
        <div class="wechat">
          <img src="/img/plane_pay/wechat.36c2d7d0.png" alt="" />
          <p>点击“去支付”后，将跳转到微信页面进行支付</p>
          <router-link to="/planePay03"
            ><div class="next">去支付</div></router-link
          >
        </div>
        <!-- 支付宝 -->
        <div class="alipay">
          <img src="/img/plane_pay/alipay.c8df5497.png" alt="" />
          <p>点击“去支付”后，将跳转到支付宝页面进行支付</p>
          <router-link to="/planePay03"
            ><div class="next">去支付</div></router-link
          >
        </div>
        <!-- 更多 -->
        <div class="cardMore">
          <p>
            <span>网银支付</span>
            需跳转银行页
          </p>
          <ul>
            <li>
              <div>
                <img src="/img/plane_pay/boc.3d22e3c7.png" alt="" />
              </div>
              <div>中国银行</div>
            </li>
            <li>
              <div>
                <img src="/img/plane_pay/boc.3d22e3c7.png" alt="" />
              </div>
              <div>中国银行</div>
            </li>
            <li>
              <div>
                <img src="/img/plane_pay/boc.3d22e3c7.png" alt="" />
              </div>
              <div>中国银行</div>
            </li>
            <li>
              <div>
                <img src="/img/plane_pay/boc.3d22e3c7.png" alt="" />
              </div>
              <div>中国银行</div>
            </li>
            <li>
              <div>
                <img src="/img/plane_pay/boc.3d22e3c7.png" alt="" />
              </div>
              <div>中国银行</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 脚 -->
    <plane-payfooter></plane-payfooter>
  </div>
</template>

<script>
import planePayfooter from "./plane_pay_footer.vue";

export default {
  // name:"plane_pay02",
  components: {
    planePayfooter,
  },
  mounted(){
    // setInterval(() =>{
    //   this.time();
    // },1000);
    this.timer();
  },
  data() {
    return {
      // 变化的差值
      leftTime:"",
      // 页面一跳转就开始时间
      now:"",
      // 截止时间
      endTime:""
    };
  },
  methods: {
    // 支付选项卡切换
    tog(e) {
      // 1.选中的元素添加active类，其余元素的active类名取消
      let liEle = e.target;
      // let divEle = document.querySelector(`${e.target.classList}`);
      // console.log(liEle.classList);

      liEle.classList.add('active');
      let simblings = this.simblings(liEle);
      simblings.forEach(elem =>{
        elem.classList.remove('active');
      });
      //2.底下出现对应的选项卡 
      let liClass = liEle.classList;//数组
      liClass.forEach(item =>{
        if(item == 'card' || item == 'wechat' || item == 'alipay' || item == 'cardMore'){
          let divEle = document.querySelector(`div.${item}`);
          // console.log(divEle);
          divEle.style.display = 'block';
          let divSimblings = this.simblings(divEle);
          // console.log(divSimblings);
          // 获取的数组中有表头节点，所以加判断筛选
          divSimblings.forEach(elem =>{
            // console.log(elem.classList.value);
            if(elem.classList.value !== `whichPay`){
              // console.log(elem);
              elem.style.display = 'none';
            }
          });
        }
      });
    },
    //获取除了本身的兄弟元素
    simblings(elem) {
      // 先创建空数组接着筛选到的元素
      let a = [];
      // 查找选中元素的 父节点的所有元素
      let b = elem.parentElement.children;
      // 遍历所有元素判断是否是选中的该元素，不是就放进刚才创建好的新数组中
      for(var i =0; i<b.length;i++) {
        if(b[i] !== elem) a.push(b[i]);
      }
      // 把放入了所有符合条件的元素return出去
      return a;
    },
    // 分秒倒计时，ms:0~60
    timer(){
      // 获取最终停止的时间
      this.endTime =new Date().getTime() + 15*60*1000;
      // 1s触发一次,this.leftTime-1000
      setInterval(() =>{
        this.now = new Date().getTime();
        this.leftTime = this.endTime - this.now;
      },1000);
   }, 
  },
  watch:{
    now(){
      // 获取要修改的元素
      let timer = document.querySelector('.timer');
      // 将倒计时时间转换为s
      let leftsecond = parseInt(this.leftTime/1000);
      // 获得minute
      let minute = Math.floor(leftsecond/60);
      // 获得s
      let second = Math.floor(leftsecond - minute*60);
      // 如果分钟，秒钟不足两位数，则拼接为(09:08)这种格式
      if(minute < 10){minute = "0"+minute;}
      if(second < 10){second = "0"+second;}
      this.leftTime = `${minute}:${second}`;
      // 把要改变的变量放进页面中去
      timer.innerHTML = this.leftTime;
    }
  },
}
</script>

<style scoped>
/* 头 */
.plane_pay02_top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  /* width: 1300px; */
  height: 90px;
  padding: 0 20px;
  font-size: 14px;
}

.plane_pay02_top > div:first-child {
  width: 20%;
}

.plane_pay02_top > div:nth-child(2) {
  display: flex;
}

.plane_pay02_top > div:nth-child(2) > div {
  display: flex;
  align-items: center;
}

/* 圆圈 */
.plane_pay02_top > div:nth-child(2) > div > div:first-child {
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

.plane_pay02_top > div:nth-child(2) > div:first-child > div:first-child,
.plane_pay02_top > div:nth-child(2) > div:nth-child(2) > div:first-child {
  background-color: #ff7528;
  color: #ffffff;
}

.plane_pay02_top > div:nth-child(2) > div:first-child > div:nth-child(2),
.plane_pay02_top > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) {
  color: #ff7528;
}

.plane_pay02_top > div:nth-child(2) > div:not(:last-child) > div:nth-child(3) {
  background-color: #dddddd;
  width: 100px;
  height: 1.5px;
  margin: 0 5px;
}
.plane_pay02_top > div:nth-child(2) > div:first-child > div:nth-child(3) {
  background-color: #ff7528;
}

.plane_pay02_top > div:nth-child(3) > span + span::before {
  content: "|";
  display: inline-block;
  font-size: 14px;
  color: #dddddd;
  margin: 0 5px 0 2px;
}
/* 中间 */
.plane_pay02 {
  width: 900px;
  margin: 0 auto;
  box-shadow: 1px 2px 20px rgba(106, 158, 209, 0.34);
}
.plane_pay02 > div {
  margin-top: 10px;
  background-color: #f4f7fe;
  padding-bottom: 10px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
.plane_pay02 > div:first-child > div:first-child {
  display: flex;
  border-bottom: 1px solid #dddddd;
}
.plane_pay02 > div:first-child > div:first-child > div {
  padding: 20px 20px 10px;
}
/* 左边 */
.plane_pay02 > div:first-child > div:first-child > div:first-child {
  width: 40%;
  border-radius: 0 4px 0 0;
}
.plane_pay02
  > div:first-child
  > div:first-child
  > div:first-child
  > div:first-child {
  font-size: 14px;
}
.plane_pay02
  > div:first-child
  > div:first-child
  > div:first-child
  > div:first-child
  > span {
  color: #ff7528;
}
.plane_pay02
  > div:first-child
  > div:first-child
  > div:first-child
  > div:nth-child(2) {
  font-size: 12px;
  color: #666666;
  margin-top: 15px;
}
.plane_pay02
  > div:first-child
  > div:first-child
  > div:first-child
  > div:nth-child(2)
  > span {
  color: #ff7528;
}

.plane_pay02
  > div:first-child
  > div:first-child
  > div:first-child
  > div:first-child
  > span
  + span {
  font-size: 22px;
  font-style: italic;
}
/* 右边 */
.plane_pay02 > div:first-child > div:first-child > div:nth-child(2) {
  background-color: #f9fdff;
  width: 70%;
}
/* .plane_pay02
  > div:first-child
  > div:first-child
  > div:nth-child(2)
  > div:first-child {
} */
.plane_pay02
  > div:first-child
  > div:first-child
  > div:nth-child(2)
  > div:not(:first-child) {
  color: #777777;
  font-size: 14px;
  margin-top: 5px;
}

/* 第二行 */
.plane_pay02 > div:first-child > div:nth-child(2) {
  padding-top: 10px;
  height: 20px;
  line-height: 20px;
  font-size: 12px;
  color: #999999;
}
.plane_pay02 > div:first-child > div:nth-child(2) > i {
  color: #ff7528;
  font-weight: bold;
}

/* 支付方式 */
.plane_pay02 > div:nth-child(2) {
  background-color: #ffffff;
  height: 380px;
}
.plane_pay02 > div:nth-child(2) > .whichPay > ul {
  display: flex;
  justify-content: flex-start;
  position: relative;
  margin-bottom: 20px;
  width: 100%;
}
.plane_pay02 > div:nth-child(2) > .whichPay > ul > li {
  margin-right: 30px;
  padding: 25px 0 10px;
  color: #acbdd1;
  text-align: center;
  width: 120px;
  border-bottom: 4px solid rgba(0, 0, 0, 0);
}
.plane_pay02 > div:nth-child(2) > .whichPay > ul > li:hover {
  color: #333333;
  border-bottom: 4px solid rgba(40, 64, 93, 1);
}
.plane_pay02 > div:nth-child(2) > .whichPay > ul > li.active{
  font-weight: bold;
  color: #333333;
  border-bottom: 4px solid rgba(40, 64, 93, 1);
}
.plane_pay02 > div:nth-child(2) > div {
  margin: 0px 40px;
}
/* 储蓄卡 */
/* 信用卡 */
.plane_pay02 > div:nth-child(2) > .card {
  display: block;
}
.plane_pay02 > div:nth-child(2) > .card > div:first-child {
  margin: 30px 0 20px 210px;
  font-size: 14px;
}
.plane_pay02 > div:nth-child(2) > .card > div:nth-child(2) > p {
  display: block;
  font-size: 12px;
  margin-left: 210px;
  color: #999999;
}
.plane_pay02 > div:nth-child(2) > .card > div:nth-child(2) > input {
  outline: 0;
  border: 0;
  border-bottom: 1px solid #999999;
  padding: 10px 0;
  font-size: 18px;
  margin: 0 0 10px 210px;
  width: 400px;
}
.plane_pay02 > div:nth-child(2) > .card > div:nth-child(2) .next {
  display: block;
  width: 400px;
  height: 40px;
  background-color: #cad1e2;
  border-radius: 8px;
  color: #ffffff;
  font-size: 20px;
  line-height: 40px;
  margin: 120px auto;
  text-align: center;
}

/* 支付宝 */
/* 微信 */
.plane_pay02 > div:nth-child(2) > .wechat,
.plane_pay02 > div:nth-child(2) > .alipay {
  display: none;
}

.plane_pay02 > div:nth-child(2) > .wechat,
.plane_pay02 > div:nth-child(2) > .alipay {
  text-align: center;
}
.plane_pay02 > div:nth-child(2) > .wechat > img,
.plane_pay02 > div:nth-child(2) > .alipay > img {
  width: 300px;
}
.plane_pay02 > div:nth-child(2) > .wechat > a,
.plane_pay02 > div:nth-child(2) > .alipay > a {
  display: block;
  width: 400px;
  height: 40px;
  background-color: #ff9c2a;
  border-radius: 8px;
  color: #ffffff;
  font-size: 20px;
  line-height: 40px;
  margin: 20px auto;
}

/* 更多 */
.plane_pay02 > div:nth-child(2) > .cardMore {
  display: none;
}
.plane_pay02 > div:nth-child(2) > .cardMore > p {
  color: #acbdd1;
  margin-bottom: 20px;
}
.plane_pay02 > div:nth-child(2) > .cardMore > p > span {
  font-weight: bold;
  font-size: 18px;
  color: #333333;
  margin-right: 5px;
}

.plane_pay02 > div:nth-child(2) > .cardMore > ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.plane_pay02 > div:nth-child(2) > .cardMore > ul > li {
  width: 18%;
  display: flex;
  align-items: center;
  border: 1px solid#CFE4FF;
  border-radius: 5px;
  padding: 20px;
  margin: 10px 0;
  cursor: pointer;
}
.plane_pay02 > div:nth-child(2) > .cardMore > ul > li > div:first-child {
  width: 20px;
  margin-right: 10px;
}

.plane_pay02 > div:nth-child(2) > .cardMore > ul > li:hover {
  border-color: #3f92f7;
  box-shadow: 0 2px 11px 0 #b6d9ff;
}
</style>