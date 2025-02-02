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
        imageUrl1: '/img/hs1.jpg',
        imageUrl2: '/img/hs2.jpg',
    },
    {
        code: 'HS0002',
        name: 'Signed Homer Simpson Funko Pop',
        actor: 'Малуха Євген',
        figureType: 'Funko Pop',
        figureName: 'Mr. Plow 910',
        exclusive: 'Hot Topic',
        certificationCode: 'HS0002',
        signatureDate: '2024-09-11',
        phrase: 'Ще один день на роботі - ще одна вкрадена ручка',
        imageUrl1: '/img/mrplow1.jpg',
        imageUrl2: '/img/mrplow2.jpg',
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