const pop_cancelButton = document.getElementById('pop_cancelButton');
const change_button = document.getElementsByClassName('change_Button');

pop_cancelbutton.addEventListener("click", function(){
  document.getElementById('pop_wrap').style.display = 'none';
  document.getElementById('department').value = "";
  document.getElementById('grade').value = "";
  document.getElementById('subjectnumber').value = "";
  document.getElementById('classnum').value = "";
  document.getElementById('subjectname').value = "";
  document.getElementById('professor').value = "";
  document.getElementById('score').value = "";
});

for (let i = 0; i < change_button.length; i++) {
  change_button[i].addEventListener("click", function(){
    document.getElementById('pop_wrap').style.display = 'inline';
  });
}