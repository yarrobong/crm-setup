import { test, expect } from '@playwright/test';

test('has title and basic SEO elements', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/CRM & Setup/);

  // Check if h1 exists
  const heading = page.locator('h1');
  await expect(heading).toBeVisible();
});

test('navigation works correctly', async ({ page }) => {
  await page.goto('/');

  // Click the "Кейсы" link.
  await page.getByRole('link', { name: 'Кейсы' }).first().click();

  // Expects page to have a heading with the name of Cases.
  // We check the url.
  await expect(page).toHaveURL(/.*cases/);
  await expect(page.locator('h1')).toContainText('Практические кейсы');
});

test('form validation shows errors', async ({ page }) => {
  await page.goto('/contacts');

  // Submit form without filling it
  const submitButton = page.getByRole('button', { name: 'Получить разбор' }).first();
  await submitButton.click();

  // Check for validation errors
  await expect(page.locator('text=Имя должно содержать минимум 2 символа')).toBeVisible();
});
