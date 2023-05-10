import React, { useState } from 'react';
import './Jokes.css'

export default function JokesPage() {
    const [obj, setObj] = useState([])

    const fatch = async () => {
        try {
            const res = await fetch(
                `https://api.chucknorris.io/jokes/random`
            );
            const req = await res.json();
            setObj((a) => a = [...a, req.value])
            if (obj.length > 9) {
                obj.shift()
            }
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className='joke'>
            <button onClick={fatch} className='but'>OK</button>
            {obj.map((e, i) => (
                <div key={i} className='joked'>{e}</div>
            ))}
        </div>
    )
}