import axiosClient from '.';

const routeName = '/me';

export const meAPI = {
	updateAvatar: formData => {
		const url = `${routeName}/avatar`;
		return axiosClient.put(url, formData);
	},
	updateCoverImage: formData => {
		const url = `${routeName}/cover-image`;
		return axiosClient.put(url, formData);
	},
};
