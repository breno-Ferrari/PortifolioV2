import style from "../styles/404.module.scss"

export default function Custom404() {
    return (
        <section className={style.error}>
           <video className={style.error__video} autoPlay loop muted>
                <source src="/videos/404.mp4" type="video/mp4"></source>
                Your browser does not support the video tag.
            </video>
            <div className={style.error__Text}></div>
        </section>

    )
  }