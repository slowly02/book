// export const add = (state)=>{
//     state.count++;
// }
// export const remove = (state)=>{
//     state.count--;
// }

// import Axios from "axios";

// export function changeBanner(state,options){
//     // 改变state中的bannerList  数据
//     state.bannerList = options
// }


export function changeList(state,options){
    // 重置 state 中 列表页数据
    state.listData = options;
    state.isGetList = true;
}


// 添加 listData中的新数据
export function addList(state,options){
    state.listData.unshift(options)
}


// 删除 listData中的对应数据
export  function removeList(state,options){
    // 要从 state中的 listData 中 把 options这条数据是删除
    state.listData = state.listData.filter(item=>{
        // debugger;
        return item.bookId != options.bookId
    })
}

// 向收藏列表添加数据
export function addCollect(state,options){
    // 再添加之前 要先去判断有没有，有的话就不用再去添加了
    let bol = state.collectData.some(item=>{
        return item.bookId == options.bookId;
    });
    if(bol)return;// bol 是true， 代表数组有该条数据；就不用再去添加了
    state.collectData.unshift(options)
}

// 删除 收藏页的数据
export function removeCollect(state,options){
    state.collectData = state.collectData.filter(item=>item.bookId!=options.bookId)
}