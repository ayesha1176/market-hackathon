import Head from "next/head";
import styles from '../styles/index.module.css'
import Navbar from "@/components/Navbar";
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
    <><Navbar/> 
  
      <Head>
        <title>Rental Service</title>
      </Head>
      <main className={styles.container}>
        {/* Rental Summary */}
       
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Rental Summary</h2>
          <p className={styles.description}>
            Prices may change depending on the length of the rental and the price of your rental car.
          </p>
          <div className={styles.rentalCard}>
            <img
              src="car.png"
              alt="Nissan GT"
              className={styles.carImage}
            />
            <div>
              <h3 className={styles.carTitle}>Nissan GT - R</h3>
              <p className={styles.reviewer}>⭐ 440+ Reviewer</p>
            </div>
          </div>
          <p className={styles.priceRow}>
            <span>Subtotal:</span>
            <span>$80.00</span>
          </p>
          <p className={styles.priceRow}>
            <span>Tax:</span>
            <span>$0</span>
          </p>
          <div className={styles.promoCode}>
            <input
              type="text"
              placeholder="Apply promo code"
              className={styles.promoInput}
            />
            <button className={styles.promoButton}>Apply now</button>
          </div>
          <h3 className={styles.totalPrice}>
            Total Rental Price: <span className={styles.totalPriceValue}>$80.00</span>
          </h3>
        </div>

        {/* Billing Info */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Billing Info</h2>
          <p className={styles.step}></p>
          <form className={styles.formContainer}>
            <label className={styles.formLabel}>
              Name:
              <input
                type="text"
                placeholder="Your name"
                className={styles.formInput}
              />
            </label>
            <label className={styles.formLabel}>
              Phone Number:
              <input
                type="text"
                placeholder="Phone number"
                className={styles.formInput}
              />
            </label>
            <label className={styles.formLabel}>
              Address:
              <input
                type="text"
                placeholder="Address"
                className={styles.formInput}
              />
            </label>
            <label className={styles.formLabel}>
              Town / City:
              <input
                type="text"
                placeholder="Town or city"
                className={styles.formInput}
              />
            </label>
          </form>
        </div>

        {/* Rental Info */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Rental Info</h2>
          <p className={styles.step}></p>
          <form className={styles.formContainer}>
            <h3>Pick-Up</h3>
            <label className={styles.formLabel}>
              Locations:
              <select className={styles.formSelect}>
                <option>Select your city</option>
              </select>
            </label>
            <label className={styles.formLabel}>
              Date:
              <input type="date" className={styles.formInput} />
            </label>
            <label className={styles.formLabel}>
              Time:
              <select className={styles.formSelect}>
                <option>Select your time</option>
              </select>
            </label>
            <h3>Drop-Off</h3>
            <label className={styles.formLabel}>
              Locations:
              <select className={styles.formSelect}>
                <option>Select your city</option>
              </select>
            </label>
            <label className={styles.formLabel}>
              Date:
              <input type="date" className={styles.formInput} />
            </label>
            <label className={styles.formLabel}>
              Time:
              <select className={styles.formSelect}>
                <option>Select your time</option>
              </select>
            </label>
          </form>
        </div>
      
    <Footer/>
  
    
      </main>
      </>
    </>
   


  );
}
