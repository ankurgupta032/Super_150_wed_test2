        function load() {
            const x = document.getElementById("srch")
            fetch('https://api.tvmaze.com/search/shows?q=' + x.value).then(res => res.json()).then(
                res => {
                    console.log(res[0].show.image.medium)
                    var t = "";
                    res.map((r) => {
                        if (r.show.image != null)
                            t += '<img src="' + r.show.image.medium + '" alt="" width="260" height="320">'
                    })
                    document.getElementById('app').innerHTML = t;

                }
            )
        }
    



        function changeBG(color){
            document.body.style.backgroundColor=color;
            let txt=document.getElementsByClassName("ankur");  //array created of targeted tags to get change
            let heading=document.getElementsByClassName("ankur1");
            if(color== "#000000")
            {
                for(let elm of txt){
                    elm.style.color="white";
                }
                for(let elm of heading){
                    elm.style.color="white";
                }
            }
            
            else{
                for(let elm of txt){
                    elm.style.color="black";
                }
                for(let elm of heading){
                    elm.style.color="black";
                }
            }
        }
