/**
 * Created by shaolin on 2019/8/1.
 * Description：
 */

import FetchUtils from '../util/FetchUtils'
import ApiSrc from '../api/ApiSrc'

export const TYPE = {
    Popular: 'POPULAR',
    Trending: 'TRENDING'
};



export default class RepositoryService {
    constructor(type){
        this.type = type;
    }

    fetchOnlineData = (url) => {
        return new Promise((resolve,reject) => {
            FetchUtils.get(url)
                .then(data => {
                    resolve(data);
                })
                .catch(error => {
                    reject(error);
                })
        });
    };

    fetchData = (lauguage,since) => {
        let url;
        if (this.type === TYPE.Popular) {
            url = ApiSrc.GET_POPULAR_REPO(lauguage)
        } else if (this.type === TYPE.Trending) {
            url = ApiSrc.GET_TRENDING_REPO(lauguage,since);
        }

        return new Promise((resolve,reject) => {
                this.fetchOnlineData(url)
                    .then(data => {
                        resolve(data);
                    })
                    .catch(error => {
                        reject(error);
                    })
            }
        )
    }

}