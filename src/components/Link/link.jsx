import NextLink from "next/link";
import style from "./link.module.scss"


export default function Link({children, href, ...props}){
    return(
        <NextLink href={href} passHref>
            <a {...props} className={style.link}>{children}</a>
        </NextLink>
    )
}
