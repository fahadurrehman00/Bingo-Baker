import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setBackgroundImage,
  setBackgroundColor,
  setGridColor,
  setGridBorder,
  setTextColor,
} from "../../store/Slices/BackgroundSlice";

const EditBingoCard = () => {
  const [inputs, setInputs] = useState(
    Array(3).fill({
      text: "",
      color: "",
      image: "",
      textColor: "",
      textOutline: "",
    })
  );
  const [imagePreview, setImagePreview] = useState(null);
  const [chosenColor, setChosenColor] = useState("#ffffff");
  const [chosenTextColor, setChosenTextColor] = useState("#ffff");
  const [chosenGridColor, setChosenGridColor] = useState("#ffff");
  const dispatch = useDispatch();

  const handleInputChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = { ...newInputs[index], text: value };
    setInputs(newInputs);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
        dispatch(setBackgroundImage(reader.result));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleColorChange = (e) => {
    setChosenColor(e.target.value);
    dispatch(setBackgroundColor(e.target.value));
  };

  const handleTextColorChange = (e) => {
    setChosenTextColor(e.target.value);
    dispatch(setTextColor(e.target.value));
  };

  const handleGridColorChange = (e) => {
    setChosenGridColor(e.target.value);
    dispatch(setGridColor(e.target.value));
  };
  const handleGridBorderChange = (e) => {
    const value = e.target.value;
    let borderWidth;
    if (value === "1") {
      borderWidth = "1px";
    } else if (value === "2") {
      borderWidth = "2px";
    } else if (value === "3") {
      borderWidth = "3px";
    }
    dispatch(setGridBorder(borderWidth));
  };

  const renderInputs = () => {
    return inputs.map((input, index) => (
      <div key={index} className="relative h-[250px] w-[250px]">
        <textarea
          className="border border-red-400 p-2 text-center w-full h-full resize-none overflow-hidden"
          value={input.text}
          onChange={(e) => handleInputChange(index, e.target.value)}
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
                className="w-40 h-40 flex items-center justify-center cursor-pointer bg-white"
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
              <div
                className="w-40 h-40 flex items-center justify-center cursor-pointer"
                style={{
                  backgroundColor: chosenColor,
                }}
                onClick={() =>
                  document.getElementById("backgroundColor").click()
                }
              >
                <input
                  type="color"
                  id="backgroundColor"
                  className="hidden"
                  value={chosenColor}
                  onChange={handleColorChange}
                />
              </div>
              Background Color
            </div>
            <div className="text-center">
              <div
                className="w-40 h-40 flex items-center justify-center cursor-pointer"
                style={{
                  backgroundColor: chosenTextColor,
                }}
                onClick={() =>
                  document.getElementById("backgroundTextColor").click()
                }
              >
                <input
                  type="color"
                  id="backgroundTextColor"
                  className="hidden"
                  value={chosenTextColor}
                  onChange={handleTextColorChange}
                />
              </div>
              Text Color
            </div>
            <div className="text-center">
              <div
                className="w-40 h-40 flex items-center justify-center cursor-pointer"
                style={{
                  backgroundColor: chosenGridColor,
                }}
                onClick={() =>
                  document.getElementById("backgroundGridColor").click()
                }
              >
                <input
                  type="color"
                  id="backgroundGridColor"
                  className="hidden"
                  value={chosenGridColor}
                  onChange={handleGridColorChange}
                />
              </div>
              Grid Color
            </div>
          </div>
          <div className="text-center">
            <div>
              <select
                name=""
                id=""
                className="p-2 text-lg font-medium cursor-pointer rounded-lg w-32 text-black"
                onChange={handleGridBorderChange}
              >
                <option value="1">Thin</option>
                <option value="2">Medium</option>
                <option value="3">Thick</option>
              </select>
            </div>
            Line Thickness
          </div>
        </div>
        <div className="py-11 flex justify-center gap-12 items-center">
          <div className="text-center">
            <h5 className="font-semibold text-2xl"> Extra Words & Images</h5>
            <p>(these will be mixed into your card above)</p>
          </div>
          <div>
            <div
              className="grid w-min"
              style={{
                gridTemplateColumns: `repeat(3, 1fr)`,
              }}
            >
              {renderInputs()}
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
              <label
                htmlFor="privateOption1"
                className="cursor-pointer leading-7"
              >
                Post this card in the public directory. (Public cards are shown
                in our public directory)
              </label>
            </div>
            <div>
              <h5 className="text-xl font-medium">Private</h5>
              <input
                type="radio"
                name="privacyOption"
                id="privateOption2"
                className="mr-3"
              />
              <label
                htmlFor="privateOption2"
                className="cursor-pointer leading-7"
              >
                Keep this card private. (Only people with a direct link can view
                it)
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditBingoCard;
