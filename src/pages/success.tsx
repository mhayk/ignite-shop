import Link from "next/link";
import { ImageContainer } from "../styles/pages/success";
import { SuccessContainer } from "../styles/pages/success";

export default function Success() {
    return (
        <SuccessContainer>
            <h1>Thanks for your order.</h1>

            <ImageContainer>

            </ImageContainer>

            <p>
                Uhuul <strong>Mhayk Whandson</strong>, your <strong>Shirt</strong> is on the way !
            </p>

            <Link href="/">
                Back to catalog
            </Link>
        </SuccessContainer>
    )
}