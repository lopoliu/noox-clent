import serve from "@/api/request";


export const userLogin = function (data) {
    // 用户登录
    return serve({
        url: "/user/login",
        data: data,
        method: "post"
    })
}

export const videoList = function (){
    return serve({
        url: "/res/",
        method: "GET"
    })
}