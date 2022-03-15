<template>
  <div>
    <!-- 背景 -->
    <div class="app">
      <!-- 内容 -->
      <div class="first" @click="goQingjia()">
        <div class="sick">{{cloneStudent.type_}}</div>
        <div class="clearSick">
          已通过
          <div class="yuanDian"></div>
        </div>
        <div class="date">{{time}} 至 {{time}} / 共1天</div>
      </div>
      <div class="first">
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
      </div>
      <div class="end">没有更多啦~</div>
      <img id="imgJia" src="../assets/jia.png" alt="" />
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
    };
  },
  // mounted(){
  //     console.log(this.cloneStudent);
  //     this.cloneStudent=this.$route.query.student
  // },
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
        path: "/QingJia",
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
</style>