function option() {
            document.getElementById("initial").style.display = "none";
            document.getElementById("options").style.display = "block";
        }

        function showAgrokisanDevices() {
            var agrokisanDevicesContent = "<h2>1. Agrokisan Technology Devices</h2>" +
                "<p>Temperature: 25°C</p>" +
                "<p>Humidity: 60%</p>" +
                "<p>Water Level: 50%</p>" +
                "<p>Soil Moisture: 40%</p>";

            document.getElementById("agrokisanDevices").innerHTML = agrokisanDevicesContent;
        }

        function showPartnerDevices() {
            var partnerDevicesContent = "<h2>2. Partner Devices</h2>" +
                "<p>Partner Device 1: Details</p>" +
                "<p>Partner Device 2: Details</p>" +
                "<p>Partner Device 3: Details</p>";

            document.getElementById("partnerDevices").innerHTML = partnerDevicesContent;
        }