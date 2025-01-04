import Navbar from '@/components/Navbar';
import styles from '../styles/Content.module.css'
import Footer from "@/components/Footer";




export default function Content() {
  return (
    <>
    <Navbar/>
    <div className={styles.container}>
      {/* Rental Summary Section */}
      
      <div className={styles.rentalSummary}>
        <h2>Rental Summary</h2>
        <p>
          Prices may change depending on the length of the rental and the price
          of your rental car.
        </p>
        <div className={styles.carDetails}>
          <img
            src="car.png"
            alt="Car"
            className={styles.carImage}
          />
          <div>
            <h3>Nissan GT - R</h3>
            <p>⭐ 440+ Reviews</p>
          </div>
        </div>
        <div className={styles.priceDetails}>
          <p>Subtotal</p>
          <p>$80.00</p>
        </div>
        <div className={styles.priceDetails}>
          <p>Tax</p>
          <p>$0</p>
        </div>
        <div className={styles.promoCode}>
          <input type="text" placeholder="Apply promo code" />
          <button>Apply now</button>
        </div>
        <div className={styles.totalPrice}>
          <p>Total Rental Price</p>
          <h3>$80.00</h3>
          <p>Overall price and includes rental discount</p>
        </div>
      </div>

      {/* Billing Info Section */}
      <div className={styles.billingInfo}>
        <h2>Billing Info</h2>
        <p>Please enter your billing info</p>
        <div className={styles.formRow}>
          <div className={styles.myClass}>
            <label>Name</label>
            <input type="text" placeholder="Your name" />
          </div>
          <div className={styles.myClass} >
            <label>Phone Number</label>
            <input type="text" placeholder="Phone number" />
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.myClass} >
            <label>Address</label>
            <input type="text" placeholder="Address" />
          </div>
          <div className={styles.myClass} >
            <label>Town / City</label>
            <input type="text" placeholder="Town or city" />
          </div>
       </div>
  
       </div>




      {/* hello */}





      <div className={styles.billingInfo}>
        <h2>Rental Info</h2>
        <p>Please select your rental date</p>
      
        
        
  
        <div className={styles.formRow}>
          <div  className={styles.myClass}>
            <label>Locations</label>
            <input type="text" placeholder="Your name" />
          </div>
          <div className={styles.myClass} >
            <label>Date</label>
            <input type="text" placeholder="Phone number" />
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.myClass} >
            <label>Time</label>
            <input type="text" placeholder="Address" />
          </div>
          <div className={styles.myClass} >
            <label>Town / City</label>
            <input type="text" placeholder="Town or city" />
          </div>
       </div>
  
       </div>
 
    </div>
    <Footer/>
    </>

  );
}
