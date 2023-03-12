import { Destination } from './Destination';
import { Cargo } from './Cargo';
import { TrackingMap } from './TrackingMap';

const destination = new Destination();
console.log(destination);

const cargo = new Cargo();
console.log(cargo);

const trackingMap = new TrackingMap('g-map');
trackingMap.attachMarker(destination);
trackingMap.attachMarker(cargo);


/*const createDiv = function () {
    const div = document.createElement('div');
    const statement = document.createTextNode('Cargo Tracking App2');
    div.append(statement);

    document.body.appendChild(div);
};

createDiv();*/