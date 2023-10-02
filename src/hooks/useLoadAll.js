// import { useQuery } from "@tanstack/react-query";

// const useLoadAll = () => {
//   const { data: allProducts = [], status} = useQuery({
//     queryKey: ["allProducts"],
//     queryFn: async () => {
//       const response = await fetch('https://fakestoreapi.com/products');
//       return response.json();
//     },
//   });
//   return [allProducts, status]
// };

// export default useLoadAll;