const Li = ({ place }) => {
  const childPlace = place.childPlaces;
  return (
    <>
      <li>{place.title}</li>
    </>
  );
};

export default Li;
