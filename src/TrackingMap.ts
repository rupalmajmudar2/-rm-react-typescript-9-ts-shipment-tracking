//To hide googlemaps from other devs using our map!
//import { Destination } from "./Destination";
//import { Cargo } from "./Cargo";
//Dual nature. Dest, Cargo are references as well as types.

export interface Entity {
    location: {
        lat: number;
        lon: number;
    };
    popupText(): string;
}

export class TrackingMap {
    private googleMap: google.maps.Map;

    constructor(elementId: string) { //e.g. g-map
        this.googleMap = new google.maps.Map(document.getElementById(elementId), {
            zoom: 1.6,
            center: {
                lat: 0,
                lng: 20
            }
        });
    }

    attachMarker(entity: Entity) : void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: entity.location.lat,
                lng: entity.location.lon
            }
        });

        marker.addListener('click', () => {
            const popup = new google.maps.InfoWindow({
                content: entity.popupText(),
            });

            popup.open(this.googleMap, marker);
        });
    }
}