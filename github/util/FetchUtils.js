/**
 * Created by shaolin on 2019/8/1.
 * Description：
 */
// fetch 是全局的，不需要额外导入
export default class FetchUtils {
    static get(url){
        return new Promise((resolve,reject) => {
            fetch(url)
                .then(response => response.json())
                .then((result) => {
                    resolve(result);
                })
                .catch(error => {
                    reject(error);
                })
        })
    }

    static post(url,data) {
        return new Promise((resolve,reject) => {
            fetch(url,{
                method:'POST',
                header:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(data)
            })
                .then(response => response.json())
                .then((result) => {
                    resolve(result)
                })
                .catch(error => {
                    reject(error)
                })
        })
    }
}