function shadowimages(options){
    let imgs= document.querySelectorAll("shadow");
    if(options.shadow_type==="hard"){
        options.shadow_type='0px';
    }else{ 
         options.shadow_type='0px';
     }

     imgs.forEach(img => {
        img.style.boxShadow=`10px 10px ${options.shadow_type} 1px rgba(0,0,0,0,12)`;
        if(options.padding){
            img.style.padding="10px";
        }
     });
}
module.exports.shadowimages=shadowimages;