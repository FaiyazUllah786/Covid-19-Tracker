import "leaflet/dist/leaflet.css";
import { useQuery } from "@tanstack/react-query";
import { legalIcon } from "../components/CustomIcon";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Spinner from "./Spinner";
import { Icon } from "leaflet";

function Map() {
  const { isPending, error, data } = useQuery({
    queryKey: ["repoDataMap"],
    queryFn: () =>
      fetch("https://disease.sh/v3/covid-19/countries#").then((res) =>
        res.json()
      ),
  });

  if (isPending)
    return (
      <div className="absolute top-96 left-1/2">
        <Spinner />
      </div>
    );

  if (error) return <>"An error has occurred: " + {error.message}</>;

  if (data) console.log(data);

  return (
    <>
      <div className="">
        <MapContainer
          className="h-screen w-screen"
          center={[20, 77]}
          zoom={5}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {data.map((elem) => (
            <Marker
              icon={
                new Icon({
                  iconUrl: elem.countryInfo.flag,
                  iconSize: [35, 25], // size of the icon
                  iconAnchor: [0, 0], // point of the icon which will correspond to marker's location
                  popupAnchor: [0, 0], // point from which the popup should open relative to the iconAnchor
                })
              }
              key={elem.country}
              position={[elem.countryInfo.lat, elem.countryInfo.long]}
            >
              <Popup>
                <div>
                  <span className="font-bold font-serif ">Country: </span>
                  {elem.country}
                </div>
                <div>
                  <span className="font-bold font-serif">Acitve Cases: </span>
                  {elem.active}
                </div>
                <div>
                  <span className="font-bold font-serif">
                    Recovered Cases:{" "}
                  </span>
                  {elem.recovered}
                </div>
                <div>
                  <span className="font-bold font-serif">Deaths: </span>{" "}
                  {elem.deaths}
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </>
  );
}

export default Map;
