import React,{useState}  from "react";
import data from "./characteristicsData.json"

const Characteristics = () => {

const [myCharacter, setMyCharacter] = useState(data);

    return (
    <div id="my-characteristics"> 
    
    <main>
    
    <header><p>Developers Characteristics</p> </header>
    <table>
        <tr>
        <th>Name:</th>
        <th>{myCharacter.name} {myCharacter.lastName}</th>
        </tr>
        <tr>
        <th>Age:</th>
        <th>({myCharacter.age}) {myCharacter.dateOfBirth}</th>
        </tr>
        <tr>
        <th>Hometown:</th>
        <th>{myCharacter.placeOfResidence}</th>
        </tr>
        <tr>
        <th>Native Language:</th>
        <th>{myCharacter.nativeLanguage}</th>
        </tr>
        <tr>
        <th>Email Address:</th>
        <th>{myCharacter.myEmail}</th>
        </tr>
    </table>
     
        <footer>
       
        <p id="about-me-adviser"> Read more about me, I wrote a small Introduction about who I am. <a href="./">read more <i class="fas fa-arrow-circle-right"></i></a></p>
        
        </footer>
        </main>
       
    </div>
)
}

export default Characteristics