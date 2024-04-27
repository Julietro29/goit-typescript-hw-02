import axios, { AxiosInstance } from 'axios';
import { BASE_URL, ACCESS_KEY } from './constants';

export const fetchData = async (searchStr: string, pageNum: number) => {
  const axiosInstance: AxiosInstance = axios.create({
    baseURL: BASE_URL,
  });

  const apiParams = new URLSearchParams({
    client_id: ACCESS_KEY,
    page: pageNum.toString(),
    query: encodeURIComponent(searchStr),
    per_page: '10',
  });

  const endPoint = `/search/photos?${apiParams.toString()}`;

  try {
    const response = await axiosInstance.get(endPoint);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log('An unknown error occurred.');
    }
  }
};