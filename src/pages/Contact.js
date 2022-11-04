import React from 'react';
import Footer from '../components/Footer';
import "../components/style.css";


const Contact = () => {
  return (
    <div className='contact'>
        <h3>Contact Me</h3>
        <p>Hi there, contact me to ask about anything you have in mind</p>

        <form>
            <div>
                <div>
                    <label>First name</label>
                    <input id="first_name" type="text"/>
                </div>

                <div>
                    <label>Last name</label>
                    <input id='last_name' type="text"/>
                </div>
            </div>
            

            <div>
                    <label>Email</label>
                    <input id='email' type="email"/>
            </div>

            <div>
                    <label>Message</label>
                    <input type="text"/>
            </div>

            <input type="checkbox"/><label>You agree to providing your data to Ola The Great you may contact you</label>
        
            <button>Send Message</button>
        
        </form>





        <Footer/>
      
    </div>
  );
}

export default Contact;
