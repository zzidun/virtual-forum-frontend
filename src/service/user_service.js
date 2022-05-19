import request from "@/utils/request";

// 用户登陆
const login = ({name, password}) => {
    return request.post('login', {name, password})
}

// 用户注册
const register = ({name, email, password}) => {
    return request.post('register', {name, email, password})
}

// 获取用户信息
const info = () => {
    return request.get('user/info')
};

export default {
    login,
    register,
    info,
};