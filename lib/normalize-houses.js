function normalizeHouses(houses) {
  return houses.map(house => ({
    image: house.image,
    street: house.address.substring(0, house.address.indexOf(',')),
    'postal-code': /[0-9]{3}/.exec(house.address)[0],
    price: parseInt(house.details[0].replace('.', ''), 10),
    'square-meters': parseInt(house.details[1].replace(' m²', ''), 10),
    type: house.details[2].trim(),
    'no-rooms': house.details[3] ? parseInt(/[0-9]+/.exec(house.details[3]), 10) : -1,
    description: house.description,
  }));
}

module.exports = normalizeHouses;
