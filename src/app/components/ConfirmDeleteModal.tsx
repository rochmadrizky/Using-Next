// components/ConfirmDeleteModal.tsx

import React from "react";

interface ConfirmDeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white p-6 rounded-lg w-80">
        <p className="mb-4">Apakah Anda yakin ingin menghapus item ini?</p>
        <div className="flex justify-end">
          <button
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 mr-2"
            onClick={() => {
              onConfirm();
              onClose();
            }}
          >
            Ya
          </button>
          <button
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
            onClick={onClose}
          >
            Tidak
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
