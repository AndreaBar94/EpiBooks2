import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
import BookList from "./components/BookList";
import MyFooter from "./components/MyFooter";
// import SingleBook from "./components/SingleBook";

function App() {
	return (
		<>
			<MyNav/>
			<Welcome/>
			<BookList/>
			{/* <SingleBook/> */}
			<MyFooter/> 
		</>
	);
}

export default App;
