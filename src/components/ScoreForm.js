import { type } from '@testing-library/user-event/dist/type';
import{ getDoc, getFirestore,collection, getDocs, addDoc,serverTimestamp, updateDoc,doc, Firestore, deleteDoc }from "firebase/firestore";
import { initializeApp } from "firebase/app";
import React, { useEffect } from 'react';
import { useState } from 'react';
import {timestamp,dateDestructurings,iso }from "../utils/Date"
import { db } from '../config/db';
const ScoreForm = ({dataUser}) => {



    
    const [code,setCode] = useState("")

    const [scoreData,setScoreData] = useState()

 
    const pointage = collection(db,"pointages")
    
    const [collecTestData,setCollectTestData] = useState([])
const pointageTab = [];

    
const pointages = collection(db,"pointages")

///REQUETE 

useEffect(() => {
    
      
    getDocs(pointages).then((snapshot) => {
  
      
      
      snapshot.docs.forEach((doc) => { pointageTab.push({...doc.data(), id:doc.id})
      
      
      
      })
      
    
    
      return pointageTab
  
      
        }).then(() => {  setScoreData(pointageTab)})
  
  },[])





const hours = timestamp(Date.now()).split(",")[1]
const date = dateDestructurings(iso)






//Gestion de la validation

const handleCode = (e) => {
    e.preventDefault()
    console.log("User trouvé");

    
    const userRef = document.querySelector("#message")
    const formref = document.querySelector(".form")

   ///////
   //Recherche de l'utilisateur dans la table Users         
            let  parsedCode = parseInt(code)


            let findUser = dataUser.find((element) => {return element.code === parsedCode})
   ///////////            
    
/////Condition pour savoir si l'utilisateur à déja pointé ou pas.
                if(scoreData.find((element) => { return element.userId == findUser.id})){
    
                    console.log("User trouvé dans la table pointages")
                    let findUserId = scoreData.find((element) => { return element.userId == findUser.id})
                    
    
                    
             let findAllScore = scoreData.filter((element) => {return element.userId== findUser.id})
            
    
                     //Recherche si l'user à pointé a la date du jour
    for(let property in findAllScore){
    
        let allUserScore = [findAllScore[property]];
    
        if (allUserScore.find((element) => {return element.date == date})){
            let findDateStorage = allUserScore.find((element) => {return element.date == date})
       console.log(findDateStorage.id);
       const dateStorage = findDateStorage.date;
       console.log(" déja pointer")
   
const docRef = doc(db,"pointages",findDateStorage.id)
    
    
    updateDoc(docRef, {sortie: hours}).then(() => console.log("Modification éffectuer")).then(() => {  userRef.innerHTML= `<div> <h2>${findDateStorage.name} </h2><h2> Heure de sortie : ${ hours}</h2> </div>` }).then(()=> {return formref.reset()})

    


         }else {
    
            console.log(" Pas de pointage aujourd'hui");
            let findUsers = dataUser.find((element) => {return element.code === parsedCode})
            console.log(findUsers);
  
            addDoc(pointages,{
    
                date :date,
                entrée:hours,
                name :findUsers.name,
                sortie :"",
                userId : findUsers.id 
    
            }).then(() => {
                userRef.innerHTML= `<h2> Heure d'entrée : ${ hours}</h2>`
            }).then(() => { userRef.innerHTML= ` <div> <h2>${findUser.name} </h2><h2> Heure d'entrée : ${ hours}</h2> </div>` }).then(()=> { return setTimeout(() => {window.location='/'},3000)})
    
            
    
    
    
        }
       
    
    
        
        
    
        
        
        
        
         
    }    
    
    
    
                }else {
    //ADDDOC 
    let findUsers = dataUser.find((element) => {return element.code === parsedCode})
    console.log((findUsers.name));
                    console.log(`Aucun pointage trouver pour User ` )
    
                return    addDoc(pointage,{
    
                date :date,
                entrée:hours,
                name :findUsers.name,
                
                userId : findUsers.id 
    
            }).then(() => {
                console.log("Premier Pointage éffectuer")
               
            }).then(() => { userRef.innerHTML= ` <div> <h2>${findUser.name} </h2><h2> Heure d'entrée : ${ hours}</h2> </div>` }).then(()=> { return setTimeout(() => {window.location='/'},3000)})
    
    
                }
                
                
    
    
    }
     





    return (
        
        <div>
            <form  onSubmit={handleCode} className="form"
            >
  <label htmlFor="code">Veuillez Pointer</label> <br />
      <input
        type="text"
        name="code"
        id="code"
        onChange={(e) => setCode(e.target.value)}
        value={code}
      />
      
     <input  type="submit" value="valider" />

            </form>
            <div id='message'></div>
            
         
        </div>
    );
};

export default ScoreForm;