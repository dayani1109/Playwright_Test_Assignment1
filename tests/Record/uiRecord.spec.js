import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByRole('button', { name: 'Paste' }).click();
  await page.getByRole('heading', { name: 'Warning' }).click();
  await page.getByText('Sinhala characters are not').click();
  await page.getByRole('button', { name: 'OK' }).click();
});