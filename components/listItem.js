import Link from "next/link";
import Avatar from "./avatar";
import styles from "./listItem.module.scss"

export default function ListItem({ title, category, author }) {
    return (
        <div className={ styles.div }>
            <div>
                <span>{ category }</span>
                <Link href="/">
                    <h2>{ title }</h2>
                </Link>
            </div>
            <Avatar src={ author } />
        </div>
    );
}