import React from 'react';

const Form = ({ onChange, onClick }) => {
    return (
        <section id="password-checker">
          <form>
            <input type="text" name="userInput" id="userInput" onChange={onChange} />
            <br />
            <button id="submitUserInput" onClick={onClick}>Submit</button>
          </form>
        </section>
    )
}

export default Form;