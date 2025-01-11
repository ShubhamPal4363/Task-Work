import React from 'react';
import CartIcon from "../Assets/white-carticon.png";
import BuyIcon from "../Assets/white-buyicon.png";
import StarIcon from "../Assets/star-icon.png";
import "../Style/style.css";

function Singleproduct() {
  return (
    <section class="text-muted body-font overflow-visible">
    <div class="single-section container px-5 mx-auto d-flex justify-content-center align-items-center">
        <div class="row">
            <div class="col-12 col-md-6 mb-4 mb-lg-0">
                <img alt="ecommerce" className="img-fluid rounded" src="https://dummyimage.com/400x400" style={{objectFit: "cover", objectPosition: "center", maxWidth: "100%", height: "auto"}} />
                <div className='single-btn-product d-flex align-items-center pt-3'>
                    <div className='cart d-flex align-items-center position-relative'>
                        <img src={CartIcon} className='img-fluid position-absolute ps-4' />
                        <button className='text-nowrap'><span className='ps-3'>add to cart</span></button>
                    </div>
                    <div className='buy d-flex align-items-center position-relative'>
                        <img src={BuyIcon} className='img-fluid position-absolute' />
                        <button className='text-nowrap ms-3'><span className='ps-1'>buy now</span></button>
                    </div>
                </div>
            </div>

            <div class="col-12 col-md-6">
                <h2 class="text-muted small mb-2">BRAND NAME</h2>
                <h1 class="text-dark">The Catcher in the Rye</h1>

                <div className='star-rating my-3'>
                    <div className='d-flex align-items-center justify-content-center gap-1 p-2 bg-success rounded w-25'>
                        <h5 className='product-rating'>4.4</h5>
                        <img className='img-fluid' src={StarIcon} alt='Star-Icon' style={{width: '20px'}} />
                    </div>
                </div>

                {/* Price and Buttons (Optional) */}
                <div className=''>
                  <h5 className='product-price-product'>&#8377; 8000 <del className='original-price-product'>&#8377; 10000</del> <span className='discount-product'>12% off</span></h5>
                  <ul className='list-unstyled product-info'>
                    <li>val.warrantyInformation</li>
                    <li>val.shippingInformation</li>
                  </ul>
                </div>

                {/* Product Description */}
                <p class="lead">
                    Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.
                </p>
            </div>
        </div>
    </div>
</section>


  )
}

export default Singleproduct
