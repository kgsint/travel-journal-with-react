import Card from "./Card";
import data from "../data"

export default function Main() {
    const cardElements = data.map(item => {
        return (
            <Card 
                key={item.id}
                {...item}
            />
        )
    })
    return (
        <>
            <main>
                <section className="cards-container">
                    {cardElements}
                </section>
            </main>
        </>
    )
}