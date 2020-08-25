import React, {useState} from "react";
import styles from './Photo.module.css';

const Photo = () => {

    const photoLinkArr = [
        'https://media.istockphoto.com/photos/eyes-full-of-curiosity-picture-id1187105189?b=1&k=6&m=1187105189&s=170667a&w=0&h=l9jf9X5LFSylwiRnxUEfD9qaqnHoTGSYyEQqY08IojY=',
        'https://media.istockphoto.com/photos/gray-cat-on-the-floor-of-the-room-near-a-bowl-of-water-view-from-picture-id1191739263?b=1&k=6&m=1191739263&s=170667a&w=0&h=UmwR25J6R8ZT5oHXln60zonGklHjzZCpsZQ2v4oPh9w=',
        'https://media.istockphoto.com/photos/ginger-cat-sleepng-on-couch-in-living-room-surrounded-with-cushions-picture-id1153834825?b=1&k=6&m=1153834825&s=170667a&w=0&h=qz32jz8Xu2Qv0Csp4Ynb0HNvxj6xywqJ8ADV_0csxrU=',
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
            <img src={photoLinkArr[count]} alt="myPhoto"/>

            <span className={styles.photoSectionCount}>{count + 1}/{photoLinkArr.length}</span>

        </div>
    )
}

export default Photo;