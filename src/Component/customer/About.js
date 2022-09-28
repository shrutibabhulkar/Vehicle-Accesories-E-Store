import React from "react";

function About() {
  return (
    <div className="container">
      <hr className="mt-2 mb-3" />
      <img
        src="http://static.businessworld.in/article/article_extra_large_image/1565270246_yuDqYp_caraccessories.jpg"
        class="img-responsive m-2"
        style={{ width: "700px", height: "400px" }}
      />
      <p className="mx-auto w-75 p-3 overlay-text">
        <b> Wagon accessories</b> is a automobile parts shopping website that
        helps customers to buy various automobile parts by navigating and
        selecting the required category. Selected products will get added to the
        cart. With the successfully placing the order, shipping status will be
        made available to the user. Admin can manage users, products, delivery
        status, and monitor statistics for daily sales.
      </p>
      <p className="mx-auto w-75 p-3 overlay-text">
        <b>Customer Satisfaction</b> <br />
        Here at Wagon accessories, we know how difficult it can be when
        purchasing online, that's why our company gives maximum priority to
        customer satisfaction. Our highly trained staff is ready to assist you
        with any questions regarding your purchases. You can be assured that our
        customers are our main concern when it comes to consumer happiness. When
        you shop at Our web Site you can shop with great confidence that YOU the
        customer will always be treated with the utmost care and respect. Our
        goal is to provide you with a wonderful experience and keep you coming
        back for your future automobile Accessories purchases.
      </p>
    </div>
  );
}

export default About;
