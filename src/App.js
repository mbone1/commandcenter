import "../src/style.css"

function App() {
  

  return (
    <div className="App">
      <div class="has-text-centered">
        <p class="woo">45:00 </p>
      </div>
      <div class="has-text-centered">
        <form>
          <span>Length of timer</span>
          <input></input>
        </form>
      </div>
      <div class="columns">
        <div class="column is-two-fifths has-text-right">
          <div class="row">&nbsp;</div>
          <div class="row">&nbsp;</div>

          <p>List of ambient playlists</p>
          <p>Silent Hill Ambient</p>
          <p>Silent Hill Ambient</p>
          <p>Silent Hill Ambient</p>
          <p>Silent Hill Ambient</p>
          <p>Silent Hill Ambient</p>
          <p>Silent Hill Ambient</p>
          <p>Silent Hill Ambient</p>
          <p>Silent Hill Ambient</p>
        </div>

        <div class="column is-three-fifths">
          <div class="columns">
            


          </div>
          <div class="row">&nbsp;</div>
          <div class="row">&nbsp;</div>
          <iframe
            class="video"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/j0-9udYcxOI"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
          
        </div>
      </div>
    </div>
  );
}

export default App;
