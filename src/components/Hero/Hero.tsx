"use client";

import "./Hero.css";
import React, { useState } from "react";
import { Icons } from '@/lib/Icons'
export default function Hero() {
  const [link, setLink] = useState("");

  function sendApi(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert(link);
  }
  return (
    <div className="hero">
      <div className="container-form">
        <h2>
          <span>Sman</span>Tik
        </h2>
        <form onSubmit={sendApi}>
          <div className="forming">
            <input
              type="text"
              placeholder="masukkan link"
              value={link}
              onChange={(e) =>
             setLink(e.target.value)}
            />
            <button><Icons.papanKlip />Tempel</button>
          </div>
          <button type="submit" className="unduh">
            Unduh
          </button>
        </form>
      </div>
    </div>
  );
}
