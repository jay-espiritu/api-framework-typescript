import axios, { AxiosResponse } from 'axios';
const base_url = 'https://restful-booker.herokuapp.com';

export const getRequest = async (url: string): Promise<AxiosResponse<any, any>> => {
	return await axios.get(base_url + url);
};

export const postRequest = async (url: string): Promise<AxiosResponse<any, any>> => {
	return await axios.post(base_url + url);
};

export const putRequest = async (url: string): Promise<AxiosResponse<any, any>> => {
	return await axios.put(base_url + url);
};

export const deleteRequest = async (url: string): Promise<AxiosResponse<any, any>> => {
	return await axios.delete(base_url + url);
};

export const patchRequest = async (url: string): Promise<AxiosResponse<any, any>> => {
	return await axios.patch(base_url + url);
};
