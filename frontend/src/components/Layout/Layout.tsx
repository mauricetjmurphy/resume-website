/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { ReactNode, useState } from 'react';
import Header from '../SEOHeader';
import Navbar from '../Navigation/Navbar';
import SocialStrip from '../SocialStrip';
import EmailStrip from '../EmailStrip';
import './layout.css';
import '../../styles/main.css';
import Sidebar from '../Navigation/Sidebar';
import Footer from '../Footer';
import data from './layoutData';
import SEOHeader from '../SEOHeader';

interface LayoutPropTypes {
    children: ReactNode;
    title: string;
}

const Layout = ({ children, title }: LayoutPropTypes) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <SEOHeader title={title} />
            <Navbar
                isOpen={isOpen}
                toggleSidebar={toggleSidebar}
                menuLinks={data}
            />
            <Sidebar
                toggleSidebar={toggleSidebar}
                isOpen={isOpen}
                menuLinks={data}
            />
            <SocialStrip />
            <EmailStrip />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
