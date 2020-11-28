<template>
  <div>
    <!-- 头 -->
    <div >
      <!-- 支付表头 -->
      <div class="plane_pay03_top">
        <!-- 左边网站logo -->
        <div>
          <img src="/img/plane_pay/c_logo2020.png" alt="" />
        </div>
        <!-- 中间 -->
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
        <!-- 右边 -->
        <div>
          <span>尊敬的会员</span>
          <span>客服中心</span>
        </div>
      </div>
    </div>
    <!-- 中间 -->
    <div class="plane_pay03">
      <i class="iconfont icon-queren"></i>
      支付完成
    </div>
    <!-- 脚 -->
    <plane-payfooter></plane-payfooter>
  </div>
</template>

<script>
import planePayfooter from "./plane_pay_footer.vue";

export default {
    components: {
    planePayfooter,
  },
  data() {
		return {

    }
	},
};
</script>

<style>
/* 头 */
.plane_pay03_top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  /* width: 1300px; */
  height: 90px;
  padding: 0 20px;
  font-size: 14px;
}
/* 头-左边网站logo */
.plane_pay03_top > div:first-child {
  width: 20%;
}
/* 头-中间 */
.plane_pay03_top > div:nth-child(2) {
  display: flex;
}

.plane_pay03_top > div:nth-child(2) > div {
  display: flex;
  align-items: center;
}

/* 圆圈 */
.plane_pay03_top > div:nth-child(2) > div > div:first-child {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: #DDDDDD;
  margin-right: 5px;
  text-align: center;
  font-size: 12px;
  color: #999999;
  font-weight: lighter;
}

/*  */
.plane_pay03_top > div:nth-child(2) > div:first-child > div:first-child,
.plane_pay03_top > div:nth-child(2) > div:nth-child(2) > div:first-child,
.plane_pay03_top > div:nth-child(2) > div:first-child > div:first-child,
.plane_pay03_top > div:nth-child(2) > div:nth-child(3) > div:first-child {
  background-color: #FF7528;
  color: #FFFFFF;

}

.plane_pay03_top > div:nth-child(2) > div:first-child > div:nth-child(2),
.plane_pay03_top > div:nth-child(2) > div:nth-child(2) > div:nth-child(2),
.plane_pay03_top > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) {
  color: #FF7528;
}

.plane_pay03_top > div:nth-child(2) > div:not(:last-child) > div:nth-child(3) {
  background-color: #FF7528;
  width: 100px;
  height: 1.5px;
  margin: 0 5px;
}
.plane_pay03_top > div:nth-child(2) > div:first-child > div:nth-child(3) {
  background-color: #FF7528;
}
/* 头-右边 */
.plane_pay03_top > div:nth-child(3) > span + span::before {
  content: "|";
  display: inline-block;
  font-size: 14px;
  color: #dddddd;
  margin: 0 5px 0 2px;
}

/* 中间 */
.plane_pay03 {
  width: 900px;
  margin: 10px auto;
  box-shadow: 1px 2px 20px rgba(106, 158, 209, 0.34);
  background-color: #ffffff;
  height: 200px;
  line-height: 200px;
  text-align: center;
  font-size: 30px;
  color: #FF7528;
}
.plane_pay03 > i {
  font-size: 30px;
}

/* 脚 */
.plane_pay_footer {
  text-align: center;
  padding-bottom: 20px;
}

.plane_pay_footer > div:first-child {
  margin: 0 auto;
}

.plane_pay_footer span,
.plane_pay_footer a {
  font-size: 12px;
  color: #333333;
}
</style>