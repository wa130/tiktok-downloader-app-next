"use client";

import "./Hero.css";
import React, { useState } from "react";
import { Icons } from '@/lib/Icons'
export default function Hero() {
  const [link, setLink] = useState("");

  function sendApi() {
    alert(link);
  }

  function paste() {
    const text = navigator.clipboard.readText().then((text) => {
      if (text.startsWith("https://tiktok.com")) {
        setLink(text);
      } else {
        alert("maaf yang kamu tempel bukan link");
      }
    })
  }
  return (
    <div className="hero">
      <div className="container-form">
        <h2>
          <span>Sman</span>Tik
        </h2>
        <form>
          <div className="forming">
            <input
              type="text"
              placeholder="masukkan link"
              value={link}
              onChange={(e) =>
             setLink(e.target.value)}
            />
            <button onClick={() => {paste()}}><Icons.papanKlip />Tempel</button>
          </div>
          <button type="submit" onClick={sendApi} className="unduh">
            Unduh
          </button>
        </form>
      </div>
    </div>
  );
}
