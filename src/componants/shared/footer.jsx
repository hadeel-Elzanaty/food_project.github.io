import { Container, Form, Col, Row } from "react-bootstrap";
import reslogo from "../../assets/images/res-logo.png"
import { useForm } from "react-hook-form";
import styles from"../../styles/footer/footer.module.css"
import {RiSendPlaneLine} from "react-icons/ri"
const Footer = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <Container fluid className={styles.mainDiv} >
            <Row className={styles.row} >
                <Col className="text-center mb-2" lg={3} md="3" sm={6}> <img height={50} src={reslogo} alt=""/>
                    <h3>Tasty Treat</h3>
                    <p>Lorem ipsum dolor, sit amet <br/>  elit. Unde, laboriosam?</p></Col>
                <Col  className="text-center mb-2" lg="3" md="3" sm="6" > 
                <h3 >
                    Delivery Time
                </h3>
                    <h5>
                        Sunday thursday <br />
                        10:00 PM -11:00 Pm
                    </h5>
                    <h5>Friday Saturday <br />off day</h5></Col>
                <Col  className="text-center mb-2" lg="3"  md="3" sm="6" xs={12}>
                    <h3>Contact</h3>
                    <h5>Phone:01102050619</h5>
                    <h5>Email: ahmed@gmail.com</h5>
                </Col>
                <Col  className="text-center mb-2"  lg="3" md="3" sm="6">
                    <h3>Newsletter</h3>
                    <p>subscribe our newsletter</p>
                    <Form className={styles.form}>
                       <p> <input type="email" {...register('email')} placeholder="enter Email" />
                        <button ><RiSendPlaneLine/></button></p>
                      
                        
                    </Form>
                </Col>
            </Row>
           
        </Container>
    );
}

export default Footer;