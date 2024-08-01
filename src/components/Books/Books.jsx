import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(()=>{
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])

    return (
    <div className="text-center ">
        <h2 className="text-5xl">Books</h2>
            <div className="text-center grid grid-cols-3 max-w-5xl mx-auto">
             
            {
                books.map(book => <Book key={book.bookId} book={book}></Book> )
            }          
        </div>
        </div>
    );
};

export default Books;