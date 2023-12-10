const video = document.getElementById("video_id")
function cl_stop(){
	if(video.paused){
		video.play()
	} else{
		video.pause()
	}
}
function cl_next(){
	if (peremotka>=play_list.length - 1){
		peremotka = 0
	}else{

	}
	peremotka = peremotka + 1
	console.log(peremotka)
	video.src='video/${play_list[peremotka]}.mp4'
}
function cl_back(){
	if(peremotka != 0){
		peremotka --;
	}else{
		peremotka = play_list.length - 1;
	}
}
function cl_audio(){
	if(video.muted){
		video.muted = false
	}else{
		video.muted = true
	}
}