import NextLink from "next/link";
import style from "./link.module.scss"


export default function Link({children, href, download, ...props}){
    return(
        <NextLink href={href}>
            <a className={style.link} {...props}>{children}</a>
        </NextLink>
    )
}
