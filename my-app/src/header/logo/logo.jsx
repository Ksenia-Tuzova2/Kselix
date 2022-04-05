import Ks from '../../img/logo.svg'
import logoStyle from './logo.module.css'

const Logo=()=>{
    return(
        <div className={logoStyle.logo_wrapper}>
        <div><img className={logoStyle.logo__img} src={Ks} alt='#'></img></div> 
        <div className={logoStyle.logo__name} >Kselix</div>
        </div>
        
    )
}

export default Logo