/* eslint-disable react/prop-types */
export default function Modal({ show, onClose }) {
    if (!show) {
      return null;
    }
  
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[60]">
        <div className="bg-white p-4 rounded shadow-lg max-w-sm w-full">
          <h2 className="text-lg font-bold mb-2">Site Under Maintenance!</h2>
          <p className="mb-4">You can still use some of the features...</p>
          <button 
            onClick={onClose} 
            className="bg-orange-500 text-white px-4 py-2 rounded"
          >
            Close
          </button>
        </div>
      </div>
    );
  }