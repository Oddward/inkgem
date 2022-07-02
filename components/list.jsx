import ListItem from "./listItem";
import styles from './list.module.scss'

export default function List() {
    return (
        <div className={ styles.div }>
            <ListItem 
                title={'If confidence breeds greatness does humiliy breed defeat?'} 
                category={'Psychology'} />
            <ListItem 
                title={'An issue of mind over matter'} 
                category={'Life'} />
            <ListItem 
                title={"When it feels like you're in a Stephen Hawking novel"} 
                category={'Life'} />
        </div>
    );
}