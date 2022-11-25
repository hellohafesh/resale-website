import React from 'react';

const ConfirmationModal = ({ title, message, classs, data, deleteUserDB, btnName }) => {
    return (
        <>


            <input type="checkbox" id="modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{title}</h3>
                    <p className="py-4">{message}</p>
                    <button onClick={() => deleteUserDB(data)} className={`${classs}`}>{btnName}</button>
                </div>
            </div>
        </>
    );
};

export default ConfirmationModal;