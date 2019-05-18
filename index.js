function addListItem() {
   $('#js-shopping-list-form').submit(function(event) {
        event.preventDefault();
        const itemAddition = $('.js-shopping-list-entry').val();
        $('#shopping-list-entry').val('');
        $('.shopping-list').append(
        `<li>
        <span class="shopping-item">${itemAddition}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);
   });
}

function checkListItem() {
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
        let checkedItem = $(this).closest('li');
        checkedItem.find('.shopping-item').toggleClass("shopping-item__checked");
    });
} 


function removeListItem(){
    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
        $(this).closest('li').remove();
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
