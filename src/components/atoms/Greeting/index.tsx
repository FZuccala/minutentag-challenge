import React from "react";
import { Stack, Typography, styled } from "@mui/material";
const StyledContainer = styled(Stack)({
  margin: "20px 0 24px 0",
  padding: "0 12px",
});
const StyledTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  fontSize: "24px",
  fontWeight: 700,
}));
const StyledSubTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.colors.gray300,
  fontSize: "16px",
  fontWeight: 400,
}));
type Props = {
  name: string;
};

const Greeting = ({ name }: Props) => {
  return (
    <StyledContainer>
      <StyledSubTitle variant="h3">Hi Mr. {name},</StyledSubTitle>
      <StyledTitle variant="h1">Welcome Back!</StyledTitle>
    </StyledContainer>
  );
};

export default Greeting;
