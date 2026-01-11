import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import titan1 from "./assets/titan1.webp";
import titan2 from "./assets/titan2.webp";
import titan3 from "./assets/titan3.webp";
import titan4 from "./assets/titan4.webp";
import titan5 from "./assets/titan5.webp";
import titan6 from "./assets/titan6.webp";
import fastTrack1 from "./assets/fastTrack1.webp";
import fastTrack2 from "./assets/fastTrack2.webp";
import fastTrack3 from "./assets/fastTrack3.webp";
import fastTrack4 from "./assets/fastTrack4.webp";
import fastTrack5 from "./assets/fastTrack5.webp";
import fastTrack6 from "./assets/fastTrack6.webp";
import rolex1 from "./assets/rolex1.webp";
import rolex2 from "./assets/rolex2.webp";
import rolex3 from "./assets/rolex3.webp";
import rolex4 from "./assets/rolex4.webp";
import rolex5 from "./assets/rolex5.webp";
import rolex6 from "./assets/rolex6.webp";

function App() {
   const images = [titan1, titan2, titan3, titan4, titan5, titan6, fastTrack1, fastTrack2, fastTrack3, fastTrack4, fastTrack5, fastTrack6, rolex1, rolex2, rolex3, rolex4, rolex5, rolex6]
   const watchBrands = [
      {
         brand: "Titan",
         watches: [
            {
               id: '1',
               image: titan1,
               name: 'Titan Purple Razzle Dazzle Dial Stainless Steel Watch',
               price: 5595
            },
            {
               id: '2',
               image: titan2,
               name: 'Neo Splash Quartz Multifunction Black Dial Watch',
               price: 779500 
            },
            {
               id: '3',
               image: titan3,
               name: 'Titan Crest 2.0',
               price: 6000
            },
            {
               id: '4',
               image: titan4,
               name: 'Titan Np1774bm01 Karishma Analog Watch',
               price: 389500
            },
            {
               id: '5',
               image: titan5,
               name: 'Light Leathers Multifunction Analog With Silver Dial Watch ',
               price: 14585
            },
            {
               id: '6',
               image: titan6,
               name: 'Titan Edge Brown Dial Analog with Date Leather Strap watch',
               price: 7995
            },
         ],
      },
      {
         brand: "FastTrack",
         watches: [
            {
               id: '7',
               image: fastTrack1,
               name: 'Fastrack Astor FR2 Pro Smart Watch',
               price: 2799
            },
            {
               id: '8',
               image: fastTrack2,
               name: 'Fastrack Jupiter FS1 Pro Smartwatch',
               price: 2099
            },
            {
               id: '9',
               image: fastTrack3,
               name: 'Fastrack Gambit Micromotor Black Dial Blue Metal Strap Analog Watch ',
               price: 799500
            },
            {
               id: '10',
               image: fastTrack4,
               name: 'Fastrack Stunners White Dial Silver Metal Strap Analog Watch',
               price: 1494
            },
            {
               id: '11',
               image: fastTrack5,
               name: ' Fastrack Vyb Minimalist Quartz Analog Rose Gold Dial Metal Strap Watch',
               price: 1700
            },
            {
               id: '12',
               image: fastTrack6,
               name: 'Chronograph Fastrack Watch ',
               price: 2500
            },
         ]
      },
      {
         brand: "Rolex",
         watches: [
            {
               id: '13',
               image: rolex1,
               name: 'Rolex Cosmograph Daytona Platinum Baguette',
               price: 10556935
            },
            {
               id: '14',
               image: rolex2,
               name: 'Rolex Datejust Stainless Steel Watch',
               price: 739019
            },
            {
               id: '15',
               image: rolex3,
               name: 'Rolex Women Datejust Fluted Bezel Watch',
               price: 1889854
            },
            {
               id: '16',
               image: rolex4,
               name: 'Ladies Rolex Steel and Everose Gold Datejust 31 Watch ',
               price: 4986284
            },
            {
               id: '17',
               image: rolex5,
               name: ' Rolex Datejust 31 Dial Ladies Watch',
               price: 1439782
            },
            {
               id: '18',
               image: rolex6,
               name: 'Rolex Men Cosmograph Daytona Oysterflex Watch ',
               price: 7061120
            },
         ]
      },
   ];
   
   const [cart, setCart] = useState([]);
   const [showConfirm , setShowConfirm]=useState(false);
const addToCart = (product) => {
  const existing = cart.find(item => item.id === product.id);

  if (existing) {
    setCart(
      cart.map(item =>
        item.id === product.id
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    );
  } else {
    setCart([...cart, { ...product, qty: 1 }]);
  }
};
const increaseQty = (id) => {
    setCart(
      cart.map(item =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

 
  const decreaseQty = (id) => {
    setCart(
      cart
        .map(item =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter(item => item.qty > 0)
    );
  };

 
  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );
   return (
      <>
        

         <div className="container my-4 ">
            <div className='product row '>
               <div className='col-lg-8'>
               {watchBrands.map((brandItem) => (
                  <div key={brandItem.brand} className="mb-5">
                     <h2 className=" brand-name mb-4">{brandItem.brand}</h2>

                     <div className="row gy-5 gx-1">
                        {brandItem.watches.map((watch) => (
                           <div key={watch.id} className="col-lg-4 col-md-4 col-sm-6">
                              <div className="product-card h-100 shadow">
                                 <img
                                    src={watch.image}
                                    alt={watch.name}
                                    className="product-img" />

                                 <div className="product-con mt-2">
                                    <h5 className="name">{watch.name}</h5>
                                    <h5 className="price">₹{watch.price.toLocaleString()}</h5>
                                    <button onClick={()=>addToCart(watch)} className="mt-3">Add to Cart</button>
                                 </div>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               ))}
               </div>
               <div className=' col-lg-3 col-md-5 col-sm-12 mt-4'>
                  <h5>Your Cart</h5>

                  <div className="cart ">
                     {cart.length === 0 && ( 
                        <div className='empty-cart d-flex flex-column align-items-center'> 
                           <img src='../src/assets/emptycart.png'></img>
                           <p>Cart is empty</p>  

                        </div>
                        )}
                     {cart.map(item => (
                        <div key={item.id} className="cart-item  border p-2 mb-2">
                           <div className='d-flex justify-content-end'><button className="remove" onClick={() => removeItem(item.id)}>
                                 ✕
                              </button>
                           </div>
                           <div className="d-flex align-items-center gap-3 ">
                              <img src={item.image} alt="" className="cart-img" />
                                 <h5 className='cart-price m-0'>₹{(item.price * item.qty).toLocaleString()}</h5>
                             
                           </div>
               
                           <p className='mt-2 '>{item.name}</p>
                           <div className="qty d-flex align-items-center ">
                                    <button className="btn btn-sm btn-outline-secondary" onClick={() => decreaseQty(item.id)}>-</button>
                                    <span className='mx-2'>{item.qty}</span>
                                    <button className="btn btn-sm btn-outline-secondary" onClick={() => increaseQty(item.id)}>+</button>
                           </div>

                           </div>
                     
                     ))}

                     {cart.length > 0 && (
                        <div className="total">
                           <h6 className='mt-3'>Total: ₹{(total).toLocaleString()}</h6>
                           <button className="confirm mt-5 rounded-pill" onClick={()=>setShowConfirm(true)}>Confirm Order</button>
                        </div>
                     )}
                  </div>
               </div>
            </div>
         </div>
      
      {showConfirm && (
         <div className='overlay'>
            <div className='confirm-card'>
               <img src="../src/assets/confirm.png" alt=""  className='h-25 w-25 mb-3'/>
               <h4> Your Order is Confirmed!</h4>
               <p>Thank you for your purchase</p>
               <button className='done mt-5 rounded-pill' onClick={()=>{setShowConfirm(false);}}>Done</button>
            </div>
         </div>
      )}
   

      </>
   )

}
export default App