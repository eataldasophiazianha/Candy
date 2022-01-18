import styled, { css } from "styled-components";
import "./App.js";
import { obj } from "./candies";
import Fundo from "./candies/fundo.jpeg";
/*
 import Blue from "./candies/blue.png"; /*
import Yellow from "./candies/yellow.png"
import Red from "./candies/red.png"
import Purple from "./candies/purple.png"
import Orange from "./candies/orange.png"
import Green from "./candies/green.png"
*/
var mar = 10;
export const Tabuleiro = styled.div`
   width: ${(70 + mar * 2) * 8}px;
   height: ${(70 + mar * 2) * 8}px;
   display: flex;
   flex-wrap: wrap;
   border: solid white 5px;
   border-radius: 15px;
   background-color: rgba(0, 0, 0, 0.4);
   margin-right: 10px;
   margin-left: auto;
   margin-top: auto;
   margin-bottom: auto;
   vertical-align: middle;
`;

export const AppDiv = styled.div`
   background-image: url(${Fundo});
   display: flex;
   background-repeat: no-repeat;
   background-attachment: fixed;
   background-position: center;
   background-size: cover;
   height: 100vh;
   margin: -8px;
   padding: 0px;
   border: 0px;
`;

export const Image = styled.div`
   width: 70px;
   height: 70px;
   margin: ${mar}px;
   ${(props) =>
      !!props.colorRef
         ? css`
              background-image: url(${obj[props.colorRef]});
           `
         : css`
              background-color: "black";
           `}; ;
`;

export const App = styled.div`
   display: flex;
   padding: 30px;
`;

export const ScoreBoard = styled.div`
   display: flex;
   float: right;
   font-size: 90px;
   color: white;
   margin-right: auto;
   margin-left: auto;
   margin-top: auto;
   margin-bottom: auto;
   vertical-align: middle;
`;
