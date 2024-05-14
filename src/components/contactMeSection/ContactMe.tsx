"use client"
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import CustomInput, { TextArea, Submit } from "../inputs/Inputs";

function ContactMeBox() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  // form onchange responds
  const respondToName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName((prev) => {
      return e.target.value;
    });
  };

  const respondToEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail((prev) => {
      return e.target.value;
    });
  };

  const respondToMessage = (e: React.ChangeEventHandler<HTMLTextAreaElement>) => {
    setMessage((prev) => {
      // @ts-ignore
      return e.target.value;
    });
  };

  // uses Email.js services to handle email submission
  const respondToSubmit = async (e: React.MouseEventHandler<HTMLButtonElement>) => {
    if (!message || !email) {
      return alert("please provide email and message fields");
    }
    const template = {
      message,
      name,
      email,
    };

    // @ts-ignore
    e.preventDefault();


    // email.js
    emailjs
      .send( //@ts-ignore
        process.env.SERVICE_ID,
        process.env.TEMPLATE_ID,
        template,
        {
          publicKey: process.env.PUBLIC_KEY,
        }
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );

    setEmail("");
    setName("");
    setMessage("");
  };

  return (
    <form>
      <CustomInput
        type={"text"}
        label={"name"}
        value={name}
        onchange={respondToName}
      />
      <CustomInput
        type={"email"}
        label={"email"}
        value={email}
        onchange={respondToEmail}
        required={true}
      />
      <TextArea
        placeholder={"Type your message here"}
        value={message}
        // @ts-ignore
        onchange={respondToMessage}
      />

      {/* @ts-ignore */}
      <Submit text={"send mail"} onclick={respondToSubmit} />
    </form>
  );
}

function ContactMeSection() {
  return (
    <div id="contact" className="">
      <h2 className="text-lg uppercase mt-[5rem]">contact me</h2>
      <p className="">
        For projects, collaborations, or just a friendly chat, use the form
        below. I'm eager to connect with clients, employers, and fellow
        developers.
        <br />
        <br />
        Looking forward to our conversation!
      </p>
      <div className="">
        <div className="">
          <ContactMeBox />
        </div>
      </div>
    </div>
  );
}

export default ContactMeSection;
