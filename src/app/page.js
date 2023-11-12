'use client';

import Image from 'next/image';
import styles from './page.module.css';
import foto from '/public/assets/profil.png';
import { useRef, useState } from 'react';

export default function Home() {
  const [bravo, setBravo] = useState(0);

  function handlerTambah() {
    setBravo(bravo + 1);
  }

  const input = useRef(null);

  const [nama, setNama] = useState('Gusti Ngurah Adhi Astika');
  function handlerNama() {
    if (input.current.value !== '') {
      setNama(input.current.value);
      input.current.value = '';
    } else {
      alert('Jangan Isi Namanya 😁🙏');
    }
  }

  return (
    <div className="body">
      <div className="banner-container">
        <div className="header-banner-wrapper">
          <div className="profile-header-banner">
            <Image
              src={foto}
              width={120}
              height={120}
              alt="Picture of the author"
            ></Image>
          </div>
          <div className="content-header-banner">
            <h1>{nama}</h1>
            <div className="bio-nim-header-banner">
              <p>D121211029</p>
              <p>“To Infinity and Beyond”</p>
            </div>
          </div>
        </div>
        <div className="cta-banner-wrapper">
          <input
            className="cta-input"
            ref={input}
            type="text"
            placeholder="Masukkan Nama"
          />
          {/* Tombol CTA */}
          <div
            className="cta-button"
            onClick={() => {
              handlerTambah();
              handlerNama();
            }}
          >
            <p>Ganti Nama! {bravo}x</p>
          </div>
        </div>
      </div>
    </div>
  );
}
