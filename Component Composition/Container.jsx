import { useState } from "react"

export const Container = ({ title, children }) => {
    const [collapsed, setCollapsed] = useState(false)

    const handleToggleCollapse = () => {
        setCollapsed((t) => !t)
    }

    const styleContainer = {
        border: '20px solid red',
        backgroundColor: 'white'
    }

    return (
        <div style={styleContainer}>
            <div>
                {title} 
                <button onClick={handleToggleCollapse}>Toggle</button>
            </div>
            <div className={collapsed ? 'app-content' : 'app-content-hidden'}>{children} </div>
        </div>
    )
}