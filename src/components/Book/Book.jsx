
import { CiStar } from "react-icons/ci";
import { IoIosStarOutline } from "react-icons/io";


const Book = ({book}) => {
    const {bookName,image,category,rating,author,tags} = book;
    return (
        <div className="flex flex-row-3">
            <div className="card bg-base-100 w-96">
  <figure>
    <img
      src={image}
      alt="Books" />
  </figure>
  <div className="card-body">
  <div className="">
  <button className="">{tags}</button>
</div>

    <h2 className="card-title">Book Name:{bookName}</h2> 
    <p>By:{author}</p>
    <div className="flex">
    <p>{category}</p>
    <p className="flex gap-2">{rating}<IoIosStarOutline></IoIosStarOutline></p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Book;