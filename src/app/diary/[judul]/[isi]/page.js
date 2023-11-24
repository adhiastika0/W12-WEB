import '@/styles/diary.css'

export default function DiaryContent({ params }) {
    const { judul, isi } = params

    return(
        <div className='diary-content'>
            <h1>{judul}</h1>
            <p>{isi}</p>
        </div>
    )

}