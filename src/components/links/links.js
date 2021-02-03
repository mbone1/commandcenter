import '../../stylesheets/links.scss'


let linkList = [
    {
        SRC: "https://github.com/mbone1",
        Name: "GitHub"
    },
    {
        SRC: "https://www.w3schools.com/",
        Name: "w3schools"
    }
]


const openInNewTab = (url) => {
  const newWindow = window.open(
    url,
    "_blank",
    "noopener,noreferrer,fullscreen=no"
  );
  if (newWindow) newWindow.opener = null;
};


export default function Links() {
    const listLinks = linkList.map((link) => (
        <>
            <button
                class="link links-button invert"
                key={link.Name}
                content={link.Name}
                onClick={() => openInNewTab(link.SRC)}>{link.Name}</button>
            <br></br>
            </>
    ))


    return (
        <div className="four borders hov links-holder">
            <div>{listLinks}</div>
        
        </div>)
}