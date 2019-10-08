import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout'

const Contact = () => (
    <Layout>
        <h1>Contact Me</h1>
        <h2>This is the Contact page</h2>
        <Link to="/">&larr; back to home</Link>
    </Layout>
)


export default Contact;