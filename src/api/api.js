import serve from "@/api/config";


export const userLoginApi = function (data) {
    // 用户登录
    return serve({
        url: "/user/login",
        data: data,
        method: "post"
    })
}

export const userRegisterApi = function (data) {
    // 用户注册
    return serve({
        url: "/user/register",
        method: "post",
        data: data
    })
}

export const resetPasswordApi = function (data) {
    return serve({
        url: "/user/resetPassword",
        data: data,
        method: "post"
    })
}

export const userInfoApi = function () {
    // 查询用户余额
    return serve({
        url: "/user/info",
        method: "post"
    })
}


export const resourceListApi = function (data) {
    // 查询视频列表
    return serve({
        url: "/res/",
        method: "GET",
        params: {
            pageIndex: data.pageIndex,
            pageSize: data.pageSize
        }
    })
}

export const resourceDetailApi = function (resourceId) {
    // 查询视频详情
    return serve({
        url: "/res/" + resourceId,
        method: "post"
    })
}


export const resourceBuyApi = function (resourceId) {
    return serve({
        url: "/res/resourceBuy",
        method: "post",
        data: {resourceId: resourceId}
    })
}

