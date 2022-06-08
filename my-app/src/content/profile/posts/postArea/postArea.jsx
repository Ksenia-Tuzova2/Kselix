import React from 'react'
import PostAreaStyle from './postArea.module.css'
import Box from '../../../../box.module.css'
import Btn from '../../../../btn/btn.module.css'



const PostArea = ({addPost }) => {

    let MakeRef = React.createRef()
    // debugger
    let AddPost = () => {
        let text = MakeRef.current.value
        addPost(text)
    }
    return (
        <form action='#' method='get' className={PostAreaStyle.Form}>
            <input type="text" className={PostAreaStyle.Input + " " + Box.Box}
                placeholder='What`s news?' ref={MakeRef}/>
            <button onClick={AddPost} className={PostAreaStyle.Btn + " " + Btn.Btn}
            >post</button>
        </form>
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
export default PostArea