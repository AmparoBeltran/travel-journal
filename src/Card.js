import React from "react"

export default function Card(props) {
    return (
        <div className="card-container">
            <img src={props.item.imageUrl} alt={props.item.title} className="card-img" />
            <div className="card-information">
                <div>
                    <div className="location-container">
                        <div className="location">
                            <img src="./images/location-icon.png" alt="location-pointer" className="location-icon" />
                            <p>{props.item.location}</p>
                        </div>
                        <a href={props.item.googleMapsUrl} className="google-link">View on Google Maps</a>
                    </div>
                    <h3>{props.item.title}</h3>
                </div>
                <div className="description-container">
                    <p className="dates">{props.item.startDate} - {props.item.endDate}</p>
                    <p className="description">{props.item.description}</p>
                </div>
            </div>

        </div>
    )
}