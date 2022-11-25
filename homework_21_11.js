// Создайте массив с ссылками на картинки. На основе этого массива формируется множество маленьких картинок в верхней части интерфейса. При нажатии на одну из картинок забирается ссылка на эту картинку и в нижней части интерфейса отображается в большем размере.

const nature = [
  {
    name: 'Sunset',
    photo:
      'https://media.istockphoto.com/id/1172427455/photo/beautiful-sunset-over-the-tropical-sea.jpg?s=612x612&w=0&k=20&c=i3R3cbE94hdu6PRWT7cQBStY_wknVzl2pFCjQppzTBg=',
  },
  {
    name: 'Sunrise',
    photo: 'https://wallpapercave.com/uwp/uwp2219430.jpeg',
  },
  {
    name: 'Forest',
    photo:
      'https://shotkit.com/wp-content/uploads/2020/09/forest-photography-004.jpg',
  },
  {
    name: 'Mountain',
    photo:
      'https://cdn.britannica.com/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg',
  },
];

const cars = [
  {
    name: 'Bmw',
    photo:
      'https://stimg.cardekho.com/images/carexteriorimages/930x620/BMW/X1/7625/1583398555726/front-left-side-47.jpg?tr=w-375',
  },
  {
    name: 'Mercedes',
    photo:
      'https://media.istockphoto.com/id/533227308/photo/red-sport-car-drive-speed-on-asphalt-road-at-sunset.jpg?s=612x612&w=0&k=20&c=5x29WroJbcVFI2boaJEgMgAO8IbZTeHakYYSCsOHO1E=',
  },
  {
    name: 'Toyota',
    photo:
      'https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Fortuner/8241/1609921660871/front-left-side-47.jpg?tr=w-375',
  },
  {
    name: 'Tesla',
    photo:
      'https://i2.wp.com/www.cleanfuture.co.in/wp-content/uploads/2020/09/front-left-side-47.jpg?resize=930%2C620',
  },
];

const sports = [
  {
    name: 'Football',
    photo:
      'https://cdn.fcbarcelonalatestnews.com/wp-content/uploads/2019/12/Lionel-Messi-pictures-1-scaled.jpg',
  },
  {
    name: 'Basketball',
    photo:
      'https://sportshub.cbsistatic.com/i/r/2020/02/08/121e4b15-5dc5-4f56-b61f-06fec18393e8/thumbnail/1200x675/9eda2f8b521a3e4e2cd6fe87f70adc37/lebron-james-lakers.jpg',
  },
  {
    name: 'Hockey',
    photo:
      'https://media.gettyimages.com/id/81732986/photo/ice-hockey-players-facing-off.jpg?s=612x612&w=0&k=20&c=9XQ5lQ5kNnVQ8L2gAdmNvQkyRRUDLrBpNZtKH4-aHfY=',
  },
  {
    name: 'Golf',
    photo:
      'https://media.istockphoto.com/id/1318713736/photo/golf-player-making-a-successful-stroke-links-golf.jpg?b=1&s=170667a&w=0&k=20&c=N5bAQLZLda0G64IAQKD2pntnPMHMfCxc8JVsXW38NBg=',
  },
];

const body = document.querySelector('body');
const container = document.createElement('div');
container.classList.add('container');
body.append(container);

const natureBox = document.createElement('div');
const carsBox = document.createElement('div');
const sportsBox = document.createElement('div');
const boxesContainer = document.createElement('div');
const imgMagnifierContainer = document.createElement('div');

natureBox.classList.add('box');
carsBox.classList.add('box');
sportsBox.classList.add('box');
boxesContainer.classList.add('boxes_container');
imgMagnifierContainer.classList.add('img_magnifier');

const boxNamesDiv = document.createElement('div');
const natureBoxName = document.createElement('h2');
const carsBoxName = document.createElement('h2');
const sportsBoxName = document.createElement('h2');

natureBoxName.innerText = 'Nature';
carsBoxName.innerText = 'Cars';
sportsBoxName.innerText = 'Sports';

boxNamesDiv.append(natureBoxName, carsBoxName, sportsBoxName);
container.append(boxNamesDiv, boxesContainer, imgMagnifierContainer);
boxesContainer.append(natureBox, carsBox, sportsBox);

boxNamesDiv.classList.add('box_names_div');

const imgIncrease = document.createElement('img');
imgMagnifierContainer.append(imgIncrease);

nature.forEach(({ name, photo }) => {
  const natureDiv = document.createElement('div');
  const natureName = document.createElement('p');
  const natureImg = document.createElement('img');

  natureName.innerText = `${name}`;

  natureImg.setAttribute('src', photo);
  natureImg.setAttribute('alt', 'nature');

  natureName.classList.add('name');
  natureImg.classList.add('img');

  natureDiv.append(natureName, natureImg);
  natureBox.append(natureDiv);

  natureImg.addEventListener('click', () => {
    imgIncrease.setAttribute('src', photo);
  });
});

cars.forEach(({ name, photo }) => {
  const carsDiv = document.createElement('div');
  const carsName = document.createElement('p');
  const carsImg = document.createElement('img');

  carsName.innerText = `${name}`;

  carsImg.setAttribute('src', photo);
  carsImg.setAttribute('alt', 'cars');

  carsName.classList.add('name');
  carsImg.classList.add('img');

  carsDiv.append(carsName, carsImg);
  carsBox.append(carsDiv);

  carsImg.addEventListener('click', () => {
    imgIncrease.src = photo;
  });
});

sports.forEach(({ name, photo }) => {
  const sportsDiv = document.createElement('div');
  const sportsName = document.createElement('p');
  const sportsImg = document.createElement('img');

  sportsName.innerText = `${name}`;

  sportsImg.setAttribute('src', photo);
  sportsImg.setAttribute('alt', 'sports');

  sportsName.classList.add('name');
  sportsImg.classList.add('img');

  sportsDiv.append(sportsName, sportsImg);
  sportsBox.append(sportsDiv);

  sportsImg.addEventListener('click', () => {
    imgIncrease.src = photo;
  });
});
