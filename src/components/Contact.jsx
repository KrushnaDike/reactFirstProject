import React from 'react';

const Contact = () => {
  return (
    <div className="contact">
      <main>
        <h1>Contact Us</h1>

        <form action="#">
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name='name' required placeholder='Abc' />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name='email' required placeholder='abc@gmail.com' />
          </div>

          <div>
            <label htmlFor="msg">Message</label>
            <input type="text" name='msg' required placeholder='Tell us about your query ...' />
          </div>

          <button type='submit'>Send</button>
        </form>
      </main>
    </div>
  )
};

export default Contact;