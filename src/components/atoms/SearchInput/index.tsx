import React from "react";
import { useGlobalStore } from "@/store/global";
import { styled, TextField, textFieldClasses, Box } from "@mui/material";
import { CiSearch } from "react-icons/ci";

const StyledTextField = styled(TextField)(({ theme }) => ({
  boxShadow: theme.shadows[1],
  borderRadius: "12px",
  border: "none",
  width: "100%",
  maxWidth: "327px",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: "8px",
  marginBottom: "12px",
  transition: "all ease-in-out 1s",
  ':focus-within': {
    maxWidth: "unset",
  },
  "& div": {
    width: "100%",
  },
  " :placeholder": {
    color: "#C4C4C4",
  },
}));
type Props = {};

const SearchInput = (props: Props) => {
  const { search, setSearch } = useGlobalStore();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <StyledTextField
      value={search}
      onChange={handleChange}
      variant="standard"
      placeholder="Search burger, pizza, drink or ect..."
      InputProps={{
        startAdornment: (
          <Box
            component="span"
            sx={{
              display: "flex",
              alignItems: "center",
            }}
            mr={1}
          >
            <CiSearch />
          </Box>
        ),
        disableUnderline: true,
      }}
    />
  );
};

export default SearchInput;
