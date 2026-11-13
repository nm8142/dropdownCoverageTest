import { $ } from '@wdio/globals';
import { browser } from '@wdio/globals';

export default class Parent {
    // GETTERS
    get accountsDropdown () {
        return $('button[data-testid="menu-account-popover-button"]');
    }
    get activeAccount () {
        return $('div:nth-child(3)[class="___smo5pu0 f17msyar f22iagw f1vx9l62 fdclmfp f18wj7mp faxpca8 fqau7xy f1xlgggw fniynbn fuqy72e f157guqj f1jhi6b8 fi64zpg fna4vx6 f1ewtqcl f1immsc2 f6dzj5z f10pi13n fv3jxil fc6xw00 f4zdiaq f79h6ue f1jzaux2 f1ane2sp f1lo8v4a f12hi4yf fm9niy"]');
    }
    get switchAccount () {
        return $('div[class="___1qijer3 f1sky5j9 f22iagw f1vx9l62 fdclmfp f18wj7mp faxpca8 fqau7xy f1xlgggw fniynbn fuqy72e f157guqj f1jhi6b8 fi64zpg fna4vx6 f1ewtqcl f1immsc2 f6dzj5z f10pi13n fv3jxil fc6xw00 f4zdiaq f79h6ue fcmwbc f1cy0w1j f5zp4f f1oy3dpc"] > div:first-child');
    }
    get casesTab () {
        return $('button[data-testid="vert-nav-cases"]');
    }
    get clientsTab () {
        return $('button[data-testid="vert-nav-clients-parties"]');
    }
    get templatesTab () {
        return $('button[data-testid="vert-nav-templates"]');
    }
    get insightsTab () {
        return $('button[data-testid="vert-nav-insights"]');
    }
    get accountSettings () {
        return $('button[data-testid="vert-nav-account-settings"]');
    }
    get recentCasesTab () {
        return $('button[data-testid="vert-nav-recent-cases"]');
        
    }
    get recentCasesArrow () {
        return $('span[class="fui-NavCategoryItem__expandIcon ___1ynx4oh f1lfeew"]');

    }
    get selectedRecentCasesArrow () {
        return $('span[class="fui-NavCategoryItem__expandIcon ___5ni9qk0 f1lfeew f93bgaf"]');
    }
    // get recentCaseHighlightColor () {
    //     return $('.f11ht4ay:focus');
    // }
    get recentCase1 () {
        return $('button:first-child[data-testid*="vert-nav-recent-case-"]');
    }
    get recentCase2 () {
        return $('button:nth-child(2)[data-testid*="vert-nav-recent-case-"]')
    }
    get recentCase3 () {
        return $('button:nth-child(3)[data-testid*="vert-nav-recent-case-"]')
    }
    get recentCase4 () {
        return $('button:nth-child(4)[data-testid*="vert-nav-recent-case-"]');
    }
    get recentCase5 () {
        return $('button:last-child[data-testid*="vert-nav-recent-case-"]');
    }
    get recentCases () {
        return [ 
            this.recentCase1,
            this.recentCase2,
            this.recentCase3,
            this.recentCase4,
            this.recentCase5
        ];
    }
    get finalRecentCase () {
        return this.recentCases[this.recentCases.length - 1];
    }
    get caseCreatedPopupTitle () {
        return $('div[id="toast-titler1sh"]');
    }
    // FUNCTIONS
    open (path) {
        return browser.url(`https://app.thecasework.com/${path}`)
    }
    selectRecentCasesArrow () {
        this.recentCasesArrow.click();
    }
    switchToOtherAccount () {
    this.accountsDropdown.click();
    this.switchAccount.click();
    }
    // VARIABLES
    i = 0;
}