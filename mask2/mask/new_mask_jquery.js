$("#services-sections > a").click(function() {
    $("#section-" + this.id.split("-")[1]).fadeToggle();
});;

