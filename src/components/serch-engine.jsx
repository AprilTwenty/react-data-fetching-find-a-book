import { useState, useEffect } from "react";
import axios from "axios";

function SearchBook() {
    const [bookName, setBookName] = useState("react.js");
    const [bookList, setBookList] = useState([])
    const bookListtest = ["a","b","c","d"];

    useEffect(() => {
        handleChange()
    }, [bookName])
    async function handleChange() {

        const findBook = "https://www.googleapis.com/books/v1/volumes?q="+bookName;
        const result = await axios.get(findBook);
        console.log(result);
        setBookList(result.data.items)
    }

return (

    <div className="searchBox">
        <h1>Find a book</h1>
        <div className="searchInputBox">
            <input className="inputBox" value={bookName} onChange={(event) => {setBookName(event.target.value)}}></input>
        </div>
        <div className="displayBoookList">
            <ul>
            {
                bookList.map((item, index) => (
                    <li key={index}>{item.volumeInfo.title}</li>
                ))
            }
            
            </ul>
        
        </div>

    </div>

)
}

export default SearchBook;