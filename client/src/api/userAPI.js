import axiosClient from '.';

const routeName = '/user';

export const userAPI = {
	getInfoPublic: id => {
		const url = `${routeName}/public/${id}`;
		return axiosClient.get(url);
	},
	getUser: query => {
		const url = `${routeName}/data?id=${query}`;
		return axiosClient.get(url);
	},
};
