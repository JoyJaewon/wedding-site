import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import Button from "../components/ui/Button";
import { addMessage, getMessages } from "../api/firebase";
import MessageCard from "../components/MessageCard";
import { useTranslation } from "react-i18next";

export default function GuestBook() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useTranslation();
  const {
    isLoading,
    error,
    data: messages,
  } = useQuery({
    queryKey: ["messages"],
    queryFn: getMessages,
  });

  const openModal = () => {
    Swal.fire({
      title: t("add-message"),
      html: `
        <input id="swal-input1" class="swal2-input w-2/3" placeholder="${t(
          "name"
        )}" type="text">
        <input id="swal-input2" class="swal2-input w-2/3" placeholder="${t(
          "password"
        )}" type="password">
        <textarea id="swal-input3" class="swal2-textarea w-2/3" placeholder="${t(
          "message"
        )}"></textarea>
      `,
      confirmButtonText: t("submit"),
      //confirmButtonClass: "main-button",
      focusConfirm: false,
      preConfirm: () => {
        const name = document.getElementById("swal-input1").value;
        const password = document.getElementById("swal-input2").value;
        const message = document.getElementById("swal-input3").value;
        if (!name || !message || !password) {
          Swal.showValidationMessage(t("message-required"));
          return false;
        }
        return { name, password, message };
      },
      didOpen: () => {
        Swal.getConfirmButton().style.backgroundColor = "#beb19d";
        Swal.getConfirmButton().style.color = "white";
      },
    }).then((result) => {
      if (result.value) {
        handleSubmit(result.value);
      }
    });
  };

  const handleSubmit = ({ name, message, password }) => {
    setIsSubmitting(true);
    addMessage({ name, message, password })
      .then(() => {
        Swal.fire({
          title: "Success",
          text: "Message submitted successfully",
          icon: "success",
        }).then(() => {
          window.location.reload(); // Refresh the page
        });
      })
      .catch((error) => {
        console.error("Failed to submit message:", error);
        Swal.fire("Error", "Failed to submit message", "error");
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <div className="w-full text-center px-3 lg:px-10">
      <section>
        <div className="text-4xl font-light my-2 mt-24 text-3">
          {t("GuestBook")}
        </div>
        <div className="md:text-lg text-sm text-5 mb-10">
          {t("guestbook-sub")}
        </div>
        <div className="flex justify-end lg:pe-20 mt-3">
          <Button text="Add Message" onClick={openModal} />
        </div>

        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        <ul className="grid grid-cols-1 md:grid-cols-3 lg-grid-cols-4 gap-4 p-4">
          {messages &&
            messages.map((message) => {
              const key = message.id || `message-${Math.random()}`;
              return <MessageCard key={key} message={message} />;
            })}
        </ul>
      </section>
    </div>
  );
}
