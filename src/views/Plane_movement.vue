<template>
  <div>
		<div class="movement_banner">
			<img src="/img/movement/banner/new-banner.png" alt="">
		</div>
		<div class="movement_body">
			<!-- body_first_child -->
			<div class="nav">
				<!-- 分栏 -->
				<div>
					<ul class="menu">
						<li @click="toTicket">国内/国际机票</li>
						<li>特价机票</li>
						<li class="checked">航班动态</li>
						<li>退票改签</li>
						<li>在线选座</li>
					</ul>
				</div>
				<!-- 搜索选择 -->
				<div>
					<input checked type="radio" name="plane_msg" id="" value="0" /><span>搜航班号</span>
					<input type="radio" name="plane_msg" id="" value="1" /><span>搜起降地</span>
					<span>*国际航班请按照出发城市当地起飞时间查询</span>
				</div>
				<!-- 输入框 -->
				<div>
					<div>
						<div class="plane_id">
							<input type="" name="" id="" value="" placeholder="请填写航班号，如MU1234"/>
						</div>
						<div class="place">
							<!-- 出发城市 -->
							<div class="place_start">
								<p>出发城市</p>
								<input type="text" value="北京">
								<i class="iconfont icon-ai36-copy"></i>
							</div>
							<!-- 到达城市 -->
							<div class="place_end">
								<p>到达城市</p>
								<input type="text" value="北京">
							</div>
						</div>
					</div>
					<div>
						<p>出发日期</p>
						<input type="" name="" id="" value="2020-10-25" /><span>今天</span>
					</div>
				</div>
				<!-- 搜索按钮 -->
				<div class="find">
					<i class="iconfont icon-magnifier"></i>
					<span>搜索</span>
				</div>
			</div>
			<!-- 搜起降地搜索结果 -->
			<!-- 有结果 nth-child(2)-->
			<div class="hasResult address" >
				<div>
					<p>
						<span>上海</span>
						<i class="iconfont icon-tuxing"></i>
						<span>北京</span>						
					</p>
					<p>
						<span>10月26日周一</span>
						<span>为您搜到107条结果</span>
					</p>
				</div>
				<ul>
					<li>
						<ul>
							<li>航班信息</li>
							<li>
								<ul>
									<li> 计划起飞 <i class="iconfont icon-jiantou"></i></li>
									<li>计划起飞 早-晚</li>
									<li>计划起飞 晚-早</li>
								</ul>
							</li>
							<li>
								<ul>
									<li> 计划抵达 <i class="iconfont icon-jiantou"></i></li>
									<li>计划抵达 早-晚</li>
									<li>计划抵达 晚-早</li>
								</ul>
							</li>
							<li>航班状态</li>
						</ul>
					</li>
					<li>
						<ul>
							<li>
								<img src="/img/movement/select_result/MU.png" >
							</li>
							<li>
								<span>东方航空</span>
								<span>MU564</span>
							</li>
							<li>
								<p>06:55</p>
								<p>
									<span>浦东机场</span>
									<span>T1</span>
								</p>
							</li>
							<i class="iconfont icon-tuxing"></i>
							<li>
								<p>09:55</p>
								<p>
									<span>首都机场</span>
									<span>T2</span>
								</p>
							</li>				
							<li>
								<!-- <p class="flight_departure">航班起飞</p> -->
								<!-- <p class="flight_arrives">航班到达</p> -->
								<!-- <p class="flight_cancel">航班取消</p> -->
								<!-- <p class="flight_plan">航班计划</p> -->
								<p class="board_urged">催促登机</p>
								
								<!-- <p class="board_end">登机结束</p> -->
							</li>
						</ul>						
					</li>
					<li>
						<ul>
							<li>
								<img src="/img/movement/select_result/MU.png" >
							</li>
							<li>
								<span>东方航空</span>
								<span>MU564</span>
							</li>
							<li>
								<p>06:55</p>
								<p>
									<span>浦东机场</span>
									<span>T1</span>
								</p>
							</li>
							<i class="iconfont icon-tuxing"></i>
							<li>
								<p>09:55</p>
								<p>
									<span>首都机场</span>
									<span>T2</span>
								</p>
							</li>				
							<li>
								<!-- <p class="flight_departure">航班起飞</p> -->
								<!-- <p class="flight_arrives">航班到达</p> -->
								<!-- <p class="flight_cancel">航班取消</p> -->
								<!-- <p class="flight_plan">航班计划</p> -->
								<p class="board_urged">催促登机</p>
								
								<!-- <p class="board_end">登机结束</p> -->
							</li>
						</ul>						
					</li>
				</ul>
			</div>
			<!-- 无结果 nth-child(3)-->
			<div class="noResult address">
				<div>
					<img src="/img/movement/select_result/no-result.png" alt="">
				</div>
				<div>
          未查询到航班，请修改条件重新查询
        </div>
			</div>
			<!-- 搜航班号结果 -->
			<div class="planeNumber">
				<!-- 上面 -->
				<div>
					<div>
						<!-- 图标 -->
						<div>
							<img src="/img/movement/select_result/GS.png" >
						</div>
						<!-- 航班号 -->
						<div>
							<span>海南航空</span>
							<span>HU7616</span>
						</div>
					</div>
					<div>航班到达</div>
				</div>
				<!-- 下面 -->
				<div>
					<!-- 左边 -->
					<div>
						<!-- 横着3块，flex 第一个和第三个样式一样-->
						<!-- 横着第一块 -->
						<div>
							<div>
								<span>上海浦东</span>
								<span>T2</span>
							</div>
							<div>
								<span>实际</span>
								<span>11/04</span>
							</div>
							<div>
								07:16
							</div>
							<div>
								<span>原计划</span>
								<span>07:00</span>
							</div>
						</div>
						<!-- 横着第二块 -->
						<div>
							<!-- 全长 -->
							<div>
								全长1178公里 时长1小时58分
							</div>
							<!-- 图标 -->
							<div>
								<!-- 圆圈 -->
								<div></div>
								<!-- 直线 -->
								<div></div>
								<!-- 飞机 -->
								<div>
									<i class="iconfont icon-hangbandongtai1"></i>
								</div>
								<!-- 圆圈 -->
								<div></div>
							</div>
						</div>
						<!-- 横着第三块 -->
						<div>
							<div>
								<span>上海浦东</span>
								<span>T2</span>
							</div>
							<div>
								<span>实际</span>
								<span>11/04</span>
							</div>
							<div>
								07:16
							</div>
							<div>
								<span>原计划</span>
								<span>07:00</span>
							</div>							
						</div>
					</div>
					<!-- 右边 -->
					<div>
						<!-- 竖着3块 ,每个下面第一个样式一样-->
						<div>
							<div>值机柜台</div>
							<div>
								<div>K05-K08</div>
								<div>近28号门</div>
							</div>
						</div>
						<div>
							<div>登机口</div>
							<div>
								<div>H188</div>
								<div>靠廊桥</div>
							</div>
						</div>
						<div>
							<div>行李转盘</div>
							<div>--</div>
						</div>
					</div>
				</div>
			</div>
			<!-- body_last-child -->
			<div class="movementFooter">
				<img src="/img/movement/bottom/new-bottom-picture.png" >
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return {}
	},
	created(){
	},
	methods:{
		toTicket(){
			this.$router.push('/planeIndex');
	    this.$router.go(0);
		},
	},
	watch:{},
// created()：在创建vue对象时，当html渲染之前就触发；但是注意，全局vue.js不强制刷新或者重启时只创建一次，也就是说，created()只会触发一次；
// activated()：在vue对象存活的情况下，进入当前存在activated()函数的页面时，一进入页面就触发；可用于初始化页面数据等

}
</script>

<style lang="scss" scoped>
  $color-3:#333333;
$color-6:#666666;
$color-9:#999999;
$color-d:#dddddd;
$color-f:#ffffff;
.movement_banner{
	width: 1920px;
	margin: 0 auto;
}

.movement_body{
	width: 1180px;
	margin: 0 auto;
	>div{
		background-color: $color-f;
		border-radius: 8px;
  }
}
	// 第一个模块
	.nav{
		margin-bottom: 50px;
		position: relative;
		>div:not(:first-child){
			padding: 0 25px;
		}
		// 分栏
		>div:first-child{
			box-shadow: 0 3px 8px 1px rgba(0,0,0,0.08);
			margin-top: -48px;
			position: relative;
			>ul{
				height: 48px;
				display: flex;
				background-color: rgba(0, 0, 0, 0.8);
				border-radius: 8px 8px 0 0;
				>li{
					width: 20%;
					line-height: 48px;
					text-align: center;
					border-top-left-radius: 8px;
					border-top-right-radius: 8px;
					color: $color-d;
					font-weight: 600;
					&:not(.checked):hover{
						background-color: rgba(0,0,0,1);
						cursor: pointer;
					}
				}
				.checked{
					color: $color-3;
					background-color: $color-f;
				}
			}
		}
		// 搜索选择
		>div:nth-child(2){
			font-size: 14px;
			padding: 20px 30px;
			>span:not(:last-child){
				color: #333333;
				margin: 0 40px 0 8px;
			}
			>span:last-child{
				color: #999999;
				margin-left: 46.5%;
			}
		}
		// 输入框
		>div:nth-child(3){
			display: flex;
			padding-bottom: 80px;
			>div{
				height: 45px;
				border: 1px solid #dddddd;
				border-radius: 5px;
				padding: 8px 20px;
				input{
					border: 0;
					outline: 0;
				}
			}
			>div:first-child{
				width: 70%;
				>div.plane_id{
					>input{
						display: block;
						// border: 1px solid;
						width: 40%;height: 45px;
						font-size: 18px;
					}
				}
				>div.place{
					display: flex;
					position: relative;
					display: none;
					>div{
						width: 50%;
						>p{
							font-size: 12px;
							color: $color-9;
							margin: 0 0 5px;
						}
						>input{
							font-size: 16px;
							width: 30%;
							// border: 1px solid;
						}
					}
					>div.place_start{
						&::after{
							content: "";
							display: block;
							width: 0.15%;height: 61px;
							// background-color: $color-d;
							background: linear-gradient(to bottom,#ffffff 0%,$color-d 25%, $color-d 75%,#ffffff 100%);
							position: absolute;
							left: 49.6%;top: -8px;
						}
						>i{
							position: absolute;
							top: 9.5%;left: 47%;
							display: inline-block;
							width: 35px;height: 82.9%;
							font-size: 26px;
							color: $color-6;
							text-align: center;
							line-height: 35px;
							border: 1.5px solid $color-d;
							border-radius: 50%;
							background-color: $color-f;
							z-index: 1;
						}
					}
					>div.place_end{
						padding-left: 60px;
					}
				}
			}
			>div:last-child{
				width: 32%;
				margin-left: 2%;
				>p{
					font-size: 12px;
					color: $color-9;
					margin-bottom: 5px;
				}
				>input{
					font-size: 16px;
					width: 30%;
				}
				>span{
					font-size: 16px;
					color: $color-9;
				}
			}
		}
		// 搜索按钮
		>div:nth-child(4){
			width: 10%;
			background-color: #f70;
			padding: 15px 30px;
			border-radius: 30px;
			font-size: 22px;
			color: $color-f;
			text-align: center;
			position: absolute;
			left: 42%;bottom: -30px;
			cursor: pointer;
			>i{
				font-size: 22px;
				font-weight: 600;
			}
			// >span{
				
			// }
		}
	}
	// 搜起降地结果
	// 有result
	.hasResult{
		display: none;
		background-color: #EEF1F6;
		>div{
			font-size: 26px;
			color: $color-3;
			display: flex;
			>p:first-child{
				>i{
					font-weight: bolder;
					line-height: 100%;
				}
			}
			>p:nth-child(2){
				margin-left: 20px;
				span{
					font-size: 16px;
					font-weight: normal;
					color: $color-9;
				}
			}
		}
		>ul{
			>li{
				margin-top: 20px;
				padding: 25px;
				background-color: $color-f;
				border-radius: 8px;
			}
			>li:first-child{
				>ul{
					display: flex;
					// justify-content: space-around;
					>li{
						width: 30%;
						text-align: center;
					}
					>li:nth-child(2),
					>li:nth-child(3){
						i{
							color: $color-9;
							font-weight: bolder;
							margin-left: 10px;
						}
						ul{
							>li+li{
								display: none;
								border: 1.5px solid $color-d;
								margin: 0px 30px;
								padding: 8px 0;
							}
							>li:nth-child(2){
								border-radius: 8px 8px 0 0;
								border-bottom: 0;
								
							}
							>li:nth-child(3){
								border-radius: 0 0 8px 8px;
								border-top: 0;
							}							
						}

					}
				}
			}
			>li:first-child~li{
				height: 50px;
				>ul{
					display: flex;
					align-items: center;
					>li{
						width: 15%;
						text-align: center;
					}
					>li:first-child{
						width: 5%;
					}
					>li:nth-child(3){
						margin-left: 105px;
						color: $color-3;
						>p:first-child{
							font-size: 30px;
						}
						>p:nth-child(2){
							font-size: 12px;
							>span+span{
								color: #0086f6;
							}
						}
					}
					>i{
						font-size: 30px;
						font-weight: 1000;
						color: $color-9;
						text-align: center;
						display: block;
						width: 10%;
					}
					>i~li:not(:last-child){
						color: $color-3;
						>p:first-child{
							font-size: 30px;
						}
						>p:nth-child(2){
							font-size: 12px;
							>span+span{
								color: #0086f6;
							}
						}
					}
					>li:last-child{
						margin-left: 126px;
						>p{
							font-size: 22px;
						}
						>.flight_arrives,
						.board_end,
						.flight_plan,
						.flight_departure,
					  .board_urged{
							color: #00b87a;
						}
						>.flight_cancel{
							color: #f5190a;
						}
					}
				}
			}
		}
	}
	// 无result
	.noResult{
		display: none;
		padding: 20px;
		>div:first-child{
			width: 250px;
			// height: 150px;
			margin: 0 auto;
		}
		>div:nth-child(2){
			text-align: center;
			color: #5678a8;
		}
		
	}
	// 搜航班号结果
	.planeNumber{
		padding: 0 40px;
		>div:first-child{
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 20px 0;
			border-bottom: 2px solid $color-d;
			>div{
				font-size: 26px;
			}
			>div:first-child{
				display: flex;	
				align-items: center;
				height: 50px;
				>div:first-child{
					width: 32px;
					margin-right: 15px;
				}
			}
		}
		>div:nth-child(2){
			display: flex;
			justify-content: space-between;
			padding: 20px 0;
			// >div{}
			// 左边
			>div:first-child{
				width: 60%;
				display: flex;
				justify-content: space-around;
				align-items: center;
				border-right: dashed $color-d;
				padding: 20px;
				// >div{}
				>div:first-child,
				>div:nth-child(3){
					>div+div{
						margin-top: 15px;
					}
					>div:nth-child(2),
					>div:nth-child(4){
						font-size: 14px;
					}
					>div:nth-child(3){
						font-size: 30px;
						font-weight: bold;
					}
				}
				>div:nth-child(2){
					>div:first-child{
						font-size: 14px;
						color: $color-9;
						text-align: center;
					}
					>div:nth-child(2){
						display: flex;
						align-items: center;
						height: 50px;
						>div:first-child,
						>div:nth-child(4){
							width: 15px;height: 15px;
							border: 2px solid steelblue;
							border-radius: 50%;
						}
						>div:nth-child(2){
							width: 170px;height: 2px;
							background-color: steelblue;
						}
						>div:nth-child(3){
							>i{
								color: steelblue;
								font-size: 28px;
							}
						}
					}
				}
				>div:nth-child(3){
					text-align: right;
				}
			}
			// 右边
			>div:nth-child(2){
				width: 30%;
				>div+div{
					margin-top: 10px;
				}
				>div{
					display: flex;
					align-items: center;
					border: 1px solid $color-d;
					border-radius: 5px;
					padding: 10px;
					>div:first-child{
						width: 25%;
						padding-right: 20px;
						border-right: 1px solid $color-d;
						padding: 12px 10px 12px 0px ;
						text-align: center;
						font-size: 14px;
					}
					>div:nth-child(2){
						padding: 0px 0 0px 16px ;
						>div:first-child{
							font-weight: bold;
						}
						>div:nth-child(2){
							font-size: 14px;
							color: $color-9;
						}
					}
				}
			}
		}
	}
	// 最后的模块
	.movementFooter{
		margin: 40px 0;
	}
</style>