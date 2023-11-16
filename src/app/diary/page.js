'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import '@/styles/diary.css'

export default function Diary() {
  const endpointAPI = 'https://6555c3e384b36e3a431e4725.mockapi.io/diary';
  const [data, setData] = useState([]);

  async function getAPI() {
    try {
      const res = await axios.get(endpointAPI);
      const isi_data = res.data;

      const dataEntries = isi_data.map((item) => ({
        judul: item.name,
        isi: item.avatar,
      }));

      setData(dataEntries);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAPI();
  }, []);

  return (
    <div className="diary-container">
      {data.length > 0 ? (
        <ul>
          {data.map((entry, index) => (
            <li key={index}>
              <div className="diary-content">
                <h1>{entry.judul}</h1>
                <p>{entry.isi}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        'Api Not Load'
      )}
    </div>
  );
}
