import React ,{useState,useEffect}from 'react'
import {Paper,Stepper,Step,StepLabel,CircularProgress,Divider,Button,Typography} from '@material-ui/core'
import useStyle from './styles'
import AddressForm from '../AddressForm'
import PaymentForm from '../PaymentForm'
import {commerce} from '../../../Lib/Commerce'
const steps=['shipping address','payment details']
const Checkout = ({cart}) => {
    const classes=useStyle();
    const [activeStep ,setActiveStep]=useState(0);
    const [checkoutToken,setCheckoutToken]=useState(null);

useEffect(()=>{
    const generateToken=async()=>{
try {
const token=await commerce.checkout.generateToken(cart.id,{type:'cart'})
console.log(token);
setCheckoutToken(token)

}catch(error){

}
    }
generateToken();
},[cart])

    const Confirmation=()=>(
        <div>
            Confirmation
        </div>
    )
    const Form =()=>(
        activeStep===0
        ?<AddressForm checkoutToken={checkoutToken}/>
        :<PaymentForm />
    )
    return (
        <>
        <div className={classes.toolbar}/>
         <main className={classes.layout}>
         <Paper className={classes.paper}>
             <Typography variant='h4' align='center'>Chekout</Typography>
             <Stepper activeStep={activeStep} className={classes.stepper}>
             {steps.map((step)=>(
                 <Step key={step}>
                     <StepLabel>
                         {step}
                     </StepLabel>
                 </Step>
             ))}
             </Stepper>
             {activeStep===steps.length ? <Confirmation/> : checkoutToken &&<Form/>}

         </Paper>
         </main>   
        
        </>
    )
}

export default Checkout
