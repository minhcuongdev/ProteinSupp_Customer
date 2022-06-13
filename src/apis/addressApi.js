import axiosClient from "./axiosClient";

const addressApi = {
  getAllAddress: () => {
    return axiosClient.get("/addresses");
  },
  createAddress: (payload) => {
    return axiosClient.post("/addresses", payload);
  },
  deleteAddress: (addressId) => {
    return axiosClient.delete(`/addresses/${addressId}`)
  }
}

export default addressApi