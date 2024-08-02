//your JS code here. If required.
let activeCircle =1;

const circles = (document.querySelectorAll('.circle'));
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const line = document.getElementById('line');

function update() {
	circles.forEach((circle, idx)=>{
		if(idx<activeCircle){
			circle.classList.add('active');
		}
		else{
			circle.classList.remove('active');
		}
	});
	const activeCircles=document.querySelectorAll('.active');
	if(activeCircle === 1){
		prevButton.disabled = true;
	}else if(activeCircle === circles.length){
		nextButton.disabled = true;
	}else{
		prevButton.disabled = false;
		nextButton.disabled = false;
	}
	line.style.width =  ((activeCircles.length-1)/(circles.length-1))*100+'%';
	
}
prevButton.addEventListener('click', ()=>{
	activeCircle--;
	update();
});
nextButton.addEventListener('click', ()=>{
	activeCircle++;
	update();
})
update();