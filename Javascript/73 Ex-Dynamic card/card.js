

let container=document.querySelector(".container");
container.style.display="flex";
container.style.width="100%"
container.style.height="100vh"

function card(title,cname,views,monthsold,duration,thumbnail){
    // creating the main card div
    let card=document.createElement("div");
    document.querySelector(".container").append(card);
    card.className="card"
    card.style.margin="150px"
    card.style.position="absolute"
    card.style.display="flex"
    card.style.width="900px"
    card.style.height="120px"
    card.style.border="2px solid black"
    card.style.backgroundColor="black"
    card.style.boxSizing="border-box"

    //creating imagebox
    let imgbox=document.createElement("div");
    imgbox.className="imgbox";
    document.querySelector(".card").append(imgbox)
    imgbox.style.margin="8px 8px";
    imgbox.style.marginTop="10px"
    imgbox.style.marginRight="4px";
    imgbox.style.borderRadius="10px";
    // imgbox.style.objectFit="cover"
    imgbox.style.position="relative"


    //creating the image section
    let image=document.createElement("img");
    document.querySelector(".imgbox").append(image);
    image.src="https://i.ytimg.com/vi/KtL-SQ20Q0s/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLABJhdIBqlilwXKzJqa6StynbJT4Q";
    // image.style.margin="8px 8px";
    // image.style.marginRight="4px";
    image.style.borderRadius="10px";
    

    //creating duration inside the image
    let dura = document.createElement("div");
    dura.className="duration"
    document.body.children[0].children[0].children[0].append(dura);
    // document.querySelector(".card").children[0].apppend(dura);
    // dura.style.height="10px"
    dura.style.position="absolute"
    dura.style.right="5px"
    dura.style.width="40px"
    dura.style.bottom="10px"
    dura.style.zIndex="5"
    dura.style.color="white"
    // dura.style.fontSize="11px"
    dura.style.padding="2px"
    dura.style.textAlign="center"
    dura.style.borderRadius="7px"
    dura.style.backgroundColor="black"
    dura.innerText=duration;


    //creating the title bar
    let box=document.createElement("div");
    document.querySelector(".card").append(box);
    box.className="box";
    box.style.width="705px"
    box.style.display="flex"
    box.style.flexDirection="column"
    box.style.padding="10px 0px"
    box.style.rowGap="5px"

    //creating title of the video
    let titl=document.createElement("h2");
    document.querySelector(".box").append(titl);
    titl.innerHTML=`<b>${title}</b>`
    titl.style.color="white"
    titl.style.fontFamily="Baloo Bhai 2"


    // creating another box to make channel name views and months inline
    let box2=document.createElement("div");
    box2.className="box2"
    document.querySelector(".box").append(box2);
    box2.style.display="flex";
    box2.style.height="20px"
    box2.style.gap="10px"

    //creating the channel name
    let channel=document.createElement("span");
    document.querySelector(".box2").append(channel);
    channel.className="channel"
    channel.style.color="white"
    channel.innerText=`${cname}`;
    channel.style.display="span"
    channel.style.padding="2px"
    channel.style.textAlign="center"
    channel.style.marginRight="5px"
    // channel.style.fontFamily= "'Baloo Bhai 2',sans-sarif"
    // channel.style.width="auto"
    // channel.style.marker="circle"

    //creating the views
    let view=document.createElement("span");
    document.querySelector(".box2").append(view);
    view.className="view"
    view.innerHTML=`${views}`
    view.style.color="white"
    view.style.padding="2px"
    view.style.display="list-item"
    view.style.margin="0px 8px"

    //creating the months
    let old=document.createElement("span");
    document.querySelector(".box2").append(old);
    old.innerHTML=""+monthsold+""
    old.className="old";
    old.style.padding="2px"
    old.style.color="white"
    old.style.display="list-item"


}
card("Creating a Dynamic card using DOM Manipulation by javascript","code with harry","34k","2months","20:21");



