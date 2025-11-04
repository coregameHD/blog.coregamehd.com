export function getPaginationNumbers(currentPage: number, totalPages: number, maxVisiblePages: number = 3): (number | '...')[] {
  if (totalPages <= 1) return [1];
  
  // If total pages is less than or equal to max visible pages + 3 (for first, last, and ellipsis)
  if (totalPages <= maxVisiblePages + 3) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const pages: (number | '...')[] = [];
  
  // Always show first page
  pages.push(1);

  // Calculate the range of pages to show near the current page
  let startPage = Math.max(2, currentPage - 1);
  let endPage = Math.min(totalPages - 1, currentPage + 1);
  
  // Adjust if we're near the start or end
  if (currentPage <= 3) {
    endPage = 4; // Show 1, 2, 3, 4, ..., last
  } else if (currentPage >= totalPages - 2) {
    startPage = totalPages - 3; // Show first, ..., last-3, last-2, last-1, last
  }

  // Add left ellipsis if needed
  if (startPage > 2) {
    pages.push('...');
  }

  // Add middle pages
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  // Add right ellipsis if needed
  if (endPage < totalPages - 1) {
    pages.push('...');
  }

  // Always show last 3 pages if we're near the end
  if (currentPage > totalPages - 3) {
    for (let i = Math.max(endPage + 1, totalPages - 2); i <= totalPages; i++) {
      if (!pages.includes(i)) {
        pages.push(i);
      }
    }
  } else if (!pages.includes(totalPages)) {
    // Otherwise just show the last page if not already included
    pages.push(totalPages);
  }

  return pages;
}
