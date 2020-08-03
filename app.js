const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.querySelector('.count')
const total = document.querySelector('.total')
const filmSelect = document.querySelector('#film-select');
let ticketPrice = +filmSelect.value;

populateUI()

container.addEventListener('click', function(e){
  if (e.target.classList.contains('seat')&& !e.target.classList.contains('occupied')) {
    e.target.classList.toggle('selected')
    updateSelectedCount();
  }
});


filmSelect.addEventListener('change' , function(e){
  ticketPrice = e.target.value;
  updateSelectedCount();
  setFilmData(e.target.selectedIndex, e.target.value);
});

function updateSelectedCount(){
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  const selectedSeatsCount = selectedSeats.length

  const seatsIndex = [...selectedSeats].map(function(seat){
    return [...seats].indexOf(seat);

  });

  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex))

  count.innerText = selectedSeatsCount
  total.innerText = selectedSeatsCount * ticketPrice;
}

function setFilmData(filmIndex, price){
  localStorage.setItem('film', filmIndex);
  localStorage.setItem('price', price);

}

function populateUI(){
  //get data from local localStorage
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

if (selectedSeats !== null && selectedSeats.length > 0) {
  seats.forEach(function(seat, index){
    if (selectedSeats.indexOf(index) > -1) {
      seat.classList.add('selected');
      const selectedSeatsCount = selectedSeats.length
      count.innerText = selectedSeatsCount;
    }
  })

  const selectedFilmIndex = localStorage.getItem('film');

  if (selectedFilmIndex !== null) {
    filmSelect.selectedIndex = selectedFilmIndex
  }
}
  console.log(selectedSeats);

  //populate ui
}
