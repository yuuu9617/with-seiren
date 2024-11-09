import { test, expect } from '@playwright/test';
import { db } from '~/server/db';

test.beforeEach(async () => {
    try {
        await db.weightLossCommitment.deleteMany();
        await db.user.deleteMany();
        console.log('deleted all data');

        const userId = 'cm3a3lk0r000208kz7mohaz0v';
        await db.user.create({
            data: {
                id: userId,
                name: 'テストユーザー',
                email: 'testuser@example.com',
                emailVerified: new Date(),
                image: 'https://example.com/image.png',
            },
        });
        console.log('user created');

        const commitmentId = 'cm3a45t2x000008mmh408ghun';
        await db.weightLossCommitment.create({
            data: {
                id: commitmentId,
                currentWeight: 70,
                currentHeight: 170,
                targetWeight: 66,
                daysToAchieve: 28,
                startDay: new Date(),
                reportingDays: ['MONDAY'],
                successfulPeriods: 1,
                unsuccessfulPeriods: 3,
                userId: userId,
            },
        });
        console.log('commitment created');
    } catch (error) {
        console.error('data creation failed', error);
    }
});

test('user can view commitment detail', async ({ page }) => {
  await page.goto('/commitment/cm3a45t2x000008mmh408ghun');
  await expect(page.getByRole('heading', { name: '減量プロジェクト' })).toBeVisible();
  await expect(page.getByText('私は、以下の目標を達成します：')).toBeVisible();
  await expect(page.getByText('4週間で4キロ減量')).toBeVisible();

  await expect(page.getByText('目標達成回数：')).toBeVisible();
  await expect(page.getByTestId('successfulPeriods')).toHaveText('1');
  await expect(page.getByText('目標未達回数：')).toBeVisible();
  await expect(page.getByTestId('unsuccessfulPeriods')).toHaveText('3');
  await expect(page.getByText('次のレポート期限:')).toBeVisible();
  await expect(page.getByText('11月16日')).toBeVisible();
  await expect(page.getByText('午前12:00 JST')).toBeVisible();
  await expect(page.getByText('今週の目標:')).toBeVisible();
  await expect(page.getByText('67 kg')).toBeVisible();
});
