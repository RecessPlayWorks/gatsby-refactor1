import React from 'react';
// import { Link } from 'gatsby';
import ContactForm from '../components/subcomponents/ContactForm'

import Layout from '../components/Layout'

const Contact = () => (
    <Layout>
        <h1>Contact Me</h1>
        <h2>This is the Contact page</h2>
        {/* <Link to="/">&larr; back to home</Link> */}
        <ContactForm/>
    </Layout>
)


export default Contact;