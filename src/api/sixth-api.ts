import axios from "axios";


export const instance = axios.create({
    baseURL: 'http://localhost:5000',
    // baseURL: 'https://back-fourth-tatiankris.vercel.app',
    // baseURL: process.env.REACT_APP_BACK_URL || 'https://back-fourth-tatiankris.vercel.app/',
    // withCredentials: true
})

export const authAPI = {
    login(username: string) {
        return instance.post('/auth/login', {username})
    },
    me() {
        return instance.get('/auth/me', {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
    },
}

export const usersAPI = {
    usernames() {
        return instance.get('/auth/users')
    }
}

export const messagesAPI = {
    sendMessage(data: SendMessageType) {
        return instance.post('/messages/send', data)
    },
    inMessages(username: string) {
        return instance.post('/messages/in', {username})
    },
    outMessages(username: string) {
        return instance.post('/messages/out', {username})
    }
}

export type SendMessageType = {
    sender: string
    recipient: string;
    title: string;
    message: string;
}
export type LoginDataType = {
    email: string
    password: string
}

export type RegisterDataType = {
    email: string
    password: string
}