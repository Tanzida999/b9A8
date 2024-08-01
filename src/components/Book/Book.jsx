
import { CiStar } from "react-icons/ci";
import { IoIosStarOutline } from "react-icons/io";
import { Link } from "react-router-dom";


const Book = ({book}) => {
    const {bookId,bookName,image,category,rating,author,tags} = book;
    return (

            <div className="card flex">
<div className="flex ml-8">
<figure className="justify-start flex-shrink-0 ml-8">
   <Link to={`/book/${bookId}`}> <img
      src={image}
      alt="Books" /></Link>
  </figure>
</div>
  <div className="card-body flex flex-col justify-between ml-4">

  <button className="">{tags}</button>
</div>

    <h2 className="card-title">Book Name:{bookName}</h2> 
    <p>By:{author}</p>
    <div className="flex">
    <p>{category}</p>
    <p className="flex gap-2">{rating}<IoIosStarOutline></IoIosStarOutline></p>

  </div>
</div>
  
    );
};

export default Book;