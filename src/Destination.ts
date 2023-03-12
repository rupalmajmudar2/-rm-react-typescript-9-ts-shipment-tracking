import { faker } from '@faker-js/faker';
import { Entity } from './TrackingMap';

//We DON'T need to specify that this implements Entity!
//aka Implicit-Check : done by TS
export class Destination implements Entity {
    receiver: string;
    location: {
        lat: number;
        lon: number;
    }

    constructor() {
        this.receiver = faker.name.firstName();
        this.location = {
            lat: +faker.address.latitude(), //+ makes str to number!
            lon: +faker.address.longitude()
        }
    }

    popupText(): string {
        return `<h3>Receiver Name: ${this.receiver}</h3>`
    }
}