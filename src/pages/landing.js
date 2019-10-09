import React from 'react';
import styled from '@emotion/styled';
import boy from '../img/boy.jpg';
import women from '../img/women.jpg';
import painting from '../img/painting.jpg';
import meeting from '../img/meeting.jpg';

const StyledLanding =styled.div`
  .grid-container {
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
   }
   .cell {
    width: 600px;
    height: 500px;
    flex-grow: 1;
   }
   img {
    width: 100%;
    height: 100%;
   }
`;

const Landing = () => (
    <StyledLanding>
        <h2>This is the Landing page</h2>
        <div className="grid-container">
            <div className="cell">
                <img src={boy} alt="boy" />
            </div>
            <div className="cell">
                <img src={women} alt="women" />
            </div>
            <div className="cell">
                <img src={painting} alt="painting" />
            </div>
            <div className="cell">
                <img src={meeting} alt="meeting" />
            </div>
        </div>
        {/* <img className="bg-img" src={BGimage} alt="background of people and kids" /> */}
    </StyledLanding>
)

export default Landing;