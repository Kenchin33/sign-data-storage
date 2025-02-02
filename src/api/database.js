import hs1 from '../assets/img/hs1.jpg';
import hs2 from '../assets/img/hs2.jpg';
import mrplow1 from '../assets/img/mrplow1.jpg';
import mrplow2 from '../assets/img/mrplow2.jpg';

const database = [
    {
        code: 'HS0001',
        name: 'Signed Homer Simpson Funko Pop',
        actor: 'Малуха Євген',
        figureType: 'Funko Pop',
        figureName: 'Homer in Hedges 1252',
        exclusive: 'Entertainment Earth',
        certificationCode: 'HS0001',
        signatureDate: '2024-09-11',
        phrase: 'Спроба - перший крок до провалу.',
        imageUrl1: hs1,
        imageUrl2: hs2,
    },
    {
        code: 'Ярік момент',
        name: 'Signed Homer Simpson Funko Pop',
        actor: 'Малуха Євген',
        figureType: 'Funko Pop',
        figureName: 'Mr. Plow 910',
        exclusive: 'Hot Topic',
        certificationCode: 'HS0002',
        signatureDate: '2024-09-11',
        phrase: 'Ще один день на роботі - ще одна вкрадена ручка',
        imageUrl1: mrplow1,
        imageUrl2: mrplow2,
    },
];


export const fetchFigureData = (code) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const figure = database.find((item) => item.code === code);
            if(figure){
                resolve(figure);
            } else {
                reject('Certificate not found');
            }
        }, 2000);
    });
};