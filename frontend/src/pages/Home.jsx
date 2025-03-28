import MovieCard from "../components/MovieCard"
import {useState} from "react"

function Home(){
    const [searchQuery, setSearchQuery] = useState(""); 
    const movies=[
        {id: 1,title:"John Wick",release_date:"2020"},
        {id: 2,title:"Terminator",release_date:"1999"},
        {id: 3,title:"The Matrix",release_date:"1995"}
    ]

    const handleSearch = () => {

    }
    return (<div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input 
            type="text" 
            placeholder="Searxch for movies... " 
            className="search-input"
            />
            <button type="submit" className="search-button">Search</button>
        </form>
        <div className="movies-grid">
            {movies.map((movie) => (
                <MovieCard movie={movie} id={movie.id}/>
                ))}
        </div>
    </div>
    );

}
export default Home