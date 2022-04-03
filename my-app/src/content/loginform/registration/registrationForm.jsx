const RegistrationForm=()=>{
    return(
           <div className="registration__wrapper">
               <form action="#" method="get" enctype="multipart/form-data">
              <input type="text" tabindex="1" placeholder="First Name"></input>
              <input type="text" tabindex="2"  placeholder="Second Name"></input>
              <input type="text" tabindex="3"  placeholder="City"></input>
              <input type="text" tabindex="4"  placeholder="Education"></input>
              <input type='tel' tabindex="5"  placeholder="Telephone number"></input>
              <input type="password" 
              tabindex="6" placeholder="Password"></input>
              <input type="password" tabindex="7"  placeholder="Repeat password"></input>
              <button type="submit">Login</button>
               </form>
           </div>
    )
}

export default RegistrationForm