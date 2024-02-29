// ------- CALLBACK hell exemple -------- 
// Better exemple in completed code
var response = ajaxLibrary.get("/page1", function(response) {
    console.log(response);
    ajaxLibrary.get("/page2", function(response2) {
        ajaxLibrary.get("/page3", function(response3) {
            ajaxLibrary.get("/page4", function(response4) {
                // blablabla
            })
        })
    })
})
