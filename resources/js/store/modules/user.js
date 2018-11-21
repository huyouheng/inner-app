import * as types from './../mutation-type';

export default {
	state: {
		authenticated: false,
		user:{}
	},
	getters: {
		authUser: (state) => {
			return state.user;
		}
	},
	actions: {
		setAuthUser ({commit,dispatch}) {
			return axios.get('/api/user').then(response=>{
				commit({
					type: types.SET_AUTH_USER,
					user: response.data
				})
			}).catch(error=>{
				if (error.response.status === 401) {
					dispatch('refreshToken');
				}
			});
		},
		unsetAuthUser ({commit,state}){
			commit({
					type: types.UNSET_AUTH_USER,
				});
		},
		refreshToken  ({dispatch}) {
            return axios.post('/api/token/refresh').then(response=>{
                dispatch('loginSuccess');
            }).catch (error=> {
                //logout request
                console.log(error)
            });
        }
	},
	mutations: {
		[types.SET_AUTH_USER] (state,data){
			state.authenticated = true;
			state.user = data.user;
		},
		[types.UNSET_AUTH_USER] (state){
			state.authenticated = false;
			state.user = {};
		}
	}

}