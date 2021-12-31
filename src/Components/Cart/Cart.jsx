import React from 'react'
import {Container,Typography,Button,Grid} from '@material-ui/core';
import CartItem from './CartItem/CartItem';
import {Link}from 'react-router-dom'
import useStyles from './style'
const Cart = ({cart,handleEmptyCart,handleRemoveCart,handleUpdateCart}) => {
    const classes=useStyles();
    
    const EmptyCart=()=>(<Typography variant='subtitle1'>you have no item in your shoping cart please add some!
    <Link to='/' className={classes.link}>start adding some! </Link>
    </Typography>)
        
    
    const FilledCart=()=>(
        <>
        <Grid spacing={3}>
{cart.line_items.map((item)=>(
    <Grid item xs={12} sm={4} key={item.id}>
        <CartItem item={item}onUpdateCartQty={handleUpdateCart} onRemoveFromCart={handleRemoveCart}/>
        </Grid>
))}
        </Grid>
        <div className={classes.cardDetails}>
<Typography variant='h4'>
subTotal:{cart.subtotal.formatted_with_symbol}
</Typography>
        </div>
        <div>
            <Button className={classes.emptyButton} size='large' type='button' variant='contained' color='secondary' onClick={handleEmptyCart}>Empty Cart</Button>
            <Button component={Link} to='/chekout' className={classes.checkoutButton} size='large' type='button' variant='contained' color='primary'>Checkout</Button>
        </div>
        </>
    )
if(!cart.line_items) return 'loading::::'
  
    return (
        <Container>
             <div className={classes.toolbar} />
            
            <Typography className={classes.title} variant='h3' gutterBottom>Your Shoping Cart</Typography>
             {!cart.line_items.length? <EmptyCart /> :<FilledCart />}
             
        </Container>
      
    )
}

export default Cart
