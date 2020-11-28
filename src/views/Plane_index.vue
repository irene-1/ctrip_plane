<template>
  <div>
    <div class="plane_index">
      <!-- 轮播图 -->
      <div class="index_carsoul">
        <carousel></carousel>
        <p>广告</p>
      </div>
      <!-- index_body_body主体 -->
      <div class="index_body">
        <!-- body_first_child -->
        <div>
          <!-- 分栏-menu -->
          <div>
            <ul class="menu">
              <li>国内/国际机票</li>
              <li>特价机票</li>
              <li @click="toPlanemovement">航班动态</li>
              <li>在线选座</li>
              <li>退票改签</li>
              <li>更多服务</li>
            </ul>
          </div>
          <!-- 重要公告 -->
          <div class="msg">
            <span>!</span>
            <span>重要公告：</span>
            <span>
              疫情期间各国及地区入境政策变化频繁，客服电话呼入激增，为更快解决您的问题，建议优先使用自助方式查询相关入境政策，点此详情查看。
            </span>
            <router-link to="/publicNotice">详情</router-link>
          </div>
          <!-- 单程、往返、多程 -->
          <div class="select">
            <div>
              <!-- 单程--0，往返--1，多程--2 -->
              <input
                id="single"
                v-model="check"
                type="radio"
                name="isMoreway"
                value="0"
              />
              <span>单程</span>
              <input id="goBack" type="radio" name="isMoreway" value="1" />
              <span>往返</span>
              <input id="multiple" type="radio" name="isMoreway" value="2" />
              <span>多程(含缺口程)</span>
              <span>?</span>
            </div>
            <!-- 舱等 -->
            <div class="level">
              <ul class="menu planeLevel">
                <!-- 单击事件 -->
                <li @click="planeLevellist">{{ displayLevel }}</li>
                <!-- 默认隐藏 -->
                <li class="levelList" :style="{ display: 'none' }">
                  <ul @click="option">
                    <li>
                      <i
                        class="iconfont icon-confirm"
                        :class="{ active: true }"
                      ></i
                      >不限舱等
                    </li>
                    <li><i class="iconfont icon-confirm"></i>经济舱</li>
                    <li><i class="iconfont icon-confirm"></i>公务/头等舱</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <!-- 出发地、目的地、出发日期、乘客类型-->
          <div class="select_msg">
            <!-- 出发地、目的地 -->
            <div class="place">
              <!-- 出发地 -->
              <div class="place_start">
                <p>出发地</p>
                <!-- 单击弹出选项框 -->
                <input type="text" v-model="start_place" @click="popover1" />
                <!-- 单击交换双方的值 -->
                <span @click="exchange">⇆</span>
                <div class="splitLine"></div>
              </div>
              <!-- 目的地 -->
              <div class="place_end">
                <p>目的地</p>
                <!-- 单击弹出选项框 -->
                <input type="text" v-model="end_place" @click="popover2" />
              </div>
            </div>
            <!-- 出发日期 -->
            <div class="start_date">
              <p>出发日期</p>
              <!-- <input type="text" v-model="date" /> -->
              <!-- /////////////////////////////////////// -->
              <!-- 日历组件 -->
              <div class="block">
                <el-date-picker
                  v-model="start_date"
                  type="date"
                  placeholder="选择日期"
                  :picker-options="pickerOptions"
                ></el-date-picker>
              </div>
              <!-- //////////////////////////////////////////// -->
              <input class="my_input1" type="text" placeholder="+ 添加返程" />
            </div>
            <!-- 乘客类型 -->
            <div class="person_size">
              <p>乘客类型</p>
              <input type="checkbox" value="" /><span>带儿童</span>
              <input type="checkbox" value="" /><span>带婴儿</span>
            </div>
          </div>
          <!-- 搜索按钮 -->
          <div class="find" @click="toPlaneselect">
            <i class="iconfont icon-magnifier"></i>
            <span>搜索</span>
          </div>
        </div>
        <!-- body-nth-child(2) -->
        <div>
          <img src="/img/index/banner/super-member-banner.png" />
        </div>
        <!-- body-nth-child(3) -->
        <div>
          <!-- low_price -->
          <div class="low_price title">
            <p>低价速报</p>
            <!-- 出发地 -->
            <div>
              <input type="" name="" id="" value="杭州出发" />
              <i class="iconfont icon-chevron-down"></i>
            </div>
            <!-- 出发时间 -->
            <div>
              <button>10月/11月/12月,3-15天</button>
              <i class="iconfont icon-chevron-down"></i>
            </div>
          </div>
          <!-- detail_msg -->
          <div class="detail_msg">
            <!-- 第一个ul -->
            <ul class="list">
              <!-- 精选推荐 -->
              <li>精选推荐</li>
              <!-- 各种信息 -->
              <li>
                <!-- 第一个列 -->
                <ul>
                  <!-- list图片 -->
                  <li><img src="/img/index/list/杭州.jpg" alt="" /></li>
                  <!-- list地点，时间 -->
                  <li>
                    <span>杭州</span>
                    <!-- <span>⇀</span> -->
                    <i class="iconfont icon-tuxing"></i>
                    <span>大阪</span>
                    <p>10-25 去</p>
                  </li>
                  <!-- list价钱，折扣 -->
                  <li>
                    <p>￥<span>150</span><span>起</span></p>
                    <p>1.6折</p>
                  </li>
                </ul>
                <!-- 第二个列 -->
                <ul>
                  <!-- list图片 -->
                  <li><img src="/img/index/list/杭州.jpg" alt="" /></li>
                  <!-- list地点，时间 -->
                  <li>
                    <span>杭州</span>
                    <!-- <span>⇀</span> -->
                    <i class="iconfont icon-tuxing"></i>
                    <span>大阪</span>
                    <p>10-25 去</p>
                  </li>
                  <!-- list价钱，折扣 -->
                  <li>
                    <p>￥<span>150</span><span>起</span></p>
                    <p>1.6折</p>
                  </li>
                </ul>
                <!-- 第三个列 -->
                <ul>
                  <!-- list图片 -->
                  <li><img src="/img/index/list/杭州.jpg" alt="" /></li>
                  <!-- list地点，时间 -->
                  <li>
                    <span>杭州</span>
                    <!-- <span>⇀</span> -->
                    <i class="iconfont icon-tuxing"></i>
                    <span>大阪</span>
                    <p>10-25 去</p>
                  </li>
                  <!-- list价钱，折扣 -->
                  <li>
                    <p>￥<span>150</span><span>起</span></p>
                    <p>1.6折</p>
                  </li>
                </ul>
              </li>
            </ul>
            <!-- 第二个ul -->
            <ul class="list">
              <!-- 日韩 -->
              <li>日韩</li>
              <!-- 各种信息 -->
              <li>
                <!-- 第一个列 -->
                <ul>
                  <!-- list图片 -->
                  <li><img src="/img/index/list/杭州.jpg" alt="" /></li>
                  <!-- list地点，时间 -->
                  <li>
                    <span>杭州</span>
                    <!-- <span>⇀</span> -->
                    <i class="iconfont icon-tuxing"></i>
                    <span>大阪</span>
                    <p>10-25 去</p>
                  </li>
                  <!-- list价钱，折扣 -->
                  <li>
                    <p>￥<span>150</span><span>起</span></p>
                    <p>1.6折</p>
                  </li>
                </ul>
                <!-- 第二个列 -->
                <ul>
                  <!-- list图片 -->
                  <li><img src="/img/index/list/杭州.jpg" alt="" /></li>
                  <!-- list地点，时间 -->
                  <li>
                    <span>杭州</span>
                    <!-- <span>⇀</span> -->
                    <i class="iconfont icon-tuxing"></i>
                    <span>大阪</span>
                    <p>10-25 去</p>
                  </li>
                  <!-- list价钱，折扣 -->
                  <li>
                    <p>￥<span>150</span><span>起</span></p>
                    <p>1.6折</p>
                  </li>
                </ul>
                <!-- 第三个列 -->
                <ul>
                  <!-- list图片 -->
                  <li><img src="/img/index/list/杭州.jpg" alt="" /></li>
                  <!-- list地点，时间 -->
                  <li>
                    <span>杭州</span>
                    <!-- <span>⇀</span> -->
                    <i class="iconfont icon-tuxing"></i>
                    <span>大阪</span>
                    <p>10-25 去</p>
                  </li>
                  <!-- list价钱，折扣 -->
                  <li>
                    <p>￥<span>150</span><span>起</span></p>
                    <p>1.6折</p>
                  </li>
                </ul>
              </li>
            </ul>
            <!-- 第三个ul -->
            <ul class="list">
              <!-- 精选推荐 -->
              <li>东南亚</li>
              <!-- 各种信息 -->
              <li>
                <!-- 第一个列 -->
                <ul>
                  <!-- list图片 -->
                  <li><img src="/img/index/list/杭州.jpg" alt="" /></li>
                  <!-- list地点，时间 -->
                  <li>
                    <span>杭州</span>
                    <!-- <span>⇀</span> -->
                    <i class="iconfont icon-tuxing"></i>
                    <span>大阪</span>
                    <p>10-25 去</p>
                  </li>
                  <!-- list价钱，折扣 -->
                  <li>
                    <p>￥<span>150</span><span>起</span></p>
                    <p>1.6折</p>
                  </li>
                </ul>
                <!-- 第二个列 -->
                <ul>
                  <!-- list图片 -->
                  <li><img src="/img/index/list/杭州.jpg" alt="" /></li>
                  <!-- list地点，时间 -->
                  <li>
                    <span>杭州</span>
                    <!-- <span>⇀</span> -->
                    <i class="iconfont icon-tuxing"></i>
                    <span>大阪</span>
                    <p>10-25 去</p>
                  </li>
                  <!-- list价钱，折扣 -->
                  <li>
                    <p>￥<span>150</span><span>起</span></p>
                    <p>1.6折</p>
                  </li>
                </ul>
                <!-- 第三个列 -->
                <ul>
                  <!-- list图片 -->
                  <li><img src="/img/index/list/杭州.jpg" alt="" /></li>
                  <!-- list地点，时间 -->
                  <li>
                    <span>杭州</span>
                    <!-- <span>⇀</span> -->
                    <i class="iconfont icon-tuxing"></i>
                    <span>大阪</span>
                    <p>10-25 去</p>
                  </li>
                  <!-- list价钱，折扣 -->
                  <li>
                    <p>￥<span>150</span><span>起</span></p>
                    <p>1.6折</p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <!-- body-nth-child(4) -->
        <div>
          <!-- 低价地图-title -->
          <div class="title">
            <p>低价地图</p>
          </div>
          <div>
            <!-- detail_msg -->
            <div class="detail_msg">
              <ul>
                <li>
                  <span>杭州出发</span
                  ><i class="iconfont icon-chevron-down"></i>
                </li>
                <li>
                  <p>出发日期</p>
                  <div class="splitLine"></div>
                  <input type="text" value="2020-10-19" />
                  <input type="text" value=" + 添加返程" />
                </li>
                <li>
                  <ul class="hasResult">
                    <li class="country_img">
                      <img src="/img/index/list/1-list/KR.jpg" alt="" />
                    </li>
                    <li>
                      <p>中国港澳台</p>
                      <p>￥<span class="price">802</span>起</p>
                    </li>
                  </ul>
                  <ul class="noResult">
                    <li>
                      <img src="/img/index/list/1-list/KR.jpg" />
                    </li>
                    <li>
                      <p>韩国</p>
                      <p>当前日期无结果</p>
                      <p>可切换其他日期查看</p>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul class="noResult">
                    <li>
                      <img src="/img/index/list/1-list/KR.jpg" />
                    </li>
                    <li>
                      <p>韩国</p>
                      <p>当前日期无结果</p>
                      <p>可切换其他日期查看</p>
                    </li>
                  </ul>
                  <ul class="noResult">
                    <li>
                      <img src="/img/index/list/1-list/KR.jpg" />
                    </li>
                    <li>
                      <p>韩国</p>
                      <p>当前日期无结果</p>
                      <p>可切换其他日期查看</p>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul class="noResult">
                    <li>
                      <img src="/img/index/list/1-list/KR.jpg" />
                    </li>
                    <li>
                      <p>韩国</p>
                      <p>当前日期无结果</p>
                      <p>可切换其他日期查看</p>
                    </li>
                  </ul>
                  <ul class="noResult">
                    <li>
                      <img src="/img/index/list/1-list/KR.jpg" />
                    </li>
                    <li>
                      <p>韩国</p>
                      <p>当前日期无结果</p>
                      <p>可切换其他日期查看</p>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul class="noResult">
                    <li>
                      <img src="/img/index/list/1-list/KR.jpg" />
                    </li>
                    <li>
                      <p>韩国</p>
                      <p>当前日期无结果</p>
                      <p>可切换其他日期查看</p>
                    </li>
                  </ul>
                  <ul class="noResult">
                    <li>
                      <img src="/img/index/list/1-list/KR.jpg" />
                    </li>
                    <li>
                      <p>韩国</p>
                      <p>当前日期无结果</p>
                      <p>可切换其他日期查看</p>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div>
              <img src="/img/index/map.png" alt="" />
            </div>
          </div>
        </div>
        <!-- body-nth-child(5) -->
        <div>
          <div class="title">
            <p>航空公司特惠专区</p>
          </div>
          <div>
            <ul>
              <li class="iconfont icon-zuojiantou"></li>
              <li class="checked">
                <img src="/img/index/list/3-list/MU.png" />
                <p>南方航空</p>
              </li>
              <li>
                <img src="/img/index/list/3-list/MU.png" />
                <p>南方航空</p>
              </li>
              <li>
                <img src="/img/index/list/3-list/MU.png" />
                <p>南方航空</p>
              </li>
              <li>
                <img src="/img/index/list/3-list/MU.png" />
                <p>南方航空</p>
              </li>
              <li>
                <img src="/img/index/list/3-list/MU.png" />
                <p>南方航空</p>
              </li>
              <li>
                <img src="/img/index/list/3-list/MU.png" />
                <p>南方航空</p>
              </li>
              <li>
                <img src="/img/index/list/3-list/MU.png" />
                <p>南方航空</p>
              </li>
              <li>
                <img src="/img/index/list/3-list/MU.png" />
                <p>南方航空</p>
              </li>
              <li>
                <img src="/img/index/list/3-list/MU.png" />
                <p>南方航空</p>
              </li>
              <li>
                <img src="/img/index/list/3-list/MU.png" />
                <p>南方航空</p>
              </li>
              <li class="iconfont icon-youjiantou2"></li>
            </ul>
            <div>
              <div>
                <img src="/img/index/icon/CZ_1.png" alt="" />
              </div>
              <div>
                <span>
                  中国南方航空股份有限公司是中国运输飞机最多、航线网络最发达、年客运量最大的航空公司。目前，南航经营包括波音787、777、747等，空客380、330、320等在内的客货运输机500架，机队规模跃居亚洲第一，在IATA全球240个成员航空公司中排名第三。形成了以广州、北京为中心枢纽，密集覆盖国内150多个通航点，全面辐射亚洲、链接欧洲、美洲和大洋洲，每天有1930个航班飞至全球35个国家和地区，193个目的地，航线网络通达全球1000个目的地，连接187个国家和地区，到达全球各主要城市。2011年，南航被国际航空服务认证权威机构Skytrax
                  授予“Skytrax四星级航空公司”称号，2012年9月28日，南航荣获中国民航局颁发的飞行安全最高奖“飞行安全钻石奖”，成为国内安全星级最高、安全业绩最好的航空公司。
                </span>
                <a>查看更多</a>
              </div>
            </div>
          </div>
          <div>
            <ul>
              <li>出发地：</li>
              <li class="checked">广州</li>
              <li>深圳</li>
              <li>北京</li>
              <li>西安</li>
            </ul>
            <ul>
              <li>
                <div>
                  <p>
                    杭州
                    <i class="iconfont icon-tuxing"></i>
                    大阪
                  </p>
                  <p>2020-10-25<span>周四</span></p>
                </div>
                <div>
                  <p>￥<span>150</span>起</p>
                  <p>1.6折</p>
                </div>
              </li>
              <li>
                <div>
                  <p>
                    杭州
                    <i class="iconfont icon-tuxing"></i>
                    大阪
                  </p>
                  <p>2020-10-25<span>周四</span></p>
                </div>
                <div>
                  <p>￥<span>150</span>起</p>
                  <p>1.6折</p>
                </div>
              </li>
              <li>
                <div>
                  <p>
                    杭州
                    <i class="iconfont icon-tuxing"></i>
                    大阪
                  </p>
                  <p>2020-10-25<span>周四</span></p>
                </div>
                <div>
                  <p>￥<span>150</span>起</p>
                  <p>1.6折</p>
                </div>
              </li>
              <li>
                <div>
                  <p>
                    杭州
                    <i class="iconfont icon-tuxing"></i>
                    大阪
                  </p>
                  <p>2020-10-25<span>周四</span></p>
                </div>
                <div>
                  <p>￥<span>150</span>起</p>
                  <p>1.6折</p>
                </div>
              </li>
              <li>
                <div>
                  <p>
                    杭州
                    <i class="iconfont icon-tuxing"></i>
                    大阪
                  </p>
                  <p>2020-10-25<span>周四</span></p>
                </div>
                <div>
                  <p>￥<span>150</span>起</p>
                  <p>1.6折</p>
                </div>
              </li>
              <li>
                <div>
                  <p>
                    杭州
                    <i class="iconfont icon-tuxing"></i>
                    大阪
                  </p>
                  <p>2020-10-25<span>周四</span></p>
                </div>
                <div>
                  <p>￥<span>150</span>起</p>
                  <p>1.6折</p>
                </div>
              </li>
              <li>
                <div>
                  <p>
                    杭州
                    <i class="iconfont icon-tuxing"></i>
                    大阪
                  </p>
                  <p>2020-10-25<span>周四</span></p>
                </div>
                <div>
                  <p>￥<span>150</span>起</p>
                  <p>1.6折</p>
                </div>
              </li>
              <li>
                <div>
                  <p>
                    杭州
                    <i class="iconfont icon-tuxing"></i>
                    大阪
                  </p>
                  <p>2020-10-25<span>周四</span></p>
                </div>
                <div>
                  <p>￥<span>150</span>起</p>
                  <p>1.6折</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <index-footer></index-footer>
    </div>
  </div>
</template>

<script>
// Carousel.vue作为子组件引入
import carousel from "../components/Index/Carousel.vue";
// Index_footer.vue作为子组件引入
import indexFooter from "./Index_footer.vue";
//
import planeSelect from "./Plane_select.vue";
export default {
  name: "plane_index",
  // 引入的子组件对象列表
  components: {
    indexFooter,
    // 把carousel设置为当前plane_index的子组件；
    carousel,
    // 把planeSelect设置为当前plane_index的子组件；
    planeSelect,
  },
  data() {
    return {
      // 可选时间
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() < Date.now() - 3600 * 24 * 1000;
          console.log(Date.now());
        },
      },
      // 拼接到地址栏的内容
      toUrl: "",
      // 保存单程，多程，往返等状态值的变量
      check: 0,
      //地点，暂时先用写死的，
      start_place: "西安", //页面加载获取本地地址的市区
      end_place: "北京", //随机获取地址的市区

      // 出发日期
      start_date: "",

      // 舱等
      // 0-不限舱等，1-经济舱，2-商务/头等舱
      planeLevel: 0,
      // 显示的选项
      displayLevel: "不限舱等",
      // 用于显示舱等列表显示状态 0-隐藏 1-显示
      showBlock: "0",
    };
  },
  created() {},
  mounted() {
    // 第一次进入页面获取当前日期---------距离计算机元年的毫秒数对应的日期
    this.start_date = new Date().toLocaleDateString().split("/").join("-");
    // console.log(this.date);
  },
  methods: {
    // 分栏跳转
    // 航班动态
    toPlanemovement() {
      // 跳转到'航班动态'并刷新加载，解决直接跳转不刷新问题
      this.$router.push("/planeMovement");
      // 刷新跳转后的页面
      this.$router.go(0);
    },
    // 搜索按钮跳转
    toPlaneselect() {
      // 1.如果用window.location.href获取,把要传递的参数拼接，有中文需要用encodeURI()进行编码，在获取url参数页面进行decodeURI()解码
      // this.toUrl += encodeURI(`${this.start_place}&${this.end_place}`);

      // 发送axios请求(带参)问号传参 --数据库用res.query获取
      // this.axios.get(`/user/select_detail_start_end?flight_start_place=${this.start_place}&flight_end_place=${this.end_place}`)
      // this.toUrl = encodeURI(`${this.start_place}&${this.end_place}`);
      // console.log(decodeURI(`/planeSelect/${toUrl}`));
      // console.log(this.start_date.length);

      if (!this.start_place) {
        this.start_place = "西安";
      }
      if (!this.end_place) {
        this.end_place = "北京";
      }
      if (!this.start_date) {
        this.start_date = new Date().toLocaleDateString().split("/").join("-");
      }
      // 拼接传递的参数
      this.toUrl = `${this.start_place}&${this.end_place}&${this.start_date}`;
      console.log(this.toUrl);
      // 跳转页面
      this.$router.push(`/planeSelect/${this.toUrl}`);
      this.$router.go(0);
    },
    // popover1弹出地点选项框
    popover1() {
      // 判断不与popover2的值相同
      console.log(1);
    },
    // popover1弹出地点选项框
    popover2() {
      // 判断不与popover1的值相同
      console.log(2);
    },
    // 单击交换popover1的值与popover2的值
    exchange() {
      // 获取起飞地
      var start = this.start_place;
      // 获取目的地
      var end = this.end_place;
      // 为了每次调用函数都可以执行交换的功能
      var arr = [start, end];
      // 交换--解构
      [end, start] = arr;
      this.start_place = start;
      this.end_place = end;
      // console.log(this.start_place, this.end_place);
    },
    // 单击弹出舱等选择
    planeLevellist() {
      // 1.弹出下拉列表舱等选项
      // 获取整个列表
      let levelList = document.getElementsByClassName("levelList")[0];
      // console.log(levelList);
      // showBlock初始值为0，整个列表隐藏
      if (!this.showBlock) {
        // 列表显示,列表状态为1
        levelList.style.display = "block";
        // this.checked();
        this.showBlock = 1;
        // 否则如果showBlock = 1,则
        // 结果1.有active类的父元素字体变蓝,显示区域的文本为选中选项文本，没有active类的元素visiblity:hidden;
        // 结果2.单击关闭，//或者单击选项后关闭|| this.option()
      } else if (this.showBlock) {
        //结果1
        let okEle = levelList.querySelectorAll("i");
        okEle.forEach((element) => {
          if (element.classList.value == "iconfont icon-confirm active") {
            // 有active类的父元素字体变蓝
            element.parentElement.style.color = "#0086f6";
          } else {
            // 没有active类的元素visiblity:hidden;
            element.style.visibility = "hidden";
          }
        });
        // 结果2
        // 列表关闭
        levelList.style.display = "none";
        // 列表状态为0
        this.showBlock = 0;
      }
    },
    // 舱等选择事件,给父元素绑定事件，通过冒泡获取事件对象
    option(e) {
      let levelList = document.getElementsByClassName("levelList")[0];
      let okEle = levelList.querySelectorAll("i");
      // console.log(okEle);
      // 1.选中样式
      okEle.forEach((element) => {
        // .classLists数组的value是个字符串，所以可以直接用iconfont icon-confirm active判断
        // 用display:none会所占空间会消失，visibility:hidden所占空间不会消失
        element.classList.value = "iconfont icon-confirm";
        // console.log(e.target.children[0]);
        e.target.children[0].classList.value = "iconfont icon-confirm active";
        if (element.classList.value !== "iconfont icon-confirm active") {
          // okEle显示,其他项√隐藏
          element.style.visibility = "hidden";
          element.parentElement.style.color = "#333333";
          // element.style.
        } else {
          // 否则如果类名有active，就显示visibilty:visible
          element.style.visibility = "visible";
          // li字体颜色变蓝
          e.target.style.color = "#0086f6";
          // 显示区域的文本为选中选项文本，且整个列表消失,列表状态为0
          this.displayLevel = e.target.innerText;
          this.status();
          // console.log(this.planeLevel);
          levelList.style.display = "none";
          this.showBlock = 0;
        }
      });
    },
    // 选择的舱等状态
    status() {
      let status = ["不限舱等", "经济舱", "商务/头等舱"];
      // console.log(status[k]);
      if (this.displayLevel == status[0]) {
        this.planeLevel = 0;
      } else if (this.displayLevel == status[1]) {
        this.planeLevel = 1;
      } else {
        this.planeLevel = 2;
      }
    },
  },
  watch: {},
};
</script>

<style >
/* 日历组件样式 */
.plane_index .el-input__inner {
  width: 170px !important;
  height: 35px !important;
  border: 0 !important;
  border-radius: 0 !important;
  /* padding-left: 10px !important; */
  /* background: #00ff00 !important; */
}
.plane_index .el-date-editor el-input {
  width: 100% !important;
}
.plane_index .el-date-editor.el-input[data-v-5acef1f9],
.plane_index .el-date-editor.el-input__inner[data-v-5acef1f9] {
  height: 26px !important;
  width: 180px !important;
  padding-top: 10px !important;
}
.plane_index .el-input__prefix {
  top: -3px !important;
  left: 4px !important;
}
/* .el-input__prefix::after{
  content: "";
  display: block;
  width: 22px;height: 20px;
  background: #ffffff;
  position: absolute;
  top: 10px;
} */
</style>
<style scoped>
.plane_index {
  max-width: 1920px;
  min-width: 1180px;
  margin: 0 auto;
}

/* 轮播图模块 */
.index_carsoul {
  /* width: 1920px; */
  /* min-width: 1263px; */
  position: relative;
  /* margin: 0 auto; */
  height: 260px;
  overflow: hidden;
}

.index_carsoul > p {
  width: 32px;
  height: 20px;
  display: block;
  position: absolute;
  left: 0px;
  bottom: 0px;
  /* float: left; */
  border-top-right-radius: 8px;
  color: #ffffff;
  font-size: 12px;
  text-align: center;
  line-height: 20px;
  background-color: #000000;
  opacity: 0.4;
  z-index: 10;
}

/* index_body主体 */
.index_body {
  width: 1180px !important;
  margin: 0 auto;
  width: 100%;
  padding-bottom: 10px;
  z-index: 5;
}

.index_body > div {
  width: 94%;
  background-color: #ffffff;
  border-radius: 8px;
  margin: 0 3% 3.5%;
}

/* index_body_body主体——first-child */
.index_body > div:first-child {
  background-color: #ffffff;
  box-shadow: 0 3px 8px 1px rgba(0, 0, 0, 0.08);
  margin-top: -48px;
  position: relative;
  z-index: 10;
}

/* 分栏 */
.index_body > div:first-child > div > .menu {
  height: 48px;
  display: flex;
  justify-content: space-around;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 8px 8px 0 0;
}
/* 分栏的每个li */
.index_body > div:first-child > div > .menu > li {
  width: 16.66%;
  line-height: 48px;
  text-align: center;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: #ddd;
  font-weight: 600;
  background-color: transparent;
}
/* 分栏的第一个li */
.index_body > div:first-child > div > .menu > li:first-child {
  color: #333333;
  background-color: #ffffff;
}
/* 分栏的除第一个剩下的li鼠标悬停 */
.index_body > div:first-child > div > .menu > li + li:hover {
  background: rgba(0, 0, 0, 1);
  cursor: pointer;
}
/* 重要公告-msg */
.index_body > div:first-child > .msg {
  background-color: #fff8f2;
  margin: 15px 25px;
  padding: 13px 25px;
  border-radius: 8px;
}
/* 重要公告的所有span */
.index_body > div:first-child > .msg > span {
  color: #f70;
  font-size: 14px;
}
/* 重要公告的第一个span */
.index_body > div:first-child > .msg > span:first-child {
  display: inline-block;
  width: 15px;
  height: 15px;
  text-align: center;
  line-height: 15px;
  color: #ffffff;
  background-color: #f70;
  border-radius: 50%;
  font-weight: 600;
}
/* 重要公告的第二个span */
.index_body > div:first-child > .msg > span:nth-child(2) {
  font-weight: 600;
}
/* 重要公告的详情 */
.index_body > div:first-child > .msg > a {
  color: #0086f6;
  /* margin-left: 57px; */
  float: right;
  font-weight: normal;
}
/* 重要公告的详情鼠标悬停 */
.index_body > div:first-child > .msg > a:hover {
  text-decoration: underline;
}

/* 单程、往返、多程 -select*/
.index_body > div:first-child > .select {
  padding: 10px 30px;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
}

.index_body > div:first-child > .select span {
  color: #333333;
  margin: 0 40px 0 8px;
}

.index_body > div:first-child > .select span:last-child {
  display: inline-block;
  width: 13px;
  height: 13px;
  font-size: 12px;
  text-align: center;
  line-height: 13px;
  color: #89a0c2;
  border: 2px solid #89a0c2;
  border-radius: 50%;
  margin-left: -30px;
}

/* 舱等 */

.index_body > div:first-child > .select .menu > li {
  width: 100px;
  /* background: #dddddd; */
  border-radius: 5px;
}
.index_body > div:first-child > .select .menu > li:first-child {
  background: #dddddd;
  text-align: center;
  padding: 10px 20px;
}
.index_body > div:first-child > .select .menu > li:nth-child(2) {
  border: 1px solid #dddddd;
  /* float: right; */
  position: absolute;
  right: 30px;
  z-index: 2;
  background: #ffffff;
  width: 150px;
}
.index_body > div:first-child > .select .menu > li:nth-child(2) li {
  width: 100%;
  padding: 10px 20px 10px 10px;
  box-sizing: border-box;
}
.index_body > div:first-child > .select .menu > li:nth-child(2) li > i {
  /* display: inline; */
  margin-right: 10px;
  font-size: 14px;
}
.index_body > div:first-child > .select .menu > li:nth-child(2) li:hover {
  background: #dddddd;
}
.index_body > div:first-child > .select .menu > li:nth-child(2) li + li {
  padding-top: 10px;
}
/* 出发地、目的地、出发日期、乘客类型 */
/* 出发地、目的地 */
.index_body > div:first-child > .select_msg {
  display: flex;
  justify-content: space-between;
  padding: 10px 30px 60px;
  margin-bottom: 2%;
}

.select_msg > div {
  height: 45px;
  border: 1px solid #dddddd;
  border-radius: 5px;
  padding: 8px 20px;
  position: relative;
}

.select_msg > div:hover {
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.06);
}

.select_msg > .place {
  width: 40%;
  display: flex;
  position: relative;
}

.select_msg .place_start {
  width: 50%;
  /* border: 1px solid; */
}

.select_msg .place_end {
  width: 50%;
  /* border: 1px solid; */
  margin-left: 60px;
}

.select_msg input {
  margin: 6px 0;
  border: 0;
  font-size: 15px;
}

.select_msg .place_start > input {
  width: 60%;
  /* border: 1px solid; */
}

.select_msg .place_end > input {
  width: 60%;
}

.select_msg > .person_size {
  width: 15%;
  font-size: 15px;
}
.select_msg p {
  font-size: 12px;
  color: #999999;
}

.select_msg input:focus {
  outline: 0;
}

.select_msg > .place input {
  font-size: 18px;
}
/* 交换按钮 */
.select_msg .place_start > span {
  display: inline-block;
  width: 30px;
  height: 30px;
  border: 1px solid #dddddd;
  border-radius: 50%;
  background-color: #ffffff;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  line-height: 100%;
  position: absolute;
  top: 15.5px;
  right: 46.7%;
  z-index: 1;
  cursor: pointer;
}

.select_msg .place_start > span:hover {
  border: 1px solid #f8f9fa;
  /* background-color: #f8f9fa; */
}

/* .select_msg .place_start > a:visited {
  color: #666666;
} */

.select_msg .splitLine {
  border-right: 1px solid #dddddd;
  height: 90%;
  position: absolute;
  top: 5%;
  left: 50%;
}

/* 出发日期 */
.select_msg > .start_date {
  width: 30%;
  position: relative;
}

.select_msg > .start_date > .my_input1 {
  width: 23%;
  /* float: right; */
  text-align: center;
  position: absolute;
  top: 18.5px;
  right: 20px;
}

/* 乘客类型 */
.select_msg > .person_size input {
  vertical-align: middle;
}

.select_msg > .person_size span {
  display: inline-block;
  margin: 6px 10px 6px 5px;
  vertical-align: middle;
}

/* 搜索按钮 */
.find {
  width: 10%;
  background-color: #f70;
  padding: 15px 30px;
  border-radius: 30px;
  font-size: 22px;
  color: #ffffff;
  text-align: center;
  position: absolute;
  left: 42%;
  bottom: -9%;
  cursor: pointer;
}
/* 查找图标 */
.find > .iconfont {
  font-size: 22px;
  font-weight: 600;
}
/* body-nth-child(2) */
.index_body > div:nth-child(2) {
  background-color: #eef1f6;
}

.index_body > div:nth-child(2) > img {
  width: 100%;
}

/* body-nth-child(3) */
.index_body > div {
  color: #333333;
  background-color: #eef1f6;
}

/* body-nth-child(3)下第一个div */
.index_body .title {
  background-color: #eef1f6;
  /* padding: 30px 0 0; */
  display: flex;
  justify-items: center;
  height: 48px;
  /* line-height: 48px; */
  font-size: 20px;
}

/* .index_body>div .title{
	font-size: 20px;
} */

/* 出发地 */
.index_body .low_price > div {
  height: 30px;
  width: 250px;
  line-height: 30px;
  margin: 0 0 0 30px;
  font-size: 15px;
  border: 0;
  border-radius: 5px;
  position: relative;
}
/* 出发地输入框，出发时间按钮 */
.low_price > p + div > input,
.low_price > div + div > button {
  background-color: #ffffff;
  /* border-color：边框的颜色 取值 合法的颜色值/transparent(透明) */
  border-width: 6.5px 70px 6.5px 10px;
  border-radius: 5px;
  /* border-color:  #0000FF; */
  border-color: transparent;
  font-size: 15px;
  color: #666666;
  /* 光标颜色 */
  caret-color: #0086f6;
}

.low_price > p + div > input {
  width: 68%;
}
/* 出发地，出发时间选中，获取焦点 */
.low_price > p + div > input:active,
.low_price > p + div > input:focus,
.low_price > div + div > button:active,
.low_price > div + div > button:focus {
  outline: 0;
  background-color: #fffdfd;
  box-shadow: 0 0 0 1px #0086f6;
}
/* 出发地下拉icon，出发时间下拉icon */
.low_price > p + div > i,
.low_price > div + div > i {
  font-size: 14px;
  font-weight: 700;
  position: absolute;
  right: 8%;
}
/* 出发时间 */
.low_price > div + div > button {
  width: 100%;
}

/* body-nth-child(3)下.detail_msg */
.index_body > div:nth-child(3) > div:nth-child(2),
.index_body > div:nth-child(4) > div:nth-child(2),
.index_body > div:nth-child(5) > div:nth-child(2) {
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 3px 8px 1px rgba(0, 0, 0, 0.08);
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
}
.detail_msg > .list {
  width: 30%;
  /* border: solid; */
  /* padding: 10px; */
}
/* body-nth-child(3)下.detail_msg的ul的 精选推荐*/
.detail_msg > .list > li:first-child {
  font-size: 18px;
  font-weight: 700;
  margin: 10px 0 15px;
}
/* body-nth-child(3)下.detail_msg的ul的第2个li*/
.detail_msg > .list > li:nth-child(2) {
  border: 1.5px solid #dddddd;
  border-radius: 8px;
  padding: 10px;
}
/* body-nth-child(3)下.detail_msg的ul的第2个li  */
.detail_msg > .list > li:nth-child(2) > ul {
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1.5px solid #dddddd;
  padding: 10px 0;
}
.detail_msg > .list > li:nth-child(2) > ul:first-child {
  padding-top: 0;
}
.detail_msg > .list > li:nth-child(2) > ul:last-child {
  padding-bottom: 0;
  border: 0;
}
/* body-nth-child(3)下.detail_msg的ul的第2个li的图片 */
.detail_msg > .list > li:nth-child(2) > ul > li:first-child {
  display: block;
  width: 35%;
}
.detail_msg > .list > li:nth-child(2) > ul > li:first-child > img {
  width: 100%;
  border-radius: 3px;
}
/* body-nth-child(3)下.detail_msg的ul的第2个li的地点，时间 */
.detail_msg > .list > li:nth-child(2) > ul > li:nth-child(2) {
  margin-left: 10px;
  width: 40%;
  padding-top: 8px;
  font-weight: 600;
}
.detail_msg > .list > li:nth-child(2) > ul > li:nth-child(2) > span {
  font-size: 16px;
}
.detail_msg > .list > li:nth-child(2) > ul > li:nth-child(2) > i.icon-tuxing {
  font-size: 16px;
  color: #999999;
}
.detail_msg > .list > li:nth-child(2) > ul > li:nth-child(2) > p {
  font-size: 14px;
  font-weight: normal;
  color: #999999;
  padding-top: 18%;
}
/* body-nth-child(3)下.detail_msg的ul的第2个li的价钱，折扣 */
.detail_msg > .list > li:nth-child(2) > ul > li:last-child {
  /* margin-left: 10px; */
  font-size: 14px;
  color: #999999;
}
.detail_msg > .list > li:nth-child(2) > ul > li:last-child > p:first-child {
  color: #ff7700;
  padding: 8px 0 20px 0;
}
.detail_msg
  > .list
  > li:nth-child(2)
  > ul
  > li:last-child
  > p:first-child
  > span:first-child {
  font-size: 18px;
  font-weight: bold;
}
.detail_msg > .list > li:nth-child(2) > ul > li:last-child > p:last-child {
  text-align: end;
}
/* 低价地图 */
.index_body > div:nth-child(4) > div:nth-child(2) {
  padding: 0;
}
/* 左边整个*/
.index_body > div:nth-child(4) .detail_msg {
  width: 40%;
  padding: 15px;
}

.index_body > div:nth-child(4) .detail_msg > ul {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.index_body > div:nth-child(4) .detail_msg > ul > li {
  margin-top: 20px;
}

.index_body > div:nth-child(4) .detail_msg > ul > li > ul:hover:after {
  content: "";
  border-radius: 4px;
  display: block;
  background: #0086f6;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 1;
  opacity: 0.9;
}
/* 杭州出发 */
.index_body > div:nth-child(4) .detail_msg > ul > li:first-child {
  font-size: 14px;
  color: #666666;
  margin-top: 10px;
}
.index_body > div:nth-child(4) .detail_msg > ul > li:first-child > i {
  font-size: 12px;
  font-weight: bolder;
  margin-left: 10px;
}
/* 出发日期 */
.index_body > div:nth-child(4) .detail_msg > ul > li:nth-child(2) {
  border: 1.5px solid #dddddd;
  border-radius: 5px;
  padding: 15px 17px;
  position: relative;
}
.index_body > div:nth-child(4) .detail_msg > ul > li:nth-child(2) > p {
  font-size: 12px;
  color: #999999;
}
.index_body > div:nth-child(4) .detail_msg > ul > li:nth-child(2) > input {
  border: 0;
  outline: 0;
  width: 40%;
  padding-top: 5px;
}
/* p下面第一个input */
.index_body
  > div:nth-child(4)
  .detail_msg
  > ul
  > li:nth-child(2)
  > input:not(:last-child) {
  font-size: 16px;
}

.index_body
  > div:nth-child(4)
  .detail_msg
  > ul
  > li:nth-child(2)
  > input
  + input {
  font-size: 14px;
  color: #999999;
  text-align: center;
  position: relative;
  bottom: 10px;
  margin-left: 15%;
}
/* 中线 */
.index_body > div:nth-child(4) .detail_msg > ul > li:nth-child(2) > .splitLine {
  height: 100%;
  border-left: 1.5px solid;
  border-image: -webkit-linear-gradient(
      /* to bottom, */ #fff 0,
      #ddd 50%,
      #fff 100%
    )
    20 20;
  position: absolute;
  top: 0%;
  left: 50%;
}

.index_body > div:nth-child(4) .detail_msg > ul > li:nth-child(2) ~ li {
  display: flex;
  justify-content: space-around;
}
.index_body > div:nth-child(4) .detail_msg > ul > li:nth-child(2) ~ li > ul {
  width: 44%;
  position: relative;
  cursor: pointer;
}

.index_body > div:nth-child(4) > div:nth-child(2) img {
  border-radius: 3px;
}

.index_body
  > div:nth-child(4)
  .detail_msg
  > ul
  > li:nth-child(2)
  ~ li
  > ul
  > li:first-child:after {
  content: "";
  display: block;
  background: linear-gradient(
    -180deg,
    rgba(0, 0, 0, 0.05) 0%,
    rgba(0, 0, 0, 0.4) 100%
  );
  border-radius: 3px;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 1;
}

.index_body > div:nth-child(4) .detail_msg .hasResult > li:nth-child(2),
.index_body > div:nth-child(4) .detail_msg .noResult > li:nth-child(2) {
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  position: absolute;
  top: 28%;
  left: 5%;
  z-index: 2;
}
.index_body > div:nth-child(4) .detail_msg .hasResult .price {
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
}
.index_body > div:nth-child(4) .detail_msg .hasResult > li:nth-child(2) > p + p,
.index_body > div:nth-child(4) .detail_msg .noResult > li:nth-child(2) > p + p {
  font-size: 12px;
  font-weight: normal;
}
/* index_body_body主体——nth-child(5) */
/* 航空公司特惠专区 */
.index_body > div:nth-child(5) > div:nth-child(2) {
  border-radius: 8px 8px 0 0;
}
.index_body > div:nth-child(5) > div:nth-child(2) {
  flex-direction: column;
}
.index_body > div:nth-child(5) > div:nth-child(2) > ul {
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: space-between;
  position: relative;
  text-align: center;
  font-size: 12px;
  color: #666666;
}

.index_body > div:nth-child(5) > div:nth-child(2) > ul > li {
  display: inline-block;
  width: 8%;
  border: 1.2px solid #dddddd;
  border-radius: 5px;
  margin-top: 1%;
  padding: 0.6% 0;
}

.index_body > div:nth-child(5) > div:nth-child(2) .iconfont {
  width: 2.5% !important;
  font-size: 20px;
  font-weight: 700;
  color: #aaaaaa;
  padding-top: 2.5%;
  border: 0;
}

.index_body > div:nth-child(5) > div:nth-child(2) > ul > li:hover {
  border-color: #007bff;
  font-weight: bold;
  color: #007bff;
}
.index_body > div:nth-child(5) > div:nth-child(2) > ul > li.checked {
  background-color: rgba(0, 134, 246, 0.08);
}

.index_body > div:nth-child(5) > div:nth-child(2) > ul > li > img {
  width: 40%;
  margin: 7% 10% 7% 10%;
}

.index_body > div:nth-child(5) > div:nth-child(2) > ul ~ div {
  display: flex;
  padding: 3% 3% 2% 1%;
  font-size: 12px;
  justify-content: space-between;
  align-items: center;
  height: 100px;
}
.index_body > div:nth-child(5) > div:nth-child(2) > ul ~ div > div:first-child {
  width: 23%;
}
.index_body > div:nth-child(5) > div:nth-child(2) > ul ~ div img {
  width: 100%;
}
.index_body
  > div:nth-child(5)
  > div:nth-child(2)
  > ul
  ~ div
  > div:nth-child(2) {
  width: 76%;
  height: 40%;
  line-height: 40px;
  margin-left: -10%;
}
.index_body > div:nth-child(5) > div:nth-child(2) > ul ~ div span {
  display: inline-block;
  color: #666666;
  white-space: nowrap;
  /* 允许单词内换行 */
  /* word-break: break-all; */
  /* 文本内容过多溢出隐藏 */
  overflow: hidden;
  /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用且不换行 */
  text-overflow: ellipsis;
  width: 90%;
}
.index_body > div:nth-child(5) > div:nth-child(2) > ul ~ div span ~ a {
  float: right;
  color: steelblue;
  padding-right: 10px;
}
.index_body > div:nth-child(5) > div:nth-child(2) > ul ~ div span ~ a:hover {
  color: #007bff;
}
.index_body > div:nth-child(5) > div:nth-child(3) {
  background-color: #f6f8fa;
  border-radius: 0 0 8px 8px;
  box-shadow: 0 3px 8px 1px rgba(0, 0, 0, 0.08);
  padding: 0 25px 35px 25px;
}
.index_body > div:nth-child(5) > div:nth-child(3) > ul {
  display: flex;
  flex-wrap: wrap;
  color: #999999;
  font-size: 14px;
  padding-top: 2%;
}
.index_body > div:nth-child(5) > div:nth-child(3) > ul:first-child > li + li {
  margin-left: 25px;
  color: #333333;
}
.index_body
  > div:nth-child(5)
  > div:nth-child(3)
  > ul:first-child
  > li
  + li:hover,
.index_body
  > div:nth-child(5)
  > div:nth-child(3)
  > ul:first-child
  > li
  + li:active,
.index_body
  > div:nth-child(5)
  > div:nth-child(3)
  > ul:first-child
  > li
  + li.checked {
  font-weight: bold;
  color: #0086f6;
  cursor: pointer;
}
.index_body > div:nth-child(5) > div:nth-child(3) > ul:nth-child(2) {
  justify-content: space-between;
}
.index_body > div:nth-child(5) > div:nth-child(3) > ul:nth-child(2) > li {
  padding: 13px;
  border: 1.2px solid #dddddd;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  width: 22%;
  background-color: #ffffff;
}

.index_body
  > div:nth-child(5)
  > div:nth-child(3)
  > ul:nth-child(2)
  > li:nth-child(4)
  ~ li {
  margin-top: 10px;
}

.index_body
  > div:nth-child(5)
  > div:nth-child(3)
  > ul:nth-child(2)
  > li
  > div:first-child {
  font-weight: bold;
  color: #333333;
}
.index_body
  > div:nth-child(5)
  > div:nth-child(3)
  > ul:nth-child(2)
  > li
  > div:first-child
  > p
  .iconfont {
  color: #999999;
  margin: 0 5px;
}
.index_body
  > div:nth-child(5)
  > div:nth-child(3)
  > ul:nth-child(2)
  > li
  > div:first-child
  > p:nth-child(2) {
  font-size: 12px;
  font-weight: normal;
  color: #999999;
  margin-top: 10px;
}
.index_body
  > div:nth-child(5)
  > div:nth-child(3)
  > ul:nth-child(2)
  > li
  > div:first-child
  > p
  > span {
  margin-left: 8px;
}

.index_body
  > div:nth-child(5)
  > div:nth-child(3)
  > ul:nth-child(2)
  > li
  > div:nth-child(2) {
  width: 25%;
}
.index_body
  > div:nth-child(5)
  > div:nth-child(3)
  > ul:nth-child(2)
  > li
  > div:nth-child(2)
  > p:first-child {
  color: #ff7700;
  float: right;
  font-size: 12px;
}
.index_body
  > div:nth-child(5)
  > div:nth-child(3)
  > ul:nth-child(2)
  > li
  > div:nth-child(2)
  > p:nth-child(2) {
  font-size: 12px;
  margin-top: 10px;
  float: right;
}
.index_body
  > div:nth-child(5)
  > div:nth-child(3)
  > ul:nth-child(2)
  > li
  > div:nth-child(2)
  > p:first-child
  > span {
  font-size: 16px;
  font-weight: bold;
}
</style>