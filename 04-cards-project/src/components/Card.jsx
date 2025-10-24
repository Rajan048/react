import React from 'react'

function Card(props) {
    return (

        <div className="card">
            <div className="top">
                <img src={props.img} alt="" />
                <button>save <i className="fa-regular fa-bookmark"></i></button>
            </div>

            <div className="center">
                <h3>{props.company} <span className='text'>{props.day}</span></h3>
                <h2>{props.title}</h2>
                <div className='center-button-div'>
                    <button className='center-button'>{props.spec1}</button>
                    <button className='center-button-2'>{props.spec2}</button>
                </div>
            </div>

            <hr />
            <div className="bottom">
                <div className="bottom-left">
                    <h3>{props.salary}</h3>
                    <p>{props.location}</p>
                </div>
                <button className='bottom-button'>Apply now</button>
            </div>

        </div>



    )
}

export default Card
