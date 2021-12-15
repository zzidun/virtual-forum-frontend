import request from "@/utils/request";

// 用户注册
const login = ({email, password}) => {
    return request.post('user/login', {email, password})
}

const register = ({name, email, password}) => {
    return request.post('user/register', {name, email, password})
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