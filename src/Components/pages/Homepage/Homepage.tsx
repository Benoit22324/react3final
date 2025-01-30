import "./Homepage.css"

export const Homepage = () => {
    return <>
        <div className="homepage">
            <h1 className="mainTitle">Home Page</h1>
            <p className="text">Welcome to the Final Project of this week of React TS.</p>
            <p className="text">This project use a <span className="lineText">Honkai Star Rail</span> Genshin Impact API.</p>
            <p className="text">Link to his site: <a href="https://genshin.dev" className="weblink">Genshin API's Site</a></p>
        </div>
    </>
}