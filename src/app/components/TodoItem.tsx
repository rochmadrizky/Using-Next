// components/TodoItem.tsx

import React from "react";

interface TodoItemProps {
  text: string;
  onEdit: () => void; // Tambahkan prop onEdit
  onDelete: () => void; // Tambahkan prop onDelete
}

const TodoItem: React.FC<TodoItemProps> = ({ text, onEdit, onDelete }) => {
  return (
    <div className="flex items-center mt-2">
      <input type="checkbox" className="mr-2" />
      <p>{text}</p>
      <button
        className="px-2 py-1 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 ml-2"
        onClick={onEdit} // Gunakan prop onEdit saat tombol Edit diklik
      >
        Edit
      </button>
      <button
        className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 ml-2" // Tombol hapus
        onClick={onDelete}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
