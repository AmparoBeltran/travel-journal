import React from "react"
import Header from "./Header"
import Card from "./Card"
import './App.css'
import data from "./data"


export default function App() {
    const cards = data.map (item => {
        return (
            <Card
                key={item.id}
                item={item}
            />
        )
    })
    return (
        <div className="app">
            <Header />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}


