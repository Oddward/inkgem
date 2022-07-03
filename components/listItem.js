import Link from "next/link";
import Avatar from "./avatar";
import styles from "./listItem.module.scss"
import styleUtils from '../styles/utils.module.css'

export default function ListItem({ title, category, author, href }) {
    return (
        <div className={ `${styles.div} ${styleUtils.listItem}` }>
            <div>
                <small>{ category }</small>
                <Link href={ href }>
                    <h3>{ title }</h3>
                </Link>
            </div>
            <Avatar src="/images/pfp1.jpg" />
        </div>
    );
}