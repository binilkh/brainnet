import React from 'react';
import logo from '../../../asssets/logo.png';
import './styles.css';


export const HomeLogin=() =>{
    // Get the modal
var modal = document.getElementById('myModala');

// Get the button that opens the modal
// var btn = document.getElementById('myBtna');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('closea')[0];

// When the user clicks the button, open the modal 
/*btn.onclick = function() {
  modal.style.display = 'block';
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = 'none';
}*/

// When the user clicks anywhere outside of the modal, close it

    return(
    <div className="headerWrappera">
        <img  className="logoFa"  src={logo} alt="hotels"/>
        <div className="menua">
                    <ul>
                        <li><div className="menuMobile"><a href="#home">Internet</a></div></li>
                        <li>
                            <div className="menuMobile"><a href="#news">DTP</a></div>
                        </li>
                        <li><a href="#news">Scanning</a></li>
                        <li>
                        <div className="menuMobile"><a href="#news">Email</a></div></li>
                        <li><a href="#news">Contact 9447348555</a></li>
                    </ul>
        </div>
    </div>
    
);
}
