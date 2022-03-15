import VueRouter from "vue-router";
import MessageStu from '../pages/message.vue'
import QingJia from '../pages/qingjia.vue'
import QingJiaList from '../pages/qingjialist.vue'
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
        },{
            path:'/qingjiaList',
            component:QingJiaList
        },
        {
            path:'/QingJia',
            component:QingJia
        }
    ]
})