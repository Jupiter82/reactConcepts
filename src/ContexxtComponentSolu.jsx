import React, { createContext, useContext, useState } from 'react'

const UserContext = createContext()

export const ContexxtComponentSolu = () => {
    function Component1() {
        const [user, setUser] = useState("Jupiter Bade")
        return (<UserContext.Provider value={user}>
            <h1 className='underline'>{`Hello ${user}`}</h1>
            <Component2 />
        </UserContext.Provider>)
    }
    const Component2 = () => {
        return (
            <>
                <h1>Component 2</h1>
                <Component3 />
            </>
        )
    }
    const Component3 = () => {
        return (<>
            <h1>Component 3</h1>
            <Component4 />
        </>)
    }
    const Component4 = () => {
        return (<>
            <h1>Component 4</h1>
            <Component5 />
        </>)
    }
    const Component5 = () => {
        const user = useContext(UserContext)
        return (
            <>
                <h1>Component 5</h1>
                <h1>{`Hello ${user} again`}</h1>

            </>)
    }


    return (
        <>
            <div>ContexxtComponentSolu</div>
            <Component1 />
        </>
    )
}
