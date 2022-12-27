import { useState } from 'react'
import axios from 'axios'


async function postImage({image, description}) {
  const formData = new FormData();
  formData.append("image", image)
  formData.append("description", description)

  const result = await axios.post('/images', formData,
  { headers: {'Content-Type': 'multipart/form-data'}})
  return result.data
}


const FileUpload = () => {
  const [file, setFile] = useState()
  const [description, setDescription] = useState("")
  const [images, setImages] = useState([])

  const submit = async event => {
    event.preventDefault()
    const result = await postImage({image: file, description})
    setImages([result.location, ...images])
    console.log(result)
    setImages(result)
    console.log(images)
  }

  const fileSelected = event => {
    const file = event.target.files[0] 
    setFile(file)
  }
  return (
    <div className="App">
      <form onSubmit={submit}>
        <input onChange={fileSelected} type="file" accept="image/*"></input>
        <input value={description} onChange={e => setDescription(e.target.value)} type="text"></input>
        <button type="submit">Submit</button>
      </form>

      

      <img src={'https://qr-s3-file-upload.s3.ap-south-1.amazonaws.com/'+JSON.stringify(images.imagePath)}></img>
      <img src='https://qr-s3-file-upload.s3.ap-south-1.amazonaws.com/a6cf78f1ae1b7e519595461694cb2c57'></img>

    </div>
  )
}

export default FileUpload

// { images.map( (image) => (
//   <div key={image}>
//     <img src={image}></img>
//   </div>
// ))}