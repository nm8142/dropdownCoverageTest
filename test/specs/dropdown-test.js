import { expect } from '@wdio/globals';
import Login from '../pageobjects/login.js';
import Cases from '../pageobjects/cases.js';
import Credentials from '../pageobjects/credentials.js';

describe('Recent-Cases Dropdown Test', () => {
    it('the dropdown arrow should change when selected', async () => {
        await Login.open('');
        await Login.login(Credentials.testUsername, Credentials.testPassword);
        await expect(Cases.recentCasesArrow).toBeExisting();
        await Cases.selectRecentCasesArrow();
        await expect(Cases.selectedRecentCasesArrow).toBeExisting();
    })
    it('the items inside the dropdown should change color when focused', async () => {
        for (Cases.i = 0; Cases.i < Cases.recentCases.length; Cases.i++) {
            if (await !(Cases.recentCases[Cases.i].isExisting())) {
                continue;
            }
            await expect(Cases.recentCases[Cases.i]).toBeExisting();
            await Cases.recentCases[Cases.i].moveTo();
            await expect(Cases.recentCases[Cases.i].toHaveAttribute('class', '.f11ht4ay:focus'));
        }
    })
    it('selected recent case changes color and moves to the top of the list', async () => {
        // Loop starts at 1 because the first recentCase selector in the array is already selected
        for (Cases.i = 1; Cases.i < Cases.recentCases.length; Cases.i++) {
            const initialTestID = Cases.recentCases[0].getAttribute('data-testid');
            await expect(Cases.recentCases[Cases.i]).toBeExisting();
            await Cases.recentCases[Cases.i].click();
            await expect(Cases.recentCases[Cases.i].toHaveAttribute('class', '.f11ht4ay:focus'));
            await expect(Cases.recentCases[Cases.i].getAttribute('data-testid') != initialTestID);
        }
    })
    it('deleted cases disappear from the dropdown menu', async () => {
        const initialTestID = Cases.finalRecentCase.getAttribute('data-testid');
        await expect(initialTestID);
        await Cases.deleteFinalRecentCase();
        await expect(Cases.recentCases[0].getAttribute('data-testid') != initialTestID);
    })
    it('renamed cases will be renamed in the dropdown menu', async () => {
        const initialName = Cases.recentCases[0].getText();
        await Cases.recentCases[0].click();
        await Cases.caseNameField.setValue('Renamed by WebdriverIO');
        await Cases.updateCaseButton.click();
        await expect(Cases.recentCases[0].getText() != initialName);
    })
    it('recently created cases appear in the dropdown menu', async () => {
        await Cases.addNewCase('Created by WebdriverIO');
        await expect(Cases.caseCreatedPopupTitle.StringContaining('Case Created'));
    })
    it('all the above works on both the Growth and Scale accounts', async () => {
        await Cases.switchToOtherAccount();
        for (Cases.i = 1; Cases.i < Cases.recentCases.length; Cases.i++) {
            const initialTestID = Cases.recentCases[0].getAttribute('data-testid');
            await expect(Cases.recentCases[Cases.i]).toBeExisting();
            await Cases.recentCases[Cases.i].click();
            await expect(Cases.recentCases[Cases.i].toHaveAttribute('class', '.f11ht4ay:focus'));
            await expect(Cases.recentCases[Cases.i].getAttribute('data-testid') != initialTestID);
        }
        const initialTestID = Cases.finalRecentCase.getAttribute('data-testid');
        await expect(initialTestID);
        await Cases.deleteFinalRecentCase();
        await expect(Cases.recentCases[0].getAttribute('data-testid') != initialTestID);
        const initialName = Cases.recentCases[0].getText();
        await Cases.recentCases[0].click();
        await Cases.caseNameField.setValue('Renamed by WebdriverIO');
        await Cases.updateCaseButton.click();
        await expect(Cases.recentCases[0].getText() != initialName);
        await Cases.addNewCase('Created by WebdriverIO');
        await expect(Cases.caseCreatedPopupTitle.StringContaining('Case Created'));
    })
 })