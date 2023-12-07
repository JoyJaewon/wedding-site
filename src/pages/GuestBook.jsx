import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import Button from "../components/ui/Button";
import { addMessage, getMessages } from "../api/firebase";
import MessageCard from "../components/MessageCard";

export default function GuestBook() {
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      title: "메세지 남기기",
      html: `
        <input id="swal-input1" class="swal2-input" placeholder="이름" type="text">
        <input id="swal-input2" class="swal2-input" placeholder="비밀번호" type="password">
        <textarea id="swal-input3" class="swal2-textarea" placeholder="메세지"></textarea>
      `,
      confirmButtonText: "메세지 업로드",
      focusConfirm: false,
      preConfirm: () => {
        const name = document.getElementById("swal-input1").value;
        const password = document.getElementById("swal-input2").value;
        const message = document.getElementById("swal-input3").value;
        return { name, password, message };
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
    <>
      <section className="w-full text-center">
        <h2 className="text-2xl font-bold my-2 mt-10">방명록</h2>
        <div>"남겨주신 글은 오래도록 마음에 간직하겠습니다"</div>
        <div className="flex justify-end lg:pe-20 mt-3">
          <Button text="Add Message" onClick={openModal} />
        </div>

        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        <ul className="grid grid-cols-1 md:grid-cols-3 lg-grid-cols-4 gap-4 p-4">
          {messages &&
            messages.map((message) => (
              <MessageCard key={message.id} message={message} />
            ))}
        </ul>
      </section>
    </>
  );
}
