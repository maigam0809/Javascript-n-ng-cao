import { axiosClient } from './axiosClient';

const CategoryAPI = {
    getAll(){
        const url = `/categories`;
        return axiosClient.get(url);
    },
    get(id){
        const url = `/categories/${id}`;  
        return axiosClient.get(url);
    },
    add(category){
        const url = `/categories`;
        return axiosClient.post(url, category);
    },
    remove(id){
        const url = `/categories/${id}`;
        return axiosClient.delete(url);
    },
    update(id,data){
        const url = `/categories/${id}`;
        return axiosClient.put(url, data);
    }
   
}
export default CategoryAPI;

// api laravel
// {
//     "success": true,
//     "data": [

//     ]
// }

// api db.json
// []