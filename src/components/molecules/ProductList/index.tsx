import React from "react";
import BlockTitle from "@/components/atoms/BlockTitle";
import { useGlobalStore } from "@/store/global";
import { EFilter } from "@/types/enums/filter";
import { Box, CircularProgress, Grid } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { fetchProductsList } from "@/services";
import ProductCard from "../Card";

type Props = {};

const ProductList = (props: Props) => {
  const { setFilter, setSearch } = useGlobalStore();
  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProductsList,
  });
  const handleClickSeeAll = () => {
    setSearch("");
    setFilter(EFilter.ALL);
  };
  return (
    <Box>
      <BlockTitle title={"Product List"} onClick={handleClickSeeAll} />
      {isLoading ? (
        <CircularProgress
          sx={{
            color: (theme) => theme.palette.colors.orange500,
          }}
        />
      ) : (
        <Grid>
          {products?.data?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default ProductList;
