// export const addFn = (context,options) => {

// }

import axios from 'axios'
// axios.defaults.baseURL = 'http://192.168.199.237:8080'

// export const addFn = ({commit},options) => {
//     setTimeout(() => {
//         commit('add',options) // 出发mutations中的 add函数
//     }, 1000);
// }
// export const removeFn = ({commit},options) => {
//     setTimeout(() => {
//         commit('remove',options) // 出发mutations中的 add函数
//     }, 1000);
// }

// export const getBanner = ({commit},options) => {
//     axios.get('/api/bannerList').then((data)=>{
//         commit('changeBanner',data.data)
//     })
// }

export const getHomeList = () => {
    return axios.get('/img/data.json')
}

export const getListData = ({commit})=>{
    axios.get('/img/dat.json').then((data)=>{
        commit('changeList',data.data);// 触发mutations中的函数
    })
}