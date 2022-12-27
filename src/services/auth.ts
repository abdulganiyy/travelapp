import Axios from "axios";

const baseUrl = "https://travelapp-api.onrender.com";

export const auth = async (data: any) => {
  const response = await Axios.post(`${baseUrl}/api/auth`, data);

  return response.data;
};
