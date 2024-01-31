"use client";

import { useState } from "react";
import {
  IconArrowBarDown,
  IconArrowRightBar,
  IconDeselect,
  IconPencil,
  IconPencilCheck,
  IconPencilX,
  IconPlus,
  IconSelectAll,
  IconSend,
  IconTrash,
  IconX,
} from "@tabler/icons-react";

const TodoList = () => {
  const [todos, setTodos] = useState<{ text: string; selected: boolean }[]>([]);
  const [input, setInput] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editInput, setEditInput] = useState<string>("");
  const [selectAll, setSelectAll] = useState<boolean>(false);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [showDeleteItemModal, setShowDeleteItemModal] =
    useState<boolean>(false);
  const [itemToDeleteIndex, setItemToDeleteIndex] = useState<number | null>(
    null
  );
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isEditItemModalOpen, setIsEditItemModalOpen] =
    useState<boolean>(false);
  const [editingItemIndex, setEditingItemIndex] = useState<number | null>(null);

  const openEditItemModal = (index: number) => {
    setEditingItemIndex(index);
    setIsEditItemModalOpen(true);
  };

  const closeEditItemModal = () => {
    setIsEditItemModalOpen(false);
  };

  const openDeleteItemModal = (index: number) => {
    if (!isEditing) {
      setItemToDeleteIndex(index);
      setShowDeleteItemModal(true);
    }
  };

  const closeDeleteItemModal = () => {
    setShowDeleteItemModal(false);
  };

  const confirmDeleteItem = () => {
    if (itemToDeleteIndex !== null) {
      const updatedTodos = [...todos];
      updatedTodos.splice(itemToDeleteIndex, 1);
      setTodos(updatedTodos);
      closeDeleteItemModal();
    }
  };

  const saveEdit = (index: number) => {
    updateTodo(index);
    setEditIndex(null);
  };

  const cancelEdit = () => {
    setEditIndex(null);
    setIsEditing(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addTodo = () => {
    if (input.trim() !== "") {
      setTodos([{ text: input, selected: false }, ...todos]);
      setInput("");
      closeModal();
      setSelectAll(false);
    }
  };

  const handleEditClick = (index: number, todo: string) => {
    setEditIndex(index);
    setEditInput(todo);
    setIsEditing(true);
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditInput(e.target.value);
  };

  const handleEditKeyPress = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Enter") {
      updateTodo(index);
    }
  };

  const updateTodo = (index: number) => {
    if (editInput.trim() !== "") {
      const newTodos = [...todos];
      newTodos[index].text = editInput;
      setTodos(newTodos);
      setEditIndex(null);
    }
  };

  const handleRemoveAll = () => {
    if (!isEditing) {
      setShowDeleteModal(true);
    }
  };

  const toggleSelectAll = () => {
    setSelectAll(!selectAll);
    const updatedTodos = todos.map((todo) => ({
      ...todo,
      selected: !selectAll,
    }));
    setTodos(updatedTodos);
  };

  const handleCheckboxChange = (index: number) => {
    if (!isEditing) {
      const updatedTodos = [...todos];
      updatedTodos[index].selected = !updatedTodos[index].selected;
      setTodos(updatedTodos);
    }
  };

  const confirmDeleteAll = () => {
    const remainingTodos = todos.filter((todo) => !todo.selected);
    setTodos(remainingTodos);
    setShowDeleteModal(false);
  };

  const closeDeleteModal = () => {
    setShowDeleteModal(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-wrap items-center gap-2 justify-center">
        <div className="w-full max-w-xs border p-8 rounded-lg">
          <h1 className="text-3xl font-bold text-center">
            Tambahkan Daftar Tugas
          </h1>

          <div className="p-4">
            <p className="text-base text-center">
              untuk mengatur waktu dan memastikan menyelesaikan pekerjaan,
            </p>
            <p className="text-base text-center">Anda dengan tepat waktu.</p>
          </div>

          <div className="flex items-center justify-center">
            <button
              className=" font-bold px-4 py-2 w-full bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
              onClick={openModal}
            >
              <div className="flex items-center justify-center">
                <IconPlus className="w-4 h-4 font-semibold" />
                <p className="text-base">Tambahkan list</p>
              </div>
            </button>
          </div>

          {isModalOpen && (
            <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
              <div className="bg-white p-8 rounded-lg relative">
                <button
                  className="font-bold absolute right-0 top-0 p-2 hover:text-red-500"
                  onClick={closeModal}
                >
                  <IconX />
                </button>
                <input
                  type="text"
                  className="border border-gray-400 rounded-lg px-4 py-2 w-full my-4"
                  value={input}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyPress}
                  placeholder="Tambahkan tugas?..."
                />
                <div className="flex items-center justify-center">
                  <button
                    className=" font-bold px-4 py-2 w-full bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
                    onClick={addTodo}
                  >
                    <div className="flex items-center justify-center">
                      <IconSend />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="w-full md:w-5 max-w-xs mx-auto flex items-center justify-center">
          <div>
            <IconArrowRightBar className="hidden md:block" />
            <IconArrowBarDown className="block md:hidden" />
          </div>
        </div>

        <div className="w-full max-w-xs border p-8 rounded-lg">
          <h1 className="text-3xl font-bold text-center">Daftar Tugas</h1>

          <div className="p-4">
            <p className="text-base text-center">
              daftar tugas yang telah dibuat akan muncul disini ygy, dibawah
              ini.
            </p>
          </div>

          {todos.length === 0 && (
            <p className="w-full p-2 border text-gray-400 text-center rounded-lg">
              tidak ada list yang dibuat ...
            </p>
          )}

          <ul>
            {todos.map((todo, index) => (
              <li
                key={index}
                className="flex justify-between items-center mb-1 border p-2 rounded-lg"
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={todo.selected}
                    onChange={() => handleCheckboxChange(index)}
                    className="mr-1"
                  />
                  {editIndex === index ? (
                    <div className="flex flex-col items-start">
                      <input
                        type="text"
                        value={editInput}
                        onChange={handleEditChange}
                        onKeyDown={(e) => handleEditKeyPress(e, index)}
                        className="border border-gray-400 w-52 rounded-lg px-2 py-1"
                      />
                      <div className="mt-2">
                        <button
                          className="mr-2 font-bold hover:text-blue-500"
                          onClick={() => saveEdit(index)}
                        >
                          <IconPencilCheck className="stroke-1" />
                        </button>

                        <button
                          className="font-bold hover:text-red-500"
                          onClick={() => cancelEdit()}
                        >
                          <IconPencilX className="stroke-1" />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <span>{todo.text}</span>
                  )}
                </div>

                <div>
                  {editIndex !== index && (
                    <button
                      onClick={() => handleEditClick(index, todo.text)}
                      className="hover:text-blue-500"
                    >
                      <IconPencil className="stroke-1" />
                    </button>
                  )}
                  <button
                    className={`font-bold hover:text-red-500 ${
                      isEditing ? "cursor-not-allowed" : ""
                    }`}
                    onClick={() => openDeleteItemModal(index)}
                    disabled={isEditing}
                  >
                    <IconTrash className="stroke-1" />
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {todos.length > 0 && (
            <div className="flex justify-between mt-4">
              <div>
                <button
                  onClick={toggleSelectAll}
                  disabled={isEditing}
                  className={`text-red-500 ${
                    isEditing ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  <div className="flex items-center gap-1">
                    {selectAll ? <IconDeselect /> : <IconSelectAll />}
                    <p
                      className={
                        selectAll
                          ? "text-red-500 text-sm"
                          : "text-blue-500 text-sm"
                      }
                    >
                      {selectAll ? "Ga jadi" : "Semua"}
                    </p>
                  </div>
                </button>
              </div>
              <div>
                <button
                  className={`text-red-500 ${
                    todos.some((todo) => todo.selected)
                      ? ""
                      : "opacity-50 cursor-not-allowed"
                  }`}
                  onClick={handleRemoveAll}
                  disabled={!todos.some((todo) => todo.selected) || isEditing}
                >
                  <div className="flex items-center">
                    <IconTrash className="stroke-1" />
                    <p className="text-sm">Semua</p>
                  </div>
                </button>
              </div>
            </div>
          )}

          {showDeleteModal && (
            <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
              <div className="bg-white p-8 rounded-lg relative">
                <p className="text-xl mb-4">yakin mau hapus semua item ini?</p>
                <div className="flex justify-center">
                  <button
                    className="font-bold px-4 py-2 bg-red-500 text-white rounded-lg mr-4"
                    onClick={confirmDeleteAll}
                  >
                    yakin ygy
                  </button>
                  <button
                    className="font-bold px-4 py-2 bg-gray-300 rounded-lg"
                    onClick={closeDeleteModal}
                  >
                    ga jadi
                  </button>
                </div>
              </div>
            </div>
          )}

          {showDeleteItemModal && (
            <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
              <div className="bg-white p-8 rounded-lg relative">
                <p className="text-xl mb-4">yakin mau hapus item ini?</p>
                <div className="flex justify-center">
                  <button
                    className="font-bold px-4 py-2 bg-red-500 text-white rounded-lg mr-4"
                    onClick={confirmDeleteItem}
                  >
                    yakin ygy
                  </button>
                  <button
                    className="font-bold px-4 py-2 bg-gray-300 rounded-lg"
                    onClick={closeDeleteItemModal}
                  >
                    ga jadi
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
