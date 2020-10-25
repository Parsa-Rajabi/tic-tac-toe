import React from 'react';
import { Button } from '@material-ui/core';


const Square = ({value, onClick}) => (
    <Button   size = "large"
              variant = "outlined"
              color = "primary"
              onClick={onClick}>
        {value}
    </Button>
);

export default Square;