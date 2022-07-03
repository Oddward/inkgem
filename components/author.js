import styles from './author.module.scss'
import styleUtils from '../styles/utils.module.css'
import Avatar from './avatar';

export default function Author({ name, title }) {
    return (
        <div className={ styles.div }>
            <Avatar src="/images/pfp1.jpg" className={ styleUtils.roundedCircle } />
            <div className={ styles.info }>
                <p>{ name }</p>
                <p className={`${styleUtils.subheading} ${styleUtils.ital}`}>{ title }</p>
            </div>
        </div>
    );
}