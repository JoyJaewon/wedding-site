import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Button from "../components/ui/Button";
import { addMessage, getMessages } from "../api/firebase";
import MessageCard from "../components/MessageCard";

export default function GuestBook() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState();
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => {
    setShowModal(false);
    window.location.reload();
  };

  const {
    isLoading,
    error,
    data: messages,
  } = useQuery({
    queryKey: ["messages"],
    queryFn: getMessages,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "message") {
      setMessage(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log(name, message, password);
    addMessage({ name, message, password })
      .then(() => {
        setSuccess("Message submitted successfully");
        setTimeout(() => {
          setSuccess(null);
        }, 4000);
      })
      .catch((error) => {
        console.error("Failed to submit message:", error);
        setSuccess("Failed to submit message");
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <>
      <section className="w-full text-center">
        <h2 className="text-2xl font-bold my-2 mt-10">방명록</h2>
        <div>"남겨주신 글은 오래도록 마음에 간직하겠습니다"</div>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        <ul className="grid grid-cols-1 md:grid-cols-3 lg-grid-cols-4 gap-4 p-4">
          {messages &&
            messages.map((message) => (
              <MessageCard key={message.id} message={message} />
            ))}
        </ul>

        <Button text="Add Message" onClick={openModal} />
      </section>
      {showModal && (
        <div className="modal-backdrop">
          <div className="modal">
            <button className="modal-close" onClick={closeModal}>
              X
            </button>
            <section className="w-full text-center">
              <h5 className="text-2xl font-bold my-4">메세지 남기기</h5>
              {success && <p className="my-2">✅ {success}</p>}
              <form className="flex flex-col px-12" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  value={name}
                  placeholder="이름"
                  required
                  onChange={handleChange}
                />
                <input
                  type="password" // Set the input type to password for the password field
                  name="password"
                  value={password}
                  placeholder="비밀번호" // Placeholder text in Korean for 'Password'
                  required
                  onChange={handleChange}
                />
                <textarea
                  name="message"
                  value={message}
                  placeholder="메세지"
                  required
                  onChange={handleChange}
                  className="mt-2 p-2" // Add some styling to the textarea
                />
                <Button
                  text={isSubmitting ? "업로드중..." : "메세지 업로드"}
                  disabled={isSubmitting}
                />
              </form>
            </section>
          </div>
        </div>
      )}
    </>
  );
}
