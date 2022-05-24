import axiosClient from "./axiosClient";

const authApi =  {
    register(username, email, password) {
        return axiosClient.post('/auth/register', {
            username,email,password
        })
    },
    login(account) {
        return axiosClient.post('/auth/login', {
            email: account.email,
            password: account.password
        })
    },
    logout(refreshToken) {
        return axiosClient.post('/auth/logout',{
            refreshToken
        })
    }
}

export default authApi