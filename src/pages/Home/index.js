import React from 'react';
import { HomeWrapper, LeftSectionWrapper, RightSectionWrapper, ButtonToStart } from './style';
const Home = () => {
    return (
        <HomeWrapper>
            <LeftSectionWrapper>
                <h1>TypeApp</h1>
            </LeftSectionWrapper>
            <RightSectionWrapper>
                <p>We are here to help you to improve your <b>typing skills!</b></p>
                <ButtonToStart to="/training">Start!</ButtonToStart>
            </RightSectionWrapper>
        </HomeWrapper>
    );
};

export default Home