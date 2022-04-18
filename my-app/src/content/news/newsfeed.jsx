import React from 'react'
import { NewsPost } from './newsPost/newsPost'
const MakeNewPost = [
    {
        text: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed illo blanditiis accusamus eius, laborum aliquam deserunt atque fuga tempore ad nemo quibusdam perspiciatis recusandae quas illum maxime laudantium aspernatur. Deleniti?',
    },
    {
        text: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed illo blanditiis accusamus eius, laborum aliquam deserunt atque fuga tempore ad nemo quibusdam perspiciatis recusandae quas illum maxime laudantium aspernatur. Deleniti?',
    },
    {
        text: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed illo blanditiis accusamus eius, laborum aliquam deserunt atque fuga tempore ad nemo quibusdam perspiciatis recusandae quas illum maxime laudantium aspernatur. Deleniti?',
    },
]

let Post = MakeNewPost.map((t) => <NewsPost text={t.text} />)

const NewsFeed = (props) => {
    return (
        <div>
            {Post}
        </div>
    )
}

export default NewsFeed