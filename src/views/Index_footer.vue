<template>
	<div class="index-footer">
		<!-- banner -->
		<div class="my_img"><img src="/img/index/footer/protection-white2.png" alt=""></div>
		
		<!-- 服务公告 -->
		<div class="my_msg1">
			<!-- first child -->
			<div>
				<ul>
					<li>服务公告</li>
					<li><a href="#">机票预订服务提供方：上海华程西南国际旅行社有限公司</a></li>
					<li><a href="#">关于禁止携带危险品乘机的通知</a></li>
					<li><a href="#">关于欺诈短信电话的提醒</a></li>
				</ul>
			</div>
			<!-- nth-child(2) -->
			<div>
				<!-- div1 -->
				<div>
					<div><img src="/img/index/footer/app-qrcode.jpg" alt=""></div>
					<ul>
						<li>携程APP</li>
						<li>享手机订单优惠</li>
						<li>随时随地查订单</li>
					</ul>
				</div>
				<!-- div2 -->
				<div>
					<div><img src="/img/index/footer/qrcode_wechat2.png" alt=""></div>
					<ul>
						<li>携程特价机票</li>
						<li>享手机订单优惠</li>
						<li>随时随地查订单</li>
					</ul>
				</div>
			</div>
		</div>
		
		<!-- 热门航线 -->
		<div class="my_msg2">
			<p>携程旅行网提供机票预订，飞机票查询时刻表。票价查询以及特价机票，便宜机票，打折机票查询预订服务</p>
			<div>
				<p>热门航线</p>
				<div>
					<ul>
						<li><a href="#">上海到广州机票</a></li>
						<li><a href="#">上海到广州机票</a></li>
						<li><a href="#">上海到广州机票</a></li>
						<li><a href="#">上海到广州机票</a></li>
						<li><a href="#">太原到北京机票</a></li>
						<li><a href="#">太原到北京机票</a></li>
						<li><a href="#">太原到北京机票</a></li>
						<li><a href="#">太原到北京机票</a></li>
						<li><a href="#">太原到北京机票</a></li>
						<li><a href="#">太原到北京机票</a></li>
						<li><a href="#">太原到北京机票</a></li>
						<li><a href="#">太原到北京机票</a></li>
					</ul>
				</div>
			</div>

			<div>
				<p>机票工具箱</p>
				<div>
					<ul>
						<li><a href="#">打折机票</a></li>
						<li><a href="#">航班时刻表查询</a></li>
						<li><a href="#">航班动态</a></li>
						<li><a href="#">机场查询</a></li>
						<li><a href="#">机票排行榜</a></li>
						<li><a href="#">机票地图</a></li>
						<li><a href="#">机票手机版</a></li>
						<li><a href="#">天海游轮</a></li>
						<li><a href="#">值机</a></li>
					</ul>
				</div>
			</div>
			
			<div>
				<p>打折机票</p>
				<div>
					<ul>
						<li><a href="#">上海特价机票</a></li>
						<li><a href="#">广州特价机票</a></li>
						<li><a href="#">北京特价机票</a></li>
						<li><a href="#">西安特价机票</a></li>
						<li><a href="#">重庆特价机票</a></li>
						<li><a href="#">成都特价机票</a></li>
						<li><a href="#">太原特价机票</a></li>
						<li><a href="#">昆明特价机票</a></li>
						<li><a href="#">厦门特价机票</a></li>
						<li><a href="#">三亚特价机票</a></li>
						<li><a href="#">大连特价机票</a></li>
						<li><a href="#">天津特价机票</a></li>
						<li><a href="#">大连特价机票</a></li>
						<li><a href="#">更多特价机票</a></li>
					</ul>
				</div>
			</div>
			
			<div>
				<p>航空机票</p>
				<div>
					<ul>
						<li><a href="#">上海到广州机票</a></li>
						<li><a href="#">上海到广州机票</a></li>
						<li><a href="#">上海到广州机票</a></li>
						<li><a href="#">上海到广州机票</a></li>
						<li><a href="#">太原到北京机票</a></li>
						<li><a href="#">太原到北京机票</a></li>
						<li><a href="#">太原到北京机票</a></li>
						<li><a href="#">太原到北京机票</a></li>
						<li><a href="#">太原到北京机票</a></li>
						<li><a href="#">太原到北京机票</a></li>
						<li><a href="#">太原到北京机票</a></li>
						<li><a href="#">太原到北京机票</a></li>
					</ul>
				</div>
			</div>			
			
			<div>
				<p>最新预订</p>
				<div>
					<ul>
						<li><a href="#">上海到广州机票</a></li>
						<li><a href="#">上海到广州机票</a></li>
						<li><a href="#">上海到广州机票</a></li>
					</ul>
				</div>
			</div>			
			
		</div>
	</div>
</template>

<script>
export default {
	name:"indexFooter",
}
</script>

<style scoped>
  .index-footer{
	width: 1200px;
	height: 630px;
	margin: 0 auto;
	background-color: #FFFFFF;
}
.my_img{
	margin: 10px 35px;
}

.my_img>img{
	width: 100%;
}

/* 服务公告模块 */
.my_msg1{
	display: flex;
	justify-content: space-between;
	margin: 0 25px;
	padding: 25px 0;
	border-top: 1px solid #E8E8E8;
	background-color: #FFFFFF;
}

.my_msg1>div:first-child{
	padding: 0 15px;
	float: left;
}

.my_msg1>div:first-child>ul{
	list-style: none;
	padding: 0;
}

.my_msg1>div:first-child li:first-child{
	margin: 15px 0;
}

.my_msg1>div:first-child li+li{
	margin: 5px 0;
}

.my_msg1>div:first-child li>p{
	color: #333333;
	font-weight: 500;
}

.my_msg1>div:first-child li>a{
	font-size: 12px;
	color: #666666;
	text-decoration: none;
}

.my_msg1>div:first-child li>a:hover{
	text-decoration: underline;
}

/* 两个二维码模块弹性 */
.my_msg1>div:nth-child(2){
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 530px;
}

/* 二维码模块-图片和文本弹性 */
.my_msg1>div:nth-child(2)>div{
	display: flex;
	justify-content: space-between;
}

.my_msg1>div:nth-child(2)>div>div{
	width: 6.5rem;height: 6.5rem;
	border: 1px solid #E8E8E8;
}
.my_msg1>div:nth-child(2)>div img{
	width: 5.5rem;
	padding: 8%;
}

/* 二维码模块-文本 */
.my_msg1>div:nth-child(2)>div>ul{
	list-style: none;
	margin: 0 20px;
	padding: 0;
	color: #333333;
}

.my_msg1>div:nth-child(2)>div>ul>li:first-child{
	font-size: 16px;
	padding: 10px 0;
}

.my_msg1>div:nth-child(2)>div>ul>li+li{
	font-size: 12px;
	color: #999999;
	padding-top: 5px;
}

/* 热门航线模块 */
.my_msg2{
	border: 1px solid #E8E8E8;
	margin: 0 25px;
	padding: 15px;
	color: #999999;
	font-size: 12px;
}

.my_msg2>p{
	margin: 0;
}

.my_msg2>div{
	display: flex;
}

.my_msg2>div>p{
	width: 70px;
	font-weight: 600;
	margin-top: 12px;
}

.my_msg2>div ul{
	list-style: none;
	margin: 12px 0 0;
	padding: 0;
	display: flex;
	flex-wrap: wrap;
}
.my_msg2>div ul>li>a{
	padding-right: 5px;
	color: #999999;
	text-decoration: none;
}
</style>