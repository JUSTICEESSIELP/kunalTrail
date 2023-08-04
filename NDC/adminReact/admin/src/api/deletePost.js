import api from "./axiosBase";

const deletePostFnc = async (id) => {
  console.log(`/posts/${id}`);

  try {
    return await api.delete(`/posts/${id}`);
  } catch (error) {
    return error.message || error;
  }
};

export default deletePostFnc;
