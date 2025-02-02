const database = [
    {
        code: 'HS0002',
        name: 'Signed Homer Simpson Funko Pop',
        actor: 'Малуха Євген',
        figureName: 'Funko Pop Mr. Plow 910 Hot Topic Exclusive',
        certificationCode: 'HS0002',
        signatureDate: '2024-08-25',
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