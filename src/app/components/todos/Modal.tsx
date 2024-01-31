import React, { useState, useEffect } from "react";

interface ModalProps {
  onClose: () => void;
  onAdd: (text: string) => void;
  onSubmit: (text: string) => void;
  initialText?: string;
}

const Modal: React.FC<ModalProps> = ({
  onClose,
  onAdd,
  onSubmit,
  initialText = "",
}) => {
  const [text, setText] = useState(initialText);

  useEffect(() => {
    setText(initialText);
  }, [initialText]);

  const handleAdd = () => {
    if (text.trim() !== "") {
      onAdd(text);
      setText("");
    }
  };

  const handleEdit = () => {
    if (text.trim() !== "") {
      onSubmit(text);
      setText("");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white p-6 rounded-lg w-80">
        <h2 className="text-xl font-semibold mb-4">
          {initialText ? "Edit Item" : "Add Item"}
        </h2>
        <input
          type="text"
          className="border border-gray-300 p-2 mb-4 w-full"
          placeholder="Enter your task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="flex justify-end">
          {initialText ? (
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mr-2"
              onClick={handleEdit}
            >
              Save
            </button>
          ) : (
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mr-2"
              onClick={handleAdd}
            >
              Add
            </button>
          )}
          <button
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
