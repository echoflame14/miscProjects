$("#freqBtn").click(function(){
	$("#up-down-container").slideDown(" ",function(){
	});
	$("#presets").slideUp("fast");
});
$(".presets").click(function(){
	$("#up-down-container").slideUp("fast",function(){
	});
	$("#presets").slideDown("fast");
});
//audio.js
  audiojs.events.ready(function() {
    var as = audiojs.createAll();
  });
// var ctx = $("#visual");


// var data = {
//     labels: ["", "", "", "", "", "", "", "", "", "",""],
//     datasets: [
//         {
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255,99,132,1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1,
//             data: [65, 59, 80, 81, 56, 55, 400],
//         }
//     ]
// };
//
//
// var myBarChart = new Chart(ctx, {
//     type: 'bar',
//     data: data
// });
