import axios from "axios";

const getSingleVouchersAPI = async (voucher_id) => {
  try {
    let response = await axios.get(
      `https://indiwebmallapi.onrender.com/vouchers/${voucher_id}`
    );
    return response.data;
  } catch (error) {
    console.log("error:", error);
  }
};

export default getSingleVouchersAPI;
