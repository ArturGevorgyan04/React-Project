import './HomePage.css'
import Hovanes from './Hovanes.jpg'
import Egishe from './Egishe.jpg'
import Sevak from './Sevak.jpg'
import { useState } from 'react'

export default function HomePage() {
    const [tr1, setTr1] = useState(false)
    const [tr2, setTr2] = useState(false)
    const [tr3, setTr3] = useState(false)

    const Imgpack = [
        {
            id: 1,
            nkar: Hovanes,
            alt: 'Hovanes',
            active: tr1,
            href: 'https://hy.wikipedia.org/wiki/%D5%80%D5%B8%D5%BE%D5%B0%D5%A1%D5%B6%D5%B6%D5%A5%D5%BD_%D4%B9%D5%B8%D6%82%D5%B4%D5%A1%D5%B6%D5%B5%D5%A1%D5%B6',
            title: "Hovanes Tumanyan",
            onClick: () => setTr1((e) => !e)
        },
        {
            id: 2,
            nkar: Egishe,
            alt: 'Egishe',
            active: tr2,
            href: 'https://hy.wikipedia.org/wiki/%D4%B5%D5%B2%D5%AB%D5%B7%D5%A5_%D5%89%D5%A1%D6%80%D5%A5%D5%B6%D6%81',
            title: "Egishe Charenc",
            onClick: () => setTr2((e) => !e)
        },
        {
            id: 3,
            nkar: Sevak,
            alt: 'Sevak',
            active: tr3,
            href: 'https://hy.wikipedia.org/wiki/%D5%8A%D5%A1%D6%80%D5%B8%D6%82%D5%B5%D6%80_%D5%8D%D6%87%D5%A1%D5%AF',
            title: "Paruyr Sevak",
            onClick: () => setTr3((e) => !e)
        }
    ]

    return (
        <div className='box'>
            {Imgpack?.map(e => (
                <div className='img-box'>
                    <img src={e?.nkar} alt={e?.alt} onClick={e?.onClick} />
                    {e?.active && <a href={e?.href}>{e?.title}</a>}
                </div>
            ))}
        </div>
        // <div className='box'>
        //     <div className='img-box'>
        //         <img src={Hovanes} alt='Hovanes' onClick={() => setTr1((e)=>!e)}/>
        //         { tr1 ? <a href='https://hy.wikipedia.org/wiki/%D5%80%D5%B8%D5%BE%D5%B0%D5%A1%D5%B6%D5%B6%D5%A5%D5%BD_%D4%B9%D5%B8%D6%82%D5%B4%D5%A1%D5%B6%D5%B5%D5%A1%D5%B6'>Hovanes Tumanyan</a> : null }
        //     </div>
        //     <div className='img-box'>
        //         <img src={Egishe} alt='Egishe' onClick={() => setTr2(!tr2)}/>
        //         { tr2 ? <a href='https://hy.wikipedia.org/wiki/%D4%B5%D5%B2%D5%AB%D5%B7%D5%A5_%D5%89%D5%A1%D6%80%D5%A5%D5%B6%D6%81'>Egishe Charenc</a> : null }
        //     </div>
        //     <div className='img-box'>
        //         <img src={Sevak} alt='Sevak' onClick={() => setTr3(!tr3)}/>
        //         { tr3 ? <a href='https://hy.wikipedia.org/wiki/%D5%8A%D5%A1%D6%80%D5%B8%D6%82%D5%B5%D6%80_%D5%8D%D6%87%D5%A1%D5%AF'>Paruyr Sevak</a> : null }
        //     </div>
        // </div>
    )
}