import { useQuery } from "@tanstack/react-query";

const useLimitedData = (quantity) => {
  const { data: limitedProducts = [], status} = useQuery({
    
    queryKey: ["limitedProducts", quantity],
    queryFn: async () => {
      const response = await fetch(`https://fakestoreapi.com/products?limit=${quantity}`);
      return response.json();
    },
  });
  return [limitedProducts, status]
};

export default useLimitedData;