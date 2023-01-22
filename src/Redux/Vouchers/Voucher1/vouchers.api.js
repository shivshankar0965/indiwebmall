import axios from "axios";

const getVouchersAPI = async () => {
  let response = await axios.get("https://indiwebmallapi.onrender.com/vouchers");
  return response.data;
};

export default getVouchersAPI;