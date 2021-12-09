import React, { useState } from 'react'
import axios from 'axios'
import AddAPhoto from '@mui/icons-material/AddAPhoto'
import { toast } from 'react-toastify'

const EditProfileImage = (props) => {
  const [yes, setYes] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
  }
  const addPic = (pic) => {
    // console.log(pic)
    if (pic) {
      if (
        pic.type.includes('jpeg') ||
        pic.type.includes('png') ||
        pic.type.includes('jpg')
      ) {
        if (pic.size <= 500000) {
          getBase64(pic).then((result) => {
            pic['base64'] = result
            const headers = {
              authorization: `Bearer ${localStorage.getItem('token')}`,
            }
            const data = {
              image: result,
            }
            console.log(data)
            axios
              .post(
                'https://eventplanningweb.herokuapp.com/auth/users/editimage',
                data,
                {
                  headers: headers,
                }
              )
              .then((res) => {
                console.log(res.data)
                if (res.data.hasError === false) {
                  console.log(res.data)
                  toast.success('Successfully updated')
                  localStorage.setItem('image', res.data.image)
                  setYes(!yes)
                  // window.location.reload()
                } else {
                  toast.error(res.data.message)
                }
              })
              .catch((res) => {
                toast.error('Unable to update')
              })
          })
        } else {
          toast.warn('Image should be 500kb or less')
        }
      } else {
        toast.warn('Picture must be in JPEG, PNG or JPG format')
      }
    }
  }

  const getBase64 = (file) => {
    return new Promise((resolve) => {
      // let fileInfo
      let baseURL = ''
      // Make new FileReader
      let reader = new FileReader()

      // Convert the file to base64 text
      reader.readAsDataURL(file)

      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        // console.log('Called', reader)
        baseURL = reader.result
        resolve(baseURL)
      }
    })
  }

  return (
    <div className='merge'>
      <AddAPhoto className='the-icon' />
      <form onSubmit={handleSubmit}>
        <label className='add-profile-image'>
          c
          <input type='file' onChange={(e) => addPic(e.target.files[0])} />
        </label>
      </form>
    </div>
  )
}

export default EditProfileImage
