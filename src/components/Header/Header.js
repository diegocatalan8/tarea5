import React from 'react'
import "./Header.css";
import { useState, useEffect } from 'react';
// get our fontawesome imports
import { faBagShopping, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [estado, setEstado] = useState(false);
    
    
    let carro = isOpen ? "cart" : "cart-closed";

    let productos = JSON.parse(localStorage.getItem("carrito"));
    console.log(productos);
    


    useEffect(() => {
        
            
            setIsOpen(true);
      

    } , [ isOpen && estado]);



  return (
    <div className='header-container'>

        <div className='header-top'>
            <div className='header-top-left'>
                <h2>Charlestown</h2>
            </div>
            <div className='header-top-center'>
                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#menu'>Menu</a></li>
                    <li>Contact</li>
                    <li><a href='#menu'>Especials</a></li>
                </ul>
                

            </div>
            <div className='header-top-right'>
            <div onClick={()=>{
                setIsOpen(!isOpen);
            }}>
                <FontAwesomeIcon className="icon" icon={faBagShopping} />
            </div>
            <div>
                 <FontAwesomeIcon className="icon" icon={faPhone} />
            </div>
               
            </div>

        </div>
        <article className={carro}>
            <div className='container-cart-inside'>
                <h2>ORDER</h2>
                {productos.map((producto)=>{
                    return(
                        <div className='cart-item'>
                            <img src={producto.url} alt={producto.nombre}/>
                            <p>{producto.nombre}</p>
                            <p>${producto.precio}</p>
                            <button onClick={()=>{
                                productos.splice(productos.indexOf(producto), 1);
                                localStorage.setItem("carrito", JSON.stringify(productos));
                                setEstado(true);
                                document.location.reload(estado);
                                 
                               
                            }}>Eliminar</button>
                        </div>
                    )
                })}
            
            </div>
            <div className='container-price'>
                <p>Total: ${productos.reduce((total, producto)=>{
                    return total + producto.precio;
                } , 0)}
                </p>
                <button>PAY</button>
            </div>
        
        </article>
        <div className='header-bottom'>
            <h2>No Es Solo Una Pizza, Es</h2>
            <h2>Una <span>Experiencia</span></h2>
            <p>Ven y disfruta de la mas calida y deliciosa pizza</p>
            <p>en nuestro restaurante Charlestown.</p>
            <button><a  href="#menu">Ordenar</a></button>
        </div>


    </div>
  )
}
