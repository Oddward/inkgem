import styles from './button.module.scss'

export default function Button({ children, primary }) {
    return (
        <button className={ `${styles.butt} ${primary ? "primary" : ''}` }>
            { children }
        </button>
    );
}