"use client"

import './DownloadAlert.css'
import Link from 'next/link'

export default function DownloadAlert() {


    return (
      <div className="container-alert">
        <div className="alert">
          <h2><span>Sman</span>Tik</h2>
          <div className="video">
            <Link href="https://myprof.pages.dev/assets/img/logo.png"><img src="https://myprof.pages.dev/assets/img/logo.png" alt="videos" /></Link>
          </div>

          <button className="unduh">Unduh</button>
        </div>
      </div>
    );
}