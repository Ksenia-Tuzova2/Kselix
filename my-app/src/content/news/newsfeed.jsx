import NewPosts from '../profile/posts/newPosts/newPosts'

export const NewsFeed = (props) => {

    let MakeNewPost = props.massageData.map((m) => <NewPosts massage={m.massage} />)
    return (
        <div>
          {MakeNewPost}
        </div>
    )
}
