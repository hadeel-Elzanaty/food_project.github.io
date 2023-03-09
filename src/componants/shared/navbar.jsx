import { Container, Nav } from "react-bootstrap";
import reslogo from "../../assets/images/res-logo.png"
import { MdPersonOutline } from "react-icons/md"
import { MdCardTravel } from "react-icons/md"
import { Link } from "react-router-dom";
import styles from "../../styles/navbar/navbar.module.css"
const NavComp = () => {
    return (
        <Container fluid className="">


            <div className={styles.navbar}>
                <div className={styles.firstNav}>
                    <img src={reslogo} alt="loading.." />
                    <h4>Tasty Treat</h4>
                </div>
                <div className={styles.secondNav}>

                    <Nav className="me-auto ">
                        <Nav.Link className= {styles.navlink}href="/">Home</Nav.Link>
                        <Nav.Link className= {styles.navlink}href="/food">Food</Nav.Link>
                        <Nav.Link className= {styles.navlink} href="/cart">Cart</Nav.Link>
                        <Nav.Link className= {styles.navlink}href="/contact">Contact</Nav.Link>
                    </Nav>

                </div>
                <div className={styles.thirdNav}>
                    <Link  className={styles.cart}  >
                        <MdCardTravel />
                  <span>0</span>
                    </Link>
                <Link className="text-dark me-3 fs-5  " >
                
                <MdPersonOutline />
                </Link>
                </div>
            </div>



        </Container>
    );
}

export default NavComp;