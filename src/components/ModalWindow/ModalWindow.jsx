/* eslint-disable react/prop-types */
import Modal from 'react-modal';
import {
  AdditionalNavigation,
  CloseModalBtn,
  ContentWrapper,
  Description,
  Image,
  ImageWrapper,
  LocationIcon,
  LocationText,
  Name,
  NameWrapper,
  Price,
  RatingIcon,
  RatingReviews,
  RationLocationLine,
  StyledLink,
} from './ModalWindow.styled';
import sprite from '../../assets/sprite.svg';
import { Outlet, useParams } from 'react-router-dom';
import { Suspense, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCampersById } from '../../redux/catalog/operations';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(17, 18, 19, 0.4)',
  },
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    borderRadius: '20px',
    padding: '40px 16px 40px 40px',
    width: '982px',
    height: '720px',
    overflowY: 'hidden',
  },
};

const ImageModal = ({ isOpen, onRequestClose, imageSrc }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        ...customStyles,
        content: {
          ...customStyles.content,
          width: '80%',  // Make this modal narrower for better image fit
          height: '80%', // Make it taller to better display the image
          padding: '10px',
        },
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <img src={imageSrc} alt="Enlarged view" style={{ width: '100%', height: 'auto' }} />
      </div>
    </Modal>
  );
};





const ModalWindow = ({ isOpen, onRequestClose, camperInfo, pathForModal }) => {
  const { camperId } = useParams();
  const dispatch = useDispatch();

  const [isImageModalOpen, setIsImageModalOpen] = useState(false);  // State for image modal
const [selectedImage, setSelectedImage] = useState('');  // Store selected image

  useEffect(() => {
    dispatch(getCampersById(camperId));
  }, [camperId, dispatch]);

  const { name, price, rating, location, description, gallery, reviews } =
    camperInfo;

    const handleImageClick = (imageUrl) => {
      setSelectedImage(imageUrl);  // Set the image to be displayed in the modal
      setIsImageModalOpen(true);  // Open the image modal
    };
    
    const handleCloseImageModal = () => {
      setIsImageModalOpen(false);  // Close the image modal
    };
    
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        style={customStyles}
      >
        <ContentWrapper>
          <div>
            <NameWrapper>
              <Name>{name}</Name>
              <CloseModalBtn onClick={() => onRequestClose()}>
                <use href={`${sprite}#icon-close`}></use>
              </CloseModalBtn>
            </NameWrapper>
            <RationLocationLine>
              <RatingReviews>
                <RatingIcon>
                  <use href={sprite + '#icon-star'} />
                </RatingIcon>
                {rating} ({reviews.length} Reviews)
              </RatingReviews>
              <LocationText>
                <LocationIcon>
                  <use href={sprite + '#icon-location'} />
                </LocationIcon>
                {location.split(', ').reverse().join(', ')}
              </LocationText>
            </RationLocationLine>
            <Price>
              €{price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, '')}
            </Price>

            <ImageWrapper>

              {/* <Image src={gallery[0]} alt={name} />
              <Image src={gallery[1]} alt={name} />
              <Image src={gallery[2]} alt={name} /> */}

{gallery.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={name}
                  onClick={() => handleImageClick(image)} // Trigger the image modal on click
                />
              ))}

            </ImageWrapper>
            <Description>{description}</Description>
          </div>
          <AdditionalNavigation>
            <StyledLink to={`/${pathForModal}/${camperInfo._id}/features`}>
              Features
            </StyledLink>
            <StyledLink to={`/${pathForModal}/${camperInfo._id}/reviews`}>
              Reviews
            </StyledLink>
          </AdditionalNavigation>
          <Suspense>
            <Outlet />
          </Suspense>
        </ContentWrapper>
      </Modal>

         {/* Image Modal for Enlarged View */}
         <ImageModal
        isOpen={isImageModalOpen}
        onRequestClose={handleCloseImageModal}
        imageSrc={selectedImage}
      />

    </div>
  );
};

Modal.setAppElement('#root');

export default ModalWindow;