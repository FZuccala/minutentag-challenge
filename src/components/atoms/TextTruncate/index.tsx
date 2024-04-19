import React, { useState } from 'react';
import { Typography, Button, Box, styled } from '@mui/material';
type Props = {
    text: string
}

const StyledLinkReadMore = styled(Typography)(({theme}) => ({
  color: theme.palette.colors.orange500,
  cursor: 'pointer',
  fontSize: '14px',
  fontWeight: 700,
  display: 'inline',
  position: 'absolute',
  bottom: '2px',
  right: '0',
}))
const TextTruncate = ({ text } : Props) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box sx={{
      position: 'relative',
      paddingRight: '73px',
    }}>
      <Typography variant="body1" component="div" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: expanded ? 'unset' : 3, WebkitBoxOrient: 'vertical', color: '#969696', fontWeight: 400 }}>
        {text}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <StyledLinkReadMore onClick={handleExpandClick} variant="body2">
          {expanded ? 'Read less' : 'Read more'}
        </StyledLinkReadMore>
      </Box>
    </Box>
  );
};

export default TextTruncate;