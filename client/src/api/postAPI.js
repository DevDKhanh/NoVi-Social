import axiosClient from '.';
import { getItemStorage } from '../utils/localStorage';

const routeName = '/posts';

export const postAPI = {
	post: data => {
		const url = routeName;
		return axiosClient.post(url, data, {
			headers: {
				Authorization: 'Bearer ' + getItemStorage('accessToken'),
			},
		});
	},
	getAll: () => {
		const url = routeName;
		return axiosClient.get(url, {
			headers: {
				Authorization: 'Bearer ' + getItemStorage('accessToken'),
			},
		});
	},
	getPostsMe: query => {
		const url = `${routeName}/me?id=${query}`;
		return axiosClient.get(url, {
			headers: {
				Authorization: 'Bearer ' + getItemStorage('accessToken'),
			},
		});
	},
	handleLike: id => {
		const url = `${routeName}/like`;
		return axiosClient.put(url, { id });
	},
	getReactionCount: id => {
		const url = `${routeName}/reaction/count?id=${id}`;
		return axiosClient.get(url);
	},
};
