import Axios from 'axios';

const BASE_URL = "https://instagram-rest-api.herokuapp.com/";
// const BASE_URL = "http://192.168.1.8:3000/";

const instance = Axios.create({
    baseURL: BASE_URL,
});

export const registerUser = async (user, callback) => {
    Axios.post(BASE_URL + "register_user", user)
        .then(res => {
            const data = res.data
            if (data.error) {
                callback(data.error, null)
            } else {
                callback(null, data.token)
            }

        })
        .catch(err => {
            callback(err, null)
        })
}

export const loginUser = async (user, callback) => {
    Axios.post(BASE_URL + "login_", user)
        .then(res => {
            const data = res.data
            if (data.error) {
                callback(data.error, null)
            } else {
                callback(null, data.token)
            }
        })
        .catch(err => {
            callback(err, null)
        })
}