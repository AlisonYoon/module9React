import React from 'react';

const AnimalSrc = [
    {id: 1, src : 'https://cosmos-magazine.imgix.net/file/spina/photo/10088/170424_Dolphin2_Full.jpg?fit=clip&w=835', alt: 'Dolphine'},
    {id: 2, src: 'https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg', alt: 'Dog'}
]

const Animal = () => { return AnimalSrc.map(({id, src, alt}) => <img key={id} src={src} alt={alt} />)}


export default Animal