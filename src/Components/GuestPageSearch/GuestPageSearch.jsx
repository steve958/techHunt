import React, { useState } from "react";
import { ctx } from '../ProviderComp/ProviderComp';
import { useContext } from 'react';
import "./GuestPageSearch.scss"
import { Link } from "react-router-dom";

const GuestPageSearch = () => {

    const [searchInput, setsearchInput] = useState("")
    const [cand, setCand] = useState([])
    const value = useContext(ctx);

    const handleChange = (inputValue) => {
        setsearchInput(inputValue)
        setCand((value.candidatesData.filter((e) => {
            console.log(searchInput)
            console.log(e.name.split(" ").includes(searchInput))

            return e.name.includes(searchInput) || e.name.toLowerCase().includes(searchInput)

        })))


    }


    return (
        <>
            <input id="guestpageSearch" onChange={(e) => {
                handleChange(e.target.value)
            }} type="text" name="search" placeholder="search" />
            {cand.map((e) => {
                return <Link to={`candidates/${e.id}`}><div className='candidate-guestpage-wrapperPrima'><div className='candidate-guestpage-wrapper' key={e.id}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Ic_person_48px.svg/240px-Ic_person_48px.svg.png" />
                    <h2 className='candidates-guestpage-ime'>{e.name}</h2>
                    <p>{e.birthday}</p>
                    <p>{e.education}</p>
                    <p>{e.email}</p>
                </div></div></Link>
            })}
        </>
    );
}

export default GuestPageSearch;