const Box = (props) => {
  const { text, className } = props;
  const boxClassName = {`box ${className}`}
  return (
    <div className={boxClassName}>
      <p className="box-title">{text}</p>
    </div>
  );
};

const element = (
  <div className="color-boxes-container">
    <h1 className="heading">Boxes</h1>
    <div className="boxes-container">
      <Box text="small" className="small-box" />
      <Box text="medium" className="medium-box" />
      <Box text="large" className="large-box" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
