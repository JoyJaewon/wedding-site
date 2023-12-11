import React from "react";
import Swal from "sweetalert2";
import { updateMessage, deleteMessage } from "../api/firebase";

export default function MessageCard({ message }) {
  const {
    name,
    message: messageText,
    submittedAt,
    id,
    password: originalPassword,
  } = message;

  const updateMessageDetails = (updatedMessage) => {
    const { id, ...data } = updatedMessage;
  
    if (!data.submittedAt) {
      data.submittedAt = message.submittedAt;
    }
    if (!data.id) {
      data.id = message.id;
    }
    updateMessage(id, data)
      .then(() => {
        Swal.fire("Success", "Message updated successfully", "success").then(() => {
          window.location.reload();
        });
      })
      .catch((error) => {
        console.error("Failed to update message:", error);
        Swal.fire("Error", "Failed to update message", "error");
      });
  };
  
  

  const showMessageModal = () => {
    Swal.fire({
      title: name,
      html: `
        <p>${messageText}</p>
        <p><small>${submittedAt}</small></p>
      `,
      
      showCancelButton: true,
      confirmButtonText: "Edit",
      cancelButtonText: "Cancel",
      showDenyButton: false,
      denyButtonText: "Delete",

      preConfirm: () => {
        return Swal.fire({
          title: "Enter your password to edit",
          input: "password",
          inputPlaceholder: "Enter your password",
          inputAttributes: {
            autocapitalize: "off",
            autocorrect: "off",
          },
          showCancelButton: true,
          confirmButtonText: "Submit",
          showLoaderOnConfirm: true,
          preConfirm: (password) => {
            if (password !== originalPassword) {
              Swal.showValidationMessage("Incorrect password");
              return false;
            }
            return Swal.fire({
              title: "Edit Message",
              html: `
                <input id="swal-input1" class="swal2-input" value="${name}" type="text">
                <textarea id="swal-input3" class="swal2-textarea">${messageText}</textarea>
              `,
              confirmButtonText: "Update Message",
              preConfirm: () => {
                const newName = document.getElementById("swal-input1").value;
                const newMessage = document.getElementById("swal-input3").value;
                return { name: newName, message: newMessage, password: originalPassword, id, submittedAt: message.submittedAt };
              },
              
              
              showLoaderOnConfirm: true,
            }).then((editResult) => {
              if (editResult.value) {
                updateMessageDetails(editResult.value);
              }
            });
          },
          allowOutsideClick: () => !Swal.isLoading(),
        });
      },
      preDeny: () => {
        return Swal.fire({
          title: "Enter your password to delete",
          input: "password",
          inputPlaceholder: "Enter your password",
          inputAttributes: {
            autocapitalize: "off",
            autocorrect: "off",
          },
          showCancelButton: true,
          confirmButtonText: "Submit",
          showLoaderOnConfirm: true,
          preConfirm: (password) => {
            if (password !== originalPassword) {
              Swal.showValidationMessage("Incorrect password");
              return false;
            }
            return deleteMessage(id);
          },
          allowOutsideClick: () => !Swal.isLoading(),
        })
          .then((deleteResult) => {
            if (deleteResult.isConfirmed) {
              Swal.fire(
                "Deleted!",
                "The message has been deleted.",
                "success"
              ).then(() => {
                window.location.reload();
              });
            }
          })
          .catch((error) => {
            console.error("Error deleting message:", error);
            Swal.fire("Error", "Failed to delete message", "error");
          });
      },
    });
  };

  return (
    <li
      className="bg-white rounded-lg shadow-md overflow-hidden p-4 my-2 cursor-pointer transition-all hover:scale-105"
      onClick={showMessageModal}
    >
      <h5 className="text-lg font-bold">{name}</h5>
      <p>{messageText}</p>
      <p>
        <small>{submittedAt}</small>
      </p>
    </li>
  );
}
