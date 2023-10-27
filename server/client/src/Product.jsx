import "./Product.css";
import { Link } from "react-router-dom";

const Product = ({
  _id,
  title,
  thumbnail,
  price,
  discountPercentage,
  rating,
  handleClick,
}) => {
  return (
    <>
      <div className="  container mt-5">
        <div className="row">
          <div className="col-md-3">
            <div className=" card">
              <div className="image-container">
                <div className="first">
                  <div className="flex justify-between align-middle">
                    <span className="discount">-{discountPercentage}%</span>
                    <span className="wishlist">
                      <i
                        className="fa fa-heart-o"
                        aria-hidden="true"
                        onClick={() => handleClick(_id)}
                      />
                    </span>
                  </div>
                </div>
                <img
                  src={thumbnail}
                  className="img-fluid rounded thumbnail-image"
                  alt={title}
                />
              </div>
              <div className="product-detail-container p-2">
                <div className="flex justify-between align-center">
                  <h5 className="dress-name font-semibold">{title}</h5>
                  <div className="d-flex flex-column mb-2 text-sm">
                    <span className="new-price">
                      $ {Math.round(price - (discountPercentage * price) / 100)}
                    </span>
                    <br />
                    <span className="old-price text-right line-through text-sm">
                      $ {price}
                    </span>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center pt-1">
                  <div>
                    <i className="fa fa-star-o rating-star" />
                    <span className="rating-number">{rating}</span>
                  </div>
                  <span className="buy">BUY +</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
