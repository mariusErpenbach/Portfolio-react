import React,{useState}  from "react";
import data from "./characteristicsData.json"

const Characteristics = () => {

const [myCharacter, setMyCharacter] = useState(data);

    return (
    <div id="my-characteristics"> 
    <header>Developers Characteristics </header>
    <table>
        <tr>
        <th>Name</th>
        <th>{myCharacter.name} {myCharacter.lastName}</th>
        </tr>
        <tr>
        <th>Age</th>
        <th>({myCharacter.age}) {myCharacter.dateOfBirth}</th>
        </tr>
        <tr>
        <th>hometown</th>
        <th>{myCharacter.placeOfResidence}</th>
        </tr>
        <tr>
        <th>native language</th>
        <th>{myCharacter.nativeLanguage}</th>
        </tr>
      
    </table>
        <p>{myCharacter.smallIntroduction}</p>
    </div>
)
}

export default Characteristics