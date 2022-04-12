function calendarBtn(params) {
  let date = `&date=2014-10-01`;
  let link = `https://api.nasa.gov/planetary/apod?api_key=4MIAo34S04lDB3jPTI39bq335LgZSfhJerDcgDJw${date}`;

  $.ajax({
    type: "GET",
    url: link,
    dataType: "dataType",
    success: function (response) {
      console.log("Ready to launch 🚀");
    },
  });
}
calendarBtn()