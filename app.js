const url = "https://www.vdh.virginia.gov/content/uploads/sites/182/2020/05/VDH-COVID-19-PublicUseDataset-Cases.csv"

(function() {


function init(){
    d3.json(url).then((object)=> {
        console.log(object)
    })
}

init()