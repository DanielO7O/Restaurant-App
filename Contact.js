
import { useState} from 'react'

import './contact.css'

 const Contact = () => {
  const [title, setTitle] = useState('');
  const [mail, setMail] = useState('');
  const [body, setBody] = useState('');



   return (
     <div className="create">
       <h1> Contact Us </h1>
       <form>
         <label>Full Name:</label>
         <input 
         type="text"
         required
         value={title}
         onChange={(e) => setTitle(e.target.value)}
         />
         <p>{title}</p>
         
         <label>E-mail:</label>
         <input 
         type="text"
         required
         value={mail}
         onChange={(e) => setMail(e.target.value)}
         />
         <p>{mail}</p>

         <label>Body</label>
         <textarea
         required
         value={body}
         onChange={(e) => setBody(e.target.value)}
         ></textarea>
      
         
         <button> Submit </button>
         <p>{body}</p>
       </form>
     </div>
   )
 }

export default Contact