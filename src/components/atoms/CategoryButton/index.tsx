import React from "react";
import { Button, styled, Theme, useTheme, lighten } from "@mui/material";
import Image from "next/image";

const StyledButton = styled(Button)(
  ({ theme, isActive }: { theme: Theme; isActive: boolean }) => ({
    minWidth: "100px",
    background: isActive
      ? theme.palette.colors.orange500
      : theme.palette.colors.white,
    color: isActive ? theme.palette.colors.white : theme.palette.colors.grey,
    fontSize: "16px",
    fontWeight: 500,
    "&:hover": {
      background: isActive
        ? theme.palette.colors.orange500
        : lighten(theme.palette.colors.orange500, 0.2),
      color: theme.palette.colors.white,
    },
  })
);
type Props = {
  isActive: boolean;
  icon?: string;
  text: string;
  onClick: () => void;
};

const CategoryButton = ({
  isActive,
  icon = undefined,
  text,
  onClick,
}: Props) => {
  const theme = useTheme();
  return (
    <StyledButton
      theme={theme}
      isActive={isActive}
      startIcon={
        icon ? (
          <Image width={24} height={24} src={icon} alt={`${text} category`} />
        ) : undefined
      }
      onClick={onClick}
    >
      {text}
    </StyledButton>
  );
};

export default CategoryButton;
