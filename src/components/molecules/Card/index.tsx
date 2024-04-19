import { convertToDollars, intlPrice } from "@/utils/conversion";
import { Box, styled, Typography, IconButton } from "@mui/material";
import { LuPlus } from "react-icons/lu";
import React from "react";
import { IProduct } from "@/types/interfaces/Products";
import { useRouter } from "next/router";

const StyledCard = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: theme.palette.background.paper,
  borderRadius: "12px 32px 12px 12px",
  width: "150px",
  maxWidth: "240px",
  padding: "10px",
  boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
  position: 'relative',
  cursor: 'pointer',
  transition: 'all 0.3s ease-in-out',
  ':hover': {
    transform: 'scale(1.05)'
  },
  [theme.breakpoints.up('md')]: {
    width: "100%",
  }
}));
const StyledCardText = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  fontWeight: 500,
  color: theme.palette.colors.grey,
}));
const StyledCardFooter = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
});
const StyledCardBtn = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.colors.orange500,
  color: theme.palette.colors.white,
  borderRadius: "8px 0px 8px 0px",
  position: 'absolute',
  bottom: '0',
  right: '0',
  transition: 'all 0.3s ease-in-out',
  ':hover': {
    backgroundColor: theme.palette.colors.orange600,
  }
}));
const StyledImage = styled("img")({
  height: '140px',
  objectFit: 'cover',
});
type Props = {
  product: IProduct;
};

const ProductCard = ({ product }: Props) => {
  const router = useRouter();
  const { brand: name, price, image } = product;
  const handleClickCard = () => {
    const route = `/${product.id}-${product.brand.replace(/\s/g, "-")}`;
    router.push(route);
  }
  return (
    <StyledCard onClick={handleClickCard}>
      <StyledCardText variant={"h5"}>{name}</StyledCardText>
      <StyledImage src={`/assets/images${image}`} alt={name} />
      <StyledCardFooter>
        <StyledCardText variant={"h6"}>{intlPrice(price)}</StyledCardText>
        <StyledCardBtn>
          <LuPlus />
        </StyledCardBtn>
      </StyledCardFooter>
    </StyledCard>
  );
};

export default ProductCard;
