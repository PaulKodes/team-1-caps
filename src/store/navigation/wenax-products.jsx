import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState, useEffect } from "react";

function WenaxProducts() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3005/getProduct")
      .then((response) => response.json())
      .then(({ products }) => setProducts(products));
  }, []);
  let aegisItems = products.filter((products) => {
    return products.category === "Wenax";
  });
  console.log(aegisItems);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <h1 className="slider-h1">Wenax</h1>
      <Carousel responsive={responsive}>
      {aegisItems.map((item) => {
        return (
          <div>
                
                <div className="card-body">
                <img className="slider-image" src={item.url} alt="product" variant="top" />
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">
                    <i class="fa-solid fa-star" style={{ color: "orange" }}></i>
                    <i class="fa-solid fa-star" style={{ color: "orange" }}></i>
                    <i class="fa-solid fa-star" style={{ color: "orange" }}></i>
                    <i class="fa-solid fa-star" style={{ color: "orange" }}></i>
                    <i class="fa-solid fa-star" style={{ color: "orange" }}></i>
                    ({item.star})
                  </p>
                  <div className="card-price">
                    <i class="fa-solid fa-peso-sign"></i>
                    {item.price}
                  </div>
                </div>
              
          </div>
        );
      })}
      </Carousel>
    </div>
  );
}
export default WenaxProducts;
