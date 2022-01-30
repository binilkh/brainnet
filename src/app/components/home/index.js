import React from 'react';
import logo from '../../../asssets/logo.png';
import brains from '../../../asssets/kumarakom.jpeg';
import './styles.css';

const showImage=()=>{
    //document.getElementById('image_1').style.display = 'inline-block';
    var modal = document.getElementById('myModal');
    modal.style.display = 'block';
}

const hideImage=()=>{
    //document.getElementById('image_1').style.display = 'none';
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
}


export const HomePage=() =>{
    // Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
//var btn = document.getElementById('myBtn');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks the button, open the modal 
/*btn.onclick = function() {
  modal.style.display = 'block';
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = 'none';
}*/

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
}
    return(
    <div className="headerWrapper">
        <img  className="logoF"  src={logo} alt="hotels"/>
        <div className="menu">
                    <ul>
                        <li><div className="menuMobile"><a href="#home">Internet</a></div></li>
                        <li>
                            <div className="menuMobile"><a href="#news">DTP</a></div>
                        </li>
                        <li><a href="#news">Scanning</a></li>
                        <li>
                        <div className="menuMobile"><a href="#news">Email</a></div></li>
                        <li><a href="#news">Fishing</a></li>
                        <li><a href="#news">Ayurveda</a></li>
                        <li><button className="buttonC" id="myBtn" name="myBtn" onClick={showImage}>Contact</button></li>
                    </ul>
        </div>
        <div id="myModal" class="modal">
            <div class="modal-content">
                <span class="close" onClick={hideImage}>&times;</span>
                <label>For all your questions...9447348555</label>
                <img src={brains} onClick={hideImage}/>
            </div>
        </div>
    </div>
    
);
}
