import React from "react";

interface TodoItemProps {
  text: string;
  checked: boolean;
  onEdit: () => void;
  onDelete: () => void;
  onToggleChecklist: () => void; // Add new prop
}

const TodoItem: React.FC<TodoItemProps> = ({
  text,
  onEdit,
  checked,
  onDelete,
  onToggleChecklist,
}) => {
  return (
    <div className="flex items-center mt-2">
      <input
        type="checkbox"
        className="mr-2"
        checked={checked}
        onChange={onToggleChecklist} // Handle checkbox change
      />
      <p style={{ textDecoration: checked ? "line-through" : "none" }}>
        {text}
      </p>
      <button
        className="px-2 py-1 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 ml-2"
        onClick={onEdit}
      >
        Edit
      </button>
      <button
        className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 ml-2"
        onClick={onDelete}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
