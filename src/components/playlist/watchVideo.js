import { useSourceStore } from "./source.js";

export default function WatchVideo() {
      const [source, setSource] = useSourceStore();

    const handleWatchVid = (e) => {
       e.preventDefault();
       console.log(e);
       setSource(e.target[0].value);
     };


    return (
      <form
        type="submit"
        className="formAdder"
        onSubmit={handleWatchVid}>
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
    );
    
}