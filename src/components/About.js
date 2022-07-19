import styled from "styled-components";
import { TitleBox } from "./TitleBox";

const Paragraph = styled.p`
    font-size: 22px;
    margin-left: 5%;

    @media only screen and (min-width: 768px) {
        width: 65%;
        float: left;
    }
`;

const Portrait = styled.img`
    width: 100%;
    @media only screen and (min-width: 768px) {
        margin-left: 10%;
        width: 20%;
    }
`;

const Row = styled.div`
    width: 100%;
`;

export const About = () => {
    return (
        <TitleBox title="about me" id="about">
            <Row>
                <Paragraph>
                {`
                I'm a hobbyist programmer since 12 years old. During this time I learned and used many languages and technologies. Currently studying computer science on University of Warsaw and focusing on front-end development. Free time after studying I spend mostly creating my desktop Node. JS/ElectronJS application for 2D graphics animation - rigmagic.
                `}
                </Paragraph>
                <Portrait src="./portrait.jpg"></Portrait>
            </Row>  
        </TitleBox>
    );
};