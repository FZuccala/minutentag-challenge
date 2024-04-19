import React, { useMemo } from "react";
import BlockTitle from "@/components/atoms/BlockTitle";
import { Box, styled } from "@mui/material";
import CategoryButton from "@/components/atoms/CategoryButton";
import { EFilter } from "@/types/enums/filter";
import { useGlobalStore } from "@/store/global";

type Props = {};
const StyledActionContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "4px",
  marginBottom: "12px",
  minWidth: "200px",
  width: "100%",
  overflowX: "auto",
});
const FilterBlock = (props: Props) => {
  const { filter, setFilter } = useGlobalStore();
  const categories = useMemo(
    () => [
      {
        text: EFilter.ALL,
        icon: undefined,
        onClick: () => setFilter(EFilter.ALL),
        isActive: filter === EFilter.ALL,
      },
      {
        text: EFilter.BEER,
        icon: "/assets/images/Beer.png",
        onClick: () => setFilter(EFilter.BEER),
        isActive: filter === EFilter.BEER,
      },
      {
        text: EFilter.WINE,
        icon: "/assets/images/Wine-glass.png",
        onClick: () => setFilter(EFilter.WINE),
        isActive: filter === EFilter.WINE,
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [filter]
  );
  return (
    <>
      <BlockTitle
        title="Drink Category"
        onClick={() => setFilter(EFilter.ALL)}
      />
      <StyledActionContainer>
        {categories.map((category, index) => (
          <CategoryButton
            key={index}
            text={category.text}
            icon={category.icon}
            isActive={category.isActive}
            onClick={category.onClick}
          />
        ))}
      </StyledActionContainer>
    </>
  );
};

export default FilterBlock;
