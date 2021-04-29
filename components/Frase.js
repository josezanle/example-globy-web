import Buttons from "./buttons";

const Frase = () => {
  return (
    <div className="frase">
      <div className="left">
        <>
          <p>
            Ahorra tiempo, reduce costos y toma el control con tu propio
            software de despacho de taxis.
          </p>
          <h3>Garantizamos un buen servicio, descargar nuestra App.</h3>

          <Buttons />
        </>
      </div>

      <div className="right">
        <img src="https://res.cloudinary.com/globy/image/upload/v1610558514/s5i6qrthlbbaf2forvq6.webp" alt="calling taxi portada" />
      </div>

      <style jsx>
        {`
          .frase {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100vw;
            height: 100%;
            margin: 2em 0;
          }

          .left {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            flex-flow: column;
          }

          h2 {
            font-size: 2em;
            width: 60%;
            margin-bottom: 1em;
          }
          h3 {
            width: 60%;
            margin-bottom: 0.5em;
          }
          p {
            width: 60%;
            line-height: 1.2em;
            font-size: 2em;
            font-style: italic;
            margin-bottom: 1em;
          }
          // ======================================================

          .right {
            flex: 1;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          img {
            width: 500px;
            height: 500px;
            object-fit: cover;
            border-radius: 0.5em 0.5em 0.5em 10em;
          }
          // ===================================================
          @media (max-width: 1000px) {
            .frase {
              flex-flow: column;
            }
            .left {
              width: 100%;
              height: 100%;
              padding: 1em;
            }
            h2,
            h3,
            p {
              margin-bottom: 0.5em;
            }
            h3,
            p {
              font-size: 1.3em;
            }
            p {
              margin-bottom: 0;
            }
          }
          @media (max-width: 788px) {
            h2,
            h3,
            p {
              width: 100%;
              margin-bottom: 0.5em;
            }
          }

          @media (max-width: 430px) {
            .left {
              padding: 0 1em;
            }
            h2,
            h3,
            p {
              width: 100%;
              margin-bottom: 0.5em;
            }
            h3,
            p {
              font-size: 1.3em;
            }
          }
          @media (max-width: 318px) {
            img {
              width: 100%;
              border-radius: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Frase;
