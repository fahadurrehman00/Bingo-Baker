import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import FloatingTextEditor from "../../comman/FloatingTextEditor/FloatingTextEditor";

const BingoCard = () => {
  const backgroundImage = useSelector(
    (state) => state.background.backgroundImage
  );
  const backgroundColor = useSelector(
    (state) => state.background.backgroundColor
  );
  const gridColor = useSelector((state) => state.background.gridColor);
  const gridBorder = useSelector((state) => state.background.gridBorder);
  const textColor = useSelector((state) => state.background.textColor);
  const [size, setSize] = useState(5);
  const [title, setTitle] = useState("Craft Ideas");
  const [inputs, setInputs] = useState(
    Array(size * size).fill({
      text: "",
      color: "",
      image: "",
      textColor: "",
      textOutline: "",
    })
  );
  const [editorVisible, setEditorVisible] = useState(false);
  const [editorPosition, setEditorPosition] = useState({ top: 0, left: 0 });
  const [currentInputIndex, setCurrentInputIndex] = useState(null);
  const parentDivRef = useRef(null);

  const handleSizeChange = (e) => {
    const newSize = Number(e.target.value);
    setSize(newSize);
    setInputs(
      Array(newSize * newSize).fill({
        text: "",
        color: "",
        image: "",
        textColor: "",
        textOutline: "",
      })
    );
  };

  const handleInputChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = { ...newInputs[index], text: value };
    setInputs(newInputs);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleInputClick = (index, event) => {
    if (parentDivRef.current) {
      const parentRect = parentDivRef.current.getBoundingClientRect();
      const inputRect = event.target.getBoundingClientRect();

      setEditorPosition({
        top: inputRect.top - parentRect.top + 0,
        left: 0,
      });

      setCurrentInputIndex(index);
      setEditorVisible(true);
    }
  };

  const handleApplyChanges = ({
    text,
    image,
    color,
    textColor,
    textOutline,
  }) => {
    const newInputs = [...inputs];
    newInputs[currentInputIndex] = {
      text: text || newInputs[currentInputIndex].text,
      image,
      color: color || newInputs[currentInputIndex].color,
      textColor: textColor || newInputs[currentInputIndex].textColor,
      textOutline: textOutline || newInputs[currentInputIndex].textOutline,
    };
    setInputs(newInputs);
    setEditorVisible(false);
  };

  const renderInputs = () => {
    return inputs.map((input, index) => (
      <div key={index} className="relative h-[250px] ">
        <textarea
          className="border p-2 text-center w-full h-full resize-none overflow-hidden"
          value={input.text}
          onChange={(e) => handleInputChange(index, e.target.value)}
          onClick={(e) => handleInputClick(index, e)}
          style={{
            fontSize: `${Math.max(1, 5 - input.text.length / 3)}vw`,
            backgroundColor: input.color,
            backgroundImage: input.image ? `url(${input.image})` : "none",
            backgroundSize: "cover",
            textShadow: input.textOutline
              ? `-1px -1px  ${input.textOutline}, 1px -1px  ${input.textOutline}, -1px 1px  ${input.textOutline}, 1px 1px  ${input.textOutline}`
              : "none",
            color: input.textColor || "inherit",
            textAlign: "center",
            paddingTop: "calc(40% - 0.5em)",
            lineHeight: "1.5em",
            borderColor: gridColor,
            borderWidth: gridBorder,
          }}
        />
      </div>
    ));
  };
  return (
    <div
      className="parent-div rounded-[58px] p-2 mx-6 bg-white relative bg-card-bg bg-cover"
      ref={parentDivRef}
      style={{
        backgroundColor: backgroundImage ? backgroundColor : backgroundColor,
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
        color: textColor,
      }}
    >
      <div className="flex flex-col items-center w-4/5 mx-auto py-4">
        <div className="cardTitle flex gap-6 items-center mb-4">
          <input
            className="border border-red-400 rounded-xl text-7xl p-2 text-center Pacific"
            type="text"
            value={title}
            onChange={handleTitleChange}
            style={{ width: `${title.length + 1}ch` }}
          />
          <select
            className="border border-red-400 rounded-xl px-5 py-2"
            name="size"
            id="id_size"
            value={size}
            onChange={handleSizeChange}
          >
            <option value="7">7x7</option>
            <option value="6">6x6</option>
            <option value="5">5x5</option>
            <option value="4">4x4</option>
            <option value="3">3x3</option>
          </select>
        </div>
        <div className="text-center py-4">
          <h4 className="text-7xl tracking-[4rem]"> B I N G O</h4>
        </div>
        <div
          className="grid"
          style={{
            gridTemplateColumns: `repeat(${size}, 1fr)`,
            borderColor: gridColor,
            borderWidth: gridBorder,
          }}
        >
          {renderInputs()}

          {editorVisible && (
            <FloatingTextEditor
              onApplyChanges={handleApplyChanges}
              onClose={() => setEditorVisible(false)}
              style={{
                top: editorPosition.top,
                left: editorPosition.left,
                position: "absolute",
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default BingoCard;
