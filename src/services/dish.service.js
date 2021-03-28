import salmon from '../assets/images/salmon.png'
import salmonMobile from '../assets/images/salmon-mobile.jpg'
import mousse from '../assets/images/mousse.png'
import mousseMobile from '../assets/images/mousse-mobile.jpg'
import filet from '../assets/images/filet.png'
import filetMobile from '../assets/images/filet-mobile.jpg'

export default {
    getDishes
}
const gDishes = [
    {
        title: 'Seared Salmon Fillet',
        desc: 'Our locally sourced salmon served with a refreshing buckwheat summer salad.',
        imgUrl: isMobile ? salmonMobile : salmon
    },
    {
        title: 'Rosemary Filet Mignon',
        desc: 'Our prime beef served to your taste with a delicious choice of seasonal sides.',
        imgUrl: isMobile ? filetMobile : filet
    },
    {
        title: 'Summer Fruit Chocolate Mousse',
        desc: 'Creamy mousse combined with summer fruits and dark chocolate shavings.',
        imgUrl: isMobile ? mousseMobile : mousse
    },
]
function getDishes() {
    return gDishes
};
function isMobile() {
    return window.innerWidth < 1450
}
