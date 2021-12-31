import React from 'react'
import{Card,CardMedia,CardContent,CardActions,Typography,IconButton} from '@material-ui/core';
import{AddShoppingCart}from '@material-ui/icons';
import useStyle from './Style';

 const Product = ({product,onAddToCart}) => {
const classes=useStyle();

    return (
      <Card className={classes.root}>
          <CardMedia className={classes.media} image={product.image.url} title={product.name}/>
<CardContent >
    <div className={classes.CardContent}>
<Typography variant='h5'gutterbotton='true'>
{product.name}
</Typography>
<Typography variant='h5'>
{product.price.formatted_with_symbol}
</Typography>
    </div>

    <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" component="p" />
</CardContent>
<CardActions disableSpacing className={classes.CardActions}>
    <IconButton aria-label='Add to card' onClick={()=>onAddToCart(product.id,1)}>
<AddShoppingCart />
    </IconButton>

</CardActions>
      </Card>
    )
}
export default Product;