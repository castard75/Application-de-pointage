import React, { useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import{ getDoc, getFirestore,collection, getDocs, addDoc }from "firebase/firestore";
import { useState } from 'react';
import {timestamp,dateDestructurings,iso }from "../utils/Date"
import { db } from '../config/db';
const Admin = () => {
 

          //STATE
            const [users,setUsers] = useState([]);
            const [score,setScore] = useState([0])



           //REQUÊTE 
            const pointages = collection(db,"pointages")
            const userRef = collection(db,"utilisateurs")
         
            let usersTab = [];
let pointageTab= [];
            const hours = timestamp(Date.now()).split(",")[1]

const stringHours= hours.toString()
const date = dateDestructurings(iso)

         

    

     useEffect(() => {
    
      
        getDocs(pointages).then((snapshot) => {
      
          
          
          snapshot.docs.map((doc) => { pointageTab.push({...doc.data(), id:doc.id})
          
          
          
          })
          
        
        
          return pointageTab
      
          
            }).then(() => {  setScore(pointageTab)})
      
      },[])

    
      

// for(let i = 0; i < score.length;i++)
// {
//     console.log([i].length );
// }


        //   function idDoc () {
           
        //     if (score) {
        //         let id;
        //         score.forEach((element) => { 
                    
                  
        //             id = element.id
                
        //         console.log(id)
            
        //     })

        //     }
           
        //   }

        //   idDoc()
        
          
   

        function you(){

            for (let i = 0; i<score.length;i++){
let a = [i];

console.log(a);
let tab = [5]





            }
        }        
        you()
        
        
        ///DISPLAY USERS
      
    return (
        <div className='display'>
     {score.map((user) => {

return <div className='containre'>
     <div> <span > {` name : ${user.name}`}</span>
    <div> <span> {` Pointage d'entrée : ${user.entrée}`}</span></div>
    <div> <span> {` Pointage d'entrée : ${user.sortie}`}</span></div>
     
     
     </div>
     
    
    
     </div>

     })} 
          
        </div>
    );
};

export default Admin;