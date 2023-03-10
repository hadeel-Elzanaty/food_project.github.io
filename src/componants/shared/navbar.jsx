import { Container, Nav } from "react-bootstrap";
import reslogo from "../../assets/images/res-logo.png"
import { MdPersonOutline } from "react-icons/md"
import { MdCardTravel } from "react-icons/md"
import { FaBars } from "react-icons/fa"
import { Link } from "react-router-dom";
import styles from "../../styles/navbar/navbar.module.css"
import { useState } from "react";
const NavComp = () => {
const[showlist,setShowlist]=useState(false)
    return (
        <Container fluid className={styles.mainDiv}>


            <div className={styles.navbar}>
                <div className={styles.firstNav}>
                    <img src={reslogo} alt="loading.." />
                    <h4>Tasty Treat</h4>
                </div>
                <div className={styles.secondNav}>

                    <Nav className="me-auto ">
                        <Nav.Link className={styles.navlink} href="/">Home</Nav.Link>
                        <Nav.Link className={styles.navlink} href="/food">Food</Nav.Link>
                        <Nav.Link className={styles.navlink} href="/cart">Cart</Nav.Link>
                        <Nav.Link className={styles.navlink} href="/contact">Contact</Nav.Link>
                    </Nav>

                </div>
                <div className={styles.thirdNav}>

                    <Link className={styles.cart}  >
                        <MdCardTravel />
                        <span>0</span>
                    </Link>
                    <Link className="text-dark me-3 fs-5  " >

                        <MdPersonOutline />
                    </Link>
                    <div className={styles.bars}onClick={()=>setShowlist(!showlist)} ><FaBars/></div>
                </div>



            </div>

        {showlist&&    <div className={styles.listDiv}>
                <Nav className={styles.navlist}>
                    <Nav.Link className={styles.nav} href="/">Home</Nav.Link>
                    <Nav.Link className={styles.nav} href="/food">Food</Nav.Link>
                    <Nav.Link className={styles.nav} href="/cart">Cart</Nav.Link>
                    <Nav.Link className={styles.nav} href="/contact">Contact</Nav.Link>
                </Nav>
            </div>
}

        </Container>
    );
}

export default NavComp;