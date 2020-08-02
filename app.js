const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row.seat:not(.occupied)');
const count = document.querySelector('.count')
const total = document.querySelector('.total')
const filmSelect = document.querySelector('#film-select');
let ticketPrice = +filmSelect.value;

container.addEventListener('click', function(e){
  if (e.target.classList.contains('seat')&& !e.target.classList.contains('occupied')) {
    e.target.classList.toggle('selected')
    updateSelectedCount();
  }
});



filmSelect.addEventListener('change' , function(e){
  ticketPrice = e.target.value;
  updateSelectedCount();
});

function updateSelectedCount(){
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  const selectedSeatsCount = selectedSeats.length
  console.log(selectedSeatsCount);

  count.innerText = selectedSeatsCount
  total.innerText = selectedSeatsCount * ticketPrice;
}
