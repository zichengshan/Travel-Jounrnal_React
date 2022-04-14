import React from "react";
// import data from "../data";

export default function Card(props) {
    console.log(props)
    return (
        <div className="card">
            <img className="card--img" src={props.imageUrl} alt="pic"/>
            <div className="card-intro">
                <div className="card--location">
                    <p className="card--location--city">📌 {props.location}</p>
                    <a className="card--location--map" href={props.googleMapsUrl}>View on Google Map </a>
                </div>
                <h2 className="card--title">{props.title}</h2>
                <p className="card--time">{props.startDate} - {props.endDate}</p>
                <p className="card--body">{props.description}</p>
            </div>
        </div>

    )
}