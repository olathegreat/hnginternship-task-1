import React from 'react';
import Footer from '../components/Footer';
import "../components/style.css";


const Contact = () => {
  return (
    <div className='contact'>
        <h3>Contact Me</h3>
        <p>Hi there, contact me to ask about anything you have in mind</p>

        <form>
            <div className='name'>
                <div className='form-group'>
                    <label>First name</label>
                    <input placeholder='Enter your first name' id="first_name" type="text"/>
                </div>

                <div className='form-group'>
                    <label>Last name</label>
                    <input placeholder='Enter your last name' id='last_name' type="text"/>
                </div>
            </div>
            

            <div className='form-group'>
                    <label>Email</label>
                    <input placeholder='yourname@email.com' id='email' type="email"/>
            </div>

            <div className='form-group'>
                    <label>Message</label>
                <div className='textarea-wrapper'>


                    
                          <textarea placeholder="Send me a message and I'll reply you as soon as possible..." id='message'>

                             </textarea>
                             
                </div>
        </div>

            <div className='select_group'> 

                 <input id='checkbox' type="checkbox"/>
                 <p>
                    You agree to providing your data to Ola The Great you may contact you

                 </p>

            </div>

        
            <button id='btn_submit'>Send Message</button>
        
        </form>



        <hr></hr>

        <Footer/>
      
    </div>
  );
}

export default Contact;
