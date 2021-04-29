const Logo = () => {
  return (
    <div className="logo">
      <h1>
        Globy
        <br />
        Taxi App
      </h1>

      <style jsx>
        {`
          .logo {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            width: 100vw;
            height: 100%;
            padding: 2em 0 0 2em;
          }
          h1 {
            color: black;
            line-height: 1.7em;
            font-weight: 700;
          }
          h1::first-line {
            font-size: 3em;
            color: #86a8e7;
          }
          @media (max-width: 1000px) {
            .logo {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 100%;
            }
          }
          @media (max-width: 430px) {
            .logo {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 100%;
            }

            h1 {
              line-height: 1em;
            }
            h1::first-line {
              font-size: 1em;
              color: #86a8e7;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Logo;
