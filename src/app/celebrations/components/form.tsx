"use client";
import {
  FillCalendar,
  FillFoodService,
  FillMail,
  FillMessage,
  FillPhone,
  FillUser,
} from "@/icons/icons";
import axios from "axios";
import React, { useState } from "react";

function Form() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [service, setService] = useState("");
  const [formRes, setFormRes] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormRes(true);
    try {
      const { data } = await axios.post(
        `https://nexon.eazotel.com/eazotel/addcontacts`,
        {
          Domain: "wabisabiresort",
          Name: userName,
          email: userEmail,
          Contact: userPhone,
          Description: `Message: ${userMessage}, eventDate: ${eventDate}, service: ${service}`,
          created_from: "webform",
          source_url: window.location.href,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      if (data.Status) {
        setFormRes(true);
        setUserName("");
        setUserEmail("");
        setUserMessage("");
        setUserPhone("");
        setFormRes(false);
        alert("message sent");
      } else {
        setFormRes(false);
        alert("somethin wrong!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 bg-navy-deep rounded-sm">
      <div className="md:p-8 py-8">
        <h2 className="md:text-3xl text-2xl text-[#D1BA97] font-semibold">
          Meet. Celebrate. Connect. Create memorable moments.
        </h2>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-6">
          <div className="flex md:flex-row flex-col items-center gap-5">
            <div className="flex items-center gap-2 border border-[#D1BA97] w-full px-3 text-[#D1BA97]">
              <FillUser />
              <input
                type="text"
                placeholder="Your Name*"
                className="w-full bg-transparent rounded-sm outline-none py-3 placeholder:text-[#D1BA97] text-[#D1BA97]"
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
            </div>

            <div className="flex items-center gap-2 border border-[#D1BA97] w-full px-3 text-[#D1BA97]">
              <FillPhone color="#D1BA97" />
              <input
                type="text"
                placeholder="Your Phone Number*"
                className="w-full bg-transparent rounded-sm outline-none py-3 placeholder:text-[#D1BA97] text-[#D1BA97]"
                value={userPhone}
                onChange={(e) => {
                  setUserPhone(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="flex md:flex-row flex-col items-center gap-5">
            <div className="flex items-center gap-2 border border-[#D1BA97] w-full px-3 text-[#D1BA97]">
              <FillMail color="#D1BA97" width={20} />
              <input
                type="email"
                required
                placeholder="Your Email*"
                className="w-full bg-transparent rounded-sm outline-none py-3 placeholder:text-[#D1BA97] text-[#D1BA97]"
                value={userEmail}
                onChange={(e) => {
                  setUserEmail(e.target.value);
                }}
              />
            </div>

            <div className="flex items-center gap-2 border border-[#D1BA97] w-full px-3 text-[#D1BA97]">
              <FillCalendar />
              <input
                type="text"
                required
                placeholder="Event Date"
                className="w-full bg-transparent rounded-sm outline-none py-3 placeholder:text-[#D1BA97] text-[#D1BA97]"
                value={eventDate}
                onChange={(e) => {
                  setEventDate(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="flex md:flex-row flex-col items-center gap-5">
            <div className="flex items-center gap-2 border border-[#D1BA97] w-full px-3 text-[#D1BA97]">
              <FillFoodService />
              <input
                type="text"
                required
                placeholder="Service"
                className="w-full bg-transparent rounded-sm outline-none py-3 placeholder:text-[#D1BA97] text-[#D1BA97]"
                value={service}
                onChange={(e) => {
                  setService(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="flex md:flex-row flex-col items-center gap-5">
            <div className="flex gap-2 border border-[#D1BA97] w-full px-3 text-[#D1BA97]">
              <div className="mt-4">
                <FillMessage />
              </div>

              <textarea
                rows={6}
                required
                placeholder="Is there anything else we should know?"
                className="w-full text-md bg-transparent rounded-sm outline-none py-3 placeholder:text-[#D1BA97] text-[#D1BA97]"
                value={userMessage}
                onChange={(e) => {
                  setUserMessage(e.target.value);
                }}
              />
            </div>
          </div>

          {formRes ? (
            <button className="border text-center justify-center self-center border-[#D1BA97] bg-[#D1BA97] text-md px-8 py-2 text-[#063F3F] font-semibold rounded-sm hover:bg-transparent hover:text-[#D1BA97] duration-300 active:scale-75 hover:scale-105">
              Loading.....
            </button>
          ) : (
            <button className="border text-center justify-center self-center border-[#D1BA97] bg-[#D1BA97] text-md px-8 py-2 text-[#063F3F] font-semibold rounded-sm hover:bg-transparent hover:text-[#D1BA97] duration-300 active:scale-75 hover:scale-105">
              SUBMIT
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default Form;