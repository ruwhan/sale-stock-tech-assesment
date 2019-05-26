import "whatwg-fetch";
import faker from "faker";

const generateDummyItem = () => {
  const id = (Math.random() * new Date().getTime());
  return {
    id,
    title: faker.commerce.productName(),
    material: faker.commerce.productMaterial(),
    price: faker.commerce.price(),
    availableSize: ['S', 'M', 'L', 'XL'],
    images: [
      'https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-9/54525755_2143573859269029_871870161995431936_n.jpg?_nc_cat=103&_nc_eui2=AeFK13H-MSy-tNcewXDdCDta4IB5JOSnqmqek-drmDGgcZgUY2ylQEhgkRc9DON0sVVX0pECvgI83rJoykjeA8tu-phXbGJbcDH2KMToF2f-nA&_nc_ht=scontent-sin6-2.xx&oh=2f709cae38bc0fa61e4cd87582458b90&oe=5D0D4C0A',
      'https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-9/54729750_2143573892602359_4918136607921405952_n.jpg?_nc_cat=102&_nc_eui2=AeE8w24RJ0sGvPwS5YpSI39IFLOHaaXIHFkTtOMVv-iMrF0IkFZhzHklEzH_f5lSzuhwg0v4iCYWWGhKtcPTzYYnvmoBE7rdYVdtko8GK03RFQ&_nc_ht=scontent-sin6-2.xx&oh=09db49299ffe4d512740c7fb8211f9f3&oe=5D43F1CF',
      'https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-9/54433883_2143575905935491_114876369279647744_n.jpg?_nc_cat=108&_nc_eui2=AeEUayvKIbSKnoTc0gYDwmgRxkrJ9b-VFMwC9SEFETmeAfhmPPXKbAYxeg0bOt7zuy_xOKP44SC6WDdqpYpSFrdjEoIKMIW577uck2ivyr9HvQ&_nc_ht=scontent-sin6-2.xx&oh=8074dd01bf173f89184623ce613e96f2&oe=5D42371C',
      'https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-9/55512110_2143575929268822_4204908815419703296_n.jpg?_nc_cat=105&_nc_eui2=AeGpTXHvwYcqc9u2K6rVkzURH7Jr1v_v1BZEFHxGDqSieKPnE1U4JfJQh0YdHY6Amoz6Hv0k1EkWIlyFP52_ZoKKgifs3448ZhEJCvBCCuToWg&_nc_ht=scontent-sin6-2.xx&oh=40d1833d25c767661028f0a4343055fb&oe=5D3FBEF7',
    ]
  }
}

class Items {
  static async get() {
    const dummyData = []
    for (let i = 0; i < 10; i++) {
      dummyData.push(generateDummyItem());
    }

    const p = new Promise((resolve) => {
      setTimeout(() => {
        resolve(dummyData);
      }, 250);
    });

    return p;
  }
}

export default Items;
