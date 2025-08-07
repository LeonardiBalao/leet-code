public class Solution {
	// Method to find maximum profit from buying and selling stock once
	public int MaxProfit(int[] prices) {
		// Track the minimum price seen so far (best buy point)
		int minPrice = int.MaxValue;
		// Track the maximum profit achievable
		int maxProfit = 0;

		// Iterate through all stock prices
		foreach (int price in prices) {
			// Update minimum price if current price is lower (better buy opportunity)
			if (price < minPrice) {
				minPrice = price;
			}
			// Calculate profit if selling at current price and update max profit
			else if (price - minPrice > maxProfit) {
				maxProfit = price - minPrice;
			}
		}

		// Return the maximum profit possible
		return maxProfit;
	}
}