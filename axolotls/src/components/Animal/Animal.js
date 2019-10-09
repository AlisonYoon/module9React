import React from 'react';
import './Animal.css';

const AnimalSrc = [
    {id: 1, src : 'https://cosmos-magazine.imgix.net/file/spina/photo/10088/170424_Dolphin2_Full.jpg?fit=clip&w=835', alt: 'Dolphine'},
    {id: 2, src: 'https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg', alt: 'Dog'},
    {id: 3, src: 'https://timesofindia.indiatimes.com/thumb/msid-67586673,width-800,height-600,resizemode-4/67586673.jpg', alt: 'Cat'},
    {id:4, src: 'https://i.pinimg.com/originals/5a/5d/52/5a5d52431ea19c03e5f4c0f3943ba52c.jpg', alt: 'Lesser Panda'},
    {id: 5, src: 'http://www.alaskabearsandwolves.com/wp-content/uploads/2019/05/china-0366.jpg', alt: 'Panda'}
]

const Animal = () => { return AnimalSrc.map(({id, src, alt}) => <img className="animal-img" key={id} src={src} alt={alt} />)}


export default Animal