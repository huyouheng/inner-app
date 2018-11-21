import JwtToken from './../../utils/jwt';

export default {
	actions: {
		loginRequest ({dispatch},formData) {
            return axios.post('/api/login', formData)
                .then(response => {
                    dispatch('loginSuccess',response.data);
                })
                .catch(error => {
                    if (error.response.status === 400) {
                        $.custrom.msg('error', error.response.data.message);
                    } else if (error.response.status === 401) {
                        $.custrom.msg('error', error.response.data.message);
                    } else if (error.response.status === 422) {
                        $.custrom.msg('error', '用户名和邮箱不能为空...');
                    }
                });
        },
        
        loginSuccess ({dispatch}, tokenResponse){
            JwtToken.setToken(tokenResponse.token);
            JwtToken.setAuthId(tokenResponse.auth_id);
            dispatch('setAuthUser');
        },

        logoutRequest  ({dispatch}) {
            return axios.post('/api/logout').then(reponse=>{
                JwtToken.removeToken();
                dispatch('unsetAuthUser');
            });
        },
	}
}