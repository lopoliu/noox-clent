import serve from "@/api/request";

export const userLogin = data => serve.post(
    "http://127.0.0.1:80/user/login",
    data,
)