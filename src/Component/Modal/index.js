import React, { useEffect, useRef } from "react";
import { Modal as RsModal } from "reactstrap";

function Modal({ isOpen, children, size = "lg", onClose, title,subtitle, ...rest }) {
  useEffect(() => {
    // Add and remove the "overflow-hidden" class to the body based on modal's open state
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup the class when the component unmounts
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <RsModal
      fade={false}
      className={`modal-dialog-centered modal-${size}`}
      isOpen={isOpen}
      {...rest}
    >
      <div className="p-5">
        <div className="d-flex justify-content-end ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-x-lg cursor-pointer"
            viewBox="0 0 16 16"
            onClick={onClose}
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
          </svg>
        </div>
        <div>
          <h2 className="mb-4">{title}</h2>
          <p className="mb-4">{subtitle} </p>
        </div>
        {children}
      </div>
    </RsModal>
  );
}

export { Modal };
