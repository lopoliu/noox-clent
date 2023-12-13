import serve from "@/api/request";


export const userLogin = function (data) {
    // 用户登录
    return serve({
        url: "/user/login",
        data: data,
        method: "post"
    })
}

export const videoList = function (data){
    // 查询视频列表
    return serve({
        url: "/res/",
        method: "GET",
        params:{
            pageIndex: data.pageIndex,
            pageSize: data.pageSize
        }
    })
}

export const videoDetail = function (resourceId) {
    // 查询视频详情
    return serve({
        url: "/res/" + resourceId,
        method: "post"
    })
}

export const userAmount = function (){
    // 查询用户余额
    return serve({
        url: "/user/amount",
        method: "post"
    })
}

export const userRegister = function (data) {
    // 用户注册
    return serve({
        url: "/user/register",
        method: "post",
        data: data
    })
}

export const videoBuy = function (resourceId){
    return serve({
        url: "/res/resourceBuy",
        method: "post",
        data: {resourceId: resourceId}
    })
}