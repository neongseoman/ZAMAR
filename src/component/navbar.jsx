import React, {useState} from "react";
import styled from "styled-components";
import LogInModal from "./logInModal";
import {
    Container,
    Logo,
    Button
} from './mainComponent.styles'


const Navbar = () => {


    const [modalOpen, setModalOpen] = useState(false)

    const openModal = () => {
        setModalOpen(true)
    }
    const closeModal = () => {
        setModalOpen(false)
    }
    return (
        <Container>
            <Logo>ZAMAR</Logo>

            <p style={{textDecoration: "none", float: "right"}}>
                <Button onClick={openModal}>
                    SIGN IN
                </Button>
            </p>

            <LogInModal open={modalOpen} close={closeModal}>



            </LogInModal>


        </Container>
    );
};

export default Navbar;
