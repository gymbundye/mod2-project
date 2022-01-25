import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';

function YourThoughts() {
  return <div>
      <form>
          <label>
              <input type="text" name="name"/>
          </label>
          <input type="submit" value="Submit"/>
      </form>
      
      <Footer/>
  </div>;
}

export default YourThoughts;
