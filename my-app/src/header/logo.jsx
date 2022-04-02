import Ks from '../img/logo.svg'
// import './App.css';

const Logo=()=>{
    return(
        <div className='logo__wrapper'>
        <a href="#">
        <img className="logo__img" src={Ks}></img>
        </a>
        <div className='logo__name'>Kselix</div>
        </div>
        
    )
}

export default Logo