import React, { useState } from "react";
import playlists from '../../playlists.js'

// const Adder = () => {
//   const [value, setValue] = React.useState(
//     localStorage.getItem("myValueInLocalStorage") || ""
//   );

//   React.useEffect(() => {
//     localStorage.setItem("myValueInLocalStorage", value);
//   }, [value]);

//   const onChange = (event) => setValue(event.target.value);

//   return (
//     <div>
 

//       <input value={value} type="text" onChange={onChange} />

//       <p>{value}</p>
//     </div>
//   );
// };

// export default Adder;

export default function Adder() {
    const [value, setValue] = useState("dingus")

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) return;
    }

    const handleChange = (e) => {
        setValue(e.target.value)
        localStorage.setItem('test', value)
    }
    
    const getit = localStorage.getItem('test')
    // const playlists = [
    //     {
    //         name: "man out in japan",
    //         location: "japan"
    //     },
    //     {
    //          name: "donno what he sayin",
    //         location: "japan"
    //     }
    // ]

    localStorage.setItem('playlist', JSON.stringify(playlists))

    return (
      <div>
        <p>{value}</p>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleChange}></input>
          {/* <input type="text"></input> */}
            <button type="submit"></button>
                <span>{value}</span>
                <span>asasdfasdf</span>
                <span>{getit}</span>
        </form>
      </div>
    );
}



