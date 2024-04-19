import React from 'react';
import Greeting from '@/components/atoms/Greeting';
import PaperContainer from '@/components/atoms/PaperContainer';
import SearchInput from '@/components/atoms/SearchInput';
import FilterBlock from '@/components/molecules/FilterBlock';
import ProductList from '@/components/molecules/ProductList';
import { Box } from '@mui/material';

type Props = {};

const HomeOrganism = (props: Props) => {
  return (
    <Box sx={{
      paddingBottom: '72px'
    }}>
      <PaperContainer
        sx={{
          mt: '24px',
        }}
      >
        <Greeting name="Michael" />
      </PaperContainer>
      <PaperContainer
        sx={{
          my: '24px',
        }}
      >
        <SearchInput />
        <FilterBlock />
      </PaperContainer>
      <ProductList />
    </Box>
  );
};

export default HomeOrganism;
