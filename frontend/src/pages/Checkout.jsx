import React, { useState } from "react";
import "../styles/checkout.css";
import { useNavigate } from "react-router-dom";

const Checkout = () => {

  const navigate = useNavigate();

  const [orderPlaced, setOrderPlaced] = useState(false);

  const [paymentMethod, setPaymentMethod] = useState("card");

  const handleOrder = () => {

    setOrderPlaced(true);

    setTimeout(() => {

      navigate("/buy-products");

    }, 3000);

  };

  return (

    <div className="checkout-page">

      <div className="checkout-container">

        {/* LEFT SIDE */}
        <div className="checkout-form-section">

          <h1 className="checkout-title">
            Checkout
          </h1>

          <p className="checkout-subtitle">
            Complete your agricultural product purchase
          </p>

          <input
            type="text"
            placeholder="Full Name"
          />

          <input
            type="email"
            placeholder="Email Address"
          />

          <input
            type="text"
            placeholder="Phone Number"
          />

          <input
            type="text"
            placeholder="Shipping Address"
          />

          {/* PAYMENT METHODS */}
          <div className="payment-methods">

            <h3>Select Payment Method</h3>

            <div className="payment-options">

              <button
                className={
                  paymentMethod === "upi"
                    ? "payment-btn active-payment"
                    : "payment-btn"
                }
                onClick={() => setPaymentMethod("upi")}
              >
                📱 UPI
              </button>

              <button
                className={
                  paymentMethod === "gpay"
                    ? "payment-btn active-payment"
                    : "payment-btn"
                }
                onClick={() => setPaymentMethod("gpay")}
              >
                💳 Google Pay
              </button>

              <button
                className={
                  paymentMethod === "card"
                    ? "payment-btn active-payment"
                    : "payment-btn"
                }
                onClick={() => setPaymentMethod("card")}
              >
                💳 Card
              </button>

              <button
                className={
                  paymentMethod === "cod"
                    ? "payment-btn active-payment"
                    : "payment-btn"
                }
                onClick={() => setPaymentMethod("cod")}
              >
                🚚 Cash On Delivery
              </button>

            </div>

          </div>

          {/* CARD PAYMENT */}
          {paymentMethod === "card" && (
            <>
              <div className="payment-row">

                <input
                  type="text"
                  placeholder="Card Number"
                />

                <input
                  type="text"
                  placeholder="CVV"
                />

              </div>

              <div className="payment-row">

                <input
                  type="text"
                  placeholder="Expiry Month"
                />

                <input
                  type="text"
                  placeholder="Expiry Year"
                />

              </div>
            </>
          )}

          {/* UPI PAYMENT */}
          {paymentMethod === "upi" && (

            <input
              type="text"
              placeholder="Enter UPI ID"
            />

          )}

          {/* GOOGLE PAY */}
          {paymentMethod === "gpay" && (

            <input
              type="text"
              placeholder="Enter Google Pay Number"
            />

          )}

          {/* COD MESSAGE */}
          {paymentMethod === "cod" && (

            <div className="cod-box">

              <p>
                🚚 Pay cash at the time of delivery.
              </p>

            </div>

          )}

          <button
            className="place-order-btn"
            onClick={handleOrder}
          >
            Place Order
          </button>

          <button
            className="back-products-btn"
            onClick={() => navigate("/buy-products")}
          >
            ⬅ Back To Products
          </button>

        </div>

        {/* RIGHT SIDE */}
        <div className="checkout-summary">

          <h2>Order Summary</h2>

          <div className="summary-item">
            <span>Products</span>
            <span>₹ 15,000</span>
          </div>

          <div className="summary-item">
            <span>Shipping</span>
            <span>₹ 200</span>
          </div>

          <div className="summary-item">
            <span>GST</span>
            <span>₹ 500</span>
          </div>

          <hr />

          <div className="summary-total">
            <span>Total</span>
            <span>₹ 15,700</span>
          </div>

        </div>

      </div>

      {/* SUCCESS POPUP */}
      {orderPlaced && (

        <div className="success-popup">

          <div className="success-box">

            <h1>
               Order Successful
            </h1>

            <p>
              Your agricultural products order has been placed successfully.
            </p>

            <p>
              Redirecting to products page...
            </p>

          </div>

        </div>

      )}

    </div>

  );

};

export default Checkout;