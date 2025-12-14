import React from 'react';
interface ModalProps { children: React.ReactNode; onClose: () => void }
export default function Modal({ children, onClose }: ModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded">
        {children}
        <button onClick={onClose} className="mt-4 bg-red-500 text-white px-3 py-1 rounded">Close</button>
      </div>
    </div>
  );
}
