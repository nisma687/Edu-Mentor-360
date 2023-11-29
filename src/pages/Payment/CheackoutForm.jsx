import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
// import useCourse from "../../hooks/useCourse";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";



const CheackoutForm = ({payPrice,data}) => {
    // console.log(payPrice);
    // console.log(data);
    const [error, setError] = useState('');
    // const [refetch]=us
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure=useAxiosSecure();
    const {user}=useAuth();
    const navigate = useNavigate();

    useEffect(() => {
    if (payPrice > 0) {
        axiosSecure.post('/create-payment-intent', { price: payPrice })
            .then(res => {
                console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret);
            })
    }

}, [axiosSecure, payPrice])
const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
        return
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
        return
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card
    })

    if (error) {
        console.log('payment error', error);
        setError(error.message);
    }
    else {
        console.log('payment method', paymentMethod)
        setError('');
    }
       // confirm payment
       const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
            card: card,
            billing_details: {
                email: user?.email || 'anonymous',
                name: user?.displayName || 'anonymous'
            }
        }
    })
    if (confirmError) {
        console.log('Confirm error', confirmError);
        setError(confirmError.message);
    }
    else {
        console.log('payment intent', paymentIntent)
        if (paymentIntent.status === 'succeeded') {
            console.log('transaction id', paymentIntent.id);
            setTransactionId(paymentIntent.id);

            // now save the payment in the database
            const payment = {
                email: user.email,
                price: payPrice ,
                transactionId: paymentIntent.id,
                date: new Date(), // utc date convert. use moment js to 
                // cartIds: cart.map(item => item._id),
                // menuItemIds: cart.map(item => item.menuId),
                title:data?.data?.title,
                description:data?.data?.description,
                name:data?.data?.name,
                img:data?.data?.img,
                status: 'pending',
                userId: user._id,
                // role:'student'
            }

            const res = await 
            axiosSecure.post('/payments', payment);
            console.log('payment saved', res.data);
            
            if (res.data?.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Thank you for successfully payment",
                    showConfirmButton: false,
                    timer: 1500
                });
                // window.location.reload();
                navigate('/dashboard/myCourses');
            }

        }
    }





}
    return (
        <form onSubmit={handleSubmit}>
        <CardElement
            options={{
                style: {
                    base: {
                        fontSize: '16px',
                        color: '#424770',
                        '::placeholder': {
                            color: '#aab7c4',
                        },
                    },
                    invalid: {
                        color: '#9e2146',
                    },
                },
            }}
        />
        <button className="btn btn-sm btn-primary my-4" type="submit" disabled={!stripe || !clientSecret}>
            Pay
        </button>
        <p className="text-red-600">{error}</p>
        {transactionId && <p className="text-green-600"> Your transaction id: {transactionId}</p>}
    </form>
    );
};

export default CheackoutForm;