// import NewAPI from '../api/NewAPI';

import UserAPI from "../api/userAPI";
import { $ } from "../untils";

const RegisterPage={
    async render(){
        return /*html*/`
                 <!-- bắt đầu phần content -->
                 <div class="container-fluild register-detail">
                    <div class="container">
                        <h4>ĐĂNG KÝ TÀI KHOẢN</h4>
                        <p>Nếu chưa có tài khoản vui lòng đăng ký tại đây</p>
                        <form action="" class="form-group" id="form-add">
                            <div class="form-group">
                                <label for="email">Họ tên *</label>
                                <input type="text" class="form-control" id="user_name" required placeholder="Họ tên" required>
                            </div>
                            <div class="form-group">
                                <label for="email">Email *</label>
                                <input type="email" class="form-control" id="email" required placeholder="Email" required>
                            </div>
                            <div class="form-group">
                                <label for="pwd">Mật khẩu *</label>
                                <input type="password" class="form-control" id="password" required placeholder="Mật khẩu" required>
                            </div>
                            <div class="form-group">
                                <label for="pwd">Xác nhận mật khẩu *</label>
                                <input type="password" class="form-control" id="password2" required placeholder=" Xác nhận mật khẩu" required>
                            </div>
                            <div class="form-group">
                                <button class="btn btn-primary">Đăng ký</button>
                                <a class="btn btn-info" href="/#/login">Đăng nhập</a>
                            </div>
                        </form>
                    </div>

                </div>
       
        
        `
    },
    async afterRender(){
        $('#form-add').addEventListener('submit', e =>{ 
            if($('#user_name') == ''){
                alert("Bạn chưa nhập user name!")
            }
            

            e.preventDefault()
            if($('#email').value == '');
            alert("Đăng ký thành công");

            const category ={
                id: Math.random().toString(36).substring(7),
                user_name : $('#user_name').value,
                email : $('#email').value,
                password : $('#password').value,
                image : url
            }

            UserAPI.add(category);
         
       })
        
        
    }
    
}
export default RegisterPage;