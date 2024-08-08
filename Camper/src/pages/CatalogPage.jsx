import { useEffect, useState } from "react";
import axios from "axios";
import CamperCard from "../components/CamperCard";
import Modal from "../components/Modal";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../redux/actions";
import styles from "./CatalogPage.module.css";

const CatalogPage = () => {
  const [campers, setCampers] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedCamper, setSelectedCamper] = useState(null);
  const [filters, setFilters] = useState({
    location: "",
    equipment: [],
    type: "",
  });
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`https://66b38b147fba54a5b7ed5937.mockapi.io/camper/adverts`)
      .then((response) => setCampers([...campers, ...response.data]))
      .catch((error) => console.error(error));
  });

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const handleFavorite = (camper) => {
    if (favorites.some((fav) => fav._id === camper._id)) {
      dispatch(removeFavorite(camper._id));
    } else {
      dispatch(addFavorite(camper));
    }
  };

  const handleShowMore = (camper) => {
    setSelectedCamper(camper);
  };

  const handleCloseModal = () => {
    setSelectedCamper(null);
  };

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFilters({
        ...filters,
        equipment: checked
          ? [...filters.equipment, value]
          : filters.equipment.filter((item) => item !== value),
      });
    } else {
      setFilters({ ...filters, [name]: value });
    }
  };

  const filteredCampers = campers.filter((camper) => {
    const matchesLocation =
      filters.location === "" || camper.location.includes(filters.location);
    const matchesEquipment = filters.equipment.every((equipment) =>
      camper.equipment.includes(equipment)
    );
    const matchesType = filters.type === "" || camper.type === filters.type;
    return matchesLocation && matchesEquipment && matchesType;
  });

  return (
    <div>
      <h1 className={styles.title}>Каталог Кемперів</h1>
      <div>
        <div className={styles.locationInputContainer}>
          <label className={styles.locationLabel}>Location</label>
          <input
            type="text"
            id="location-input"
            className={styles.locationInput}
            placeholder="City"
          />
        </div>
        <div className={styles.filtersContainer}>
          <label className={styles.filterLabel}>Filters</label>
          <div className={styles.filterBox}>
            <h3>Vehicle Equipment</h3>
            <div className={styles.iconsContainer}>
              <div className={styles.iconItem}>
                <img src="icon1.png" alt="Icon 1" />
                <span>Equipment 1</span>
              </div>
              <div className={styles.iconItem}>
                <img src="icon2.png" alt="Icon 2" />
                <span>Equipment 2</span>
              </div>
              <div className={styles.iconItem}>
                <img src="icon3.png" alt="Icon 3" />
                <span>Equipment 3</span>
              </div>
              <div className={styles.iconItem}>
                <img src="icon4.png" alt="Icon 4" />
                <span>Equipment 4</span>
              </div>
              <div className={styles.iconItem}>
                <img src="icon5.png" alt="Icon 5" />
                <span>Equipment 5</span>
              </div>
              <div className={styles.iconItem}>
                <img src="icon6.png" alt="Icon 6" />
                <span>Equipment 6</span>
              </div>
            </div>
          </div>

          <div className={styles.filterBox}>
            <h3>Vehicle Type</h3>
            <div className={styles.iconsContainer}>
              <div className={styles.iconItem}>
                <img src="car-icon.png" alt="Car" />
                <span>Car</span>
              </div>
              <div className={styles.iconItem}>
                <img src="suv-icon.png" alt="SUV" />
                <span>SUV</span>
              </div>
              <div className={styles.iconItem}>
                <img src="truck-icon.png" alt="Truck" />
                <span>Truck</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          {filteredCampers.map((camper) => (
            <CamperCard
              key={camper._id}
              camper={camper}
              isFavorite={favorites.some((fav) => fav._id === camper._id)}
              onFavorite={handleFavorite}
              onShowMore={() => handleShowMore(camper)}
            />
          ))}
        </div>
        <button onClick={handleLoadMore}>Load more</button>
        {selectedCamper && (
          <Modal camper={selectedCamper} onClose={handleCloseModal} />
        )}
      </div>
    </div>
  );
};

export default CatalogPage;
