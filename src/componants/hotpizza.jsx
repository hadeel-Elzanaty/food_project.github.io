import Product from "./shared/product";
import pizza1 from "../assets/images/product_3.3.jpg"
import pizza2 from "../assets/images/product_4.1.jpg"
import pizza3 from "../assets/images/product_4.2.jpg"
import pizza4 from "../assets/images/product_4.3.png"
import { useState } from "react";
import { Container, Col ,Row} from "react-bootstrap";
const HotPizza = () => {

    let hot = [{
        id: 1,
        type: "pizza",
        img: pizza1,
        name: "Seefood Pizza",
        price: 115

    },
    {
        id: 2,
        type: "pizza",
        img: pizza2,
        name: "Thin Cheese Pizza",
        price: 110

    },
    {
        id: 3,
        type: "pizza",
        img: pizza3,
        name: " Pizza With Mushroom",
        price: 110

    },
    {
        id: 4,
        type: "pizza",
        img: pizza4,
        name: "Maxican Green Pizza",
        price: 115
    }]
    const [hotpizza, setHotpizza] = useState(hot)
    return (

        <Container>
            <h1 className="text-center mb-4">Hot Pizza</h1>
           <Row>
           {
                hotpizza.map(pro => (
                    <Col key={pro.id} lg={3} md="4" sm="6" xs="12">

                        <Product type={pro.type} img={pro.img} name={pro.name} price={pro.price} />

                    </Col>))
            }
           </Row>
        </Container>
    );
}

export default HotPizza;