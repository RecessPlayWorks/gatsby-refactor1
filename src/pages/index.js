import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';

export default () => (
    <Layout>
        <h1>HOME</h1>
        <div>Hello Frontend Masters!</div>
        <Link to="/about/">about &rarr;</Link>
    </ Layout>
);
