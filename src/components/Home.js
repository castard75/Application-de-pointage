import React from 'react';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{ getDoc, getFirestore,collection, getDocs,addDoc }from "firebase/firestore";
import { useEffect, useState } from 'react';
// import ScoreForm from './ScoreForm';
import {timestamp,dateDestructurings,iso }from "../utils/Date"
import { db } from '../config/db';

const Home = () => {

  
      const utilisateurs = collection(db, "utilisateurs");
      const pointage = collection(db,"pointage");
      const pointages = collection(db,"pointages")
      
    
    //STATES
      const [userData,setUserData] = useState([])
    const [score,setScore] = useState([])

 

   
    
      let pointageTab = [];
      let utilisateursTab = [];
    
//Ajout d'un utilisateur dans la base 

const hours = timestamp(Date.now()).split(",")[1]
// console.log(hours)
const stringHours= hours.toString()
const date = dateDestructurings(iso)

            // useEffect(() => {
            //     addDoc(pointages, {
            //       name : "lucia",
            //       date :date,
            //       entrée : stringHours,
            //       sortie : "16h00",
            //       userId: "pWlX9jXp1CsXh4P7YpS2"
                   
            //                    }).then(() => console.log("okay"))
                   

            // },[]);





     //Requête vers la base de données pour récupéré les utilistateurs
    

    useEffect(() => {
    
      
      getDocs(pointages).then((snapshot) => {
    
        
        
        snapshot.docs.forEach((doc) => { pointageTab.push({...doc.data(), id:doc.id})
        
        
        
        })
        
      
      
        return pointageTab
    
        
          }).then(() => {  setScore(pointageTab)})
    
    },[])
    
   
    //Requête vers la base de données pour récupéré les utilistateurs
     useEffect(() =>{
      
      let users = [];
        getDocs(utilisateurs).then((snapshot) => {
       
              
               
           snapshot.docs.forEach((doc) => {  utilisateursTab.push({...doc.data(), id:doc.id})
           
           
           
           })
           
          
          return users  = utilisateursTab
           
           
           
         
             }).then(() => { setUserData(users)})},[])





    return (
        
 <> 
 {/* <ScoreForm dataUser={userData} scoreData={score}/> */}
 
 </>
      
    );
};

export default Home;