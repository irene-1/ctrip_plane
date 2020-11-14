<template>
  <div class="plane_pay">
			<!-- 支付表头 -->
			<div>
				<!-- 网站logo -->
				<div>
					<img src="/img/plane_pay/c_logo2020.png" alt="">
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
			<div>
				<!-- 左边 -->
				<div>
					<!-- 重要公示 -->
					<div>
						<div>
							<i class="iconfont icon-d-zhongyaogonggao"></i>
							重要公示:
						</div>
						<div>
							根据厦门市卫生健康委员会最新消息：9月28日以来有到过青岛市旅居史的来厦人员，自行到医疗机构进行核酸检测。 以上信息供您参考，请在出行前务必确认目的地最新防控规定，合理安排出行。 更新日期：2020年10月15日09:30
							接厦门机场通知，应新型冠状肺炎疫情精准防控要求，所有进入厦门进港旅客须下载并实名认证登陆“闽政通APP”
						</div>
					</div>
					<!-- 提示信息 -->
					<div>
						<div>
							<i class="iconfont icon-d-zhongyaogonggao"></i>
						</div>
						<div>
							根据厦门市卫生健康委员会最新消息：9月28日以来有到过青岛市旅居史的来厦人员，自行到医疗机构进行核酸检测。 以上信息供您参考，请在出行前务必确认目的地最新防控规定，合理安排出行。 更新日期：2020年10月15日09:30
							接厦门机场通知，应新型冠状肺炎疫情精准防控要求，所有进入厦门进港旅客须下载并实名认证登陆“闽政通APP”
						</div>
					</div>
					<!-- 乘客信息 -->
					<div>
						<!-- 乘客 -->
						<div>乘客</div>
						<div>
							<!-- 左边 -->
							<div>
								<!-- 姓名 -->
								<div>
									<input type="text" id="" name="" placeholder="乘客姓名" />
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
										<input type="text" name="" id="" value="" />
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
						</div>
					</div>
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
							<div><input type="text" placeholder="Email(选填,接收航班信息)"/></div>
						</div>
						<!-- 下一步 -->
						<div>
							下一步
						</div>
					</div>
				</div>
				<!-- 右边 -->
				<div>
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
							<img src="/img/plane_pay/mu.png" >
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
					<div>
						<span>￥</span>730
					</div>
				</div>
			</div>
      <!-- 脚 -->

		</div>
</template>

<script>
// import 
export default {

}
</script>

<style>
  
.plane_pay>div:not(:first-child) {
	margin: 0 auto;
	width: 1180px;
}

/* 上面 */
.plane_pay>div:first-child {
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #ffffff;
	height: 90px;
	padding: 0 20px;
	font-size: 14px;
}

.plane_pay>div:first-child>div:first-child {
	width: 20%;
}

.plane_pay>div:first-child>div:nth-child(2) {
	display: flex;
}

.plane_pay>div:first-child>div:nth-child(2)>div {
	display: flex;
	align-items: center;
}

/* 圆圈 */
.plane_pay>div:first-child>div:nth-child(2)>div>div:first-child {
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

.plane_pay>div:first-child>div:nth-child(2)>div:first-child>div:first-child {
	background-color: #FF7528;
	color: #FFFFFF;
}

.plane_pay>div:first-child>div:nth-child(2)>div:first-child>div:nth-child(2) {
	color: #FF7528;
}

.plane_pay>div:first-child>div:nth-child(2)>div:not(:last-child)>div:nth-child(3) {
	background-color: #DDDDDD;
	width: 100px;
	height: 1.5px;
	margin: 0 5px;
}

.plane_pay>div:first-child>div:nth-child(3)>span+span::before {
	content: "|";
	display: inline-block;
	font-size: 14px;
	color: #dddddd;
	margin: 0 5px 0 2px;
}

/* 中间 */
/* 支付信息 */
.plane_pay>div:nth-child(2) {
	display: flex;
	justify-content: space-between;
	padding: 15px;
}

/* 左边 */
/* 重要公示 */
.plane_pay>div:nth-child(2)>div:first-child {
	width: 66%;
}

.plane_pay>div:nth-child(2)>div:first-child>div:first-child,
.plane_pay>div:nth-child(2)>div:first-child>div:nth-child(2) {
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

.plane_pay>div:nth-child(2)>div:first-child>div:first-child>div:first-child,
.plane_pay>div:nth-child(2)>div:first-child>div:nth-child(2)>div:first-child {
	margin-right: 5px;
}

.plane_pay>div:nth-child(2)>div:first-child>div:first-child>div:first-child {
	width: 28%;
}

.plane_pay>div:nth-child(2)>div:first-child>div>div:first-child {
	color: #ff7d13;
	font-weight: bold;
}

.plane_pay>div:nth-child(2)>div:first-child>div>div:first-child>i {
	font-size: 12px;
}

.plane_pay>div:nth-child(2)>div:first-child>div>div:nth-child(2) {
	line-height: 1.5;
}

/* 乘客 */
.plane_pay>div:nth-child(2)>div:first-child>div:nth-child(3)>div:first-child {
	margin-top: 20px;
}

/* 姓名 */
.plane_pay>div:nth-child(2)>div:first-child>div:nth-child(3)>div:nth-child(2) {
	margin-top: 20px;
	background-color: #FFFFFF;
	display: flex;
	box-shadow: -1px 2px 1px 0 #dee4e7;
	padding: 10px 20px;
}

/* 左边-左边 */
.plane_pay>div:nth-child(2)>div:first-child>div:nth-child(3)>div:nth-child(2)>div:first-child {
	width: 50%;
	margin-left: 20px;
}

.plane_pay>div:nth-child(2)>div:first-child>div input:hover,
.plane_pay>div:nth-child(2)>div:first-child>div input:active,
.plane_pay>div:nth-child(2)>div:first-child>div input:focus {
	outline: 0;
	cursor: pointer;
}

.plane_pay>div:nth-child(2)>div:first-child>div input,
.plane_pay>div:nth-child(2)>div:first-child>div select {
	height: 30px;
	border: 0;
}

.plane_pay>div:nth-child(2)>div:first-child>div:nth-child(3)>div:nth-child(2)>div:first-child>div {
	margin: 10px 0;
}

.plane_pay>div:nth-child(2)>div:first-child>div:nth-child(3)>div:nth-child(2)>div:first-child>div:first-child {
	border-bottom: 1.5px solid #DDDDDD;
}

.plane_pay>div:nth-child(2)>div:first-child>div:nth-child(3)>div:nth-child(2)>div:first-child>div:first-child>input {
	width: 98%;
}

.plane_pay>div:nth-child(2)>div:first-child>div:nth-child(3)>div:nth-child(2)>div:first-child>div:nth-child(2),
.plane_pay>div:nth-child(2)>div:first-child>div:nth-child(3)>div:nth-child(2)>div:first-child>div:nth-child(3) {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.plane_pay>div:nth-child(2)>div:first-child>div:nth-child(3)>div:nth-child(2)>div:first-child>div:nth-child(2)>div,
.plane_pay>div:nth-child(2)>div:first-child>div:nth-child(3)>div:nth-child(2)>div:first-child>div:nth-child(3)>div {
	border-bottom: 1.5px solid #DDDDDD;
}

.plane_pay>div:nth-child(2)>div:first-child>div:nth-child(3)>div:nth-child(2)>div:first-child>div:nth-child(2)>div:first-child select {
	width: 130px;
	height: 32px;
}

.plane_pay>div:nth-child(2)>div:first-child>div:nth-child(3)>div:nth-child(2)>div:first-child>div:nth-child(2)>div:nth-child(2)>input {
	width: 98%;
}

.plane_pay>div:nth-child(2)>div:first-child>div:nth-child(3)>div:nth-child(2)>div:first-child>div:nth-child(2)>div:nth-child(2) {
	width: 60%;
}

/* 中国区号 */
.plane_pay>div:nth-child(2)>div:first-child>div:nth-child(3)>div:nth-child(2)>div:first-child>div:nth-child(3)>div:first-child {
	font-size: 14px;
	width: 130px;
	height: 30px;
}

.plane_pay>div:nth-child(2)>div:first-child>div:nth-child(3)>div:nth-child(2)>div:first-child>div:nth-child(3) {
	margin-bottom: 0;
}

.plane_pay>div:nth-child(2)>div:first-child>div:nth-child(3)>div:nth-child(2)>div:first-child>div:nth-child(3) input {
	width: 221px;
}

/* 中间的| */
.plane_pay>div:nth-child(2)>div:first-child>div:nth-child(3)>div:nth-child(2)>div:nth-child(2)::before {
	content: "";
	display: block;
	width: 1px;
	height: 135px;
	background-color: #CCCCCC;
	margin: 0px 20px;
}

/* 左边-右边 */
.plane_pay>div:nth-child(2)>div:first-child>div:nth-child(3)>div:nth-child(2)>div:nth-child(2) {
	display: flex;
	align-items: center;
	width: 45%;
	color: #666666;
}

.plane_pay>div:nth-child(2)>div:first-child>div:nth-child(3)>div:nth-child(2)>div:nth-child(2)>i{
	font-size: larger;
}

.plane_pay>div:nth-child(2)>div:first-child>div:nth-child(3)>div:nth-child(2)>div:nth-child(2)>span{
	margin: 0 10px 0 10px;
	
}

/* 联系人 */
.plane_pay>div:nth-child(2)>div:first-child>.tel_person {
	margin-top: 20px;
}

.plane_pay>div:nth-child(2)>div:first-child>.tel_person>div:nth-child(2) {
	background-color: #FFFFFF;
	padding: 10px;
	margin: 20px 0 10px 0;
	display: flex;
	font-size: 14px;
	align-items: flex-end;
}

.plane_pay>div:nth-child(2)>div:first-child>.tel_person>div:nth-child(2)>div {
	border-bottom: 1px solid #DDDDDD;
	padding-bottom: 5px;
}

.plane_pay>div:nth-child(2)>div:first-child>.tel_person>div:nth-child(2)>div i {
	margin-left: 40px;
}

.plane_pay>div:nth-child(2)>div:first-child>.tel_person>div:nth-child(2)>div:nth-child(2) {
	width: 280px;
	padding-left: 20px;
}

.plane_pay>div:nth-child(2)>div:first-child>.tel_person>div:nth-child(2)>div input {
	width: 100%;
}

.plane_pay>div:nth-child(2)>div:first-child>.tel_person>div:nth-child(2)>div:nth-child(2)>p {
	color: #BBBBBB;
	font-size: 12px;
}

.plane_pay>div:nth-child(2)>div:first-child>.tel_person>div:nth-child(2)>div:nth-child(3) {
	width: 280px;
	margin-left: 20px;
}
/* 联系人结束 */

/* 下一步 */
.plane_pay>div:nth-child(2)>div:first-child>.tel_person>div:nth-child(3) {
	text-align: center;
	background-color: #007AFF;
	color: #FFFFFF;
	padding: 10px 0;
}
/* 下一步结束 */

/* 右边 */
.plane_pay>div:nth-child(2)>div:nth-child(2) {
	background-color: #f5f8f9;
	width: 32%;
	border: 1px solid #d6dde2;
	margin-top: 10px;
}

.plane_pay>div:nth-child(2)>div:nth-child(2)>div{
	padding: 30px 20px 0;
}
/* 日期、地点 */
.plane_pay>div:nth-child(2)>div:nth-child(2)>div:first-child{
	text-align: center;
	font-weight: bold;
}
/* 航空公司、舱等 */
.plane_pay>div:nth-child(2)>div:nth-child(2)>div:nth-child(2){
	display: flex;
	justify-content: center;
	font-size: 13px;
	color: #999999;
}
.plane_pay>div:nth-child(2)>div:nth-child(2)>div:nth-child(2)>div:first-child{
	width: 15px;
}
.plane_pay>div:nth-child(2)>div:nth-child(2)>div:nth-child(2) span{
	margin-left: 5px;
}
/* 时间、机场 */
.plane_pay>div:nth-child(2)>div:nth-child(2)>div:nth-child(3){
	display: flex;
	justify-content: space-between;
	padding-bottom: 30px;
	border-bottom: 1px dotted #999999;
}
.plane_pay>div:nth-child(2)>div:nth-child(2)>div:nth-child(3)>div:first-child{
	text-align: right;
}
.plane_pay>div:nth-child(2)>div:nth-child(2)>div:nth-child(3)>div:first-child>div:first-child,
.plane_pay>div:nth-child(2)>div:nth-child(2)>div:nth-child(3)>div:last-child>div:first-child{
	font-size: 24px;
	color: #333333;
}
.plane_pay>div:nth-child(2)>div:nth-child(2)>div:nth-child(3)>div:first-child>div:nth-child(2),
.plane_pay>div:nth-child(2)>div:nth-child(2)>div:nth-child(3)>div:last-child>div:nth-child(2){
	font-size: 12px;
}
.plane_pay>div:nth-child(2)>div:nth-child(2)>div:nth-child(3)>div:nth-child(2){
	color: #849bab;
}
.plane_pay>div:nth-child(2)>div:nth-child(2)>div:nth-child(3)>div:last-child {
	text-align: left;
}
/* 成人、基建、燃油税 */
.plane_pay>div:nth-child(2)>div:nth-child(2)>div:nth-child(4){
	font-size: 14px;
	border-bottom: 1px dotted #999999;
	padding: 30px 35px ;
}
.plane_pay>div:nth-child(2)>div:nth-child(2)>div:nth-child(4)>div:first-child span+span{
	margin-left: 20px;	
}
.plane_pay>div:nth-child(2)>div:nth-child(2)>div:nth-child(4)>div:first-child span:last-child{
	float: right;
}
.plane_pay>div:nth-child(2)>div:nth-child(2)>div:nth-child(4)>div:not(:first-child){
	display: flex;
	justify-content: space-between;
}

.plane_pay>div:nth-child(2)>div:nth-child(2)>div:nth-child(4)>div:not(:last-child){
	margin-bottom: 10px;
}

.plane_pay>div:nth-child(2)>div:nth-child(2)>div:nth-child(4)>div:first-child>span:nth-child(n+2):not(:last-child){
	color: #999999;
	border-bottom: 1px dotted #999999;
}

.plane_pay>div:nth-child(2)>div:nth-child(2)>div:nth-child(4)>div>span:last-child>span{
	color: #999999;
}

/* 价钱 */
.plane_pay>div:nth-child(2)>div:nth-child(2)>div:nth-child(5){
	color: #FF7700;
	float: right;
	font-size: 24px;
	font-weight: bold;
}


</style>