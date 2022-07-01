export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p>-- Styled jsx --</p>
        <button>Fight!</button>
      </div>

      <style jsx="true">{`
        .container {
          border: solid 2px blue;
          border-radius: 20px;
          padding: 8px;
          margin: 8px;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
      `}</style>
    </>
  );
};
