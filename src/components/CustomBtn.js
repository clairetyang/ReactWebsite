import React from 'react'
import {Button} from '@material-ui/core'
import { withStyles } from '@material-ui/styles'

const StyledButton = withStyles({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "44px",
        padding: "0 25px",
        boxSizing: "border-box",
        borderRadius: 0, 
        background: "#5ABCB9",
        color: "#fff",
        transform: "none",
        boxShadow: "6px 6px 0 0 #F6EFA6",
        transition: "background .3s,border-color .3s,color .3s",
        "&:hover": {
            backgroundColor:  "#63E2C6"
          },
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);

function CustomBtn(props) {
    return (
        <StyledButton variant="contained">
            {props.txt}
        </StyledButton>
    )
}

export default CustomBtn