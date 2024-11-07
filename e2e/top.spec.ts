import { test, expect } from '@playwright/test';

test('user can go to the top page', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByText('ダイエット成功のための契約を結ぶ')).toBeVisible();
});

test('user can navigate to weight loss commitment page', async ({ page }) => {
  await page.goto('/');
  const button = page.getByText('ダイエット成功のための契約を結ぶ');
  await button.click();
  await expect(page).toHaveURL('/weight-loss-commitment/create');
});
