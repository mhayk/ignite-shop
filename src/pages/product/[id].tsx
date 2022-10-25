import { useRouter } from "next/router"
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"

export default function Product() {
    const { query} = useRouter()
    return (
        <ProductContainer>
            <ImageContainer>

            </ImageContainer>

            <ProductDetails>
                <h1>Shirt X</h1>
                <span>£ 79.90</span>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, aperiam animi? Fuga ducimus debitis culpa deleniti cumque in, doloribus iste aperiam repudiandae cum vero vitae nam harum officiis! Saepe, deleniti.</p>

                <button>BUY NOW</button>
            </ProductDetails>
        </ProductContainer>
    )
}