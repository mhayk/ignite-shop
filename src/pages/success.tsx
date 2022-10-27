import { GetServerSideProps } from "next";
import Link from "next/link";
import { stripe } from "../lib/stripe";
import { ImageContainer } from "../styles/pages/success";
import { SuccessContainer } from "../styles/pages/success";
import Stripe from 'stripe'
import Image from "next/future/image";

interface SuccessProps {
    customerName: string;
    product: {
        name: string;
        imageUrl: string;
    }
}

export default function Success({ customerName, product}: SuccessProps) {
    return (
        <SuccessContainer>
            <h1>Thanks for your order.</h1>

            <ImageContainer>
                <Image src={product.imageUrl} width={120} height={100} alt="" />
            </ImageContainer>

            <p>
                Uhuul <strong>{customerName}</strong>, your <strong>{product.name}</strong> is on the way !
            </p>

            <Link href="/">
                Back to catalog
            </Link>
        </SuccessContainer>
    )
}

// Client-side (useEffect) / getServerSideProps / getStaticProps

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const sessionId = String(query.session_id);

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ['line_items', 'line_items.data.price.product']
    })

    const customerName = session.customer_details.name;
    const product = session.line_items.data[0].price.product as Stripe.Product;

    return {
        props: {
            customerName,
            product: {
                name: product.name,
                imageUrl: product.images[0]
            }
        }
    }
}