import * as React from 'react';
import logo from '../images/Coding.svg'
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
`;

const Styling = () => {
    return(
        <StyledDiv id="styling">
            <img src={logo} alt='' width="30%" height="30%"></img>
        </StyledDiv>
    );
};

export default Styling;