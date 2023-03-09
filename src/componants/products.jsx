import burger1 from "../assets/images/product_01.jpg"
import burger2 from "../assets/images/product_01.1.jpg"
import burger3 from "../assets/images/product_01.3.jpg"
import burger4 from "../assets/images/product_04.jpg"
import burger5 from "../assets/images/product_08.jpg"
import burger6 from "../assets/images/product_09.jpg"

import pizza1 from "../assets/images/product_2.1.jpg"
import pizza2 from "../assets/images/product_2.2.jpg"
import pizza3 from "../assets/images/product_2.3.jpg"
import pizza4 from "../assets/images/product_3.1.jpg"
import pizza5 from "../assets/images/product_3.2.jpg"
import pizza6 from "../assets/images/product_3.3.jpg"
import pizza7 from "../assets/images/product_4.1.jpg"
import pizza8 from "../assets/images/product_4.2.jpg"
import pizza9 from "../assets/images/product_4.3.png"

import bread1 from "../assets/images/bread(1).png"
import bread2 from "../assets/images/bread(2).png"
import bread3 from "../assets/images/bread(3).png"

import burgerLogo from "../assets/images/hamburger.png"
import pizzaLogo from "../assets/images/pizza.png"
import breadLogo from "../assets/images/bread.png"
import { Container, Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import styles from "../styles/products/products.module.css"
import Product from "./shared/product"
import { useState } from "react"

const Products = () => {
    let classname = styles.link
    let activeclass = styles.activelink
    const initalInfo = [
        {
            id: 1,
            type: "Burger",
            img: burger1,
            name: "Chicken Burger",
            price: 24

        },
        {
            id: 2,
            type: "pizza",
            img: pizza1,
            name: "Vegetarian Pizza",
            price: 115

        },
        {
            id: 3,
            type: "pizza",
            img: pizza2,
            name: "Double Cheese Pizza",
            price: 110

        },
        {
            id: 4,
            type: "pizza",
            img: pizza3,
            name: "Maxican Green Pizza",
            price: 110

        },
        {
            id: 5,
            type: "Burger",
            img: burger2,
            name: "Cheese Burger",
            price: 24

        },
        {
            id: 6,
            type: "Burger",
            img: burger3,
            name: "Royal Cheese Burger",
            price: 24

        },
        {
            id: 7,
            type: "pizza",
            img: pizza4,
            name: "Seefood Pizza",
            price: 115

        },
        {
            id: 8,
            type: "pizza",
            img: pizza5,
            name: "Thin Cheese Pizza",
            price: 110

        },
        {
            id: 9,
            type: "pizza",
            img: pizza6,
            name: " Pizza With Mushroom",
            price: 110

        },
        {
            id: 10,
            type: "Burger",
            img: burger4,
            name: "Classic Hamburger",
            price: 24

        },
        {
            id: 11,
            type: "Bread",
            img: bread1,
            name: "Crunchy Bread",
            price: 35

        },
        {
            id: 12,
            type: "Bread",
            img: bread2,
            name: "Delicious Bread",
            price: 35

        },
        {
            id: 13,
            type: "Bread",
            img: bread3,
            name: "Loaf Bread",
            price: 35

        }
    ]
    const [all, setAll] = useState(true)
    const [burger, setBurger] = useState(false)
    const [pizza, setPizza] = useState(false)
    const [bread, setBread] = useState(false)
    const [allProducts, setAllproducts] = useState(initalInfo)
    const handleAll = () => {

    }
    return (
        <Container className={styles.mainDiv}>
            <h1>Popular Foods</h1>
            <div className={styles.links}>
                <ul className="d-flex bg-danger">
                    <li>
                        <Link onClick={() => {
                            setAll(true)
                            setBurger(false)
                            setPizza(false)
                            setBread(false)

                        }} className={all ? activeclass : classname} to="#"> All</Link>

                    </li>
                    <li>
                        <Link onClick={() => {
                            setAll(false)
                            setBurger(true)
                            setPizza(false)
                            setBread(false)

                        }}


                            className={burger ? activeclass : classname} to="#">
                            <img width={18} src={burgerLogo} alt="" /> Burger
                        </Link>

                    </li>
                    <li>
                        <Link onClick={() => {
                            setAll(false)
                            setBurger(false)
                            setPizza(true)
                            setBread(false)

                        }}
                            className={pizza ? activeclass : classname} to="#">
                            <img width={18} src={pizzaLogo} alt="" /> Pizza
                        </Link>

                    </li>
                    <li className={styles.active} >
                        <Link onClick={() => {
                            setAll(false)
                            setBurger(false)
                            setPizza(false)
                            setBread(true)

                        }} className={bread ? activeclass : classname} to="#">
                            <img width={18} src={breadLogo} alt="" /> Bread
                        </Link>

                    </li>
                </ul>
            </div>
            <Row >
                { burger ? allProducts.filter(product => (product.type === "Burger")).map(
                        product => (

                            <Col key={product.id} lg={3} md="4" sm="6" xs="12">
                                <Product type={product.type} img={product.img} name={product.name} price={product.price} />

                            </Col>))



                        : pizza ? allProducts.filter(product => (product.type === "pizza")).map(
                            product => (

                                <Col key={product.id} lg={3} md="4" sm="6" xs="12">
                                    <Product type={product.type} img={product.img} name={product.name} price={product.price} />

                                </Col>))
                            : bread ? allProducts.filter(product => (product.type === "Bread")).map(
                                product => (

                                    <Col key={product.id} lg={3} md="4" sm="6" xs="12">
                                        <Product type={product.type} img={product.img} name={product.name} price={product.price} />

                                    </Col>)) :  allProducts.map(product => (

                        <Col key={product.id} lg={3} md="4" sm="6" xs="12">
                            <Product type={product.type} img={product.img} name={product.name} price={product.price} />

                        </Col>))

                    
                }
            </Row>

        </Container>
    );
}

export default Products;
