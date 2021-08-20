import CategoryAPI from "../api/categoryAPI";

const Menu ={
    async render(){
        const {data: result} = await CategoryAPI.getAll();
        // check success or false
    
        const categories = result.data;
         return /*html*/`
            ${
                 categories.map(category=>{
                     return `
                        <li><a href="/#/categories/${category.id}"><img class="hiden-none" src="http://127.0.0.1:8000/${category.image}" style="max-width: 42px !important;" alt="">
                        ${category.name}
                        </a></li>

                     `
                 }).join("")
            }
        `
    }
}
export default Menu;