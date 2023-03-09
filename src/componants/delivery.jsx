import { Container, Card } from "react-bootstrap";
import service1 from "../assets/images/service-01.png"
import service2 from "../assets/images/service-02.png"
import service3 from "../assets/images/service-03.png"
import styles from "../styles/delivery/delivery.module.css"
const Delivery = () => {
    return (
        <Container className={styles.mainDiv}>
            <h5 className="text-danger text-center fs-3">what we serve</h5>
            <h2 className="text-center fw-bold">just sit back at home<br />
                we will <span className="text-danger">take care</span></h2>
            <p className={styles.prag}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, dolores.</p>
            <p className={styles.prag}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, dolores?</p>
            <div className={styles.services}>
                <div >
                    <img src={service1} width={70} alt="" />
                    <h4>Quick delivery</h4>
                    <p>Lorem ipsum dolor sit amet consectetur<br /> adipisicing elit. Veritatis? </p>
                </div>
                <div>
                    <img src={service2} width={70} alt="" />
                    <h4>super dine in</h4>
                    <p>Lorem ipsum dolor sit amet consectetur<br /> adipisicing elit. Veritatis? </p>
                </div>
                <div>
                    <img src={service3} width={70} alt="" />
                    <h4>easy pick up </h4>
                    <p>Lorem ipsum dolor sit amet consectetur<br /> adipisicing elit. Veritatis? </p>
                </div>

            </div>
        </Container>



    );
}

export default Delivery;