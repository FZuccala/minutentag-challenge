import React from "react";
import { Box, styled, Typography } from "@mui/material";

const StyledContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "12px",
});
const StyledSectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: "18px",
  fontWeight: 700,
  color: "#323232",
}));
const StyledLink = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  fontWeight: 400,
  color: "#646464",
  cursor: "pointer",
}));
type Props = {
  title: string;
  onClick: () => void;
};

const BlockTitle = ({ title, onClick }: Props) => {
  return (
    <StyledContainer>
      <StyledSectionTitle variant="h3">{title}</StyledSectionTitle>
      <StyledLink variant="h5" onClick={onClick}>
        See All
      </StyledLink>
    </StyledContainer>
  );
};

export default BlockTitle;
