import { store } from '../src/shared/store/model/store';
import { expect, test } from '@playwright/test';

test('Should have todo list', async ({ page }) => {
	store.set({ userId: 1, userName: 'James Bond', todo: [] });
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'Todo' })).toBeVisible();
	await expect(page.locator('.todo-list')).toBeVisible();
});
