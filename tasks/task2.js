const ShowFileSize=(e)=>{
    e.preventDefault();
    let result = document.getElementById("result")
    let file_input = document.getElementById("file")
    let file_size_kb = 0
    if(file_input.files.length>0){
        let file_size = file_input.files[0].size
        file_size_kb = file_size / 1024
        result.innerText = file_size_kb + "kb"
    }
}