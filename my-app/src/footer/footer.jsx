
import FooterStyle from './footer.module.css'
import Footer__menu from './footerMenu/footerMenu'
import Footer__rights from './footerRights/footerRights'



const Footer=()=>{
    return(
        <footer className={FooterStyle.Footer__wrapper}>
        <Footer__menu/>
        <Footer__rights/>
        </footer>
    )
}

export default Footer