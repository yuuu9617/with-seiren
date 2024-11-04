import { test, expect } from '@playwright/test';

test('user can go to the top page', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByText('ダイエット成功のための契約を結ぶ')).toBeVisible();
});