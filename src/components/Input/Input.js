import React from "react";
import { useController } from 'react-hook-form';
import './Input.css'

const Input = ({control,name,type,placeholder}) => {
    const {field} = useController({
        name,
        control
    })

    return (
        <div>
            <input className="inp" {...field} type={type} placeholder={placeholder} required={true} />
        </div>
    )
}

export default Input


// react-hook-form-ic kancum enq useController voric kancum enq field y ayn poxarinum e register in 
// vorin talis enq object props name, control
// useForm -ic kanchum enq controll vory poxancum enq mer props controlin
// control y verahskum e amen name in onSubmit i jamanak handlesubmity onSubmit function in e poxancum mer datan 
// vorum name nery linelu e vorpes key er kam balaniner isk arjeqnery input i arjeqnery 