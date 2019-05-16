function addListItem() {
    $('form').submit(function(event) {
     const insertedItem = $('#shopping-list-entry').val();
        $('.shopping-list').append(`<li> 
        	<span class="shopping-item">` + insertedItem + `</span>
            <div class="shopping-item-controls">
              <button class="shopping-item-toggle">
                <span class="button-label">check</span>
              </button>
              <button class="shopping-item-delete">
                <span class="button-label">delete</span>
              </button>
            </div>
          </li>`
          );
    )};
}


function checkListItem() {
    $('.shopping-item-toggle').on('click', function(event) {
        $(this).closest('span').toggleClass('shopping-item__checked')
    });
} 


function removeListItem(){
    $('.shopping-item-delete').on('click', 'li', function(event) {
        $(this).remove();
    });
}

function initializeFunctions() {
    addListItem();
    checkListItem();
    removeListItem();
}
    
initializeFunctions();
//Register for text field action if someone clicks return.
//Have everything set up before page is completely displayed.
//Need to create initialize function to register all events.
