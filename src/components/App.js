import React from 'react';
import "./style.css";

const App = () => {
  return (
    <div className='app'>
      <div className='user_details'>
        <div className='img-circle'>
           <img src='image/mypic.png' alt='profile_img' id="profile_img"/>
           <i className='icofont-camera'></i>

        </div>
        <h3 id="twitter">Olaniran3rd</h3>
        <h3 id='slack'>Olathegreat</h3>
      </div>

      <ul>
         <li><a  href=''>Twitter Link</a></li>
         <li>
              <a id="btn_zuri" href='https://training.zuri.team'>Zuri Team</a>

      
          </li>
         <li>
          <a id="books" href='http://books.zuri.team'>Zuri Books</a>
      
          </li>
         <li>
          <a id='book_python' href='https://books.zuri.com/python-for-beginners?ref_id=<yourslackname>'>Python Books</a>
          
          </li>
         <li>
          <a id='pitch' href='https://background.zuri.team'>Background Check for Coders</a>
          </li>
         <li>
          <a id="book_design" href='https://books.zuri.team/design-rules'>Design Books</a>
          
          </li>




      </ul>
   

      <div className='small-icons'>
        <img src='image/slack.png' alt='slack-logo'/>
        <img src='image/github.png' alt='github-logo'/>
      </div>

       

      <hr></hr>

      <footer>
        <img src='image/zuri-internship-img.svg' alt='ingressive-logo'/>
        <span>HNG Internship c Frontend Task</span>
        <img src='image/ingressive.png' alt='ingressive-logo'/>
      </footer>
      {/* <i className='icofont-external-link external'></i> */}

      {/* <i className='icofont-navigation-menu  mobile'></i> */}
      
      <div className='external'>
        <img src='image/external.png'/>
      </div>
      <div className='mobile'>
           <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>

      </div>
    </div>
  );
}

export default App;
