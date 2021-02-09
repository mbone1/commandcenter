import '../../stylesheets/links.scss'




const openInNewTab = (url) => {
    const newWindow = window.open(
        url,
        "_blank",
        "noopener,noreferrer,fullscreen=no"
        );
        if (newWindow) newWindow.opener = null;
    };
    
    
    export default function Links() {
        
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
        
        const linkChecker = () => {
            if (JSON.parse(localStorage.getItem('links')) === null) {
                return linkList;
            } else {
                return JSON.parse(localStorage.getItem('links'));
            }
        }


    const listLinks = linkChecker().map((link) => (
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
        <div className="threeThree borders3 hov links-holder">
            <div>{listLinks}</div>
        
        </div>)
}