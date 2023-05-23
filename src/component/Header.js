import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <div class="header-area">
                        <div class="main-header header-sticky">
                            <div class="container-fluid">
                                <div class="menu-wrapper">

                                    <div class="logo">
                                        <Link to="/">
                                            <img data-cfsrc="../../public/assets/img/logo/logo.png" alt="" />
                                            {/* <img data-cfsrc="assets/img/logo/logo.png" alt="" style={{display:none, visibility:hidden}}/> */}
                                            <noscript><img src="../../public/assets/img/logo/logo.png" alt="" /></noscript>
                                        </Link>
                                    </div>

                                    <div class="main-menu d-none d-lg-block">
                                        <nav>
                                            <ul id="navigation">
                                                <li><Link to="/">Home</Link></li>
                                                <li><Link to="/shop">shop</Link></li>
                                                <li><Link to="/about">about</Link></li>
                                                <li class="hot"><Link to="#">Latest</Link>
                                                    <ul class="submenu">
                                                        <li><Link to="/shop"> Product list</Link></li>
                                                        <li><Link to="/product_details"> Product Details</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link to="/blog">Blog</Link>
                                                    <ul class="submenu">
                                                        <li><Link to="/blog">Blog</Link></li>
                                                        <li><Link to="/blog-details">Blog Details</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link to="#">Pages</Link>
                                                    <ul class="submenu">
                                                        <li><Link to="/login">Login</Link></li>
                                                        <li><Link to="/cart">Cart</Link></li>
                                                        <li><Link to="/elements">Element</Link></li>
                                                        <li><Link to="/confirmation">Confirmation</Link></li>
                                                        <li><Link to="/checkout">Product Checkout</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link to="/contact">Contact</Link></li>
                                            </ul>
                                        </nav>
                                    </div>

                                    <div class="header-right">
                                        <ul>
                                            <li>
                                                <div class="nav-search search-switch">
                                                    <span class="flaticon-search"></span>
                                                </div>
                                            </li>
                                            <li> <Link to="/login"><span class="flaticon-user"></span></Link></li>
                                            <li><Link to="/cart"><span class="flaticon-shopping-cart"></span></Link> </li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="col-12">
                                    <div class="mobile_menu d-block d-lg-none"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}
export default Header;