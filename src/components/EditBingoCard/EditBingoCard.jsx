import React, { useState, useRef } from "react";
import FloatingTextEditor from "../CreateBingo/CreateBingCard/FloatingTextEditor";

const EditBingoCard = () => {
  const [size, setSize] = useState(3);
  const [inputs, setInputs] = useState(
    Array(size).fill({
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
  const [imagePreview, setImagePreview] = useState(null); // Add state for image preview
  const parentDivRef = useRef(null);

  const handleSizeChange = (e) => {
    const newSize = Number(e.target.value);
    setSize(newSize);
    setInputs(
      Array(newSize).fill({
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

  const handleInputClick = (index, event) => {
    if (parentDivRef.current) {
      const parentRect = parentDivRef.current.getBoundingClientRect();
      const inputRect = event.target.getBoundingClientRect();

      setEditorPosition({
        top: inputRect.top - parentRect.top,
        left: inputRect.left - parentRect.left,
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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result); // Set the preview image
        const newInputs = [...inputs];
        newInputs[currentInputIndex] = {
          ...newInputs[currentInputIndex],
          image: reader.result,
        };
        setInputs(newInputs);
      };
      reader.readAsDataURL(file);
    }
  };

  const renderInputs = () => {
    return inputs.map((input, index) => (
      <div key={index} className="relative h-[250px] w-[250px]">
        <textarea
          className="border border-red-400 p-2 text-center w-full h-full resize-none overflow-hidden"
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
          }}
        />
      </div>
    ));
  };

  return (
    <div className="py-11 bg-[#fd5a47] text-white mt-16">
      <div className="container">
        <div className="flex justify-around">
          <label htmlFor="centerCheckbox" className="cursor-pointer">
            <input
              type="checkbox"
              id="centerCheckbox"
              name="The center square is the free space"
              title="The center square is the free space"
              className="mr-3"
            />
            The center square is the free space
          </label>
          <label htmlFor="ShuffleCheckbox" className="cursor-pointer">
            <input
              type="checkbox"
              id="ShuffleCheckbox"
              name="Shuffle items only within their column"
              title="Shuffle items only within their column"
              className="mr-3"
            />
            Shuffle items only within their column
          </label>
        </div>
        <div className="flex items-center justify-center gap-12 py-4">
          <div className="flex space-x-12">
            <div className="text-center">
              <div
                className="w-40 h-40 border border-gray-300 flex items-center justify-center cursor-pointer bg-white"
                style={{
                  backgroundImage: imagePreview
                    ? `url(${imagePreview})`
                    : "bg-white",
                  backgroundSize: "cover",
                }}
                onClick={() => document.getElementById("imageInput").click()}
              >
                <input
                  type="file"
                  id="imageInput"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </div>
              Background Image
            </div>
            <div className="text-center">
              <div>
                <input
                  type="color"
                  id="backgroundColor"
                  className="w-40 h-40"
                  value="#ffffff"
                />
              </div>
              Backgrond Color
            </div>
            <div className="text-center">
              <div>
                <input
                  type="color"
                  id="textColor"
                  className="w-40 h-40"
                  value="#ffffff"
                />
              </div>
              Text Color
            </div>
            <div className="text-center">
              <div>
                <input
                  type="color"
                  id="gridColor"
                  className="w-40 h-40"
                  value="#ffffff"
                />
              </div>
              Grid Lines Color
            </div>
          </div>
          <div className="text-center">
            <div>
              <select
                name=""
                id=""
                className="p-2 text-lg font-medium cursor-pointer rounded-lg w-32 text-black"
                onChange={handleSizeChange}
              >
                <option value="1">Thin</option>
                <option value="2">Medium</option>
                <option value="3">Thick</option>
              </select>
            </div>
            Line Thikness
          </div>
        </div>
        <div
          className="py-11 flex justify-center gap-12 items-center"
          ref={parentDivRef}
        >
          <div className="text-center">
            <h5 className="font-semibold text-2xl"> Extra Words & Images</h5>
            <p>(these will be mixed into your card above)</p>
          </div>
          <div>
            <div
              className="grid w-min"
              style={{
                gridTemplateColumns: `repeat(${size}, 1fr)`,
                gridTemplateRows: "repeat(1, 1fr)",
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
            <div className="flex justify-between py-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Add more
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Paste in a list of words
              </button>
            </div>
          </div>
        </div>
        <div>
          <h5 className="text-2xl font-medium mb-4">Privacy Option</h5>
          <div className="pl-12">
            <div>
              <h5 className="text-xl font-medium">Public</h5>
              <input
                type="radio"
                name="privacyOption"
                id="privateOption1"
                className="mr-3"
              />
              <label htmlFor="privateOption1">
                Anyone can view your card. It will be indexed in search engines
                so other people can find and use it.
              </label>
            </div>
            <div>
              <h5 className="text-xl font-medium">Hidden</h5>

              <input
                type="radio"
                name="privacyOption"
                id="privateOption2"
                className="mr-3"
              />
              <label htmlFor="privateOption2">
                Only people who know the URL can access your card, and it will
                not be indexed by search engines.
              </label>
            </div>
            <div>
              <h5 className="text-xl font-medium">Private</h5>
              <input
                type="radio"
                name="privacyOption"
                id="privateOption3"
                className="mr-3"
              />
              <label htmlFor="privateOption3">
                Only you can access the card.
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditBingoCard;
