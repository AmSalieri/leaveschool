<template>
  <div>
    <!-- 背景 -->
    <div class="app">
      <!-- 遮罩层 -->
      <div class="zhe" v-if="flag">
        <!-- 声明 -->
        <!-- <div class="shengming">
          <h2 style="font-size: 28px;text-align:center;line-height:100px">本人声明</h2>
          <hr>
          <p 
          style="
          font-size: 20px;
          line-height:40px;
          margin: 25px 20px 20px 25px;
          padding:10px;
          border:2px solid black;">
            此网页是本人为巩固所学知识而练习制作的一个小demo，仅供学习和参考。请通过正规途径请假，遵守校纪校规，支持学校的防疫工作。</p>
          <hr>
          <button 
          @click="flag=false"
          style="
            width:70%;
            height:70px;
            margin: 10px 15% 0px 15%;
            border-radius: 15px;
            border: none;
            background-color: #3897fe;
            outline: none;  
            font-size:10px
          "><span style="
            font-size:34px
          ">确认</span><span  style="
            font-size:8px
          ">之</span>好的，我知道了，我明白了，我清楚了，我保证遵守校纪校规</button>
        </div> -->
      <!-- 提示 -->
      <div class="shengming">
          <h2 style="font-size: 40px;text-align:center;line-height:100px">提示</h2>
          <hr>
          <p 
          style="
          font-size: 40px;
          line-height:60px;
          margin: 25px 20px 20px 25px;
          padding:10px;
          border:2px solid black;">
            特殊原因，暂时关闭，如有问题，“＋”号反馈。</p>
          <hr>
          <button 
          @click="flag=false"
          style="
            width:70%;
            height:70px;
            margin: 10px 15% 0px 15%;
            border-radius: 15px;
            border: none;
            background-color: #3897fe;
            outline: none;  
            font-size:10px;
            line-height:70px;
          "><span style="
            font-size:50px
          ">确&nbsp;&nbsp;&nbsp;&nbsp;认</span></button>
        </div>
      </div>
      <!-- 内容 -->
      <div class="first" @click="goQingjia()">
        <div class="sick">{{cloneStudent.type_}}</div>
        <div class="clearSick">
          未通过
          <div class="yuanDian" style="background-color: red;"></div>
        </div>
        <div class="date">{{time}} 至 {{time}} / 共1天</div>
      </div>
      <!-- 历史记录 （特殊原因，注释了）-->
     <!-- <div class="first">
        <div class="sick">病假</div>
        <div class="clearSick">
          已销假
          <div class="yuanDian"></div>
        </div>
        <div class="date">2022-3-12 至 2022-3-12 / 共1天</div>
      </div>
       <div class="first">
        <div class="sick">病假</div>
        <div class="clearSick">
          已销假
          <div class="yuanDian"></div>
        </div>
        <div class="date">2021-12-18 至 2022-12-18 / 共1天</div>
      </div>
      <div class="first">
        <div class="sick">事假</div>
        <div class="clearSick">
          已销假
          <div class="yuanDian"></div>
        </div>
        <div class="date">2021-11-12 至 2022-11-12 / 共1天</div>
      </div> -->
      <div class="end">没有更多啦~</div>
      <img id="imgJia" ref='imgJia' src="../assets/jia.png" alt="" @click="goLiuyan()"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "qingjiaList",
  data() {
    return {
      cloneStudent: {},
      time:'',
      flag:true,  //遮罩层开关
      tt:58,
      timer:undefined
    };
  },
  mounted(){
    // 让右下角的加号动起来
    this.timer=setInterval(()=>{
      this.tt+=1
      this.$refs.imgJia.style.width = this.tt+'px'
      this.$refs.imgJia.style.height = this.tt+'px'
      if(this.tt>=80)this.tt=58
    },70)
      
  },
  activated(){
    this.flag=true;
  },
  deactivated(){
    clearInterval(this.timer)
    this.$refs.imgJia.style.width = '58px'
    this.$refs.imgJia.style.height = '58px'
  },
  // activated(){
  //     console.log('12221');
  //     this.cloneStudent=this.$route.query.student
  // },
  // 路由守卫,保证数据来源
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      // vm.cloneStudent=to.query.student
      // console.log(to,'----',from,'----',vm.cloneStudent);
      if (from.path == "/MessageStu") {
        vm.cloneStudent = to.query.student;
        var aData = new Date();
      vm.time =
        aData.getFullYear() +
        "-" +
        (aData.getMonth() + 1) +
        "-" +
        aData.getDate();
      }
    });
    // console.log(to,'------',from);
    // if(from.path=='/MessageStu'){
    //     this.cloneStudent=to.query.student
    // }
    // console.log(to.query.student);
  },
  methods: {
    goQingjia() {
      this.$router.push({
        // 正常使用时
        // path: "/QingJia",
        // query: { student: this.cloneStudent },

        // 特殊情况时，传到message页面
        path: "/MessageStu",
      });
    },
    goLiuyan(){
      this.$router.push({
        path: "/LiuYan",
        query: { student: this.cloneStudent },
      });
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  width: 100%;
  background-color: #f9f9f9;
}

.first {
  float: left;
  width: 100%;
  height: 73.6px;
  background-color: #ffffff;
  padding: 12px 20px;
  border: 1px solid #f1f1f1;
}

.sick {
  float: left;
  width: 50%;
  height: 22.4px;
  font: 17px "PingFang SC", "Microsoft YaHei";
}

.date {
  margin-top: 12px;
  float: left;
  width: 100%;
  height: 19.2px;
  color: #92969c;
  font: 14px "PingFang SC", "Microsoft YaHei";
}

.clearSick {
  position: relative;
  float: left;
  width: 50%;
  height: 19.2px;
  color: #000000;
  text-align: right;
  font: 14px "PingFang SC", "Microsoft YaHei";
}

.yuanDian {
  position: absolute;
  top: 8px;
  right: 54px;
  width: 6px;
  height: 6px;
  background: #a2d06b;
  border-radius: 3px;
}

.end {
  width: 100%;
  height: 16px;
  text-align: center;
  font: 12px "PingFang SC", "Microsoft YaHei";
  color: #92969c;
  margin: 0px 0px 22px;
}
#imgJia {
  padding: 0;
  position: fixed;
  right: 13px;
  bottom: 18px;
  width: 58px;
  height: 58px;
}
.zhe{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.7);
  z-index: 100;
}
.shengming{
  width: 300px;
  height: 500px;
  background: skyblue;
  position: absolute;
  left: 50%;
  top: 45%;
  margin-left:-150px;
  margin-top:-250px;
  border-radius: 15px;
  z-index: 101;
}
</style>