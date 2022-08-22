import axios from 'axios'
import { useEffect,useState } from 'react'
import { useParams } from 'react-router'
import './Notice.css'

export const Notice = () => {
    const {username}=useParams()
    const [textvalue,settextvalue]=useState('')
    const [data,setdata]=useState([])
    useEffect(()=>{
        getData()
    },[])
    // console.log(username)

    const getData=()=>{
       axios.get(`https://crime-priya.herokuapp.com/comments`)
       .then((res)=>{
        console.log(res.data)
        setdata((res.data.comments))
       })
        
       
    }
    console.log(username)
console.log(textvalue)
    const PostNotice=()=>{
       
        const data={
            username:username,
            notice:textvalue

        }
      console.log(data,'data inside postnotice')
        axios.post(`http://localhost:5100/userPosts`,data)
        getData()
    }
  

  return (
    <div className='container'>
        <h1 className='heading'>Notice Board</h1>
    <textarea className='textclass'
    placeholder='enter your notice here' maxLength="100"
    onChange={(e)=>settextvalue(e.target.value)}></textarea>
    <br />
    <button className='buttontext' onClick={PostNotice}>submit</button>
    {data?.map((el)=>{
        return (
            <div className='main'>
                <h5 className='para'>  {el.text}</h5>
              <div className='main1'>
              <p className='para' >{el.userId.username}</p>
                <p className='para'>{el.createdAt}</p>
               
              </div>
            </div>
        )
    })}
    </div>
  )
}
