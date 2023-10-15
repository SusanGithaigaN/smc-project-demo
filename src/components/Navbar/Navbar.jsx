import { useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBCollapse
} from 'mdb-react-ui-kit';
import './Navbar.css';
import logo from './logo.png'

export default function Navbar() {
    const [showBasic, setShowBasic] = useState(false);

    return (
        <div id='centered'>
            <MDBNavbar expand='lg' light bgColor='light' className='shadow-none'>
                <MDBContainer fluid>
                    <MDBNavbarBrand href='/' className='text-uppercase fw-bold'>
                        <img
                            src={logo}
                            height='120'
                            alt=''
                            loading='lazy'
                        />
                        ALMAID
                    </MDBNavbarBrand>

                    <MDBNavbarToggler
                        aria-controls='navbarSupportedContent'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setShowBasic(!showBasic)}
                    >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>

                    <MDBCollapse navbar show={showBasic}>
                        <MDBNavbarNav className='mr-auto mb-2 mb-lg-0 text-uppercase fw-bold'>
                            <MDBNavbarItem>
                                <MDBNavbarLink active aria-current='page' href='#about' className='nav-text'>
                                    About
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem className='text-uppercase fw-bold'>
                                <MDBNavbarLink active aria-current='page' href='/' className='nav-text'>FAQ</MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem className='text-uppercase fw-bold'>
                                <MDBNavbarLink active aria-current='page' href='/' className='nav-text'>Blog</MDBNavbarLink>
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                        <a href='#contact'>
                            <MDBBtn rounded className='mx-2 fw-bold' color='secondary' id='btn'>Contact</MDBBtn>
                        </a>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </div>
    );
}