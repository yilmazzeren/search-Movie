import { useSelector } from "react-redux";
import Navigation from "../components/Navigation/Navigation";


 function SearchResults() {
  
  
 
  const deger = useSelector(state => state.searchReducer)
  return (
    <div>

      <Navigation />
      <h4
        style={{
          margin: "100px 0 0 170px",
          fontSize: "24px",
          fontWeight: "700",
        }}
      >
        Search Results- {deger.name}
      </h4>
     
    </div>
  );
}



export default SearchResults
