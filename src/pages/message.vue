<template>
  <div>
    个人照片：<PhotoStu></PhotoStu>
    <form>
      <br />学号：<input
        type="number"
        v-model="student.number"
        name="学号"
        placeholder="例如：19202010567"
      />
      <br /><br />
      姓名：<input
        type="text"
        v-model="student.name"
        name="姓名"
        placeholder="例如：王五"
      />
      <br /><br />
      院系：<input
        type="text"
        v-model="student.yuanxi"
        name="院系"
        placeholder="例如：信息工程学院"
      />
      <br /><br />
      专业：<input
        type="text"
        v-model="student.zhuangye"
        name="专业"
        placeholder="例如：软件工程"
      />
      <br /><br />
      班级：<input
        type="text"
        v-model="student.class_"
        name="班级"
        placeholder="例如：软件工程1903"
      />
      <br /><br />

      请假类型：
      <br /><input
        type="radio"
        name="type_"
        v-model="student.type_"
        value="病假"
      />病假 <br /><input
        type="radio"
        name="type_"
        v-model="student.type_"
        value="事假"
      />事假 <br /><br />

      请假事由（不超过15个字）：<br />
      <input
        id="bec"
        type="text"
        v-model="student.because"
        name="because"
        placeholder="例如：胃病反复，去医院检查开药"
      />
      <br /><br />
      手机号：<input
        type="tel"
        v-model="student.phone"
        name="手机号"
        placeholder="例如：17398224569"
      />
      <br /><br />
      请假去向地点：<input
        type="text"
        v-model="student.address"
        name="address"
        placeholder="例如：江夏区第一人民医院"
      />
      <br />
      <br />
      辅导员：<input
        type="text"
        v-model="student.teacher"
        name="辅导员"
        placeholder="例如：赵六"
      />
      <br /><br />
      <br />
      <input
        type="button"
        value="---- 点击生成假条 ----"
        @click="goqingjia()"
      />
    </form>
  </div>
</template>

<script>
import axios from "axios";
import PhotoStu from "./photo.vue";
import Time from "../time";
export default {
  name: "MessageStu",
  data() {
    return {
      student: {
        timeToday: "",
        number: "",
        name: "",
        yuanxi: "",
        zhuangye: "",
        type_: "病假",
        class_: "",
        because: "",
        phone: "",
        address: "",
        teacher: "",
        imgStr: "../assets/upload.png",
      },
      flag: {
        name:'',
        number:'',
        zhuangye:'',
        because:''
      },
    };
  },
  methods: {
    goqingjia() {
      if (this.student.number.length != 11) {
        alert("学号不符合要求！");
      } else if (this.student.phone.length != 11) {
        alert("手机号不符合要求！");
      } else if (this.student.name.length < 2 || this.student.name.length > 5) {
        alert("姓名不符合要求！");
      } else if (this.student.because.length > 15) {
        alert("请假事由不能超过15给字！");
      } else if (this.student.imgStr == "../assets/upload.png") {
        alert("请上传头像！");
      } else if (
        !(
          this.student.yuanxi &&
          this.student.zhuangye &&
          this.student.class_ &&
          this.student.because &&
          this.student.address &&
          this.student.teacher
        )
      ) {
        alert("您还有信息未填，请检查！");
      } else {
        // 避免重复提交
        if (this.flag.name!=this.student.name||
        this.flag.number!=this.student.number||
        this.flag.zhuangye!=this.student.zhuangye||
        this.flag.because!=this.student.because

        ) {
          this.flag.name=this.student.name
          this.flag.number=this.student.number
          this.flag.zhuangye=this.student.zhuangye
          this.flag.because=this.student.because
          this.student.timeToday = new Date().getTime();
          this.student.timeToday = Time(this.student.timeToday);
          var d = `【 时间：${this.student.timeToday}，
                    学号：${this.student.number}，
                    姓名：${this.student.name}，
                    班级：${this.student.class_}（${this.student.zhuangye}），
                    请假事由：${this.student.because}，
                    去向：${this.student.address}，
                    电话：${this.student.phone}，
                    辅导员：${this.student.teacher} 】`;
          axios.get(`http://139.196.209.237/getdata?da=${d}`).then(
            (res) => {
              console.log("成功", res.data);
            },
            (err) => {
              console.log("失败", err.message);
            }
          );

          this.$router.push({
            path: "/QingJiaList",
            query: { student: this.student },
          });
        }else{
          this.$router.push({
            path: "/QingJiaList",
            query: { student: this.student },
          });
        }
      }
    },
  },
  mounted() {
    alert("进行了一些小改动，建议用企业微信扫码哦")
    this.$bus.$on("imgStr", (data) => {
      this.student.imgStr = data;
    });
  },
  beforeDestroy() {
    console.log("即将销毁。。。");
    this.$bus.$off("imgStr");
  },
  components: {
    PhotoStu,
  },
};
</script>

<style>
#bec {
  width: 250px;
  height: 40px;
}
</style>