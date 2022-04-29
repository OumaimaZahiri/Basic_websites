import $ from 'jquery';
import _ from "lodash";

console.log('JS correctement chargé');

$(function() {
    console.log('JQuery est chargé');
    let ulElement=$("#ulElement");
    let addButton=$("#addButton");
    let item=$("#item");
    let j=0;
    let max=10;

    addButton.click(function(){
        console.log('Add button clicked !');
        if(item.val()!=='' && (item.val()).match(/^\s+$/)==null) 
        {
            let itemToAdd=item.val(); // sans paramètres, ça sert à renvoyer ce qui a été écrit dans le input
            console.log(itemToAdd + ' must be added');
            let liElement=$('<li>'+itemToAdd+'</li>');
            
            let deleteButton=$('<div class="deletebutton"><button>Delete</button></div>');
            deleteButton.appendTo(liElement);

            deleteButton.click(function() {
                liElement.remove();
            })
            liElement.appendTo(ulElement);
            item.val(''); // JQuery : force la valeur rentrée en paramètre dans la partie input
            item.focus();
        }
        else {
            console.log('Error !');
            alert('No item has been added !');
        
        }
    });
});

