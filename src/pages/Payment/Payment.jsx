import { useLoaderData } 
from "react-router-dom";
import Tittle from 
"../../component/Tittle";

import {loadStripe}
 from '@stripe/stripe-js';
 import { Elements }
 from "@stripe/react-stripe-js";
import CheackoutForm from "./CheackoutForm";


const Payment = () => {
    const data=useLoaderData();
    const stripePromise=loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
    const payPrice=data?.data?.price;
   
    // console.log(data.data);
    return (
        <div>
            <Tittle  heading=" This is the payment page for" subHeading={data?.data?.title}>
            </Tittle>


            <div>
            <Elements stripe={stripePromise}>
                <CheackoutForm
                data={data}
                payPrice={payPrice}
                 />
            </Elements>
            </div>
           
        </div>
    );
};

export default Payment;