import { useEffect, useState, useCallback } from "react";
import { Tabuleiro, Image, AppDiv } from "./App.style";
import blank from "./candies/blank.png";
import DisplayDePontos from "./DisplayDePontos";

const width = 8;
const corDoces = ["blue", "green", "orange", "purple", "red", "yellow"];

const App = () => {
   const [arranjoDeCoresAtuais, setArranjoDeCoresAtuais] = useState([]);
   const [corSendoArrastada, setCorSendoArrastada] = useState(null);
   const [corSendoSubstituida, setCorSendoSubstituida] = useState(null);
   const [displayPontos, setDisplayPontos] = useState(0);

   const checkColunaDeTres = useCallback(() => {
      for (let i = 0; i <= 47; i++) {
         const colunaDeTres = [i, i + width, i + width * 2];
         const corDecidida = arranjoDeCoresAtuais[i];
         const isBlank = arranjoDeCoresAtuais[i] === blank;

         if (
            colunaDeTres.every(
               (square) =>
                  arranjoDeCoresAtuais[square] === corDecidida && !isBlank
            )
         ) {
            setDisplayPontos((score) => score + 3);
            colunaDeTres.forEach(
               (square) => (arranjoDeCoresAtuais[square] = blank)
            );
            return true;
         }
      }
   }, [arranjoDeCoresAtuais]);

   const checkLinhaaDeTres = useCallback(() => {
      for (let i = 0; i < 64; i++) {
         const linhaDeTres = [i, i + 1, i + 2];
         const corEscolhida = arranjoDeCoresAtuais[i];
         const notValid = [
            6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 63, 64,
         ];
         const isBlank = arranjoDeCoresAtuais[i] === blank;

         if (notValid.includes(i)) continue;

         if (
            linhaDeTres.every(
               (square) =>
                  arranjoDeCoresAtuais[square] === corEscolhida && !isBlank
            )
         ) {
            setDisplayPontos((score) => score + 3);
            linhaDeTres.forEach(
               (square) => (arranjoDeCoresAtuais[square] = blank)
            );
            return true;
         }
      }
   }, [arranjoDeCoresAtuais]);

   const checkColunaDeQuatro = useCallback(() => {
      for (let i = 0; i <= 47; i++) {
         const colunaDeQuatro = [i, i + width, i + width * 2, i + width * 3];
         const corEscolhida = arranjoDeCoresAtuais[i];
         const isBlank = arranjoDeCoresAtuais[i] === blank;

         if (
            colunaDeQuatro.every(
               (square) =>
                  arranjoDeCoresAtuais[square] === corEscolhida && !isBlank
            )
         ) {
            setDisplayPontos((score) => score + 4);
            colunaDeQuatro.forEach(
               (square) => (arranjoDeCoresAtuais[square] = blank)
            );
            return true;
         }
      }
   }, [arranjoDeCoresAtuais]);

   const checkLinhaaDeQuatro = useCallback(() => {
      for (let i = 0; i < 64; i++) {
         const linhaDeQuatro = [i, i + 1, i + 2, i + 3];
         const corEscolhida = arranjoDeCoresAtuais[i];
         const notValid = [
            6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 63, 64, 5, 13,
            21, 29, 37, 45, 53, 62,
         ];
         const isBlank = arranjoDeCoresAtuais[i] === blank;

         if (notValid.includes(i)) continue;

         if (
            linhaDeQuatro.every(
               (square) =>
                  arranjoDeCoresAtuais[square] === corEscolhida && !isBlank
            )
         ) {
            setDisplayPontos((score) => score + 4);
            linhaDeQuatro.forEach(
               (square) => (arranjoDeCoresAtuais[square] = blank)
            );
            return true;
         }
      }
   }, [arranjoDeCoresAtuais]);

   const checkColunaDeCinco = useCallback(() => {
      for (let i = 0; i <= 47; i++) {
         const colunaDeCinco = [
            i,
            i + width,
            i + width * 2,
            i + width * 3,
            i + width * 4,
         ];
         const corEscolhida = arranjoDeCoresAtuais[i];
         const isBlank = arranjoDeCoresAtuais[i] === blank;

         if (
            colunaDeCinco.every(
               (square) =>
                  arranjoDeCoresAtuais[square] === corEscolhida && !isBlank
            )
         ) {
            colunaDeCinco.forEach(
               (square) => (arranjoDeCoresAtuais[square] = blank)
            );
         }
      }
   }, [arranjoDeCoresAtuais]);

   const checkLinhaaDeCinco = useCallback(() => {
      for (let i = 0; i <= 64; i++) {
         const linhaDeCinco = [i, i + 1, i + 2, i + 3];
         const corEscolhida = arranjoDeCoresAtuais[i];
         const isBlank = arranjoDeCoresAtuais[i] === blank;
         const notValid = [
            6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 63, 64, 5, 13,
            21, 29, 37, 45, 53, 62, 4, 12, 20, 28, 36, 44, 52, 60,
         ];

         if (notValid.includes(i)) continue;

         if (
            linhaDeCinco.every(
               (square) =>
                  arranjoDeCoresAtuais[square] === corEscolhida && !isBlank
            )
         ) {
            linhaDeCinco.forEach(
               (square) => (arranjoDeCoresAtuais[square] = "")
            );
         }
      }
   }, [arranjoDeCoresAtuais]);

   const descerPosicao = useCallback(() => {
      for (let i = 0; i <= 55; i++) {
         const primeiraLinha = [0, 1, 2, 3, 4, 5, 6, 7];
         const éPrimeiraLinha = primeiraLinha.includes(i);

         if (éPrimeiraLinha && arranjoDeCoresAtuais[i] === blank) {
            let numeroAleatorio = Math.floor(Math.random() * corDoces.length);
            arranjoDeCoresAtuais[i] = corDoces[numeroAleatorio];
         }

         if ((arranjoDeCoresAtuais[i + width]) === blank) {
            arranjoDeCoresAtuais[i + width] = arranjoDeCoresAtuais[i];
            arranjoDeCoresAtuais[i] = blank;
         }
      }
   }, [arranjoDeCoresAtuais]);

   const dragStart = (e) => {
      setCorSendoArrastada(e.target);
   };
   const dragDrop = (e) => {
      setCorSendoSubstituida(e.target);
   };
   const dragEnd = () => {
      const corSendoArrastadaPeloId = parseInt(
         corSendoArrastada.getAttribute("data-id")
      );
      console.log("Movimento 1", corSendoArrastadaPeloId);

      const corSendoSubstituidaPeloId = parseInt(
         corSendoSubstituida.getAttribute("data-id")
      );
      console.log("Movimento 2", corSendoSubstituidaPeloId);

      arranjoDeCoresAtuais[corSendoArrastadaPeloId] =
         corSendoArrastada.getAttribute("src");
      arranjoDeCoresAtuais[corSendoSubstituidaPeloId] =
         corSendoSubstituida.getAttribute("src");

      const movimentosValidos = [
         corSendoArrastadaPeloId - 1,
         corSendoArrastadaPeloId - width,
         corSendoArrastadaPeloId + 1,
         corSendoArrastadaPeloId + width
      ];
      const movimentoValido = movimentosValidos.includes(
         corSendoSubstituidaPeloId
      );

      const eColunaDeTres = checkColunaDeTres();
      const eLinhaDeTres = checkLinhaaDeTres();
      const eColunaDeQuatro = checkColunaDeQuatro();
      const eLinhaDeQuatro = checkLinhaaDeQuatro();
      const eColunaDeCinco = checkColunaDeCinco();
      const eLinhaDeCinco = checkLinhaaDeCinco();

      if (
         corSendoSubstituidaPeloId &&
         movimentoValido &&
         (eColunaDeTres ||
            eLinhaDeTres ||
            eColunaDeQuatro ||
            eLinhaDeQuatro ||
            eColunaDeCinco ||
            eLinhaDeCinco)
      ) {
         setCorSendoArrastada(null);
         setCorSendoSubstituida(null);
      } else {
         arranjoDeCoresAtuais[corSendoSubstituidaPeloId] =
            corSendoSubstituida.getAttribute("scr");
         arranjoDeCoresAtuais[corSendoArrastadaPeloId] =
            corSendoArrastada.getAttribute("scr");
         setArranjoDeCoresAtuais([...arranjoDeCoresAtuais]);
      }
   };
   const criarTabuleiro = () => {
      const arranjoDeCorAleatoria = [];
      for (let i = 0; i < width * width; i++) {
         const corAleatoria =
            corDoces[Math.floor(Math.random() * corDoces.length)];
         arranjoDeCorAleatoria.push(corAleatoria);
      }

      setArranjoDeCoresAtuais(arranjoDeCorAleatoria);
   };
   useEffect(() => {
      criarTabuleiro();
   }, []);

   useEffect(() => {
      const timer = setInterval(() => {
         checkColunaDeCinco();
         checkColunaDeQuatro();
         checkColunaDeTres();
         checkLinhaaDeCinco();
         checkLinhaaDeQuatro();
         checkLinhaaDeTres();
         descerPosicao();
         setArranjoDeCoresAtuais([...arranjoDeCoresAtuais]);
      }, 100);

      return () => clearInterval(timer);
   }, [
      checkColunaDeTres,
      checkColunaDeQuatro,
      checkColunaDeCinco,
      checkLinhaaDeTres,
      checkLinhaaDeQuatro,
      checkLinhaaDeCinco,
      descerPosicao,
      arranjoDeCoresAtuais,
   ]);

   return (
      <AppDiv>
         <Tabuleiro>
            {arranjoDeCoresAtuais.map((corDoce, index) => (
               <Image
                  key={index}
                  colorRef={corDoce}
                  alt={corDoce}
                  data-id={index}
                  draggable={true}
                  onDragStart={dragStart}
                  onDragOver={(e) => e.preventDefault()}
                  onDragEnter={(e) => e.preventDefault()}
                  onDragLeave={(e) => e.preventDefault()}
                  onDrop={dragDrop}
                  onDragEnd={dragEnd}
               />
            ))}
         </Tabuleiro>
         <DisplayDePontos score={displayPontos} />
      </AppDiv>
   );
};

export default App;
