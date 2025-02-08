import React from "react";
import styles from "../styles/Catalogue.module.css"; // Link to your CSS module
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCards from "./products/page";

const Catalogue = () => {
  return (
    <>
      {/* Navbar outside the container */}
      <Navbar />
      < ProductCards/>
      {/* Main Content */}
      <div className={styles.container}>
        {/* Card 1 */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h2>CR - V</h2>
           
            <div className={styles.favorite}>❤️</div>
          </div>
          <img src="car.png" alt="Car" className={styles.cardImage} />
          <div className={styles.cardDetails}>
            <div className={styles.specs}>
              <p>80L</p>
              <p>Manual</p>
              <p>6 People</p>
            </div>
            <div className={styles.price}>
              <h3>$80.00/day</h3>
              <button className={styles.rentButton}>Rent Now</button>
            </div>
          </div>
        </div>

        {/* Add other cards here */}

        {/* Card 2 */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h2>Model X</h2>
           
            <div className={styles.favorite}>❤️</div>
          </div>
          <img src="https://imgcdn.oto.com/large/gallery/color/133/2222/tesla-model-x-color-996384.jpg" alt="Car" className={styles.cardImage} />
          <div className={styles.cardDetails}>
            <div className={styles.specs}>
              <p>100L</p>
              <p>Automatic</p>
              <p>5 People</p>
            </div>
            <div className={styles.price}>
              <h3>$100.00/day</h3>
              <button className={styles.rentButton}>Rent Now</button>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h2>Toyota Fortuner</h2>
            
            <div className={styles.favorite}>❤️</div>
          </div>
          <img src="https://cache4.pakwheels.com/system/car_generation_pictures/7335/original/Fortuner_-_PNG.png?1677568997" alt="Car" className={styles.cardImage} />
          <div className={styles.cardDetails}>
            <div className={styles.specs}>
              <p>100L</p>
              <p>Manual</p>
              <p>6 People</p>
            </div>
            <div className={styles.price}>
              <h3>$80.00/day</h3>
              <button className={styles.rentButton}>Rent Now</button>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h2>Honda BR-V</h2>
          
            <div className={styles.favorite}>❤️</div>
          </div>
          <img src="https://newpakistanmotors.com/wp-content/uploads/2020/06/Honda-BRV.jpg.webp" alt="Car" className={styles.cardImage} />
          <div className={styles.cardDetails}>
            <div className={styles.specs}>
              <p>100L</p>
              <p>Manual</p>
              <p>5 People</p>
            </div>
            <div className={styles.price}>
              <h3>$100.00/day</h3>
              <button className={styles.rentButton}>Rent Now</button>
            </div>
          </div>
        </div>

        {/* Card 5*/}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h2>Hyundai Santa Fe</h2>
           
            <div className={styles.favorite}>❤️</div>
          </div>
          <img src="https://s7d1.scene7.com/is/image/hyundai/2023-santa-fe-se-stormy-sea-centered-browse-hero:Browse?fmt=webp-alpha" alt="Car" className={styles.cardImage} />
          <div className={styles.cardDetails}>
            <div className={styles.specs}>
              <p>100L</p>
              <p>Automatic</p>
              <p>5 People</p>
            </div>
            <div className={styles.price}>
              <h3>$100.00/day</h3>
              <button className={styles.rentButton}>Rent Now</button>
            </div>
          </div>
        </div>

        {/* Card 6 */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h2>Nissan X-Trail</h2>
           
            <div className={styles.favorite}>❤️</div>
          </div>
          <img src="https://images.netdirector.co.uk/gforces-auto/image/upload/w_377,h_251,q_auto,c_fill,f_auto,fl_lossy/auto-client/8dd6d4fd462a6e7e506518366267204b/x_trail_configurator_image_n_connecta.png" alt="Car" className={styles.cardImage} />
          <div className={styles.cardDetails}>
            <div className={styles.specs}>
              <p>100L</p>
              <p>Automatic</p>
              <p>5 People</p>
            </div>
            <div className={styles.price}>
              <h3>$100.00/day</h3>
              <button className={styles.rentButton}>Rent Now</button>
            </div>
          </div>
        </div>

        {/* Card 7 */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h2>Kia Sorento</h2>
            
            <div className={styles.favorite}>❤️</div>
          </div>
          <img src="https://di-uploads-pod9.dealerinspire.com/capitolkia/uploads/2022/01/2022-kia-sorento-sapphire-blue.jpg" alt="Car" className={styles.cardImage} />
          <div className={styles.cardDetails}>
            <div className={styles.specs}>
              <p>100L</p>
              <p>Automatic</p>
              <p>5 People</p>
            </div>
            <div className={styles.price}>
              <h3>$100.00/day</h3>
              <button className={styles.rentButton}>Rent Now</button>
            </div>
          </div>
        </div>

        {/* Card 8 */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h2>Mitsubishi Pajero</h2>
        
            <div className={styles.favorite}>❤️</div>
          </div>
          <img src="https://fleet.com.pl/images/1140x760/filemanager/photos/uploads/posts/7377/newsy2011_mitsubishi_pajero_mont_blanc.jpg" alt="Car" className={styles.cardImage} />
          <div className={styles.cardDetails}>
            <div className={styles.specs}>
              <p>100L</p>
              <p>Automatic</p>
              <p>5 People</p>
            </div>
            <div className={styles.price}>
              <h3>$100.00/day</h3>
              <button className={styles.rentButton}>Rent Now</button>
            </div>
          </div>
        </div>

        {/* Card 9 */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h2>Ford Everest</h2>
          
            <div className={styles.favorite}>❤️</div>
          </div>
          <img src="https://fordjorcharoen.com/wp-content/uploads/2023/03/Screenshot__248_-removebg-preview-1.png" alt="Car" className={styles.cardImage} />
          <div className={styles.cardDetails}>
            <div className={styles.specs}>
              <p>100L</p>
              <p>Automatic</p>
              <p>5 People</p>
            </div>
            <div className={styles.price}>
              <h3>$100.00/day</h3>
              <button className={styles.rentButton}>Rent Now</button>
            </div>
          </div>
        </div>

        {/* Card 10 */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h2>Chevrolet Captiva</h2>
         
            <div className={styles.favorite}>❤️</div>
          </div>
          <img src="https://imgcdn.oto.com/large/gallery/color/5/1360/chevrolet-captiva-color-399453.jpg" alt="Car" className={styles.cardImage} />
          <div className={styles.cardDetails}>
            <div className={styles.specs}>
              <p>100L</p>
              <p>Automatic</p>
              <p>5 People</p>
            </div>
            <div className={styles.price}>
              <h3>$100.00/day</h3>
              <button className={styles.rentButton}>Rent Now</button>
            </div>
          </div>
        </div>

        {/* Card 11*/}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h2>Mazda CX-8</h2>
            
            <div className={styles.favorite}>❤️</div>
          </div>
          <img src="https://rental.timescar.jp/price/items/O1235.jpg" alt="Car" className={styles.cardImage} />
          <div className={styles.cardDetails}>
            <div className={styles.specs}>
              <p>100L</p>
              <p>Automatic</p>
              <p>5 People</p>
            </div>
            <div className={styles.price}>
              <h3>$100.00/day</h3>
              <button className={styles.rentButton}>Rent Now</button>
            </div>
          </div>
        </div>

        {/* Card 12*/}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h2>Jeep Compass</h2>
          
            <div className={styles.favorite}>❤️</div>
          </div>
          <img src="https://di-uploads-pod11.dealerinspire.com/raylaethemchryslerdodgejeep/uploads/2017/09/2018-Jeep-Compass-Hero.png" alt="Car" className={styles.cardImage} />
          <div className={styles.cardDetails}>
            <div className={styles.specs}>
              <p>100L</p>
              <p>Automatic</p>
              <p>5 People</p>
            </div>
            <div className={styles.price}>
              <h3>$100.00/day</h3>
              <button className={styles.rentButton}>Rent Now</button>
            </div>
          </div>
        </div>

        {/* Example: Copy & paste other card components */}
        
      </div>
      <Footer/>
    </>
  );
};

export default Catalogue;
