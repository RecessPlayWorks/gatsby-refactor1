import React from 'react';
// import styled from '@emotion/styled';
import { css } from '@emotion/core';
// import { Link } from 'gatsby';

// const NavLink = styled(Link)`
// height: 10vh;
// background: red;
// `;

const Footer = () => (
  <footer
    css={css`
      width: 100vw;
      background: #f05323;
      display: flex;
      justify-content: space-between;
      padding: 0.5rem calc((100vw - 550px - 0.5rem) / 2);
      height: 5vw;
      box-shadow: 0px -2px 8px 0px rgba(0,0,0,0.8);
      z-index: 10;
      position: absolute;
    `}
  >
  
    <div>
        <h1>This is the Footer</h1>
    </div>
  </footer>
);

export default Footer;