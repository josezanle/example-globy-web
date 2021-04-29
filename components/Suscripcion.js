
const Suscripcion = () => {

  return (
    <>      
      <div className="subs">
   <h4>Suscríbete Gratis!</h4>
        <style jsx>
          {`
            .subs {
              width: 100vw;
              height: 100%;
              margin: 2em 0;
              padding: 0 1em;
              display: flex;
              justify-content: center;
              align-items: center;
              cursor: pointer;
            }
            h4 {
              color: #86a8e7;
              padding: 1em 2em;
              border: 4px solid #ebebeb;
              border-radius: 1em;
            }
            h4:hover {
              color: white;
              background: #86a8e7;
            }
          `}
        </style>
      </div>
    </>
  );
};

export default Suscripcion;
