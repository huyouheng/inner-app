import JwtToken from './../../utils/jwt';

export default {
	actions: {
		loginRequest: ({dispatch},formData)=>{
            return axios.post('/api/login', formData)
                .then(response => {
                    JwtToken.setToken(response.data.token);
                    dispatch('setAuthUser');
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
        }
	}
}