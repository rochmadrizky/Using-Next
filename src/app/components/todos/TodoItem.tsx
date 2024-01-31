import React from "react";

interface TodoItemProps {
  text: string;
  checked: boolean;
  onEdit: () => void;
  onDelete: () => void;
  onToggleChecklist: () => void;
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
        onChange={onToggleChecklist}
      />
      <div className="w-full p-2 border text-center rounded-xl">
        <p style={{ textDecoration: checked ? "line-through" : "none" }}>
          {text}
        </p>
      </div>
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
