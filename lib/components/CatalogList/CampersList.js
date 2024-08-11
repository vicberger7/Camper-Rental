import { CampersItem } from '../CampersItem/CampersItem';
import { Button, List, Wrapper } from './CampersList.styled';
import { useState } from 'react';
export const CampersList = ({
  campers,
  pathForModal
}) => {
  const [loadedCount, setLoadedCount] = useState(4);
  const perPage = 4;
  const currentCampers = campers.slice(0, loadedCount);
  const loadMore = () => {
    setLoadedCount(loadedCount + perPage);
  };
  return /*#__PURE__*/React.createElement(Wrapper, null, /*#__PURE__*/React.createElement(List, null, currentCampers.map(camper => /*#__PURE__*/React.createElement(CampersItem, {
    key: camper._id,
    camper: camper,
    pathForModal: pathForModal
  }))), loadedCount < campers.length && /*#__PURE__*/React.createElement(Button, {
    onClick: loadMore
  }, "Load more"));
};