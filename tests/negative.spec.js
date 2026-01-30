import { test, expect } from '@playwright/test';

test.describe('Negative Functional Tests – Swift Translator', () => {

  // Helper function to get the first element with non-empty text after translation
  async function getTranslationOutput(page) {
    // Wait until at least one div/span/p has non-empty text
    await page.waitForFunction(() => {
      const candidates = Array.from(document.querySelectorAll('div, span, p'));
      return candidates.some(c => c.innerText.trim().length > 0);
    }, { timeout: 120000 });

    // Return the first element with visible text
    const allElements = page.locator('div, span, p');
    const count = await allElements.count();
    for (let i = 0; i < count; i++) {
      const el = allElements.nth(i);
      const text = (await el.innerText()).trim();
      if (text.length > 0) return el;
    }

    throw new Error('No translation output found!');
  }

  // Before each test: open site and wait for input box
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'load' });

    const inputBox = page.locator('textarea, input[type="text"]');
    await inputBox.first().waitFor({ state: 'visible', timeout: 20000 });
  });

  // After each test: pause so you can see the UI
  test.afterEach(async ({ page }) => {
    await page.waitForTimeout(15000); // 3 seconds pause
  });

  test('Neg_Fun_0001 – Convert joined word stress input', async ({ page }) => {
    await page.fill('textarea, input[type="text"]', 'matavaedakarannathiyenavaa');
    const outputBox = await getTranslationOutput(page);
    await expect(outputBox).not.toContainText('මට වැඩ කරන්න තියෙනවා');
  });

  test('Neg_Fun_0002 – Convert unsupported symbols', async ({ page }) => {
    await page.fill('textarea, input[type="text"]', 'mama @@office## yanavaa!!');
    const outputBox = await getTranslationOutput(page);
    await expect(outputBox).not.toContainText('මම ඔෆිස් යනවා!!');
  });

  test('Neg_Fun_0003 – Convert date and mixed language', async ({ page }) => {
    await page.fill('textarea, input[type="text"]', 'assignment eka 25-01-2026 wenakan submit karanna');
    const outputBox = await getTranslationOutput(page);
    await expect(outputBox).not.toContainText('එසයිමන්ට් එක 25-01-2026 වෙනකම් සබ්මිට් කරන්න');
  });

  test('Neg_Fun_0004 – Convert mixed English sentence', async ({ page }) => {
    await page.fill('textarea, input[type="text"]', 'mama office meeting eka cancel kalaa today');
    const outputBox = await getTranslationOutput(page);
    await expect(outputBox).not.toContainText('මම ඔෆිස් මිටින්ග් එක කැන්සල් කලා ටූඩේ');
  });

  test('Neg_Fun_0005 – Convert random capitalization sentence', async ({ page }) => {
    await page.fill('textarea, input[type="text"]', 'mAma OFfiCe YanAVaa AdHa');
    const outputBox = await getTranslationOutput(page);
    await expect(outputBox).not.toContainText('මම ඔෆිස් යනවා අද');
  });

  test('Neg_Fun_0006 – Convert sentence with excessive punctuation', async ({ page }) => {
    await page.fill('textarea, input[type="text"]', 'mama gedhara yanavaa????!!!');
    const outputBox = await getTranslationOutput(page);
    await expect(outputBox).not.toContainText('මම ගෙදර යනවා?');
  });

  test('Neg_Fun_0007 – Convert missing space sentence', async ({ page }) => {
    await page.fill('textarea, input[type="text"]', 'mama iilagasathiyehamBAvemu');
    const outputBox = await getTranslationOutput(page);
    await expect(outputBox).not.toContainText('මම ඊලග සතියෙ හම්බවෙමු');
  });

  test('Neg_Fun_0008 – Convert long joined sentence', async ({ page }) => {
    await page.fill('textarea, input[type="text"]', 'matahetaofficeyannathiyenavaasahahetaassignmentekakthiyenavaa');
    const outputBox = await getTranslationOutput(page);
    await expect(outputBox).not.toContainText('මට හෙට office යන්න තියෙනවා සහ හෙට assignment එකක් තියෙනවා');
  });

  test('Neg_Fun_0009 – Convert sentence containing emoji', async ({ page }) => {
    await page.fill('textarea, input[type="text"]', 'mama adha campus yanavaa 😊');
    const outputBox = await getTranslationOutput(page);
    await expect(outputBox).not.toContainText('මම අද campus යනවා');
  });

  test('Neg_Fun_0010 – Convert number word usage', async ({ page }) => {
    await page.fill('textarea, input[type="text"]', 'mama vathura kooppa dhekak bivvaa');
    const outputBox = await getTranslationOutput(page);
    await expect(outputBox).not.toContainText('මම වතුර කෝප්ප 2ක් බිව්වා');
  });

});
