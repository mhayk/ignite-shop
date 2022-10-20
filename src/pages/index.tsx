import type { NextPage } from 'next'
import Image from 'next/future/image'
import { HomeContainer, Product } from '../styles/pages/home'

import shirt1 from '../assets/shirts/1.png'
import shirt2 from '../assets/shirts/2.png'
import shirt3 from '../assets/shirts/3.png'


const Home: NextPage = () => {
  return (
    <HomeContainer>
      <Product>
        <Image src={shirt1} width={520} height={480} alt="" />
        <footer>
          <strong>Shirt X</strong>
          <span>£79.90</span>
        </footer>
      </Product>
      <Product>
        <Image src={shirt2} width={520} height={480} alt="" />
        <footer>
          <strong>Shirt X</strong>
          <span>£79.90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}

export default Home
