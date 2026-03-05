import React from 'react'

interface Props{
    params: {id: number, photoid : number}
}

const PhotosPage = ({params:{id, photoid}} : Props) => {
  return (
    <div>PhotosPage {id} {photoid}</div>
  )
}

export default PhotosPage