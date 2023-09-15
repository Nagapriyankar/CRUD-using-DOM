let input = document.getElementById('input')
let form = document.getElementById('form')
let errorMsg = document.getElementById('errorMsg')

form.addEventListener('submit', (e) => { 
    e.preventDefault()
    console.log('button clicked')

    formValidation()       
})

let formValidation = () => {
    if (input.value === "") {
        console.log('Failure')
        errorMsg.textContent = 'please provide valid input'
    }
    else {
        errorMsg.textContent = ""
        console.log('Success')
        acceptData()
    }
}


let data = {}
let acceptData = () => { 
    data['text'] = input.value
    console.log(data.text)
    createPost()
}


let createPost = () => {
    posts.innerHTML +=  `<div>
                    <p>${data.text}</p>
                    <span class="options">
                        <i onClick="deletePost(this)" class="fa fa-trash" aria-hidden="true"></i>
                        <i onClick="editPost(this)" class="fa fa-pencil-square" aria-hidden="true"></i>
                    </span>
                </div>`
    input.value = "";
 }

let deletePost = (e) => { 
    console.log('remove posts clicked');
    e.parentElement.parentElement.remove();
}

let editPost = (e) => { 
    e.parentElement.parentElement.remove();
    input.value = e.parentElement.previousElementSibling.innerHTML;
    

}