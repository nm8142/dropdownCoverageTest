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
        await expect(Cases.recentCase1).toBeExisting();
        await expect(Cases.recentCase1.moveTo()).toHaveAttribute('class', '.f11ht4ay:focus');
        })
    })