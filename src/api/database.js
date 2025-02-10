import hs0001_1 from '../assets/img/hs0001_1.jpg';
import hs0001_2 from '../assets/img/hs0001_2.jpg';
import hs0002_1 from '../assets/img/hs0002_1.jpg';
import hs0002_2 from '../assets/img/hs0002_2.jpg';
import cm0001_1 from '../assets/img/cm0001_1.jpg';
import cm0001_2 from '../assets/img/cm0001_2.jpg';
import sg0001_1 from '../assets/img/sg0001_1.jpg';
import sg0001_2 from '../assets/img/sg0001_2.jpg';

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
        imageUrl1: hs0001_1,
        imageUrl2: hs0001_2,
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
        imageUrl1: hs0002_1,
        imageUrl2: hs0002_2,
    },
    {
        code: 'CM0001',
        name: 'Signed Chainsaw Man Funko Pop',
        actor: 'Богдан Яременко (Bodya500icq)',
        figureType: 'Funko Pop',
        figureName: 'Chainsaw Man 1677 Chase',
        exclusive: '-',
        certificationCode: 'CM0001',
        signatureDate: '2025-02-06',
        phrase: '<<Гав!>> З любов\'ю від Боді',
        imageUrl1: cm0001_1,
        imageUrl2: cm0001_2,
    },
    {
        code: 'SG0001',
        name: 'Signed Satoru Gojo Funko Pop',
        actor: 'Богдан Яременко (Bodya500icq)',
        figureType: 'Funko Pop',
        figureName: 'Satoru Gojo 1137',
        exclusive: 'Chalice Collectibles',
        certificationCode: 'SG0001',
        signatureDate: '2025-02-06',
        phrase: '<<Нє, я переможу>> Ніколи не здавайся від Боді',
        imageUrl1: sg0001_1,
        imageUrl2: sg0001_2,
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