
import './App.css';
import Banner from './Components/Banner';
import Nav from './Components/Nav';
import Row from './Components/Row';
import requests from './request';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner fetchUrl={requests.fetchNetflixOriginals}/>
      <Row isPoster={true} title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Trending in India" fetchUrl={requests.fetchTrending}/>
      <Row title="Top rated movies" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
