import React from "react";

export default function Card() {
    return (
        <div className="card">
            <img className="card--img" src="https://source.unsplash.com/WLxQvbMyfas" alt="pic"/>
            <div className="card-intro">
                <div className="card--location">
                    <p className="card--location--city">📌 JAPAN</p>
                    <a className="card--location--map" href="https://goo.gl/maps/1DGM5WrWnATgkSNB8">View on Google Map </a>
                </div>
                <h2 className="card--title">Mount</h2>
                <p className="card--time">date</p>
                <p className="card--body">Mount</p>
            </div>
        </div>

    )
}