import {Routes, Route , Link} from 'react-router-dom'
import React from 'react'
import {DialogArea} from '../dialogArea/dialogArea'
import { DialogItem } from '../dialogItem/DialogItem'
import { Massage } from '../massage'


let path= '/DialogArea/'


 export const DialogBar=(props)=>{

    let DialogData=[
        {
            id:1,
            time:'14:56',
            name:"Sasha",
        },
        {
            id:2,
            time:'14:17',
            name:"Dasha",
        },
        {
            id:3,
            time:'12:22',
            name:"Katya",
        },
    ];

    for(i=0;i<;i++){
        
    }
    console.log(DialogData[0].name)
    //получение объкта


    let MassageData=[
        {
            massage:'Hey! How are u?' 
        },
        {
            massage:'AAAAA'
        },
        {
            massage:'Mow'
        }
    ]

    // let MakeId=DialogData.map((id)=>{
    //     let makeId
    //     return makeId=id.id
    // })
    // console.log(MakeId)
  
    // let MakeName=DialogData.map((name)=>{
    //     let MakeName=name.name
    //     return MakeName
    // })

    // let MakeTime=DialogData.map((time)=>{
    //  let MakeTime=time.time
    //  return MakeTime
    // })

    // let MakeMassage=MassageData.map((massage)=>{
    //     let MakeMassage
    //     return MakeMassage=massage.massage
    //    })

    // let MakeItem=(()=>{
    //     return <DialogItem id={MakeId} name={MakeName}  time={MakeTime}  massage={MakeMassage}/>
    // })


    let a=[1,2,3]

  console.log(a[0])

    // for(let i=0;i<a.length;i++){
    //     console.log(a[i]*2)
    // }




// console.log(MakeItem())
      return(
    
   <div className='dialogBar'>
            <Link to={path+DialogData[0].id}><DialogItem id={DialogData[0].id} name={DialogData[0].name}  time={DialogData[0].time}  massage={MassageData[0].massage}/></Link>
                <Link to='DialogArea'><DialogItem id={DialogData[1].id} name={DialogData[1].name}  time={DialogData[1].time}  massage={MassageData[1].massage}/></Link>
                <Link to='DialogArea'><DialogItem id={DialogData[2].id} name={DialogData[2].name}  time={DialogData[2].time}  massage={MassageData[2].massage}/></Link>
   </div>

      )
  }


  //не понимаю пока как написать так, чтоб работал айди - чтобы в пути отображась цифра айди и плюс переключалась на разные диалог ареи