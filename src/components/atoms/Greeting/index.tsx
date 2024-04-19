import React from "react";
import { Stack, Typography, styled } from "@mui/material";

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
    <Stack>
      <StyledSubTitle variant="h3">Hi Mr. {name},</StyledSubTitle>
      <StyledTitle variant="h1">Welcome Back!</StyledTitle>
    </Stack>
  );
};

export default Greeting;
