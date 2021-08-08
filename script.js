let votes = document.getElementsByClassName('js-vote-count');

// function hides stackoverflow responses with 0 upvotes
// for(let i = 1; i < votes.length; i++) {
//     let element = votes[i];
//     let voteCount = parseInt(element.getAttribute('data-value'));
    
//     if(voteCount < 2) {
//         element.parentNode.parentNode.parentNode.style.display = 'none';
//     }
// }