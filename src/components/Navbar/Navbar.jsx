import React from "react";
import { AppBar, Toolbar, IconButton, Badge, Typography } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link, useLocation } from 'react-router-dom';
import useStyles from './styles';

export default function Navbar({ totalItems }){
    const classes = useStyles();
    const location = useLocation();
    return(
        <>
           <AppBar position="fixed" className={classes.appBar} color="inherit">
               <Toolbar>
                   <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                       <img src='https://i.ibb.co/Qp1SXBw/commerce.png' alt="Commerce.js" height="25px" className={classes.image} />
                       E-Commerce Site
                   </Typography>
                   <div className={classes.grow} />
                   {location.pathname === "/" && (
                   <div className={classes.button}>
                       <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                           <Badge badgeContent={totalItems} color="secondary">
                               <ShoppingCart />
                           </Badge>
                       </IconButton>
                   </div> )}
               </Toolbar>
            </AppBar> 
        </>
    )
}