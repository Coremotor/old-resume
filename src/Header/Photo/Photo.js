import React, {useState} from "react";
import styles from './Photo.module.css';

const Photo = () => {

    const photoLinkArr = [
        'https://coremotor.ru/img/11.png',
        'https://coremotor.ru/img/22.png',
        'https://coremotor.ru/img/33.png',
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

            <span className={styles.photoSectionCount}>{count + 1} из {photoLinkArr.length}</span>

        </div>
    )
}

export default Photo;