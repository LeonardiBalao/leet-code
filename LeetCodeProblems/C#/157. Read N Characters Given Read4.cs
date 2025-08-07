public class Solution : Reader4 {
	public int Read(char[] buf, int n) {
		// Track total characters copied and characters read in current chunk
		int copiedChars = 0, readChars = 4;
		// Temporary buffer to read 4 characters at a time
		char[] buf4 = new char[4];

		// Continue reading while we haven't reached n chars and last read was full (4 chars)
		while (copiedChars < n && readChars == 4) {
			// Read up to 4 characters from file
			readChars = Read4(buf4);

			// Copy characters from temp buffer to output buffer
			for (int i = 0; i < readChars; i++) {
				// Stop if we've already copied n characters
				if (copiedChars == n) return copiedChars;
				// Copy character from temp buffer to output buffer
				buf[copiedChars] = buf4[i];
				copiedChars++;
			}
		}

		// Return total number of characters successfully copied
		return copiedChars;
	}
}