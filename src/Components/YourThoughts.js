import React from 'react';


function YourThoughts() {
  return <div>
      <div className='thoughtsStyle'>
          <p>What are your thoughts on this weeks Movie?</p>
            <p>Excited for next weeks pick? Let us know below!</p>
      <form>
          <label>
              <input type="text" name="name"/>
          </label>
          <label>
          <input type="submit" value="Submit"/>
          </label>
      </form>
    
      </div>
      
  </div>;
}

export default YourThoughts;
