const {JSDOM} = require('jsdom')

const dom = new JSDOM(`
      <!DOCTYPE html>
      <form id="form">
        <label>Email</label>
        <input type="email" minlength="1" name="email" required />
        <br />
        <button type="submit">submit</button>
      </form>
    `);
  
const { document } = dom.window;
const form = document.querySelector("form");
const input = document.querySelector("input");
    
input.addEventListener("invalid", e => {
    console.log("invalid fired")
});
      
form.addEventListener("submit", e => {
    e.preventDefault();
    console.log("submit fired")
});
    
form.submit();