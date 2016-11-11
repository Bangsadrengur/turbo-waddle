function normalizeHouses(houses) {
  return houses.map(house => ({
    image: house.image,
    street: house.address.substring(0, house.address.indexOf(',')),
    zip: /[0-9]{3}/.exec(house.address)[0],
    prize: parseInt(house.details[0].replace('.', ''), 10),
    size: parseInt(house.details[1].replace(' m²', ''), 10),
    type: house.details[2].trim(),
    roomCount: parseInt(/[0-9]+/.exec(house.details[3])[0], 10),
    description: house.description,
  }));
}

module.exports = normalizeHouses;
