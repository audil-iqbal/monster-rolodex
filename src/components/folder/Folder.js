import React,{ useState } from "react"

const Folder = ({folder}) => {
    const [expand,setExpand] = useState(false);

    if(folder.isFolder){ 
        return (
        <div>
            <p onClick={()=> setExpand(!expand)}>{folder.name}</p>
            <div style={{display: expand?'block':'none',paddingLeft:20}}>
            {
                folder.items.map(e=> {
                    return <Folder key={folder.name} folder={e}/>
                })
            }
            </div>
        </div>
        );
    }
    return <p>{folder.name}</p>;
}

export default Folder;