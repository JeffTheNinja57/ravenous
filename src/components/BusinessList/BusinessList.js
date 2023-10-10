import React from "react";
import styles from "./BusinessList.module.css";

import Business from "../Business/Business";

const BusinessList = (props) => {
    // Destructure the businesses prop
    const { businesses } = props;

    return (
        <div className={styles.BusinessList}>
            {/* Map over the businesses array and render Business components */}
            {businesses.map((business) => (
                <Business key={business.id} business={business} />
            ))}
        </div>
    );
};

export default BusinessList;
