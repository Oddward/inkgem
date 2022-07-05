import styleUtils from '../styles/utils.module.css'

export default function Avatar({ src, alt, size }) {
    return (
        <img className={ styleUtils.borderCircle } src={ src } alt={ alt } width={`${size}px`} height={`${size}px`} />
    );
}