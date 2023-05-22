import React from "react";

const Accordian = (props) => {
  const { index, title, details, show, setShow } = props;
  //index // 0, 1, 2
  //show -> number //0
  return (
    <div>
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-medium">{title}</h3>
        <div className="">
          {show !== index ? (
            <button onClick={() => setShow(index)}>Show</button>
          ) : (
            <button onClick={() => setShow(null)}>Hide</button>
          )}
        </div>
      </div>
      {show === index && <p className="pt-4">{details}</p>}
    </div>
  );
};

export default Accordian;
