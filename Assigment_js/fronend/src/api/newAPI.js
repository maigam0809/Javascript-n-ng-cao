import { axiosClient } from './axiosClient';

const NewAPI = {
    getAll(){
        const url = `/news`;
        return axiosClient.get(url);
    },
    get(id){
        const url = `/news/${id}`;
        return axiosClient.get(url);
    },
    add(result){
        const url = `/news`;
        return axiosClient.post(url, result);
    },
    remove(id){
        const url = `/news/${id}`;
        return axiosClient.delete(url);
    },  
    update(id,data){
        const url = `/news/${id}`;
        return axiosClient.put(url, data);
    }
}
export default NewAPI;