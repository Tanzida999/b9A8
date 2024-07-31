

const Book = ({book}) => {
    const {bookName} = book;
    return (
        <div>
            <h2>Book Name:{bookName}</h2>
        </div>
    );
};

export default Book;