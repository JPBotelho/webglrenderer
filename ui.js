main();

function main()
{
    var reSlider = document.getElementById("reSlider");
    var reVal = document.getElementById("reVal");
    reVal.innerHTML = reSlider.value; // Display the default slider value

    // Update the current slider value (each time you drag the slider handle)
    reSlider.oninput = function() {
      reVal.innerHTML = this.value;
    }


    var imSlider = document.getElementById("imSlider");
    var imVal = document.getElementById("imVal");
    imVal.innerHTML = reSlider.value; // Display the default slider value

    // Update the current slider value (each time you drag the slider handle)
    imSlider.oninput = function() {
      imVal.innerHTML = this.value;
    }
}
