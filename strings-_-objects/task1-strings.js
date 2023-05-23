function rmHtmlTags(str) {
    if (typeof str !== 'string') {
      throw new Error('Parameter must be a string');
    }
  
    const htmlTagRegex = /<[^>]*>/g;
    return str.replace(htmlTagRegex, '');
  }

  