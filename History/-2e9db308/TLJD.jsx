const Li = ({ place }) => {
  const childPlace = place.childPlaces;
  return (
    <>
      <li>
        {place.title}
        {childPlace.length > 0 && (
          <ol>
            {childPlace.map((childPlacSingle) => (
              <Li key={childPlacSingle.id} place={childPlacSingle}></Li>
            ))}
          </ol>
        )}
      </li>
    </>
  );
};

export default Li;
