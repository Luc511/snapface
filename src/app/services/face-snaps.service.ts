import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { FaceSnap } from "../face-snap/models/face-snap.model";

@Injectable({
    providedIn: 'root'
})

export class FaceSnapsService{


    faceSnaps: FaceSnap[] = [
        {id: 1,
        title: 'CarMan',
        description: 'Voiture qui roule',
        imageUrl: 'https://cdn.pixabay.com/photo/2022/11/24/15/18/car-7614510_1280.jpg',
        createdDate: new Date(),
        snaps: 6,
        location: 'Paris'},
  
        {id: 2,
        title: 'Car interior',
        description:  'Interieur Mercedes',
        imageUrl: 'https://cdn.pixabay.com/photo/2022/08/28/19/39/steering-wheel-7417390_1280.jpg',
        createdDate: new Date(),
        snaps: 4,
        location: 'Les alpes'},
  
        {id: 3,
        title: 'Street',
        description: 'Rue longue exposition',
        imageUrl: 'https://cdn.pixabay.com/photo/2022/12/01/14/46/city-7629244_1280.jpg',
        createdDate: new Date(),
        snaps: 10},
        
        {id: 4,
        title: 'CarMan',
        description: 'Voiture qui roule',
        imageUrl: 'https://cdn.pixabay.com/photo/2022/11/24/15/18/car-7614510_1280.jpg',
        createdDate: new Date(),
        snaps: 1,
        location: 'Paris'},
  
        {id: 5,
        title: 'Car interior',
        description:  'Interieur Mercedes',
        imageUrl: 'https://cdn.pixabay.com/photo/2022/08/28/19/39/steering-wheel-7417390_1280.jpg',
        createdDate: new Date(),
        snaps: 1,
        location: 'Les alpes'},
  
        {id: 6,
        title: 'Street',
        description: 'Rue longue exposition',
        imageUrl: 'https://cdn.pixabay.com/photo/2022/12/01/14/46/city-7629244_1280.jpg',
        createdDate: new Date(),
        snaps: 1}];

    getAllFaceSnaps(): FaceSnap[]{
        return this.faceSnaps;
    }

    getFaceSnapById(id: number): FaceSnap{
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === id);
        if (!faceSnap) {
            throw new Error('FaceSnap not found');
        }else {
            return faceSnap;
        }
    }

    snapFaceSnapById(id: number, snapType: 'snap' | 'unsnap'): void{
        const faceSnap = this.getFaceSnapById(id);
        snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
    }
  

}