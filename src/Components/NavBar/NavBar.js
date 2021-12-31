import React from 'react'
import{AppBar,Toolbar,IconButton,Badge,Typography} from "@material-ui/core";
import { ShoppingCart } from '@material-ui/icons';
import {Link,useLocation}from 'react-router-dom'
import usStyle from './Styles'
import logo from '../../Assets/commerce.png'
 const NavBar = ({totalItems}) => {
     const classes=usStyle()
     const location=useLocation()
    return (
        <>
        <AppBar position='fixed' className={classes.appBar} color='inherit'>
            <Toolbar>
                <Typography  component={Link} to ='/' variant='h6' className={classes.title} color='inherit'>
<img  src={logo} alt='commerce' height='25px' className={classes.image}/>
commerce
                </Typography>
                <div className={classes.grow}/>
                {location.pathname ==='/' &&(
                <div className={classes.button}>
                   
                    <IconButton  component={Link} to ='/cart'  aria-label='show cart items' color='inherit'>
                        <Badge badgeContent={totalItems}color='secondary'>
<ShoppingCart/>
                        </Badge>
                    </IconButton>

                </div>)}
            </Toolbar>
        </AppBar>
            
        </>
    )
}
export default NavBar;