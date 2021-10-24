(function () {

    $(document.body).append('<h1>It works!</h1>')

    // const theForm = document.getElementById('theForm');
    // theForm.addEventListener('submit',e =>  {
    //     e.preventDefault();
    //     console.log('submitted')
    // })

    const theJQForm = $('#theForm');
    theJQForm.on('submit', e => {
        e.preventDefault();
        console.log(inputAddress.val())
    })

    const inputName = $('#name');
    const inputAddress = $('#address');

    theJQForm.on('submit', e => {
        e.preventDefault();
        console.log(inputName.val(), inputAddress.val());
    })
    const theButton = $('#theButton');
    const theAgreeCheckbox = $('#agree')

    theAgreeCheckbox.on('change', function () {
        theButton.prop('disabled', !theAgreeCheckbox.is(':checked'));
    })


    const theDeleteButton = $('#theForm').append('<button>delete</button>');
    theDeleteButton.on('click', () => {
        console.log('yay it is working')
    })







}())