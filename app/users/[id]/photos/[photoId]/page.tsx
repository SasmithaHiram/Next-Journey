import React from 'react'

interface Props {
    params: {id: number; photoId: number}  
}
const PhotoPage = ({params: {id, photoId}}: Props) => {
  return (
    <div>
        <h1>Photo {photoId} of user {id}</h1>
    </div>
  )
}

export default PhotoPage