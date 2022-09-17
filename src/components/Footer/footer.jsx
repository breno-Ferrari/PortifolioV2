import styles from "./footer.module.scss"
import { AiOutlineCopyright } from "react-icons/ai";

export default function Footer() {
    return (
      <section className={styles.footerSection} id="footer">
        <div className={styles.footerSection__texts}>
            © Breno Velosa Ferrari. Todos os direitos reservados.   
        </div>
      </section>
    )
  }
  