
import React, { useState, useEffect } from 'react'
import "./Main.css" 
import data from './menu.json'






export default function Main() {

    let optios=[
        "Pizza",
        "Calzones"
    ];

    

    const [selectedOption, setSelectedOption] = useState("Pizza");
    const [food, setFood] = useState([]);
    
    

    useEffect( () => {
       setFood(data);
      

    }, [selectedOption]);

   
    
   

   
  return (
    <div className='main-container'>
       <header className='main-header'>
                 <p>NUESTRO MENU</p>
                 <h1>Descubre Nuestro Menu</h1>

       </header>
       <section className='main-options'>
            {optios.map((item)=>{
                return(
                  
                        <p onClick={()=>{setSelectedOption(item)}} className='opciones'>
                            {item}
                        </p>
                  
                )
            })}

        </section>
       
        <div id='menu' className='container-comida'>
            {food.map((objeto)=>{
                if(objeto.categoria === selectedOption){
                    return objeto.comida.map(
                        (plato)=>{
                            return(
                                <div className='card-food'>
                                    <img className='card-img' src={plato.url} alt={plato.nombre}/>
                                    <h2>{plato.nombre}</h2>
                                    <p>${plato.precio}</p>
                                    <button onClick={
                                        ()=>{
                                            var orden = [];
                                            if(localStorage.getItem("carrito") === null || localStorage.getItem("carrito") === ""){
                                                orden.push(plato);
                                                localStorage.setItem("carrito", JSON.stringify(orden));

                                            }
                                            else{
                                                orden = JSON.parse(localStorage.getItem("carrito"));
                                                orden.push(plato);
                                                localStorage.setItem("carrito", JSON.stringify(orden));
                                            }
                                        }
                                    } className='btn-comprar'>Ordenar</button>
                                       
                                      
                                   
                                    
                                </div>
                            )

                        }
                    );
                }
            })}
               
        </div>

       


    </div>
  )
}
