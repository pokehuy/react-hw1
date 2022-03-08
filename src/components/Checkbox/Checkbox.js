import { useState } from "react";


const Checkbox = () => {
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [check3, setCheck3] = useState(false);
    //const [name, setName] = useState("");
    const handleChange = (evt) => {
        //setName(evt.target.name);
        if (evt.target.name === "coding") setCheck1(evt.target.checked);
        if (evt.target.name === "music") setCheck2(evt.target.checked);
        if (evt.target.name === "reading") setCheck3(evt.target.checked);
        if(evt.target.name === "all" && evt.target.checked === true){
            document.getElementById("coding").checked = true;
            document.getElementById("music").checked = true;
            document.getElementById("reading").checked = true;
            setCheck1(true);
            setCheck2(true);
            setCheck3(true);
        }
        if(evt.target.name === "all" && evt.target.checked === false){
            document.getElementById("coding").checked = false;
            document.getElementById("music").checked = false;
            document.getElementById("reading").checked = false;
            setCheck1(false);
            setCheck2(false);
            setCheck3(false);
        }
    }
    return (
        <div onChange={handleChange}>
            <input type="checkbox" id="all" name="all"/>
            <label>All</label><br/>
            <input type="checkbox" id="coding" name="coding"/>
            <label>Coding</label><br/>
            <input type="checkbox" id="music" name="music"/>
            <label>Music</label><br/>
            <input type="checkbox" id="reading" name="reading"/>
            <label>Reading books</label><br/>
            You selected:<br/>
            "coding":{check1.toString()}
            "music":{check2.toString()}
            "reading":{check3.toString()}
        </div>
    )
}

export default Checkbox;