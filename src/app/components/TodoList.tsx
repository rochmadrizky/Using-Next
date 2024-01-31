"use client";

import React, { useState } from "react";
import TodoItem from "./TodoItem";
import Modal from "./Modal";
import ConfirmDeleteModal from "./ConfirmDeleteModal";
import ConfirmDeleteAllModal from "./ConfirmDeleteAllModal";

const TodoList: React.FC = () => {
  const [items, setItems] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [deleteIndex, setDeleteIndex] = useState<number | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [isDeleteAllModalOpen, setIsDeleteAllModalOpen] =
    useState<boolean>(false);
  const [checklistAll, setChecklistAll] = useState<boolean>(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditIndex(null);
  };

  const handleAddItem = (text: string) => {
    setItems([text, ...items]);
    setIsModalOpen(false);
  };

  const handleEditItem = (index: number) => {
    setEditIndex(index);
    setIsModalOpen(true);
  };

  const handleEditSubmit = (editedText: string) => {
    if (editIndex !== null) {
      const updatedItems = [...items];
      updatedItems[editIndex] = editedText;
      setItems(updatedItems);
      setEditIndex(null);
      setIsModalOpen(false);
    }
  };

  const handleDeleteItem = (index: number) => {
    setDeleteIndex(index);
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (deleteIndex !== null) {
      const updatedItems = [...items];
      updatedItems.splice(deleteIndex, 1);
      setItems(updatedItems);
      setDeleteIndex(null);
      setIsDeleteModalOpen(false);
    }
  };

  const handleCloseDeleteModal = () => {
    setDeleteIndex(null);
    setIsDeleteModalOpen(false);
  };

  const handleDeleteAll = () => {
    setIsDeleteAllModalOpen(true);
  };

  const handleConfirmDeleteAll = () => {
    setItems([]);
    setIsDeleteAllModalOpen(false);
  };

  const handleCloseDeleteAllModal = () => {
    setIsDeleteAllModalOpen(false);
  };

  const handleChecklistAll = () => {
    setChecklistAll(!checklistAll);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
      <button
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 mb-4"
        onClick={openModal}
      >
        Add Item
      </button>
      {items.length > 0 && (
        <>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 mb-4 ml-4"
            onClick={handleDeleteAll}
          >
            Hapus Semua
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mb-4 ml-4"
            onClick={handleChecklistAll}
          >
            Checklist All
          </button>
        </>
      )}
      {items.map((item, index) => (
        <TodoItem
          key={index}
          text={item}
          checked={checklistAll}
          onEdit={() => handleEditItem(index)}
          onDelete={() => handleDeleteItem(index)}
        />
      ))}
      {isModalOpen && (
        <Modal
          onClose={closeModal}
          onAdd={handleAddItem}
          initialText={editIndex !== null ? items[editIndex] : ""}
          onSubmit={handleEditSubmit}
        />
      )}
      <ConfirmDeleteModal
        isOpen={isDeleteModalOpen}
        onClose={handleCloseDeleteModal}
        onConfirm={handleConfirmDelete}
      />
      <ConfirmDeleteAllModal
        isOpen={isDeleteAllModalOpen}
        onClose={handleCloseDeleteAllModal}
        onConfirm={handleConfirmDeleteAll}
      />
    </div>
  );
};

export default TodoList;
