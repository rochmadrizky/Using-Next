"use client";

import React, { useState } from "react";
import TodoItem from "./TodoItem";
import Modal from "./Modal";
import ConfirmDeleteModal from "./ConfirmDeleteModal";
import ConfirmDeleteAllModal from "./ConfirmDeleteAllModal";

interface Todo {
  text: string;
  checked: boolean;
}

const TodoList: React.FC = () => {
  const [items, setItems] = useState<Todo[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [deleteIndex, setDeleteIndex] = useState<number | null>(null);
  const [isDeleteAllModalOpen, setIsDeleteAllModalOpen] =
    useState<boolean>(false);
  const [isAnyItemChecked, setIsAnyItemChecked] = useState<boolean>(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleAddItem = (text: string) => {
    const newItems = [{ text, checked: false }, ...items];
    setItems(newItems);
    setIsAnyItemChecked(newItems.some((item) => item.checked));
    setIsModalOpen(false);
  };

  const handleEditItem = (index: number) => {
    setEditIndex(index);
    setIsModalOpen(true);
  };

  const handleToggleChecklist = (index: number) => {
    const updatedItems = [...items];
    updatedItems[index].checked = !updatedItems[index].checked;
    setItems(updatedItems);
    setIsAnyItemChecked(updatedItems.some((item) => item.checked));
  };

  const handleToggleAllChecklist = () => {
    const allChecked = items.every((item) => item.checked);
    const updatedItems = items.map((item) => ({
      ...item,
      checked: !allChecked,
    }));
    setItems(updatedItems);
    setIsAnyItemChecked(!allChecked);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="px-6">
        <div className="max-w-xl border p-4 rounded-xl shadow-md">
          <div className="p-4">
            <div className="text-center py-4">
              <h1 className="text-2xl font-bold">To-Do List</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className="flex items-center justify-center pb-4">
              <button
                className="px-8 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                onClick={openModal}
              >
                <p>Tambahkan?</p>
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-xl border p-4 rounded-xl shadow-md">
          <div className="p-4">
            <div className="text-center py-4">
              <h1 className="text-2xl font-bold">To-Do List</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className="py-3">
              {items.map((item, index) => (
                <TodoItem
                  key={index}
                  text={item.text}
                  checked={item.checked}
                  onEdit={() => handleEditItem(index)}
                  onDelete={() => setDeleteIndex(index)}
                  onToggleChecklist={() => handleToggleChecklist(index)}
                />
              ))}

              {items.length === 0 && (
                <p className="w-full p-2 border text-gray-400 text-center rounded-xl">
                  Tidak ada item disini ygy...
                </p>
              )}
            </div>

            <div className="flex items-center justify-center">
              {items.length > 0 && (
                <>
                  <button
                    className={`px-4 py-2 ${
                      isAnyItemChecked ? "bg-red-500" : "bg-gray-300"
                    } text-white rounded mb-4 ml-4`}
                    onClick={() => setIsDeleteAllModalOpen(true)}
                    disabled={!isAnyItemChecked}
                  >
                    Hapus Semua
                  </button>
                  <button
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mb-4 ml-4"
                    onClick={handleToggleAllChecklist}
                  >
                    {isAnyItemChecked ? "Unchecklist All" : "Checklist All"}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        <div>
          {isModalOpen && (
            <Modal
              onClose={() => {
                setIsModalOpen(false);
                setEditIndex(null);
              }}
              onAdd={handleAddItem}
              initialText={editIndex !== null ? items[editIndex].text : ""}
              onSubmit={(editedText: string) => {
                if (editIndex !== null) {
                  const updatedItems = [...items];
                  updatedItems[editIndex].text = editedText;
                  setItems(updatedItems);
                  setEditIndex(null);
                  setIsModalOpen(false);
                }
              }}
            />
          )}

          <ConfirmDeleteModal
            isOpen={deleteIndex !== null}
            onClose={() => setDeleteIndex(null)}
            onConfirm={() => {
              if (deleteIndex !== null) {
                const updatedItems = [...items];
                updatedItems.splice(deleteIndex, 1);
                setItems(updatedItems);
                setDeleteIndex(null);
                setIsAnyItemChecked(updatedItems.some((item) => item.checked));
              }
            }}
          />

          <ConfirmDeleteAllModal
            isOpen={isDeleteAllModalOpen}
            onClose={() => setIsDeleteAllModalOpen(false)}
            onConfirm={() => {
              setItems([]);
              setIsDeleteAllModalOpen(false);
              setIsAnyItemChecked(false);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TodoList;
