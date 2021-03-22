
import { parseRequestUrl , $} from './untils.js';
import Error404 from './pages/Error404Page.js';


import Header from './components/Header.js';
import Footer from './components/Footer.js';


// client
import HomePage from './pages/HomePage.js';
import ProductsPage from './pages/ProductsPage.js';
import ProductDetail from './pages/ProductDetail.js';
import CategoryPage from './pages/CategoryPage.js';
import ProductSellings from './pages/Product_Selling.js';
import NewPage from './pages/NewPage.js';
import ContactPage from './pages/Contact.js';
import RegisterPage from './pages/Register.js';
import LoginPage from './pages/Login.js';
import ProductsSale from './pages/Product_Sale.js';
import NewDetail from './pages/NewDetail.js';


// Admin
import AdminProductsPage from './components/AdminProductPage.js';
import ProductAddPage from './components/AddProduct.js';
import ProductEditPage from './components/ProductEditPage.js';
import ListCate from './components/ListCate.js';
import CateEdit from './components/CateEdit.js';
import CateAddPage from './components/AddCate.js';
import ListNews from './components/ListNew.js';
import NewAdd from './components/AddNew.js';
import NewEdit from './components/NewEdit.js';
import ListContact from './components/ListContact.js';
import ListUser from './components/ListUser.js';



const routers ={
    '/': HomePage,
    '/products': ProductsPage,
    '/products/:id': ProductDetail,
    '/categories/:id': CategoryPage,
    '/new' : NewPage,
    '/contact' : ContactPage,
    '/register' : RegisterPage,
    '/login' : LoginPage,
    '/sale' : ProductsSale,
    '/product_selling' : ProductSellings,
    '/addproducts': ProductAddPage,
    '/listproducts': AdminProductsPage,
    '/listcate': ListCate,
    '/addcate': CateAddPage,
    '/editcategory/:id': CateEdit,
    '/editproducts/:id': ProductEditPage,
    '/listnews' : ListNews,
    '/editnew/:id' : NewEdit,
    '/addnew' : NewAdd,
    '/new/:id' : NewDetail,
    '/listcontacts' : ListContact,
    '/listuser' : ListUser
}


const router = async()=> {
    const { resource, id} =  parseRequestUrl();

    // console.log(parseRequestUrl());
    // console.log(id);

    const parseUrl = (resource ? `/${resource}` : '/' ) +
                    (id ? `/:id`: '');
    
    // console.log(parseUrl);
    const page =  routers[parseUrl] ? routers[parseUrl] : Error404;
    console.log(page);

    $('#header').innerHTML = await Header.render();
    $('#main-content').innerHTML = await page.render();
    // await page.afterRender();
    if (page.afterRender) {
        await page.afterRender();
      }
    $('#footer').innerHTML =  Footer.render();
    

    
}

window.addEventListener('DOMContentLoaded',router);
window.addEventListener('hashchange',router);
// $('#main-content').innerHTML = HomePage.render();

