import React from 'react';

const AnimalSrc = [
    {id: 1, src : 'https://cosmos-magazine.imgix.net/file/spina/photo/10088/170424_Dolphin2_Full.jpg?fit=clip&w=835'},
    {id: 2, src: 'https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg'}
]

const Animal = () => { return AnimalSrc.map(({id, src}) => <img key={id} src={src} />)}


export default Animal