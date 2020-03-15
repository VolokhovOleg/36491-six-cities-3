const convertHotels = (data) => data.map((item) => {
  const {
    city,
    images,
    title,
    rating,
    type,
    bedrooms,
    price,
    goods,
    host,
    description,
    location,
    id
  } = item;

  return {
    city: city.name,
    cityMapProps: {
      location: [city.location.latitude, city.location.longitude],
      zoom: city.location.zoom,
    },
    img: item[`preview_image`],
    gallery: images,
    price,
    title,
    description,
    type,
    bedrooms,
    maxAdults: item[`max_adults`],
    inside: goods,
    isPremium: item[`is_premium`],
    rating,
    locations: [location.latitude, location.longitude],
    host: {
      avatar: host[`avatar_url`],
      name: host.name,
      hostDescription: description,
    },
    // isFavorite: item[`is_favorite`],
    id,
  };
});

export {convertHotels};
