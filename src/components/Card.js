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
                <p className="card--time">12 Jan, 2021 - 24 Jan, 2021</p>
                <p className="card--body">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
        </div>

    )
}