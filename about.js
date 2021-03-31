$(document).ready(()=>{
    $('.counter').counterUp({
        delay:950,
        time:4100
    })
            
    let skillBoxesList = $('.skill__box');
    let skillBoxPercentages = [65,60,45,50,55,45]
    $.each(skillBoxesList, (i, val)=>{
        let newSkillBox = new ldBar("#"+val.id,{
        "preset": "circle",
        "value": 0,
        "stroke": "#FFB400",    
        "data-present":"circle",
        "stroke-width":8,
        "stroke-trail-width":8,
        "stroke-trail":"#252525",
        })
        newSkillBox.set(skillBoxPercentages[i],true,)
    })

    AOS.init({
        delay:900,
        once: true
    })
})

