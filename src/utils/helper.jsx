export const formatDate = (inputDateString) => {
    const originalDate = new Date(inputDateString);
  
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
  
    const day = originalDate.getUTCDate();
    const month = months[originalDate.getUTCMonth()];
    const year = originalDate.getUTCFullYear();
  
    const formattedDate = `${day} ${month}, ${year}`;
    return formattedDate;
  };

  const imageExtensions = [".jpg", ".jpeg", ".png", ".gif"];
  const documentExtensions = [".xls", ".xlsx"];

  export const isDocument = (fileName) => {
    const extension = fileName.slice(fileName.lastIndexOf("."));
    return documentExtensions.includes(extension.toLowerCase());
  };

  export const isImage = (fileName) => {
    const extension = fileName.slice(fileName.lastIndexOf("."));
    return imageExtensions.includes(extension.toLowerCase());
  };

  export const getNameWithoutExtension = (fileName) => {
    const extensionIndex = fileName.lastIndexOf('.');
    if (extensionIndex !== -1) {
      return fileName.substring(0, extensionIndex);
    }
    return fileName;
  };