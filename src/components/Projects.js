import styled from "styled-components";
import { Tiles } from "./Tiles";
import { Tile } from "./Tile";

const Box = styled.div`
    width: max-content;
    margin: 0 auto;
`;

const Header = styled.h2`
    font-size: 30px;
    width: max-content;
    margin: 2vh auto;

    &::after {
        content: '';
        display: block;
        border-bottom: 2px solid orange;
        width: 0%;
        margin: 0 auto;
        transition: width 0.2s;

        ${Box}:hover & {
            width: 100%;
        }
    }
`;

export const Projects = () => {
    return (
        <Box id="projects">
            <Header>some projects of mine</Header>
            <Tiles>
                <Tile src="./rigmagic.jpg" name="rigmagic" details={
                    `Standalone desktop application written using Electron. It allows to 
                    create 2D sprite and skeletal animations. It is based on custom 
                    animation engine and custom WebGL renderer.
                    `
                } tech={`
                    technology: Typescript, Electron, React.js, custom WebGL renderer, styled-components
                `} href="https://rigmagic.xyz"></Tile>
                <Tile src="./rm-anim-viewer.jpg" name="rigmagic animation viewer" details={
                    `A web app that allows loading and playback of animations 
                    exported from rigmagic animations editor.
                    `
                } tech={
                    `technology: JavaScript, React.js, pixi.js`
                } href="https://stapislaw.github.io/rigmagic-animation-viewer/"></Tile>
                <Tile src="./piluk_dev.jpg" name="piluk_dev" details={
                    `Portfolio website written in React.js and styled-components.
                    `
                } tech={`
                    technology: JavaScript, React.js, styled-components
                `} href=""/>
                <Tile src="./firu.png" name="firu" details={
                    `A library that simplifies creating electron applications and gives 
                    functions for easy inter-process communication. Available on 
                    GitHub and npm.
                    `
                } href="https://github.com/stapislaw/firu"/>
                <Tile src="./rm-anim-engine.jpg" name="rigmagic animation engine" details={
                    `Typescript library that allows loading and playback animations 
                    exported from rigmagic 2D animation editor.
                    `
                } href="https://github.com/stapislaw/rigmagic-animation-engine-ts"/>
            </Tiles>
        </Box>
    )
}