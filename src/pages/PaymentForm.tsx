
import React from 'react';
import styles from '../styles/PaymentForm.module.css';
import Navbar from '@/components/Navbar';
import Footer from "@/components/Footer";
const PaymentForm = () => {
return (
      <>
      <Navbar/>
<div className={styles.container}>
{/* Payment Method Section */}
<div className={styles.section}>
<h3 className={styles.sectionTitle}>Payment Method</h3>
<p className={styles.sectionDescription}>Please enter your payment method</p>


<div className={styles.paymentOptions}>
<label className={styles.radio}>
<input type="radio" name="payment" />
<span>Credit Card</span>
<div className={styles.cardIcons}>
  <img src="/visa.png" alt="Visa" />
  <img src="https://www.logo.wine/a/logo/Mastercard/Mastercard-Logo.wine.svg" alt="MasterCard" />
</div>
</label>
<div className={styles.cardDetails}>
<input type="text" placeholder="Card number" />
<input type="text" placeholder="Expiration Date (DD/MM/YY)" />
<input type="text" placeholder="Card holder" />
<input type="text" placeholder="CVC" />
</div>
<label className={styles.radio}>   
      <img src="paypal.png" alt="PayPal" style={{ width: '50px', height: '50px' }}  />
</label>
<label className={styles.radio}>
<input type="radio" name="payment" />




</label>


<label className={styles.radio}>   
      <img src="bitcoin-icon-png-42930.png" alt="Bitcoin" style={{  height: '14px' }}   />
</label>
<label className={styles.radio}>
<input type="radio" name="payment" />




</label>

</div>
</div>

{/* Confirmation Section */}
<div className={styles.section}>
<h3 className={styles.sectionTitle}>Confirmation</h3>
<p className={styles.sectionDescription}>
We are getting to the end. Just a few clicks and your rental is ready!
</p>
<div className={styles.checkboxes}>
<label className={styles.checkboxLabel}>
<input type="checkbox" />
I agree with sending Marketing and newsletter emails. No spam, promised!
</label>
<label className={styles.checkboxLabel}>
<input type="checkbox" />
I agree with our terms and conditions and privacy policy.
</label>
</div>
<button className={styles.rentButton}>Rent Now</button>
<div className={styles.security}>
<span>🔒</span>
<p>
All your data are safe. We use the most advanced security to provide you the best
experience ever.
</p>
</div>
</div>
</div>
<Footer/>
</>
);
};

export default PaymentForm;
