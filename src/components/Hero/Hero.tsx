"use client";

import "./Hero.css";
import React, { useState, useEffect } from "react";
import { Icons } from "@/lib/Icons";
import DownloadAlert from "../DownloadAlert/DownloadAlert";

export default function Hero() {
  const [link, setLink] = useState("");
  const [DownloaderAlert, setDownloaderAlert] = useState(false);

  function sendApi(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (!link) {
      alert("maaf link wajib di isi");
      return;
    }
    setDownloaderAlert(true);
  }

  function paste() {
    const text = navigator.clipboard.readText().then((text) => {
      if (text.startsWith("https://tiktok.com")) {
        setLink(text);
      } else {
        alert("maaf yang kamu tempel bukan link");
      }
    });
  }
  return (
    <div className="hero">
      <div className="container-form">
        <h2>
          <span>Sman</span>Tik
        </h2>

        <div className="form-donwloader">
          <div className="forming">
            <input
              type="text"
              placeholder="masukkan link"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
            <button
              onClick={() => {
                paste();
              }}
            >
              <Icons.papanKlip />
              Tempel
            </button>
          </div>
          <button type="button" onClick={sendApi} className="unduh">
            Unduh
          </button>
        </div>
      </div>
      {DownloaderAlert && <DownloadAlert />}
    </div>
  );
}
