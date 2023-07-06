import { test, expect } from '@playwright/test';
import { QontaxPage } from './pages/qontax.page';

test.use({
  storageState: 'auth.local.json',
});

test('create contact with a better locators', async ({ page }) => {
  const q = new QontaxPage(page);

  await q.goto();

  // Click on add contact link
  await q.addContactLink.click();

  // Fill in details
  await q.firstnameInput.fill('Ujang');
  await q.lastnameInput.fill('Emen');
  await q.imageUrl.fill(
    'https://github.com/zainfathoni/www.zainfathoni.com/blob/master/static/images/zain.jpg?raw=true'
  );
  await q.occupation.fill('Senior Software Engineer');
  await q.twitter.fill('ujang');
  await q.bio.fill('Family Man');

  // Click Submit
  await q.submitButton.click();

  expect(page).not.toHaveURL('new');
});

test.skip('edit contact with codegen', async ({ page }) => {
  await page
    .getByRole('link', {
      name: 'Photo of Zain Zain Fathoni Senior Software Engineer zainfathoni',
    })
    .click();
  await page.locator('section').getByRole('link').click();
  await page.getByPlaceholder('John', { exact: true }).click();
  await page.getByPlaceholder('John', { exact: true }).fill('Zainal');
  await page.getByRole('button', { name: 'Save' }).click();
});
