import axiosClient from "./axiosClient";

const commentApi = {
  getComment: (productId) => {
    return axiosClient.get(`/comments?limit=4&productId=${productId}`);
  },
  getAllComment: (productId) => {
    return axiosClient.get(`/comments?productId=${productId}`);
  },
  createComment: (payload) => {
    return axiosClient.post("/comments",payload)
  }
};

export default commentApi;
