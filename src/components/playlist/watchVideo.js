import { useSourceStore } from "./source.js";

export default function WatchVideo() {
      const [source, setSource] = useSourceStore();
      const handleSubmit = (e) => {
         e.preventDefault();
         console.log(e);
         setSource(e.target[0].value);
       };


     return (<>
         <p className="helptext invertConst">please note : accepts embed code only</p>
       <form
         type="submit"
         className="formAdder"
         onSubmit={handleSubmit}>
         <label>&nbsp;&nbsp;URL &nbsp;&nbsp;</label>
         <input
           type="text"
           name="SRC"
           className="borders"
         ></input>
         <button className="invert submitbutton borders3" type="submit">
                 Watch Video
         </button>
         </form>
         </>
     );
     
 }
