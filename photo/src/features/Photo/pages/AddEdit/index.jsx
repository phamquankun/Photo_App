import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Banner from '../../../../components/Banner';
import PhotoForm from '../../components/PhotoForm';
import { addPhoto, updatePhoto } from '../../photoSlice';
import './styles.scss';
import { useParams } from 'react-router-dom'
import Images from '../../../../constants/images';
import { toast } from 'react-toastify';
AddEditPage.propTypes = {};

function AddEditPage(props) {
  const dispatch = useDispatch()
  const history = useHistory()
  const { photoId } = useParams()
  const isAddMode = !photoId
  const editPhoto = useSelector(state => state.photos.find(x => x.id === +photoId))
  const initialValues = isAddMode
    ? {
      title: '',
      categoryId: null,
      photo: ''
    }
    : editPhoto
  const handleSubmit = (values) => {
    return new Promise(resolve => {
      console.log('check values', values);
      setTimeout(() => {
        if (isAddMode) {
          const action = addPhoto(values)
          console.log({ action })
          dispatch(action)

        } else {
          const action = updatePhoto(values)
          dispatch(action)
        }
        toast.success('Thành công')
        history.push('/photos')
        resolve(true);
      }, 1000)
    })
  }
  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing photo 😎" backgroundUrl={Images.SUNSHINE_BG} />

      <div className="photo-edit__form">
        <PhotoForm
          isAddMode={isAddMode}
          initialValues={initialValues}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default AddEditPage;