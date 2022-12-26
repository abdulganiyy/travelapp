import Axios from "axios";

const baseUrl = "http://localhost:5000/";

export const auth = async (data: any) => {
  const response = await Axios.post(`${baseUrl}/api/login`, data);

  return response.data;
};
