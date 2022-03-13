<template>
   <form>
        个人照片：<PhotoStu></PhotoStu>
        <br>学号：<input type="text" v-model="student.number"> <br><br> 
        姓名：<input type="text" v-model="student.name"> <br><br> 
        院系：<input type="text" v-model="student.yuanxi"> <br><br>
        专业：<input type="text" v-model="student.zhuangye"> <br><br>
        班级：<input type="text" v-model="student.class_"> <br><br>
        请假事由(选一个）：
        <br><input type="radio" name="because"  v-model="student.because" value="眼睛黑朦，去看眼科">眼睛黑朦，去看眼科
        <br><input type="radio" name="because" v-model="student.because" value="胃病反复，去医院检查开药">胃病反复，去医院检查开药
        <br><input type="radio" name="because" v-model="student.because" value="去医院拔智齿">去医院拔智齿
        <br><br>
        手机号：<input type="text" v-model="student.phone" > <br><br>

        请假去向地点(选一个）：
        <br><input type="radio" name="address"  v-model="student.address" value="武汉大学人民医院">武汉大学人民医院
        <br><input type="radio" name="address"  v-model="student.address" value="江夏区第一人民医院">江夏区第一人民医院
        <br><input type="radio" name="address"  v-model="student.address" value="大众口腔（徐东店）">大众口腔（徐东店）
        <br>
        <br>
        辅导员：<input type="text" v-model="student.teacher"> <br><br> <br>
        <button @click="goqingjia()">---- 点击生成假条 ----</button>
    </form>
</template>

<script>
import PhotoStu from './photo.vue'
export default {
    name:'MessageStu',
    data(){
        return {
            student:{
                number:'',
                name:'',
                yuanxi:'',
                zhuangye:'',
                class_:'',
                because:'',
                phone:'',
                address:'',
                teacher:''

            }
        }
    },
    methods:{
        goqingjia(){
            this.$router.push({
                path:"/QingJia",
                query:{student:this.student}
            });
        }
    },
    components: {
        PhotoStu
    }
}
</script>

<style>

</style>