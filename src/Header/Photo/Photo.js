import React, {useState} from "react";
import styles from './Photo.module.css';

const Photo = () => {

    const photoLinkArr = [
        'http://coremotor.ru/img/1.jpg',
        'http://coremotor.ru/img/2.jpg',
        'http://coremotor.ru/img/3.jpg',
    ]

    const [count, setCount] = useState(0);

    return (
        <div className={styles.photoSection}
             onClick={() => {
                 if (count < (photoLinkArr.length - 1)) {
                     setCount(count + 1);
                 } else {
                     setCount(0);
                 }
             }}
        >
            <img className={styles.photoSectionImg} src={photoLinkArr[count]} alt="myPhoto"/>

            <span className={styles.photoSectionCount}>{count + 1}/{photoLinkArr.length}</span>

        </div>
    )
}

export default Photo;