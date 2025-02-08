import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [openIndexes, setOpenIndexes] = useState([]);

  // const openContent = (index) => {
  //   if (index == openIndex) {
  //     setOpenIndex(null);
  //   } else {
  //     setOpenIndex(index);
  //   }
  // };

  const openContent = (index) => {
    setOpenIndexes((prevOpenIndexes) => {
      if (prevOpenIndexes.includes(index)) {
        return prevOpenIndexes.filter((itemIndex) => itemIndex !== index);
      } else {
        return [...prevOpenIndexes, index];
      }
    });
  };

  return items.map((items, index) => (
    <div key={index} className="card" onClick={() => openContent(index)}>
      <div className="header">
        <h2 className="title">{items.title}</h2>
        <button className="indicator">{openIndexes.includes(index) ? "-" : "+"}</button>
      </div>
      {openIndexes.includes(index)&& <p className="content">{items.content}</p>}
    </div>
  ));
};

export default Accordion;
