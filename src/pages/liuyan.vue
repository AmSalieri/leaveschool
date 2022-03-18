<template>
  <div class="bg">
    <div class="quanju">
      反馈留言：<br /><textarea
        v-model="content"
        placeholder="（选填）"
        rows="10"
        cols="40"
      ></textarea>
      <br />你的姓名：<input
        type="text"
        v-model="name"
        placeholder="（选填）"
      />
      <br />联系方式：<input
        type="text"
        v-model="contactWay"
        placeholder="（选填）"
      />
      <br />
      <br />
      <br /><button @click="tijiao()" class="btn">
        提&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;交
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "LiuYan",
  data() {
    return {
      // 留言数据
      content: "",
      name: "",
      contactWay: "",
    };
  },
  methods: {
    // 留言提交
    tijiao() {
      if (this.content == "") {
        alert("留言不能为空哦");
      } else {
        var d = `留言信息：【 时间：${this.$route.query.student.timeToday}，
                    学号：${this.$route.query.student.number}，
                    姓名：${this.$route.query.student.name}，
                    班级：${this.$route.query.student.class_}（${this.$route.query.student.zhuangye}），
                    请假事由：${this.$route.query.student.because}，
                    去向：${this.$route.query.student.address}，
                    电话：${this.$route.query.student.phone}，
                    辅导员：${this.$route.query.student.teacher}，
                    留言内容：${this.content}，
                    留言姓名：${this.name}，
                    留言联系：${this.contactWay} 】`;
        axios.get(`http://139.196.209.237/getdata?da=${d}`).then(
          (res) => {
            console.log("成功", res.data);
            alert("提交成功！");
            this.content = "";
            this.name = "";
            this.contactWay = "";
            this.$router.replace({
              path: "/QingJiaList",
            });
          },
          (err) => {
            console.log("失败", err.message);
            alert("提交成功！");
            this.content = "";
            this.name = "";
            this.contactWay = "";
            this.$router.replace({
              path: "/QingJiaList",
            });
          }
        );
      }
    },
  },
};
</script>

<style>
.bg {
  background: #555555;
  height: 1000px;
  font: 18px "PingFang SC", "Microsoft YaHei";
  color: #888;
}
.btn {
  border: none;
  background-color: transparent;
  outline: none;
  background: #ffcc02;
  font-size: 22px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #333;
  width: 90%;
  height: 50px;
  border-radius: 10px;
}
</style>