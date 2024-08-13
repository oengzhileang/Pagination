import { notFound } from "next/navigation"
interface PostDetailProps{
    params : {postId : string}
}
const PostDetail = ({params} : PostDetailProps) => {
  if(parseInt(params.postId) > 50){
    notFound()
  }
  return (
    <>
        <div>Products Detail : {params.postId}</div>
    </>
  )
}

export default PostDetail
