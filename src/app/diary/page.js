'use client';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import '@/styles/diary.css';
import Link from 'next/link';
import '@/styles/home.css';



export default function Diary() {
  const endpointAPI = 'https://6555c3e384b36e3a431e4725.mockapi.io/diary';
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const input = useRef(null);
  const [tulis, setTulis] = useState();
  const [diary, setDiary] = useState([]);


  async function getAPI() {
    try {
      const res = await axios.get(endpointAPI);
      const isi_data = res.data;

      const dataEntries = isi_data.map((item) => ({
        judul: item.name,
        isi: item.avatar,
      }));

      setData(dataEntries);
      setLoading(false); // Set loading to false after data is loaded
    } catch (error) {
      console.log(error);
      setLoading(false); // Set loading to false in case of an error
    }
  }

    function handlerInputChange(event){
      setTulis(event.target.value)
    }

    function handlerTulis() {
      if (input.current.value !== '') {
        setDiary(tulis);
        console.log("Isi Diary : " + diary)
        input.current.value = '';
      } else {
        alert('Jangan Lupa Isi Namanya 😁🙏');
      }
    }


  useEffect(() => {
    getAPI();
  }, []);

  console.log(data);
  return (
    <div style={{ display: 'flex', flexDirection: "column" }}>
      <div className="cta-banner-wrapper">
        <input
          className="cta-input"
          ref={input}
          onChange={handlerInputChange}
          type="text"
          placeholder="Masukkan Nama"
        />
        {/* Tombol CTA */}
        <div className="cta-button" onClick={handlerTulis}>
          <p>Ganti Nama!</p>
        </div>
      </div>
      <div className="diary-container">
        {loading ? (
          'API Loading...'
        ) : data.length > 0 ? (
          <ul>
            {data.map((entry, index) => (
              <Link href={`/diary/${entry.judul}/${index}`} key={index}>
                <li>
                  <div className="diary-content">
                    <h1>{entry.judul}</h1>
                    <p>{entry.isi}</p>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        ) : (
          'API Not Loaded'
        )}
      </div>
    </div>
  );
}
