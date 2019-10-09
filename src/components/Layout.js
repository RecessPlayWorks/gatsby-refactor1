import React from 'react';
import { Global, css } from '@emotion/core';
import Header from './Header';
import Footer from './Footer';
// import BGimage from '../img/landingbackgroundImage.jpg'

const Layout = ({ children }) => (
  <>
    <Global
      styles={css`
        * {
          box-sizing: border-box;
          margin: 0;
        }

        /* More info: https://bit.ly/2PsCnzk */
        * + * {
          // margin-top: 1rem;
        }

        html,
        body {
          margin: 0;
          color: #222;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
            'Segoe UI Symbol';
          font-size: 18px;
          line-height: 1.4;

          /* remove margin for the main div that Gatsby mounts into */
          > div {
            margin-top: 0;
          }
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          color: #fff;
          line-height: 1.1;

          + * {
            margin-top: 0.5rem;
          }
        }

        strong {
          color: fuchsia;
        }

        li {
          margin-top: 0.25rem;
        }
      `}
    />
    <Header />
    {/* <img className="bg-img" src={BGimage} alt="background of people and kids" /> */}
    <main
      css={css`
        width: 100vw;
        // border: 2px dashed olive;
        background: #ecdbc5;
      `}
    >
      {children}
    </main>
    <Footer/>
  </>
);

export default Layout;