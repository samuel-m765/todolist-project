
import React, { useEffect, useState } from 'react'

function MyComponents(){
    const [count, setCount]=useState(0)
    const [name, setName]=useState('samuel mbogo')

    useEffect(()=>{
       setTimeout(()=>{
            setCount(count=>count+1)
            setName((name==='samuel mbogo'?'joseph odour':'samuel mbogo'))
        },2000)

        return(()=>{clearTimeout()})
    },[count,name])

    return(
        <>
        <h2> have been clicked {count} times</h2>
        <h1>name: {name}</h1>
        </>
    )
}

export default MyComponents