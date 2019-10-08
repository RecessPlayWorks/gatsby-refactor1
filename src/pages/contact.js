import React from 'react';
// import { Link } from 'gatsby';
import ContactForm from '../components/subcomponents/ContactForm2'

import Layout from '../components/Layout'

const Contact = () => (
    <Layout>
        <h2>This is the Contact page</h2>
        {/* <Link to="/">&larr; back to home</Link> */}
        <ContactForm/>
    </Layout>
)


export default Contact;