import { useState, useEffect } from "react";
import axios from "axios";

function SearchBook() {
    const [bookName, setBookName] = useState("");
    const [bookList, setBookList] = useState([])


    useEffect(() => {
        if (bookName) {
            handleChange(bookName);
        }
    }, [bookName]);

    async function handleChange(bookName) {
        try {
            const findBook = "https://www.googleapis.com/books/v1/volumes?q="+bookName;
            const result = await axios.get(findBook);
            console.log(result);
            setBookList(result.data.items);
        } catch (error) {
            console.log("Error fecthing  data",error);
        }
    }

return (
    <div className="searchBox">
        <h1>Find a book</h1>
        <div className="searchInputBox">
            <input className="inputBox" value={bookName} onChange={(event) => {setBookName(event.target.value)}}></input>
        </div>
        <div className="displayBoookList">
            <ul>
            {bookList.length > 0 ? (
                <>
                {
                    bookList.map((item, index) => (
                        <li key={index}>{item.volumeInfo.title}</li>
                    ))
                }
                </>
            ) : (<li>No books found</li>)
            }
            
            </ul>
        
        </div>

    </div>

)
}

export default SearchBook;