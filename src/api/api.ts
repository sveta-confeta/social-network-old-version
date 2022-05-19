import axios, {AxiosResponse} from "axios";

const instance=axios.create({
    withCredentials: true,
    headers: {'API-KEY': 'ed2301ec-5c98-454a-b34e-49534b216f8b'},
    baseURL:`https://social-network.samuraijs.com/api/1.0/`   //базовый урл автоматически приклеивается к строке
})

export const getApiUsers = (actualPage: number, pageSize: number) => {
    return instance.get(`users?page=${actualPage}&count=${pageSize}` )
        .then(response => response.data)  //возращаем из респонса только дату.теперь наш респонс в компоненте явдляется датой
}
// this.props. у нас сдесь нет, все данные попадают из аргументов
//в контейнерной компонете вызывая setUsers() нам нужно передать нужные данные

export const onPageChange = (page:number, pageSize: number) => {
    return instance.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${pageSize}`)
        .then(response=> response.data)
}

export const followApi = (userID: string) => {
    return instance.post(`follow/${userID}`,
    ) //withCredentials в пост 3им параметром и ключ с сайта
        .then(response => response.data)  //возращаем из респонса только дату.теперь наш респонс в компоненте явдляется датой
}

export const unfollowApi = (userID: string) => {
    return instance.delete(`follow/${userID}`)//withCredentials в делит и гет  2ым параметром
        .then(response => response.data)  //возращаем из респонса только дату.теперь наш респонс в компоненте явдляется датой
}



export const headerApiAuth=()=>{
    return instance.get(`auth/me`)
        .then(response => response.data)

}

export const profileApi= {
    getProfile(userID: string) {
        return instance.get(`profile/` + userID)
            .then(response => response.data)  //возращаем из респонса только дату.теперь наш респонс в компоненте явдляется датой
    },
    getStatus(userID: string) {
        return instance.get<string>(`/profile/status/` + userID) //запрос статуса пользователя

    },
    updateStatus(status:string) {   //сдесь текст который пользователь ввел
        return instance.put<PutStatus>(`profile/status`, {status:status}) //отправляем на сервак объект со свойством status
            .then(response => response.data)

    }
}
// updateStatus(status: string) {
//     return instance.put<{ data: string }, AxiosResponse<ResponseType<{}>>>(`profile/status`, {status})
// }
//отправляем на сервак объект со свойством status?

export type DataType={
    status:string
}

export type PutStatus={
    resultCode: number,
    messages: string[],
    data:{}
}
