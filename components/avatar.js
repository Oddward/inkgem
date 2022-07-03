import styleUtils from '../styles/utils.module.css'

export default function Avatar({ src }) {
    return (
        <img className={ styleUtils.borderCircle } src={ src } alt="" width="100" height="100" />
    );
}