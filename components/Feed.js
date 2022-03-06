import InputBox from "./InputBox"
import Stories from "./Stories"
import Posts from "./Posts"

const Feed = ({posts}) => {
    
  return (
    <div className="flex h-screen pb-44 pt-5">
        <div>
           <Stories/>
           <InputBox/>
           <Posts posts={posts}/>
        </div>
    </div>
  )
}

export default Feed