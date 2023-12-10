import React from "react";
import RsvpForm from "../components/RsvpForm";

export default function RSVP() {
  return (
    <>
      <section className="md:flex justify-center p-5">
        <div className="animate-wiggle">
          <img src="/images/date2.png" alt="date" className="w-full" />
        </div>
        <div className="ms-10 text-center p-5 md:w-1/3 mt-3">
          <div className="text-4xl font-light my-2 mt-24 text-3">
            When & Where
          </div>
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
        </div>
      </section>
      <section>
        <div className="lg:p-24 md:p-16 p-3">
          <iframe
            className="w-full md:px-40 h-96"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3353.715896007974!2d-96.83214802368903!3d32.799791582820596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e9954911d2a13%3A0xefc78da68b7a782a!2sS%C4%92R%20Steak%20%2B%20Spirits!5e0!3m2!1sen!2sus!4v1701752339336!5m2!1sen!2sus"
            loading="lazy"
          ></iframe>
        </div>
      </section>
      <RsvpForm />
    </>
  );
}
