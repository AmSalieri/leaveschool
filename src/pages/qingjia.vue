<template>
  <div class="body">
    <div class="space"></div>
    <!-- 头像区域 -->
    <div class="head">
      <img :src="$route.query.student.imgStr" alt="" />
    </div>
    <!-- 个人信息区域 -->
    <div class="message">
      <table>
        <tr>
          <td>学生编号</td>
          <td>{{$route.query.student.number}}</td>
        </tr>
        <tr>
          <td>姓名</td>
          <td>{{$route.query.student.name}}</td>
        </tr>
        <tr>
          <td>院系</td>
          <td>{{$route.query.student.yuanxi}}</td>
        </tr>
        <tr>
          <td>专业</td>
          <td>{{$route.query.student.zhuangye}}</td>
        </tr>
        <tr>
          <td>班级</td>
          <td>{{$route.query.student.class_}}</td>
        </tr>
      </table>
      <hr />
      <table>
        <tr>
          <td>学年</td>
          <td>2021-2022学年</td>
        </tr>
        <tr>
          <td>学期</td>
          <td>不分学期</td>
        </tr>
        <tr>
          <td>请假类型</td>
          <td>{{$route.query.student.type_}}</td>
        </tr>
        <tr>
          <td>请假性质</td>
          <td>因私请假</td>
        </tr>
        <tr>
          <td>请假开始日期</td>
          <td>{{time}}</td>
        </tr>
        <tr>
          <td>请假结束日期</td>
          <td>{{time}}</td>
        </tr>
        <tr>
          <td>请假天数</td>
          <td>1</td>
        </tr>
        <tr>
          <td>来源类型</td>
          <td>学生申请</td>
        </tr>
        <tr>
          <td>请假事由</td>
          <td>{{$route.query.student.because}}</td>
        </tr>
        <tr>
          <td>证明材料</td>
          <td></td>
        </tr>
        <tr class="prove">
          <td colspan="2">
            <img src="../assets/qingjiazhengming.jpg" alt=""/>&nbsp;&nbsp;qFujedlYMXSiuEWk...
          </td>
        </tr>
        <tr>
          <td>手机号</td>
          <td>{{$route.query.student.phone}}</td>
        </tr>
        <tr>
          <td>请假去向地点</td>
          <td>{{$route.query.student.address}}</td>
        </tr>
        <tr>
          <td>出行方式</td>
          <td>公共交通</td>
        </tr>
      </table>
    </div>
    <!-- 续假区域 -->
    <div class="again">
      <table>
        <tr>
          <td colspan="2">续假开始时间</td>
        </tr>
        <tr>
          <td colspan="2">续假结束时间</td>
        </tr>
        <tr>
          <td colspan="2">续假天数</td>
        </tr>
        <tr>
          <td colspan="2">续假事由</td>
        </tr>
        <tr>
          <td>审核状态</td>
          <td><a>详细流程</a></td>
        </tr>
      </table>
    </div>
    <!-- 审核流程 -->
    <div class="check">
      <h3>审核流程</h3>
      <hr />
        <div class="shuxianF">
            <div class="shuxian1"></div>
            <div class="shuxian2"></div>
        <table>
          <tr>
            <td class="time" valign="top"><span>{{time1}}</span></td>
            <td valign="top"><span>提交申请</span></td>
          </tr>
          <tr>
            <td class="time" valign="top">
              <span>{{time1}}</span>
              <span>19:33:31</span>
            </td>
            <td valign="top">
              <span>辅导员审核</span>
              <span>通过</span>
              <span>审核人：{{$route.query.student.teacher}}</span>
              <span>审核意见：同意</span>
            </td>
          </tr>
          <tr>
            <td valign="top" class="last"></td>
            <td valign="top" class="last"><span>结束</span></td>
          </tr>
        </table>
        <span class="biao1"
          ><svg
            t="1639842528703"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="6018"
            width="32"
            height="32"
          >
            <path
              d="M510.8 129.2c-211.9 0-383.7 171.8-383.7 383.7 0 211.9 171.8 383.7 383.7 383.7 211.9 0 383.7-171.8 383.7-383.7 0-211.9-171.8-383.7-383.7-383.7z m153.3 250.2S494.8 674.2 491.9 676.9c-9.7 9.1-24.8 8.6-33.9-1.1l-109.6-101c-9.1-9.7-8.6-24.8 1.1-33.9 9.7-9.1 24.8-8.6 33.9 1.1l85.8 79.1 153.4-265.7c6.6-11.5 21.3-15.4 32.8-8.8 11.4 6.7 15.3 21.4 8.7 32.8z"
              p-id="6019"
              fill="#52C7CA"
            ></path></svg
        ></span>
        <span class="biao2"
          ><svg
            t="1639842528703"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="6018"
            width="32"
            height="32"
          >
            <path
              d="M510.8 129.2c-211.9 0-383.7 171.8-383.7 383.7 0 211.9 171.8 383.7 383.7 383.7 211.9 0 383.7-171.8 383.7-383.7 0-211.9-171.8-383.7-383.7-383.7z m153.3 250.2S494.8 674.2 491.9 676.9c-9.7 9.1-24.8 8.6-33.9-1.1l-109.6-101c-9.1-9.7-8.6-24.8 1.1-33.9 9.7-9.1 24.8-8.6 33.9 1.1l85.8 79.1 153.4-265.7c6.6-11.5 21.3-15.4 32.8-8.8 11.4 6.7 15.3 21.4 8.7 32.8z"
              p-id="6019"
              fill="#52C7CA"
            ></path></svg
        ></span>
        <span class="biao3"
          ><svg
            t="1639842528703"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="6018"
            width="32"
            height="32"
          >
            <path
              d="M510.8 129.2c-211.9 0-383.7 171.8-383.7 383.7 0 211.9 171.8 383.7 383.7 383.7 211.9 0 383.7-171.8 383.7-383.7 0-211.9-171.8-383.7-383.7-383.7z m153.3 250.2S494.8 674.2 491.9 676.9c-9.7 9.1-24.8 8.6-33.9-1.1l-109.6-101c-9.1-9.7-8.6-24.8 1.1-33.9 9.7-9.1 24.8-8.6 33.9 1.1l85.8 79.1 153.4-265.7c6.6-11.5 21.3-15.4 32.8-8.8 11.4 6.7 15.3 21.4 8.7 32.8z"
              p-id="6019"
              fill="#52C7CA"
            ></path></svg
        ></span>
      </div>
    </div>
        <!-- 续假、销假 -->
    <div class="twojia">
        <div class="left">
                定位销假
        </div>
        <div class="right">
            续假申请
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'QingJia',
    data(){
        return {
            time:'',
            time1:''
        }
    },
    created: function() {
    var aData = new Date();
    this.time =
      aData.getFullYear() + "-" + (aData.getMonth() + 1) + "-" + aData.getDate();
    this.time1 = aData.getFullYear() + "-" + (aData.getMonth() + 1) + "-" + (aData.getDate()-1);
  },
};
</script>

<style>
.body {
  font-family: PingFang SC,Microsoft YaHei;
  background-color: #F9F9F9;
  overflow: auto;
  height: 100%;
  display: block;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
body .space {
  height: 14px;
}
body .head {
  height: 74px;
  background: #ffffff;
}
body .head img {
  height: 70px;
  width: 70px;
  border-radius: 35px;
}
body .message {
  margin-top: 2px;
  background: #ffffff;
}
body .message table {
  margin-bottom: 5px;
  font-size: 14px;
}
body .message table tr {
  height: 28px;
}
body .message table tr :first-child {
  width: 96px;
  padding-left: 20px;
  color: #92969C;
}
body .message table tr :last-child {
  color: #1E2329;
}
body .message table .prove {
  height: 46px;
  padding: 6px;
}
body .message table .prove img {
  padding: 0px;
  height: 30px;
  width: 30px;
  vertical-align: text-top;
}
body .message hr {
  margin-top: 7px;
  *margin: 0;
  border: 0;
  color: #f6f6f6;
  background-color: #f6f6f6;
  height: 1px;
}
body .again {
  margin-top: 20px;
  background: #ffffff;
}
body .again table {
  margin-bottom: 5px;
  font-size: 14px;
}
body .again table tr {
  height: 28px;
}
body .again table tr td {
  width: 96px;
  padding-left: 20px;
  color: #92969C;
}
body .again table tr td a {
  width: 56px;
  height: 19px;
  color: #52c7ca !important;
  font-size: 14px;
}
body .check {
  height: 289px;
  margin-top: 20px;
  margin-bottom: 40px;
  background: #ffffff;
}
body .check h3 {
  margin: 0;
  padding: 16px 20px;
  color: #000000;
  font-size: 16px;
}
body .check hr {
  margin-top: 7px;
  *margin: 0;
  margin-left: 16px;
  border: 0;
  color: #f3f3f3;
  background-color: #f3f3f3;
  height: 1px;
}
body .check .shuxianF {
  position: relative;
  padding: 8px 0px 0px 20px;
  color: #92969C;
  font-size: 14px;
}
body .check .shuxianF .shuxian1 {
  position: absolute;
  left: 143px;
  top: 24px;
  width: 0;
  height: 50px;
  border-left: 1px solid #eeeeee;
}
body .check .shuxianF .shuxian2 {
  position: absolute;
  left: 143px;
  top: 89px;
  width: 0;
  height: 98px;
  border-left: 1px solid #eeeeee;
}
body .check .shuxianF span {
  display: block;
  margin: 0;
  padding: 0;
}
body .check .shuxianF .time {
  font-size: 12px;
}
body .check .shuxianF tr {
  margin: 20px;
}
body .check .shuxianF tr td {
  padding: 0px 30px 40px 30px;
}
body .check .shuxianF tr .last {
  padding: 0px 30px 0px 30px;
}
body .check .shuxianF .biao1 {
  position: absolute;
  left: 127px;
  top: 0px;
}
body .check .shuxianF .biao2 {
  position: absolute;
  left: 127px;
  top: 62px;
}
body .check .shuxianF .biao3 {
  position: absolute;
  left: 127px;
  top: 182px;
}
body .twojia {
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 45px;
  line-height: 45px;
  text-align: center;
  color: #fff;
  font: Arial 18px;
}
body .twojia .left {
  color: #cecfd1;
  height: 100%;
  width: 50%;
  float: left;
  background: #efefef;
  background: rgba(0, 0, 0, 0.05);
}
body .twojia .right {
  height: 100%;
  width: 50%;
  background: #52C7CA;
  float: left;
}


</style>