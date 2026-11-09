class Cases extends Parent {
// GETTERS
get createCaseButton () {
    return $('button[data-testid="cases-page-create-case-button"]');
}

}

export default new Cases();