navigator.geolocation.getCurrentPosition( 
        function (position){
            // console.log(position)
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            console.log("https://www.google.com/maps/place/Halifax+Shopping+Centre/@44.6509699,-63.6233414,15.25z/data=!3m1!5s0x4b5a2199a65dc525:0xae9b62cd459a4a70!4m15!1m8!3m7!1s0x4b5a211407dbfac1:0x666be3a6438b2ddc!2sHalifax,+NS!3b1!8m2!3d44.6508608!4d-63.5923256!16s%2Fm%2F02qjb7z!3m5!1s0x4b5a21999741f353:0x93e0f53cd371939c!8m2!3d44.649249!4d-63.618682!16s%2Fm%2F02vpj73?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D")
            console.log(@44.6509699, -63.6233414);
    },
        function () {
            alert("could not get position")
        }
);

