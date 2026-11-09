class Case extends Parent {
// GETTERS
get moreButton () {
    return $('button[data-testid="view-edit-case-more-options-button"]');
}
get deleteCaseButton () {
    return $('div[data-testid="view-edit-case-delete-menu-item"]');
}
get confirmDeleteButton () {
    return $('button[data-testid="confirmation-dialog-confirm-button"]');
}
get caseNameField () {
    return $('input[data-testid="case-info-card-name-input"]');
}
get updateCaseButton () {
    return $('button[data-testid="view-edit-case-update-button"]');
}
get retainedDatePicker () {
    return $('input[data-testid="case-retained-date-picker"]');
}
get todaysDate () {
    return $('button[class="fui-CalendarDayGrid__dayButton fui-CalendarDayGrid__dayIsToday ___ig5vn00 f1c21dwh f3bhgqh f1phragk f1k6fduh fy9rknc fl43uef frvgh55 f8xlz6g f1gl81tg f1mk8lai fq4mcun f10y451g f1dwpgx3 f18a0fwf f1mhq3ai f7la2e8 f22iagw f4d9j23 f122n59 f1b5s8wn ft4goo8"]');
}
get retainedByPicker () {
    return $('button[data-testid="client-party-dropdown"]');
}
get 
}

export default new Case();