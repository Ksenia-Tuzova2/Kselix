import React from 'react'
import PostAreaStyle from './postArea.module.css'
import Box from '../../../../box.module.css'
import BtnStyle from '../../../../btn.module.css'
import NewPosts from '../newPosts/newPosts'



export const PostArea = ({ addPost, massageData, newPostText, updateNewPostText  }) => {


    var MakeNewPost = () => massageData.map((m, pos) => <NewPosts massage={m.message} pos={pos} />)



    let CreateRef = React.createRef()
    // debugger

    let AddPost = () => {
        let text = CreateRef.current.value
        addPost(text)
        CreateRef.current.value=''
    }


    let OnChange = () => {
        let text = CreateRef.current.value
        updateNewPostText(text)
    }
    //  debugger
    return (
        <div>
            <div className={PostAreaStyle.FormWrapper}>
                <textarea className={PostAreaStyle.Input + " " + Box.Box}
                    placeholder='What`s news?'
                    ref={CreateRef}
                   
                    value={newPostText}
                    onChange={OnChange}
                />


                <button className={BtnStyle.Btn}
                    onClick={AddPost}
                >post</button>

            </div>
            {MakeNewPost()}


        </div>


    )

    }
       //если написать алерт без стрелочной функции, то мы уже вызываем уже готовую функцию , которой нет, а значит она андефайнд

       //есть виртуал дом и просто дом - пользователь взаимодействует только с виртуал домом

    //сначала создаем createref=react.createref(), привязываем это к полю при помощи ref

    //потом создаем функцию addpost, которая будет считывать то, что мы написали в поле ввода

    //в ней пишем переменную, которая будет слушать значение поля createref.current.value
    //привязываем addpost к кнопке , к событию онклик
    //назначем алерт внутри add post чтобы удостоверится что все работает

    //узнать как правильно делать кнопки -
    //подумать над тем, нужна ли отдельная компонента с кнопкой, или же достаточно только модуля


