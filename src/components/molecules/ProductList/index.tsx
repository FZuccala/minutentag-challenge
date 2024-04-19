import React, { useMemo } from "react";
import BlockTitle from "@/components/atoms/BlockTitle";
import { useGlobalStore } from "@/store/global";
import { EFilter } from "@/types/enums/filter";
import { CircularProgress, Grid } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { fetchProductsList } from "@/services";
import ProductCard from "../Card";
import PaperContainer from "@/components/atoms/PaperContainer";
import BEER_TYPES from "@/utils/beersType";
import WINE_TYPES from "@/utils/wineType";

type Props = {};
const ProductList = (props: Props) => {
  const { setFilter, setSearch, search, filter } = useGlobalStore();
  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProductsList,
  });
  const handleClickSeeAll = () => {
    setSearch("");
    setFilter(EFilter.ALL);
  };
  const info = useMemo(() => {
    if(!products) return [];
    let items = products.data;
    switch (filter) {
      case EFilter.BEER:
        items = items.filter((product) => BEER_TYPES.includes(product.style));
        break;
      case EFilter.WINE:
        items = items.filter((product) => WINE_TYPES.includes(product.style));
        break;
      case EFilter.ALL:
      default:
        break;
    }
    return items.filter((product) => product.brand.toLowerCase().includes(search.toLowerCase()));
  }, [products, search, filter])
  return (
    <PaperContainer>
      <BlockTitle title={"Product List"} onClick={handleClickSeeAll} />
      {isLoading ? (
        <CircularProgress
          sx={{
            color: (theme) => theme.palette.colors.orange500,
          }}
        />
      ) : (
        <Grid container spacing={2} >
          {info.map((product) => (
            <Grid item xs="auto" md={3} key={product.id} >
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      )}
    </PaperContainer>
  );
};

export default ProductList;
