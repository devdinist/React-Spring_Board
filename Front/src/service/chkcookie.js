class Chklogin {
    islogin(){
        const res = window.sessionStorage.getItem('token');
        if(res != null){
            return true;
        }else{
            return false;
        }
    }

    gettoken(){
        if(this.islogin){
            return "Bearer " + window.sessionStorage.getItem('token');
        }else{
            return false;
        }
    }

    getuser(){
        if(this.islogin){
            return window.sessionStorage.getItem('user');
        }else{
            return false;
        }
    }

    settoken(token){
        return window.sessionStorage.setItem('token',token);
    }

    setuser(user){
        return window.sessionStorage.setItem('user',user);
    }

    logout(){
        window.sessionStorage.removeItem('token');
        window.sessionStorage.removeItem('user');
    }
}

export default new Chklogin();