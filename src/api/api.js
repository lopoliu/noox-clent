import serve from "@/api/request";



// 用户登录
export const userLogin = function (data) {
    return serve({
        url: "/user/login",
        data: data,
        method: "post"
    })
}