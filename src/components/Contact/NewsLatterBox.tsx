"use client";

import { useTheme } from "next-themes";

const NewsLatterBox = () => {
const { theme } = useTheme();

return (
<div className="relative z-10 rounded-sm bg-white p-8 shadow-three dark:bg-gray-dark sm:p-11 lg:p-8 xl:p-11">
    <div className="relative" style={{ paddingBottom: '120%' , height: 0, overflow: 'hidden' }}>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d967.9702898268426!2d100.3788004490738!3d13.9656786625964!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e289311d5242e9%3A0xdddff78eefc975c9!2z4LmE4Lia4Lij4LmM4LiXIOC4nuC4o-C4teC5geC4hOC4quC5gOC4leC4reC4o-C5jCDguIjguLPguIHguLHguJQgKCBQcmVjYXN0IENvbmNyZXRlIEZhY3RvcnkgKQ!5e0!3m2!1sth!2sth!4v1716948678694!5m2!1sth!2sth"
            style={{ position: 'absolute' , top: 0, left: 0, width: '100%' , height: '100%' , border: 0 }}
            allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
</div>

);
};

export default NewsLatterBox;