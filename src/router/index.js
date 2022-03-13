import VueRouter from "vue-router";
import MessageStu from '../pages/message.vue'
import QingJia from '../pages/qingjia.vue'
// 创建并暴露一个路由器
export default new VueRouter({
    routes:[
        {
            path:'/',
            redirect:'/MessageStu'
        },
        {
            path:'/MessageStu',
            component:MessageStu
        },
        {
            path:'/QingJia',
            component:QingJia
        }
    ]
})