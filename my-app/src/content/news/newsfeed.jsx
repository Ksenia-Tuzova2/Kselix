import NewPosts from '../profile/posts/newPosts/newPosts'

export const NewsFeed = (props) => {

    let MakeNewPost = props.massageData.map((m,pos) => <NewPosts massage={m.massage} key={m.id} pos={pos}/>)
    return (
        <div>
          {MakeNewPost}
        </div>
    )
}
