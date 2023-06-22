document
  .getElementById("customer1Form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    if (
      (document.getElementById("exampleInputEmail1").value == "customer1" &&
        document.getElementById("exampleInputPassword1").value ==
          "customer1") ||
      (document.getElementById("exampleInputEmail1").value == "customer2" &&
        document.getElementById("exampleInputPassword1").value == "customer2")
    ) {
      document.getElementById("alert2").classList.remove("hidden");
      setTimeout(() => {
        document.getElementById("alert2").classList.add("hidden");
      }, 3000);
      document.getElementById("customer1Form").classList.add("hidden");
      document.getElementById("customer2Form").classList.remove("hidden");
    }
    else if(document.getElementById("exampleInputEmail1").value == "admin" &&
    document.getElementById("exampleInputPassword1").value =="admin"){
      document.getElementById("customer1Form").classList.add("hidden");
      document.getElementById("table").classList.remove("hidden");
      
      fetch('http://127.0.0.1:3000/getquantity')
      .then(response => response.json())
      .then(data => {
        document.getElementById("q1sum").innerHTML = data[0].sum_of_quantity
      })
      .catch(error => console.log(error));
      fetch('http://127.0.0.1:3000/getweight')
      .then(response => response.json())
      .then(data => {
        document.getElementById("q1weight").innerHTML = data[0].sum_of_weight.toFixed(2)
      })
      .catch(error => console.log(error));
      fetch('http://127.0.0.1:3000/getbox')
      .then(response => response.json())
      .then(data => {
        document.getElementById("q1box").innerHTML = data[0].sum_of_box
      })
      .catch(error => console.log(error));


      fetch('http://127.0.0.1:3000/getquantity2')
      .then(response => response.json())
      .then(data => {
        document.getElementById("q2sum").innerHTML = data[0].sum_of_quantity
      })
      .catch(error => console.log(error));
      fetch('http://127.0.0.1:3000/getweight2')
      .then(response => response.json())
      .then(data => {
        if(data[0].sum_of_weight){
          document.getElementById("q2weight").innerHTML = data[0].sum_of_weight.toFixed(2)
        }
      })
      .catch(error => console.log(error));
      fetch('http://127.0.0.1:3000/getbox2')
      .then(response => response.json())
      .then(data => {
        document.getElementById("q2box").innerHTML = data[0].sum_of_box
      })
      .catch(error => console.log(error));


      Promise.all([
        fetch('http://127.0.0.1:3000/getquantity'),
        fetch('http://127.0.0.1:3000/getquantity2')
      ])
        .then(responses => Promise.all(responses.map(response => response.json())))
        .then(data => {
          const sumOfQuantities = data.reduce((acc, curr) => acc + curr[0].sum_of_quantity, 0);
          sumOfQuantities;
          document.getElementById("tqsum").innerHTML = sumOfQuantities;
        })
        .catch(error => console.log(error));


      Promise.all([
        fetch('http://127.0.0.1:3000/getweight'),
        fetch('http://127.0.0.1:3000/getweight2')
      ])
        .then(responses => Promise.all(responses.map(response => response.json())))
        .then(data => {
          const sumOfQuantities = data.reduce((acc, curr) => acc + curr[0].sum_of_weight, 0);
          sumOfQuantities;
          document.getElementById("twsum").innerHTML = sumOfQuantities.toFixed(2);
        })
        .catch(error => console.log(error));

      Promise.all([
        fetch('http://127.0.0.1:3000/getbox'),
        fetch('http://127.0.0.1:3000/getbox2')
      ])
        .then(responses => Promise.all(responses.map(response => response.json())))
        .then(data => {
          const sumOfQuantities = data.reduce((acc, curr) => acc + curr[0].sum_of_box, 0);
          sumOfQuantities;
          document.getElementById("tbsum").innerHTML = sumOfQuantities;
        })
        .catch(error => console.log(error));
    }
    

    else {
      // Get form data
      var id = document.getElementById("exampleInputEmail1").value;
      var password = document.getElementById("exampleInputPassword1").value;
      console.log(id);
      console.log(password);

      // Create an object to send to the server
      var formData = {
        id: id,
        password: password,
      };

      // Send data to the server using Fetch API
      fetch("http://127.0.0.1:3000/save_data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then(function (response) {
          if (response.ok) {
            return response.text(); // Parse response body as text
          } else {
            document.getElementById("alert3").classList.remove("hidden");
          setTimeout(() => {
            document.getElementById("alert3").classList.add("hidden");
          }, 3000);
            throw new Error("Error: " + response.status);
          }
        })
        .then(function (data) {
          // Handle the server response
            document.getElementById("alert1").classList.remove("hidden");
            setTimeout(() => {
              document.getElementById("alert1").classList.add("hidden");
            }, 3000);
          console.log(data);
        })
        .catch(function (error) {
          // Handle network errors or other exceptions
          document.getElementById("alert3").classList.remove("hidden");
          setTimeout(() => {
            document.getElementById("alert3").classList.add("hidden");
          }, 3000);
          console.error(error);
        });
    }
  });


  document.getElementById("customer2Form").addEventListener("submit", function(event) {
    var input = document.getElementById("exampleInput1").value;
    var alphanumericRegex = /^[a-zA-Z0-9]+$/;
    let check = false;

    if (!alphanumericRegex.test(input)) {
      document.getElementById("errorText").style.display = "block";
      event.preventDefault();
      check=true;
    } else {
      document.getElementById("errorText").style.display = "none";
    }

    var input2 = document.getElementById("exampleInput2").value;

    if (!alphanumericRegex.test(input2)) {
      document.getElementById("errorText2").style.display = "block";
      event.preventDefault();
      check=true;
    } else {
      document.getElementById("errorText2").style.display = "none";
    }

    var input4 = document.getElementById("exampleInput4").value;
    var alphanumericRegex = /^\d+$/;
    if (!alphanumericRegex.test(input4)) {
      document.getElementById("errorText4").style.display = "block";
      event.preventDefault();
      check=true;
    } else {
      document.getElementById("errorText4").style.display = "none";
    }
    var input5 = document.getElementById("exampleInput5").value;
    var alphanumericRegex = /^\d+(\.\d+)?$/;
    if (!alphanumericRegex.test(input5)) {
      document.getElementById("errorText5").style.display = "block";
      event.preventDefault();
      check=true;
    } else {
      document.getElementById("errorText5").style.display = "none";
    }
    var input9 = document.getElementById("exampleInput9").value;
    var alphanumericRegex = /^\d+$/;
    if (!alphanumericRegex.test(input9)) {
      document.getElementById("errorText9").style.display = "block";
      event.preventDefault();
      check=true;
    } else {
      document.getElementById("errorText9").style.display = "none";
    }







    // Get form data
    if(!check){
    event.preventDefault()
    var id1 = document.getElementById("orderdate").value;
    var id2 = document.getElementById("exampleInput1").value;
    var id3 = document.getElementById("exampleInput2").value;
    var id4 = document.getElementById("exampleInput3").value;
    var id5 = document.getElementById("exampleInput4").value;
    var id6 = document.getElementById("exampleInput5").value;
    var id7 = document.getElementById("exampleInput6").value;
    var id8 = document.getElementById("exampleInput7").value;
    var id9 = document.getElementById("exampleInput8").value;
    var id10 = document.getElementById("exampleInput9").value;
    var id11 = document.getElementById("exampleInput10").value;
    var id12 = document.getElementById("exampleInput11").value;
    var id13 = document.getElementById("exampleInputEmail1").value;


    // Create an object to send to the server
    var formData = {
      id1: id1,
      id2: id2,
      id3: id3,
      id4: id4,
      id5: id5,
      id6: id6,
      id7: id7,
      id8: id8,
      id9: id9,
      id10: id10,
      id11: id11,
      id12: id12,
      id13: id13
    };

    // Send data to the server using Fetch API
    fetch("http://127.0.0.1:3000/save_data2", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(function (response) {
        if (response.ok) {
          return response.text(); // Parse response body as text
        } else {
          document.getElementById("alert3").classList.remove("hidden");
          setTimeout(() => {
            document.getElementById("alert3").classList.add("hidden");
          }, 3000);
          throw new Error("Error: " + response.status);
        }
      })
      .then(function (data) {
        document.getElementById("alert1").classList.remove("hidden");
        setTimeout(() => {
            document.getElementById("alert1").classList.add("hidden");
          }, 3000);
        // Handle the server response
        console.log(data);
      })
      .catch(function (error) {
        // Handle network errors or other exceptions
        document.getElementById("alert3").classList.remove("hidden");
          setTimeout(() => {
            document.getElementById("alert3").classList.add("hidden");
          }, 3000);
        console.error(error);
      });
    }
  });


  function goToHomePage(event) {
    event.preventDefault(); // Prevents the default form submission

    window.location = "/"; // Replace with your home page URL
  }