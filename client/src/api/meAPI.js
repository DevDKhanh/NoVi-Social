import axiosClient from '.';
import { getItemStorage } from '../utils/localStorage';

const routeName = '/me';

export const meAPI = {
	updateAvatar: formData => {
		const url = `${routeName}/avatar`;
		return axiosClient.put(url, formData, {
			headers: {
				Authorization: 'Bearer ' + getItemStorage('accessToken'),
			},
		});
	},
	updateCoverImage: formData => {
		const url = `${routeName}/cover-image`;
		return axiosClient.put(url, formData, {
			headers: {
				Authorization: 'Bearer ' + getItemStorage('accessToken'),
			},
		});
	},
	isLike: id => {
		const url = `${routeName}/isLike?id=${id}`;
		return axiosClient.get(url, {
			headers: {
				Authorization: 'Bearer ' + getItemStorage('accessToken'),
			},
		});
	},
};
