export default class Adapter {
  static convertHotels(data) {
    return data.map((item) => {
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
          isPro: host[`is_pro`],
        },
        isFavorite: item[`is_favorite`],
        id,
      };
    });
  }

  static convertComments(data) {
    return data.map((item) => {
      const {
        comment,
        date,
        id,
        rating,
        user,
      } = item;
      return {
        text: comment,
        userRate: rating,
        userName: user.name,
        date,
        id,
        isPro: user[`is_pro`],
        avatar: user[`avatar_url`],
        userID: user.id,
      };
    });
  }

  static convertUser(data) {
    const {id, email, name} = data;
    return {
      id,
      email,
      name,
      avatarUrl: data[`avatar_url`],
      isPro: data[`is_pro`],
    };
  }
}
