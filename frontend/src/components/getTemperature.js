export const getTemperature = (temperature) =>{

    if(temperature<=0){
        return "freezing";
    }

    if(temperature<=10){
        return "verycool"
    }

    if(temperature<=20){
        return "cool"
    }

    if(temperature<=30){
        return "blissful"
    }

    if(temperature<=40){
        return "hot"
    }
   if(temperature>40){
    return "extremelyhot";
   }

}


export const weatherImages = {
    freezing: "/images/freezing.jpg",
    verycool:"/images/verycool.jpg",
    cool:"/images/cool.jpg",
    blissful:"/images/blissful.jpg",
    hot:"/images/hot.jpg",
    extremelyhot:"/images/extremelyhot.jpg"

}