// export const addFn = (context,options) => {

// }

import axios from 'axios'
// axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5bf0ee68643497494c87d289'

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
    return axios.get('http://localhost:8080/img/data.json')
}

export const getListData = ({commit})=>{
    axios.get('http://localhost:8080/img/dat.json').then((data)=>{
        commit('changeList',data.data);// 触发mutations中的函数
    })
}