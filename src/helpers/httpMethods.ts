import axios, { AxiosResponse } from 'axios';
const base_url = 'https://restful-booker.herokuapp.com';

export const getRequest = async (url: string): Promise<AxiosResponse<any, any>> => {
	return await axios({
		method: 'get',
		baseURL: base_url + url,
		headers: { 'Content-Type': 'application/json' }
	});
};

export const postRequest = async (url: string, body: any): Promise<AxiosResponse<any, any>> => {
	return await axios({
		method: 'post',
		baseURL: base_url + url,
		headers: { 'Content-Type': 'application/json' },
		data: body
	});
};

export const putRequest = async (url: string): Promise<AxiosResponse<any, any>> => {
	return await axios({
		method: 'put',
		baseURL: base_url + url,
		headers: { 'Content-Type': 'application/json' }
	});
};

export const deleteRequest = async (url: string): Promise<AxiosResponse<any, any>> => {
	return await axios({
		method: 'delete',
		baseURL: base_url + url,
		headers: { 'Content-Type': 'application/json' }
	});
};

export const patchRequest = async (url: string): Promise<AxiosResponse<any, any>> => {
	return await axios({
		method: 'patch',
		baseURL: base_url + url,
		headers: { 'Content-Type': 'application/json' }
	});
};
