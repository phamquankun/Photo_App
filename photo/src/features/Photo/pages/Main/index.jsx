import React from 'react';
import Banner from '../../../../components/Banner';
import Images from '../../../../constants/images';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import PhotoList from '../../components/PhotoList';
import { removePhoto } from '../../photoSlice';
import { useHistory } from 'react-router-dom'
MainPage.propTypes = {};
function MainPage(props) {
  const dispatch = useDispatch()
  const photos = useSelector(state => state.photos)
  const history = useHistory()
  const handlePhotoEditClick = (photo) => {
    const editPhotoUrl = `/photos/${photo.id}`
    history.push(editPhotoUrl)
  }
  const handlePhotoRemoveClick = (photo) => {
    console.log('Remove photo', photo)
    const removePhotoId = photo.id
    const action = removePhoto(removePhotoId)
    dispatch(action)

  }
  return (
    <div className="photo-main">
      <Banner title="Your awesome photos 🎉" backgroundUrl={Images.BLUE2_BG} />
      <Container className="text-center">
        <div className="">
        <Link to="/photos/add" style={{
          margin: '10px 0',
          display: 'block',
          textDecoration: 'none',

        }}>
          Add new photo
        </Link>
        </div>
      </Container>
      <PhotoList
        photoList={photos}
        onPhotoEditClick={handlePhotoEditClick}
        onPhotoRemoveClick={handlePhotoRemoveClick}
      />
    </div>
  );
}

export default MainPage;