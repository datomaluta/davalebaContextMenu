import React, {useRef, useState} from 'react';
import ContextMenu from './ContextMenu';


const ContextItem = ({ children}, style) => {
    const itemsRef = useRef()
    const [isRightClicked, setIsRightClicked] = useState (false)
    return (
        <li className='liClass'
            style={style}
            ref={itemsRef}
            onContextMenu={(element) => {
                element.preventDefault()
                setIsRightClicked(!isRightClicked)
            }}>
             <p>{children}</p>  
             <ContextMenu
                parent={itemsRef}
                children={children}
                isRightClicked={isRightClicked}/>
        </li>
    )
}

export default ContextItem;