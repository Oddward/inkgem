import styles from './author.module.scss'
import utilStyles from '../styles/utils.module.css'
import Avatar from './avatar';

export default function Author({ src, name, title }) {
    return (
        <div className={ styles.div }>
            <Avatar src={ src } className={ utilStyles.roundedCircle } size="200" />
            <div className={ `${styles.info} ${utilStyles.headingLg} ${utilStyles.bold}` }>
                <p>{ name }</p>
                <p className={`${utilStyles.subheading} ${utilStyles.ital}`}>{ title }</p>
            </div>
        </div>
    );
}