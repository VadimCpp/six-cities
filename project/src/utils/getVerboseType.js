function getVerboseType(type) {
  const values = {
    'apartment': 'Apartment',
    'room': 'Private Room',
    'house': 'House',
    'hotel': 'Hotel',
  };

  return values[type] || 'Unknown';
}

export default getVerboseType;
