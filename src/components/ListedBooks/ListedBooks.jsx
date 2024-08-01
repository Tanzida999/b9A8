import { useEffect, useState } from "react";
import Book from "../Book/Book";


const ListedBooks = () => {
    const [books, setBooks] = useState([]);
           useEffect(()=>{

        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])
    return (
        <div>

           <div className="text-center mt-4">
        <h2 className="text-5xl m-4 w-full bg-slate-300">Books</h2>
        <button className="btn btn-primary m-4">Sort by</button>
            <div className="text-center grid  max-w-5xl mx-auto">
             
            {
                books.map(book => <Book key={book.bookId} book={book}></Book> )
            }          
        </div>
        </div>           
        </div>
    );
};

export default ListedBooks;