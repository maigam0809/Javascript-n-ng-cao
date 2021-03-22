// import NewAPI from '../api/NewAPI';

const LoginPage ={
    async render(){
        return /*html*/`
                
       
    <div class="container-fluild login-detail">
        <div class="container">
            <h4>ĐĂNG NHẬP TÀI KHOẢN</h4>
            <div class="main">
                <div class="to-login">
                    <p>Nếu bán đã có tài khoản, đăng nhập tại đây</p>
                    <form action="">
                        <div class="form-group">
                            <label for="email">Email *</label>
                            <input type="email" class="form-control" id="email" required placeholder="Email">
                        </div>
                        <div class="form-group">
                            <label for="pwd">Mật khẩu *</label>
                            <input type="password" class="form-control" id="pwd" required placeholder="Mật khẩu">
                        </div>
                        <div class="form-group">
                            <button class="btn btn-primary">Đăng nhập</button>
                            <a class="btn btn-info" href="register.html">Đăng ký</a>
                        </div>
                    </form>
                </div>
                <div class="get-pass">
                    <p>Bạn quên mật khẩu? Nhập địa chỉ email để lấy lại mật khẩu qua email</p>
                    <form action="">
                        <div class="form-group">
                            <label for="email">Email *</label>
                            <input type="email" class="form-control" id="email" required placeholder="Email">
                        </div>
                        <div class="form-group">
                            <button class="btn btn-info">Lấy lại mật khẩu</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </div>
        
        `
    },
    async afterRender(){
        return ``;
    }
    
}
export default LoginPage;