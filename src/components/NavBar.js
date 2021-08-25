import React from 'react'
import { Toolbar, Typography } from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles"

const styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        backgroundColor: "#fff",
        ['@media (max-width:780px)']: { 
           flexDirection: "column"
          }
    },
    menuItem: {
        cursor: "pointer", 
        flexGrow: 1,
        "&:hover": {
            color:  "#FFC0CB"
        },
        ['@media (max-width:780px)']: { 
            paddingBottom: "1rem"    },

    }
})

function NavBar() {
    const classes = styles()
    return (
        <Toolbar position="sticky" color="rgba(0,0,0,0.87)" className={classes.bar}>
            <Typography variant="h4" className={classes.menuItem}>
                Coder
            </Typography>
            <Typography variant="h4" className={classes.menuItem}>
                Designer
            </Typography>
            <Typography variant="h4" className={classes.menuItem}>
                Artist
            </Typography>
            <Typography variant="h4" className={classes.menuItem}>
                Creator
            </Typography>
        </Toolbar>
    )
}

export default NavBar