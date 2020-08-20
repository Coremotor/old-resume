import React from "react";
import styles from './Stack.module.css'
import WhatICan from "./WhatICan/WhatICan";
import WhatAmStudyingNow from "./WhatAmStudyingNow/WhatAmStudyingNow";
import WhatDoIPlanToStudy from "./WhatDoIPlanToStudy/WhatDoIPlanToStudy";

const Stack = () => {
    return (
        <section className={styles.stack}>
            <WhatICan/>
            <WhatAmStudyingNow/>
            <WhatDoIPlanToStudy/>
        </section>
    )
}

export default Stack;