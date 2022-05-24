import React, { useEffect } from "react";
import './recommend.css';

const Recommend = () => {
    
    const listitems = (event) => {
        const li = document.getElementById('mymenu').getElementsByTagName('li');
        for(var i=0 ; i<li.length; i++){
            if(li[i].innerHTML.toLowerCase().indexOf(event.target.value.toLowerCase())> -1){
                li[i].style.display = "";
            }else{
                li[i].style.display = 'none';
            }
        }
    }

    const openCourse = (course) => {
        console.log(course);
        const contents = document.getElementsByClassName('content');
        for(var i=0; i<contents.length; i++){
            contents[i].style.display = 'none';
        }

        document.getElementById(course).style.display = 'block';
    }

    useEffect(() => {
        document.getElementById('html').click();
        console.log('useeffect');
    });
    return(
        <div className="recommend1">
            <h3>Search Menu Item</h3>
            <div className="c-row">
                <div className="left">
                    <h3>Menu</h3>
                    <input type="text" id='mysearch' onKeyUp={listitems} placeholder='Search.'/>
                    <ul id="mymenu">
                        <li onClick={() => openCourse('html')}>HTML</li>
                        <li onClick={() => openCourse('css')}>CSS</li>
                        <li onClick={() => openCourse('js')}>JAVAscript</li>
                        <li onClick={() => openCourse('node')}>nodejs</li>
                    </ul>
                </div>
                <div className="right">
                    <div id='html' className="content">
                        <h2>HTML course</h2>
                        <p>welcome to html course</p>
                    </div>
                    <div id='css' className="content">
                        <h2>CSS course</h2>
                        <p>welcome to css course</p>
                    </div>
                    <div id='js' className="content">
                        <h2>Javascript Course</h2>
                        <p>welcome to javascript course</p>
                    </div>
                    <div id='node' className="content">
                        <h2>Nodejs Course</h2>
                        <p>welcome to nodejs course</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Recommend;