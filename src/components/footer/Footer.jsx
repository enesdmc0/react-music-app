import React from 'react';
import "./footer.scss";
const Footer = ({toogle, setToogle}) => {
    return (
        <div className={toogle ? "footerActive footer" : "footer"}>
            <span>© tüm hakları saklıdır. 2022 | </span>
            <span>enes demirci</span>
        </div>
    );
};

export default Footer;
