import React, { useEffect, useState } from "react";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import L, { Map } from "leaflet";
import useSWR from "swr";
import axios from "axios";
import "leaflet/dist/leaflet.css";
import businessApi from "../../lib/businessApi";

const icon = L.icon({ iconUrl: "/images/map/marker-icon.png" });

const openPopup = (marker: any) => {
  if (marker && typeof window !== "undefined") {
    window.setTimeout(() => {
      marker.openPopup();
    }, 1000);
  }
};

export default function MapDisplay() {
  const {
    data: position,
  } = useSWR(
    "https://geolocation-db.com/json/0f761a30-fe14-11e9-b59f-e53803842572",
    (url: string) => axios(url).then((r) => r.data)
  );
  const { data: locations } = useSWR(
    `/api/admin/${position?.city}`,
    businessApi.getBusinessByCity
  );

  let centerX = 49.865759;
  let centerY = -97.211811;
  let zoom = 6;
  const [map, setMap] = useState<null | Map>(null);

  useEffect(() => {
    if (locations && locations?.length > 0) {
      const longitudes = locations?.map((v: any) =>
        Number(v?.address.longitude)
      );
      const latitudes = locations?.map((v: any) => Number(v?.address.latitude));
      const pCenterX = latitudes.reduce((a: any, b: any) => a + b, 0) / 5;
      const pCenterY = longitudes.reduce((a: any, b: any) => a + b, 0) / 5;
      // const maxRadiusX = Math.max(...latitudes.map((v: any) => v - centerX));
      // const maxRadiusY = Math.max(...longitudes.map((v: any) => v - centerY));
      // const pZoom = 17 / (Math.max(maxRadiusX, maxRadiusY) / 5 + 3);
      centerX = pCenterX;
      centerY = pCenterY;
      // zoom = pZoom;
    } else {
      centerX = 49.865759;
      centerY = -97.211811;
    }
    if (map) {
      console.log(
        "🚀 ~ file: MapDisplay.tsx ~ line 78 ~ useEffect ~ zoom",
        zoom
      );

      map.setView([centerX, centerY], zoom);
    }
  }, [map]);

  return (
    <div>
      <MapContainer
        center={[centerX, centerY]}
        zoom={zoom}
        scrollWheelZoom={true}
        className="min-h-screen "
        whenCreated={setMap}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations?.map((element: any, index: number) => {
          return (
            <Marker
              icon={icon}
              position={[
                Number(element.address.latitude),
                Number(element.address.longitude),
              ]}
              key={index}
              ref={openPopup}
            >
              <Popup>
                <p>{element.businessName}</p>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}
