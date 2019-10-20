import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
text-align: left`

const StyledH2 = styled.h2`
color: cornflowerblue
margin-top: 0px`;


export const ContactUs = () => {
    return (
        <StyledDiv>
            <StyledH2>Get in touch with us</StyledH2>
            <h3>We're open from 9:00am to 9:00pm all 7 days</h3>
            <h3>Or contact us at:</h3>
            <ul>
                <li>Email: xyzlibrary@gmail.com</li>
                <li>Patron Help: +91 888 445 9981</li>
            </ul>
        </StyledDiv>
    )
}