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
		setAuthUser ({commit,state}) {
			return axios.get('/api/user').then(reponse=>{
				commit({
					type: types.SET_AUTH_USER,
					user: reponse.data
				})
			});
		}
	},
	mutations: {
		[types.SET_AUTH_USER] (state,data){
			state.authenticated = true;
			state.user = data.user;
		}
	}

}