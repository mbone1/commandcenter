let linkList = [
    {
        SRC: "https://github.com/mbone1",
        Name: "GitHub"
    }
]



export default function Links() {
    const listLinks = linkList.map((link) => (
        <>
            <a
                class="link"
                key={link.Name}
                content={link.Name}
                href={link.SRC}> {link.Name}</a>
            </>
    ))


    return (<div className="nine borders hov">{listLinks}</div>)
}