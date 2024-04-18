import { convertToDollars } from "@/utils/conversion";
import { Box, styled, Typography, IconButton } from "@mui/material";
import { LuPlus } from "react-icons/lu";
import React from "react";
import { IProduct } from "@/types/interfaces/Products";
const StyledCard = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: theme.palette.background.paper,
  borderRadius: "12px, 32px, 12px, 12px",
  width: "100%",
  maxWidth: "160px",
  padding: "10px",
  boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
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
  borderRadius: "8px, 0px, 8px, 0px",
}));
const StyledImage = styled("img")({
  width: "100%",
});
type Props = {
  product: IProduct;
};

const ProductCard = ({ product }: Props) => {
  const { brand: name, price, image } = product;
  const intlPrice = (cents: number) => {
    const dollars = convertToDollars(cents);
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(dollars);
  };
  return (
    <StyledCard>
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
