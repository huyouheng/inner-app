import Cookie from 'js-cookie';

export default {
    setToken(token){
        window.localStorage.setItem('jwt_token',token);
    },

    getToken(){
        return window.localStorage.getItem('jwt_token');
    },

    removeToken(){
        window.localStorage.removeItem('jwt_token');
    },

    setAuthId (cookie){
    	Cookie.set('auth_id',cookie);
    },

    getAuthId (){
    	return Cookie.get('auth_id');
    }

}