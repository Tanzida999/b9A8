import { useLoaderData, useParams } from "react-router-dom";


const BookDetails = () => {
   const books = useLoaderData();
   const {bookId} = useParams();
   const idint = parseInt(bookId)
   const book = books.find((book) => book.bookId === idint)
   console.log(book);
    return (
        <div>
            <h2>Book Details of:</h2>
        </div>
    );
};

export default BookDetails;