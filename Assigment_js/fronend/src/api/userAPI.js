import { axiosClient } from './axiosClient';

const UserAPI = {
    getAll(){
        const url = `/users`;
        return axiosClient.get(url);
    },
    get(id){
        const url = `/users/${id}`;
        return axiosClient.get(url);
    },
    add(category){
        const url = `/users`;
        return axiosClient.post(url, category);
    },
    remove(id){
        const url = `/users/${id}`;
        return axiosClient.delete(url);
    },
    update(id,data){
        const url = `/users/${id}`;
        return axiosClient.put(url, data);
    }
   
}
export default UserAPI;