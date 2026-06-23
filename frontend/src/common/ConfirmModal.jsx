const ConfirmModal = ({
  open,
  title,
  onConfirm,
  onClose
}) => {

  if (!open) return null;

  return (
   <div className="modal-overlay">

      <div className="confirm-modal">

       <h3 className="modal-title">
          {title}
        </h3>

        <div className="modal-actions">

          <button
            onClick={onClose}
            className="cancel-btn"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="delete-btn"
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
};

export default ConfirmModal;