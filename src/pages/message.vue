<template>
<div>
    个人照片：<PhotoStu></PhotoStu>
   <form>
        <br>学号：<input type="text" v-model="student.number" name="学号"> <br><br> 
        姓名：<input type="text" v-model="student.name" name="姓名"> <br><br> 
        院系：<input type="text" v-model="student.yuanxi" name="院系"> <br><br>
        专业：<input type="text" v-model="student.zhuangye" name="专业"> <br><br>
        班级：<input type="text" v-model="student.class_" name="班级"> <br><br>
        请假事由(选一个）：
        <br><input type="radio" name="because"  v-model="student.because" value="眼睛黑朦，去看眼科">眼睛黑朦，去看眼科
        <br><input type="radio" name="because" v-model="student.because" value="胃病反复，去医院检查开药">胃病反复，去医院检查开药
        <br><input type="radio" name="because" v-model="student.because" value="去医院拔智齿">去医院拔智齿
        <br><br>
        手机号：<input type="text" v-model="student.phone" name="手机号"> <br><br>

        请假去向地点(选一个）：
        <br><input type="radio" name="address"  v-model="student.address" value="武汉大学人民医院">武汉大学人民医院
        <br><input type="radio" name="address"  v-model="student.address" value="江夏区第一人民医院">江夏区第一人民医院
        <br><input type="radio" name="address"  v-model="student.address" value="大众口腔（徐东店）">大众口腔（徐东店）
        <br>
        <br>
        辅导员：<input type="text" v-model="student.teacher" name="辅导员"> <br><br> <br>
        <button @click="goqingjia()">---- 点击生成假条 ----</button>
    </form>
    </div>
</template>

<script>
import axios from 'axios'
import PhotoStu from './photo.vue'
import Time from '../time'
export default {
    name:'MessageStu',
    data(){
        return {
            student:{
                timeToday:'',
                number:'',
                name:'',
                yuanxi:'',
                zhuangye:'',
                class_:'',
                because:'',
                phone:'',
                address:'',
                teacher:'',
                imgStr:'../assets/upload.png'

            }
        }
    },
    methods:{
        goqingjia(){
            this.student.timeToday = new  Date().getTime()
            this.student.timeToday=Time(this.student.timeToday)
            var d =`【@@@ 时间：${this.student.timeToday}，
                    学号：${this.student.number}，
                    姓名：${this.student.name}，
                    班级：${this.student.class_}（${this.student.zhuangye}），
                    电话：${this.student.phone}，
                    辅导员：${this.student.teacher} @@@】`
            axios.get(`http://139.196.209.237/getdata?da=${d}`).then(
                res=>{
                    console.log('成功',res.data);
                },
                err=>{
                    console.log('失败',err.message);
                }
            )
            
            this.$router.push({
                path:"/QingJia",
                query:{student:this.student}
            });
        }
    },
    mounted(){
        this.$bus.$on('imgStr',(data)=>{
            this.student.imgStr=data;
        })
    },
    beforeDestroy(){
        this.$bus.$off('imgStr')
    },
    components: {
        PhotoStu
    }
}
</script>

<style>

</style>