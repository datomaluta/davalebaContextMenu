import React, {useState, useEffect} from 'react';

const ContextMenu = (props) => {
    const [isOpen, setisOpen] = useState(false)
    
    const itemEdit = () => {
        console.log('edit')
        setisOpen(false)
    }
    const itemDelete = () => {
        console.log("delete")
        setisOpen(false)
    }
    useEffect(() => {
        props.isRightClicked && setisOpen(true)
    }, [props.isRightClicked])

    useEffect(() => {
        const cancelMenu = (element) => {
            const parent = props.parent.current;

            if (!parent.contains(element.target)) {
                setisOpen(false);
            }

        }
        window.addEventListener('click', cancelMenu)

        return () => {window.removeEventListener('click', cancelMenu)}
    })
    return isOpen ? (
        <div>
            {props.children}
            <div>
                <button className='buttonClass' onClick={itemEdit}>edit</button>
                <button className='buttonClass' onClick={itemDelete}>Delete</button>
                
            </div>
        </div>
    ) : null
    
}

export default ContextMenu;