import React, { useState } from "react";

const FloatingTextEditor = ({ style, onApplyChanges, onClose }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedTextColor, setSelectedTextColor] = useState(null);
  const [selectedText, setSelectedText] = useState("");
  const [selectedTextOutline, setSelectedTextOutline] = useState("#000");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedFile(reader.result);
        onApplyChanges({
          text: selectedText,
          image: reader.result,
          color: selectedColor,
          textColor: selectedTextColor,
          textOutline: selectedTextOutline,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
    onApplyChanges({
      text: selectedText,
      image: selectedFile,
      color: event.target.value,
      textColor: selectedTextColor,
      textOutline: selectedTextOutline,
    });
  };

  const handleTextOutlineChange = (event) => {
    const outlineColor = event.target.value;
    setSelectedTextOutline(outlineColor);
    onApplyChanges({
      text: selectedText,
      image: selectedFile,
      color: selectedColor,
      textColor: selectedTextColor,
      textOutline: outlineColor,
    });
  };

  const handleTextColorChange = (event) => {
    setSelectedTextColor(event.target.value);
    onApplyChanges({
      text: selectedText,
      image: selectedFile,
      color: selectedColor,
      textColor: event.target.value,
      textOutline: selectedTextOutline,
    });
  };

  const handleTextChange = (event) => {
    setSelectedText(event.target.value);
  };

  const handleApply = () => {
    onApplyChanges({
      text: selectedText,
      image: selectedFile,
      color: selectedColor,
      textColor: selectedTextColor,
      textOutline: selectedTextOutline,
    });
  };

  return (
    <div
      className="absolute p-4 bg-white border rounded shadow-lg"
      style={style}
    >
      <div className="flex flex-col gap-2">
        <div className="flex justify-center gap-6 items-center">
          <button className="uploadImage">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              style={{ display: "none" }}
              id="imageUpload"
            />
            <label htmlFor="imageUpload" className="cursor-pointer">
              <img src="/icons/Image.png" alt="Image" />
            </label>
          </button>
          <button className="changeBoxBackgroundColor">
            <input
              type="color"
              onChange={handleColorChange}
              style={{ display: "none" }}
              id="colorPicker"
            />
            <label htmlFor="colorPicker" className="cursor-pointer">
              <img src="/icons/Wheel.png" alt="Color Picker" />
            </label>
          </button>
        </div>
        <div className="flex justify-center gap-6 items-center">
          <button className="changeTextColor">
            <input
              type="color"
              onChange={handleTextColorChange}
              style={{ display: "none" }}
              id="textColorPicker"
            />
            <label htmlFor="textColorPicker" className="cursor-pointer">
              <img src="/icons/Underline.png" alt="Text Color Picker" />
            </label>
          </button>
          <button className="changeTextOutline">
            <input
              type="color"
              onChange={handleTextOutlineChange}
              style={{ display: "none" }}
              id="textOutlinePicker"
            />
            <label htmlFor="textOutlinePicker" className="cursor-pointer">
              <img src="/icons/outline.png" alt="Color Picker" />
            </label>
          </button>
        </div>
        <div className="flex justify-center gap-6 items-center">
          <button className="textAlignLeftInBox">
            <img src="/icons/Left alignment.png" alt="Image" />
          </button>
          <button className="textAlignTopInBox">
            <img src="/icons/Top alignment.png" alt="Color Picker" />
          </button>
        </div>
        <div className="flex justify-center gap-6 items-center">
          <button>
            <img src="/icons/Center alignment.png" alt="Image" />
          </button>
          <button>
            <img
              src="/icons/Center alignment horizontally.png"
              alt="Color Picker"
            />
          </button>
        </div>
        <div className="flex justify-center gap-6 items-center">
          <button>
            <img src="/icons/Right alignment.png" alt="Image" />
          </button>
          <button>
            <img src="/icons/Bottom alignment.png" alt="Color Picker" />
          </button>
        </div>
        <div className="flex justify-center gap-6 items-center">
          <button className="flipthecard">
            <img src="/icons/Reuse.png" alt="Color Picker" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FloatingTextEditor;
