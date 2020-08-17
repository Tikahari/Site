console.log('experience.html')
let show_resume = false;

function resume(){
	show_resume = !show_resume
	console.log('show resume', show_resume)

	if(show_resume){
		console.log('show')
        document.getElementById("resume-frame").innerHTML = "<iframe class=\"resume-frame\" src=\"resume.pdf\" height=\"750\" width=\"1000\" ></iframe>";
	}else{
		console.log('hide')
		document.getElementById("resume-frame").innerHTML = "";
	}
}
