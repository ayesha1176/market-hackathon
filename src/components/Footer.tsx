import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* About Section */}
        <div className={styles.section}>
          <h3>About Us</h3>
          <p>
            We provide top-quality rental services, ensuring a smooth and convenient experience for our customers.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className={styles.section}>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/Catalogue">Cart</a></li>
            <li><a href="/Content">Order</a></li>
            <li><a href="/PaymentForm">Payment</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className={styles.section}>
          <h3>Contact Us</h3>
          <p>Email: <a href="mailto:support@example.com">support@example.com</a></p>
          <p>Phone: +1 234 567 890</p>
          <div className={styles.socials}>
            <a href="#facebook">Facebook</a>
            <a href="#twitter">Twitter</a>
            <a href="#instagram">Instagram</a>
          </div>
        </div>
      </div>
      <div className={styles.bottomBar}>
        &copy; {new Date().getFullYear()} Rental Service. All Rights Reserved.
      </div>
    </footer>
  );
}





