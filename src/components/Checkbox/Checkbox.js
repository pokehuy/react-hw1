/* import { useState } from "react";


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
            <label htmlFor="all">All</label><br/>
            <input type="checkbox" id="coding" name="coding"/>
            <label htmlFor="coding">Coding</label><br/>
            <input type="checkbox" id="music" name="music"/>
            <label htmlFor="music">Music</label><br/>
            <input type="checkbox" id="reading" name="reading"/>
            <label htmlFor="checkbox">Reading books</label><br/>
            You selected:<br/>
            "coding":{check1.toString()}
            "music":{check2.toString()}
            "reading":{check3.toString()}
        </div>
    )
}

export default Checkbox; */

import { useState } from "react";

const Checkbox = () => {


    const [values, setValues] = useState({
        coding: false,
        music: false,
        reading: false,
    });

    const handleSubmit = (evt) => {
        evt.preventDefault();
    }

    const handleChange = (evt) => {
        setValues({
            ...values,
            [evt.target.name]: evt.target.checked,
        });
    }

    const handleAllChange = (evt) => {
        setValues({
            coding: evt.target.checked,
            music: evt.target.checked,
            reading: evt.target.checked,
        });
    }
    console.log(values);

    const all = values.coding && values.music && values.reading;

    return (
        <div className="checkbox">
            <p>Choose your interest: </p>
            <form action="">
                <div>
                    <input onChange={handleAllChange} checked={all} type="checkbox" id="all"/>
                    <label htmlFor="all">All</label>    
                </div>  
                <div>
                    <input name="coding" checked={values.coding} onChange={handleChange} type="checkbox" id="coding"/>
                    <label htmlFor="coding">Coding</label>    
                </div>
                <div>
                    <input name="music" checked={values.music} onChange={handleChange} type="checkbox" id="music"/>
                    <label htmlFor="music">Music</label>    
                </div>  
                <div>
                    <input name="reading" checked={values.reading} onChange={handleChange} type="checkbox" id="reading"/>
                    <label htmlFor="reading">Reading books</label>    
                </div>
                <button type="Submit" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
}

export default Checkbox;