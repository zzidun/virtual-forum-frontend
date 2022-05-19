import storage_service from "@/service/storage_service"
import userService from '@/service/user_service'

const user_store = {
    namespaced: true,
    state: {
        token:  storage_service.get(storage_service.USER_TOKEN),
        info:   storage_service.get(storage_service.USER_INFO) ?
                JSON.parse(storage_service.get(storage_service.USER_INFO)) :
                null
    },

    mutations: {
        SET_TOKEN(state, token) {
            // 更新本地缓存
            storage_service.set(storage_service.USER_TOKEN, token);
            // 更新state
            state.token = token;
        },
        SET_USER_INFO(state, info) {
            // 更新本地缓存
            storage_service.set(storage_service.USER_INFO, JSON.stringify(info));
            // 更新state
            state.info = info;
        }
    },

    actions: {
        login(context, {name, password}) {
            return new Promise((resolve, reject) => {
                userService.login({name, password}).then((res) => {
                    // 提交用户信息
                    context.commit('SET_TOKEN', res.data.token)
                    // 请求用户信息
                    return;
                }).then((res) => {
                    // 保存用户信息
                    // context.commit('SET_USER_INFO', res.data.data.user);
                    // 继续
                    resolve(res)
                }).catch((err) => {
                    reject(err);
                })
            })
        },
        register(context, {name, email, password, confirm}) {
            return new Promise((resolve, reject) => {
                userService.register({name, email, password}).then(() => {
                    // 提交用户信息
                    // context.commit('SET_TOKEN', res.data.data.token)
                    // 请求用户信息
                    return userService.info();
                }).then((res) => {
                    // 保存用户信息
                    // context.commit('SET_USER_INFO', res.data.data.user);
                    // 继续
                    resolve(res)
                }).catch((err) => {
                    reject(err);
                })
            })
        },
        logout(context) {
            // 清除token
            context.commit('SET_TOKEN', "");
            storage_service.set(storage_service.USER_TOKEN, "");
            // 清除用户信息
            context.commit('SET_USER_INFO', "");
            storage_service.set(storage_service.USER_INFO, "");
        }
    }
}

export default user_store
