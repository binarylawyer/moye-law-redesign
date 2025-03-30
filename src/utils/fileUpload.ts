
/**
 * Utility for handling file uploads in the application
 */

/**
 * Uploads a file to the local storage and returns a URL
 * This is a simplified version that stores files in local storage
 * In a production environment, you would use a proper storage service
 */
export const uploadFile = async (file: File): Promise<string> => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => {
      const url = reader.result as string;
      // Store in localStorage for persistence across page reloads
      const fileKey = `podcast-${Date.now()}-${file.name}`;
      localStorage.setItem(fileKey, url);
      console.log("File saved with key:", fileKey);
      resolve(fileKey);
    };
    reader.readAsDataURL(file);
  });
};

/**
 * Retrieves a file from local storage by its key
 */
export const getFileUrl = (fileKey: string): string | null => {
  const url = localStorage.getItem(fileKey);
  console.log(`Retrieved file for key ${fileKey}: ${url ? 'Found' : 'Not found'}`);
  return url;
};
