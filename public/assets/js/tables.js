$(document).ready(async () => {
  const $reservations = $('#reservation');
  const $waitlists = $('#waitlist');
  const reservations = await $.get('/api/reservation');
  const waitlists = await $.get('/api/waitlist');
  console.log('RESERVATIONS!!!!', reservations);
  console.log('Waitlists!!!!', waitlists);


  reservations.forEach((reservation, index) => {
    const $li = $('<li>').addClass("list-group-item mt-4");
    const $h2 = $('<h2>').text(`Table #${index + 1}`);
    const $hr = $('<hr>');
    const $h2Id = $('<h2>').text(`ID: ${reservation.id}`);
    const $h2Name = $('<h2>').text(`Name: ${reservation.name}`);
    const $h2Email = $('<h2>').text(`Email: ${reservation.email}`);
    const $h2Phone = $('<h2>').text(`Phone: ${reservation.phone}`);
    $li.append($h2, $hr, $h2Id, $h2Name, $h2Email, $h2Phone);
    $reservations.append($li);
  });


  waitlists.forEach((waitlist, index) => {
    const $li = $('<li>').addClass("list-group-item mt-4");
    const $h2 = $('<h2>').text(`Table #${index + 1}`);
    const $hr = $('<hr>');
    const $h2Id = $('<h2>').text(`ID: ${waitlist.id}`);
    const $h2Name = $('<h2>').text(`Name: ${waitlist.name}`);
    const $h2Email = $('<h2>').text(`Email: ${waitlist.email}`);
    const $h2Phone = $('<h2>').text(`Phone: ${waitlist.phone}`);
    $li.append($h2, $hr, $h2Id, $h2Name, $h2Email, $h2Phone);
    $waitlists.append($li);
  });
  // <li class="list-group-item mt-4">
  //   <h2>Table #1</h2>
  //   <hr>
  //     <h2>ID: afhaque89</h2>
  //     <h2>Name: Ahmed</h2>
  //     <h2>Email: ahmed@example.com</h2>
  //     <h2>Phone: 000-000-0000</h2>
  // </li>
});

