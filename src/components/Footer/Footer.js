import React from 'react'
import "./Footer.css"
export default function Footer() {
  return (
    <div className='container-footer'>
        <div className='container-inside'>
                <h2>Charlestown</h2>
                <section>
                    <table>
                       <thead>
                            <tr>
                                <th>Menu</th>
                                <th>Restaurant</th>
                                <th>Support</th>
                                <th>Opening Hours</th>
                            </tr>
                       </thead>
                       <tbody>
                            <tr>
                                <td>Pizza</td>
                                <td>About Us</td>
                                <td>How to order</td>
                                <td>Week days: 10:30 - 9:00</td>
                            </tr>
                            <tr>
                                <td>Calzones</td>
                                <td>Menu</td>
                                <td>Where we delivery</td>
                                <td>Saturdays: 11:30 - 10:00</td>
                            </tr>

                       </tbody>

                    </table>
                </section>
                <p className='footer-copyrights'>
                    &copy; Copyright 2019 - Charlestown, All rights reserved.
                </p>
        
        </div>
    </div>
  )
}
