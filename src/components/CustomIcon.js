import { Icon } from "leaflet";

export const legalIcon = new Icon({
  iconUrl:
    "https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/58/external-placeholder-location-vitaliy-gorbachev-flat-vitaly-gorbachev-3.png ",
  iconSize: [35, 35], // size of the icon
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
});
