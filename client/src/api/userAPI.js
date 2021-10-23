import axiosClient from '.';

const routeName = '/user';

export const userAPI = {
	getInfoPublic: email => {
		const url = `${routeName}/public/${email}`;
		return axiosClient.get(url);
	},
	getUser: query => {
		const url = `${routeName}/data?id=${query}`;
		return axiosClient.get(url);
	},
};
