// import React, { useLayoutEffect, useRef, useState } from 'react'

// const LayoutEffectYouTube = () => {

//     const inputRef = useRef();
//     const hello = useRef(() => console.log('hello'))
//     const [showHello, setShowHello] = useState(true)

//     useLayoutEffect(() => {
//         console.log(inputRef.current.getBoundingClientRect())
//     }, [])
//     return (
//         <div>
//             <button className="btn btn-primary" onClick={() => setShowHello(!showHello) }>toggle</button>
//             {showHello && <Hello />}
//             <input
//             ref={inputRef}
//             name="email"
//             value={values.email}
//             onChange={handleChange} />
//             <input
//             name="firstName"
//             placeholder="firsName"
//             value={values.email}
//             onChange={handleChange} />
            
//         </div>
//     )
// }

// export default LayoutEffectYouTube
