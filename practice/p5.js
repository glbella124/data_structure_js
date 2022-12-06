let v = {
  geojson:
    '{"type":"Feature","properties":{"title":"土地资源","desc":"676","featureType":"线"},"geometry":{"coordinates":[[[31.269019284396425,121.34811401367189],[31.171486528879445,121.35223388671876],[31.314813157857174,121.44424438476564]]],"type":"LineString"}}',
  id: 11,
  type: 1,
};

let data = JSON.parse(v.geojson);
// console.log(data, "title");
console.log(data.properties.title, "描述");
console.log(data.geometry.coordinates[0][0]);
