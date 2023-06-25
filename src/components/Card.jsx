import locationIcon from '../assets/location.svg'

export default function Card({title, description, img, date, location}) {
    return (
        <>
            <article className="card">
                <img src={img} alt="" className="card-img"/>
                <div className="card-content">
                    <div>
                        <img src={locationIcon} alt="location icon" />
                        <p className="location">{location}</p>
                        <a href="#" className="link">View on google map</a>
                    </div>
                    <h1>{title}</h1>
                    <p className="date">{date.to} - {date.from}</p>
                    <p className="description">
                        {description}
                    </p>
                </div>
            </article>
        </>
    )
}