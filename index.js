
$("#submit").click(function (e) {
  e.preventDefault();
  loadContent();
});

function loadContent() {
  const date = $("#calendar").val();
  const img = $("#bgImg");
  const title = $("#imgTitle");
  const p = $("#img-p");
  const video = $("#video");

  const link = `https://api.nasa.gov/planetary/apod?api_key=4MIAo34S04lDB3jPTI39bq335LgZSfhJerDcgDJw&date=${date}`;

  $.ajax({
    type: "GET",
    url: link,
    success: function (response) {
      if (response.media_type == "image") {
        video.hide();
        img.show();
        img.attr("src", response.url);
        title.text(response.title);
        p.text(response.explanation);
      } else {
        img.hide();
        video.show();
        video.attr("src", response.url);
        title.text(response.title);
        p.text(response.explanation);
      }
    },
  });
}
