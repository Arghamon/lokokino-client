import React from 'react'

export default function Icon({ name, color,onClick, style }) {

    const icons = {
        overView: <svg id="Group_10" data-name="Group 10" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path id="Path_15" data-name="Path 15" d="M0,0H24V24H0Z" fill="none" /><path id="Path_16" className="pathclass" data-name="Path 16" d="M13,21V11h8V21ZM3,13V3h8V13Zm6-2V5H5v6ZM3,21V15h8v6Zm2-2H9V17H5Zm10,0h4V13H15ZM13,3h8V9H13Zm2,2V7h4V5Z" fill="currentColor" /></svg>,
        question: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19.5" viewBox="0 0 20 19.5"><path id="Path_13" className="pathclass" data-name="Path 13" d="M6.455,19,2,22.5V4A1,1,0,0,1,3,3H21a1,1,0,0,1,1,1V18a1,1,0,0,1-1,1ZM11,14v2h2V14ZM8.567,8.813l1.962.393A1.5,1.5,0,1,1,12,11H11v2h1A3.5,3.5,0,1,0,8.567,8.813Z" transform="translate(-2 -3)" fill="currentColor" /></svg>,
        collection: <svg id="Group_41" data-name="Group 41" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path id="Path_39" data-name="Path 39" d="M0,0H24V24H0Z" fill="none" /><path id="Path_40" className="pathclass" data-name="Path 40" d="M20,3a1,1,0,0,1,1,1V20a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V4A1,1,0,0,1,4,3ZM11.189,13.158,5,14.25V19h7.218l-1.03-5.842ZM19,5H11.781l2.468,14H19ZM9.75,5H5v7.218l5.842-1.03Z" fill="currentColor" /></svg>,
        user: <svg id="Group_45" data-name="Group 45" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path id="Path_43" data-name="Path 43" d="M0,0H24V24H0Z" fill="none" /><path id="Path_44" className="pathclass" data-name="Path 44" d="M12,20h8v2H12a10,10,0,1,1,8-4H17.292A8,8,0,1,0,12,20Zm0-10a2,2,0,1,1,2-2A2,2,0,0,1,12,10ZM8,14a2,2,0,1,1,2-2A2,2,0,0,1,8,14Zm8,0a2,2,0,1,1,2-2A2,2,0,0,1,16,14Zm-4,4a2,2,0,1,1,2-2A2,2,0,0,1,12,18Z" fill="currentColor" /></svg>,
        edit: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g id="Group_29" data-name="Group 29" opacity="0.4"><path id="Path_32" data-name="Path 32" d="M0,0H16V16H0Z" fill="none"/><path id="Path_33" className="quizedit" data-name="Path 33" d="M5.752,12.5H3V9.719l7.415-7.5a.643.643,0,0,1,.917,0l1.835,1.855a.661.661,0,0,1,0,.927ZM3,13.812H14.673v1.311H3Z" transform="translate(-0.836 -0.566)" fill="currentColor"/></g></svg>,
        delete: <svg id="Group_77" data-name="Group 77" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path id="Path_34" data-name="Path 34" d="M0,0H16V16H0Z" fill="none"/><path id="Path_35" className="quizedit" data-name="Path 35" d="M5.32,4.656V2.664A.664.664,0,0,1,5.984,2H11.3a.664.664,0,0,1,.664.664V4.656h3.32V5.984H13.953v8.632a.664.664,0,0,1-.664.664h-9.3a.664.664,0,0,1-.664-.664V5.984H2V4.656ZM6.648,3.328V4.656h3.984V3.328Z" fill="currentColor" transform="translate(-0.64 -0.64)"/></svg>,
        add: <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8"><g id="Group_14" data-name="Group 14" transform="translate(-1608.5 -225.5)"><path id="Path_23" data-name="Path 23" d="M1605.735,225.5v8" transform="translate(6.765 0)" fill="none" stroke="#fff" strokeWidth="1.5"></path><path id="Path_24" data-name="Path 24" d="M0,0V8" transform="translate(1608.5 229.5) rotate(-90)" fill="currentColor" stroke="#fff" strokeWidth="1.5"></path></g></svg>,
        close: <svg xmlns="http://www.w3.org/2000/svg" width="17.53" height="17.531" viewBox="0 0 17.53 17.531"><g id="Group_90" data-name="Group 90" transform="translate(8.765 -6.644) rotate(45)"><path id="Path_23" data-name="Path 23" d="M1605.735,225.5v21.792" transform="translate(-1594.839 -225.5)" fill="none" stroke="#16191c" strokeWidth="3"></path> <path id="Path_24" data-name="Path 24" d="M0,0V21.792" transform="translate(0 10.896) rotate(-90)" fill="none" stroke="#16191c" strokeWidth="3"></path></g></svg>,
        image: <svg id="Group_87" data-name="Group 87" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path id="Path_52" data-name="Path 52" d="M0,0H20V20H0Z" fill="none"></path> <path id="Path_53" data-name="Path 53" d="M17,4.667H3.667V16.333L11.41,8.588a.833.833,0,0,1,1.178,0L17,13.008ZM2,3.828A.833.833,0,0,1,2.827,3H17.84a.827.827,0,0,1,.827.828V17.173A.833.833,0,0,1,17.84,18H2.827A.828.828,0,0,1,2,17.172ZM7,9.667A1.667,1.667,0,1,1,8.667,8,1.667,1.667,0,0,1,7,9.667Z" transform="translate(-0.333 -0.5)" fill="#0735bf"></path></svg>,
    }

    return (
        <div style={{ ...style, display: 'flex', color, cursor: 'pointer' }} onClick={onClick}>
            {icons[name]}
        </div>
    )
}

// #788186
