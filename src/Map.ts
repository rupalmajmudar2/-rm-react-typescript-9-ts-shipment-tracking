import { faker } from '@faker-js/faker';

export class Map {
    trackingId: string;
    location: {
        lat: number;
        lon: number;
    }

    constructor() {
        this.trackingId = faker.datatype.uuid();
        this.location = {
            lat: +faker.address.latitude(), //+ makes str to number!
            lon: +faker.address.longitude()
        }
    }
}