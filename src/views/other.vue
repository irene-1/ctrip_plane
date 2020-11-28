.<template>
  <div>
    <!-- Plane_select.vue -->
    <li>
      <!-- 航班信息 -->
      <div>
        <div>
          <div>
            <img src="/img/select/small/TV.png" alt="" />
          </div>
          <span>西藏航空</span><span>TV9906</span>
        </div>
        <div>空客319（中型）</div>
      </div>
      <!-- 起飞时间 -->
      <div>
        <p>21:05</p>
        <p>咸阳国际机场T2</p>
      </div>
      <!--  -->
      <div><i class="iconfont icon-hangbanjiantou-"></i></div>
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
        <p>经济舱4.3折</p>
      </div>
      <!-- 订票 -->
      <div>订票<i class="iconfont icon-jiantou2"></i></div>
    </li>
    <!-- //////////////////////////////// -->
  </div>
</template>

<script>
export default {


// ShowCountDown(jztime,divname) {
//     var now = new Date();
//     var endDate = new Date(Date.parse(jztime.replace(/-/g, "/")));
//     var leftTime=endDate.getTime()-now.getTime();
//     var leftsecond = parseInt(leftTime/1000);
//     var day1=Math.floor(leftsecond/(60*60*24));
//     var hour=Math.floor((leftsecond-day1*24*60*60)/3600);
//     var minute=Math.floor((leftsecond-day1*24*60*60-hour*3600)/60);
//     var second=Math.floor(leftsecond-day1*24*60*60-hour*3600-minute*60);
//     if(day1 < 10){day1 = "0"+day1;}
//     if(hour < 10){hour = "0"+hour;}
//     if(minute < 10){minute = "0"+minute;}
//     if(second < 10){second = "0"+second;}
//     var cc = document.getElementById(divname);
//     cc.innerHTML = "剩余：<em class='wxmr4'>"+day1+"</em>天<em class='wxml4'>"+hour+"</em>：<em>"+minute+"</em>：<em>"+second+"</em>";
// }
// var engTime = "2018-5-2";//截止时间
// window.setInterval(function(){ShowCountDown(engTime,'time_b');}, 1000);
}
</script>

<style>
</style>

