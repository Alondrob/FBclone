import InputBox from "./InputBox"
import Stories from "./Stories"

const Feed = () => {
    
  return (
    <div className="flex h-screen pb-44 pt-5">
        <div>
           <Stories/>
           <InputBox/>
        </div>
    </div>
  )
}

export default Feed