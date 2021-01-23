let linkList = [
    {
        SRC: "https://github.com/mbone1",
        Name: "GitHub"
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
                class="link"
                key={link.Name}
                content={link.Name}
                onClick={() => openInNewTab(link.SRC)}>{link.Name}</button>
            </>
    ))


    return (<div className="nine borders hov">{listLinks}</div>)
}