import CategoryAPI from "../api/categoryAPI";

const Header ={
    async render(){
        const {data: categories} = await CategoryAPI.getAll();
         return /*html*/`

         
            ${
                 categories.map(category=>{
                     return `
                        <li><a href="/#/categories/${category.id}"><img class="hiden-none" src="${category.image}" alt="">
                        ${category.name}
                        </a></li>

                     `
                 }).join("")
            }
        `
    }
}
export default Header;