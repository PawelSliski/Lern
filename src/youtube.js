function tplawesome(e,t){res=e;for(var n=0;n<t.length;n++){res=res.replace(/\{\{(.*?)\}\}/g,function(e,r){return t[n][r]})}return res}

$(function() {
    $("form").on("submit", function(e) {
       e.preventDefault();
       var request = gapi.client.youtube.search.list({
            part: "snippet",
            type: "video",
            videoCategoryId: "27",
            q: encodeURIComponent($("#search").val()).replace(/%20/g, "+"),
            maxResults: 3,
            order: "viewCount",
            publishedAfter: "2015-01-01T00:00:00Z"
       }); 
       request.execute(function(response) {
          var results = response.result;
          $("#results").html("");
          $.each(results.items, function(index, item) {
            $.get("/src/video.html", function(data) {
                $("#results").append(tplawesome(data, [{"title":item.snippet.title, "videoid":item.id.videoId}]));
            });
          });
       });
    });
});

function init() {
    gapi.client.setApiKey("AIzaSyC0eclT6kPRyWU3H_hlx5eTd9Y32u8M9FM");
    gapi.client.load("youtube", "v3", function() {
    });
}