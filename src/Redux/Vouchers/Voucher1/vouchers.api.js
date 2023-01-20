import axios from "axios";

const getVouchersAPI = async () => {
  let response = await axios.get("http://localhost:8080/vouchers");
  return response.data;
};

export default getVouchersAPI;