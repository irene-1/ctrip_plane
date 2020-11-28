<template>
  <div class="block">
    <!-- indicator-position="outside" 该属性定义了指示器的位置。默认情况下，它会显示在走马灯内部，设置为outside则会显示在外部；设置为none则不会显示指示器。-->
    <!-- 设置trigger属性为click，可以达到点击触发的效果 -->
    <el-carousel trigger="click" :interval="3000" >
      <el-carousel-item v-for="(img, i) of imgs" :key="i" >
        <router-link :to="img.href">
          <img :src="img.img" alt="" height="260px" />
        </router-link>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  name: "carousel",
  data() {
    return {
      imgs: [
        // {
        //   src: "/img/index/carousel/carousel_1.jpg",
        //   to: "/",
        // },
        // {
        //   src: "/img/index/carousel/carousel_2.png",
        //   to: "/",
        // },
        // {
        //   src: "/img/index/carousel/carousel_3.jpg",
        //   to: "/",
        // },
      ],
    };
  },
  mounted(){
    // 第一次进入自动加载轮播图资源
    this.axios.get('/user/indexCarousel').then((res) => {
      // console.log(res.data);
      // 数据库发送到前台的数据--对象
      let imgObj = res.data.results;
      // 数据库发送到前台的数据中拿到轮播图数据--数组
      // 遍历数组获得每一个对象并放到imgs中
      imgObj.forEach(arr => {
        // 把数组中每条数据插入到data的imgs中
        this.imgs.push(arr);
      });
    });
  },
  methods: {},
  computed: {},
  watch: {},
};
</script>

<style>
/* 轮播图 */
.el-carousel--horizontal{
  height: 260px;
  overflow-y: hidden;
}
/* 轮播指示器 */
.el-carousel__indicator {
  /* border: solid; */
  /* 只能用外边距，不能用定位，用定位会影响图片的位置，进而影响轮播图片显示 */
  margin-bottom: 40px;
  z-index: 10;
}
.el-carousel__button {
  width: 15px !important;
  height: 15px !important;
  border-radius: 50% !important;
}
.el-carousel__button:active {
  border-radius: 8px !important;
}

/* 左右箭头 */
.el-carousel__arrow {
  font-size: 26px !important;
  width: 35px !important;
  height: 70px !important;
  border-radius: 8px !important;
  background-color: rgba(31, 45, 61, 0.51) !important;
}
</style>