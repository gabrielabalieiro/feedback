import { ButtonContainer, CardContainer, IconContiner, ResultContainer } from "./Home.styles.js";

import iconStarImg from "../assets/icon-star.svg"
import thankYouImg from "../assets/illustration-thank-you.svg"
import { useState } from "react";

export function Home() {
  const [mostrarResultado, setMostrarResultado] = useState(false)
  const [feedbackNote, setFeedbackNote] = useState(0)

  function handleFeedbackButtonClick(event) {
    const feedback = Number(event.target.innerText)

    setFeedbackNote(feedback)
  }

  function handleSubimit() {
    if (feedbackNote === 0) return

    setMostrarResultado(true)
  }

  return (
   mostrarResultado === false ? (
      <CardContainer>
      <IconContiner>
        <img src={iconStarImg} alt="ícone de estrela" />
      </IconContiner>

      <h1>Como foi o atendimento?</h1>
      <p>Conte-nos como foi nossa ajuda com sua solicitação. Agradecemos muito seu feedback para podermos melhorar nosso atendimento!</p>

      <ButtonContainer>
        <button onClick={handleFeedbackButtonClick}>1</button>
        <button onClick={handleFeedbackButtonClick}>2</button>
        <button onClick={handleFeedbackButtonClick}>3</button>
        <button onClick={handleFeedbackButtonClick}>4</button>
        <button onClick={handleFeedbackButtonClick}>5</button>
      </ButtonContainer>

      <button onClick={handleSubimit}>Enviar</button>
    </CardContainer>
   ) : (
      <CardContainer>
        <img src={thankYouImg} alt="Imagem de agradecimento" />

        <ResultContainer>
          <p>Você selecionou {feedbackNote} de 5</p>
        </ResultContainer>

        <h1>Obrigado!</h1>
        <p>Agradecemos por dedicar um momento para nos avaliar. Se precisar de mais suporte, não hesite em entrar em contato!</p>
      </CardContainer>
   )
  )
}
