<template>
  <div class="plane_select">
    <div class="body" id="body">
      <div class="first">
        <!-- 1 -->
        <select name="123" class="first_01">
          <option value="">单程</option>
          <option value="">往返</option>
          <option value="">多程</option>
        </select>
        <!-- 2 -->
        <div class="first_02">
          <input type="text" v-model="start_place_01" />
          <i class="iconfont icon-laihuijiantou"></i>
          <input type="text" v-model="end_place_01" />
        </div>
        <!-- 3 -->
        <div class="first_03">
          <!-- <input type="text" v-model="date_01" /> -->
          <!-- 起飞日期--日历组件 -->
          <div class="date_01">
            <div class="block">
              <el-date-picker
                v-model="date_01"
                type="date"
                placeholder="选择出发日期"
                :picker-options="pickerOptions"
                align="right"
              ></el-date-picker>
            </div>
          </div>
          <!-- <input type="text" v-model="date_back" placeholder="返回日期":picker-options="pickerOptions" /> -->
          <!-- 返程日期--日历组件 -->
          <div class="date_02">
            <div class="block">
              <el-date-picker
                v-model="date_back"
                type="date"
                placeholder="选择返程日期"
                @blur="getDate"
              ></el-date-picker>
            </div>
          </div>
          <button type="button">重新搜索</button>
          <p>
            <span>高级搜索</span>
            <i class="iconfont icon-jiantou2"></i>
          </p>
        </div>
      </div>
      <div class="second">
        <!-- nth-child(2) -->
        <p>
          <i class="iconfont icon-d-zhongyaogonggao"></i>
          <span>重要公告:</span>
        </p>
        <p>
          根据6月25日国务院应对新型冠状病毒肺炎疫情联防联控机制综合组印发的《关于做好精准健康管理推进人员有序流动的通知》要求：有中高风险等级地区旅居史的人员，跨地区流动时须持有到达目的地前7日内核酸检测阴性证明或能够出示包含核酸检测阴性信息的健康通行码“绿码”，到达目的地后，在测温正常且做好个人防护的前提下可自由有序流动。如无法提供上述核酸检测阴性信息，到达目的地后应当立即接受核酸检测或接受14天隔离医学观察。瞒报、谎报人员将承担法律责任。低风险等级地区人员持健康通行码“绿码”，在测温正常且做好个人防护的前提下可自由有序流动。疫情风险等级查询可通过国务院客户端小程序进行实时查询。
          以上信息供您参考，请在出行前务必确认目的地最新防控规则，合理安排出行。
          更新日期：2020年8月24日18:00
        </p>
      </div>

      <div class="third">
        <!-- nth-child(3) -->
        <!-- 左边 -->
        <div>
          <div>
            筛选<span>（共7条航班信息）</span>
            <button>清除全部</button>
          </div>
          <ul>
            <li>
              直飞/中转
              <i class="iconfont icon-iconfontjiantou5"></i>
              <ul>
                <li>
                  <input type="checkbox" name="" id="" value="" />直飞
                  <span> ￥<span>234</span> </span>
                </li>
                <li>
                  <input type="checkbox" name="" id="" value="" />中转
                  <span>￥<span>234</span></span>
                </li>
                <li>
                  <input type="checkbox" name="" id="" value="" />空铁
                  <span>￥<span>234</span></span>
                </li>
              </ul>
            </li>
            <li>
              起飞时段
              <i class="iconfont icon-iconfontjiantou5"></i>
              <ul>
                <li>
                  <input type="checkbox" name="" id="" value="" />上午（6-12点）
                  <span> ￥<span>234</span> </span>
                </li>
                <li>
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    value=""
                  />下午（12-18点）
                  <span> ￥<span>234</span> </span>
                </li>
                <li>
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    value=""
                  />晚上（18-24点）
                  <span> ￥<span>234</span> </span>
                </li>
              </ul>
            </li>
            <li>
              航空公司
              <i class="iconfont icon-iconfontjiantou5"></i>
              <ul>
                <li>
                  <input type="checkbox" name="" id="" value="" />南方航空
                  <span> ￥<span>234</span> </span>
                </li>
                <li>
                  <input type="checkbox" name="" id="" value="" />厦门航空）
                  <span> ￥<span>234</span> </span>
                </li>
                <li>
                  <input type="checkbox" name="" id="" value="" />山东航空
                  <span> ￥<span>234</span> </span>
                </li>
              </ul>
            </li>
            <li>
              计划机型
              <i class="iconfont icon-iconfontjiantou5"></i>
              <ul>
                <li>
                  <input type="checkbox" name="" id="" value="" />大型
                  <span> ￥<span>234</span> </span>
                </li>
                <li>
                  <input type="checkbox" name="" id="" value="" />中型
                  <span> ￥<span>234</span> </span>
                </li>
                <li>
                  <input type="checkbox" name="" id="" value="" />小型
                  <span> ￥<span>234</span> </span>
                </li>
              </ul>
            </li>
            <li>
              舱位<i class="iconfont icon-iconfontjiantou5"></i>
              <ul>
                <li>
                  <input type="checkbox" name="" id="" value="" />经济舱
                  <span> ￥<span>234</span> </span>
                </li>
                <li>
                  <input type="checkbox" name="" id="" value="" />公务/头等舱
                  <span> ￥<span>234</span> </span>
                </li>
              </ul>
            </li>
            <li>
              行程单
              <i class="iconfont icon-iconfontjiantou5"></i>
              <ul>
                <li>
                  <input type="checkbox" name="" id="" value="" />南方航空
                  <span> ￥<span>234</span> </span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <!-- 右边 -->
        <div>
          <!-- 1 -->
          <ul>
            <li><i class="iconfont icon-arrow-left"></i></li>
            <li class="checked">
              <p><span>10-30</span><span>周一</span></p>
              <p>￥<span>345</span></p>
            </li>
            <li>
              <p><span>10-30</span><span>周二</span></p>
              <p>￥<span>345</span></p>
            </li>
            <li>
              <p><span>10-30</span><span>周三</span></p>
              <p>￥<span>345</span></p>
            </li>
            <li>
              <p><span>10-30</span><span>周四</span></p>
              <p>￥<span>345</span></p>
            </li>
            <li>
              <p><span>10-30</span><span>周五</span></p>
              <p>￥<span>345</span></p>
            </li>
            <li>
              <p><span>10-30</span><span>周六</span></p>
              <p>￥<span>345</span></p>
            </li>
            <li>
              <p><span>10-30</span><span>周日</span></p>
              <p>￥<span>345</span></p>
            </li>
            <li><i class="iconfont icon-iconfontjiantou5"></i></li>
            <li>
              <i class="iconfont icon-rili-copy-copy-copy"></i>查看365天低价
            </li>
          </ul>
          <!-- 2 表头-->
          <ul>
            <li>航班信息</li>
            <li>
              <span>起飞时间</span
              ><i class="iconfont icon-sort-double-down"></i>
            </li>
            <li>
              <span>到达时间</span
              ><i class="iconfont icon-sort-double-down"></i>
            </li>
            <li>
              <span>到达准点率</span
              ><i class="iconfont icon-sort-double-down"></i>
            </li>
            <li>
              <span>价格</span><i class="iconfont icon-sort-double-down"></i>
            </li>
            <li>伤残军警通道</li>
          </ul>
          <!-- 3 @click="toPlaneselect"-->
          <ul>
            <li>
              <p>往返特惠</p>
              <p>
                <span>西安</span>
                <i class="iconfont icon-jiantou_zuoyouqiehuan"></i>
                <span>成都</span>
              </p>
            </li>
            <li>
              <div>
                <p>￥<span>700</span></p>
                <p>往返总价</p>
              </div>
              <i class="iconfont icon-iconfontjiantou5"></i>
            </li>
          </ul>
          <!-- 4 直飞方案-->
          <ul>
            <li v-for="(item, index) of results" :key="index">
              <!-- 航班信息 -->
              <div>
                <div>
                  <div>
                    <img src="/img/select/small/TV.png" alt="" />
                  </div>
                  <span>{{ item.flight_company }}</span
                  ><span>{{ item.flight_number }}</span>
                </div>
                <div>空客319（中型）</div>
              </div>
              <!-- 起飞时间 -->
              <div>
                <p>
                  {{
                    item.flight_start_time.substr(
                      item.flight_start_time.indexOf(" ") + 1,
                      5
                    )
                  }}
                </p>
                <p>{{ item.flight_start_airport }}T2</p>
                <div
                  class="timeout"
                  @mouseover="appear"
                  @mouseleave="disappear"
                >
                  +1天
                </div>
              </div>
              <!--  -->
              <div>
                <i class="iconfont icon-hangbanjiantou-"></i>
              </div>
              <!-- 到达时间 -->
              <div>
                <p>
                  {{
                    item.flight_end_time.substr(
                      item.flight_end_time.indexOf(" ") + 1,
                      5
                    )
                  }}
                </p>
                <p>{{ item.flight_end_airport }}T2</p>
              </div>
              <!-- 到达准点率 -->
              <div>
                <p>到达准点率</p>
                <p>90%</p>
              </div>
              <!-- 价格 -->
              <div>
                <p>
                  <span>￥</span>
                  <span>488</span>
                  <span>起</span>
                </p>
                <p>经济舱4.3折</p>
              </div>
              <!-- 订票 -->
              <div @click="booking">
                订票<i class="iconfont icon-jiantou2"></i>
              </div>
              <!-- 弹出提示框 -->
              <div class="flight_end_time">
                到达时间为第2天，
                {{
                  item.flight_end_time.slice(
                    0,
                    item.flight_end_time.lastIndexOf(":")
                  )
                }}
              </div>
            </li>
          </ul>
          <!-- 5.中转方案 -->
          <ul>
            <li>
              <div>中转组合</div>
              <div @click="tanchuDetail">[购买须知]</div>
              <!-- 购买须知详情 -->
              <!-- <div class="outDiv"> -->
               <div class="buyDetail" >
                <!-- 表头 -->
                <p>中转购买须知</p>
                <!-- 详情 -->
                <ul>
                  <li>1.每段航班均需缴纳机建和燃油税</li>
                  <li>
                    2.建议购买同一航空公司的中转联程机票，便于确认机票，及发生航班延误时保障权益
                  </li>
                  <li>
                    3.因天气、航空公司、铁路部门及突发事件等原因，可能影响乘客登机或乘车。请确认换乘距离和中转时间，以便确定合适的航班、车次
                  </li>
                  <li>
                    4.因航空公司、铁路方面原因或不可抗力原因，影响乘客行程所产生的损失，属于携程旅行网免责范畴之内。请及时关注天气及路况信息
                  </li>
                  <li>
                    5.如发生航班延误，您有权索要延误证明以便于与航空公司协商处理
                  </li>
                  <li>
                    参考：《中华人民共和国民用航空法》第一百二十六条
                    旅客、行李或者货物在航空运输中因延误造成的损失，承运人应当承担责任；但是，承运人证明本人或者其受雇人、代理人为了避免损失的发生，已经采取一切必要措施或者不可能采取此种措施的，不承担责任
                  </li>
                  <li @click="closeDetail">关闭</li>
                </ul>
                </div>
              <!-- </div> -->
            </li>
            <li>
              <div>
                <i class="iconfont icon-flight"></i>
                <span>中转自由搭配</span>
                <span>不满意现有中转组合？自选两程航班拼接，时间更灵活</span>
              </div>
              <div>
                <span>￥</span>
                <span>488</span>
                <span>起</span>
                <span>去搭配</span>
              </div>
            </li>
            <li>
              <ul>
                <!-- 1. -->
                <li>
                  <!-- 航班信息 -->
                  <div>
                    <ul>
                      <li><img src="/img/select/small/TV.png" alt="" /></li>
                      <li><span>华夏航空</span><span>G52917</span></li>
                    </ul>
                    <ul>
                      <li><img src="/img/select/small/TV.png" alt="" /></li>
                      <li><span>华夏航空</span><span>G52917</span></li>
                    </ul>
                  </div>
                  <!-- 起飞时间 -->
                  <div>
                    <p>21:05</p>
                    <p>咸阳国际机场T2</p>
                  </div>
                  <!-- 中转信息 -->
                  <div>
                    <!-- 转机停留 -->
                    <div>停留11时10分</div>
                    <div><i class="iconfont icon-hangbanjiantou-"></i></div>
                    <!-- 转机地点 -->
                    <div>达州</div>
                  </div>
                  <!-- 到达时间 -->
                  <div>
                    <p>22:45</p>
                    <p>双流国际机场T2</p>
                  </div>
                  <!-- 到达准点率 -->
                  <div>
                    <p>到达准点率</p>
                    <p>90%</p>
                    <p>90%</p>
                  </div>
                  <!-- 价格 -->
                  <div>
                    <p>
                      <span>￥</span>
                      <span>488</span>
                      <span>起</span>
                    </p>
                    <p>经济舱4.3折</p>
                    <p>经济舱4.3折</p>
                  </div>
                  <!-- 订票 -->
                  <div>订票<i class="iconfont icon-jiantou2"></i></div>
                </li>
                <!-- 2 -->
                <li>
                  <!-- 航班信息 -->
                  <div>
                    <ul>
                      <li><img src="/img/select/small/TV.png" alt="" /></li>
                      <li><span>华夏航空</span><span>G52917</span></li>
                    </ul>
                    <ul>
                      <li><img src="/img/select/small/TV.png" alt="" /></li>
                      <li><span>华夏航空</span><span>G52917</span></li>
                    </ul>
                  </div>
                  <!-- 起飞时间 -->
                  <div>
                    <p>21:05</p>
                    <p>咸阳国际机场T2</p>
                  </div>
                  <!-- 中转信息 -->
                  <div>
                    <!-- 转机停留 -->
                    <div>停留11时10分</div>
                    <div><i class="iconfont icon-hangbanjiantou-"></i></div>
                    <!-- 转机地点 -->
                    <div>达州</div>
                  </div>
                  <!-- 到达时间 -->
                  <div>
                    <p>22:45</p>
                    <p>双流国际机场T2</p>
                  </div>
                  <!-- 到达准点率 -->
                  <div>
                    <p>到达准点率</p>
                    <p>90%</p>
                    <p>90%</p>
                  </div>
                  <!-- 价格 -->
                  <div>
                    <p>
                      <span>￥</span>
                      <span>488</span>
                      <span>起</span>
                    </p>
                    <p>经济舱4.3折</p>
                    <p>经济舱4.3折</p>
                  </div>
                  <!-- 订票 -->
                  <div>订票<i class="iconfont icon-jiantou2"></i></div>
                </li>
              </ul>
            </li>
          </ul>
          <!-- 6.更多方案 -->
          <ul>
            <li>
              <div>更多出行方案</div>
              <div>[购买须知]</div>
            </li>
            <li>
              <ul>
                <!-- 1. -->
                <li>
                  <!-- 航班信息 -->
                  <div>
                    <ul>
                      <li><img src="/img/select/small/TV.png" alt="" /></li>
                      <li><span>华夏航空</span><span>G52917</span></li>
                    </ul>
                    <ul>
                      <li><img src="/img/select/small/TV.png" alt="" /></li>
                      <li><span>普通列车</span><span>K787</span></li>
                    </ul>
                  </div>
                  <!-- 起飞时间 -->
                  <div>
                    <p>21:05</p>
                    <p>咸阳国际机场T2</p>
                  </div>
                  <!-- 中转信息 -->
                  <div>
                    <!-- 转机停留 -->
                    <div>停留11时10分</div>
                    <div><i class="iconfont icon-hangbanjiantou-"></i></div>
                    <!-- 转机地点 -->
                    <div>达州</div>
                  </div>
                  <!-- 到达时间 -->
                  <div>
                    <p>22:45</p>
                    <p>双流国际机场T2</p>
                  </div>
                  <!-- 到达准点率 -->
                  <div>
                    <p>到达准点率</p>
                    <p>90%</p>
                  </div>
                  <!-- 价格 -->
                  <div>
                    <p>
                      <span>￥</span>
                      <span>488</span>
                      <span>起</span>
                    </p>
                    <p><span>经济舱</span>+<span>一等座</span></p>
                  </div>
                  <!-- 订票 -->
                  <div>订票<i class="iconfont icon-jiantou2"></i></div>
                </li>
                <!-- 2 -->
                <li>
                  <!-- 航班信息 -->
                  <div>
                    <ul>
                      <li><img src="/img/select/small/TV.png" alt="" /></li>
                      <li><span>华夏航空</span><span>G52917</span></li>
                    </ul>
                    <ul>
                      <li><img src="/img/select/small/TV.png" alt="" /></li>
                      <li><span>普通列车</span><span>K787</span></li>
                    </ul>
                  </div>
                  <!-- 起飞时间 -->
                  <div>
                    <p>21:05</p>
                    <p>咸阳国际机场T2</p>
                  </div>
                  <!-- 中转信息 -->
                  <div>
                    <!-- 转机停留 -->
                    <div>停留11时10分</div>
                    <div><i class="iconfont icon-hangbanjiantou-"></i></div>
                    <!-- 转机地点 -->
                    <div>达州</div>
                  </div>
                  <!-- 到达时间 -->
                  <div>
                    <p>22:45</p>
                    <p>双流国际机场T2</p>
                  </div>
                  <!-- 到达准点率 -->
                  <div>
                    <p>到达准点率</p>
                    <p>90%</p>
                  </div>
                  <!-- 价格 -->
                  <div>
                    <p>
                      <span>￥</span>
                      <span>488</span>
                      <span>起</span>
                    </p>
                    <p><span>经济舱</span>+<span>一等座</span></p>
                  </div>
                  <!-- 订票 -->
                  <div>订票<i class="iconfont icon-jiantou2"></i></div>
                </li>
              </ul>
            </li>
          </ul>
          <!-- 7 前一天/后一天-->
          <ul>
            <li>前一天（11/01）</li>
            <li>后一天（11/03）</li>
          </ul>
          <!-- 8 航班信息免责声明: -->
          <ul>
            <li>航班信息免责声明:</li>
            <li>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;携程旅行网提供的各类航班相关的信息，包括但不限于舱位价格、餐食、起降准点率等，来源于中国航信、全国各大机场、航空公司及相关部门公布数据。由于这些信息可能随时变化，以及网络传输问题，携程提供的此类信息可能并非最新或存在误差，因此仅供旅客作为一般参考，任何公司或个人不能将此作为携程做出任何承诺或做出任何保证的依据。
            </li>
            <li>
              <div>
                <a href="javascript:;">国内机票查询</a> |
                <a href="javascript:;">西安</a> |
                <a href="javascript:;">西安到成都</a> | 西安到成都 2020-11-02
              </div>
              <div>
                <div>
                  <p>数据信息由</p>
                  <p><span>中国民航信息网络股份有限公司</span>提供</p>
                </div>
                <div>
                  <img
                    src="/img/select/small/中国民航信息网络股份有限公司.jpg"
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="returnTop" @click="toTop">
        <i class="iconfont icon-huidingbu"></i>
        <p>回顶部</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "plane_select",
  // props:["entry"],

  data() {
    return {
      // 可选时间
      pickerOptions:{
        disabledDate(time) {
          return time.getTime() < Date.now()-3600*24*1000;
          console.log(Date.now());
        },
      },
      // 当前窗口滚动条纵向位置
      location:"0",
      // 航班id
      flight_id: "",
      // 把从数据库请求的数据根据条件筛选的结果
      results: [],
      // 起飞时间
      flight_start_time: "",
      // 到达时间
      flight_end_time: "",
      //地点，暂时先用写死的，
      start_place_01: "", //页面加载获取参数
      end_place_01: "", //页面加载获取参数
      date_01: "", //页面加载获取参数
      date_back: "", //页面初始加载可以为空，
    };
  },
  mounted() {
    // 1.获取地址栏参数(数组)
    let urlArr = this.url();
    let toUrl = `${urlArr[0]}&${urlArr[1]}`;
    //  console.log(toUrl);
    // 2.发送axios请求(带参)冒号传参--接口用params获取
    // 只发送起始地和目的地查询，接收到结果再判断起始时间是否符合
    this.axios.get(`/user/select_detail_start_end/${toUrl}`).then((res) => {
      // 获取数据库返回数据
      // 把从数据库拿到的数据放到data的一个变量数组中去
      // 打散数组
      let arr = [...res.data.results];
      // 遍历得到每个符合要求的航班信息
      arr.forEach((item) => {
        // 从数据库获取的是字符串类型的日期时间，转换为Date对象(用method中定义的time())才可以使用.getTime()方法转换为毫秒数进行比较
        let time = this.time(item.flight_start_time);
        let urlTime = this.time(urlArr[2]);

        // console.log(time);
        if (urlTime < time) {
          this.results.push(item);

          // 从数据库获得的数据格式是：'xxxx-xx-xx x时x分x秒'
          // 获取起飞的时刻(格式：x时x分)--字符串类型(在html处理)
        }
      });
    });
    // console.log(this.results);
    // 3.页面的输入框获取传的参数
    this.start_place_01 = urlArr[0];
    this.end_place_01 = urlArr[1];
    this.date_01 = urlArr[2];
    // 
    // var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
    // console.log(scrollTop);
  },
  methods: {
    // 回顶部
    toTop(){
      // window.scrollTo(a,b)主动控制滚动到哪个位置,a表示水平位置，一般为0，b表示页面纵向位置，可任意定位，回顶部一般为0
       window.scrollTo(0, 0)
    },
    // 单击弹出中转须知
    tanchuDetail(){
      // let outEle = document.querySelector('.outDiv');
      let buyEle = document.querySelector('.buyDetail');
      // console.log(Ele);
      // outEle.style.display = 'block';
      buyEle.style.display = 'block';
    },
    // 关闭中转须知
    closeDetail(){
      let buyEle = document.querySelector('.buyDetail');
      // console.log(Ele);
      buyEle.style.display = 'none';
    },
    // 获取地址栏参数
    url() {
      // 1.用this.$route.params.toUrl直接获取地址的参数
      //  对参数进行处理放进urlArr数组中，用下标获取(查询条件)，
      //  固定urlArr[0]--出发地点,
      //      urlArr[1]--到达地点,
      //      urlArr[2]--出发日期,
      let urlArr = this.$route.params.toUrl.split("&");
      return urlArr;
      // 2.window.location.href,可以获取当前地址栏里的完整url信息,控制页面跳转；
      //   window.location.hash可以获取当前地址栏里的组件url信息
      //   获取地址栏参数需要对url进行处理(切割)
      // let url = decodeURI(window.location.hash);
      // console.log(url);
      // let urlStr = url.slice(url.lastIndexOf("/") + 1);
    },
    // 字符串日期转计算机毫秒数
    time(t) {
      // 转换为Date对象，再转换为毫秒数
      let time = new Date(t.replace(/-/g, "/")).getTime();
      return time;
    },

    toPlaneselect() {
      this.$router.push("/planeSelect");
      this.$router.go(0);
    },
    // 到达时间超过当天mouseover
    appear(e) {
      let divELe = e.target.parentElement.parentElement.querySelector(
        ".flight_end_time"
      );
      divELe.style.display = "block";
      // console.log(divELe);
    },
    disappear(e) {
      let divELe = e.target.parentElement.parentElement.querySelector(
        ".flight_end_time"
      );
      divELe.style.display = "none";
    },

    //组价失去焦点获取输入框的值
    getDate() {
      // 组件本身失去焦点获取的是值是Date类型，转字符串类型后默认格式2020/12/20不能顺利路由传参，故修改格式为2020-12-20
      this.date = this.date.toString().split("/").join("-");
      // console.log(this.date);
    },
    // 预订
    booking() {
      this.$router.push("/planePay");
      this.$router.go(0);
    },
  },
  watch:{
    location(){
      let scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
      // if(scrollTop >= 195){
        console.log(200);
      // };
    },
  }
};
</script>

<style>
.plane_select .el-input__inner {
  width: 170px !important;
  height: 28px !important;
  border: 0.8px solid #999999 !important;
  border-radius: 0 !important;
}
.plane_select .el-date-editor el-input {
  width: 100% !important;
}
.plane_select .el-date-editor.el-input[data-v-5acef1f9],
.el-date-editor.el-input__inner[data-v-5acef1f9] {
  height: 26px !important;
  width: 180px !important;
}
.plane_select .el-input__prefix {
  top: -6px !important;
}
/*  */
.el-input__icon.el-icon-circle-close{
  line-height: 30px !important;
  margin-right: 10px !important;
}
</style>

<style lang="scss" scoped>
$color-3: #333333;
$color-6: #666666;
$color-9: #999999;
$color-c: #cccccc;
$color-d: #dddddd;
$color-f: #ffffff;

.body {
  width: 1180px;
  margin: 0 auto;
  > div {
    border-radius: 8px;
    margin-top: 15px;
  }
  // .outDiv{
  //   z-index: 5;
  //   width: 1000px;
  //   height: 1120px;
  //   position: absolute;
  //   top: 0;left: 0;
  //   background: rgba(0,0,0,0.5);
  //   display: none;
  // }
  // 中转购买须知
  .buyDetail {
    z-index: 10;
    display: none;
    position: fixed;
    width: 650px;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50.1%);
    box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 15px;
    background-color: rgb(255, 255, 255);
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #67a1e1;
    background: #fff;
    margin: 0 auto;
    font-size: 14px;
    line-height: 1.5;
    color: #333;
    >p{
      font-size: 16px;
      display: block;
      &::after{
        content: "";
        display: block;
        width: 650px;height: 2px;
        background: #51a2ff;
        margin: 5px 0;

      }
    }
    >ul>li:last-child{
      width: 80px;
      background: #67a1e1;
      color: #ffffff;
      text-align: center;
      border-radius: 5px;
      padding: 5px 10px;
      margin:5px auto 0px;

    }
  }

}

// 搜索栏
.first {
  background-color: $color-f;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  // margin-top: 15px;
  input,
  > .first_01 {
    height: 26px;
    padding: 0 10px;
    border: 0;
    outline: 0.9px solid $color-9;
    &:focus {
      background-color: #f1f9ff;
      outline: 0.8px solid #0074d9;
    }
  }
  > .first_01 {
    width: 8%;
  }

  > .first_02 {
    // margin-left: 20px;
    // 起飞地点输入框
    > input:first-child {
      background: url(/img/select/small/航班信息.png) no-repeat 5px center;
      padding-left: 35px;
    }
    // 到达地点输入框
    > input:last-child {
      background: url(/img/select/small/飞机航班到达-01.png) no-repeat 5px
        center;
      background-size: 12%;
      padding-left: 35px;
    }
    input {
      width: 150px;
      &:focus {
        background-color: #f1f9ff;
      }
    }
    i {
      font-size: 14px;
      color: $color-c;
      text-align: center;
      line-height: 26px;
    }
  }
  > .first_03 {
    display: flex;

    > button {
      margin-left: 1.25rem;
      background-color: #48a4ff;
      padding: 0 15px;
      outline: 0;
      border: 0;
      border-radius: 5px;
      color: $color-f;
    }
    > p {
      margin-left: 1.25rem;
      color: #0066cc;
      font-size: 14px;
      text-align: center;
      line-height: 26px;
      font-weight: lighter;
      > span {
        &:hover {
          text-decoration: underline;
        }
      }
      > i {
        font-size: 14px;
      }
    }
  }
}

.second {
  // margin-top: 15px;
  padding: 15px;
  border-radius: 8px;
  background-color: #fff9eb;
  display: flex;
  > p {
    display: block;
    line-height: 1.5;
    font-size: 12px;
  }
  > p:first-child {
    width: 300px;
    color: red;
    font-weight: bolder;
    > i {
      font-size: 12px;
    }
  }
}
// 详情list
.third {
  display: flex;
  // 左边开始
  > div:first-child {
    width: 20%;
    // 筛选开始
    > div {
      padding: 10px 0;
      display: flex;
      align-items: center;
      position: relative;
      > span {
        font-size: 12px;
        font-weight: lighter;
      }
      > button {
        background-color: $color-f;
        border: 1px solid $color-d;
        border-radius: 5px;
        padding: 5px;
        font-size: 12px;
        font-weight: lighter;
        // margin-left: 60px;
        // float: right;
        outline: 0;
        position: absolute;
        right: 0;
        &:hover {
          background-color: #fafafa;
        }
      }
    }
    // 筛选结束
    // 列表开始
    > ul {
      background-color: $color-f;
      > li {
        font-size: 16px;
        padding: 10px;
        display: flex;
        position: relative;
        align-items: center;
        font-size: 14px;
        border-top: 1px solid $color-d;
        > i {
          color: $color-c;
          position: absolute;
          right: 10px;
        }
        > ul {
          border-left: 0;
          width: 200px;
          background-color: $color-f;
          position: absolute;
          left: 236px;
          top: -1px;
          font-size: 12px;
          font-weight: lighter;
          > li {
            padding: 10.5px;
            line-height: 18px;
            > input {
              margin-right: 5px;
              vertical-align: middle;
            }
            > span {
              float: right;
              > span {
                color: #ff6600;
              }
            }
          }
          > li:first-child {
            border-width: 1px 1px 0 0;
            border-style: solid;
            border-color: $color-d;
          }
          > li:nth-child(n + 2) {
            border-left: 1px solid $color-d;
            border-right: 1px solid $color-d;
          }
          > li:last-child {
            border-bottom: 1px solid $color-d;
          }
        }
      }
      > li:first-child {
        border-top: 1px solid #48a4ff;
      }
      // 下拉选项框
      > li {
        > ul {
          display: none;
        }
        &:hover {
          > ul {
            display: block;
            z-index: 5;
          }
        }
      }
    }
  }
  // 列表结束
  // 左边结束
  // 右边开始
  > div:nth-child(2) {
    width: 78%;
    padding: 10px 0;
    margin-left: 2%;
    > ul {
      display: flex;
      margin-bottom: 10px;
    }
    // 1.星期显示
    > ul:first-child {
      background-color: $color-f;
      align-items: center;
      justify-content: space-between;
      text-align: center;
      font-size: 12px;
      > li {
        padding: 10px;
        border-bottom: 1px solid #5d9ffb;
        height: 39px;
      }
      // 选中第2个到倒数第3个
      > li:nth-last-child(n + 3):not(:first-child) {
        width: 20%;
        border-left: 1px solid $color-d;
        > p:first-child {
          > span {
            margin-right: 5px;
          }
        }
        > p:nth-child(2) {
          color: #ff6600;
          font-size: 18px;
        }
        &:hover {
          cursor: pointer;
          background-color: #5d9ffb;
          border-left: 0;
          color: $color-f;
          > p:nth-child(2) {
            color: $color-f;
          }
        }
      }
      > li:first-child,
      > li:nth-child(9) {
        width: 60px;
        font-size: 18px;
        font-weight: bolder;
        line-height: 39px;
        &:hover {
          > i {
            color: #5d9ffb;
          }
        }
      }
      > li:nth-child(9) {
        border-left: 1px solid $color-d;
      }
      // 选中时边框样式
      .checked {
        border-width: 3px 1px 0;
        border-style: solid;
        border-color: #5d9ffb !important;
        padding-top: 8px;
      }
      > li:last-child {
        border-left: 1px solid $color-d;
        width: 20%;
        &:hover {
          cursor: pointer;
        }
      }
    }
    // 2.列表项
    > ul:nth-child(2) {
      background-color: $color-f;
      font-size: 14px;
      color: $color-6;
      font-weight: lighter;
      padding: 5px 0;
      align-items: center;
      > li {
        &:hover {
          > span {
            color: #0268cd;
          }
        }
      }
      > li:nth-child(n + 2):not(:last-child) {
        &:hover {
          cursor: pointer;
        }
      }
      > li:first-child {
        margin-left: 40px;
      }
      > li:nth-child(2) {
        margin-left: 90px;
      }
      > li:nth-child(3) {
        margin-left: 210px;
      }
      > li:nth-child(4) {
        margin-left: 45px;
      }
      > li:nth-child(5) {
        margin-left: 55px;
      }
      > li:nth-child(6) {
        margin-left: 50px;
        border-radius: 4px;
        background: #ff8b26;
        color: $color-f;
        padding: 5px;
      }
    }
    // 3.往返特惠
    > ul:nth-child(3) {
      justify-content: space-between;
      padding: 10px;
      background-color: $color-f;
      > li:first-child {
        font-weight: bold;
        color: #555555;
        > p:first-child {
          font-size: 14px;
        }
        > p:nth-child(2) {
          padding: 10px 0 0 10px;
          > i {
            color: $color-9;
          }
        }
      }
      > li:nth-child(2) {
        display: flex;
        align-items: center;
        > div {
          font-size: 12px;
          > p:first-child {
            color: #ff6600;
            > span {
              font-size: 24px;
            }
          }
          > p:nth-child(2) {
            color: $color-6;
            text-align: right;
          }
        }
        > i {
          color: $color-9;
        }
      }
    }
    // 4 直飞方案
    > ul:nth-child(4) {
      flex-direction: column;
      > li {
        display: flex;
        background-color: $color-f;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        font-weight: lighter;
        text-align: center;
        position: relative;
        > div {
          font-size: 12px;
        }
        // 航班信息
        > div:first-child {
          > div:first-child {
            display: flex;
            // img
            > div {
              width: 20px;
              // border: 1px solid;
              margin-right: 5px;
            }
            // 航班号
            // >span{
            // }
          }
          > div:nth-child(2) {
            margin-left: 25px;
          }
        }
        // 起飞时间/到达时间
        > div:nth-child(2),
        > div:nth-child(4) {
          // position: relative;
          > p:first-child {
            font-size: 24px;
            font-weight: bold;
          }
          > .timeout {
            color: #0066cc;
            position: absolute;
            top: 20px;
            right: 355px;
            border-style: none none dashed none;
          }
        }
        > div:nth-child(3) {
          > i {
            color: $color-c;
          }
        }
        // 到达准点率
        > div:nth-child(5) {
          // >p:first-child{}
          > p:nth-child(2) {
            position: relative;
            top: 9px;
          }
        }
        // 价钱
        > div:nth-child(6) {
          > p:first-child {
            > span:first-child {
              display: inline-block;
              margin-top: 5px;
              vertical-align: top;
              font-weight: normal;
            }
            > span:nth-child(2) {
              color: #ff6600;
              font-size: 28px;
              font-weight: normal;
            }
            // >span:nth-child(3){}
          }
          // >p:nth-child(2){}
        }
        // 订票
        > div:nth-child(7) {
          background: linear-gradient(to right, #fcad00, #ff7528);
          padding: 3px 10px;
          color: $color-f;
          font-weight: bold;
          border-radius: 5px;
          margin-left: 5px;
          height: 25px;
          line-height: 25px;
        }
        > .flight_end_time {
          // z-index: 3;
          border: 1px solid #0066cc;
          position: absolute;
          top: 40px;
          right: 230px;
          padding: 5px 10px;
          background-color: #ffffff;
          display: none;
        }
      }
      > li + li {
        margin-top: 10px;
      }
    }
    // 5 中转方案
    > ul:nth-child(5) {
      display: flex;
      flex-direction: column;

      > li:nth-child(2) ~ li {
        > ul > li {
          margin-top: 10px;
          > div {
            text-align: center;
          }
        }
      }
      > li:first-child {
        display: flex;
        align-items: center;
        border-bottom: 1px solid #51a2ff;
        margin-bottom: 2px;
        // position: relative;

        div:first-child {
          background-color: $color-f;
          padding: 8px 15px;
          color: #0080ff;
          margin-right: 10px;
          border-width: 3px 1px 0;
          box-shadow: 0 -2px 6px 0 rgba(93, 159, 231, 0.4);
          border-color: #51a2ff;
          border-style: solid;
          position: relative;
          &::after {
            content: "";
            display: block;
            width: 94px;
            height: 1px;
            background-color: $color-f;
            position: absolute;
            bottom: -1px;
            left: 0;
          }
        }
        > div:nth-child(2) {
          font-size: 12px;
          font-weight: lighter;
          color: #0066cc;
          &:hover {
            text-decoration: underline;
            cursor: pointer;
          }
        }
        // >div:nth-child(3){}
      }
      > li:nth-child(2) {
        background-color: #fff9ea;
        padding: 20px 10px;
        border: 1px solid #ffc471;
        font-weight: lighter;
        display: flex;
        justify-content: space-between;
        align-items: center;
        > div:first-child {
          > i {
            font-size: 28px;
            color: red;
          }
          > span {
            margin-left: 10px;
          }
          > i + span {
            color: red;
          }
          > span:last-child {
            font-size: 12px;
          }
        }
        > div:nth-child(2) {
          > span:first-child {
            font-size: 12px;
            font-weight: lighter;
          }
          > span:nth-child(2) {
            color: #ff6600;
            font-size: 24px;
            font-weight: bold;
          }
          > span:nth-child(3) {
            font-size: 12px;
            font-weight: lighter;
          }
          // 订票
          > span:nth-child(4) {
            background: linear-gradient(to right, #fcad00, #ff7528);
            padding: 3px 10px;
            color: $color-f;
            font-weight: bold;
            border-radius: 5px;
            margin-left: 5px;
          }
        }
      }
      > li:nth-child(3) {
        > ul {
          > li {
            background-color: $color-f;
            display: flex;
            align-items: center;
            font-size: 12px;
            font-weight: lighter;
            justify-content: space-between;
            padding: 10px;
            > div:first-child {
              > ul {
                display: flex;
                align-items: center;
                > li:first-child {
                  width: 15%;
                }
                > li:nth-child(2) {
                  // font-size: 12px;
                  margin-left: 3px;
                }
              }
            }
            // 起飞时间/到达时间
            > div:nth-child(2),
            > div:nth-child(4) {
              > p:first-child {
                font-size: 24px;
                font-weight: bold;
              }
            }
            > div:nth-child(3) {
              i {
                color: $color-c;
              }
              > div:nth-child(3) {
                color: #0066cc;
                margin-top: 10px;
              }
            }
            // 准点率
            > div:nth-child(5) {
              > p:not(:first-child) {
                position: relative;
                top: 15px;
              }
            }
            // 价钱
            > div:nth-child(6) {
              > p:first-child {
                > span:first-child {
                  display: inline-block;
                  margin-top: 5px;
                  vertical-align: top;
                  font-weight: normal;
                }
                > span:nth-child(2) {
                  color: #ff6600;
                  font-size: 28px;
                  font-weight: normal;
                }
                // >span:nth-child(3){}
              }
            }
            // 订票
            > div:last-child {
              background: linear-gradient(to right, #fcad00, #ff7528);
              padding: 3px 10px;
              color: $color-f;
              font-weight: bold;
              border-radius: 5px;
              margin-left: 5px;
              height: 25px;
              line-height: 25px;
            }
          }
        }
      }
    }
    // 6.更多方案
    > ul:nth-child(6) {
      display: flex;
      flex-direction: column;
      > li:first-child {
        display: flex;
        align-items: center;
        border-bottom: 1px solid #51a2ff;
        margin-bottom: 2px;
        > div:first-child {
          background-color: $color-f;
          padding: 8px 15px;
          color: #0080ff;
          margin-right: 10px;
          border-width: 3px 1px 0;
          box-shadow: 0 -2px 6px 0 rgba(93, 159, 231, 0.4);
          border-color: #51a2ff;
          border-style: solid;
          position: relative;
          &::after {
            content: "";
            display: block;
            width: 126px;
            height: 1px;
            background-color: $color-f;
            position: absolute;
            bottom: -1px;
            left: 0;
          }
        }
        > div:nth-child(2) {
          font-size: 12px;
          font-weight: lighter;
          color: #0066cc;
          &:hover {
            text-decoration: underline;
            cursor: pointer;
          }
        }
      }
      > li:nth-child(2) {
        > ul {
          // 列表
          > li {
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: $color-3;
            font-size: 12px;
            font-weight: lighter;
            text-align: center;
            padding: 10px;
            background-color: $color-f;
            > div:first-child {
              > ul {
                display: flex;
                // 公司图标
                > li:first-child {
                  width: 15%;
                }
                > li:nth-child(2) {
                  margin-left: 3px;
                }
              }
            }
            // 起飞时间
            // >div:nth-child(2){}
            // 中转信息
            > div:nth-child(3) {
              > div:nth-child(2) {
                i {
                  color: $color-c;
                }
              }
            }
            // 起飞时间/到达时间
            > div:nth-child(2),
            > div:nth-child(4) {
              > p:first-child {
                font-size: 24px;
                font-weight: bold;
              }
            }
            // 准点率
            > div:nth-child(5) {
              > p:nth-child(2) {
                position: relative;
                top: 7.5px;
              }
            }
            // 价钱
            > div:nth-child(6) {
              > p:first-child {
                > span:first-child {
                  display: inline-block;
                  margin-top: 5px;
                  vertical-align: top;
                  font-weight: normal;
                }
                > span:nth-child(2) {
                  color: #ff6600;
                  font-size: 28px;
                  font-weight: normal;
                }
                // >span:nth-child(3){}
              }
            }
            // 订票
            > div:last-child {
              background: linear-gradient(to right, #fcad00, #ff7528);
              padding: 3px 10px;
              color: $color-f;
              font-weight: bold;
              border-radius: 5px;
              margin-left: 5px;
              height: 25px;
              line-height: 25px;
            }
          }
          > li + li {
            margin-top: 10px;
          }
        }
      }
    }
    // 7 前一天/后一天
    > ul:nth-child(7) {
      float: right;
      font-size: 12px;
      font-weight: lighter;
      color: #0080ff;
    }
    // 8 航班信息免责声明
    > ul:nth-child(8) {
      clear: both;
      flex-direction: column;
      font-size: 12px;
      font-weight: lighter;
      color: $color-6;
      > li:first-child {
        font-weight: normal;
      }
      > li + li {
        margin-top: 7px;
      }
      > li:nth-child(3) {
        display: flex;
        justify-content: space-between;
        > div:first-child {
          > a {
            color: $color-6;
            &:hover {
              text-decoration: underline;
            }
          }
        }
        > div:nth-child(2) {
          display: flex;
          text-align: right;
          > div:nth-child(2) {
            width: 50px;
            margin-left: 5px;
          }
        }
      }
    }
  }
  // 右边结束
}
// 回顶部
.returnTop {
  text-align: center;
  position: fixed;
  top: 80%;
  right: -5px;
  background-color: dodgerblue;
  color: $color-f;
  padding: 5px;
  font-size: 10px;
}
</style>