import useBaseUrl from "../Hooks/useBaseUrl";

const axiosPub = useBaseUrl;
const reducerFn = (data, action) => {
  if (action.type === "added") {
    return axiosPub.post("/products", action.productsInfo).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "product has been added",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  }
};
export default reducerFn;
