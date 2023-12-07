import React from "react";
import RsvpForm from "../components/RsvpForm";

export default function RSVP() {
  return (
    <>
      <section className="md:flex justify-around p-5">
        <div>
          <img src="/images/date.jpg" alt="date" className="md:w-96 w-full" />
        </div>
        <div className="ms-10 text-center p-5 md:w-1/2 mt-3">
          <div className="text-2xl font-bold">When & Where</div>
          <div>
            January 13, 2024 <br />
            6:30pm
          </div>
          <div>
            SER Steak + Spirits <br />
            (Hilton Anatole 27th floor)
          </div>
          <div>
            2201 N Stemmons Fwy Floor 27,
            <br />
            Dallas, TX, 75207
          </div>
          <div>
            <iframe
              className="w-full h-80 mt-7"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3353.715896007974!2d-96.83214802368903!3d32.799791582820596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e9954911d2a13%3A0xefc78da68b7a782a!2sS%C4%92R%20Steak%20%2B%20Spirits!5e0!3m2!1sen!2sus!4v1701752339336!5m2!1sen!2sus"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
      <RsvpForm />
    </>
  );
}
