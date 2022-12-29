let mainColor 
let styleName =''
let content = {
    method: "GET",
    body: JSON.stringify(),
    headers:{ 
        "Content-Type": "application/json"
}
}

document.getElementById('getmycolor').addEventListener('submit',(e) =>{
    e.preventDefault()
    styles = ''
    styleName = ''
    mainColor = pickColor.value.substring(1)
    fetch(`https://www.thecolorapi.com/scheme?hex=${mainColor}&mode=${colorMode.value}`,content)
        .then(res => res.json())
        .then(data => {
            for(colors of data.colors){
            console.log(colors.hex.value)
            styleName += `<p>${colors.hex.value}</p>`
            styles += 
                `
                    <div style="background-color:${colors.hex.value};" class="color"></div>
                `
            }
        // console.log(data)
        // console.log("main color " + mainColor)
        // console.log(styles)
        render()
        })
    }
)


function render(){
    document.getElementById('colors').innerHTML = styles
    document.getElementById('color-caption').innerHTML = styleName
}
