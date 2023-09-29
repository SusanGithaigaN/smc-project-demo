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
    // MDBDropdown,
    // MDBDropdownToggle,
    // MDBDropdownMenu,
    // MDBDropdownItem,
    MDBCollapse
} from 'mdb-react-ui-kit';
import './Navbar.css'
export default function Navbar() {
    const [showBasic, setShowBasic] = useState(false);

    return (
        <MDBNavbar expand='lg' light bgColor='light'>
            <MDBContainer fluid>
                {/* <MDBNavbarBrand href='#'>Almaid</MDBNavbarBrand> */}
                <MDBNavbarBrand href='/' className='text-uppercase fw-bold'>
                    <img
                        src='https://bit.ly/3nnsND0'
                        height='60'
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
                            <MDBNavbarLink active aria-current='page' href='#' className='nav-text'>
                                About
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem className='text-uppercase fw-bold'>
                            <MDBNavbarLink active aria-current='page' href='#' className='nav-text'>FAQ</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem className='text-uppercase fw-bold'>
                            <MDBNavbarLink active aria-current='page' href='#' className='nav-text'>Blog</MDBNavbarLink>
                        </MDBNavbarItem>
                    </MDBNavbarNav>

                    {/* <form className='d-flex input-group w-auto'>
                        <input type='search' className='form-control' placeholder='Type query' aria-label='Search' /> */}
                        <MDBBtn type='button' className='btn btn-outline-primary rounded-pill fw-bold'>Contact</MDBBtn>
                    {/* </form> */}
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}