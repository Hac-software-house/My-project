"use client"
import React, { useState } from "react";
import Navbar from '../(components)/navbar/page';
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/config/firebase";

export default function Contact() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [formError, setFormError] = useState("");

  const clearForm = () => {
    setUserName("");
    setEmail("");
    setPhone("");
    setSubject("");
    setMessage("");
  };

  const onSubmitHandler = async () => {
    if (!userName || !email || !phone || !subject || !message) {
      alert("Fill All Boxes");
      return;
    } else {
      alert("Please Confirm all data");
    }

    const student = {
      name: userName,
      email,
      phone,
      subject,
      message,
    };

    try {
      const collectionName = collection(db, "students");
      const docRef = await addDoc(collectionName, student);
      console.log("Document written with ID: ", docRef.id);

      clearForm();
      setMessage("Sending Successfully");
    } catch (error) {
      console.error("Error adding document: ", error);
      setMessage("Failed to send data. Please try again.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="home2">
        <div className="container">
          <h1 className="formhead">Contact us</h1>
          <input
            type="text"
            placeholder="Enter Your Name"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
          /><br />
          <input
            type="email"
            placeholder="Enter Your Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          /><br />
          <div className="short">
            <input
              type="number"
              placeholder="Enter Phone Number"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
           
          </div>
          <div className="short2">
          <input
              type="text"
              placeholder="Subject"
              onChange={(e) => setSubject(e.target.value)}
              value={subject}
            /></div><br />
          <div className="textbox">
            <input
              type="text"
              placeholder="Message"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
          </div>
          <br />
          <div className="submitbtn">
            <button onClick={onSubmitHandler}>Send</button>
          </div>
          {formError && <p>{formError}</p>}
          {message && <p>{message}</p>}
        </div>
      </div>
    </div>
  );
}
